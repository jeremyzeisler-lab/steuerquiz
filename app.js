function setGlossarView(v){
  glossarView=v;
  const ga=document.getElementById('ga');
  if(ga)renderGlossar(ga);
}

function renderGlossar(a){
  a.innerHTML = `<div class="glossar-wrap">
  <div class="glossar-hero">
    <h2>📖 Steuer-Glossar & Merksätze</h2>
    <p>Fachbegriffe · Rechtsnormen · Prüfungswissen</p>
  </div>
  <div class="glossar-view-toggle">
    <button class="gvt-btn${glossarView==='glossar'?' active':''}" onclick="setGlossarView('glossar')">📖 Begriffe</button>
    <button class="gvt-btn${glossarView==='merksatz'?' active':''}" onclick="setGlossarView('merksatz')">📌 Merksätze</button>
  </div>
  ${glossarView==='glossar'?`
  <div class="glossar-search-wrap">
    <span class="glossar-search-icon">🔍</span>
    <input class="glossar-search" id="glossar-input" type="text" placeholder="Begriff suchen …" oninput="glossarSearch(this.value)" value="${glossarFilter}">
  </div>
  <div class="glossar-alpha" id="glossar-alpha-row"></div>
  <div id="glossar-list"></div>
  `:`<div id="glossar-merksatz-list"></div>`}
</div>`;
  if(glossarView==='glossar'){
    renderGlossarAlpha();
    renderGlossarEntries();
    if(glossarFilter) document.getElementById('glossar-input').focus();
  } else {
    renderMerksatz();
  }
}

function renderMerksatz(){
  const list=document.getElementById('glossar-merksatz-list');
  if(!list)return;
  list.innerHTML=MERKSATZ_DATA.map(cat=>`
    <div class="merk-cat">
      <div class="merk-cat-head" style="background:${cat.color}">
        <span>${cat.icon}</span>
        <span>${cat.cat}</span>
        <span class="merk-cat-count">${cat.rules.length} Regeln</span>
      </div>
      <div class="merk-rules">
        ${cat.rules.map(r=>`
          <div class="merk-rule">
            <div class="merk-rule-head">
              <span class="merk-rule-title">${r.title}</span>
              <span class="merk-norm">${r.norm}</span>
            </div>
            <div class="merk-rule-text">${r.rule}</div>
            ${r.hint?`<div class="merk-hint">💡 ${r.hint}</div>`:''}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function glossarSearch(val){
  glossarFilter = val.toLowerCase();
  glossarAlpha = '';
  renderGlossarAlpha();
  renderGlossarEntries();
}

function glossarAlphaFilter(letter){
  glossarAlpha = glossarAlpha === letter ? '' : letter;
  glossarFilter = '';
  const inp = document.getElementById('glossar-input');
  if(inp) inp.value = '';
  renderGlossarAlpha();
  renderGlossarEntries();
}

function renderGlossarAlpha(){
  const row = document.getElementById('glossar-alpha-row');
  if(!row) return;
  const letters = [...new Set(GLOSSAR_DATA.map(e => e.term[0].toUpperCase()))].sort();
  const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  row.innerHTML = allLetters.map(l => {
    const exists = letters.includes(l);
    const active = glossarAlpha === l ? ' active' : '';
    const dis = !exists ? ' disabled' : '';
    return `<button class="alpha-btn${active}${dis}" onclick="glossarAlphaFilter('${l}')">${l}</button>`;
  }).join('');
}

function renderGlossarEntries(){
  const list = document.getElementById('glossar-list');
  if(!list) return;
  let data = GLOSSAR_DATA;
  if(glossarFilter) {
    data = data.filter(e => e.term.toLowerCase().includes(glossarFilter) || e.def.toLowerCase().includes(glossarFilter));
  } else if(glossarAlpha) {
    data = data.filter(e => e.term[0].toUpperCase() === glossarAlpha);
  }
  if(data.length === 0){
    list.innerHTML = '<div class="glossar-empty">🔍 Kein Begriff gefunden.<br>Versuch einen anderen Suchbegriff.</div>';
    return;
  }
  // Group by first letter
  const grouped = {};
  data.forEach(e => {
    const l = e.term[0].toUpperCase();
    if(!grouped[l]) grouped[l] = [];
    grouped[l].push(e);
  });
  list.innerHTML = Object.keys(grouped).sort().map(letter => `
    <div class="glossar-letter-group">
      <div class="glossar-letter-head">${letter}</div>
      <div class="glossar-entries">
        ${grouped[letter].map(e => `
          <div class="glossar-entry">
            <div class="ge-term">${e.term}<span class="ge-norm">${e.norm}</span></div>
            <div class="ge-def">${e.def}</div>
            <div class="ge-example">${e.example}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Helper: compact progress bar for topic cards on Basics page
function catProgressBar(key){
  const s = catStats[key];
  if(!s || s.t === 0) return `<div style="font-size:10px;font-family:'Space Mono',monospace;color:#bbb;font-weight:700;margin-bottom:12px;letter-spacing:.5px">○ Noch keine Fragen beantwortet</div>`;
  const pct = Math.round(s.c / s.t * 100);
  const color = pct >= 75 ? 'var(--green)' : pct >= 40 ? '#ffd94a' : '#ff6b6b';
  const label = pct >= 75 ? '✓ Gut drauf!' : pct >= 40 ? '~ Im Aufbau' : '↑ Noch Luft nach oben';
  return `<div style="margin-bottom:12px">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px">
      <span style="font-size:10px;font-family:'Space Mono',monospace;font-weight:700;color:#999">${label}</span>
      <span style="font-size:10px;font-family:'Space Mono',monospace;font-weight:700;color:${color}">${pct}% · ${s.c}/${s.t} richtig</span>
    </div>
    <div style="height:6px;background:#e8ecf5;border-radius:100px;overflow:hidden">
      <div style="height:100%;width:${pct}%;background:${color};border-radius:100px"></div>
    </div>
  </div>`;
}

function renderMeinBereich(a){
  loadDailyData();
  initDailyChallenge();
  const sc = dailyStreak.count;
  const today = getTodayStr();
  const dailyDone = dailyState && dailyState.done && dailyState.date===today;
  const dailyScore = dailyDone ? dailyState.score : null;
  const dailyTotal = dailyDone ? dailyState.questions.length : null;

  // Overall stats
  const cats = ['est','ust','ao','bilanz','kurios','recht','daily'];
  let tc=0, ta=0;
  cats.forEach(c=>{ const s=catStats[c]; if(s){tc+=s.c;ta+=s.t;} });
  const ovPct = ta>0 ? Math.round(tc/ta*100) : 0;

  // Stats row
  const statsHtml = `<div class="mb-stats-row">
    <div class="mb-stat"><div class="mb-stat-num">${sc}</div><div class="mb-stat-lbl">🔥 Streak</div></div>
    <div class="mb-stat"><div class="mb-stat-num">${ta}</div><div class="mb-stat-lbl">Fragen</div></div>
    <div class="mb-stat"><div class="mb-stat-num" class="u-green">${ovPct}%</div><div class="mb-stat-lbl">Quote</div></div>
    <div class="mb-stat"><div class="mb-stat-num">${earnedBadges.length}</div><div class="mb-stat-lbl">🏅 Badges</div></div>
  </div>`;

  // Daily card
  let dailyCardHtml;
  if(dailyDone){
    const pct = Math.round(dailyScore/dailyTotal*100);
    const emoji = pct>=80?'🏆':pct>=57?'🎯':'📖';
    dailyCardHtml = `<div class="mb-daily-card" onclick="renderDailyResult(document.getElementById('ga'))">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <span style="font-size:11px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.4);letter-spacing:1.5px;text-transform:uppercase">📅 DAILY CHALLENGE</span>
        <span style="background:rgba(0,201,123,.3);border-radius:100px;padding:3px 10px;font-size:10px;color:#b7f5dc;font-weight:800">✅ Heute erledigt</span>
      </div>
      <div style="font-size:30px;font-weight:900;color:#fff;font-family:'Space Mono',monospace">${dailyScore} <span style="font-size:16px;color:rgba(255,255,255,.4)">/ ${dailyTotal} richtig</span></div>
      <div style="font-size:13px;color:rgba(255,255,255,.5);margin-top:4px">${emoji} ${pct}% · Streak: ${sc} 🔥 · Morgen wieder!</div>
    </div>`;
  } else {
    dailyCardHtml = `<div class="mb-daily-card" onclick="mode='daily';renderDaily(document.getElementById('ga'))">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <span style="font-size:11px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.4);letter-spacing:1.5px;text-transform:uppercase">📅 DAILY CHALLENGE</span>
        <span style="background:rgba(255,217,74,.2);border-radius:100px;padding:3px 10px;font-size:10px;color:var(--yellow);font-weight:800">Heute noch offen</span>
      </div>
      <div style="font-size:17px;font-weight:900;color:#fff;margin-bottom:6px">7 Fragen warten auf dich!</div>
      <div style="font-size:12px;color:rgba(255,255,255,.5);margin-bottom:12px">Streak: ${sc} 🔥 · täglich neue Fragen aus allen Kategorien</div>
      <div style="padding:12px;border-radius:12px;background:rgba(255,255,255,.12);text-align:center;font-weight:900;font-size:14px;color:#fff">▶ Jetzt starten</div>
    </div>`;
  }

  // Mastery cards
  const catDef = [
    {key:'est',label:'💼 ESt',mode:'est'},
    {key:'ust',label:'🛒 USt',mode:'ust'},
    {key:'ao',label:'⚖️ AO',mode:'ao'},
    {key:'bilanz',label:'📋 Bilanz',mode:'bilanz'},
    {key:'kurios',label:'🤯 Kurioses',mode:'kurios'},
    {key:'recht',label:'🏛️ Recht',mode:'recht'},
  ];

  const masteryHtml = catDef.map(c=>{
    const s = catStats[c.key];
    const pct = s&&s.t>0 ? Math.round(s.c/s.t*100) : -1;
    const clr = pct<0?'#e0e8f5':pct>=80?'var(--green)':pct>=50?'var(--cyan)':'var(--orange)';
    const label = pct<0?'–':pct+'%';
    const cls = pct<0?'untouched':pct>=80?'strong':'weak';
    return `<div class="mastery-card ${cls}" style="padding:12px">
      <div class="mc-header"><span class="mc-label">${c.label}</span><span class="mc-pct ${pct>=80?'strong':pct>=50?'mid':'weak'}">${label}</span></div>
      <div class="mc-bar"><div class="mc-bar-fill" style="width:${pct<0?0:pct}%;background:${clr}"></div></div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px">
        <span class="mc-stats">${s&&s.t>0?s.c+'/'+s.t:''}</span>
        <button class="mc-action" onclick="sw('${c.mode}')">${pct<0?'▶ Start':pct>=80?'🔁 Wdhl.':'🔥 Üben'}</button>
      </div>
    </div>`;
  }).join('');

  // Weak spots banner
  const weak = catDef.filter(c=>{const s=catStats[c.key];return s&&s.t>=5&&(s.c/s.t)<.5;});
  const weakBanner = weak.length>0
    ? `<div style="background:rgba(255,140,66,.1);border:2px solid rgba(255,140,66,.35);border-radius:14px;padding:14px;margin-bottom:14px">
        <div style="font-size:12px;font-weight:900;color:#8a4000;margin-bottom:8px">⚠️ Schwachstellen – hier üben!</div>
        ${weak.map(c=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid rgba(255,140,66,.12)">
          <span style="font-size:12px;font-weight:800;color:var(--navy)">${c.label}</span>
          <button onclick="sw('${c.mode}')" style="padding:4px 12px;border-radius:100px;border:2px solid var(--orange);background:rgba(255,140,66,.1);color:var(--orange);font-family:'Nunito',sans-serif;font-weight:800;font-size:11px;cursor:pointer">🔥 Jetzt</button>
        </div>`).join('')}
      </div>`
    : '';

  a.innerHTML = `<div class="basics">
    <div class="mb-hero">
      <h2>⭐ Mein Bereich</h2>
      <p>${new Date().toLocaleDateString('de-DE',{weekday:'long',day:'2-digit',month:'long',year:'numeric'})}</p>
    </div>
    ${statsHtml}
    <div class="mb-section-title">📅 Daily Challenge</div>
    ${dailyCardHtml}
    ${fehlerQueue.length > 0 ? `
    <div style="background:linear-gradient(135deg,#3a0010,#7a001e);border-radius:16px;padding:16px 18px;margin-bottom:14px;cursor:pointer;transition:all .2s" onclick="sw('fehler')" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
        <span style="font-size:10px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.4);letter-spacing:1.5px">🔁 FEHLERSPEICHER</span>
        <span style="background:rgba(255,77,109,.3);border:1px solid rgba(255,77,109,.6);border-radius:100px;padding:2px 10px;font-size:10px;color:#ff8fa8;font-weight:900;font-family:'Space Mono',monospace"><span id="mb-fehler-count">${fehlerQueue.length}</span> offen</span>
      </div>
      <div style="font-size:16px;font-weight:900;color:#fff;margin-bottom:4px">Fehler aufarbeiten</div>
      <div style="font-size:11px;color:rgba(255,255,255,.45)">Falsch beantwortete Fragen gezielt wiederholen</div>
      <div style="margin-top:10px;padding:9px;border-radius:10px;background:rgba(255,255,255,.12);text-align:center;font-weight:900;font-size:13px;color:#fff">🔁 Jetzt üben</div>
    </div>` : ''}
    ${weakBanner}
    <div class="mb-section-title">📊 Fortschritt im Überblick</div>
    <div style="background:var(--card-bg);border:1.5px solid var(--card-border);border-radius:var(--r-lg);padding:14px 16px 12px;margin-bottom:12px">
      ${(()=>{
        const chartH = 120, barW = 28, gap = 10;
        const total = catDef.length;
        const svgW = total * (barW + gap) - gap + 44;
        const bars = catDef.map((ct,i)=>{
          const s = catStats[ct.key];
          const p = s && s.t > 0 ? Math.round(s.c/s.t*100) : -1;
          const col = p < 0 ? '#dde5f5' : p >= 80 ? '#00c97b' : p >= 50 ? '#00c2e0' : '#ff8c42';
          const fillH = p < 0 ? 4 : Math.max(4, Math.round(p / 100 * chartH));
          const x = 36 + i * (barW + gap);
          const emoji = ct.label.split(' ')[0];
          const label = p < 0 ? '–' : p + '%';
          return `<g>
            <rect x="${x}" y="${chartH - fillH + 4}" width="${barW}" height="${fillH}" rx="4" fill="${col}" opacity="${p<0?'.35':'1'}"/>
            <text x="${x + barW/2}" y="${chartH - fillH}" text-anchor="middle" font-size="9" font-weight="800" fill="${col}" font-family="'Nunito',sans-serif" dy="-3">${label}</text>
            <text x="${x + barW/2}" y="${chartH + 18}" text-anchor="middle" font-size="11" font-family="'Nunito',sans-serif" fill="#888">${emoji}</text>
          </g>`;
        }).join('');
        const yTicks = [0,25,50,75,100].map(v=>{
          const y = chartH - Math.round(v/100*chartH) + 4;
          return `<line x1="32" x2="${svgW}" y1="${y}" y2="${y}" stroke="#e8edf8" stroke-width="1"/>
                  <text x="28" y="${y}" text-anchor="end" dominant-baseline="central" font-size="9" fill="#bbb" font-family="'Space Mono',monospace">${v}</text>`;
        }).join('');
        return `<svg width="100%" viewBox="0 0 ${svgW} ${chartH+30}" style="overflow:visible;display:block">
          ${yTicks}${bars}
        </svg>`;
      })()}
    </div>
    <div class="mb-section-title">📈 Lernstand</div>
    <div class="mastery-grid">${masteryHtml}</div>
    <div class="mb-section-title">🏅 Abzeichen</div>
    <div style="background:linear-gradient(135deg,rgba(255,217,74,.08),rgba(255,140,0,.04));border:2px solid rgba(255,217,74,.28);border-radius:16px;padding:16px;margin-bottom:10px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <span style="font-size:12px;font-weight:900;color:var(--navy)">${earnedBadges.length} / ${BADGES.length} freigeschaltet</span>
        <div style="width:100px;height:5px;background:#e0e8f5;border-radius:100px;overflow:hidden">
          <div style="height:100%;background:linear-gradient(90deg,var(--yellow),var(--orange));border-radius:100px;width:${Math.round(earnedBadges.length/BADGES.length*100)}%;transition:width .6s"></div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
        ${BADGES.map(b=>{
          const earned = earnedBadges.includes(b.id);
          return '<div style="text-align:center;padding:8px 4px;border-radius:10px;background:'+(earned?'rgba(255,217,74,.12)':'rgba(0,0,0,.03)')+';border:1px solid '+(earned?'rgba(255,217,74,.35)':'#e8ecf5')+'" title="'+b.name+': '+b.desc+'">'
            +'<div style="font-size:22px;'+(earned?'':'filter:grayscale(1);opacity:.25')+'">'+b.icon+'</div>'
            +'<div style="font-size:8px;font-weight:800;color:'+(earned?'var(--navy)':'#ccc')+';line-height:1.25;margin-top:3px">'+b.name+'</div>'
            +(earned?'<div style="font-size:7px;color:var(--green);font-weight:800;margin-top:2px">✓</div>':'')
            +'</div>';
        }).join('')}
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-top:4px;margin-bottom:90px">
      <button onclick="confirmResetProgress()" style="flex:0 0 auto;padding:10px 14px;border-radius:12px;border:2px solid rgba(255,77,109,.3);background:rgba(255,77,109,.06);color:#ff4d6d;font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;cursor:pointer" title="Lernfortschritt zurücksetzen">🗑️ Zurücksetzen</button>
    </div>
  </div>`;
}

function confirmResetProgress(){
  showConfirm('🗑️','Lernfortschritt zurücksetzen?','Dein gesamter Lernstand wird gelöscht. Abzeichen bleiben erhalten.',()=>{
    catStats={};saveCatStats();renderMeinBereich(document.getElementById('ga'));
  });
}
let _confirmCallback = null;
function showConfirm(icon, title, msg, cb){
  _confirmCallback = cb;
  document.getElementById('confirm-icon').textContent = icon;
  document.getElementById('confirm-title').textContent = title;
  document.getElementById('confirm-msg').textContent = msg;
  const m = document.getElementById('confirm-modal');
  m.style.display = 'flex';
}
function closeConfirm(ok){
  document.getElementById('confirm-modal').style.display = 'none';
  if(ok && _confirmCallback) _confirmCallback();
  _confirmCallback = null;
}




// ===== DOZENTEN-PASSWORTSCHUTZ =====
const ETAG_PW_HASH = 'c7148afa7d8c314fe0122fbbbb79e7aca3e34598d28e6e11ad07713e2ad4fc50';
const ETAG_SESSION_KEY = 'etagUnlocked_s';

async function etagHashInput(str){
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

function etagIsUnlocked(){
  return sessionStorage.getItem(ETAG_SESSION_KEY) === '1';
}

function etagShowLock(){
  const old = document.getElementById('etag-lock-overlay');
  if(old) old.remove();
  const el = document.createElement('div');
  el.id = 'etag-lock-overlay';
  el.className = 'etag-lock-overlay';
  el.innerHTML = `
    <div class="etag-lock-box">
      <div class="etag-lock-icon">🔒</div>
      <div class="etag-lock-title">Dozenten-Bereich</div>
      <div class="etag-lock-sub">Der Einführungstag ist ein moderiertes Format für den Unterricht.<br>Für Schüler: Ihr könnt alle anderen Bereiche frei nutzen!<br><br>Lehrkräfte: Passwort eingeben.</div>
      <input class="etag-lock-input" id="etag-pw-input" type="password" placeholder="••••••••••••" autocomplete="off" maxlength="30"
        onkeydown="if(event.key==='Enter')etagCheckPw()"
        oninput="document.getElementById('etag-pw-err').textContent=''">
      <div class="etag-lock-error" id="etag-pw-err"></div>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:4px">
        <button class="etag-lock-btn" style="flex:1;max-width:160px;background:rgba(255,255,255,.12);font-size:13px" onclick="document.getElementById('etag-lock-overlay').remove()">← Zurück</button>
        <button class="etag-lock-btn" style="flex:1;max-width:160px" onclick="etagCheckPw()">Eintreten →</button>
      </div>
      <div class="etag-lock-hint">Passwort erhalten Sie von der Senatsverwaltung für Finanzen.</div>
    </div>`;
  document.body.appendChild(el);
  setTimeout(()=>{ const inp=document.getElementById('etag-pw-input'); if(inp) inp.focus(); }, 100);
}

function swEinfuehrung(){
  if(!etagIsUnlocked()){ etagShowLock(); return; }
  mode='einfuehrung';
  closeDrawer();
  window.scrollTo({top:0,behavior:'smooth'});
  document.querySelectorAll('.mode-tab').forEach(t=>t.classList.remove('active'));
  const tab=document.getElementById('tab-einfuehrung');
  if(tab) tab.classList.add('active');
  const ga=document.getElementById('ga');
  if(ga){ ga.classList.add('etag-mode'); }
  setTopicHeader('einfuehrung');
  render();
}

async function etagCheckPw(){
  const inp = document.getElementById('etag-pw-input');
  const err = document.getElementById('etag-pw-err');
  if(!inp) return;
  const hash = await etagHashInput(inp.value.trim());
  if(hash === ETAG_PW_HASH){
    sessionStorage.setItem(ETAG_SESSION_KEY, '1');
    const overlay = document.getElementById('etag-lock-overlay');
    if(overlay) overlay.remove();
    swEinfuehrung();
  } else {
    inp.classList.add('error');
    err.textContent = 'Falsches Passwort – bitte erneut versuchen.';
    inp.value = '';
    setTimeout(()=>inp.classList.remove('error'), 400);
  }
}

// einfuehrung gating handled via swEinfuehrung()


// ===== STEUERAUFKOMMEN RATESPIEL v2 =====
const AUFK_ITEMS = [
  { id:'ust',  label:'Umsatzsteuer',       icon:'🛒', mrd:302.1, pct:31.9, color:'#ff8c42', info:'Jeder Einkauf im Supermarkt – 19% oder 7%' },
  { id:'lst',  label:'Lohnsteuer',          icon:'💼', mrd:248.9, pct:26.3, color:'#1a3a8f', info:'Wird direkt vom Gehalt abgezogen' },
  { id:'gwst', label:'Gewerbesteuer',       icon:'🏭', mrd:75.3,  pct:7.9,  color:'#7b5ea7', info:'Zahlen Unternehmen an die Gemeinde' },
  { id:'est',  label:'Einkommensteuer',     icon:'📊', mrd:74.0,  pct:7.8,  color:'#2196f3', info:'Veranlagte ESt – Selbständige, Vermieter etc.' },
  { id:'kst',  label:'Körperschaftsteuer',  icon:'🏢', mrd:40.0,  pct:4.2,  color:'#00bcd4', info:'Die „Einkommensteuer" für Kapitalgesellschaften' },
  { id:'eng',  label:'Energiesteuer',       icon:'⚡', mrd:35.1,  pct:3.7,  color:'#4caf50', info:'Auf Benzin, Diesel, Erdgas, Heizöl' },
];
const AUFK_TOTAL = 947.7; // Mrd. € (2024)

let aufkStep = 0; // 0=schätzen, 1=ranking, 2=ergebnis
let aufkTotalGuess = 500;
let aufkRankGuesses = []; // user's ranking order (ids)
let aufkDone = false;

function renderAufkGame(){
  const wrap = document.getElementById('aufk-game-wrap') || document.getElementById('aufk-game-container');
  if(!wrap) return;

  if(aufkStep === 0) renderAufkStep1(wrap);
  else if(aufkStep === 1) renderAufkStep2(wrap);
  else renderAufkResult(wrap);
}

// Step 1: Guess the total
function renderAufkStep1(wrap){
  wrap.innerHTML = `<div class="aufk-game">
    <div style="font-size:13px;font-weight:900;color:var(--navy);margin-bottom:12px;display:flex;align-items:center;gap:6px">
      🎮 Steueraufkommen-Quiz <span style="font-size:10px;font-family:'Space Mono',monospace;color:#888;font-weight:700">Schritt 1/2</span>
    </div>
    <div class="aufk-slider-wrap">
      <div class="aufk-slider-q">💰 Wie viel Steuern nimmt Deutschland pro Jahr insgesamt ein? (in Mrd. €)</div>
      <div class="aufk-slider-row">
        <span style="font-size:10px;color:#aaa;font-family:'Space Mono',monospace">100</span>
        <input type="range" class="aufk-slider" min="100" max="1500" step="10" value="${aufkTotalGuess}" oninput="aufkTotalGuess=+this.value;document.getElementById('aufk-val-disp').textContent=this.value+' Mrd. €'">
        <span id="aufk-val-disp" class="aufk-slider-val">${aufkTotalGuess} Mrd. €</span>
        <span style="font-size:10px;color:#aaa;font-family:'Space Mono',monospace">1.500</span>
      </div>
      <div style="font-size:10px;color:#bbb;font-weight:700;text-align:center;margin-top:6px">Schiebe den Regler auf deine Schätzung</div>
    </div>
    <button class="aufk-check-btn" onclick="aufkStep=1;renderAufkGame()">Meine Schätzung abgeben →</button>
  </div>`;
}

// Step 2: Rank the top 3
function renderAufkStep2(wrap){
  if(!aufkRankGuesses.length) aufkRankGuesses = [];
  const remaining = AUFK_ITEMS.filter(it=>!aufkRankGuesses.includes(it.id));
  const placed = aufkRankGuesses.map((id,i)=>{
    const it = AUFK_ITEMS.find(x=>x.id===id);
    return `<div style="display:flex;align-items:center;gap:8px;padding:8px 12px;border-radius:10px;background:rgba(26,58,143,.06);border:1.5px solid rgba(26,58,143,.15);margin-bottom:6px">
      <span style="font-size:14px;font-weight:900;color:var(--blue);font-family:'Space Mono',monospace;min-width:22px">${i+1}.</span>
      <span style="font-size:13px;font-weight:800;color:var(--navy)">${it.icon} ${it.label}</span>
      <button onclick="aufkRemoveRank(${i})" style="margin-left:auto;background:rgba(255,77,109,.1);border:1px solid rgba(255,77,109,.25);color:var(--red);border-radius:6px;padding:2px 8px;font-size:10px;font-weight:800;font-family:'Nunito',sans-serif;cursor:pointer">✕</button>
    </div>`;
  }).join('');

  const pool = remaining.map(it=>{
    return `<button onclick="aufkAddRank('${it.id}')" style="padding:8px 12px;border-radius:10px;border:2px solid #dde5f5;background:#f8faff;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;cursor:pointer;transition:all .15s;display:flex;align-items:center;gap:6px" onmouseover="this.style.borderColor='var(--cyan)'" onmouseout="this.style.borderColor='#dde5f5'">${it.icon} ${it.label}</button>`;
  }).join('');

  const allPlaced = aufkRankGuesses.length === AUFK_ITEMS.length;

  wrap.innerHTML = `<div class="aufk-game">
    <div style="font-size:13px;font-weight:900;color:var(--navy);margin-bottom:4px;display:flex;align-items:center;gap:6px">
      📊 Sortiere nach Aufkommen <span style="font-size:10px;font-family:'Space Mono',monospace;color:#888;font-weight:700">Schritt 2/2</span>
    </div>
    <div style="font-size:11px;color:#888;font-weight:700;margin-bottom:12px">Tippe die Steuerarten in der Reihenfolge von höchstem zu niedrigstem Aufkommen</div>
    <div style="margin-bottom:12px">${placed || '<div style="padding:10px;text-align:center;font-size:11px;color:#ccc;font-weight:700;border:2px dashed #e0e8f5;border-radius:10px">Tippe unten auf eine Steuerart für Platz 1</div>'}</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px">${pool}</div>
    ${allPlaced ? '<button class="aufk-check-btn" onclick="aufkStep=2;renderAufkGame()">Auswerten →</button>' : ''}
  </div>`;
}

function aufkAddRank(id){
  if(!aufkRankGuesses.includes(id)) aufkRankGuesses.push(id);
  renderAufkGame();
}
function aufkRemoveRank(i){
  aufkRankGuesses.splice(i,1);
  renderAufkGame();
}

// Step 3: Result – show everything
function renderAufkResult(wrap){
  aufkDone = true;
  const diff = Math.abs(aufkTotalGuess - AUFK_TOTAL);
  const diffPct = Math.round(diff / AUFK_TOTAL * 100);
  const cls = diffPct <= 10 ? 'good' : diffPct <= 25 ? 'ok' : 'off';
  const emoji = diffPct <= 10 ? '🎯' : diffPct <= 25 ? '👍' : '😮';
  const msg = diffPct <= 10
    ? `Nur ${Math.round(diff)} Mrd. daneben – du hast ein gutes Gefühl für Staatsfinanzen!`
    : diffPct <= 25
    ? `${Math.round(diff)} Mrd. € daneben – gar nicht schlecht für eine Schätzung!`
    : `${Math.round(diff)} Mrd. € daneben – die Zahl überrascht die meisten!`;

  // Ranking score
  const correctOrder = [...AUFK_ITEMS].sort((a,b)=>b.mrd-a.mrd).map(x=>x.id);
  let rankScore = 0;
  aufkRankGuesses.forEach((id,i)=>{ if(id === correctOrder[i]) rankScore++; });

  const maxW = AUFK_ITEMS[0].mrd; // largest for scaling
  const bars = [...AUFK_ITEMS].sort((a,b)=>b.mrd-a.mrd).map((it,i)=>{
    const w = Math.round(it.mrd / maxW * 100);
    const userPos = aufkRankGuesses.indexOf(it.id);
    const posOk = userPos === i;
    return `<div class="aufk-reveal-bar">
      <span style="font-size:12px;min-width:20px;text-align:center;font-weight:900;color:${posOk?'var(--green)':'var(--red)'};font-family:'Space Mono',monospace">${posOk?'✓':'✗'}</span>
      <span class="aufk-reveal-name">${it.icon} ${it.label}</span>
      <div style="flex:1;position:relative;height:28px;background:#f0f4ff;border-radius:8px;overflow:hidden">
        <div class="aufk-reveal-fill" style="width:${w}%;background:${it.color};position:absolute;inset:0;border-radius:8px">
          <span class="aufk-reveal-label">${it.mrd.toLocaleString('de-DE')} Mrd. €</span>
        </div>
      </div>
      <span class="aufk-reveal-info">${it.pct} %</span>
    </div>`;
  }).join('');

  wrap.innerHTML = `<div class="aufk-game">
    <div class="aufk-total-box">
      <div style="font-size:10px;font-family:'Space Mono',monospace;letter-spacing:2px;color:rgba(255,255,255,.4);text-transform:uppercase;margin-bottom:6px">Gesamtes Steueraufkommen 2024</div>
      <div class="aufk-total-num">${AUFK_TOTAL.toLocaleString('de-DE')} Mrd. €</div>
      <div class="aufk-total-lbl">Quelle: Statistisches Bundesamt</div>
    </div>

    <div class="aufk-guess-result ${cls}">
      ${emoji} <b>Deine Schätzung: ${aufkTotalGuess} Mrd. €</b> – ${msg}
    </div>

    <div style="font-size:13px;font-weight:900;color:var(--navy);margin-bottom:4px">📊 Verteilung der wichtigsten Steuerarten</div>
    <div style="font-size:11px;color:#888;font-weight:700;margin-bottom:12px">Dein Ranking: ${rankScore}/${AUFK_ITEMS.length} richtig sortiert</div>
    ${bars}

    <div class="aufk-fun-fact">
      💡 <b>Wusstest du?</b> Allein Lohn- und Umsatzsteuer machen zusammen über <b>58 %</b> aller Steuereinnahmen aus – das sind <b>551 Mrd. €</b>.
      Fast jeder Einkauf und jedes Gehalt finanziert direkt den Staatshaushalt.
      Die restlichen ~42 % verteilen sich auf über 40 weitere Steuerarten.
    </div>

    <button onclick="aufkReset()" style="margin-top:14px;width:100%;padding:10px;border-radius:11px;border:2px solid #dde5f5;background:#f8faff;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;cursor:pointer;transition:all .15s" onmouseover="this.style.borderColor='var(--cyan)'" onmouseout="this.style.borderColor='#dde5f5'">↺ Nochmal spielen</button>
  </div>`;
}

function aufkReset(){
  aufkStep = 0;
  aufkTotalGuess = 500;
  aufkRankGuesses = [];
  aufkDone = false;
  renderAufkGame();
}

// Auto-init when section opens
function toggleSec(id){
  const s = document.getElementById(id);
  if(!s) return;
  s.classList.toggle('open');
  if(id==='sec-aufkommen' && s.classList.contains('open')){
    setTimeout(()=>{
      const c = document.getElementById('aufk-game-container');
      if(c && c.innerHTML.trim()==='') renderAufkGame();
    }, 60);
  }
}
// Also init if already open on page load
document.addEventListener('DOMContentLoaded', ()=>{ setTimeout(renderAufkGame, 200); });


// ==================== EINFÜHRUNGSTAG ====================
const ETAG_KEY = 'etagState_v1';

const ETAG_PHASES = [
  {
    id:'welcome', num:1, title:'Eisbrecher', icon:'🎮', duration:8,
    color:'linear-gradient(135deg,#0d2b5e,#1a4a8f)',
    sub:'8 Min · Ankommen & Ratespiel',
    moderator:{
      text:'Handy raus! Alle tippen gleichzeitig auf ihre Antwort. Erst danach auflösen. Das erzeugt Energie und Aha-Momente.',
      punkte:['📱 „Alle: Handy raus, Seite aufrufen!"','🎮 „Wir starten mit einem kleinen Ratespiel"','✋ „Tippt auf eure Antwort – nicht abgucken!"','😮 Nach jeder Auflösung: kurz staunen lassen']
    },
    content: `
<div class="etag-card">
  <h3>👋 Willkommen!</h3>
  <p>Heute bekommt ihr einen echten Einblick in Steuern und den Beruf der Finanzverwaltung. Aber erstmal: <b>ein kleines Ratespiel!</b> Tippt auf eure Antwort.</p>
</div>
<div class="etag-card">
  <h3>🎮 Frage 1: Wie viel Geld nimmt der Staat pro Jahr durch Steuern ein?</h3>
  <div id="etag-ice-1" style="margin-top:8px"></div>
</div>
<div class="etag-card" id="etag-ice-2-wrap" style="display:none">
  <h3>🎮 Frage 2: Wie viele verschiedene Steuerarten gibt es in Deutschland?</h3>
  <div id="etag-ice-2" style="margin-top:8px"></div>
</div>
<div class="etag-card" id="etag-ice-3-wrap" style="display:none">
  <h3>🎮 Frage 3: Wie viel Prozent vom Gehalt gehen an Steuern & Abgaben?</h3>
  <p style="font-size:11px;color:rgba(255,255,255,.5)">Angenommen: 3.000 € brutto, ledig, keine Kinder</p>
  <div id="etag-ice-3" style="margin-top:8px"></div>
</div>
<div id="etag-ice-summary" style="display:none"></div>`,
    onShow: 'initEtagIcebreaker()'
  },
  {
    id:'steuern', num:2, title:'Wer zahlt Steuern?', icon:'⚖️', duration:10,
    color:'linear-gradient(135deg,#0a2040,#1a3a8f)',
    sub:'10 Min · 4 Fälle – Ihr entscheidet!',
    moderator:{
      text:'Alle tippen gleichzeitig Ja oder Nein. Danach Handzeichen: „Wer hatte richtig?" Dann kurz erklären warum.',
      punkte:['✋ „Jeder tippt – erst danach reden wir"','😮 Mia (Baby) überrascht immer!','💬 Nach jedem Fall: „Warum ist das so?"','🎯 Die Grundregel merken: Wohnsitz = Steuerpflicht']
    },
    content: `
<div class="etag-card">
  <h3>⚖️ Die große Frage: Muss diese Person Steuern zahlen?</h3>
  <p>Für jede Person gilt: Tippt auf <b>Ja</b> oder <b>Nein</b>. Die Antworten überraschen!</p>
</div>
<div id="etag-para1-block"></div>`,
    onShow: 'renderEtagPara1()'
  },
  {
    id:'influencer', num:3, title:'Influencer & Steuern', icon:'📱', duration:12,
    color:'linear-gradient(135deg,#2d0a4e,#5c1a8a)',
    sub:'12 Min · Ein echter Fall · Überraschungen garantiert',
    moderator:{
      text:'Dieser Fall trifft die Schüler direkt – jeder kennt Influencer. Ziel: zeigen, dass Steuern nicht nur Lohnzettel betreffen, sondern jeden der Geld verdient.',
      punkte:['📱 „Stellt euch vor, ihr habt 200.000 Follower – müsst ihr dann Steuern zahlen?"','🤔 Erst abstimmen lassen – dann gemeinsam auflösen','💡 Schritt für Schritt mit echten Zahlen durchgehen','🎁 Bonus-Frage: Was ist ein Gewerbeschein? Was kann Sofia absetzen?']
    },
    content:`<div class="etag-card">
  <h3>📱 Der Fall: Sofia, 19, Lifestyle-Influencerin</h3>
  <p>Sofia postet seit 2 Jahren auf Instagram und TikTok. Sie hat <b>200.000 Follower</b>. Dieses Jahr hat sie eingenommen:</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0">
    <div class="hl" class="u-p12">💰 <b>Sponsoring</b><br><span style="font-family:'Space Mono',monospace;color:var(--yellow);font-size:15px">15.000 €</span></div>
    <div class="hl" class="u-p12">🎁 <b>Produktgeschenke</b><br><span style="font-family:'Space Mono',monospace;color:var(--yellow);font-size:15px">3.200 €</span></div>
    <div class="hl" class="u-p12">🔗 <b>Affiliate-Links</b><br><span style="font-family:'Space Mono',monospace;color:var(--yellow);font-size:15px">2.400 €</span></div>
    <div class="hl" class="u-p12">🎤 <b>Brand-Events</b><br><span style="font-family:'Space Mono',monospace;color:var(--yellow);font-size:15px">1.800 €</span></div>
  </div>
  <p>Sofia denkt: <em>„Das ist doch nur mein Hobby – keine Steuern, oder?"</em></p>
  <div id="etag-sofia-vote" style="display:flex;gap:10px;margin:12px 0;flex-wrap:wrap"></div>
  <div id="etag-sofia-answer" style="display:none"></div>
</div>
<div class="etag-card" id="etag-influencer-details" style="display:none">
  <h3>💡 Die Wahrheit – Schritt für Schritt</h3>
  <div class="hl">🏛️ <b>Sobald man regelmäßig Geld mit Inhalten verdient, ist man gewerblich tätig.</b> Kein „Hobby-Freibetrag".</div>
  <div style="display:flex;flex-direction:column;gap:8px;margin:12px 0">
    <div class="hl" style="padding:11px">📋 <b>1. Gewerbeanmeldung</b> beim Ordnungsamt – ca. 20–40 €</div>
    <div class="hl" style="padding:11px">🔢 <b>2. Steuernummer</b> beim Finanzamt – kostenlos</div>
    <div class="hl" style="background:rgba(255,217,74,.06);border-color:rgba(255,217,74,.25);padding:11px">💶 <b>3. Einkommensteuer</b> auf den Gewinn: Einnahmen minus Betriebsausgaben</div>
    <div class="hl" style="background:rgba(255,77,109,.06);border-color:rgba(255,77,109,.25);padding:11px">⚠️ <b>Geschenke = Einnahmen!</b> Die 3.200 € Produktgeschenke sind steuerpflichtig.</div>
  </div>
</div>
<div class="etag-card" id="etag-influencer-rechner" style="display:none">
  <h3>🧮 Sofias Steuer – vereinfacht</h3>
  <div style="background:rgba(13,27,62,.6);border:2px solid rgba(255,255,255,.12);border-radius:12px;padding:14px;font-family:'Space Mono',monospace;font-size:12px;line-height:2.1">
    <div>Einnahmen gesamt: <span class="u-yellow">22.400 €</span></div>
    <div>– Betriebsausgaben (Kamera, Apps …): <span style="color:var(--red)">– 4.000 €</span></div>
    <div style="border-top:1px solid rgba(255,255,255,.15);padding-top:8px">= Gewinn: <span class="u-green">18.400 €</span></div>
    <div>– Grundfreibetrag 2025: <span style="color:rgba(255,255,255,.4)">– 12.096 €</span></div>
    <div style="border-top:1px solid rgba(255,255,255,.15);padding-top:8px">= Zu versteuern: <span class="u-yellow">6.304 €</span></div>
    <div style="margin-top:8px;color:var(--cyan)">→ Einkommensteuer: ca. <b>820 €</b></div>
  </div>
  <div class="hl" style="margin-top:12px">💬 <b>Diskussion:</b> Was könnte Sofia absetzen? (Handy, Kamera, Licht, Reisen für Content …)</div>
</div>`,
    onShow:`(function(){
      var v=document.getElementById('etag-sofia-vote');
      if(v&&!v.dataset.done){
        v.innerHTML='<button onclick="sofiaVote(true)" style="flex:1;padding:13px;border-radius:12px;border:2px solid rgba(255,217,74,.3);background:rgba(255,217,74,.07);color:var(--yellow);font-family:Nunito,sans-serif;font-weight:900;font-size:14px;cursor:pointer">✋ Ja, Steuern!</button><button onclick="sofiaVote(false)" style="flex:1;padding:13px;border-radius:12px;border:2px solid rgba(0,201,123,.3);background:rgba(0,201,123,.07);color:#00c97b;font-family:Nunito,sans-serif;font-weight:900;font-size:14px;cursor:pointer">🙅 Nein, Hobby</button>';
      }
    })()`
  },
  {
    id:'fall', num:4, title:'Ein echter Steuerfall', icon:'🧾', duration:15,
    color:'linear-gradient(135deg,#0d2b5e,#0a3a2a)',
    sub:'15 Min · Lenas erster Lohnzettel + Selbstrechner',
    moderator:{
      text:'Dieser Praxisfall zeigt, wie Steuern im Alltag funktionieren. Lest ihn gemeinsam – dann lässt die Schüler ihren eigenen Schulweg eingeben.',
      punkte:['📖 Lest Lenas Situation laut vor – oder lasst einen Schüler vorlesen','🤔 Fragt: „Wo sind die 177 € geblieben?"','🧮 Schulweg-Rechner: Jeder tippt seine Kilometer ein','📬 Diskussion: Muss Lena eine Steuererklärung machen?']
    },
    content: `
<div class="etag-card">
  <h3>👩‍🎓 Lena, 18 Jahre, erste Ausbildungsstelle</h3>
  <p>Lena fängt ihre Ausbildung an. Ihr Bruttolohn: <b>850 €/Monat</b>. Auf ihrer ersten Lohnabrechnung steht: Netto <b>673 €</b>.</p>
  <p>Lena ist verwirrt: <em>„Ich verdiene 850 € – warum bekomme ich nur 673 €?"</em></p>
  <div class="hl">🧮 <b>Was passiert mit den 177 €?</b><br>
  Sie gehen an die <b>Sozialversicherung</b> – das ist wie eine Pflicht-Versicherung für alle Arbeitnehmer:<br>
  · <b>Krankenversicherung</b> – damit du zum Arzt kannst<br>
  · <b>Rentenversicherung</b> – damit du im Alter Geld bekommst<br>
  · <b>Pflegeversicherung</b> – falls du mal gepflegt werden musst<br>
  · <b>Arbeitslosenversicherung</b> – falls du mal den Job verlierst<br><br>
  Zusammen sind das ca. 20 % vom Bruttolohn. <b>Lohnsteuer zahlt Lena noch keine</b> – denn wer wenig verdient, muss keine Einkommensteuer zahlen.</div>
</div>
<div class="etag-card">
  <h3>🧮 Rechne selbst! Was wäre dein Schulweg wert?</h3>
  <p>Wusstest du: Wenn du später arbeitest, kannst du deinen <b>Arbeitsweg von der Steuer absetzen</b> – das heißt, du bekommst einen Teil davon zurück. Wie weit wäre dein Schulweg?</p>
  <div style="display:flex;align-items:center;gap:10px;margin:12px 0">
    <label style="font-size:13px;font-weight:800;color:#fff;white-space:nowrap">Dein Schulweg:</label>
    <input type="number" id="etag-km-input" min="1" max="200" value="15" style="width:70px;padding:10px 8px;border-radius:10px;border:2px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:#fff;font-family:'Space Mono',monospace;font-size:16px;text-align:center;outline:none" oninput="etagCalcFahrt()">
    <span style="font-size:13px;font-weight:800;color:rgba(255,255,255,.5)">km (einfach)</span>
  </div>
  <div id="etag-fahrt-result" style="background:rgba(0,201,123,.1);border:2px solid rgba(0,201,123,.25);border-radius:12px;padding:14px;margin-top:8px"></div>
</div>
<div class="etag-card">
  <h3>📬 Was ist eine Steuererklärung?</h3>
  <p>Eine Steuererklärung ist wie eine <b>Abrechnung mit dem Staat</b>: Du sagst dem Finanzamt, was du verdient hast und welche Ausgaben du hattest. Oft bekommst du danach <b>Geld zurück</b> – im Schnitt ca. 1.000 € pro Jahr!</p>
  <div class="hl">💡 <b>Wer zieht die Steuer ab?</b> Nicht du – sondern dein <b>Arbeitgeber</b>. Er rechnet dein Gehalt aus, zieht Steuern und Sozialversicherung ab und überweist beides: Dein Netto an dich, den Rest ans Finanzamt. Du musst dich um nichts kümmern.</div>
</div>
<div class="etag-card">
  <h3>🎯 Diskussionsfrage für die Gruppe</h3>
  <p><b>Muss Lena eine Steuererklärung abgeben?</b></p>
  <div id="etag-lena-vote" style="display:flex;gap:10px;margin:10px 0"></div>
  <div id="etag-lena-answer" style="display:none"></div>
</div>`,
    onShow: `(function(){
      etagCalcFahrt();
      var v=document.getElementById('etag-lena-vote');
      if(v&&!v.dataset.done){
        v.innerHTML='<button onclick="etagLenaVote(true)" style="flex:1;padding:14px;border-radius:12px;border:2px solid rgba(255,77,109,.3);background:rgba(255,77,109,.08);color:#ff4d6d;font-family:Nunito,sans-serif;font-weight:900;font-size:15px;cursor:pointer">Ja, sie muss</button><button onclick="etagLenaVote(false)" style="flex:1;padding:14px;border-radius:12px;border:2px solid rgba(0,201,123,.3);background:rgba(0,201,123,.08);color:#00c97b;font-family:Nunito,sans-serif;font-weight:900;font-size:15px;cursor:pointer">Nein, freiwillig</button>';
      }
    })()`
  },
  {
    id:'quiz', num:5, title:'Gruppenquiz', icon:'🎯', duration:10,
    color:'linear-gradient(135deg,#1a0530,#3d0a6b)',
    sub:'10 Min · 8 Fragen · Alle tippen gleichzeitig!',
    moderator:{
      text:'Jetzt wird es lustig! Alle tippen gleichzeitig – nicht abgucken. Nach jeder Frage: Auflösung und kurze Erklärung.',
      punkte:['▶ „Alle gleichzeitig antworten – 3, 2, 1, los!"','⏸ Nach jeder Frage: Kurz erklären','✋ „Hände hoch, wer hatte richtig!"','🏆 Am Ende: Wer hat die meisten? Applaus!']
    },
    content:'<div id="etag-quiz-block"></div>',
    onShow:'renderEtagQuiz()'
  },
  {
    id:'karriere', num:6, title:'Karriere im Finanzamt', icon:'🎓', duration:10,
    color:'linear-gradient(135deg,#1a0530,#0d2b5e)',
    sub:'10 Min · Ausbildung, Alltag, Perspektiven',
    moderator:{
      text:'Zeigt die konkreten Fakten – Gehalt, Ausbildungsdauer, Aufstiegsmöglichkeiten. Lasst die Schüler das Vorurteile-Quiz machen.',
      punkte:['💶 Gehalt in der Ausbildung: ca. 1.100–1.300 €/Monat','📅 Bewerbungsfristen Berlin: meist Oktober–Dezember','🎓 Abschluss: Diplom-Finanzwirt(in) FH (Bachelor-äquivalent)','📈 Aufstieg: Sachbearbeiter → Teamleiter → Amtsleiter','🎮 Vorurteile-Quiz: Alle mitmachen!']
    },
    content: `
<div class="etag-karriere-grid">
  <div class="etag-karriere-tile"><div class="ekt-icon">⏱️</div><div class="ekt-label">Ausbildungsdauer</div><div class="ekt-val">3 Jahre</div><div class="ekt-sub">Duales Studium + Praxis im Finanzamt</div></div>
  <div class="etag-karriere-tile"><div class="ekt-icon">💶</div><div class="ekt-label">Ausbildungsgehalt</div><div class="ekt-val">~1.200 €</div><div class="ekt-sub">netto/Monat (steigt jährlich)</div></div>
  <div class="etag-karriere-tile"><div class="ekt-icon">🎓</div><div class="ekt-label">Abschluss</div><div class="ekt-val">Dipl.-Finanzwirt</div><div class="ekt-sub">FH-Diplom, Bachelor-äquivalent</div></div>
  <div class="etag-karriere-tile"><div class="ekt-icon">🏛️</div><div class="ekt-label">Standorte Berlin</div><div class="ekt-val">23 Finanzämter</div><div class="ekt-sub">+ 6 zentrale Fachbehörden</div></div>
  <div class="etag-karriere-tile"><div class="ekt-icon">📅</div><div class="ekt-label">Bewerbung Berlin</div><div class="ekt-val">Okt.–Dez.</div><div class="ekt-sub">Ausbildungsstart: August/September</div></div>
  <div class="etag-karriere-tile"><div class="ekt-icon">📈</div><div class="ekt-label">Verbeamtung</div><div class="ekt-val">Möglich</div><div class="ekt-sub">Gehalt A7–A13 je nach Laufbahn</div></div>
</div>
<div class="etag-card">
  <h3>📋 Ein typischer Arbeitstag</h3>
  <p>Eingehende Steuererklärungen prüfen · Rückfragen klären · Bescheide erstellen · Betriebsprüfungen vorbereiten · Bürger beraten · Rechtsmittel bearbeiten</p>
  <div class="hl">💡 <b>Was viele nicht wissen:</b> Finanzbeamte sind keine reinen Sachbearbeiter. Sie klären Steuerfragen mit Anwälten, Steuerberatern und internationalen Unternehmen – das ist anspruchsvolle Rechtsarbeit.</div>
</div>
<div class="etag-card">
  <h3>🤔 Stimmt das? – Vorurteile-Check</h3>
  <p>Tippt auf eure Antwort – mal sehen, was ihr über das Finanzamt denkt!</p>
  <div id="etag-mythen-block"></div>
</div>
<div class="etag-card">
  <h3>🌐 Brandenburg</h3>
  <p>Landesamt für Finanzen Brandenburg · Finanzämter in Cottbus, Frankfurt/Oder, Potsdam u.a. Ähnliche Ausbildungsstruktur, enger Kontakt zur Berliner Verwaltung.</p>
</div>`,
    onShow: 'renderEtagMythen()'
  },
  {
    id:'abschluss', num:7, title:'Deine nächsten Schritte', icon:'🚀', duration:10,
    color:'linear-gradient(135deg,#003d1a,#007a3a)',
    sub:'10 Min · Bewerbung, Fragen, Feedback',
    moderator:{
      text:'Abschluss des Einführungstags. Fasst zusammen, was heute gelernt wurde. Lasst die Schüler Feedback geben.',
      punkte:['✅ Zusammenfassung: Was haben wir heute gesehen?','❓ Offene Fragen der Gruppe','📱 QR-Code zur Bewerbungsseite zeigen','⭐ Feedback-Runde: Wie fandet ihr es?','🎁 Evtl. Infomaterial verteilen']
    },
    content: `
<div class="etag-progress-summary" id="etag-final-summary">
  <div style="font-size:40px;margin-bottom:8px">🎉</div>
  <div style="font-size:18px;font-weight:900;color:#fff;margin-bottom:4px">Einführungstag abgeschlossen!</div>
  <div style="font-size:12px;color:rgba(255,255,255,.65);margin-bottom:14px">80 Minuten · 8 Phasen · Steuern, Karriere & Klassen-Wettbewerb</div>
  <div id="etag-quiz-result-summary" style="font-size:13px;color:rgba(255,255,255,.8);font-weight:800"></div>
</div>
<div class="etag-card">
  <h3>📋 Das Wichtigste in Kürze</h3>
  <p>✅ <b>Steuern</b> sind Geld, das alle an den Staat zahlen – für Schulen, Straßen, Polizei<br>
  ✅ Wer in Deutschland <b>wohnt</b>, ist steuerpflichtig – egal wie alt oder woher<br>
  ✅ Dein <b>Arbeitgeber</b> zieht Steuern & Sozialabgaben direkt vom Gehalt ab<br>
  ✅ In jedem Preis steckt <b>Mehrwertsteuer</b> – 7 % oder 19 %<br>
  ✅ Eine <b>Steuererklärung</b> bringt im Schnitt ca. 1.000 € zurück<br>
  ✅ Im Finanzamt arbeiten <b>110.000 Menschen</b> – und suchen Nachwuchs!</p>
</div>
<div class="etag-card">
  <h3>⭐ Schnelles Feedback – wie fandet ihr es?</h3>
  <p>Tippt auf den Daumen, der am besten passt:</p>
  <div id="etag-feedback-block" style="display:flex;gap:10px;margin:12px 0;flex-wrap:wrap"></div>
  <div id="etag-feedback-msg" style="display:none"></div>
</div>
<div class="etag-card">
  <h3>🚀 Nächste Schritte – wenn ihr euch bewerben wollt</h3>
  <p><b>Berlin:</b> Senatsverwaltung für Finanzen · Bewerbungsportal: <em>berlin.de/sen/finanzen</em><br>
  <b>Brandenburg:</b> Ministerium der Finanzen · <em>mdf.brandenburg.de</em><br>
  <b>Frist:</b> Meist Oktober bis Dezember für Ausbildungsbeginn im nächsten August</p>
  <div class="hl">💡 <b>Diese App:</b> Alle Inhalte des heutigen Tages – und viel mehr – findest du jederzeit hier. Ideal für die Vorbereitung auf die Eignungsprüfung.</div>
</div>`,
    onShow: 'initEtagFeedback()'
  },
  {
    id:'klassenquiz', num:8, title:'Klassen-Wettbewerb', icon:'🏆', duration:15,
    color:'linear-gradient(135deg,#1a0a3e,#3d1a6b)',
    sub:'15 Min · Digital oder Analog · Live-Ranking',
    moderator:{
      text:'Abschluss mit Wettbewerb-Feeling! Digital: Schüler spielen auf Handys (WLAN nötig). Analog: Fragen auf Beamer, Handzeichen – kein WLAN nötig.',
      punkte:['📱 Digital: Code auf Beamer zeigen, alle beitreten lassen','✋ Analog: Jede Frage zeigen, Handzeichen zählen, Punkte manuell eintragen','🏆 Am Ende: Podium zeigen, Applaus für die Top 3']
    },
    content:'<div id="etag-kq-block"></div>',
    onShow:'initEtagKlassenquiz()'
  }
];

// State
let etagPhase = 0; // 0-7
let etagTimerInterval = null;
let etagTimeLeft = 0;
let etagQuizIdx = 0;
let etagQuizAnswers = {};
let etagPara1Answers = {};

// 8 curated questions for the group quiz (Cappuccino entfernt – seit 2026 dauerhaft 7% Gastronomie)
const ETAG_QUIZ = [
  { q:'Wenn du im Supermarkt eine Tafel Schokolade für 1,29 € kaufst – zahlst du dabei Steuern?', opts:['Nein, Steuern zahlt man nur beim Gehalt','Ja – im Preis stecken 7 % Mehrwertsteuer','Ja – im Preis stecken 19 % Mehrwertsteuer','Nur wenn man über 18 ist'], correct:1, explain:'In fast jedem Preis steckt Mehrwertsteuer. Lebensmittel (Anlage 2 UStG): 7 %. Elektronik, Kleidung: 19 %. Du zahlst sie automatisch mit – ohne es zu merken!' },
  { q:'Wie viele verschiedene Steuerarten gibt es in Deutschland ungefähr?', opts:['Etwa 5','Etwa 15','Über 40','Genau 100'], correct:2, explain:'Deutschland hat über 40 Steuerarten! Von der Einkommensteuer über die Hundesteuer bis zur Sektsteuer (seit 1902 – Kaiser Wilhelm wollte Kriegsschiffe finanzieren). Die Flotte ist weg, die Steuer bleibt.' },
  { q:'Du verdienst 850 € brutto als Azubi. Was landet auf deinem Konto?', opts:['850 € – Steuern erst ab 2.000 €','Ca. 673 € – Rest geht an Sozialversicherung','Ca. 425 € – die Hälfte geht an den Staat','Kommt auf die Bank an'], correct:1, explain:'Vom Bruttolohn gehen ca. 20 % als Arbeitnehmer-Anteil an die Sozialversicherung (Kranken-, Renten-, Pflege-, Arbeitslosenversicherung). Lohnsteuer fällt bei 850 € noch nicht an.' },
  { q:'Wer überweist deine Lohnsteuer ans Finanzamt?', opts:['Du selbst – jeden Monat','Dein Arbeitgeber – automatisch','Die Bank zieht es ab','Die Krankenkasse'], correct:1, explain:'Dein Arbeitgeber zieht Lohnsteuer und Sozialabgaben ab und überweist direkt ans Finanzamt. Du musst selbst nichts tun.' },
  { q:'Wofür verwendet der Staat Steuereinnahmen?', opts:['Nur für Politiker-Gehälter','Für Schulen, Straßen, Polizei, Sozialleistungen u. v. m.','Nur für das Militär','Der Staat spart das Geld'], correct:1, explain:'Steuern finanzieren fast alles: Schulen, Universitäten, Straßen, Polizei, Feuerwehr, Krankenhäuser, Sozialleistungen, Verteidigung und vieles mehr.' },
  { q:'Sofia verdient als Influencerin 22.400 €. Muss sie Steuern zahlen?', opts:['Nein – das ist Hobby','Ja – Einnahmen aus Content sind steuerpflichtig','Erst ab 100.000 €','Nur mit GmbH'], correct:1, explain:'Wer regelmäßig Einnahmen durch Content erzielt, ist steuerlich Gewerbetreibende/r – egal ob Hobby. Gewerbeanmeldung + Steuernummer sind Pflicht ab dem ersten Euro Gewinnabsicht.' },
  { q:'Steuererklärung machen – lohnt sich das für Berufseinsteiger?', opts:['Nein, erst ab 50.000 € Gehalt','Ja – im Schnitt bekommt man ca. 1.000 € zurück','Nur Verheiratete profitieren','Nur mit Steuerberater'], correct:1, explain:'Im Schnitt erstattet das Finanzamt ca. 1.000 € pro Jahr. Fahrtkosten, Arbeitsmittel, Fortbildungen – vieles ist absetzbar. Man hat 4 Jahre rückwirkend Zeit!' },
  { q:'Wie viele Finanzämter gibt es allein in Berlin?', opts:['3','12','23','50'], correct:2, explain:'Berlin hat 23 Finanzämter mit über 6.100 Mitarbeitenden. Jeder Berliner ist je nach Wohnbezirk einem bestimmten Finanzamt zugeordnet.' }
];

// ── Phase 1: Icebreaker Ratespiel ──
let iceScore = 0;
const ICE_QUESTIONS = [
  {
    opts:['100 Milliarden €','500 Milliarden €','Knapp 1 Billion €','2 Billionen €'],
    correct:2,
    reveal:'😮 <b>948 Milliarden Euro</b> – also knapp eine Billion! Davon: 249 Mrd. Lohnsteuer, 302 Mrd. Umsatzsteuer. Damit werden Schulen, Straßen, Polizei, Krankenhäuser und alles andere finanziert.'
  },
  {
    opts:['Etwa 5','Etwa 15','Über 40','Genau 100'],
    correct:2,
    reveal:'🤯 <b>Über 40 Steuerarten!</b> Von der Einkommensteuer über die Hundesteuer bis zur Sektsteuer (die gibt es wirklich seit 1902 – Kaiser Wilhelm wollte Kriegsschiffe finanzieren). Die Flotte ist längst weg, die Steuer bleibt.'
  },
  {
    opts:['Ca. 10 %','Ca. 20 %','Ca. 35 %','Ca. 50 %'],
    correct:2,
    reveal:'💸 Ungefähr <b>35 %</b> – von 3.000 € brutto bleiben nur ca. 1.950 € netto. Der Rest geht an: Lohnsteuer, Krankenversicherung, Rentenversicherung, Pflegeversicherung und Arbeitslosenversicherung.'
  }
];

function initEtagIcebreaker(){
  iceScore = 0;
  renderIceQ(0);
}

function renderIceQ(idx){
  if(idx >= ICE_QUESTIONS.length) return;
  const el = document.getElementById('etag-ice-'+(idx+1));
  if(!el) return;
  const q = ICE_QUESTIONS[idx];
  el.innerHTML = q.opts.map((o,i)=>
    '<button onclick="iceAnswer('+(idx)+','+i+')" style="display:block;width:100%;text-align:left;padding:12px 14px;margin-bottom:6px;border-radius:12px;border:2px solid rgba(255,255,255,.15);background:rgba(255,255,255,.06);color:#fff;font-family:Nunito,sans-serif;font-weight:800;font-size:13px;cursor:pointer;transition:all .15s">'+(String.fromCharCode(65+i))+') '+o+'</button>'
  ).join('');
}

function iceAnswer(qIdx, chosen){
  const el = document.getElementById('etag-ice-'+(qIdx+1));
  if(!el || el.dataset.done) return;
  el.dataset.done = '1';
  const q = ICE_QUESTIONS[qIdx];
  const ok = chosen === q.correct;
  if(ok) iceScore++;

  // Highlight buttons
  el.querySelectorAll('button').forEach((b,i)=>{
    b.disabled = true;
    b.style.cursor = 'default';
    if(i === q.correct){
      b.style.border = '3px solid #00c97b';
      b.style.background = 'rgba(0,201,123,.15)';
      b.style.color = '#00c97b';
    } else if(i === chosen && !ok){
      b.style.border = '2px solid rgba(255,77,109,.4)';
      b.style.background = 'rgba(255,77,109,.08)';
      b.style.opacity = '.7';
    } else {
      b.style.opacity = '.3';
    }
  });

  // Show reveal
  var reveal = document.createElement('div');
  reveal.style.cssText = 'margin-top:10px;padding:12px 14px;border-radius:12px;background:rgba(0,194,224,.1);border:2px solid rgba(0,194,224,.25);font-size:12px;font-weight:700;color:#fff;line-height:1.6;animation:fu .3s ease';
  reveal.innerHTML = (ok ? '✅ Richtig! ' : '❌ Knapp daneben! ') + q.reveal;
  el.parentNode.appendChild(reveal);

  // Show next question after short delay
  var next = qIdx + 1;
  if(next < ICE_QUESTIONS.length){
    setTimeout(function(){
      var wrap = document.getElementById('etag-ice-'+(next+1)+'-wrap');
      if(wrap){
        wrap.style.display = 'block';
        wrap.style.animation = 'fu .4s ease';
        wrap.scrollIntoView({behavior:'smooth',block:'nearest'});
        renderIceQ(next);
      }
    }, 1200);
  } else {
    // All done - show summary
    setTimeout(function(){
      var sum = document.getElementById('etag-ice-summary');
      if(sum){
        sum.style.display = 'block';
        sum.style.animation = 'fu .4s ease';
        var emoji = iceScore===3?'🏆':iceScore>=2?'👍':'😮';
        sum.innerHTML = '<div class="etag-card" class="u-center">'
          +'<div style="font-size:36px;margin-bottom:6px">'+emoji+'</div>'
          +'<div class="u-heading">'+iceScore+' von 3 richtig!</div>'
          +'<div style="font-size:12px;color:rgba(255,255,255,.5);font-weight:700;margin-top:4px">'
          +(iceScore===3?'Perfekt! Du weißt schon einiges über Steuern.':iceScore>=2?'Gut! Ein paar Überraschungen waren dabei, oder?':'Keine Sorge – genau dafür sind wir heute hier!')
          +'</div>'
          +'<div style="margin-top:12px;padding:10px 14px;background:rgba(255,255,255,.06);border-radius:10px;font-size:11px;color:rgba(255,255,255,.5);font-weight:700;line-height:1.6">'
          +'🏛️ <b style="color:#fff">650 Finanzämter</b> bundesweit · <b style="color:#fff">110.000 Beschäftigte</b> · Berlin: <b style="color:#fff">23 Finanzämter</b> mit 6.100 Mitarbeitenden</div>'
          +'</div>';
        sum.scrollIntoView({behavior:'smooth',block:'nearest'});
      }
    }, 1500);
  }
}

// ── Phase 3: Fahrtkosten-Rechner ──
function etagCalcFahrt(){
  const inp = document.getElementById('etag-km-input');
  const res = document.getElementById('etag-fahrt-result');
  if(!inp || !res) return;
  const km = Math.max(1, Math.min(200, parseInt(inp.value)||15));
  const tage = 210;
  const satz = 0.38;
  const fahrt = Math.round(km * satz * tage * 100) / 100;
  const erstattung = Math.round(fahrt * 0.25); // grobe Schätzung bei niedrigem Steuersatz
  res.innerHTML = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">'
    +'<span style="font-size:12px;font-weight:800;color:#fff">Dein Arbeitsweg wäre wert:</span>'
    +'<span style="font-size:18px;font-weight:900;color:var(--yellow);font-family:Space Mono,monospace">'+fahrt.toLocaleString('de-DE')+' €/Jahr</span>'
    +'</div>'
    +'<div style="font-size:11px;color:rgba(255,255,255,.65);font-weight:700;line-height:1.6">'
    +km+' km × 0,38 € × '+tage+' Arbeitstage = <b>'+fahrt.toLocaleString('de-DE')+' €</b><br>'
    +'<span class="u-green">💰 Das könntest du dir als Arbeitnehmer vom Finanzamt zurückholen – geschätzt ca. <b>'+erstattung+' €</b> Erstattung pro Jahr!</span>'
    +'</div>';
}

// ── Phase 3: Lena vote ──
function etagLenaVote(ja){
  const v = document.getElementById('etag-lena-vote');
  const a = document.getElementById('etag-lena-answer');
  if(!v || !a) return;
  v.dataset.done = '1';
  v.querySelectorAll('button').forEach(b=>{ b.disabled=true; b.style.opacity='.4'; b.style.cursor='default'; });
  if(!ja) { v.children[1].style.opacity='1'; v.children[1].style.border='3px solid #00c97b'; }
  else { v.children[0].style.opacity='1'; v.children[0].style.border='3px solid #ff4d6d'; }
  a.style.display = 'block';
  a.style.cssText = 'display:block;margin-top:10px;padding:12px 14px;border-radius:12px;font-size:12px;font-weight:700;line-height:1.6;animation:fu .3s ease;'
    + (ja ? 'background:rgba(255,77,109,.1);border:2px solid rgba(255,77,109,.25);color:#ff4d6d' : 'background:rgba(0,201,123,.1);border:2px solid rgba(0,201,123,.25);color:#00c97b');
  a.innerHTML = ja
    ? '❌ Nein – Lena <em>muss nicht</em>. Als Angestellte ohne besondere Einkünfte ist die Steuererklärung <b>freiwillig</b>. Aber sie <em>sollte</em> eine machen – sie bekommt wahrscheinlich Geld zurück! Und das Beste: Man kann die Erklärung bis zu <b>4 Jahre rückwirkend</b> abgeben.'
    : '✅ Richtig! Lena muss nicht – aber sie sollte. Wer eine freiwillige Steuererklärung abgibt, bekommt im Schnitt ca. <b>1.000 € zurück</b>. Und man hat dafür bis zu <b>4 Jahre Zeit</b> – also kein Stress!';
}

// ── Phase 5: Vorurteile-Quiz ──
const ETAG_MYTHEN = [
  { claim:'Finanzbeamte stempeln den ganzen Tag nur Akten.', truth:false, explain:'Finanzbeamte lösen komplexe Rechtsfragen – mit Steuerberatern, Anwälten und internationalen Unternehmen. Die Arbeit ist juristisch anspruchsvoll.' },
  { claim:'Man verdient in der Ausbildung bei der Finanzverwaltung nichts.', truth:false, explain:'Anwärter bekommen ca. 1.100–1.300 € netto/Monat – deutlich mehr als in vielen anderen Ausbildungen, und das bei 30 Tagen Urlaub.' },
  { claim:'Man muss Mathe-Ass sein, um beim Finanzamt zu arbeiten.', truth:false, explain:'Grundrechenarten reichen. Viel wichtiger sind logisches Denken, Textverständnis und die Fähigkeit, Gesetze anzuwenden.' },
  { claim:'Nach der Ausbildung ist man verbeamtet und hat einen sicheren Job.', truth:true, explain:'Stimmt! Bei guten Leistungen führt die Ausbildung zur Verbeamtung auf Lebenszeit – mit allen Vorteilen (Pension, Beihilfe, Unkündbarkeit).' },
  { claim:'Als Finanzbeamter kann man nie aufsteigen.', truth:false, explain:'Es gibt klare Aufstiegswege: Sachbearbeiter → Teamleiter → Sachgebietsleiter → Amtsleiter. Auch Wechsel in Ministerien oder Finanzgerichte sind möglich.' }
];
let etagMythenAnswers = {};

function renderEtagMythen(){
  const el = document.getElementById('etag-mythen-block');
  if(!el) return;
  el.innerHTML = ETAG_MYTHEN.map((m,i)=>{
    const ans = etagMythenAnswers[i];
    const answered = ans !== undefined;
    const ok = answered && ans === m.truth;
    return '<div style="margin-bottom:10px">'
      +'<div style="font-size:12px;font-weight:800;color:#fff;margin-bottom:6px;line-height:1.5">„'+m.claim+'"</div>'
      +(!answered
        ? '<div style="display:flex;gap:8px">'
          +'<button onclick="etagMythenAns('+i+',true)" style="flex:1;padding:10px;border-radius:10px;border:2px solid rgba(0,201,123,.3);background:rgba(0,201,123,.08);color:#00c97b;font-family:Nunito,sans-serif;font-weight:900;font-size:13px;cursor:pointer">✓ Stimmt</button>'
          +'<button onclick="etagMythenAns('+i+',false)" style="flex:1;padding:10px;border-radius:10px;border:2px solid rgba(255,77,109,.3);background:rgba(255,77,109,.08);color:#ff4d6d;font-family:Nunito,sans-serif;font-weight:900;font-size:13px;cursor:pointer">✗ Stimmt nicht</button>'
          +'</div>'
        : '<div style="padding:10px 12px;border-radius:10px;font-size:11px;font-weight:700;line-height:1.6;animation:fu .3s ease;'
          +'background:'+(ok?'rgba(0,201,123,.1)':'rgba(255,77,109,.08)')+';'
          +'border:2px solid '+(ok?'rgba(0,201,123,.3)':'rgba(255,77,109,.25)')+';'
          +'color:'+(ok?'#00c97b':'#ff4d6d')+'">'
          +(ok?'✅ Richtig! ':'❌ Leider falsch! ')+m.explain
          +'</div>')
      +'</div>';
  }).join('');
}

function etagMythenAns(i, ans){
  etagMythenAnswers[i] = ans;
  renderEtagMythen();
}

// ── Phase 6: Feedback ──
function initEtagFeedback(){
  var fb=document.getElementById('etag-feedback-block');
  if(!fb||fb.dataset.done) return;
  var opts=[{e:'🤩',l:'Super!'},{e:'😊',l:'Gut'},{e:'😐',l:'Ok'},{e:'😕',l:'Meh'}];
  fb.innerHTML=opts.map(function(o){
    return '<button onclick="etagFeedback(this,\''+o.l+'\')" style="flex:1;min-width:60px;padding:14px 8px;border-radius:14px;border:2px solid rgba(255,255,255,.15);background:rgba(255,255,255,.06);color:#fff;font-family:Nunito,sans-serif;cursor:pointer;transition:all .2s;text-align:center"><span style="font-size:28px;display:block">'+o.e+'</span><span style="font-size:10px;font-weight:800;opacity:.6">'+o.l+'</span></button>';
  }).join('');
}

function etagFeedback(btn, label){
  const fb = document.getElementById('etag-feedback-block');
  const msg = document.getElementById('etag-feedback-msg');
  if(!fb || !msg) return;
  fb.dataset.done = '1';
  fb.querySelectorAll('button').forEach(b=>{ b.style.opacity='.3'; b.style.cursor='default'; b.disabled=true; });
  btn.style.opacity = '1';
  btn.style.border = '3px solid var(--cyan)';
  btn.style.background = 'rgba(0,194,224,.2)';
  msg.style.display = 'block';
  msg.style.cssText = 'display:block;margin-top:10px;padding:12px;border-radius:12px;background:rgba(0,194,224,.1);border:2px solid rgba(0,194,224,.25);font-size:12px;font-weight:700;color:#fff;line-height:1.5;animation:fu .3s ease';
  msg.innerHTML = '✅ Danke für dein Feedback! Deine Meinung hilft uns, den Einführungstag noch besser zu machen.';
}

function renderEinfuehrung(a){
  const phase = ETAG_PHASES[etagPhase];
  const phaseDots = ETAG_PHASES.map((p,i)=>`<div class="etag-phase-dot${i<etagPhase?' done':i===etagPhase?' active':''}" onclick="etagJumpPhase(${i})" title="Phase ${i+1}: ${p.title}"></div>`).join('');

  const timerHtml = `
    <div class="etag-timer" id="etag-timer-display">${formatEtagTime(phase.duration*60)}</div>
    <div class="etag-timer-lbl">Verbleibende Zeit</div>
    <div style="display:flex;gap:6px;justify-content:center;margin-top:8px">
      <button onclick="etagTimerToggle()" id="etag-timer-btn" style="background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;border-radius:8px;padding:5px 14px;font-size:11px;font-weight:800;font-family:'Nunito',sans-serif;cursor:pointer">▶ Start</button>
      <button onclick="etagTimerReset()" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.5);border-radius:8px;padding:5px 10px;font-size:11px;font-weight:800;font-family:'Nunito',sans-serif;cursor:pointer">↺</button>
    </div>`;

  a.innerHTML = `<div class="etag-wrap">

<!-- Phase bar -->
<div class="etag-phase-bar">${phaseDots}</div>

<!-- Header -->
<div class="etag-header" style="background:${phase.color}">
  <div class="etag-phase-label">Phase ${phase.num} / ${ETAG_PHASES.length} · ${phase.sub}</div>
  <div class="etag-phase-title">${phase.icon} ${phase.title}</div>
  ${timerHtml}
</div>

<!-- Moderator box -->
<div class="etag-moderator">
  <div class="etag-moderator-label">🎙️ Ausbilder-Hinweise</div>
  <p>${phase.moderator.text}</p>
  <ul>${phase.moderator.punkte.map(p=>`<li>${p}</li>`).join('')}</ul>
</div>

<!-- Content -->
${phase.content}

<!-- Nav buttons -->
<div class="etag-btn-row">
  ${etagPhase > 0 ? '<button class="etag-btn-secondary" onclick="etagPrev()">← Zurück</button>' : ''}
  ${etagPhase < ETAG_PHASES.length-1
    ? '<button class="etag-btn-primary" onclick="etagNext()">Nächste Phase →</button>'
    : '<button class="etag-btn-primary" onclick="etagFinish()">🎉 Einführungstag beenden</button>'}
</div>
<div style="height:90px"></div>
</div>`;

  // Init timer
  etagTimeLeft = phase.duration * 60;
  if(etagTimerInterval){ clearInterval(etagTimerInterval); etagTimerInterval=null; }

  // Run phase-specific init
  if(phase.onShow) setTimeout(()=>{ try{ eval(phase.onShow); }catch(e){} }, 50);

  // Update tab active state
  document.querySelectorAll('.mode-tab').forEach(t=>t.classList.remove('active'));
  const t = document.getElementById('tab-einfuehrung');
  if(t) t.classList.add('active');
}

function formatEtagTime(secs){
  const m = Math.floor(secs/60), s = secs%60;
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function etagTimerToggle(){
  const btn = document.getElementById('etag-timer-btn');
  if(etagTimerInterval){
    clearInterval(etagTimerInterval);
    etagTimerInterval = null;
    if(btn) btn.textContent = '▶ Weiter';
  } else {
    if(btn) btn.textContent = '⏸ Pause';
    etagTimerInterval = setInterval(()=>{
      etagTimeLeft = Math.max(0, etagTimeLeft-1);
      const d = document.getElementById('etag-timer-display');
      if(d){
        d.textContent = formatEtagTime(etagTimeLeft);
        d.className = 'etag-timer' + (etagTimeLeft <= 60 ? ' urgent' : '');
      }
      if(etagTimeLeft === 0){ clearInterval(etagTimerInterval); etagTimerInterval=null; if(btn) btn.textContent = '⏱️ Zeit!'; }
    }, 1000);
  }
}

function etagTimerReset(){
  if(etagTimerInterval){ clearInterval(etagTimerInterval); etagTimerInterval=null; }
  etagTimeLeft = ETAG_PHASES[etagPhase].duration * 60;
  const d = document.getElementById('etag-timer-display');
  if(d){ d.textContent = formatEtagTime(etagTimeLeft); d.className='etag-timer'; }
  const btn = document.getElementById('etag-timer-btn');
  if(btn) btn.textContent = '▶ Start';
}

function etagNext(){
  if(etagTimerInterval){ clearInterval(etagTimerInterval); etagTimerInterval=null; }
  etagPhase = Math.min(ETAG_PHASES.length-1, etagPhase+1);
  sw('einfuehrung');
  window.scrollTo({top:0, behavior:'smooth'});
}
function etagPrev(){
  if(etagTimerInterval){ clearInterval(etagTimerInterval); etagTimerInterval=null; }
  etagPhase = Math.max(0, etagPhase-1);
  sw('einfuehrung');
  window.scrollTo({top:0, behavior:'smooth'});
}
function etagJumpPhase(i){
  if(etagTimerInterval){ clearInterval(etagTimerInterval); etagTimerInterval=null; }
  etagPhase = i;
  sw('einfuehrung');
  window.scrollTo({top:0, behavior:'smooth'});
}
function etagFinish(){
  etagPhase = ETAG_PHASES.length-1;
  sw('einfuehrung');
}

// Phase 2: § 1 EStG mini-interactive
const ETAG_PARA1 = [
  { avatar:'👨‍💼', name:'Ahmed, 22', desc:'Ägyptischer Student in Berlin, WG', q:'Muss Ahmed in Deutschland Steuern zahlen?', answer:'ja', explain:'✅ Ja – Ahmed <b>wohnt</b> in Deutschland. Das reicht! Nationalität spielt keine Rolle. Wer hier lebt, ist steuerpflichtig.' },
  { avatar:'👩‍💻', name:'Sofia, 28', desc:'Deutschen Pass, arbeitet in Amsterdam, Wohnung gekündigt', q:'Ist Sofia noch in Deutschland steuerpflichtig?', answer:'nein', explain:'✅ Nein – Sofia hat ihre Wohnung in DE aufgegeben und lebt jetzt in den Niederlanden. Ohne Wohnsitz in Deutschland: keine deutsche Steuerpflicht. Auch ein deutscher Pass ändert daran nichts!' },
  { avatar:'👶', name:'Mia, 8 Monate', desc:'Neugeborene, lebt bei ihren Eltern in München', q:'Ist Mia steuerpflichtig?', answer:'ja', explain:'✅ Überraschung: Ja! Es gibt <b>keine Altersgrenze</b>. Auch ein Baby ist grundsätzlich steuerpflichtig, wenn es in Deutschland wohnt. Aber keine Sorge: Mia hat kein Einkommen, also zahlt sie auch keine Steuer.' },
  { avatar:'👴', name:'Hans, 74', desc:'Rentner, lebt 6 Monate in Thailand, 6 Monate in Stuttgart', q:'Ist Hans in Deutschland steuerpflichtig?', answer:'ja', explain:'✅ Ja – Hans hat immer noch seine Wohnung in Stuttgart. Solange er eine Wohnung in Deutschland hält, bleibt er steuerpflichtig – egal wie viel Zeit er im Ausland verbringt. Seine Rente wird in Deutschland versteuert.' }
];

function renderEtagPara1(){
  const el = document.getElementById('etag-para1-block');
  if(!el) return;
  const all = Object.keys(etagPara1Answers).length >= ETAG_PARA1.length;
  if(all){
    el.innerHTML = '<div style="background:rgba(0,201,123,.1);border:2px solid rgba(0,201,123,.3);border-radius:14px;padding:14px;text-align:center"><div style="font-size:18px;font-weight:900;color:#00c97b">✓ Alle Szenarien beantwortet!</div><div style="font-size:12px;font-weight:700;color:#555;margin-top:6px">Die Grundregel: <b>Wer in Deutschland wohnt, ist steuerpflichtig.</b><br>Nationalität, Alter und Einkommen spielen keine Rolle.</div></div>';
    return;
  }
  const casesHtml = ETAG_PARA1.map((c,i)=>{
    const ans = etagPara1Answers[i];
    const resultHtml = ans !== undefined
      ? `<div style="background:${ans===c.answer?'rgba(0,201,123,.08)':'rgba(255,77,109,.08)'};border:1px solid ${ans===c.answer?'rgba(0,201,123,.3)':'rgba(255,77,109,.3)'};border-radius:10px;padding:10px 12px;font-size:11px;font-weight:700;color:#444;line-height:1.6;margin-top:8px">${c.explain}</div>`
      : '';
    return `<div class="etag-q-card">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
        <span style="font-size:24px">${c.avatar}</span>
        <div><div class="u-heading-sm">${c.name}</div><div style="font-size:10px;color:rgba(255,255,255,.5);font-weight:700">${c.desc}</div></div>
      </div>
      <div class="etag-q-text">${c.q}</div>
      ${ans===undefined ? `<div style="display:flex;gap:8px"><button class="etag-q-opt" style="flex:1" onclick="etagPara1Ans(${i},'ja')">Ja</button><button class="etag-q-opt" style="flex:1" onclick="etagPara1Ans(${i},'nein')">Nein</button></div>` : ''}
      ${resultHtml}
    </div>`;
  }).join('');
  el.innerHTML = casesHtml;
}

function etagPara1Ans(i, ans){
  etagPara1Answers[i] = ans;
  renderEtagPara1();
  setTimeout(()=>{
    const r = document.querySelectorAll('.etag-q-card')[i];
    if(r) r.scrollIntoView({behavior:'smooth',block:'nearest'});
  }, 80);
}

// Phase 4: Group quiz
function renderEtagQuiz(){
  const el = document.getElementById('etag-quiz-block');
  if(!el) return;
  const done = Object.keys(etagQuizAnswers).length >= ETAG_QUIZ.length;
  if(done){
    const correct = ETAG_QUIZ.filter((_,i)=>etagQuizAnswers[i]===ETAG_QUIZ[i].correct).length;
    el.innerHTML = `<div class="etag-progress-summary">
      <div style="font-size:32px;margin-bottom:8px">🏆</div>
      <div style="font-size:18px;font-weight:900;color:#fff">${correct} / ${ETAG_QUIZ.length} richtig!</div>
      <div style="font-size:11px;color:rgba(255,255,255,.6);margin-top:4px">Quiz abgeschlossen – gut gemacht!</div>
      <button onclick="etagQuizReset()" style="margin-top:12px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.25);color:#fff;border-radius:9px;padding:7px 16px;font-size:11px;font-weight:800;font-family:'Nunito',sans-serif;cursor:pointer">↺ Nochmal</button>
    </div>
    ${ETAG_QUIZ.map((q,i)=>{
      const chosen = etagQuizAnswers[i];
      const ok = chosen === q.correct;
      return `<div class="etag-q-card">
        <div class="etag-q-text">${i+1}. ${q.q}</div>
        ${q.opts.map((o,j)=>`<div style="padding:8px 12px;margin-bottom:4px;border-radius:9px;font-size:11px;font-weight:700;border:2px solid ${j===q.correct?'rgba(0,201,123,.5)':j===chosen&&!ok?'rgba(255,77,109,.4)':'rgba(255,255,255,.1)'};background:${j===q.correct?'rgba(0,201,123,.08)':j===chosen&&!ok?'rgba(255,77,109,.06)':'transparent'};color:${j===q.correct?'#00c97b':j===chosen&&!ok?'#ff4d6d':'rgba(255,255,255,.6)'};">${o}</div>`).join('')}
        <div class="etag-explain">💡 ${q.explain}</div>
      </div>`;
    }).join('')}`;
    // Store for summary
    window._etagFinalScore = correct;
    const sumEl = document.getElementById('etag-quiz-result-summary');
    if(sumEl) sumEl.textContent = `Quiz: ${correct}/${ETAG_QUIZ.length} richtig`;
    return;
  }
  const q = ETAG_QUIZ[etagQuizIdx];
  if(!q){ renderEtagQuizReview(); return; }
  el.innerHTML = `<div class="etag-q-card">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
      <div style="font-size:9px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.4)">Frage ${etagQuizIdx+1} / ${ETAG_QUIZ.length}</div>
      <div style="flex:1;height:4px;background:rgba(255,255,255,.1);border-radius:100px;overflow:hidden"><div style="height:100%;width:${(etagQuizIdx/ETAG_QUIZ.length*100)}%;background:var(--cyan);border-radius:100px"></div></div>
    </div>
    <div class="etag-q-text">${q.q}</div>
    ${q.opts.map((o,j)=>`<button class="etag-q-opt" onclick="etagQuizAns(${j})">${o}</button>`).join('')}
  </div>`;
}

function etagQuizAns(chosen){
  const q = ETAG_QUIZ[etagQuizIdx];
  etagQuizAnswers[etagQuizIdx] = chosen;
  const el = document.getElementById('etag-quiz-block');
  const ok = chosen === q.correct;
  el.innerHTML = `<div class="etag-q-card">
    <div style="font-size:11px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.4);margin-bottom:10px">Frage ${etagQuizIdx+1} / ${ETAG_QUIZ.length}</div>
    <div class="etag-q-text">${q.q}</div>
    ${q.opts.map((o,j)=>`<div class="etag-q-opt${j===q.correct?' correct':j===chosen&&!ok?' wrong':j===chosen?' reveal-correct':''}">${j===q.correct?'✓ ':j===chosen&&!ok?'✗ ':''}${o}</div>`).join('')}
    <div class="etag-explain">💡 ${q.explain}</div>
    <button onclick="etagQuizNext()" style="margin-top:10px;width:100%;padding:11px;border-radius:11px;border:none;background:linear-gradient(135deg,#0d2b5e,#1a4a8f);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer">${etagQuizIdx<ETAG_QUIZ.length-1?'Nächste Frage →':'Ergebnis anzeigen →'}</button>
  </div>`;
}
function etagQuizNext(){
  etagQuizIdx++;
  renderEtagQuiz();
}
function etagQuizReset(){
  etagQuizAnswers = {};
  etagQuizIdx = 0;
  renderEtagQuiz();
}

// ══════════════════════════════════════════
// INFLUENCER: Sofia Vote
// ══════════════════════════════════════════
function sofiaVote(isYes){
  const v=document.getElementById('etag-sofia-vote');
  const a=document.getElementById('etag-sofia-answer');
  if(!v||!a||v.dataset.done) return;
  v.dataset.done='1';
  v.querySelectorAll('button').forEach(b=>{b.disabled=true;b.style.opacity='.45';});
  a.style.display='block';
  a.innerHTML = isYes
    ? '<div class="hl" style="background:rgba(0,201,123,.08);border-color:rgba(0,201,123,.3)">✅ <b>Richtig!</b> Sobald Einnahmen regelmäßig fließen, ist man steuerlich Gewerbetreibende/r – egal ob Hobby oder nicht.</div>'
    : '<div class="hl" style="background:rgba(255,77,109,.06);border-color:rgba(255,77,109,.3)">❌ <b>Leider falsch.</b> „Nur ein Hobby" ist steuerlich kein Argument. Sobald Einnahmen regelmäßig fließen, entsteht Steuerpflicht.</div>';
  setTimeout(()=>{
    const d=document.getElementById('etag-influencer-details');
    if(d){d.style.display='block';d.scrollIntoView({behavior:'smooth',block:'nearest'});}
    setTimeout(()=>{const r=document.getElementById('etag-influencer-rechner');if(r)r.style.display='block';},600);
  },400);
}

// ══════════════════════════════════════════
// KLASSEN-WETTBEWERB (Phase 8)
// ══════════════════════════════════════════
const KQ_KEY='etag_kq2';
const KQ_AVATARS=['🎓','📚','⭐','🦊','🐼','🎯','🚀','🌟','🎪','🦁','🐸','🦋','🐯','🌈','⚡','🎭'];
let kqS={mode:'',code:'',quizActive:false,currentQ:0,revealed:false,players:{},myId:null,analogPlayers:[],analogScores:{},aVotes:[]};
function kqLd(){try{const r=localStorage.getItem(KQ_KEY);if(r)kqS={...kqS,...JSON.parse(r)};}catch(e){}}
function kqSv(){try{localStorage.setItem(KQ_KEY,JSON.stringify(kqS));}catch(e){}}
function kqE(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

const KQ_QS=[
  {q:'Sofia verdient 22.400 € als Influencerin. Was muss sie tun?',opts:['Nichts – das ist Hobby','Gewerbe anmelden & Einkommensteuer zahlen','Erst ab 100.000 € nötig','Der Arbeitgeber macht das'],correct:1,explain:'Wer regelmäßig Einnahmen erzielt, ist Gewerbetreibende/r. Gewerbeanmeldung (~20 €) + Steuernummer beim Finanzamt sind Pflicht.'},
  {q:'Schokolade im Supermarkt: Welcher Mehrwertsteuersatz?',opts:['19 %','7 % – Lebensmittel ermäßigt','0 %','5 %'],correct:1,explain:'Lebensmittel: 7 % (Anlage 2 UStG). Elektronik, Kleidung: 19 %.'},
  {q:'Deutschlands Steuereinnahmen 2024?',opts:['Ca. 100 Mrd. €','Ca. 500 Mrd. €','Knapp 950 Mrd. €','Über 2 Billionen €'],correct:2,explain:'947,7 Milliarden Euro – fast eine Billion! (Destatis 2024). Lohnsteuer: 249 Mrd., Umsatzsteuer: 302 Mrd.'},
  {q:'850 € brutto als Azubi. Was kommt an?',opts:['850 € – Steuern erst ab 2.000 €','Ca. 673 € – Rest an Sozialversicherung','Ca. 425 €','Kommt auf die Bank an'],correct:1,explain:'Ca. 20 % gehen an Kranken-, Renten-, Pflege- und Arbeitslosenversicherung. Lohnsteuer fällt bei 850 € nicht an.'},
  {q:'Mia, 8 Monate alt – ist sie steuerpflichtig?',opts:['Nein – erst ab 18','Ja, aber zahlt nichts mangels Einkommen','Ja – pauschal 5 €/Monat','Nur wenn Eltern reich sind'],correct:1,explain:'Keine Altersgrenze (§ 1 EStG): Wer in Deutschland wohnt, ist steuerpflichtig. Mia hat kein Einkommen → zahlt nichts. Steuerpflicht ≠ Steuer zahlen!'},
  {q:'Steuererklärung – lohnt sich das?',opts:['Nein – erst ab 50.000 €','Ja – im Schnitt ~1.000 € zurück','Nur Verheiratete','Nur mit Steuerberater'],correct:1,explain:'Im Schnitt erstattet das Finanzamt ~1.000 € pro Jahr. Man hat 4 Jahre Zeit rückwirkend!'},
  {q:'Wer überweist die Lohnsteuer ans Finanzamt?',opts:['Du selbst – monatlich','Dein Arbeitgeber – automatisch','Die Bank','Die Krankenkasse'],correct:1,explain:'Dein Arbeitgeber zieht ab und überweist direkt. Du musst nichts tun.'},
  {q:'Wie viele Finanzämter in Berlin?',opts:['3','12','23','50'],correct:2,explain:'23 Finanzämter, über 6.100 Mitarbeitende. Jeder Berliner ist je nach Wohnbezirk zugeordnet.'}
];

function initEtagKlassenquiz(){
  kqLd();
  const el=document.getElementById('etag-kq-block');
  if(!el) return;
  const sid=sessionStorage.getItem('kq2_sid');
  if(sid&&kqS.players&&kqS.players[sid]){kqS.myId=sid;renderKqStudent(el);startKqPoll(el);return;}
  renderKqRole(el);
}
function renderKqRole(el){
  el.innerHTML=`<div class="etag-card" style="text-align:center;padding:24px 20px">
    <div style="font-size:44px;margin-bottom:10px">🏆</div>
    <div style="font-size:17px;font-weight:900;margin-bottom:6px">Klassen-Wettbewerb</div>
    <div style="font-size:12px;color:rgba(255,255,255,.5);font-weight:700;margin-bottom:20px;line-height:1.7">Wer kennt sich am besten mit Steuern aus?</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;max-width:420px;margin:0 auto">
      <button onclick="kqGoPw()" style="padding:18px 10px;border-radius:14px;border:2px solid rgba(255,217,74,.3);background:rgba(255,217,74,.06);color:var(--yellow);font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer;line-height:1.5">🎙️ Dozent/in<br><span style="font-size:10px;color:rgba(255,255,255,.35);font-weight:700">Passwort erforderlich</span></button>
      <button onclick="kqShowJoin()" style="padding:18px 10px;border-radius:14px;border:2px solid rgba(0,194,224,.3);background:rgba(0,194,224,.06);color:var(--cyan);font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer;line-height:1.5">🎓 Schüler/in<br><span style="font-size:10px;color:rgba(255,255,255,.35);font-weight:700">Code eingeben</span></button>
    </div>
  </div>`;
}
function kqGoPw(){
  const el=document.getElementById('etag-kq-block');
  el.innerHTML=`<div class="etag-card" style="max-width:360px;margin:0 auto;text-align:center;padding:28px 20px">
    <div style="font-size:36px;margin-bottom:10px">🔒</div>
    <div style="font-size:16px;font-weight:900;margin-bottom:16px">Dozenten-Zugang</div>
    <input id="kq-pw" type="password" placeholder="Passwort" style="width:100%;box-sizing:border-box;padding:12px;border-radius:11px;border:2px solid rgba(255,255,255,.18);background:rgba(255,255,255,.07);color:#fff;font-family:'Space Mono',monospace;font-size:18px;text-align:center;letter-spacing:4px;outline:none;margin-bottom:8px" onkeydown="if(event.key==='Enter')kqCheckPw()">
    <div id="kq-pw-err" style="font-size:12px;color:var(--red);font-weight:800;min-height:16px;margin-bottom:10px"></div>
    <div class="u-grid-2">
      <button onclick="renderKqRole(document.getElementById('etag-kq-block'))" class="etag-btn-secondary">← Zurück</button>
      <button onclick="kqCheckPw()" class="etag-btn-primary">Weiter →</button>
    </div>
  </div>`;
  setTimeout(()=>{const i=document.getElementById('kq-pw');if(i)i.focus();},60);
}
async function kqCheckPw(){
  const inp=document.getElementById('kq-pw'),err=document.getElementById('kq-pw-err');
  if(!inp)return;
  const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(inp.value.trim()));
  const hash=Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
  if(hash===ETAG_PW_HASH){sessionStorage.setItem('kq2_teacher','1');renderKqMode(document.getElementById('etag-kq-block'));}
  else{inp.value='';if(err){err.textContent='Falsches Passwort.';setTimeout(()=>err.textContent='',2500);}}
}
function renderKqMode(el){
  el.innerHTML=`<div class="etag-card">
    <div style="font-size:13px;font-weight:900;margin-bottom:14px">⚙️ Modus wählen</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <div onclick="kqStartDigital()" style="border-radius:14px;padding:18px;cursor:pointer;border:2px solid rgba(0,194,224,.3);background:rgba(0,194,224,.06);transition:all .2s" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''">
        <div style="font-size:30px;margin-bottom:8px">📱</div>
        <div style="font-size:13px;font-weight:900;margin-bottom:4px">Digital</div>
        <div style="font-size:11px;color:rgba(255,255,255,.45);font-weight:700;line-height:1.6">Schüler auf Handys · Live-Antworten · Auto-Ranking</div>
        <div style="margin-top:8px;font-size:9px;font-family:'Space Mono',monospace;padding:2px 8px;border-radius:100px;background:rgba(0,194,224,.12);border:1px solid rgba(0,194,224,.3);color:var(--cyan);display:inline-block">WLAN nötig</div>
      </div>
      <div onclick="kqStartAnalog()" style="border-radius:14px;padding:18px;cursor:pointer;border:2px solid rgba(255,217,74,.3);background:rgba(255,217,74,.06);transition:all .2s" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''">
        <div style="font-size:30px;margin-bottom:8px">✋</div>
        <div style="font-size:13px;font-weight:900;margin-bottom:4px">Analog</div>
        <div style="font-size:11px;color:rgba(255,255,255,.45);font-weight:700;line-height:1.6">Beamer · Handzeichen · Punkte manuell</div>
        <div style="margin-top:8px;font-size:9px;font-family:'Space Mono',monospace;padding:2px 8px;border-radius:100px;background:rgba(255,217,74,.12);border:1px solid rgba(255,217,74,.3);color:var(--yellow);display:inline-block">Kein WLAN nötig</div>
      </div>
    </div>
  </div>`;
}
function kqStartDigital(){
  kqLd();kqS.mode='digital';
  if(!kqS.code){kqS.code=Math.random().toString(36).substring(2,6).toUpperCase();kqS.players={};kqS.currentQ=0;kqS.quizActive=false;kqS.revealed=false;}
  kqSv();renderKqSetup(document.getElementById('etag-kq-block'));
  clearInterval(window._kqsp);
  window._kqsp=setInterval(()=>{if(document.getElementById('kq-plist')){kqLd();renderKqPlayerList();}else clearInterval(window._kqsp);},1500);
}
function renderKqSetup(el){
  el.innerHTML=`<div class="etag-card">
    <div style="font-size:11px;font-weight:900;color:rgba(255,255,255,.5);margin-bottom:10px">🔑 Beitrittscode – auf Beamer zeigen</div>
    <div style="background:rgba(0,194,224,.07);border:2px solid rgba(0,194,224,.3);border-radius:14px;padding:16px;text-align:center;margin-bottom:12px">
      <div style="font-family:'Space Mono',monospace;font-size:38px;font-weight:700;letter-spacing:10px;color:var(--cyan)">${kqS.code}</div>
      <div style="font-size:10px;color:rgba(255,255,255,.35);font-weight:700;margin-top:4px">Schüler: E-Tag öffnen → Phase 8 → Schüler/in → Code eingeben</div>
    </div>
    <div style="font-size:11px;font-weight:900;color:rgba(255,255,255,.5);margin-bottom:6px">👥 Teilnehmer <span id="kq-pcnt" style="font-family:'Space Mono',monospace;font-size:11px;color:var(--cyan);background:rgba(0,194,224,.1);border:1px solid rgba(0,194,224,.25);padding:1px 8px;border-radius:100px">0</span></div>
    <div id="kq-plist" style="min-height:38px;display:flex;flex-direction:column;gap:5px;max-height:150px;overflow-y:auto;margin-bottom:14px"><div style="font-size:12px;color:rgba(255,255,255,.28);text-align:center;padding:10px;font-style:italic">Warte auf Teilnehmer…</div></div>
    <div class="u-grid-2">
      <button onclick="kqDStart()" class="etag-btn-primary">🎮 Quiz starten</button>
      <button onclick="renderKqMode(document.getElementById('etag-kq-block'))" class="etag-btn-secondary">← Zurück</button>
    </div>
  </div>`;
  renderKqPlayerList();
}
function renderKqPlayerList(){
  const ps=Object.values(kqS.players||{});
  const cnt=document.getElementById('kq-pcnt');if(cnt)cnt.textContent=ps.length;
  const el=document.getElementById('kq-plist');if(!el)return;
  el.innerHTML=ps.length?ps.map(p=>`<div style="display:flex;align-items:center;gap:9px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);border-radius:9px;padding:7px 12px"><span style="font-size:16px">${p.avatar}</span><span style="font-size:13px;font-weight:900">${kqE(p.name)}</span><span style="margin-left:auto;font-size:10px;color:var(--green)">✓</span></div>`).join(''):'<div style="font-size:12px;color:rgba(255,255,255,.28);text-align:center;padding:10px;font-style:italic">Warte auf Teilnehmer…</div>';
}
function kqDStart(){
  kqLd();kqS.quizActive=true;kqS.currentQ=0;kqS.revealed=false;
  Object.keys(kqS.players).forEach(id=>{kqS.players[id].answers={};kqS.players[id].score=0;});
  kqSv();renderKqQ(document.getElementById('etag-kq-block'));
  clearInterval(window._kqdp);
  window._kqdp=setInterval(()=>{
    if(document.getElementById('kq-anscnt')){kqLd();
      const c=Object.values(kqS.players).filter(p=>p.answers&&p.answers[kqS.currentQ]!==undefined).length;
      const t=Object.keys(kqS.players).length;
      const el=document.getElementById('kq-anscnt');if(el)el.textContent=c+'/'+t+' geantwortet';
    }else clearInterval(window._kqdp);
  },900);
}
function renderKqQ(el){
  kqLd();const q=KQ_QS[kqS.currentQ];
  const cnts=Array(q.opts.length).fill(0);
  Object.values(kqS.players).forEach(p=>{if(p.answers&&p.answers[kqS.currentQ]!==undefined)cnts[p.answers[kqS.currentQ]]++;});
  const tot=cnts.reduce((a,b)=>a+b,0)||1;
  const ans=Object.values(kqS.players).filter(p=>p.answers&&p.answers[kqS.currentQ]!==undefined).length;
  const totalP=Object.keys(kqS.players).length;
  const bars=q.opts.map((o,i)=>{
    const pct=Math.round(cnts[i]/tot*100);
    const col=kqS.revealed?(i===q.correct?'linear-gradient(90deg,#007744,var(--green))':'linear-gradient(90deg,#881122,var(--red))'):'linear-gradient(90deg,#1a3a8f,#2255cc)';
    return`<div style="margin-bottom:7px"><div style="display:flex;justify-content:space-between;font-size:11px;font-weight:800;color:rgba(255,255,255,.6);margin-bottom:2px"><span>${'ABCD'[i]}) ${kqE(o.substring(0,28))}${o.length>28?'…':''}</span><span style="font-family:'Space Mono',monospace;color:rgba(255,255,255,.35)">${cnts[i]} (${pct}%)</span></div><div style="height:18px;background:rgba(255,255,255,.06);border-radius:6px;overflow:hidden"><div style="height:100%;width:${pct}%;background:${col};border-radius:6px;transition:width .6s ease"></div></div></div>`;
  }).join('');
  const optsHtml=q.opts.map((o,i)=>`<div style="padding:10px 12px;border-radius:10px;border:2px solid ${kqS.revealed&&i===q.correct?'var(--green)':'rgba(255,255,255,.12)'};background:${kqS.revealed&&i===q.correct?'rgba(0,201,123,.12)':'rgba(255,255,255,.05)'};display:flex;align-items:center;gap:8px;font-size:12px;font-weight:800;color:${kqS.revealed&&i===q.correct?'#00c97b':'#fff'};${kqS.revealed&&i!==q.correct?'opacity:.3':''}"><span style="width:20px;height:20px;border-radius:5px;background:rgba(255,255,255,.12);font-family:'Space Mono',monospace;font-size:9px;font-weight:700;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0">${'ABCD'[i]}</span>${kqE(o)}</div>`).join('');
  el.innerHTML=`<div class="etag-card">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
      <div style="width:7px;height:7px;border-radius:50%;background:var(--green);box-shadow:0 0 7px var(--green)"></div>
      <div style="font-size:12px;font-weight:800;flex:1">Frage ${kqS.currentQ+1} / ${KQ_QS.length}</div>
      <div id="kq-anscnt" style="font-size:11px;font-family:'Space Mono',monospace;color:var(--cyan)">${ans}/${totalP} geantwortet</div>
    </div>
    <div style="background:linear-gradient(160deg,#0a1832,#0d2660);border:2px solid rgba(0,194,224,.18);border-radius:14px;padding:16px;margin-bottom:10px">
      <div style="font-size:14px;font-weight:900;line-height:1.45;margin-bottom:12px">${kqE(q.q)}</div>
      <div class="u-col-6">${optsHtml}</div>
      ${kqS.revealed?`<div style="font-size:11px;color:rgba(255,255,255,.55);font-weight:700;line-height:1.6;padding-top:10px;border-top:1px solid rgba(255,255,255,.1);margin-top:10px">💡 ${kqE(q.explain)}</div>`:''}
    </div>
    <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:10px;margin-bottom:12px">${bars}</div>
    <div style="display:flex;gap:8px">
      ${!kqS.revealed?`<button onclick="kqReveal()" class="etag-btn-secondary" style="flex:1">👁 Auflösen</button>`:`<button onclick="kqNext()" class="etag-btn-primary" style="flex:1">${kqS.currentQ>=KQ_QS.length-1?'🏆 Ranking':'Nächste →'}</button>`}
      <button onclick="kqRanking()" class="etag-btn-secondary">🏆</button>
    </div>
  </div>`;
}
function kqReveal(){
  kqLd();kqS.revealed=true;
  Object.keys(kqS.players).forEach(id=>{const p=kqS.players[id];if(p.answers&&p.answers[kqS.currentQ]===KQ_QS[kqS.currentQ].correct)p.score=(p.score||0)+100;});
  kqSv();renderKqQ(document.getElementById('etag-kq-block'));
}
function kqNext(){
  if(kqS.currentQ>=KQ_QS.length-1){kqS.quizActive=false;kqSv();kqRanking();return;}
  kqS.currentQ++;kqS.revealed=false;kqSv();renderKqQ(document.getElementById('etag-kq-block'));
}
function kqStartAnalog(){
  kqLd();kqS.mode='analog';kqS.currentQ=0;kqS.revealed=false;kqS.aVotes=[];
  if(!kqS.analogPlayers||!kqS.analogPlayers.length){
    const names=prompt('Namen der Schüler (kommagetrennt):\nOder OK leer lassen für anonymen Modus.');
    if(names&&names.trim()){kqS.analogPlayers=names.split(',').map(n=>n.trim()).filter(Boolean);kqS.analogScores={};kqS.analogPlayers.forEach(n=>kqS.analogScores[n]=0);}
    else{kqS.analogPlayers=[];kqS.analogScores={};}
  }
  kqSv();renderKqAnalog(document.getElementById('etag-kq-block'));
}
function renderKqAnalog(el){
  const q=KQ_QS[kqS.currentQ];
  if(!kqS.aVotes||kqS.aVotes.length!==q.opts.length)kqS.aVotes=Array(q.opts.length).fill(0);
  const dots=KQ_QS.map((_,i)=>`<div style="width:${i===kqS.currentQ?14:6}px;height:6px;border-radius:3px;background:${i<kqS.currentQ?'var(--green)':i===kqS.currentQ?'var(--cyan)':'rgba(255,255,255,.15)'};transition:all .25s"></div>`).join('');
  const optsHtml=q.opts.map((o,i)=>`<div style="padding:13px 14px;border-radius:12px;border:2px solid ${kqS.revealed?(i===q.correct?'var(--green)':'rgba(255,255,255,.07)'):'rgba(255,255,255,.18)'};background:${kqS.revealed?(i===q.correct?'rgba(0,201,123,.15)':'rgba(255,255,255,.03)'):'rgba(255,255,255,.05)'};display:flex;align-items:center;gap:10px;font-size:clamp(12px,2.5vw,15px);font-weight:800;color:${kqS.revealed&&i===q.correct?'#00c97b':'#fff'};${kqS.revealed&&i!==q.correct?'opacity:.3':''}"><span style="width:26px;height:26px;border-radius:7px;background:${kqS.revealed&&i===q.correct?'var(--green)':'rgba(255,255,255,.12)'};font-family:'Space Mono',monospace;font-size:11px;font-weight:700;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0">${'ABCD'[i]}</span>${kqE(o)}</div>`).join('');
  let scoreBlock='';
  if(kqS.revealed&&kqS.analogPlayers&&kqS.analogPlayers.length){
    scoreBlock=`<div class="etag-card" style="margin-top:10px"><div style="font-size:11px;font-weight:900;color:rgba(255,255,255,.5);margin-bottom:10px">📝 Punkte vergeben</div>${kqS.analogPlayers.map((name,i)=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.05)"><span style="font-size:13px;font-weight:700;flex:1">${kqE(name)}</span><select id="kqas-${i}" style="background:rgba(255,255,255,.08);border:1.5px solid rgba(255,255,255,.15);color:#fff;border-radius:8px;padding:4px 8px;font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;cursor:pointer"><option value="1">✅ Richtig</option><option value="0">❌ Falsch</option></select><span style="font-family:'Space Mono',monospace;font-size:11px;color:var(--yellow);min-width:44px;text-align:right">${kqS.analogScores[name]||0} Pkt</span></div>`).join('')}<button onclick="kqSaveAnalog()" class="etag-btn-primary" style="width:100%;margin-top:10px">Punkte speichern ✓</button></div>`;
  }
  el.innerHTML=`<div class="etag-card">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
      <span style="font-size:18px">✋</span>
      <div style="flex:1"><div style="font-size:8px;font-family:'Space Mono',monospace;color:var(--yellow);letter-spacing:2px;text-transform:uppercase">Analog-Modus</div><div style="font-size:13px;font-weight:900">Frage ${kqS.currentQ+1} / ${KQ_QS.length}</div></div>
      <div style="display:flex;gap:3px;align-items:center">${dots}</div>
    </div>
    <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap">
      <button onclick="kqAPrev()" class="etag-btn-secondary" style="padding:8px 12px;font-size:12px" ${kqS.currentQ===0?'disabled':''}>←</button>
      ${!kqS.revealed?`<button onclick="kqAReveal()" class="etag-btn-secondary" style="padding:8px 12px;font-size:12px">👁 Auflösen</button>`:''}
      <button onclick="kqANext()" class="etag-btn-primary" style="padding:8px 14px;font-size:12px;flex:1">${kqS.currentQ>=KQ_QS.length-1?'🏆 Ergebnis':'Nächste →'}</button>
    </div>
    <div style="background:linear-gradient(160deg,#0a1832,#0d2660);border:2px solid rgba(0,194,224,.18);border-radius:16px;padding:20px;margin-bottom:12px">
      <div style="font-size:clamp(14px,3vw,20px);font-weight:900;line-height:1.4;margin-bottom:16px">${kqE(q.q)}</div>
      <div class="u-grid-2">${optsHtml}</div>
    </div>
    ${kqS.revealed?`<div class="hl" style="margin-bottom:10px">💡 ${kqE(q.explain)}</div>`:''}
    <div class="etag-card" style="margin-bottom:0">
      <div style="font-size:11px;font-weight:900;color:rgba(255,255,255,.5);margin-bottom:8px;display:flex;align-items:center;justify-content:space-between">✋ Handzeichen zählen <button onclick="kqResetV()" style="font-size:10px;color:rgba(255,255,255,.3);background:none;border:none;cursor:pointer;font-family:'Nunito',sans-serif;font-weight:700;padding:2px 8px">↺ Reset</button></div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px">${q.opts.map((_,i)=>`<div style="background:rgba(255,255,255,.05);border:2px solid rgba(255,255,255,.1);border-radius:10px;padding:8px 4px;text-align:center"><div style="font-family:'Space Mono',monospace;font-size:13px;font-weight:700;color:var(--cyan)">${'ABCD'[i]}</div><div id="kqvc-${i}" style="font-family:'Space Mono',monospace;font-size:18px;color:var(--yellow);font-weight:700;margin:4px 0">${kqS.aVotes[i]||0}</div><div style="display:flex;gap:3px;justify-content:center"><button onclick="kqCV(${i},-1)" style="background:rgba(255,255,255,.1);border:none;color:#fff;border-radius:5px;width:24px;height:24px;cursor:pointer;font-size:14px">−</button><button onclick="kqCV(${i},1)" style="background:rgba(255,255,255,.1);border:none;color:#fff;border-radius:5px;width:24px;height:24px;cursor:pointer;font-size:14px">+</button></div></div>`).join('')}</div>
    </div>
    ${scoreBlock}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px">
      <button onclick="kqRanking()" class="etag-btn-primary">🏆 Ranking</button>
      <button onclick="renderKqMode(document.getElementById('etag-kq-block'))" class="etag-btn-secondary">← Modus</button>
    </div>
  </div>`;
}
function kqCV(i,d){if(!kqS.aVotes||kqS.aVotes.length<=i)kqS.aVotes=Array(KQ_QS[kqS.currentQ].opts.length).fill(0);kqS.aVotes[i]=Math.max(0,(kqS.aVotes[i]||0)+d);kqSv();const el=document.getElementById('kqvc-'+i);if(el)el.textContent=kqS.aVotes[i];}
function kqResetV(){kqS.aVotes=Array(KQ_QS[kqS.currentQ].opts.length).fill(0);kqSv();renderKqAnalog(document.getElementById('etag-kq-block'));}
function kqAReveal(){kqS.revealed=true;kqSv();renderKqAnalog(document.getElementById('etag-kq-block'));}
function kqANext(){if(kqS.currentQ>=KQ_QS.length-1){kqRanking();return;}kqS.currentQ++;kqS.revealed=false;kqS.aVotes=Array(KQ_QS[kqS.currentQ].opts.length).fill(0);kqSv();renderKqAnalog(document.getElementById('etag-kq-block'));}
function kqAPrev(){if(kqS.currentQ<=0)return;kqS.currentQ--;kqS.revealed=false;kqS.aVotes=Array(KQ_QS[kqS.currentQ].opts.length).fill(0);kqSv();renderKqAnalog(document.getElementById('etag-kq-block'));}
function kqSaveAnalog(){kqLd();kqS.analogPlayers.forEach((name,i)=>{const v=document.getElementById('kqas-'+i);if(v&&v.value==='1')kqS.analogScores[name]=(kqS.analogScores[name]||0)+100;});kqSv();renderKqAnalog(document.getElementById('etag-kq-block'));}
function kqShowJoin(){
  const el=document.getElementById('etag-kq-block');
  el.innerHTML=`<div class="etag-card" style="text-align:center;max-width:360px;margin:0 auto;padding:24px 20px">
    <div style="font-size:44px;margin-bottom:10px">🎓</div>
    <div style="font-size:17px;font-weight:900;margin-bottom:6px">Quiz beitreten</div>
    <div style="font-size:12px;color:rgba(255,255,255,.45);font-weight:700;margin-bottom:16px;line-height:1.65">Gib den 4-stelligen Code vom Beamer ein.</div>
    <input id="kq-jcode" maxlength="4" placeholder="CODE" style="width:100%;box-sizing:border-box;padding:12px;border-radius:11px;border:2px solid rgba(255,255,255,.18);background:rgba(255,255,255,.07);color:#fff;font-family:'Space Mono',monospace;font-size:22px;text-align:center;letter-spacing:5px;outline:none;margin-bottom:8px;text-transform:uppercase" oninput="this.value=this.value.toUpperCase().replace(/[^A-Z0-9]/g,'')" onkeydown="if(event.key==='Enter')document.getElementById('kq-jname').focus()">
    <input id="kq-jname" maxlength="22" placeholder="Dein Name" style="width:100%;box-sizing:border-box;padding:11px;border-radius:11px;border:2px solid rgba(255,255,255,.18);background:rgba(255,255,255,.07);color:#fff;font-family:'Nunito',sans-serif;font-size:14px;font-weight:700;text-align:center;outline:none;margin-bottom:10px" onkeydown="if(event.key==='Enter')kqDoJoin()">
    <div id="kq-jerr" style="font-size:12px;color:var(--red);font-weight:800;min-height:14px;margin-bottom:8px"></div>
    <div class="u-grid-2">
      <button onclick="renderKqRole(document.getElementById('etag-kq-block'))" class="etag-btn-secondary">← Zurück</button>
      <button onclick="kqDoJoin()" class="etag-btn-primary">Beitreten →</button>
    </div>
  </div>`;
  setTimeout(()=>{const i=document.getElementById('kq-jcode');if(i)i.focus();},60);
}
function kqDoJoin(){
  kqLd();
  const code=document.getElementById('kq-jcode').value.trim().toUpperCase();
  const name=document.getElementById('kq-jname').value.trim();
  const err=document.getElementById('kq-jerr');
  if(code.length!==4){if(err)err.textContent='Bitte 4-stelligen Code eingeben.';return;}
  if(name.length<2){if(err)err.textContent='Bitte Namen eingeben (min. 2 Zeichen).';return;}
  if(kqS.code!==code){if(err)err.textContent='Code nicht gefunden – frage den Dozenten.';return;}
  const id='kqp_'+Date.now()+'_'+Math.random().toString(36).substr(2,4);
  kqS.myId=id;
  kqS.players[id]={name,avatar:KQ_AVATARS[0|Math.random()*KQ_AVATARS.length],score:0,answers:{},joinedAt:Date.now()};
  kqSv();sessionStorage.setItem('kq2_sid',id);
  const el=document.getElementById('etag-kq-block');
  renderKqStudent(el);startKqPoll(el);
}
function renderKqStudent(el){
  kqLd();
  if(!kqS.myId||!kqS.players[kqS.myId]){renderKqRole(el);return;}
  const me=kqS.players[kqS.myId];
  const sorted=Object.values(kqS.players).sort((a,b)=>(b.score||0)-(a.score||0));
  const rank=sorted.findIndex(p=>p.name===me.name)+1;
  let body='';
  if(!kqS.quizActive){
    body=`<div style="text-align:center;padding:32px 16px"><span style="font-size:48px;display:block;margin-bottom:12px">⏳</span><div style="font-size:16px;font-weight:900;margin-bottom:6px">Warte auf den Dozenten…</div><div style="font-size:12px;color:rgba(255,255,255,.4);font-weight:700">Das Quiz startet gleich!</div></div>`;
  } else if(kqS.currentQ>=KQ_QS.length){
    body=`<div style="text-align:center;padding:32px"><div style="font-size:48px;margin-bottom:12px">🎉</div><div style="font-size:17px;font-weight:900">Fertig! Warte auf das Ergebnis…</div></div>`;
  } else {
    const qi=kqS.currentQ,q=KQ_QS[qi];
    const answered=me.answers&&me.answers[qi]!==undefined;
    const chosen=me.answers&&me.answers[qi];
    const rev=kqS.revealed;
    let fb='';
    if(answered&&rev){const ok=chosen===q.correct;fb=`<div class="hl" style="margin-top:10px;background:${ok?'rgba(0,201,123,.1)':'rgba(255,77,109,.07)'};border-color:${ok?'rgba(0,201,123,.3)':'rgba(255,77,109,.3)'};color:${ok?'#00c97b':'#ff4d6d'}">${ok?'✅ Richtig! +100 Punkte':'❌ Leider falsch'}<div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,.55);font-weight:700;line-height:1.6">💡 ${kqE(q.explain)}</div></div>`;}
    else if(answered){fb=`<div class="hl" style="margin-top:10px;background:rgba(0,194,224,.07);border-color:rgba(0,194,224,.2);font-size:12px;font-weight:800;color:rgba(0,194,224,.8)">⏳ Geantwortet – warte auf Auflösung</div>`;}
    body=`<div style="background:rgba(255,255,255,.06);border:2px solid rgba(255,255,255,.12);border-radius:14px;padding:16px">
      <div style="font-size:9px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.38);letter-spacing:2px;text-transform:uppercase;margin-bottom:4px">Frage ${qi+1} / ${KQ_QS.length}</div>
      <div style="height:4px;background:rgba(255,255,255,.09);border-radius:100px;margin-bottom:12px;overflow:hidden"><div style="height:100%;width:${Math.round((qi+1)/KQ_QS.length*100)}%;background:var(--cyan);border-radius:100px"></div></div>
      <div style="font-size:14px;font-weight:900;line-height:1.5;margin-bottom:12px">${kqE(q.q)}</div>
      ${q.opts.map((o,i)=>{const dis=answered||rev;const bc=dis?(i===q.correct?'var(--green)':i===chosen&&i!==q.correct?'var(--red)':'rgba(255,255,255,.08)'):'rgba(255,255,255,.12)';const bg=dis?(i===q.correct?'rgba(0,201,123,.08)':i===chosen&&i!==q.correct?'rgba(255,77,109,.08)':'rgba(255,255,255,.03)'):'rgba(255,255,255,.05)';return`<button onclick="${dis?'':'kqStuAns('+qi+','+i+')'}" style="width:100%;text-align:left;padding:11px 13px;border-radius:10px;border:2px solid ${bc};background:${bg};cursor:${dis?'not-allowed':'pointer'};font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;color:#fff;margin-bottom:6px;display:flex;align-items:center;gap:8px" ${dis?'disabled':''}><span style="width:20px;height:20px;border-radius:5px;background:rgba(255,255,255,.1);font-family:'Space Mono',monospace;font-size:9px;font-weight:700;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0">${'ABCD'[i]}</span>${kqE(o)}</button>`;}).join('')}
      ${fb}
    </div>`;
  }
  el.innerHTML=`<div class="etag-card">
    <div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:9px 13px;margin-bottom:12px">
      <span style="font-size:22px">${me.avatar}</span>
      <div><div style="font-size:13px;font-weight:900">${kqE(me.name)}</div><div style="font-size:11px;font-family:'Space Mono',monospace;color:var(--yellow)">${me.score||0} Punkte</div></div>
      <div style="margin-left:auto;text-align:right"><div style="font-size:8px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.3);text-transform:uppercase;margin-bottom:2px">Platz</div><div style="font-size:18px;font-weight:900;color:var(--yellow)">${rank>0?'#'+rank:'–'}</div></div>
    </div>
    ${body}
  </div>`;
}
let _kqPoll=null;
function startKqPoll(el){
  if(_kqPoll)return;
  _kqPoll=setInterval(()=>{
    kqLd();const block=document.getElementById('etag-kq-block');
    if(!block||!kqS.myId||!kqS.players||!kqS.players[kqS.myId]){clearInterval(_kqPoll);_kqPoll=null;return;}
    renderKqStudent(block);
  },900);
}
function kqStuAns(qi,chosen){
  kqLd();if(!kqS.myId||!kqS.players[kqS.myId])return;
  if(kqS.players[kqS.myId].answers[qi]!==undefined)return;
  kqS.players[kqS.myId].answers[qi]=chosen;kqSv();
  renderKqStudent(document.getElementById('etag-kq-block'));
}
function kqRanking(){
  kqLd();const el=document.getElementById('etag-kq-block');
  const ps=kqS.mode==='analog'&&kqS.analogPlayers&&kqS.analogPlayers.length
    ?kqS.analogPlayers.map(name=>({name,avatar:KQ_AVATARS[0|Math.random()*KQ_AVATARS.length],score:kqS.analogScores[name]||0})).sort((a,b)=>b.score-a.score)
    :Object.values(kqS.players).sort((a,b)=>(b.score||0)-(a.score||0));
  const mx=ps[0]?.score||1;
  const medals=['🥇','🥈','🥉'];
  let podium='';
  if(ps.length>=2){
    const ord=ps.length>=3?[ps[1],ps[0],ps[2]]:[ps[0],ps[1]];
    const hts=ps.length>=3?['80px','110px','60px']:['110px','80px'];
    const mds=ps.length>=3?['🥈','🥇','🥉']:['🥇','🥈'];
    podium=`<div style="display:flex;align-items:flex-end;justify-content:center;gap:8px;margin-bottom:20px">${ord.map((p,i)=>p?`<div style="flex:1;max-width:140px;text-align:center"><div style="font-size:26px;margin-bottom:4px">${p.avatar}</div><div style="font-size:11px;font-weight:900;line-height:1.25;margin-bottom:3px">${kqE(p.name)}</div><div style="font-family:'Space Mono',monospace;font-size:10px;color:var(--yellow);margin-bottom:4px">${p.score} Pkt</div><div style="width:100%;height:${hts[i]};border-radius:9px 9px 0 0;display:flex;align-items:center;justify-content:center;font-size:22px;background:${i===1?'linear-gradient(160deg,#a07800,#ffd700)':i===0?'linear-gradient(160deg,#606060,#c0c0c0)':'linear-gradient(160deg,#7a3d0a,#cd7f32)'}">${mds[i]}</div></div>`:'').join('')}</div>`;
  }
  const list=ps.map((p,i)=>`<div style="display:flex;align-items:center;gap:9px;background:${i<3?'rgba(255,217,74,.06)':'rgba(255,255,255,.04)'};border:1px solid ${i<3?'rgba(255,217,74,.15)':'rgba(255,255,255,.08)'};border-radius:9px;padding:8px 11px;margin-bottom:4px"><span style="font-family:'Space Mono',monospace;font-size:11px;color:rgba(255,255,255,.35);min-width:18px;text-align:center">${i+1}</span><span style="font-size:13px;min-width:16px">${medals[i]||''}</span><span style="font-size:16px">${p.avatar}</span><span style="font-size:13px;font-weight:900;flex:1">${kqE(p.name)}</span><div style="flex:1;max-width:80px"><div style="height:4px;background:rgba(255,255,255,.07);border-radius:100px;overflow:hidden"><div style="height:100%;width:${Math.round((p.score||0)/mx*100)}%;background:linear-gradient(90deg,var(--cyan),var(--blue));border-radius:100px"></div></div></div><span style="font-family:'Space Mono',monospace;font-size:11px;color:var(--yellow);margin-left:6px">${p.score||0} Pkt</span></div>`).join('')||'<div style="padding:16px;text-align:center;font-size:13px;color:rgba(255,255,255,.3)">Noch keine Teilnehmer</div>';
  el.innerHTML=`<div class="etag-card">
    <div style="text-align:center;padding:10px 0 16px"><div style="font-size:32px;margin-bottom:6px">🏆</div><div style="font-size:19px;font-weight:900;margin-bottom:3px">Klassenranking</div><div style="font-size:11px;color:rgba(255,255,255,.4);font-weight:700">Einführungstag · Endergebnis</div></div>
    ${podium}${list}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px">
      <button onclick="kqRanking()" class="etag-btn-secondary">🔄 Aktualisieren</button>
      <button onclick="renderKqRole(document.getElementById('etag-kq-block'))" class="etag-btn-secondary">← Neu starten</button>
    </div>
  </div>`;
}
// ══════════════════════════════════════════
// AO BASICS – „Darf man das?" (Einsteiger)
// ══════════════════════════════════════════
const AO_BASICS_CASES = [
  {
    icon:'🤫', title:'Das Steuergeheimnis – Zuhause am Tisch',
    situation:'Du hast heute deinen ersten Tag im Finanzamt. Beim Abendessen fragt dein Vater neugierig: „Na, hattest du interessante Fälle? Wer so alles in unserer Straße sein Geld versteckt?" Deine Mutter lacht: „Stimmt, unser Nachbar Herr Müller hat doch angeblich kaum Einkommen, aber fährt einen Porsche..." Du weißt aus der Akte, dass Herr Müller eine Betriebsprüfung läuft.',
    question:'Was darfst du deinen Eltern am Abendbrottisch erzählen?',
    opts:[
      'Allgemeines über deine Arbeit – aber nichts über konkrete Steuerpflichtige oder Fälle',
      'Alles – Familie ist vertrauenswürdig und kein "Dritter" im Sinne des Gesetzes',
      'Du darfst erzählen, dass Herr Müller geprüft wird – aber keine Zahlen nennen',
      'Nur was in der Zeitung steht – das ist ja ohnehin öffentlich'
    ],
    correct:0,
    explain:'<b>§ 30 AO – Steuergeheimnis:</b> Das Steuergeheimnis schützt ausnahmslos alle Daten aus dem Besteuerungsverfahren. „Amtsträger" (= du als Beamter oder Angestellter des Finanzamts) dürfen diese Informationen an <b>niemanden</b> weitergeben – auch nicht an Familienangehörige.<br><br>Schon zu sagen „Herr Müller wird geprüft" ist ein Verstoß. Selbst harmlos klingende Details (Wohnungsgröße, Fahrzeug, Lebensstandard) können in Kombination mit Aktenwissen strafbar sein.<br><br><b>Was droht?</b> Freiheitsstrafe bis 2 Jahre oder Geldstrafe (§ 355 StGB), dazu disziplinarrechtliche Folgen bis zur Entlassung aus dem Beamtenverhältnis.',
    praxis:'Die Versuchung ist real – Familie und Freunde sind neugierig, und du weißt plötzlich Dinge über Nachbarn oder Bekannte. Die klare Antwort ist immer: "Tut mir leid, ich darf über meine Arbeit nichts erzählen." Das schützt dich, deinen Job – und das Vertrauen der Bürger ins Finanzamt.'
  },
  {
    icon:'📬', title:'Die Steuererklärung deines Nachbarn',
    situation:'Du arbeitest seit drei Monaten im Finanzamt, Sachgebiet ESt. Heute öffnest du eine neue Post und erkennst sofort den Namen: Klaus Fischer, Fichtenweg 4 – dein direkter Nachbar, mit dem du jeden Abend auf der Terrasse redest. Seine Steuererklärung liegt vor dir. Du siehst sein genaues Gehalt, seine Schulden, seine Krankenversicherungskosten.',
    question:'Was musst du jetzt tun?',
    opts:[
      'Den Fall normal bearbeiten – privat und beruflich trennen ist Professionalismus',
      'Den Fall sofort an deinen Vorgesetzten melden und abgeben (§ 82 AO – Ausschluss wegen Befangenheit)',
      'Klaus diskret anrufen und fragen, ob er damit einverstanden ist, dass du seinen Fall bearbeitest',
      'Die Akte ungelesen zurücklegen und abwarten, ob jemand nachfragt'
    ],
    correct:1,
    explain:'<b>§ 82 AO – Ausschluss wegen Befangenheit:</b> Beamte sind von der Mitwirkung ausgeschlossen, wenn ein persönliches Näheverhältnis besteht (Verwandtschaft, Nachbarschaft, Freundschaft, Geschäftsbeziehung).<br><br>Du musst den Fall <b>sofort</b> deinem Vorgesetzten melden – nicht erst nach dem Lesen, nicht nach dem Bearbeiten. Selbst ein flüchtiger Blick auf die Daten kann problematisch sein. Der Vorgesetzte ordnet dann die Weitergabe an einen anderen Sachbearbeiter an.<br><br><b>Warum so strikt?</b> Befangenheit schadet dem Vertrauen in die unparteiische Steuerverwaltung – egal ob du tatsächlich benachteiligst oder begünstigst.',
    praxis:'Im echten Finanzamt passiert das regelmäßig – besonders in kleineren Städten kennt man viele Leute. Die Regel ist simpel: Sofort melden, nie selbst entscheiden, ob es "schlimm genug" für eine Meldung ist. Im Zweifel immer abgeben.'
  },
  {
    icon:'⏰', title:'Die vergessene Steuererklärung',
    situation:'Lena hat ihre Steuererklärung 2021 nie eingereicht. Es ist jetzt 2026. Ihr Steuerberater sagt: „Zu spät, das Finanzamt kann nichts mehr machen."',
    question:'Stimmt das – ist die Forderung wirklich weg?',
    opts:['Ja – nach 4 Jahren ist alles verjährt','Nein – die Festsetzungsverjährung beträgt 4 Jahre, läuft aber erst ab Abgabe der Erklärung','Nein – ohne Abgabe beträgt die Frist 10 Jahre (Anlaufhemmung § 170 AO)','Ja – das Finanzamt hat 3 Jahre Zeit'],
    correct:2,
    explain:'Wenn gar keine Erklärung abgegeben wird, greift die Anlaufhemmung (§ 170 Abs. 2 AO): Die 4-jährige Festsetzungsfrist beginnt erst 3 Jahre nach Ablauf des Kalenderjahres. Für 2021 läuft die Frist also bis Ende 2028. Der Steuerberater liegt falsch.',
    praxis:'Verjährungsfristen sind ein zentrales Thema in der AO-Prüfung. Anlaufhemmung, Ablaufhemmung und die unterschiedlichen Fristen bei Hinterziehung (10 Jahre) musst du sicher beherrschen.'
  },
  {
    icon:'🔍', title:'Die Betriebsprüfung',
    situation:'Ali führt ein kleines Café. Eines Morgens steht ein Betriebsprüfer vor der Tür und möchte die Kasse und alle Belege der letzten 3 Jahre sehen.',
    question:'Muss Ali den Prüfer hereinlassen und alles zeigen?',
    opts:['Nein – Ali kann die Prüfung verweigern','Ja – Steuerpflichtige müssen bei Prüfungen mitwirken (§ 200 AO)','Nur mit richterlichem Beschluss','Ja, aber er darf erst seinen Anwalt anrufen'],
    correct:1,
    explain:'§ 200 AO verpflichtet Steuerpflichtige zur Mitwirkung bei Betriebsprüfungen: Bücher, Aufzeichnungen, Belege und Auskunft müssen auf Verlangen vorgelegt werden. Die Prüfung kann aber im Voraus angekündigt werden – außer bei Verdacht auf Steuerhinterziehung.',
    praxis:'Betriebsprüfungen sind ein wichtiges Instrument der Steuerverwaltung. Als Finanzbeamter lernst du später, wie man sie plant und durchführt.'
  },
  {
    icon:'💸', title:'Steuerhinterziehung – wie ernst ist das?',
    situation:'Tom hat drei Jahre lang 15.000 € Nebeneinkünfte aus Vermietung nicht angegeben. Er denkt: „Das findet doch keiner."',
    question:'Was droht Tom wenn das Finanzamt es herausfindet?',
    opts:['Nur Nachzahlung des Steuerbetrags','Nachzahlung + Zinsen (1,8 % p.a.) + Hinterziehungszuschlag','Nachzahlung + Zinsen + Geldstrafe oder Freiheitsstrafe bis 5 Jahre (§ 370 AO)','Nur eine schriftliche Verwarnung beim ersten Mal'],
    correct:2,
    explain:'Steuerhinterziehung (§ 370 AO) ist eine Straftat – kein Kavaliersdelikt. Es drohen: Nachzahlung aller Steuern, Hinterziehungszinsen (1,8% p.a.), und Geldstrafe oder Freiheitsstrafe bis 5 Jahre (bei besonders schweren Fällen bis 10 Jahre). Eine Selbstanzeige (§ 371 AO) kann noch Straffreiheit bringen – aber nur wenn das FA noch nichts weiß.',
    praxis:'§ 370 AO gehört zu den prüfungsrelevantesten Normen der AO. Kenne die Voraussetzungen, Strafrahmen und die Selbstanzeige.'
  },
  {
    icon:'🏦', title:'Das Kontenabrufverfahren',
    situation:'Sophie hat kein Konto angegeben in ihrer Steuererklärung. Sie fragt sich: „Kann das Finanzamt meine Konten heimlich abfragen?"',
    question:'Darf das Finanzamt Kontodaten bei der Bank abfragen?',
    opts:['Nein – das verletzt das Bankgeheimnis','Ja – aber nur mit Zustimmung des Steuerpflichtigen','Ja – das Kontenabrufverfahren (§ 93b AO) erlaubt Abfragen ohne Wissen des Betroffenen','Nur in Strafverfahren'],
    correct:2,
    explain:'§ 93b AO erlaubt dem Finanzamt Kontostammdaten (Kontonummer, Inhaber, Verfügungsberechtigte) beim Bundeszentralamt abzurufen – ohne den Steuerpflichtigen zu informieren. Nur Stammdaten, keine Kontobewegungen. Das Bankgeheimnis gibt es im Steuerrecht faktisch nicht mehr.',
    praxis:'Das Kontenabrufverfahren zeigt: Das Finanzamt hat mehr Möglichkeiten als viele denken. Im Ausbildungsalltag relevant bei Ermittlungen und Schätzungsverfahren.'
  }
];

let aobIdx=0, aobAnswered=false;
const AOB_KEY='aoBasicsProgress';
function getAobProgress(){try{return JSON.parse(localStorage.getItem(AOB_KEY)||'{}');}catch(e){return{};}}
function saveAobProgress(i){const p=getAobProgress();p[i]=true;localStorage.setItem(AOB_KEY,JSON.stringify(p));}

// ==================== BASICS INTRO STATE ====================
let _introStep = {ao:0, recht:0, ust:0, bilanz:0, est:0};
let _introQuiz = {}; // {ao_0: true, recht_2: false, ...}
function _introNext(mod, step){ _introStep[mod]=step; render(); }
function _introShowAnswer(mod, idx){ _introQuiz[mod+'_'+idx]=true; render(); }


function renderAoBasics(a){
  if(_introStep['ao']===0){ _renderIntro_ao_was(a); return; }
  if(_introStep['ao']===1){ _renderIntro_ao_warum(a); return; }
  if(_introStep['ao']===2){ _renderIntro_ao_0(a); return; }
  if(_introStep['ao']===3){ _renderIntro_ao_1(a); return; }
  // else: show original content
  _renderIntro_ao_content(a);
}
function _renderIntro_ao_content(a){
  a.classList.add('basics-dark-mode');
  const prog=getAobProgress();
  const done=Object.keys(prog).length;
  setTopicHeader('ao_basics');
  a.innerHTML=`
  <div style="background:linear-gradient(135deg,rgba(0,60,100,.7),rgba(0,30,70,.8));border:2px solid rgba(0,194,224,.2);border-radius:18px;padding:18px;margin-bottom:14px">
    <div class="u-row-10-mb">
      <span style="font-size:28px">⚖️</span>
      <div>
        <div class="u-heading">AO Basics – Darf man das?</div>
        <div class="u-caption">Abgabenordnung · Echte Fälle · ${done}/${AO_BASICS_CASES.length} gelöst</div>
      </div>
    </div>
    <div class="u-prog-track"><div style="height:100%;width:${Math.round(done/AO_BASICS_CASES.length*100)}%;background:linear-gradient(90deg,var(--cyan),var(--blue));border-radius:100px;transition:width .5s"></div></div>
  </div>
  <div class="u-col-gap" id="aob-cards">
    ${AO_BASICS_CASES.map((c,i)=>`
    <div id="aob-case-${i}" style="background:rgba(255,255,255,.04);border:2px solid ${prog[i]?'rgba(0,201,123,.3)':'rgba(255,255,255,.1)'};border-radius:16px;overflow:hidden">
      <div onclick="aobToggle(${i})" class="u-acc-trigger">
        <span style="font-size:26px">${c.icon}</span>
        <div style="flex:1">
          <div class="u-heading-sm">${c.title}</div>
          <div class="u-meta">${prog[i]?'✅ Gelöst':'Tippen zum Öffnen'}</div>
        </div>
        <span id="aob-chevron-${i}" class="u-chevron">›</span>
      </div>
      <div id="aob-body-${i}" class="u-acc-body">
        <div style="font-size:13px;color:rgba(255,255,255,.75);line-height:1.65;margin-bottom:12px;padding:12px;background:rgba(255,255,255,.04);border-radius:10px;border-left:3px solid rgba(0,194,224,.4)">${c.situation}</div>
        <div style="font-size:12px;font-weight:900;color:var(--cyan);margin-bottom:8px">❓ ${c.question}</div>
        <div id="aob-opts-${i}" class="u-col-6">
          ${c.opts.map((o,j)=>`<button onclick="aobAnswer(${i},${j})" id="aob-opt-${i}-${j}" style="text-align:left;padding:10px 13px;border-radius:10px;border:2px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);cursor:pointer;font-family:'Nunito',sans-serif;font-weight:700;font-size:12px;color:#fff;display:flex;align-items:flex-start;gap:8px;transition:all .15s"><span style="width:20px;height:20px;border-radius:5px;background:rgba(255,255,255,.1);font-family:'Space Mono',monospace;font-size:9px;font-weight:700;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px">${'ABCD'[j]}</span>${o}</button>`).join('')}
        </div>
        <div id="aob-explain-${i}" style="display:none"></div>
      </div>
    </div>`).join('')}
  </div>`;
}

function aobToggle(i){
  const body=document.getElementById('aob-body-'+i);
  const chev=document.getElementById('aob-chevron-'+i);
  if(!body)return;
  const open=body.style.display!=='none';
  body.style.display=open?'none':'block';
  if(chev)chev.style.transform=open?'':'rotate(90deg)';
}

function aobAnswer(i,chosen){
  const c=AO_BASICS_CASES[i];
  const prog=getAobProgress();
  if(prog[i])return; // already answered
  saveAobProgress(i);
  const ok=chosen===c.correct;
  // Style all buttons
  c.opts.forEach((_,j)=>{
    const btn=document.getElementById('aob-opt-'+i+'-'+j);
    if(!btn)return;
    btn.disabled=true;
    if(j===c.correct){btn.style.borderColor='var(--green)';btn.style.background='rgba(0,201,123,.1)';btn.style.color='#00c97b';}
    else if(j===chosen&&!ok){btn.style.borderColor='var(--red)';btn.style.background='rgba(255,77,109,.08)';btn.style.opacity='.7';}
    else btn.style.opacity='.35';
  });
  // Explanation
  const expl=document.getElementById('aob-explain-'+i);
  if(expl){
    expl.style.display='block';
    expl.innerHTML=`<div style="margin-top:10px;padding:12px;border-radius:10px;background:${ok?'rgba(0,201,123,.08)':'rgba(255,77,109,.06)'};border:2px solid ${ok?'rgba(0,201,123,.25)':'rgba(255,77,109,.2)'}">
      <div style="font-size:12px;font-weight:900;color:${ok?'#00c97b':'#ff4d6d'};margin-bottom:6px">${ok?'✅ Richtig!':'❌ Leider falsch.'}</div>
      <div class="u-body-dim">${c.explain}</div>
      <div style="margin-top:10px;padding:8px 10px;background:rgba(0,194,224,.07);border-radius:8px;border-left:3px solid rgba(0,194,224,.4);font-size:11px;color:rgba(0,194,224,.8);font-weight:700;line-height:1.6">🎓 <b>Für deine Ausbildung:</b> ${c.praxis}</div>
    </div>`;
  }
  // Update case border
  const card=document.getElementById('aob-case-'+i);
  if(card) card.style.borderColor='rgba(0,201,123,.3)';
  // Update header progress
  renderAoBasics(document.getElementById('ga'));
  // Re-open this case after re-render
  const body=document.getElementById('aob-body-'+i);
  if(body) body.style.display='block';
  const chev=document.getElementById('aob-chevron-'+i);
  if(chev) chev.style.transform='rotate(90deg)';
}

// ══════════════════════════════════════════
// RECHT BASICS – Minderjährige & Verträge (Einsteiger)
// ══════════════════════════════════════════
const RECHT_BASICS_CASES = [
  {
    icon:'📱', title:'Das eBay-Smartphone',
    situation:'Kevin, 15 Jahre alt, kauft ohne Wissen seiner Eltern ein iPhone für 320 € bei eBay. Er überweist das Geld von seinem gesparten Taschengeld. Der Verkäufer schickt das Handy.',
    question:'Ist der Kaufvertrag wirksam?',
    opts:['Ja – Kevin hat bezahlt, also gilt der Vertrag','Nein – Minderjährige können keine Verträge schließen','Schwebend unwirksam – erst wirksam wenn Eltern zustimmen (§ 108 BGB)','Wirksam – weil Kevin mit eigenem Geld bezahlt hat'],
    correct:2,
    explain:'<b>§ 110 BGB – Taschengeldparagraf:</b> Kevin hat mit eigenem gespartem Taschengeld <b>sofort vollständig bezahlt</b>. § 110 BGB: Vertrag ist <b>voll wirksam</b> ohne Elternzustimmung, wenn der Minderjährige mit frei verfügbaren Mitteln sofort leistet. Kevin behält das Handy zu Recht.<br><br><b>Abgrenzung:</b> Hätte Kevin auf Raten gekauft → § 108 BGB → schwebend unwirksam.',
    praxis:'§§ 104–113 BGB zur Geschäftsfähigkeit gehören zur Grundlage des Privatrechts – prüfungsrelevant für das BGB-Modul deiner Ausbildung.'
  },
  {
    icon:'🍕', title:'Die Pizzabestellung',
    situation:'Mia, 14, bestellt telefonisch eine Pizza für 8,50 €. Als der Lieferant klingelt, bezahlt sie bar aus ihrer Taschengeldersparnisse. Ihre Eltern wissen nichts davon.',
    question:'Ist dieser Vertrag wirksam?',
    opts:['Nein – Mia ist minderjährig, der Vertrag ist unwirksam','Ja – der Taschengeldparagraph (§ 110 BGB) macht ihn wirksam','Ja, aber nur wenn die Eltern es later gutheißen','Nein – Fernabsatzverträge brauchen Elternzustimmung'],
    correct:1,
    explain:'§ 110 BGB (Taschengeldparagraph): Ein Vertrag ist wirksam, wenn der Minderjährige ihn mit Mitteln bewirkt, die ihm zu freier Verfügung oder für diesen Zweck überlassen wurden. Mia bezahlt sofort bar mit ihrem Taschengeld → Vertrag ist voll wirksam.',
    praxis:'Der Taschengeldparagraph ist eine wichtige Ausnahme zum Grundsatz der beschränkten Geschäftsfähigkeit. Unterschied zu § 108: Hier kommt es auf die sofortige Bewirkung an.'
  },
  {
    icon:'🎮', title:'Das Gaming-Abo',
    situation:'Leon, 16, schließt online ein monatliches Gaming-Abo für 9,99 €/Monat ab. Er klickt „Ich bin 18 Jahre alt". Sein Vater entdeckt die Abbuchungen drei Monate später.',
    question:'Was können Leons Eltern tun?',
    opts:['Nichts – Leon hat die AGB akzeptiert und sein Alter falsch angegeben','Den Vertrag anfechten wegen arglistiger Täuschung (§ 123 BGB)','Den Vertrag wegen fehlender Genehmigung anfechten (§ 108 BGB)','Sowohl Anfechtung als auch Kündigung sind möglich'],
    correct:3,
    explain:'Doppelte Angriffsfläche: (1) Der Vertrag ist schwebend unwirksam nach § 108 BGB, da Leon als Minderjähriger ohne Elternzustimmung handelte. (2) Zusätzlich ist Anfechtung nach § 123 BGB möglich, weil Leon sein Alter falsch angegeben hat (arglistige Täuschung). Die Eltern können die Genehmigung verweigern UND anfechten.',
    praxis:'Mehrere Anspruchsgrundlagen können nebeneinander bestehen – im BGB immer nach allen Möglichkeiten suchen!'
  },
  {
    icon:'🚗', title:'Der Führerschein-Deal',
    situation:'Anna, 17, schließt mit ihrer Fahrschule einen Ausbildungsvertrag über 2.400 €. Ihr Vater hatte ihr schon früher generell für den Führerschein „seine Zustimmung gegeben".',
    question:'Ist der Vertrag wirksam?',
    opts:['Nein – Zustimmung muss für jeden Einzelvertrag neu erteilt werden','Ja – die generelle Einwilligung des Vaters reicht (§ 107 BGB)','Nein – 17-Jährige dürfen keine Verträge über 500 € schließen','Ja – weil es sich um eine Ausbildung handelt'],
    correct:1,
    explain:'§ 107 BGB: Die Einwilligung (vorherige Zustimmung) der Eltern kann auch generell für bestimmte Geschäftsbereiche erteilt werden. Wenn der Vater generell für den Führerschein zugestimmt hat, gilt das für alle damit zusammenhängenden Verträge inkl. der Fahrschule. Der Vertrag ist wirksam.',
    praxis:'Unterschied Einwilligung (vorher) vs. Genehmigung (nachher) nach § 183 BGB – klassische Prüfungsfrage!'
  },
  {
    icon:'💼', title:'Der Ausbildungsvertrag',
    situation:'Tim, 15, unterschreibt einen Ausbildungsvertrag bei einem Handwerksbetrieb. Sein Vater unterschreibt nicht – er weiß nichts davon.',
    question:'Kann Tim die Ausbildung rechtsgültig beginnen?',
    opts:['Ja – Ausbildungsverträge gelten immer, auch für Minderjährige','Nein – ohne Elternzustimmung ist der Vertrag unwirksam','Ja – § 113 BGB erlaubt Eltern, Minderjährige für Arbeit/Ausbildung zu ermächtigen','Nein – erst ab 16 Jahren darf man Ausbildungsverträge schließen'],
    correct:1,
    explain:'Ein Ausbildungsvertrag ist ein Dauerschuldverhältnis und kein „lediglich rechtlich vorteilhaftes" Geschäft – Ohne Zustimmung des Vaters ist der Vertrag <b>schwebend unwirksam (§ 108 BGB)</b>. § 107 BGB regelt die Einwilligung allgemein. § 113 BGB: Nur mit aktiver elterlicher Ermächtigung kann Tim selbstständig Dienstverhältnisse eingehen – hier nicht passiert.',
    praxis:'§ 113 BGB ist prüfungsrelevant: Die elterliche Ermächtigung gibt Minderjährigen volle Geschäftsfähigkeit für den Bereich Arbeit/Ausbildung.'
  },
  {
    icon:'🏪', title:'Rückgabe im Laden',
    situation:'Sophie, 13, kauft in einem Schreibwarenladen für 4 € einen Füller – mit Geld, das ihre Oma ihr geschenkt hat. Der Laden verweigert später die Rückgabe, weil „Minderjährige nicht wirksam kaufen können".',
    question:'Hat der Laden Recht?',
    opts:['Ja – Sophies Kaufvertrag ist unwirksam ohne Elternzustimmung','Nein – § 110 BGB macht den Vertrag wirksam (Taschengeldparagraph)','Ja – der Laden durfte gar nicht an sie verkaufen','Nein – Kinder unter 7 Jahren können nicht kaufen, Sophie ist 13'],
    correct:1,
    explain:'§ 110 BGB (Taschengeldparagraph) greift: Sophie hat mit Mitteln bezahlt, die ihr zu freier Verfügung überlassen wurden (Oma-Geld). Der Vertrag ist vollwirksam. Der Laden hat keinen Recht. Der Kaufvertrag ist gültig, eine Rückgabe kann Sophie nur verlangen wenn das Gesetz oder die Ladenbedingungen es vorsehen – nicht wegen Minderjährigkeit.',
    praxis:'Prüfungsschema: (1) Wie alt? (2) Geschäftsvorteilhaft? (3) Taschengeldparagraph anwendbar? – immer in dieser Reihenfolge.'
  }
];

let rbIdx=0;
const RB_KEY='rechtBasicsProgress';
function getRbProgress(){try{return JSON.parse(localStorage.getItem(RB_KEY)||'{}');}catch(e){return{};}}
function saveRbProgress(i){const p=getRbProgress();p[i]=true;localStorage.setItem(RB_KEY,JSON.stringify(p));}

function renderRechtBasics(a){
  if(_introStep['recht']===0){ _renderIntro_recht_was(a); return; }
  if(_introStep['recht']===1){ _renderIntro_recht_warum(a); return; }
  if(_introStep['recht']===2){ _renderIntro_recht_0(a); return; }
  if(_introStep['recht']===3){ _renderIntro_recht_1(a); return; }
  // else: show original content
  _renderIntro_recht_content(a);
}
function _renderIntro_recht_content(a){
  a.classList.add('basics-dark-mode');
  const prog=getRbProgress();
  const done=Object.keys(prog).length;
  setTopicHeader('recht_basics');
  a.innerHTML=`
  <div style="background:linear-gradient(135deg,rgba(0,80,40,.7),rgba(0,40,20,.8));border:2px solid rgba(0,201,123,.2);border-radius:18px;padding:18px;margin-bottom:14px">
    <div class="u-row-10-mb">
      <span style="font-size:28px">🏛️</span>
      <div>
        <div class="u-heading">Recht Basics – Kaufvertrag gültig?</div>
        <div class="u-caption">Privatrecht · Minderjährige · ${done}/${RECHT_BASICS_CASES.length} gelöst</div>
      </div>
    </div>
    <div class="u-prog-track"><div style="height:100%;width:${Math.round(done/RECHT_BASICS_CASES.length*100)}%;background:linear-gradient(90deg,var(--green),#00a878);border-radius:100px;transition:width .5s"></div></div>
  </div>
  <div style="background:rgba(0,201,123,.06);border:1px solid rgba(0,201,123,.2);border-radius:12px;padding:12px 14px;margin-bottom:12px;font-size:12px;color:rgba(255,255,255,.65);font-weight:700;line-height:1.65">
    💡 <b>Worum geht es?</b> Ab 7 Jahren sind Personen <i>beschränkt geschäftsfähig</i> (§ 106 BGB). Viele Alltagssituationen drehen sich darum, ob ein Vertrag mit Minderjährigen wirksam ist. Entscheide selbst!
  </div>
  <div class="u-col-gap">
    ${RECHT_BASICS_CASES.map((c,i)=>`
    <div id="rb-case-${i}" style="background:rgba(255,255,255,.04);border:2px solid ${prog[i]?'rgba(0,201,123,.3)':'rgba(255,255,255,.1)'};border-radius:16px;overflow:hidden">
      <div onclick="rbToggle(${i})" class="u-acc-trigger">
        <span style="font-size:26px">${c.icon}</span>
        <div style="flex:1">
          <div class="u-heading-sm">${c.title}</div>
          <div class="u-meta">${prog[i]?'✅ Gelöst':'Tippen zum Öffnen'}</div>
        </div>
        <span id="rb-chevron-${i}" class="u-chevron">›</span>
      </div>
      <div id="rb-body-${i}" class="u-acc-body">
        <div style="font-size:13px;color:rgba(255,255,255,.75);line-height:1.65;margin-bottom:12px;padding:12px;background:rgba(255,255,255,.04);border-radius:10px;border-left:3px solid rgba(0,201,123,.4)">${c.situation}</div>
        <div style="font-size:12px;font-weight:900;color:#00c97b;margin-bottom:8px">❓ ${c.question}</div>
        <div class="u-col-6">
          ${c.opts.map((o,j)=>`<button onclick="rbAnswer(${i},${j})" id="rb-opt-${i}-${j}" style="text-align:left;padding:10px 13px;border-radius:10px;border:2px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);cursor:pointer;font-family:'Nunito',sans-serif;font-weight:700;font-size:12px;color:#fff;display:flex;align-items:flex-start;gap:8px;transition:all .15s"><span style="width:20px;height:20px;border-radius:5px;background:rgba(255,255,255,.1);font-family:'Space Mono',monospace;font-size:9px;font-weight:700;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px">${'ABCD'[j]}</span>${o}</button>`).join('')}
        </div>
        <div id="rb-explain-${i}" style="display:none"></div>
      </div>
    </div>`).join('')}
  </div>`;
}

function rbToggle(i){
  const body=document.getElementById('rb-body-'+i);
  const chev=document.getElementById('rb-chevron-'+i);
  if(!body)return;
  const open=body.style.display!=='none';
  body.style.display=open?'none':'block';
  if(chev)chev.style.transform=open?'':'rotate(90deg)';
}

function rbAnswer(i,chosen){
  const c=RECHT_BASICS_CASES[i];
  const prog=getRbProgress();
  if(prog[i])return;
  saveRbProgress(i);
  const ok=chosen===c.correct;
  c.opts.forEach((_,j)=>{
    const btn=document.getElementById('rb-opt-'+i+'-'+j);
    if(!btn)return;
    btn.disabled=true;
    if(j===c.correct){btn.style.borderColor='var(--green)';btn.style.background='rgba(0,201,123,.1)';btn.style.color='#00c97b';}
    else if(j===chosen&&!ok){btn.style.borderColor='var(--red)';btn.style.background='rgba(255,77,109,.08)';btn.style.opacity='.7';}
    else btn.style.opacity='.35';
  });
  const expl=document.getElementById('rb-explain-'+i);
  if(expl){
    expl.style.display='block';
    expl.innerHTML=`<div style="margin-top:10px;padding:12px;border-radius:10px;background:${ok?'rgba(0,201,123,.08)':'rgba(255,77,109,.06)'};border:2px solid ${ok?'rgba(0,201,123,.25)':'rgba(255,77,109,.2)'}">
      <div style="font-size:12px;font-weight:900;color:${ok?'#00c97b':'#ff4d6d'};margin-bottom:6px">${ok?'✅ Richtig!':'❌ Leider falsch.'}</div>
      <div class="u-body-dim">${c.explain}</div>
      <div style="margin-top:10px;padding:8px 10px;background:rgba(0,201,123,.07);border-radius:8px;border-left:3px solid rgba(0,201,123,.4);font-size:11px;color:rgba(0,201,123,.9);font-weight:700;line-height:1.6">🎓 <b>Für deine Ausbildung:</b> ${c.praxis}</div>
    </div>`;
  }
  const card=document.getElementById('rb-case-'+i);
  if(card) card.style.borderColor='rgba(0,201,123,.3)';
  renderRechtBasics(document.getElementById('ga'));
  const body=document.getElementById('rb-body-'+i);
  if(body) body.style.display='block';
  const chev=document.getElementById('rb-chevron-'+i);
  if(chev) chev.style.transform='rotate(90deg)';
}

// ══════════════════════════════════════════════════════
// UST BASICS – Lieferung oder sonstige Leistung? (Einsteiger)
// ══════════════════════════════════════════════════════
const UST_BASICS_SECTIONS = [
  {
    icon:'📦',
    title:'Lieferung oder sonstige Leistung?',
    content:`
      <div style="margin-bottom:12px;font-size:13px;color:rgba(255,255,255,.8);line-height:1.7">
        Die wichtigste Weichenstellung im UStG: Ist ein Umsatz eine <b style="color:#ffaa66">Lieferung</b> oder eine <b class="u-cyan">sonstige Leistung</b>? Das entscheidet über Ort, Zeitpunkt und Steuerbarkeit.
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">
        <div style="background:rgba(255,140,66,.1);border:2px solid rgba(255,140,66,.3);border-radius:13px;padding:14px">
          <div style="font-size:12px;font-weight:900;color:#ffaa66;margin-bottom:8px">📦 Lieferung § 3 Abs. 1 UStG</div>
          <div class="u-body-white">Verschaffung der <b>Verfügungsmacht</b> an einem körperlichen Gegenstand.<br><br>Kern: Jemand kann mit der Sache schalten und walten wie ein Eigentümer.<br><br>Bsp: Auto verkaufen, Laptop liefern, Ware einlagern</div>
        </div>
        <div style="background:rgba(0,194,224,.1);border:2px solid rgba(0,194,224,.3);border-radius:13px;padding:14px">
          <div style="font-size:12px;font-weight:900;color:var(--cyan);margin-bottom:8px">🔧 Sonstige Leistung § 3 Abs. 9 UStG</div>
          <div class="u-body-white">Alles, was <b>keine Lieferung</b> ist – also kein körperlicher Gegenstand wechselt den Besitzer.<br><br>= Tun, Dulden oder Unterlassen.<br><br>Bsp: Reparatur, Beratung, Vermietung, Konzert, Lizenz</div>
        </div>
      </div>
      <div style="background:rgba(255,217,74,.08);border:1.5px solid rgba(255,217,74,.25);border-radius:11px;padding:11px;font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.6">
        💡 <b class="u-yellow">Merkhilfe:</b> Kann ich den Umsatz anfassen, tragen, stapeln? → Lieferung. Sehe ich nur das Ergebnis/Erleben? → Sonstige Leistung. Ein Auto kaufen = Lieferung. Eine Taxifahrt = sonstige Leistung. Die gleiche Maschine: verkaufen = Lieferung, reparieren = sonstige Leistung.
      </div>`
  },
  {
    icon:'📍',
    title:'Wo ist eine Lieferung steuerbar? (§§ 3 Abs. 6, 7, 3c UStG)',
    content:`
      <div style="font-size:12px;color:rgba(255,255,255,.6);font-weight:700;margin-bottom:10px">Nur wenn der <b>Lieferort im Inland</b> liegt, ist die Lieferung in Deutschland steuerbar (§ 1 Abs. 1 Nr. 1 UStG).</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <div style="background:rgba(255,255,255,.05);border-radius:11px;padding:12px;border-left:3px solid #ffaa66">
          <div style="font-size:11px;font-weight:900;color:#ffaa66;margin-bottom:4px">Beförderungs-/Versendungslieferung § 3 Abs. 6 UStG</div>
          <div class="u-body-white">Ort = wo die Beförderung oder Versendung <b>beginnt</b>.<br>Bsp: Händler in Hamburg schickt Paket nach Wien → Ort = Hamburg → in Deutschland steuerbar mit 19 %.</div>
        </div>
        <div style="background:rgba(255,255,255,.05);border-radius:11px;padding:12px;border-left:3px solid var(--cyan)">
          <div style="font-size:11px;font-weight:900;color:var(--cyan);margin-bottom:4px">Ruhende Lieferung § 3 Abs. 7 UStG</div>
          <div class="u-body-white">Kein Transport → Ort = wo der Gegenstand bei Übergabe <b>liegt</b>.<br>Bsp: Maschine steht schon beim Käufer, Einbau vor Ort → Ort = dort.</div>
        </div>
        <div style="background:rgba(255,255,255,.05);border-radius:11px;padding:12px;border-left:3px solid var(--green)">
          <div style="font-size:11px;font-weight:900;color:var(--green);margin-bottom:4px">Fernverkauf an EU-Verbraucher (OSS) § 3c UStG</div>
          <div class="u-body-white">Online-Händler verkauft an Verbraucher in andere EU-Länder: Ab EU-Schwellenwert (10.000 €/Jahr) wird der Ort ins <b>Bestimmungsland</b> verlagert → dortige USt gilt.<br>Meldung über OSS-Verfahren (One-Stop-Shop), um nicht in jedem Land einzeln zu registrieren.</div>
        </div>
      </div>`
  },
  {
    icon:'🌍',
    title:'Wo ist eine sonstige Leistung steuerbar? (§ 3a UStG)',
    content:`
      <div style="font-size:12px;color:rgba(255,255,255,.6);font-weight:700;margin-bottom:10px">§ 3a UStG regelt den Leistungsort – entscheidend ist, <b>wer</b> der Empfänger ist.</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <div style="background:rgba(0,201,123,.1);border:2px solid rgba(0,201,123,.25);border-radius:11px;padding:12px">
          <div style="font-size:11px;font-weight:900;color:#00c97b;margin-bottom:4px">B2B – Unternehmer an Unternehmer § 3a Abs. 2 UStG</div>
          <div style="font-size:11px;color:rgba(255,255,255,.75);font-weight:700;line-height:1.6">Ort = wo der <b>Leistungsempfänger</b> sein Unternehmen betreibt (Sitzort des Empfängers).<br>Folge: <b>Reverse Charge</b> – der Empfänger schuldet die Steuer seines Landes selbst.<br><br>Bsp: Berliner Berater berät Pariser Firma → Ort = Paris → keine deutsche USt, Rechnung ohne Steuer + Hinweis "Steuerschuldnerschaft des Leistungsempfängers".</div>
        </div>
        <div style="background:rgba(255,140,66,.1);border:2px solid rgba(255,140,66,.25);border-radius:11px;padding:12px">
          <div style="font-size:11px;font-weight:900;color:#ffaa66;margin-bottom:4px">B2C – Unternehmer an Verbraucher § 3a Abs. 1 UStG</div>
          <div style="font-size:11px;color:rgba(255,255,255,.75);font-weight:700;line-height:1.6">Ort = wo der <b>Leistende</b> sein Unternehmen betreibt (Sitzort des Leistenden).<br><br>Bsp: Berliner Anwalt berät Privatperson in München → Ort = Berlin → deutsche USt 19 % auf der Rechnung.</div>
        </div>
        <div style="background:rgba(255,255,255,.05);border-radius:11px;padding:12px;border-left:3px solid rgba(255,255,255,.2)">
          <div style="font-size:11px;font-weight:900;color:rgba(255,255,255,.6);margin-bottom:5px">Wichtige Ausnahmen § 3a Abs. 3 UStG</div>
          <div style="font-size:11px;color:rgba(255,255,255,.55);font-weight:700;line-height:1.6">📌 Grundstücksbezogene Leistungen → Ort des <b>Grundstücks</b><br>📌 Personenbeförderung → <b>Streckenort</b> (wo gefahren wird)<br>📌 Kulturelle Veranstaltungen, Konzerte, Sport → <b>Veranstaltungsort</b></div>
        </div>
      </div>`
  },
  {
    icon:'⏰',
    title:'Wann entsteht die Umsatzsteuer? (§ 13 UStG)',
    content:`
      <div style="font-size:12px;color:rgba(255,255,255,.6);font-weight:700;margin-bottom:10px">Zwei Methoden – je nach Besteuerungsart des Unternehmers:</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
        <div style="background:rgba(0,194,224,.1);border:2px solid rgba(0,194,224,.25);border-radius:13px;padding:14px">
          <div style="font-size:12px;font-weight:900;color:var(--cyan);margin-bottom:8px">📅 Sollversteuerung § 13 Abs. 1 Nr. 1a UStG</div>
          <div class="u-body-white"><b>USt entsteht:</b> Mit Ablauf des Voranmeldungszeitraums, in dem die Leistung <b>ausgeführt</b> wurde.<br><br>Egal ob der Kunde schon bezahlt hat oder nicht!<br><br>→ Normalfall für größere Unternehmen.</div>
        </div>
        <div style="background:rgba(0,201,123,.1);border:2px solid rgba(0,201,123,.25);border-radius:13px;padding:14px">
          <div style="font-size:12px;font-weight:900;color:#00c97b;margin-bottom:8px">💶 Istversteuerung § 13 Abs. 1 Nr. 1b UStG</div>
          <div class="u-body-white"><b>USt entsteht:</b> Mit Ablauf des Voranmeldungszeitraums, in dem das Entgelt <b>vereinnahmt</b> (= tatsächlich bezahlt) wurde.<br><br>Erst wenn Geld fließt!<br><br>→ Auf Antrag für kleine Unternehmen (Umsatz ≤ 600.000 €).</div>
        </div>
      </div>
      <div style="background:rgba(255,217,74,.08);border:1.5px solid rgba(255,217,74,.25);border-radius:11px;padding:11px">
        <div style="font-size:11px;font-weight:900;color:var(--yellow);margin-bottom:5px">📌 Beispiel Sollversteuerung:</div>
        <div class="u-body-white">Handwerker repariert im <b>Oktober</b>, schreibt Rechnung am 1. November, Kunde zahlt am 15. Dezember.<br>→ USt entsteht <b>Oktober</b> (Leistungsmonat) – nicht November, nicht Dezember.<br>→ Muss in der Oktober-Voranmeldung (fällig 10. November) angemeldet und abgeführt werden.<br>→ Handwerker zahlt die Steuer, bevor er das Geld hat! Das ist der Liquiditätsnachteil.</div>
      </div>`
  }
];

const UST_BASICS_CASES = [
  {
    icon:'🔧',
    title:'Reparatur oder Ersatzteil – was überwiegt?',
    situation:'Klempner Franz repariert bei Frau Müller die Heizung. Er baut dabei eine neue Pumpe ein (Materialwert: 200 €) und arbeitet 3 Stunden (Lohn: 180 €). Rechnung gesamt: 380 € netto. Franz hat das Material selbst eingekauft und mitgebracht.',
    question:'Was liegt umsatzsteuerlich vor?',
    opts:[
      'Nur eine Lieferung – die Pumpe ist ein körperlicher Gegenstand',
      'Eine Werklieferung (§ 3 Abs. 4 UStG) – Sonderfall der Lieferung, weil Franz eigenes Material einbaut',
      'Zwei getrennte Umsätze: Lieferung (Pumpe) + sonstige Leistung (Arbeit)',
      'Keine USt – Handwerkerleistungen sind nach § 35a EStG steuerfrei'
    ],
    correct:1,
    explain:'<b>Werklieferung § 3 Abs. 4 UStG:</b> Wenn ein Unternehmer einen Gegenstand be- oder verarbeitet und dabei <b>selbst beschafftes Material</b> verwendet, liegt eine Werklieferung vor – eine besondere Form der Lieferung.<br><br>Der Ort richtet sich nach §§ 3 Abs. 6/7 UStG (Lieferort): Die Pumpe wird in Frau Müllers Haus eingebaut → Übergabe dort → Ort im Inland → 19 % deutsche USt.<br><br>Hätte Frau Müller die Pumpe selbst gestellt, wäre es eine <b>Werkleistung</b> (sonstige Leistung) gewesen.',
    praxis:'Werklieferung vs. Werkleistung ist eine klassische Klausurfrage. Merke: Eigenes Material + Einbau = Werklieferung (§ 3 Abs. 4). Fremdes Material oder nur Arbeit = Werkleistung (§ 3 Abs. 9).'
  },
  {
    icon:'💻',
    title:'IT-Beratung an EU-Unternehmer',
    situation:'Die Berliner Firma CodeTec berät das Pariser Unternehmen LogiSoft (hat eine französische USt-IdNr.) per Videokonferenz über Software-Einführung. Honorar: 5.000 € netto.',
    question:'Wo ist diese Leistung steuerbar und wer schuldet die Steuer?',
    opts:[
      'Deutschland – CodeTec hat Sitz in Berlin',
      'Frankreich – Reverse Charge: LogiSoft schuldet die französische USt selbst',
      'Nirgends – digitale Beratung über Grenzen ist EU-weit steuerfrei',
      'Beide Länder je zur Hälfte – Aufteilung nach Aufwand'
    ],
    correct:1,
    explain:'<b>B2B-Grundregel § 3a Abs. 2 UStG:</b> Bei sonstigen Leistungen an einen Unternehmer liegt der Leistungsort am <b>Sitz des Empfängers</b> – hier Paris.<br><br>Folge: Die Leistung ist in Frankreich steuerbar. CodeTec stellt eine Rechnung <b>ohne deutsche USt</b> aus, mit Pflichthinweis: „Steuerschuldnerschaft des Leistungsempfängers". LogiSoft meldet die Steuer selbst in Frankreich an und kann sie als Vorsteuer abziehen → effektiv neutral.',
    praxis:'Reverse Charge ist im Geschäftsalltag extrem häufig. Als Finanzbeamter prüfst du: Hat der Leistende keine USt berechnet (korrekt)? Hat der Empfänger die Steuer selbst angemeldet (Reverse Charge)? Fehler hier sind teuer.'
  },
  {
    icon:'🏠',
    title:'Wann muss der Installateur die USt zahlen?',
    situation:'Rico (Sollversteuerer) baut im März Solarpanele ein. Rechnung: 1. April. Kunde zahlt: 15. Mai.',
    question:'In welchem Monat entsteht Ricos Umsatzsteuer?',
    opts:[
      'Mai – wenn das Geld auf dem Konto ist',
      'April – wenn die Rechnung gestellt wird',
      'März – wenn die Leistung ausgeführt wurde',
      'Keine USt – Photovoltaik ist seit 2023 mit 0 % besteuert'
    ],
    correct:2,
    explain:'<b>Sollversteuerung § 13 Abs. 1 Nr. 1a UStG:</b> Die USt entsteht mit Ablauf des Voranmeldungszeitraums, in dem die Leistung <b>ausgeführt</b> wurde – weder Rechnungsdatum noch Zahlungseingang sind entscheidend.<br><br>Rico hat im <b>März</b> eingebaut → USt entsteht im März → Anmeldung und Zahlung bis 10. April in der März-Voranmeldung. Rico zahlt, bevor er selbst Geld hat.<br><br>Hinweis: Photovoltaikanlagen bis 30 kWp auf Wohngebäuden sind seit 1.1.2023 mit 0 % USt belegt (§ 12 Abs. 3 UStG) – ändert aber nichts am Prinzip des Entstehungszeitpunkts.',
    praxis:'Die Sollversteuerung kann ernsthafte Liquiditätsprobleme verursachen. Kleine Unternehmen können deshalb die Istversteuerung beantragen – USt erst wenn der Kunde zahlt.'
  },
  {
    icon:'🎵',
    title:'Konzert in Wien – wo ist es steuerbar?',
    situation:'Die Münchner Band „Steuerblues" spielt ein Konzert im Wiener Konzerthaus (Österreich). Einnahmen: 8.000 €.',
    question:'Wo ist der Auftritt steuerbar?',
    opts:[
      'München – die Band betreibt ihr Unternehmen in Deutschland',
      'Wien – der Veranstaltungsort entscheidet (§ 3a Abs. 3 Nr. 3a UStG)',
      'Nirgends – Kulturveranstaltungen sind EU-weit steuerfrei',
      'Beide Länder – 50/50-Aufteilung nach Sitzort und Veranstaltungsort'
    ],
    correct:1,
    explain:'<b>Ausnahme § 3a Abs. 3 Nr. 3a UStG:</b> Für Eintrittsberechtigungen zu kulturellen, künstlerischen, wissenschaftlichen und ähnlichen Veranstaltungen gilt: Leistungsort = dort wo die Veranstaltung <b>stattfindet</b>.<br><br>Das Konzert findet in Wien statt → Österreich → österreichische USt entsteht. Die Band muss sich in Österreich steuerlich erfassen lassen oder das OSS-Verfahren nutzen.',
    praxis:'§ 3a Abs. 3 enthält wichtige Ausnahmen von der B2B/B2C-Grundregel. Grundstücke, Beförderungen und Veranstaltungen haben eigene Ortsregeln – musst du im Blut haben für die Prüfung.'
  }
];

const UST_KEY='ustBasicsProgress_v1';
function getUstProgress(){try{return JSON.parse(localStorage.getItem(UST_KEY)||'{}');}catch(e){return{};}}
function saveUstProgress(i){const p=getUstProgress();p[i]=true;localStorage.setItem(UST_KEY,JSON.stringify(p));}

function renderUstBasics(a){
  if(_introStep['ust']===0){ _renderIntro_ust_was(a); return; }
  if(_introStep['ust']===1){ _renderIntro_ust_warum(a); return; }
  if(_introStep['ust']===2){ _renderIntro_ust_0(a); return; }
  if(_introStep['ust']===3){ _renderIntro_ust_1(a); return; }
  // else: show original content
  _renderIntro_ust_content(a);
}
function _renderIntro_ust_content(a){
  a.classList.add('basics-dark-mode');
  const prog=getUstProgress();
  const done=Object.keys(prog).length;
  const total=UST_BASICS_CASES.length;
  setTopicHeader('ust_basics');
  a.innerHTML=`
  <div style="background:linear-gradient(135deg,rgba(80,35,0,.8),rgba(50,20,0,.9));border:2px solid rgba(255,140,66,.25);border-radius:18px;padding:18px;margin-bottom:14px">
    <div class="u-row-10-mb">
      <span style="font-size:28px">🛒</span>
      <div>
        <div class="u-heading">USt Basics – Lieferung oder Leistung?</div>
        <div class="u-caption">Umsatzsteuer · Ort · Zeitpunkt · ${done}/${total} Fälle gelöst</div>
      </div>
    </div>
    <div class="u-prog-track"><div style="height:100%;width:${Math.round(done/total*100)}%;background:linear-gradient(90deg,#ffaa66,#ff7733);border-radius:100px;transition:width .5s"></div></div>
  </div>
  <div class="u-section-label">📖 Grundlagen</div>
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:18px">
    ${UST_BASICS_SECTIONS.map((s,i)=>`
    <div style="background:rgba(255,255,255,.04);border:1.5px solid rgba(255,140,66,.15);border-radius:14px;overflow:hidden">
      <div onclick="ustSecToggle(${i})" style="padding:13px 16px;cursor:pointer;display:flex;align-items:center;gap:12px">
        <span style="font-size:22px">${s.icon}</span>
        <div style="flex:1;font-size:12px;font-weight:900;color:#fff">${s.title}</div>
        <span id="ust-sec-chev-${i}" class="u-chevron">›</span>
      </div>
      <div id="ust-sec-body-${i}" class="u-acc-body">${s.content}</div>
    </div>`).join('')}
  </div>
  <div class="u-section-label">🎯 Übungsfälle</div>
  <div class="u-col-gap">
    ${UST_BASICS_CASES.map((c,i)=>`
    <div id="ust-case-${i}" style="background:rgba(255,255,255,.04);border:2px solid ${prog[i]?'rgba(0,201,123,.3)':'rgba(255,255,255,.1)'};border-radius:16px;overflow:hidden">
      <div onclick="ustToggle(${i})" class="u-acc-trigger">
        <span style="font-size:24px">${c.icon}</span>
        <div style="flex:1">
          <div class="u-heading-sm">${c.title}</div>
          <div class="u-meta">${prog[i]?'✅ Gelöst':'Tippen zum Öffnen'}</div>
        </div>
        <span id="ust-chevron-${i}" class="u-chevron">›</span>
      </div>
      <div id="ust-body-${i}" class="u-acc-body">
        <div style="font-size:13px;color:rgba(255,255,255,.75);line-height:1.65;margin-bottom:12px;padding:12px;background:rgba(255,255,255,.04);border-radius:10px;border-left:3px solid rgba(255,140,66,.5)">${c.situation}</div>
        <div style="font-size:12px;font-weight:900;color:#ffaa66;margin-bottom:8px">❓ ${c.question}</div>
        <div class="u-col-6">
          ${c.opts.map((o,j)=>`<button onclick="ustAnswer(${i},${j})" id="ust-opt-${i}-${j}" style="text-align:left;padding:10px 13px;border-radius:10px;border:2px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);cursor:pointer;font-family:'Nunito',sans-serif;font-weight:700;font-size:12px;color:#fff;display:flex;align-items:flex-start;gap:8px;transition:all .15s"><span style="width:20px;height:20px;border-radius:5px;background:rgba(255,255,255,.1);font-family:'Space Mono',monospace;font-size:9px;font-weight:700;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px">${'ABCD'[j]}</span>${o}</button>`).join('')}
        </div>
        <div id="ust-explain-${i}" style="display:none"></div>
      </div>
    </div>`).join('')}
  </div><div style="height:80px"></div>`;
}

function ustSecToggle(i){const b=document.getElementById('ust-sec-body-'+i),c=document.getElementById('ust-sec-chev-'+i);if(!b)return;const o=b.style.display!=='none';b.style.display=o?'none':'block';if(c)c.style.transform=o?'':'rotate(90deg)';}
function ustToggle(i){const b=document.getElementById('ust-body-'+i),c=document.getElementById('ust-chevron-'+i);if(!b)return;const o=b.style.display!=='none';b.style.display=o?'none':'block';if(c)c.style.transform=o?'':'rotate(90deg)';}
function ustAnswer(i,chosen){
  const c=UST_BASICS_CASES[i];
  const prog=getUstProgress();
  if(prog[i])return;
  saveUstProgress(i);
  const ok=chosen===c.correct;
  c.opts.forEach((_,j)=>{
    const btn=document.getElementById('ust-opt-'+i+'-'+j);
    if(!btn)return;
    btn.disabled=true;
    if(j===c.correct){btn.style.borderColor='var(--green)';btn.style.background='rgba(0,201,123,.1)';btn.style.color='#00c97b';}
    else if(j===chosen&&!ok){btn.style.borderColor='var(--red)';btn.style.background='rgba(255,77,109,.08)';btn.style.opacity='.7';}
    else btn.style.opacity='.35';
  });
  const expl=document.getElementById('ust-explain-'+i);
  if(expl){
    expl.style.display='block';
    expl.innerHTML=`<div style="margin-top:10px;padding:12px;border-radius:10px;background:${ok?'rgba(0,201,123,.08)':'rgba(255,77,109,.06)'};border:2px solid ${ok?'rgba(0,201,123,.25)':'rgba(255,77,109,.2)'}">
      <div style="font-size:12px;font-weight:900;color:${ok?'#00c97b':'#ff4d6d'};margin-bottom:6px">${ok?'✅ Richtig!':'❌ Leider falsch.'}</div>
      <div class="u-body-dim">${c.explain}</div>
      <div style="margin-top:10px;padding:8px 10px;background:rgba(255,140,66,.07);border-radius:8px;border-left:3px solid rgba(255,140,66,.4);font-size:11px;color:rgba(255,180,100,.9);font-weight:700;line-height:1.6">🎓 <b>Für deine Ausbildung:</b> ${c.praxis}</div>
    </div>`;
  }
  const card=document.getElementById('ust-case-'+i);
  if(card) card.style.borderColor='rgba(0,201,123,.3)';
  renderUstBasics(document.getElementById('ga'));
  setTimeout(()=>{const body=document.getElementById('ust-body-'+i);if(body)body.style.display='block';const chev=document.getElementById('ust-chevron-'+i);if(chev)chev.style.transform='rotate(90deg)';},10);
}


// ══════════════════════════════════════════════════════
// BILANZ BASICS – Soll & Haben (Einsteiger)
// ══════════════════════════════════════════════════════
const BILANZ_BASICS_SECTIONS = [
  {
    icon:'⚖️',
    title:'Was bedeutet „Soll" und „Haben" wirklich?',
    content:`
      <div style="font-size:13px;color:rgba(255,255,255,.8);font-weight:700;line-height:1.7;margin-bottom:12px">
        „Soll" und „Haben" haben in der Buchführung <b>nichts</b> damit zu tun, ob du etwas sollst oder hast. Es sind schlicht die <b>linke und rechte Seite</b> eines T-Kontos. Punkt.
      </div>
      <div style="background:rgba(255,255,255,.05);border-radius:13px;padding:14px;margin-bottom:12px">
        <div style="font-size:11px;font-weight:900;color:rgba(255,255,255,.5);text-align:center;margin-bottom:10px;font-family:'Space Mono',monospace;letter-spacing:1px">T-KONTO SCHEMA</div>
        <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:0;border:2px solid rgba(255,255,255,.15);border-radius:10px;overflow:hidden">
          <div style="padding:12px;background:rgba(0,194,224,.08);text-align:center">
            <div style="font-size:13px;font-weight:900;color:var(--cyan);margin-bottom:6px">SOLL</div>
            <div style="font-size:10px;color:rgba(255,255,255,.5);font-weight:700">Linke Seite</div>
          </div>
          <div style="width:2px;background:rgba(255,255,255,.15)"></div>
          <div style="padding:12px;background:rgba(0,201,123,.08);text-align:center">
            <div style="font-size:13px;font-weight:900;color:#00c97b;margin-bottom:6px">HABEN</div>
            <div style="font-size:10px;color:rgba(255,255,255,.5);font-weight:700">Rechte Seite</div>
          </div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px">
        <div style="background:rgba(0,194,224,.06);border-radius:9px;padding:10px 12px;font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.5">📘 <b class="u-cyan">Aktivkonten</b> (Vermögen): Zugang → Soll / Abgang → Haben</div>
        <div style="background:rgba(150,100,220,.06);border-radius:9px;padding:10px 12px;font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.5">📗 <b style="color:#c8a0ff">Passivkonten</b> (Schulden/EK): Zugang → Haben / Abgang → Soll</div>
        <div style="background:rgba(255,77,109,.06);border-radius:9px;padding:10px 12px;font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.5">📕 <b style="color:#ff8099">Aufwandskonten</b>: Buchung immer → Soll (Aufwand wächst links)</div>
        <div style="background:rgba(0,201,123,.06);border-radius:9px;padding:10px 12px;font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.5">📙 <b style="color:#00c97b">Ertragskonten</b>: Buchung immer → Haben (Ertrag wächst rechts)</div>
      </div>
      <div style="background:rgba(255,217,74,.08);border:1.5px solid rgba(255,217,74,.25);border-radius:11px;padding:11px;font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.6">
        💡 <b class="u-yellow">Die goldene Regel:</b> Jeder Buchungssatz hat mindestens eine Soll- und eine Habenseite. Der Gesamtbetrag Soll = Gesamtbetrag Haben. Immer, ohne Ausnahme.
      </div>`
  },
  {
    icon:'📂',
    title:'Bestands-, Aufwands- und Ertragskonten im Überblick',
    content:`
      <div class="u-col-gap">
        <div style="background:rgba(0,194,224,.08);border:2px solid rgba(0,194,224,.2);border-radius:13px;padding:14px">
          <div style="font-size:12px;font-weight:900;color:var(--cyan);margin-bottom:10px">📊 Bestandskonten – werden in die Bilanz übertragen</div>
          <div class="u-grid-2">
            <div style="background:rgba(0,194,224,.08);border-radius:9px;padding:10px">
              <div style="font-size:11px;font-weight:900;color:var(--cyan);margin-bottom:5px">Aktivkonten</div>
              <div style="font-size:10px;color:rgba(255,255,255,.65);font-weight:700;line-height:1.55">= <b>linke</b> Bilanzseite<br>Zeigen das Vermögen<br><br>Anfangsbestand + Zugänge: <b>Soll</b><br>Abgänge + Endbestand: <b>Haben</b><br><br><i style="color:rgba(255,255,255,.4)">Bsp: Kasse, Bank, Maschinen, Waren, Forderungen</i></div>
            </div>
            <div style="background:rgba(150,100,220,.08);border-radius:9px;padding:10px">
              <div style="font-size:11px;font-weight:900;color:#c8a0ff;margin-bottom:5px">Passivkonten</div>
              <div style="font-size:10px;color:rgba(255,255,255,.65);font-weight:700;line-height:1.55">= <b>rechte</b> Bilanzseite<br>Zeigen Schulden + Eigenkapital<br><br>Anfangsbestand + Zugänge: <b>Haben</b><br>Abgänge + Endbestand: <b>Soll</b><br><br><i style="color:rgba(255,255,255,.4)">Bsp: Bankdarlehen, Verbindlichkeiten L+L, Eigenkapital</i></div>
            </div>
          </div>
          <div style="margin-top:8px;font-size:10px;color:rgba(255,255,255,.35);font-weight:700">Salden der Bestandskonten gehen als Anfangsbestand ins nächste Geschäftsjahr über.</div>
        </div>
        <div style="background:rgba(255,77,109,.08);border:2px solid rgba(255,77,109,.2);border-radius:13px;padding:14px">
          <div style="font-size:12px;font-weight:900;color:#ff8099;margin-bottom:8px">📉 Aufwandskonten – werden in die GuV übertragen</div>
          <div style="font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.6;margin-bottom:8px">Buchung immer im <b>Soll</b>. Jeder Aufwand vermindert den Gewinn.<br>Am Jahresende über die GuV abgeschlossen → kein Übertrag ins Folgejahr.</div>
          <div style="font-size:10px;color:rgba(255,180,180,.6);font-weight:700">Bsp: Lohnaufwand, Mietaufwand, Abschreibungen, Materialaufwand, Zinsaufwand, Versicherungsaufwand</div>
        </div>
        <div style="background:rgba(0,201,123,.08);border:2px solid rgba(0,201,123,.2);border-radius:13px;padding:14px">
          <div style="font-size:12px;font-weight:900;color:#00c97b;margin-bottom:8px">📈 Ertragskonten – werden in die GuV übertragen</div>
          <div style="font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.6;margin-bottom:8px">Buchung immer im <b>Haben</b>. Jeder Ertrag erhöht den Gewinn.<br>Am Jahresende über die GuV abgeschlossen → kein Übertrag ins Folgejahr.</div>
          <div style="font-size:10px;color:rgba(100,220,160,.6);font-weight:700">Bsp: Umsatzerlöse, Zinserträge, sonstige betriebliche Erträge, Mieteinnahmen</div>
        </div>
      </div>`
  },
  {
    icon:'📝',
    title:'Die vier Grundfälle der Buchung',
    content:`
      <div style="font-size:13px;color:rgba(255,255,255,.75);font-weight:700;line-height:1.7;margin-bottom:12px">
        Buchungssatz-Format: <span style="background:rgba(0,194,224,.15);padding:2px 8px;border-radius:6px;color:var(--cyan)">Sollkonto</span> &nbsp;<b style="color:rgba(255,255,255,.4)">an</b>&nbsp; <span style="background:rgba(0,201,123,.15);padding:2px 8px;border-radius:6px;color:#00c97b">Habenkonto</span> &nbsp;· Betrag
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px">
        <div style="background:rgba(255,255,255,.05);border-radius:11px;padding:12px;border-left:3px solid var(--cyan)">
          <div style="font-size:11px;font-weight:900;color:var(--cyan);margin-bottom:4px">1. Aktivtausch – Bilanzsumme bleibt gleich</div>
          <div class="u-body-white">Ein Aktivkonto ↑, ein Aktivkonto ↓<br>Bsp: Maschine bar gekauft<br><span style="background:rgba(255,255,255,.07);padding:2px 8px;border-radius:5px;font-family:'Space Mono',monospace;font-size:10px">Maschinen (S) an Kasse (H) · 10.000 €</span></div>
        </div>
        <div style="background:rgba(255,255,255,.05);border-radius:11px;padding:12px;border-left:3px solid #c8a0ff">
          <div style="font-size:11px;font-weight:900;color:#c8a0ff;margin-bottom:4px">2. Passivtausch – Bilanzsumme bleibt gleich</div>
          <div class="u-body-white">Ein Passivkonto ↑, ein Passivkonto ↓<br>Bsp: Darlehen wird in Eigenkapital umgewandelt<br><span style="background:rgba(255,255,255,.07);padding:2px 8px;border-radius:5px;font-family:'Space Mono',monospace;font-size:10px">Verbindlichkeiten Bank (S) an Eigenkapital (H) · 5.000 €</span></div>
        </div>
        <div style="background:rgba(255,255,255,.05);border-radius:11px;padding:12px;border-left:3px solid #ffaa66">
          <div style="font-size:11px;font-weight:900;color:#ffaa66;margin-bottom:4px">3. Aktiv-Passiv-Mehrung – Bilanzsumme steigt</div>
          <div class="u-body-white">Aktivkonto ↑, Passivkonto ↑ – beide Seiten wachsen<br>Bsp: Bankkredit wird aufgenommen<br><span style="background:rgba(255,255,255,.07);padding:2px 8px;border-radius:5px;font-family:'Space Mono',monospace;font-size:10px">Bank (S) an Verbindlichkeiten Bank (H) · 20.000 €</span></div>
        </div>
        <div style="background:rgba(255,255,255,.05);border-radius:11px;padding:12px;border-left:3px solid var(--green)">
          <div style="font-size:11px;font-weight:900;color:var(--green);margin-bottom:4px">4. Aktiv-Passiv-Minderung – Bilanzsumme sinkt</div>
          <div class="u-body-white">Aktivkonto ↓, Passivkonto ↓ – beide Seiten schrumpfen<br>Bsp: Verbindlichkeit per Bank bezahlt<br><span style="background:rgba(255,255,255,.07);padding:2px 8px;border-radius:5px;font-family:'Space Mono',monospace;font-size:10px">Verbindlichkeiten (S) an Bank (H) · 3.000 €</span></div>
        </div>
      </div>
      <div class="u-grid-2">
        <div style="background:rgba(255,77,109,.07);border-radius:11px;padding:12px;border-left:3px solid #ff8099">
          <div style="font-size:11px;font-weight:900;color:#ff8099;margin-bottom:4px">Aufwandsbuchung</div>
          <div style="font-size:11px;color:rgba(255,255,255,.65);font-weight:700;line-height:1.6">Miete per Bank<br><span style="font-family:'Space Mono',monospace;font-size:10px;color:rgba(255,180,180,.8)">Mietaufwand (S) an Bank (H) · 1.200 €</span></div>
        </div>
        <div style="background:rgba(0,201,123,.07);border-radius:11px;padding:12px;border-left:3px solid #00c97b">
          <div style="font-size:11px;font-weight:900;color:#00c97b;margin-bottom:4px">Ertragsbuchung</div>
          <div style="font-size:11px;color:rgba(255,255,255,.65);font-weight:700;line-height:1.6">Kunde zahlt per Überweisung<br><span style="font-family:'Space Mono',monospace;font-size:10px;color:rgba(100,220,160,.8)">Bank (S) an Umsatzerlöse (H) · 5.000 €</span></div>
        </div>
      </div>`
  }
];

const BILANZ_BASICS_CASES = [
  {
    icon:'🏦',
    title:'Kreditaufnahme – welcher Buchungssatz?',
    situation:'Die TechGmbH nimmt ein Bankdarlehen über 50.000 € auf. Das Geld wird sofort dem Geschäftskonto gutgeschrieben.',
    question:'Wie lautet der korrekte Buchungssatz?',
    opts:[
      'Verbindlichkeiten Bank (S) an Bank (H) · 50.000 €',
      'Bank (S) an Verbindlichkeiten Bank (H) · 50.000 €',
      'Eigenkapital (S) an Bank (H) · 50.000 €',
      'Bank (S) an Eigenkapital (H) · 50.000 €'
    ],
    correct:1,
    explain:'<b>Aktiv-Passiv-Mehrung:</b> Das Bankkonto (Aktivkonto) steigt → im <b>Soll</b>. Die Verbindlichkeit gegenüber der Bank (Passivkonto) steigt → im <b>Haben</b>.<br><br>✅ <span style="font-family:\'Space Mono\',monospace">Bank (S) an Verbindlichkeiten Bank (H) · 50.000 €</span><br><br>Die Bilanzsumme wächst auf beiden Seiten um 50.000 €. Das Eigenkapital bleibt unverändert – das Darlehen ist eine Schuld, keine eigene Mittel.',
    praxis:'Kreditaufnahmen sind Paradebeispiele der Aktiv-Passiv-Mehrung. Beide Seiten der Bilanz wachsen gleichzeitig. Im Gegensatz dazu: die Tilgung ist eine Aktiv-Passiv-Minderung – beide Seiten schrumpfen.'
  },
  {
    icon:'🖨️',
    title:'Maschine bar bezahlt – Aktivtausch?',
    situation:'Die DruckGmbH kauft eine Druckmaschine für 15.000 € und bezahlt sofort bar aus der Kasse.',
    question:'Was für ein Buchungsfall liegt vor und wie lautet der Buchungssatz?',
    opts:[
      'Aktiv-Passiv-Mehrung: Maschinen (S) an Verbindlichkeiten (H) · 15.000 €',
      'Aktivtausch: Maschinen (S) an Kasse (H) · 15.000 €',
      'Aufwandsbuchung: Maschinenaufwand (S) an Kasse (H) · 15.000 €',
      'Passivtausch: Verbindlichkeiten (S) an Kasse (H) · 15.000 €'
    ],
    correct:1,
    explain:'<b>Aktivtausch:</b> Maschinen (Aktivkonto) steigt im Soll. Kasse (Aktivkonto) sinkt im Haben. Die Bilanzsumme bleibt unverändert – nur die Zusammensetzung des Aktivvermögens ändert sich.<br><br>✅ <span style="font-family:\'Space Mono\',monospace">Maschinen (S) an Kasse (H) · 15.000 €</span><br><br>Wichtig: Die Maschine ist <b>kein sofortiger Aufwand</b>! Sie ist ein Vermögensgegenstand und wird über die betriebsgewöhnliche Nutzungsdauer abgeschrieben (AfA). Erst die jährliche Abschreibungsbuchung erzeugt Aufwand.',
    praxis:'Der Unterschied zwischen Investition (Aktivkonto, keine GuV-Wirkung) und laufendem Aufwand ist prüfungsrelevant. Eine neue Maschine taucht nicht in der Gewinn-und-Verlustrechnung auf – nur die jährliche Abschreibung tut es.'
  },
  {
    icon:'💰',
    title:'Gehalt überweisen',
    situation:'Die BäckerKG überweist ihren Mitarbeitern im Dezember insgesamt 8.000 € Lohn vom Geschäftskonto.',
    question:'Auf welche Konten wird gebucht – und warum?',
    opts:[
      'Lohnaufwand (S) an Bank (H) · 8.000 € – weil Aufwand immer Soll, Bank als Aktivkonto Haben',
      'Bank (S) an Lohnaufwand (H) · 8.000 € – Geld verlässt die Bank',
      'Verbindlichkeiten (S) an Bank (H) · 8.000 € – Löhne sind Schulden',
      'Eigenkapital (S) an Bank (H) · 8.000 € – Löhne mindern das EK direkt'
    ],
    correct:0,
    explain:'<b>Aufwandsbuchung:</b> Aufwandskonten werden immer im <b>Soll</b> gebucht. Das Bankkonto (Aktivkonto) sinkt → Buchung im <b>Haben</b>.<br><br>✅ <span style="font-family:\'Space Mono\',monospace">Lohnaufwand (S) an Bank (H) · 8.000 €</span><br><br>Der Lohnaufwand reduziert den Jahresgewinn in der GuV. Die Bank sinkt um 8.000 €. Das Eigenkapital sinkt indirekt – weil Aufwand über die GuV das EK mindert (aber keine direkte EK-Buchung).',
    praxis:'Alle laufenden Kosten – Miete, Löhne, Strom, Zinsen, Versicherung – sind Aufwandsbuchungen: Aufwandskonto Soll, Gegenkonto (Bank/Kasse/Verbindlichkeiten) Haben.'
  },
  {
    icon:'📦',
    title:'Waren auf Ziel verkauft',
    situation:'Die HandelAG verkauft Waren für 10.000 € „auf Ziel" (Rechnung, Zahlung kommt erst nächsten Monat). Der Einkaufswert der Waren betrug 7.000 €.',
    question:'Wie wird der Erlös aus dem Verkauf gebucht?',
    opts:[
      'Kasse (S) an Umsatzerlöse (H) · 10.000 € – Verkauf bringt immer Bargeld',
      'Forderungen aus L+L (S) an Umsatzerlöse (H) · 10.000 €',
      'Umsatzerlöse (S) an Forderungen aus L+L (H) · 10.000 €',
      'Waren (S) an Umsatzerlöse (H) · 10.000 €'
    ],
    correct:1,
    explain:'Da noch nicht bezahlt wurde, entsteht eine <b>Forderung aus Lieferungen und Leistungen</b> (= Aktivkonto, steigt im Soll). Umsatzerlöse (= Ertragskonto) steigen im Haben.<br><br>✅ <span style="font-family:\'Space Mono\',monospace">Forderungen L+L (S) an Umsatzerlöse (H) · 10.000 €</span><br><br>Zusätzlich Warenabgang: <span style="font-family:\'Space Mono\',monospace">Wareneinsatz (S) an Waren (H) · 7.000 €</span><br>Gewinn: 3.000 € (Erlös − Wareneinsatz)<br><br>Wenn der Kunde später zahlt: <span style="font-family:\'Space Mono\',monospace">Bank (S) an Forderungen L+L (H) · 10.000 €</span>',
    praxis:'„Auf Ziel" = Lieferung jetzt, Zahlung später. Immer erst Forderung buchen. Wenn bezahlt: Forderung auflösen. Das Prinzip der periodengerechten Erfassung: Erlöse werden im Leistungsmonat gebucht, nicht wenn Geld kommt.'
  }
];

const BILANZ_KEY='bilanzBasicsProgress_v1';
function getBilanzProgress(){try{return JSON.parse(localStorage.getItem(BILANZ_KEY)||'{}');}catch(e){return{};}}
function saveBilanzProgress(i){const p=getBilanzProgress();p[i]=true;localStorage.setItem(BILANZ_KEY,JSON.stringify(p));}

function renderBilanzBasics(a){
  if(_introStep['bilanz']===0){ _renderIntro_bilanz_was(a); return; }
  if(_introStep['bilanz']===1){ _renderIntro_bilanz_warum(a); return; }
  if(_introStep['bilanz']===2){ _renderIntro_bilanz_0(a); return; }
  if(_introStep['bilanz']===3){ _renderIntro_bilanz_1(a); return; }
  // else: show original content
  _renderIntro_bilanz_content(a);
}
function _renderIntro_bilanz_content(a){
  a.classList.add('basics-dark-mode');
  const prog=getBilanzProgress();
  const done=Object.keys(prog).length;
  const total=BILANZ_BASICS_CASES.length;
  setTopicHeader('bilanz_basics');
  a.innerHTML=`
  <div style="background:linear-gradient(135deg,rgba(0,15,55,.9),rgba(0,8,35,.95));border:2px solid rgba(80,120,255,.25);border-radius:18px;padding:18px;margin-bottom:14px">
    <div class="u-row-10-mb">
      <span style="font-size:28px">📋</span>
      <div>
        <div class="u-heading">Bilanz Basics – Soll &amp; Haben</div>
        <div class="u-caption">Buchführung · Kontenarten · Buchungssätze · ${done}/${total} Fälle gelöst</div>
      </div>
    </div>
    <div class="u-prog-track"><div style="height:100%;width:${Math.round(done/total*100)}%;background:linear-gradient(90deg,#5588ff,#8844ee);border-radius:100px;transition:width .5s"></div></div>
  </div>
  <div class="u-section-label">📖 Grundlagen</div>
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:18px">
    ${BILANZ_BASICS_SECTIONS.map((s,i)=>`
    <div style="background:rgba(255,255,255,.04);border:1.5px solid rgba(80,120,255,.18);border-radius:14px;overflow:hidden">
      <div onclick="bilSecToggle(${i})" style="padding:13px 16px;cursor:pointer;display:flex;align-items:center;gap:12px">
        <span style="font-size:22px">${s.icon}</span>
        <div style="flex:1;font-size:12px;font-weight:900;color:#fff">${s.title}</div>
        <span id="bil-sec-chev-${i}" class="u-chevron">›</span>
      </div>
      <div id="bil-sec-body-${i}" class="u-acc-body">${s.content}</div>
    </div>`).join('')}
  </div>
  <div class="u-section-label">🎯 Buchungssatz-Training</div>
  <div class="u-col-gap">
    ${BILANZ_BASICS_CASES.map((c,i)=>`
    <div id="bil-case-${i}" style="background:rgba(255,255,255,.04);border:2px solid ${prog[i]?'rgba(0,201,123,.3)':'rgba(255,255,255,.1)'};border-radius:16px;overflow:hidden">
      <div onclick="bilToggle(${i})" class="u-acc-trigger">
        <span style="font-size:24px">${c.icon}</span>
        <div style="flex:1">
          <div class="u-heading-sm">${c.title}</div>
          <div class="u-meta">${prog[i]?'✅ Gelöst':'Tippen zum Öffnen'}</div>
        </div>
        <span id="bil-chevron-${i}" class="u-chevron">›</span>
      </div>
      <div id="bil-body-${i}" class="u-acc-body">
        <div style="font-size:13px;color:rgba(255,255,255,.75);line-height:1.65;margin-bottom:12px;padding:12px;background:rgba(255,255,255,.04);border-radius:10px;border-left:3px solid rgba(80,150,255,.5)">${c.situation}</div>
        <div style="font-size:12px;font-weight:900;color:#88aaff;margin-bottom:8px">❓ ${c.question}</div>
        <div class="u-col-6">
          ${c.opts.map((o,j)=>`<button onclick="bilAnswer(${i},${j})" id="bil-opt-${i}-${j}" style="text-align:left;padding:10px 13px;border-radius:10px;border:2px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);cursor:pointer;font-family:'Nunito',sans-serif;font-weight:700;font-size:12px;color:#fff;display:flex;align-items:flex-start;gap:8px;transition:all .15s"><span style="width:20px;height:20px;border-radius:5px;background:rgba(255,255,255,.1);font-family:'Space Mono',monospace;font-size:9px;font-weight:700;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px">${'ABCD'[j]}</span>${o}</button>`).join('')}
        </div>
        <div id="bil-explain-${i}" style="display:none"></div>
      </div>
    </div>`).join('')}
  </div><div style="height:80px"></div>`;
}

function bilSecToggle(i){const b=document.getElementById('bil-sec-body-'+i),c=document.getElementById('bil-sec-chev-'+i);if(!b)return;const o=b.style.display!=='none';b.style.display=o?'none':'block';if(c)c.style.transform=o?'':'rotate(90deg)';}
function bilToggle(i){const b=document.getElementById('bil-body-'+i),c=document.getElementById('bil-chevron-'+i);if(!b)return;const o=b.style.display!=='none';b.style.display=o?'none':'block';if(c)c.style.transform=o?'':'rotate(90deg)';}
function bilAnswer(i,chosen){
  const c=BILANZ_BASICS_CASES[i];
  const prog=getBilanzProgress();
  if(prog[i])return;
  saveBilanzProgress(i);
  const ok=chosen===c.correct;
  c.opts.forEach((_,j)=>{
    const btn=document.getElementById('bil-opt-'+i+'-'+j);
    if(!btn)return;
    btn.disabled=true;
    if(j===c.correct){btn.style.borderColor='var(--green)';btn.style.background='rgba(0,201,123,.1)';btn.style.color='#00c97b';}
    else if(j===chosen&&!ok){btn.style.borderColor='var(--red)';btn.style.background='rgba(255,77,109,.08)';btn.style.opacity='.7';}
    else btn.style.opacity='.35';
  });
  const expl=document.getElementById('bil-explain-'+i);
  if(expl){
    expl.style.display='block';
    expl.innerHTML=`<div style="margin-top:10px;padding:12px;border-radius:10px;background:${ok?'rgba(0,201,123,.08)':'rgba(255,77,109,.06)'};border:2px solid ${ok?'rgba(0,201,123,.25)':'rgba(255,77,109,.2)'}">
      <div style="font-size:12px;font-weight:900;color:${ok?'#00c97b':'#ff4d6d'};margin-bottom:6px">${ok?'✅ Richtig!':'❌ Leider falsch.'}</div>
      <div class="u-body-dim">${c.explain}</div>
      <div style="margin-top:10px;padding:8px 10px;background:rgba(80,120,255,.07);border-radius:8px;border-left:3px solid rgba(80,150,255,.4);font-size:11px;color:rgba(150,190,255,.9);font-weight:700;line-height:1.6">🎓 <b>Für deine Ausbildung:</b> ${c.praxis}</div>
    </div>`;
  }
  const card=document.getElementById('bil-case-'+i);
  if(card) card.style.borderColor='rgba(0,201,123,.3)';
  renderBilanzBasics(document.getElementById('ga'));
  setTimeout(()=>{const body=document.getElementById('bil-body-'+i);if(body)body.style.display='block';const chev=document.getElementById('bil-chevron-'+i);if(chev)chev.style.transform='rotate(90deg)';},10);
}


// ══════════════════════════════════════════════════════
// EST BASICS – Wie funktioniert Einkommensteuer? (Einsteiger)
// ══════════════════════════════════════════════════════
const EST_BASICS_SECTIONS = [
  {
    icon:'🏛️',
    title:'§ 1 EStG – Wer ist einkommensteuerpflichtig?',
    content:`
      <div style="font-size:13px;color:rgba(255,255,255,.8);font-weight:700;line-height:1.7;margin-bottom:12px">
        Die Einkommensteuer (ESt) ist eine Personensteuer und trifft ausschließlich <b>natürliche Personen</b>. § 1 Abs. 1 EStG enthält zwei Tatbestandsmerkmale – beide müssen erfüllt sein:
      </div>

      <!-- TBM 1: Natürliche Person -->
      <div style="background:rgba(100,140,255,.1);border:2px solid rgba(100,140,255,.3);border-radius:13px;padding:13px;margin-bottom:10px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
          <div style="background:#88aaff;color:#0a1040;border-radius:6px;padding:2px 8px;font-size:9px;font-weight:900;font-family:'Space Mono',monospace;flex-shrink:0">TBM 1</div>
          <div style="font-size:12px;font-weight:900;color:#88aaff">Natürliche Person (§ 1 BGB)</div>
        </div>
        <div style="font-size:11px;color:rgba(255,255,255,.75);font-weight:700;line-height:1.65">
          Eine <b>natürliche Person</b> ist jeder Mensch – von der Geburt bis zum Tod (§ 1 BGB: „Die Rechtsfähigkeit des Menschen beginnt mit der Vollendung der Geburt").<br><br>
          Maßgeblich ist: <b>kein Mindestalter, keine Nationalität, keine Geschäftsfähigkeit erforderlich</b>. Ein neugeborenes Kind mit Erbschaft ist ebenso natürliche Person wie ein 80-Jähriger.<br><br>
          <b>Abgrenzung:</b> Kapitalgesellschaften (GmbH, AG) sind <i>juristische Personen</i> – sie zahlen <b>keine</b> Einkommensteuer, sondern Körperschaftsteuer (§ 1 KStG). Personengesellschaften (GbR, OHG) zahlen selbst keine ESt; ihre Gewinne werden den Gesellschaftern zugerechnet und bei diesen als natürlichen Personen besteuert (<b>Transparenzprinzip</b>).
        </div>
      </div>

      <!-- TBM 2: Wohnsitz oder gew. Aufenthalt -->
      <div style="background:rgba(0,194,224,.1);border:2px solid rgba(0,194,224,.25);border-radius:13px;padding:13px;margin-bottom:10px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
          <div style="background:var(--cyan);color:#001a2e;border-radius:6px;padding:2px 8px;font-size:9px;font-weight:900;font-family:'Space Mono',monospace;flex-shrink:0">TBM 2</div>
          <div style="font-size:12px;font-weight:900;color:var(--cyan)">Wohnsitz oder gewöhnlicher Aufenthalt im Inland</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:7px">
          <div style="background:rgba(255,255,255,.05);border-radius:9px;padding:10px 12px">
            <div style="font-size:11px;font-weight:900;color:var(--cyan);margin-bottom:3px">Wohnsitz § 8 AO</div>
            <div style="font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.55">Eine Wohnung, die jemand unter Umständen innehat, die darauf schließen lassen, dass er sie <b>beibehalten und benutzen</b> wird. Keine Mindestgröße, kein Hauptwohnsitz erforderlich. Auch eine Ferienwohnung kann Wohnsitz begründen, wenn sie regelmäßig genutzt wird.</div>
          </div>
          <div style="background:rgba(255,255,255,.05);border-radius:9px;padding:10px 12px">
            <div style="font-size:11px;font-weight:900;color:var(--cyan);margin-bottom:3px">Gewöhnlicher Aufenthalt § 9 AO</div>
            <div style="font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.55">Den nicht nur vorübergehenden Aufenthalt an einem Ort. Wer sich <b>länger als 6 Monate</b> ununterbrochen in Deutschland aufhält, begründet in der Regel einen gewöhnlichen Aufenthalt – auch ohne feste Wohnung (z.B. Saisonarbeiter auf Baustellen).</div>
          </div>
        </div>
      </div>

      <!-- Rechtsfolge: Welteinkommensprinzip -->
      <div style="background:rgba(0,201,123,.1);border:2px solid rgba(0,201,123,.3);border-radius:13px;padding:13px;margin-bottom:10px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
          <div style="background:#00c97b;color:#001a0e;border-radius:6px;padding:2px 8px;font-size:9px;font-weight:900;font-family:'Space Mono',monospace;flex-shrink:0">RECHTSFOLGE</div>
          <div style="font-size:12px;font-weight:900;color:#00c97b">Welteinkommensprinzip</div>
        </div>
        <div style="font-size:11px;color:rgba(255,255,255,.75);font-weight:700;line-height:1.65">
          Sind beide TBM erfüllt, ist die Person <b>unbeschränkt steuerpflichtig</b>: Deutschland besteuert <b>sämtliche Einkünfte weltweit</b> – egal ob das Geld aus Deutschland, Spanien, den USA oder wo auch immer stammt.<br><br>
          Beispiel: Sandra wohnt in München und vermietet eine Wohnung in Paris → beide Einkünfte (deutsches Gehalt + französische Mieteinnahmen) werden in Deutschland versteuert.<br><br>
          <b>Doppelbesteuerungsabkommen (DBA)</b> verhindern, dass dieselben Einkünfte in zwei Ländern voll besteuert werden – sie regeln, welches Land das Besteuerungsrecht hat oder wie angerechnet wird.
        </div>
      </div>

      <!-- Abgrenzung beschränkte Steuerpflicht + Territorialprinzip -->
      <div style="background:rgba(255,140,66,.08);border:1.5px solid rgba(255,140,66,.2);border-radius:13px;padding:13px;margin-bottom:10px">
        <div style="font-size:12px;font-weight:900;color:#ffaa66;margin-bottom:8px">⚖️ Beschränkte Steuerpflicht § 1 Abs. 4 EStG</div>
        <div style="font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.65">
          Wer <b>kein</b> TBM 2 erfüllt (kein Wohnsitz/Aufenthalt in DE), aber <b>inländische Einkünfte (§ 49 EStG)</b> bezieht, ist nur beschränkt steuerpflichtig.<br><br>
          Rechtsfolge: <b>Territorialprinzip</b> – nur die deutschen Einkünfte werden besteuert, keine weltweiten.<br><br>
          Beispiele für inländische Einkünfte: deutsche Rente, Vermietung einer Immobilie in Deutschland, Gehalt von einem deutschen Arbeitgeber.
        </div>
      </div>

      <!-- Merkhilfe -->
      <div style="background:rgba(255,217,74,.07);border:1.5px solid rgba(255,217,74,.2);border-radius:11px;padding:11px">
        <div style="font-size:11px;font-weight:900;color:var(--yellow);margin-bottom:5px">💡 Steuerpflichtig ≠ Steuer zahlen</div>
        <div style="font-size:11px;color:rgba(255,255,255,.65);font-weight:700;line-height:1.6">Unbeschränkte Steuerpflicht bedeutet nur, dass Deutschland das Besteuerungsrecht hat – nicht, dass tatsächlich Steuer entsteht. Liegt das zu versteuernde Einkommen unter dem <b>Grundfreibetrag (2026: 12.336 €)</b>, ist die Steuer = 0 €. Steuerpflicht und Steuerlast sind zwei verschiedene Fragen.</div>
      </div>`
  },
  {
    icon:'📋',
    title:'Die 7 Einkunftsarten – womit verdient man?',
    content:`
      <div style="font-size:12px;color:rgba(255,255,255,.55);font-weight:700;margin-bottom:10px">Das EStG kennt genau 7 Einkunftsarten (§§ 13–22 EStG). Nur diese zählen – alles andere ist steuerfrei.</div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px">
        <div style="background:rgba(255,255,255,.05);border-radius:10px;padding:10px 12px;border-left:3px solid #88aaff">
          <div style="font-size:10px;font-weight:900;color:#88aaff;margin-bottom:3px">GEWINNEINKUNFTSARTEN (Bilanzierung / EÜR)</div>
          <div style="font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.55">§ 13 Land- und Forstwirtschaft 🌾<br>§ 15 Gewerbebetrieb 🏭 (+ Gewerbesteuer!)<br>§ 18 Selbständige Arbeit 🩺⚖️ (Freiberufler: Ärzte, Anwälte, Steuerberater…)</div>
        </div>
        <div style="background:rgba(255,255,255,.05);border-radius:10px;padding:10px 12px;border-left:3px solid #00c97b">
          <div style="font-size:10px;font-weight:900;color:#00c97b;margin-bottom:3px">ÜBERSCHUSSEINKUNFTSARTEN (Einnahmen minus Werbungskosten)</div>
          <div style="font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.55">§ 19 Nichtselbständige Arbeit 👔 (Gehalt, Lohn – der häufigste Fall!)<br>§ 20 Kapitalvermögen 📈 (Zinsen, Dividenden → 25 % Abgeltungsteuer)<br>§ 21 Vermietung &amp; Verpachtung 🏠<br>§ 22 Sonstige Einkünfte 📦 (Renten, private Veräußerungen)</div>
        </div>
      </div>
      <div style="background:rgba(255,140,66,.08);border:1.5px solid rgba(255,140,66,.2);border-radius:11px;padding:11px;font-size:11px;color:rgba(255,255,255,.65);font-weight:700;line-height:1.6">
        💡 <b style="color:#ffaa66">Merkhilfe:</b> Geschenke von der Oma, Lottogewinne, der Erlös vom eigenen Hausverkauf (nach 10 Jahren Besitz) – all das steht <b>nicht</b> in den 7 Einkunftsarten und ist daher steuerfrei!
      </div>`
  },
  {
    icon:'🧮',
    title:'Von der Einnahme zur Steuer – der Berechnungsweg',
    content:`
      <div style="font-size:12px;color:rgba(255,255,255,.55);font-weight:700;margin-bottom:10px">Schritt für Schritt – so berechnet sich die ESt:</div>
      <div style="display:flex;flex-direction:column;gap:0">
        ${[
          ['Einnahmen aus allen 7 Einkunftsarten','z.B. Gehalt 40.000 € + Mieteinnahmen 6.000 €'],
          ['− Werbungskosten / Betriebsausgaben','Fahrtkosten, Arbeitsmittel, Schuldzinsen…'],
          ['= Summe der Einkünfte','Alle Einkunftsarten addiert'],
          ['− Sonderausgaben (§§ 10 ff. EStG)','Krankenversicherung, Riester, Kirchensteuer…'],
          ['− Außergewöhnliche Belastungen (§ 33 EStG)','Krankheitskosten, Pflegekosten…'],
          ['= Zu versteuerndes Einkommen (zvE)','Die Bemessungsgrundlage'],
          ['× Steuertarif (§ 32a EStG)','0 % bis 45 %. Grundfreibetrag 12.336 € (2026)'],
          ['= Einkommensteuer','Davon ggf. Lohnsteuer abziehen → Nachzahlung/Erstattung'],
        ].map(([label, sub], i, arr) => `
        <div style="display:flex;gap:10px;padding:9px 12px;background:${i%2===0?'rgba(255,255,255,.04)':'rgba(255,255,255,.02)'};${i===arr.length-1?'border-radius:0 0 11px 11px;':''}${i===0?'border-radius:11px 11px 0 0;':''}border:1px solid rgba(255,255,255,.07);border-top:${i===0?'1px solid rgba(255,255,255,.07)':'none'}">
          <div style="font-size:18px;font-weight:900;color:rgba(255,255,255,.15);font-family:'Space Mono',monospace;min-width:18px">${i+1}</div>
          <div><div style="font-size:11px;font-weight:900;color:#fff">${label}</div><div style="font-size:10px;color:rgba(255,255,255,.4);font-weight:700;margin-top:1px">${sub}</div></div>
        </div>`).join('')}
      </div>`
  },
  {
    icon:'💼',
    title:'Werbungskosten – was du absetzen kannst (§ 9 EStG)',
    content:`
      <div style="font-size:12px;color:rgba(255,255,255,.6);font-weight:700;margin-bottom:10px">Werbungskosten sind Kosten, die du <b>für</b> deinen Job hast. Sie mindern dein zu versteuerndes Einkommen direkt.</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
        <div style="background:rgba(255,255,255,.05);border-radius:11px;padding:11px">
          <div class="u-icon-lg">🚗</div>
          <div class="u-label-white">Entfernungspauschale</div>
          <div style="font-size:10px;color:rgba(255,255,255,.55);font-weight:700;line-height:1.5">0,38 €/km × einfache Strecke × Arbeitstage (2026). Egal ob Auto, Bahn oder Fahrrad.</div>
        </div>
        <div style="background:rgba(255,255,255,.05);border-radius:11px;padding:11px">
          <div class="u-icon-lg">💻</div>
          <div class="u-label-white">Arbeitsmittel</div>
          <div style="font-size:10px;color:rgba(255,255,255,.55);font-weight:700;line-height:1.5">Laptop, Fachbücher, Bürostuhl – bei überwiegend beruflicher Nutzung absetzbar. GWG bis 952 € brutto sofort.</div>
        </div>
        <div style="background:rgba(255,255,255,.05);border-radius:11px;padding:11px">
          <div class="u-icon-lg">🏠</div>
          <div class="u-label-white">Homeoffice-Pauschale</div>
          <div style="font-size:10px;color:rgba(255,255,255,.55);font-weight:700;line-height:1.5">6 €/Tag × max. 210 Tage = 1.260 €/Jahr (2026). Kein separates Arbeitszimmer nötig.</div>
        </div>
        <div style="background:rgba(255,255,255,.05);border-radius:11px;padding:11px">
          <div class="u-icon-lg">📚</div>
          <div class="u-label-white">Fortbildungskosten</div>
          <div style="font-size:10px;color:rgba(255,255,255,.55);font-weight:700;line-height:1.5">Kurse, Seminare, Fachzeitschriften – wenn beruflich veranlasst, vollständig absetzbar.</div>
        </div>
      </div>
      <div style="background:rgba(0,201,123,.08);border:1.5px solid rgba(0,201,123,.2);border-radius:11px;padding:11px;font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.6">
        ⚡ <b style="color:#00c97b">Arbeitnehmer-Pauschbetrag 2026: 1.230 €.</b> Das Finanzamt zieht automatisch mindestens 1.230 € als Werbungskosten ab – auch wenn du gar keine Belege hast. Nur wenn deine Kosten höher sind, lohnt die Einzelaufstellung.
      </div>`
  }
];

const EST_BASICS_CASES = [
  {
    icon:'🎓',
    title:'Azubi Lena – zahlt sie Einkommensteuer?',
    situation:'Lena (20) macht ihre Ausbildung zur Verwaltungsfachangestellten. Sie verdient 1.050 € brutto im Monat – also 12.600 € im Jahr. Sie hat keine weiteren Einkünfte, wohnt noch bei ihren Eltern.',
    question:'Muss Lena Einkommensteuer zahlen?',
    opts:[
      'Ja – sie verdient Geld, also zahlt sie Einkommensteuer',
      'Nein – Auszubildende sind grundsätzlich steuerfrei',
      'Nein – ihr Jahreseinkommen liegt über dem Grundfreibetrag, aber nach Abzug des Arbeitnehmer-Pauschbetrags unter 12.336 €',
      'Ja – aber nur den halben Steuersatz, weil sie noch in Ausbildung ist'
    ],
    correct:2,
    explain:'<b>Rechenweg:</b> Bruttolohn 12.600 € − Arbeitnehmer-Pauschbetrag 1.230 € = <b>Einkünfte aus nichtselbständiger Arbeit 11.370 €</b>. Davon gehen noch Sonderausgaben ab (z.B. Krankenversicherungsbeitrag des Arbeitnehmers). Das zu versteuernde Einkommen liegt unter dem <b>Grundfreibetrag 12.336 €</b> → Einkommensteuer = 0 €.<br><br>Trotzdem: Lena ist <b>steuerpflichtig (§ 1 Abs. 1 EStG)</b> und Lohnsteuer wird eventuell monatlich vom Gehalt abgezogen – die holt sie sich aber über die Steuererklärung vollständig zurück.',
    praxis:'Im Finanzamt bearbeitest du genau solche Fälle: Steuererklärungen von Azubis mit Jahresausgleich. Der Unterschied zwischen Steuerpflicht und Steuerlast ist prüfungsrelevant!'
  },
  {
    icon:'🏠',
    title:'Stefan vermietet – welche Einkunftsart?',
    situation:'Stefan (35) arbeitet als Lehrer (Gehalt: 45.000 €/Jahr) und vermietet eine Eigentumswohnung für 800 €/Monat kalt. Die Kreditzinsen für die Wohnung betragen 4.200 €/Jahr, Verwaltung und Instandhaltung 1.800 €/Jahr.',
    question:'Welche Einkunftsarten hat Stefan – und wie hoch sind seine Vermietungseinkünfte?',
    opts:[
      '§ 19 EStG (Lohn): 45.000 € + § 21 EStG (V&V): 9.600 € Mieteinnahmen ohne Abzug',
      '§ 19 EStG: 45.000 € (brutto) + § 21 EStG: 3.600 € (9.600 − 6.000 Werbungskosten)',
      'Nur § 19 EStG – Vermietung ist steuerfrei bei unter 10.000 € Mieteinnahmen',
      '§ 15 EStG (Gewerbe) – Vermieter sind immer Gewerbetreibende'
    ],
    correct:1,
    explain:'Stefan hat <b>zwei Einkunftsarten:</b><br><br>① <b>§ 19 EStG – Nichtselbständige Arbeit</b> (Lehrergehalt)<br>② <b>§ 21 EStG – Vermietung und Verpachtung</b><br><br>Mieteinnahmen: 800 € × 12 = 9.600 €<br>Werbungskosten § 21: Schuldzinsen 4.200 € + Verwaltung/Instandh. 1.800 € = 6.000 €<br>→ <b>Einkünfte § 21: 9.600 − 6.000 = 3.600 €</b><br><br>Beide Einkunftsarten werden addiert (Einkünfte-Summe = ~47.000 € vor weiteren Abzügen) und gemeinsam nach § 32a EStG besteuert.',
    praxis:'Vermietungseinkünfte sind ein Klassiker in der ESt-Veranlagung. Als Finanzbeamter prüfst du: Stimmen die Werbungskosten? Sind die Zinsen wirklich dem Mietobjekt zuzuordnen? Werden Privatanteile abgegrenzt?'
  },
  {
    icon:'🚗',
    title:'Fahrten zur Arbeit – wie viel kann Max absetzen?',
    situation:'Max fährt täglich 35 km zur Arbeit (einfache Strecke). Er arbeitet an 220 Tagen im Jahr. Er fährt mit dem eigenen Auto. Es gibt keine öffentliche Alternative.',
    question:'Wie hoch ist seine Entfernungspauschale für 2026?',
    opts:[
      '35 × 2 × 0,38 € × 220 = 5.852 € (Hin- und Rückfahrt)',
      '35 × 0,38 € × 220 = 2.926 €',
      '35 × 0,30 € × 220 = 2.310 € (veralteter Satz bis 2025)',
      'Pauschal 1.230 € Arbeitnehmer-Pauschbetrag – Entfernungspauschale gibt es ab 2026 nicht mehr'
    ],
    correct:1,
    explain:'<b>§ 9 Abs. 1 Nr. 4 EStG – Entfernungspauschale 2026:</b> Einheitlich <b>0,38 €</b> je Entfernungskilometer ab dem ersten Kilometer (seit Jahressteuergesetz 2024, gilt ab 2026).<br><br>Nur die <b>einfache Strecke</b> zählt (nicht Hin und zurück!).<br><br>35 km × 0,38 € × 220 Tage = <b>2.926 €</b><br><br>Der Arbeitnehmer-Pauschbetrag (1.230 €) ist bereits im zvE berücksichtigt – Max kann zusätzlich die tatsächlichen Werbungskosten ansetzen, wenn sie über 1.230 € liegen. 2.926 € > 1.230 € → Einzelnachweis lohnt sich.',
    praxis:'Die Entfernungspauschale ist die häufigste Werbungskostenposition in ESt-Erklärungen von Arbeitnehmern. Wichtig: Es zählt immer nur die einfache Strecke (Hin + zurück wäre doppelte Strecke – ein klassischer Fehler!)'
  },
  {
    icon:'📈',
    title:'Aktien-Gewinn – wie wird der besteuert?',
    situation:'Julia (28) verkauft Aktien und macht 3.500 € Gewinn. Außerdem bekommt sie 600 € Dividende. Sie hat keinen Freistellungsauftrag bei ihrer Bank gestellt.',
    question:'Wie werden diese Kapitaleinkünfte besteuert?',
    opts:[
      'Wie normales Einkommen – zum regulären ESt-Tarif bis 45 %',
      'Pauschal 25 % Abgeltungsteuer + Soli – die Bank zieht das direkt ab, kein Freistellungsauftrag = keine Steuerbefreiung',
      '0 % – Kursgewinne aus Aktien sind steuerfrei nach 1 Jahr Haltedauer',
      'Pauschal 25 % – aber nur auf die Dividende; Kursgewinne sind steuerfrei'
    ],
    correct:1,
    explain:'<b>§ 20 EStG i.V.m. § 32d EStG – Abgeltungsteuer:</b> Kapitaleinkünfte (Zinsen, Dividenden, Kursgewinne) werden pauschal mit <b>25 % + Solidaritätszuschlag (1,375 %)</b> besteuert = zusammen 26,375 %.<br><br>Die Bank zieht die Steuer automatisch ab und führt sie ans Finanzamt ab – daher "Abgeltung": die Steuer ist damit abgegolten, kein Ausweis in der ESt-Erklärung nötig (Wahlrecht).<br><br><b>Problem Julia:</b> Kein Freistellungsauftrag → Steuern wurden von 100 € Gewinn aus dem Spar-Pauschbetrag (1.000 €/Person) zu viel einbehalten. Lösung: Günstigerprüfung in der Steuererklärung oder nachträglicher Freistellungsauftrag.',
    praxis:'Kapitalvermögen ist ein häufiger Fehler in Steuererklärungen. Als Finanzbeamter prüfst du: Wurde der Sparer-Pauschbetrag richtig angesetzt? Hat die Bank korrekt die Abgeltungsteuer abgeführt? Wurde die Günstigerprüfung beantragt?'
  }
];

const EST_BASICS_KEY='estBasicsProgress_v1';
function getEstProgress(){try{return JSON.parse(localStorage.getItem(EST_BASICS_KEY)||'{}');}catch(e){return{};}}
function saveEstProgress(i){const p=getEstProgress();p[i]=true;localStorage.setItem(EST_BASICS_KEY,JSON.stringify(p));}

function renderEstBasics(a){
  if(_introStep['est']===0){ _renderIntro_est_was(a); return; }
  if(_introStep['est']===1){ _renderIntro_est_warum(a); return; }
  if(_introStep['est']===2){ _renderIntro_est_0(a); return; }
  if(_introStep['est']===3){ _renderIntro_est_1(a); return; }
  // else: show original content
  _renderIntro_est_content(a);
}
function _renderIntro_est_content(a){
  a.classList.add('basics-dark-mode');
  const prog=getEstProgress();
  const done=Object.keys(prog).length;
  const total=EST_BASICS_CASES.length;
  setTopicHeader('est_basics');
  a.innerHTML=`
  <div style="background:linear-gradient(135deg,rgba(13,27,94,.85),rgba(8,16,60,.9));border:2px solid rgba(100,140,255,.25);border-radius:18px;padding:18px;margin-bottom:14px">
    <div class="u-row-10-mb">
      <span style="font-size:28px">💼</span>
      <div>
        <div class="u-heading">ESt Basics – Einkommensteuer verstehen</div>
        <div class="u-caption">Steuerpflicht · Einkunftsarten · Werbungskosten · ${done}/${total} Fälle gelöst</div>
      </div>
    </div>
    <div class="u-prog-track"><div style="height:100%;width:${Math.round(done/total*100)}%;background:linear-gradient(90deg,#6688ff,#4455dd);border-radius:100px;transition:width .5s"></div></div>
  </div>
  <div class="u-section-label">📖 Grundlagen</div>
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:18px">
    ${EST_BASICS_SECTIONS.map((s,i)=>`
    <div style="background:rgba(255,255,255,.04);border:1.5px solid rgba(100,140,255,.15);border-radius:14px;overflow:hidden">
      <div onclick="estSecToggle(${i})" style="padding:13px 16px;cursor:pointer;display:flex;align-items:center;gap:12px">
        <span style="font-size:22px">${s.icon}</span>
        <div style="flex:1;font-size:12px;font-weight:900;color:#fff">${s.title}</div>
        <span id="est-sec-chev-${i}" class="u-chevron">›</span>
      </div>
      <div id="est-sec-body-${i}" class="u-acc-body">${s.content}</div>
    </div>`).join('')}
  </div>
  <div class="u-section-label">🎯 Übungsfälle</div>
  <div class="u-col-gap">
    ${EST_BASICS_CASES.map((c,i)=>`
    <div id="est-case-${i}" style="background:rgba(255,255,255,.04);border:2px solid ${prog[i]?'rgba(0,201,123,.3)':'rgba(255,255,255,.1)'};border-radius:16px;overflow:hidden">
      <div onclick="estToggle(${i})" class="u-acc-trigger">
        <span style="font-size:24px">${c.icon}</span>
        <div style="flex:1">
          <div class="u-heading-sm">${c.title}</div>
          <div class="u-meta">${prog[i]?'✅ Gelöst':'Tippen zum Öffnen'}</div>
        </div>
        <span id="est-chevron-${i}" class="u-chevron">›</span>
      </div>
      <div id="est-body-${i}" class="u-acc-body">
        <div style="font-size:13px;color:rgba(255,255,255,.75);line-height:1.65;margin-bottom:12px;padding:12px;background:rgba(255,255,255,.04);border-radius:10px;border-left:3px solid rgba(100,140,255,.5)">${c.situation}</div>
        <div style="font-size:12px;font-weight:900;color:#88aaff;margin-bottom:8px">❓ ${c.question}</div>
        <div class="u-col-6">
          ${c.opts.map((o,j)=>`<button onclick="estAnswer(${i},${j})" id="est-opt-${i}-${j}" style="text-align:left;padding:10px 13px;border-radius:10px;border:2px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);cursor:pointer;font-family:'Nunito',sans-serif;font-weight:700;font-size:12px;color:#fff;display:flex;align-items:flex-start;gap:8px;transition:all .15s"><span style="width:20px;height:20px;border-radius:5px;background:rgba(255,255,255,.1);font-family:'Space Mono',monospace;font-size:9px;font-weight:700;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px">${'ABCD'[j]}</span>${o}</button>`).join('')}
        </div>
        <div id="est-explain-${i}" style="display:none"></div>
      </div>
    </div>`).join('')}
  </div><div style="height:80px"></div>`;
}

function estSecToggle(i){const b=document.getElementById('est-sec-body-'+i),c=document.getElementById('est-sec-chev-'+i);if(!b)return;const o=b.style.display!=='none';b.style.display=o?'none':'block';if(c)c.style.transform=o?'':'rotate(90deg)';}
function estToggle(i){const b=document.getElementById('est-body-'+i),c=document.getElementById('est-chevron-'+i);if(!b)return;const o=b.style.display!=='none';b.style.display=o?'none':'block';if(c)c.style.transform=o?'':'rotate(90deg)';}
function estAnswer(i,chosen){
  const c=EST_BASICS_CASES[i];
  const prog=getEstProgress();
  if(prog[i])return;
  saveEstProgress(i);
  const ok=chosen===c.correct;
  c.opts.forEach((_,j)=>{
    const btn=document.getElementById('est-opt-'+i+'-'+j);
    if(!btn)return;
    btn.disabled=true;
    if(j===c.correct){btn.style.borderColor='var(--green)';btn.style.background='rgba(0,201,123,.1)';btn.style.color='#00c97b';}
    else if(j===chosen&&!ok){btn.style.borderColor='var(--red)';btn.style.background='rgba(255,77,109,.08)';btn.style.opacity='.7';}
    else btn.style.opacity='.35';
  });
  const expl=document.getElementById('est-explain-'+i);
  if(expl){
    expl.style.display='block';
    expl.innerHTML=`<div style="margin-top:10px;padding:12px;border-radius:10px;background:${ok?'rgba(0,201,123,.08)':'rgba(255,77,109,.06)'};border:2px solid ${ok?'rgba(0,201,123,.25)':'rgba(255,77,109,.2)'}">
      <div style="font-size:12px;font-weight:900;color:${ok?'#00c97b':'#ff4d6d'};margin-bottom:6px">${ok?'✅ Richtig!':'❌ Leider falsch.'}</div>
      <div class="u-body-dim">${c.explain}</div>
      <div style="margin-top:10px;padding:8px 10px;background:rgba(100,140,255,.07);border-radius:8px;border-left:3px solid rgba(100,140,255,.4);font-size:11px;color:rgba(160,190,255,.9);font-weight:700;line-height:1.6">🎓 <b>Für deine Ausbildung:</b> ${c.praxis}</div>
    </div>`;
  }
  const card=document.getElementById('est-case-'+i);
  if(card) card.style.borderColor='rgba(0,201,123,.3)';
  renderEstBasics(document.getElementById('ga'));
  setTimeout(()=>{const body=document.getElementById('est-body-'+i);if(body)body.style.display='block';const chev=document.getElementById('est-chevron-'+i);if(chev)chev.style.transform='rotate(90deg)';},10);
}



// ===== KEYBOARD SHORTCUTS =====
// 1-4 = select answer, Enter/Space = next question, Escape = close overlays
document.addEventListener('keydown', function(e) {
  // Don't fire when user is typing in an input
  if(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  const key = e.key;

  // Escape: close open overlays
  if(key === 'Escape') {
    closeAiChat();
    if(document.getElementById('spot-overlay').classList.contains('active')) spotEnd();
    return;
  }

  // Enter / Space: click visible next-btn
  if(key === 'Enter' || key === ' ') {
    e.preventDefault();
    const nextBtn = document.querySelector('.next-btn.show');
    if(nextBtn){ nextBtn.click(); return; }
    // Also advance spotlight tour
    if(document.getElementById('spot-overlay').classList.contains('active')){
      spotNext(); return;
    }
    return;
  }

  // 1–4: click nth choice-btn
  const n = parseInt(key);
  if(n >= 1 && n <= 4) {
    const btns = [...document.querySelectorAll('.choice-btn:not(:disabled)')];
    if(btns[n-1]) {
      btns[n-1].focus();
      btns[n-1].click();
    }
    return;
  }

  // Arrow keys: cycle flashcards
  if((key === 'ArrowRight' || key === 'ArrowLeft') && mode === 'flashcard') {
    e.preventDefault();
    const btn = document.querySelector(key === 'ArrowRight' ? '.fc-nav-btn:last-of-type' : '.fc-nav-btn:first-of-type');
    if(btn && !btn.disabled) btn.click();
    return;
  }
});

// Show keyboard hint toast once
(function(){
  const KEY = 'kbHint_v1';
  if(!localStorage.getItem(KEY)){
    setTimeout(()=>{
      const t = document.createElement('div');
      t.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:rgba(13,27,62,.95);border:1px solid rgba(255,255,255,.15);border-radius:var(--r-pill);padding:8px 16px;font-size:11px;font-family:\'Space Mono\',monospace;color:rgba(255,255,255,.7);z-index:700;white-space:nowrap;animation:fu .3s ease;pointer-events:none';
      t.textContent = '⌨️  Tipp: Tasten 1–4 für Antworten · Enter für weiter';
      document.body.appendChild(t);
      setTimeout(()=>t.remove(), 4000);
      localStorage.setItem(KEY,'1');
    }, 8000);
  }
})();

// ===== SHARE BUTTON =====
function shareResult(score, total, topic) {
  const pct = Math.round(score/total*100);
  const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '✅' : '📚';
  const text = `${emoji} ${score}/${total} Punkte (${pct}%) im Steuer-Lernspiel – ${topic}!\nKostenlos üben: https://steuer-lernspiel.de`;

  if(navigator.share) {
    navigator.share({ title: 'Steuer-Lernspiel Ergebnis', text }).catch(()=>{});
  } else {
    navigator.clipboard?.writeText(text).then(()=>{
      showToast('📋 Ergebnis kopiert!');
    }).catch(()=>{
      showToast('Link: steuer-lernspiel.de');
    });
  }
}

function showToast(msg) {
  const t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%) translateY(0);background:rgba(13,27,62,.97);border:1.5px solid rgba(0,194,224,.4);border-radius:var(--r-pill);padding:10px 20px;font-size:13px;font-weight:800;color:#fff;z-index:8000;white-space:nowrap;animation:fu .3s ease;box-shadow:var(--sh-md)';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(()=>{ t.style.opacity='0'; t.style.transition='opacity .4s'; setTimeout(()=>t.remove(),400); }, 2500);
}

// ===== KI-ASSISTENT =====
let aiTopic = null;
let aiHistory = [];
let aiStreaming = false;

const AI_TOPIC_CFG = {
  basics:   { title:'Steuer-Basics',       sub:'Steuerpflicht · Einkunftsarten · Grundbegriffe',
    chips:['Was sind Steuern?','Wer ist steuerpflichtig?','Was sind Einkunftsarten?','Unterschied Steuer/Gebühr'] },
  est:      { title:'Einkommensteuer',      sub:'ESt · §§ 1–52 EStG',
    chips:['Wie berechnet sich die ESt?','Was sind Werbungskosten?','Was ist der Grundfreibetrag?','Unterschied § 15 / § 18'] },
  ust:      { title:'Umsatzsteuer',         sub:'USt · §§ 1–27 UStG',
    chips:['Wann gilt 7% USt?','Was ist Vorsteuerabzug?','Was ist eine Kleinunternehmerregelung?'] },
  ao:       { title:'Abgabenordnung',       sub:'AO · §§ 1–415',
    chips:['Was ist ein Steuerbescheid?','Wie legt man Einspruch ein?','Was ist Festsetzungsverjährung?'] },
  bilanz:   { title:'Bilanz & Buchführung', sub:'HGB · EStG · Buchungssätze',
    chips:['Was ist Aktiva / Passiva?','Wie funktioniert Soll/Haben?','Was ist Abschreibung?'] },
  recht:    { title:'Steuerrecht',          sub:'Privat- & öffentliches Recht',
    chips:['Was ist öffentliches Recht?','Was ist der Unterschied Privatrecht/Öffrecht?','Was ist Finanzgericht?'] },
  karriere: { title:'Karriere Finanzamt',   sub:'Ausbildung · Studium · Bewerbung',
    chips:['Wie bewerbe ich mich?','Was verdient man im Finanzamt?','Unterschied Ausbildung / FHF-Studium?'] },
  kurios:   { title:'Kurioses Steuerrecht', sub:'Wahr oder Falsch · Überraschungen',
    chips:['Welche kuriosen Steuern gibt es?','Was ist die Hundesteuer?','Gibt es eine Kirchensteuer auf Kapitalerträge?'] },
};

const AI_SYSTEM = `Du bist ein freundlicher Steuer-Lernassistent für das Steuer-Lernspiel der Finanzverwaltung Berlin und Brandenburg. 
Du hilfst Schülern, Azubis und Interessierten dabei, Steuerrecht verständlich zu lernen.
Antworte auf Deutsch, präzise und lernförderlich. Nutze kurze Absätze. Verweise bei Bedarf auf relevante Paragrafen (z.B. § 19 EStG).
Füge Lernhinweise oder Merkhilfen hinzu. Maximal 200 Wörter pro Antwort, sofern nicht explizit mehr verlangt.`;

function openAiChat(topic) {
  // KI temporarily disabled – will be re-enabled with backend proxy
  return;
}

function closeAiChat() {
  document.getElementById('ai-panel').classList.remove('open');
  aiStreaming = false;
}

function aiAddMsg(role, html, isTyping = false) {
  const msgs = document.getElementById('ai-msgs');
  const div = document.createElement('div');
  div.className = 'ai-msg ' + role + (isTyping ? ' typing' : '');
  div.innerHTML = isTyping ? '<div class="ai-typing-dots"><span></span><span></span><span></span></div>' : html;
  if (isTyping) div.id = 'ai-typing';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

function aiAsk(text) {
  document.getElementById('ai-input').value = text;
  aiSend();
}

async function aiSend() {
  if (aiStreaming) return;
  const input = document.getElementById('ai-input');
  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  input.style.height = 'auto';
  aiAddMsg('user', text);
  aiHistory.push({ role: 'user', content: text });

  const sendBtn = document.getElementById('ai-send-btn');
  sendBtn.disabled = true;
  aiStreaming = true;

  const typingEl = aiAddMsg('ai', '', true);

  try {
    const topicCtx = aiTopic ? `\n\nAktuelles Thema: ${(AI_TOPIC_CFG[aiTopic]||{}).title || aiTopic}` : '';
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: AI_SYSTEM + topicCtx,
        messages: aiHistory
      })
    });

    const data = await response.json();
    const reply = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('');

    typingEl.remove();
    // Format: bold **text**, paragraphs → line breaks
    const formatted = reply
      .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');
    aiAddMsg('ai', formatted);
    aiHistory.push({ role: 'assistant', content: reply });

  } catch (e) {
    typingEl.remove();
    aiAddMsg('ai', '⚠️ Verbindung fehlgeschlagen. Bitte versuche es erneut.');
  }

  aiStreaming = false;
  sendBtn.disabled = false;
  document.getElementById('ai-input').focus();
}

init();
render();


// ══════════════════════════════════════════
// INFLUENCER: Sofia Vote
// ══════════════════════════════════════════
function sofiaVote(isYes){
  const v=document.getElementById('etag-sofia-vote');
  const a=document.getElementById('etag-sofia-answer');
  if(!v||!a||v.dataset.done) return;
  v.dataset.done='1';
  v.querySelectorAll('button').forEach(b=>{b.disabled=true;b.style.opacity='.45';});
  a.style.display='block';
  a.innerHTML = isYes
    ? '<div class="hl" style="background:rgba(0,201,123,.08);border-color:rgba(0,201,123,.3)">✅ <b>Richtig!</b> Sobald Einnahmen regelmäßig fließen, ist man steuerlich Gewerbetreibende/r – egal ob Hobby oder nicht.</div>'
    : '<div class="hl" style="background:rgba(255,77,109,.06);border-color:rgba(255,77,109,.3)">❌ <b>Leider falsch.</b> „Nur ein Hobby" ist steuerlich kein Argument. Sobald Einnahmen regelmäßig fließen, entsteht Steuerpflicht.</div>';
  setTimeout(()=>{
    const d=document.getElementById('etag-influencer-details');
    if(d){d.style.display='block';d.scrollIntoView({behavior:'smooth',block:'nearest'});}
    setTimeout(()=>{const r=document.getElementById('etag-influencer-rechner');if(r)r.style.display='block';},600);
  },400);
}


function _renderIntro_ao_was(a){
  a.classList.add('basics-dark-mode');
  a.innerHTML=`
  <div style="background:linear-gradient(160deg,#0a1635,#1a3a8f);border-radius:20px;overflow:hidden;margin-bottom:14px">
    <svg viewBox="0 0 360 185" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
      <defs>
        <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="360" height="185" fill="#0a1225"/>
      <!-- Haus-Fundament -->
      <rect x="20" y="148" width="320" height="32" fill="#3a78c0" rx="4"/>
      <text x="180" y="168" font-size="12" fill="#fff" font-family="sans-serif" font-weight="900" text-anchor="middle">AO – Abgabenordnung</text>
      <text x="180" y="178" font-size="8" fill="rgba(255,255,255,.5)" font-family="sans-serif" text-anchor="middle">Das Fundament des gesamten Steuerrechts</text>
      <!-- 3 Zimmer -->
      <rect x="25" y="90" width="94" height="58" fill="#1a4a8f" stroke="#4a8ad4" stroke-width="1.5" rx="4"/>
      <text x="72" y="116" font-size="16" text-anchor="middle">💼</text>
      <text x="72" y="132" font-size="9" fill="#7eb8ff" font-family="sans-serif" font-weight="900" text-anchor="middle">Einkommensteuer</text>
      <text x="72" y="143" font-size="7.5" fill="rgba(255,255,255,.4)" font-family="sans-serif" text-anchor="middle">EStG</text>
      <rect x="133" y="90" width="94" height="58" fill="#1a4a8f" stroke="#4a8ad4" stroke-width="1.5" rx="4"/>
      <text x="180" y="116" font-size="16" text-anchor="middle">🛒</text>
      <text x="180" y="132" font-size="9" fill="#7eb8ff" font-family="sans-serif" font-weight="900" text-anchor="middle">Umsatzsteuer</text>
      <text x="180" y="143" font-size="7.5" fill="rgba(255,255,255,.4)" font-family="sans-serif" text-anchor="middle">UStG</text>
      <rect x="241" y="90" width="94" height="58" fill="#1a4a8f" stroke="#4a8ad4" stroke-width="1.5" rx="4"/>
      <text x="288" y="116" font-size="16" text-anchor="middle">🏢</text>
      <text x="288" y="132" font-size="9" fill="#7eb8ff" font-family="sans-serif" font-weight="900" text-anchor="middle">Körperschaft­steuer</text>
      <text x="288" y="143" font-size="7.5" fill="rgba(255,255,255,.4)" font-family="sans-serif" text-anchor="middle">KStG</text>
      <!-- Dach -->
      <polygon points="180,12 18,90 342,90" fill="#0d1a3a" stroke="#3a78c0" stroke-width="1.5"/>
      <text x="180" y="58" font-size="11" fill="rgba(255,255,255,.35)" font-family="sans-serif" font-weight="700" text-anchor="middle">Steuerrecht</text>
      <!-- Pfeile vom Fundament zu Zimmern -->
      <line x1="72" y1="148" x2="72" y2="165" stroke="rgba(255,255,255,.2)" stroke-width="1" stroke-dasharray="3,2"/>
      <line x1="180" y1="148" x2="180" y2="165" stroke="rgba(255,255,255,.2)" stroke-width="1" stroke-dasharray="3,2"/>
      <line x1="288" y1="148" x2="288" y2="165" stroke="rgba(255,255,255,.2)" stroke-width="1" stroke-dasharray="3,2"/>
    </svg>
    <div style="padding:0 18px 18px">
      <div style="font-size:10px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.4);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">⚖️ AO Basics · Was ist das?</div>
      <div style="font-size:18px;font-weight:900;color:#fff;line-height:1.3;margin-bottom:6px">Die AO ist die Hausordnung des Steuerrechts.</div>
      <div style="font-size:12px;color:rgba(255,255,255,.55);font-weight:700;line-height:1.65">ESt, USt, KSt regeln <i>wie viel</i> Steuer du zahlst. Die <b style="color:var(--cyan)">Abgabenordnung</b> regelt <i>wie</i> das Finanzamt mit dir umgeht – Fristen, Rechte, Pflichten, Verfahren.</div>
    </div>
  </div>

  <div style="background:rgba(255,255,255,.04);border-radius:14px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:900;color:#fff;margin-bottom:10px">Die AO in 3 Sätzen:</div>
    ${[
      ['📅','Wann muss ich was einreichen?','Abgabefristen, Festsetzungsfristen, Verjährung – § 149 ff. AO'],
      ['📬','Wie setzt das FA Steuern fest?','Steuerbescheid, Schätzung, Bekanntgabe (§ 122 Abs. 2 AO, 4-Tage-Fiktion seit JStG 2022)'],
      ['⚖️','Wie wehr ich mich?','Einspruch, Klage, Wiedereinsetzung – § 347 ff. AO'],
      ['🔒','Was darf das FA über mich weitergeben?','Steuergeheimnis – § 30 AO'],
      ['🔍','Darf das FA mich prüfen?','Betriebsprüfung, Mitwirkungspflichten – §§ 193 ff. AO'],
    ].map(([icon,title,desc])=>`
    <div style="display:flex;align-items:flex-start;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.06)">
      <span style="font-size:18px;flex-shrink:0">${icon}</span>
      <div><div style="font-size:11px;font-weight:800;color:#fff">${title}</div><div style="font-size:10px;color:rgba(255,255,255,.4);font-weight:700">${desc}</div></div>
    </div>`).join('')}
  </div>

  <div style="display:flex;gap:8px">
    <button onclick="_introNext('ao',1)" style="flex:3;padding:13px;border-radius:12px;border:none;background:linear-gradient(135deg,#3a78c0,#1a4a9f);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer">Warum brauche ich das? →</button>
    <button onclick="_introNext('ao',99)" style="flex:1;padding:13px;border-radius:12px;border:1.5px solid rgba(255,255,255,.1);background:transparent;color:rgba(255,255,255,.35);font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;cursor:pointer">Überspr.</button>
  </div>`;
}

function _renderIntro_ao_warum(a){
  a.classList.add('basics-dark-mode');
  a.innerHTML=`
  <div style="background:linear-gradient(135deg,#0d1f4a,#1a3a8f);border-radius:18px;padding:18px;margin-bottom:14px">
    <div style="font-size:10px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.45);letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">⚖️ Warum brauche ich die AO?</div>
    <div style="font-size:16px;font-weight:900;color:#fff;margin-bottom:12px">Als Finanzbeamter arbeitest du <b>täglich</b> mit der AO.</div>
    ${[
      {icon:'📬',szenario:'Ein Brief kommt zurück – wurde der Steuerbescheid trotzdem bekannt gegeben?',antwort:'§ 122 Abs. 2 Satz 3 AO: Nein – kommt der Brief zurück, gilt die Bekanntgabefiktion NICHT. Das FA muss den Zugang nachweisen und den Bescheid erneut zustellen.',color:'#3a78c0'},
      {icon:'⏰',szenario:'Jemand fragt: „Bin ich für 2019 noch steuerpflichtig?" – wie lange kann das FA festsetzen?',antwort:'§ 169 AO: 4 Jahre Festsetzungsfrist. Bei Hinterziehung: 10 Jahre. Ohne Abgabe: Anlaufhemmung § 170 Abs. 2.',color:'#e67e22'},
      {icon:'🏭',szenario:'Eine Bäckerei wird geprüft – der Inhaber fragt, ob er die Bücher vorlegen muss.',antwort:'§ 200 AO: Ja, volle Mitwirkungspflicht. Aber: § 197 AO schreibt grundsätzlich Ankündigung vor.',color:'#27ae60'},
      {icon:'💌',szenario:'Ein Steuerpflichtiger legt Einspruch ein – aber erst 6 Wochen nach Bescheiddatum.',antwort:'§ 355 Abs. 1 AO: Frist 1 Monat ab Bekanntgabe. Einspruch wäre verfristet → Wiedereinsetzung § 110 AO prüfen (nur bei unverschuldetem Fristversäumnis). Achtung: Bestandskraft tritt ein. Verböserung nach § 367 Abs. 2 AO beachten!',color:'#c0392b'},
    ].map(s=>`
    <div style="background:rgba(255,255,255,.04);border-left:3px solid ${s.color};border-radius:0 10px 10px 0;padding:10px 12px;margin-bottom:8px">
      <div style="font-size:10px;color:rgba(255,255,255,.55);font-weight:700;margin-bottom:4px"><span style="font-size:14px;margin-right:6px">${s.icon}</span>${s.szenario}</div>
      <div style="font-size:10px;font-weight:800;color:${s.color};line-height:1.5">→ ${s.antwort}</div>
    </div>`).join('')}
  </div>

  <div style="background:rgba(255,217,74,.07);border:1px solid rgba(255,217,74,.2);border-radius:12px;padding:12px;margin-bottom:14px">
    <div style="font-size:11px;font-weight:900;color:#ffd94a;margin-bottom:5px">💡 Das Wichtigste auf einen Blick</div>
    <div style="font-size:11px;color:rgba(255,255,255,.65);font-weight:700;line-height:1.7">Die AO ist das <b>Rückgrat</b> deiner täglichen Arbeit. Egal ob du ESt, USt oder Körperschaftsteuer bearbeitest – die Verfahrensregeln kommen immer aus der AO. Ohne AO weißt du wie viel Steuer jemand zahlen muss, aber nicht wie du sie festsetzt oder wie du dich schützt.</div>
  </div>

  <div style="display:flex;gap:8px">
    <button onclick="_introNext('ao',0)" style="flex:1;padding:11px;border-radius:12px;border:1.5px solid rgba(255,255,255,.1);background:transparent;color:rgba(255,255,255,.4);font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;cursor:pointer">← Zurück</button>
    <button onclick="_introNext('ao',2)" style="flex:3;padding:11px;border-radius:12px;border:none;background:linear-gradient(135deg,#3a78c0,#1a4a9f);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer">Das Steuergeheimnis →</button>
  </div>`;
}

// ══════════════════════════════════════════════════════════════
// EST – Was ist die Einkommensteuer?
// ══════════════════════════════════════════════════════════════
function _renderIntro_est_was(a){
  a.classList.add('basics-dark-mode');
  a.innerHTML=`
  <div style="background:linear-gradient(160deg,#0a1635,#1a3a8f);border-radius:20px;overflow:hidden;margin-bottom:14px">
    <svg viewBox="0 0 360 175" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
      <rect width="360" height="175" fill="#0a1225"/>
      <!-- Lebensweg mit Steuermomente -->
      <line x1="30" y1="105" x2="330" y2="105" stroke="#3a78c0" stroke-width="2.5"/>
      <!-- Punkte -->
      ${[
        [55,'🎓','Erster Job',true],
        [120,'💰','Gehalts­erhöhung',true],
        [185,'🏠','Wohnung kaufen',true],
        [250,'💍','Heiraten',true],
        [315,'👶','Kind bekommen',true],
      ].map(([x,icon,label,active])=>`
      <circle cx="${x}" cy="105" r="18" fill="${active?'#1a3a8f':'#0d1a3a'}" stroke="${active?'#4a8ad4':'#2a3a6a'}" stroke-width="1.5"/>
      <text x="${x}" y="110" font-size="13" text-anchor="middle">${icon}</text>
      <text x="${x}" y="128" font-size="7" fill="rgba(255,255,255,.45)" font-family="sans-serif" text-anchor="middle">${label}</text>`).join('')}
      <!-- Steuer-Abzweigungen -->
      <path d="M55,87 Q55,60 80,50" fill="none" stroke="rgba(255,77,109,.4)" stroke-width="1.5" stroke-dasharray="4,2"/>
      <text x="85" y="46" font-size="8" fill="#ff8099" font-family="sans-serif">§ 19 EStG</text>
      <path d="M120,87 Q120,55 145,45" fill="none" stroke="rgba(255,77,109,.4)" stroke-width="1.5" stroke-dasharray="4,2"/>
      <text x="148" y="41" font-size="8" fill="#ff8099" font-family="sans-serif">mehr zvE</text>
      <path d="M185,87 Q185,58 205,48" fill="none" stroke="rgba(0,201,123,.4)" stroke-width="1.5" stroke-dasharray="4,2"/>
      <text x="208" y="44" font-size="8" fill="#7effa0" font-family="sans-serif">§ 21 EStG</text>
      <path d="M250,87 Q250,62 270,52" fill="none" stroke="rgba(0,201,123,.4)" stroke-width="1.5" stroke-dasharray="4,2"/>
      <text x="273" y="48" font-size="8" fill="#7effa0" font-family="sans-serif">Splittingtarif</text>
      <path d="M315,87 Q315,60 295,50" fill="none" stroke="rgba(0,201,123,.4)" stroke-width="1.5" stroke-dasharray="4,2"/>
      <text x="265" y="46" font-size="8" fill="#7effa0" font-family="sans-serif">Kinderfreibetrag</text>
      <!-- Label -->
      <text x="180" y="158" font-size="9" fill="rgba(255,255,255,.3)" font-family="sans-serif" text-anchor="middle">Die Einkommensteuer begleitet dich dein ganzes Leben</text>
    </svg>
    <div style="padding:0 18px 18px">
      <div style="font-size:10px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.4);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">💼 ESt Basics · Was ist das?</div>
      <div style="font-size:18px;font-weight:900;color:#fff;line-height:1.3;margin-bottom:6px">Die Einkommensteuer begleitet jeden Menschen – von der ersten Ausbildung bis zur Rente.</div>
      <div style="font-size:12px;color:rgba(255,255,255,.55);font-weight:700;line-height:1.65">§ 1 EStG: Alle natürlichen Personen mit Wohnsitz in Deutschland sind unbeschränkt einkommensteuerpflichtig. Das bist auch du – seit dem ersten Euro Einkommen.</div>
    </div>
  </div>

  <div style="background:rgba(255,255,255,.04);border-radius:14px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:900;color:#fff;margin-bottom:10px">Die 7 Einkunftsarten (§ 2 Abs. 1 EStG)</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px">
    ${[
      ['💼','§ 19','Nichtselbst. Arbeit','Azubi-Gehalt, Lohn, Gehalt'],
      ['🏭','§ 15','Gewerbebetrieb','Bäcker, GmbH-Gesellschafter'],
      ['📚','§ 18','Selbstständig','Arzt, Anwalt, Steuerberater'],
      ['🌾','§ 13','Land- & Forstwirt.','Bauer, Winzer'],
      ['🏠','§ 21','Vermietung','Vermieter einer Wohnung'],
      ['💰','§ 20','Kapitalvermögen','Zinsen, Dividenden, Kursgewinne'],
      ['✨','§ 22','Sonstige','Rente, Spekulationsgewinne'],
    ].map(([icon,para,name,bsp])=>`
    <div style="background:rgba(255,255,255,.05);border-radius:9px;padding:7px 8px">
      <div style="display:flex;align-items:center;gap:5px;margin-bottom:2px">
        <span style="font-size:14px">${icon}</span>
        <span style="font-size:8px;font-family:'Space Mono',monospace;color:var(--cyan);font-weight:700">${para}</span>
      </div>
      <div style="font-size:10px;font-weight:800;color:#fff">${name}</div>
      <div style="font-size:9px;color:rgba(255,255,255,.35);font-weight:700">${bsp}</div>
    </div>`).join('')}
    </div>
  </div>

  <div style="display:flex;gap:8px">
    <button onclick="_introNext('est',1)" style="flex:3;padding:13px;border-radius:12px;border:none;background:linear-gradient(135deg,#1a3a8f,#0a1a5a);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer">Warum brauche ich das? →</button>
    <button onclick="_introNext('est',99)" style="flex:1;padding:13px;border-radius:12px;border:1.5px solid rgba(255,255,255,.1);background:transparent;color:rgba(255,255,255,.35);font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;cursor:pointer">Überspr.</button>
  </div>`;
}

function _renderIntro_est_warum(a){
  a.classList.add('basics-dark-mode');
  a.innerHTML=`
  <div style="background:linear-gradient(135deg,#0d1f4a,#1a3a8f);border-radius:18px;padding:18px;margin-bottom:14px">
    <div style="font-size:10px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.45);letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">💼 Warum brauche ich die ESt?</div>
    <div style="font-size:16px;font-weight:900;color:#fff;margin-bottom:12px">Die ESt ist die wichtigste Steuer – und die häufigste Arbeit im Finanzamt.</div>

    <div style="background:rgba(255,255,255,.04);border-radius:12px;padding:12px;margin-bottom:10px">
      <div style="font-size:10px;font-weight:900;color:#ffd94a;margin-bottom:8px">📊 Was du als Finanzbeamter täglich machst:</div>
      ${[
        ['Veranlagungssachbearbeiter (häufigster Einstieg)','Steuererklärungen prüfen und Bescheide erlassen – fast alles ESt'],
        ['Betriebsprüfer','ESt bei Selbstständigen und Unternehmern prüfen'],
        ['Rechtsbehelfsstelle','Einsprüche gegen ESt-Bescheide bearbeiten'],
        ['Vollstreckung','Ausstehende ESt einfordern'],
      ].map(([role,desc])=>`
      <div style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,.06)">
        <div style="font-size:10px;font-weight:900;color:#fff">${role}</div>
        <div style="font-size:10px;color:rgba(255,255,255,.45);font-weight:700">${desc}</div>
      </div>`).join('')}
    </div>

    <div style="font-size:11px;color:rgba(255,255,255,.65);font-weight:700;line-height:1.7">Die ESt ist keine abstrakte Materie – du wirst sie täglich auf echte Schicksale anwenden: der Pendler der seine Fahrtkosten absetzt, die Witwe deren Rentenbesteuerung geprüft wird, der Freiberufler der zwischen Sonderausgaben und Werbungskosten abgrenzen muss.</div>
  </div>

  <div style="background:rgba(255,217,74,.07);border:1px solid rgba(255,217,74,.2);border-radius:12px;padding:12px;margin-bottom:14px">
    <div style="font-size:11px;font-weight:900;color:#ffd94a;margin-bottom:5px">🧮 Das ESt-Schema – dein tägliches Werkzeug</div>
    <div style="display:flex;flex-direction:column;gap:3px">
    ${[
      ['Summe aller Einkünfte','§ 2 Abs. 1+2 EStG','#7eb8ff'],
      '− Verlustausgleich',
      '= Gesamtbetrag der Einkünfte',
      '− Sonderausgaben (§§ 10–10b EStG)',
      '− Außergewöhnliche Belastungen (§§ 33–33b EStG)',
      '= Einkommen',
      '− Kinderfreibeträge (§ 32 EStG)',
      '= Zu versteuerndes Einkommen (zvE)',
      '× Steuertarif § 32a EStG → Einkommensteuer',
    ].map((row,i)=>typeof row === 'string'
      ? `<div style="font-size:10px;font-weight:700;color:rgba(255,255,255,${i===8?'.9':'0.5'});padding:2px 0;${i===8?'border-top:1px solid rgba(255,255,255,.2);margin-top:3px;padding-top:5px;color:#ffd94a;font-weight:900;':''}">${row}</div>`
      : `<div style="font-size:10px;font-weight:900;color:${row[2]};padding:2px 0">${row[0]} <span style="color:rgba(255,255,255,.3);font-family:'Space Mono',monospace;font-size:9px">${row[1]}</span></div>`
    ).join('')}
    </div>
  </div>

  <div style="display:flex;gap:8px">
    <button onclick="_introNext('est',0)" style="flex:1;padding:11px;border-radius:12px;border:1.5px solid rgba(255,255,255,.1);background:transparent;color:rgba(255,255,255,.4);font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;cursor:pointer">← Zurück</button>
    <button onclick="_introNext('est',2)" style="flex:3;padding:11px;border-radius:12px;border:none;background:linear-gradient(135deg,#1a3a8f,#0a1a5a);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer">Gehaltszettel & Tarif →</button>
  </div>`;
}

// ══════════════════════════════════════════════════════════════
// UST – Was ist die Umsatzsteuer?
// ══════════════════════════════════════════════════════════════
function _renderIntro_ust_was(a){
  a.classList.add('basics-dark-mode');
  a.innerHTML=`
  <div style="background:linear-gradient(160deg,#1a0c02,#4a2000);border-radius:20px;overflow:hidden;margin-bottom:14px">
    <svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
      <rect width="360" height="170" fill="#0f0700"/>
      <!-- Kassenzettel als Hauptelement -->
      <rect x="20" y="15" width="145" height="148" fill="#fffef9" rx="8"/>
      <rect x="20" y="15" width="145" height="24" fill="#e67e22" rx="8 8 0 0"/>
      <text x="92" y="31" font-size="9" fill="#fff" font-family="sans-serif" font-weight="900" text-anchor="middle">MEIN SUPERMARKT</text>
      <text x="92" y="42" font-size="7" fill="#555" font-family="sans-serif" text-anchor="middle">Quittung Nr. 2847</text>
      <line x1="30" y1="47" x2="155" y2="47" stroke="#eee" stroke-width="0.8"/>
      ${[
        ['Brot 500g','1,79 €','7%'],
        ['Milch 1L','1,09 €','7%'],
        ['Wein Rotwein','7,99 €','19%'],
        ['Schokolade','1,49 €','7%'],
        ['Red Bull 250ml','1,89 €','19%'],
        ['Zahnpasta','2,49 €','19%'],
      ].map(([name,price,rate],i)=>`
      <text x="30" y="${58+i*14}" font-size="7.5" fill="#444" font-family="sans-serif">${name}</text>
      <text x="155" y="${58+i*14}" font-size="7.5" fill="#444" font-family="sans-serif" text-anchor="end">${price}</text>
      <rect x="120" y="${50+i*14}" width="20" height="9" fill="${rate==='7%'?'rgba(39,174,96,.15)':'rgba(231,76,60,.12)'}" rx="2"/>
      <text x="130" y="${58+i*14}" font-size="6.5" fill="${rate==='7%'?'#27ae60':'#c0392b'}" font-family="monospace" font-weight="700" text-anchor="middle">${rate}</text>`).join('')}
      <line x1="30" y1="144" x2="155" y2="144" stroke="#ccc" stroke-width="1"/>
      <text x="30" y="155" font-size="8" fill="#333" font-family="sans-serif" font-weight="700">SUMME</text>
      <text x="155" y="155" font-size="9" fill="#e67e22" font-family="sans-serif" font-weight="900" text-anchor="end">16,74 €</text>
      <!-- Rechte Seite: USt-Erklärung -->
      <rect x="180" y="15" width="165" height="148" fill="rgba(255,255,255,.04)" rx="8" stroke="rgba(255,140,66,.2)" stroke-width="1"/>
      <text x="262" y="33" font-size="9" fill="#ff8c42" font-family="monospace" font-weight="700" text-anchor="middle">UST IM KASSENBON</text>
      <text x="192" y="50" font-size="7.5" fill="rgba(255,255,255,.5)" font-family="sans-serif">Nettobetrag 7%-Waren:</text>
      <text x="335" y="50" font-size="7.5" fill="#ffd94a" font-family="monospace" text-anchor="end">4,99 €</text>
      <text x="192" y="62" font-size="7.5" fill="rgba(255,255,255,.5)" font-family="sans-serif">darin USt 7%:</text>
      <text x="335" y="62" font-size="7.5" fill="#27ae60" font-family="monospace" text-anchor="end">0,33 €</text>
      <text x="192" y="78" font-size="7.5" fill="rgba(255,255,255,.5)" font-family="sans-serif">Nettobetrag 19%-Waren:</text>
      <text x="335" y="78" font-size="7.5" fill="#ffd94a" font-family="monospace" text-anchor="end">10,41 €</text>
      <text x="192" y="90" font-size="7.5" fill="rgba(255,255,255,.5)" font-family="sans-serif">darin USt 19%:</text>
      <text x="335" y="90" font-size="7.5" fill="#c0392b" font-family="monospace" text-anchor="end">1,97 €</text>
      <line x1="188" y1="98" x2="338" y2="98" stroke="rgba(255,255,255,.15)" stroke-width="1"/>
      <text x="192" y="110" font-size="8" fill="rgba(255,255,255,.7)" font-family="sans-serif" font-weight="700">Gesamte USt:</text>
      <text x="335" y="110" font-size="9" fill="#ff8c42" font-family="monospace" font-weight="900" text-anchor="end">2,30 €</text>
      <text x="262" y="130" font-size="8" fill="rgba(255,255,255,.35)" font-family="sans-serif" text-anchor="middle">→ geht ans Finanzamt</text>
      <text x="262" y="143" font-size="9" fill="#ffd94a" font-family="sans-serif" font-weight="900" text-anchor="middle">= Zahllast des Supermarkts</text>
    </svg>
    <div style="padding:0 18px 18px">
      <div style="font-size:10px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.4);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">🛒 USt Basics · Was ist das?</div>
      <div style="font-size:18px;font-weight:900;color:#fff;line-height:1.3;margin-bottom:6px">Du zahlst sie bei jedem Einkauf. Aber sie landet nicht beim Supermarkt.</div>
      <div style="font-size:12px;color:rgba(255,255,255,.55);font-weight:700;line-height:1.65">Die Umsatzsteuer ist eine <b style="color:#ff8c42">Verbrauchsteuer</b>: Du als Endkunde trägst sie wirtschaftlich. Der Unternehmer ist nur Inkassostelle für das Finanzamt.</div>
    </div>
  </div>

  <div style="background:rgba(255,255,255,.04);border-radius:14px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:900;color:#fff;margin-bottom:8px">Die USt in einem Satz erklärt:</div>
    <div style="background:rgba(230,126,34,.08);border-left:3px solid #e67e22;padding:10px 12px;border-radius:0 10px 10px 0;margin-bottom:10px">
      <div style="font-size:12px;font-weight:700;color:rgba(255,255,255,.8);line-height:1.65">§ 1 Abs. 1 Nr. 1 UStG: Steuerbar sind <b style="color:#ff8c42">Lieferungen und sonstige Leistungen</b>, die ein <b style="color:#ff8c42">Unternehmer</b> im <b style="color:#ff8c42">Inland</b> gegen <b style="color:#ff8c42">Entgelt</b> im Rahmen seines <b style="color:#ff8c42">Unternehmens</b> ausführt.</div>
    </div>
    ${[
      ['👤','Wer?','Unternehmer (§ 2 UStG) – kein Verbraucher'],
      ['📍','Wo?','Inland – Leistungsort bestimmt Steuerpflicht (§ 3a UStG)'],
      ['💵','Wofür?','Gegen Entgelt – kostenlose Leistungen meist nicht steuerbar'],
      ['🏢','Womit?','Im Rahmen des Unternehmens – private Tätigkeiten nicht'],
    ].map(([icon,frage,antwort])=>`
    <div style="display:flex;gap:8px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.05)">
      <span style="font-size:14px;flex-shrink:0">${icon}</span>
      <div><span style="font-size:10px;font-weight:900;color:#ff8c42">${frage}</span><span style="font-size:10px;color:rgba(255,255,255,.55);font-weight:700;margin-left:6px">${antwort}</span></div>
    </div>`).join('')}
  </div>

  <div style="display:flex;gap:8px">
    <button onclick="_introNext('ust',1)" style="flex:3;padding:13px;border-radius:12px;border:none;background:linear-gradient(135deg,#c0581a,#7a3000);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer">Warum brauche ich das? →</button>
    <button onclick="_introNext('ust',99)" style="flex:1;padding:13px;border-radius:12px;border:1.5px solid rgba(255,255,255,.1);background:transparent;color:rgba(255,255,255,.35);font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;cursor:pointer">Überspr.</button>
  </div>`;
}

function _renderIntro_ust_warum(a){
  a.classList.add('basics-dark-mode');
  a.innerHTML=`
  <div style="background:linear-gradient(135deg,#1a0c02,#4a2000);border-radius:18px;padding:18px;margin-bottom:14px">
    <div style="font-size:10px;font-family:'Space Mono',monospace;color:#ff8c42;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">🛒 Warum brauche ich die USt?</div>
    <div style="font-size:16px;font-weight:900;color:#fff;margin-bottom:12px">Die USt ist umsatzstärkste Steuerquelle des Staates – und voller Fallstricke.</div>

    <div style="background:rgba(255,255,255,.04);border-radius:12px;padding:12px;margin-bottom:10px">
      <div style="font-size:10px;font-weight:900;color:#ffd94a;margin-bottom:8px">💰 Was die USt bringt</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        <div style="background:rgba(255,140,66,.1);border-radius:10px;padding:10px;text-align:center">
          <div style="font-size:22px;font-weight:900;color:#ff8c42;font-family:'Space Mono',monospace">~280 Mrd.</div>
          <div style="font-size:9px;color:rgba(255,255,255,.5);font-weight:700">USt-Einnahmen 2024 (Deutschland)</div>
        </div>
        <div style="background:rgba(255,140,66,.1);border-radius:10px;padding:10px;text-align:center">
          <div style="font-size:22px;font-weight:900;color:#ff8c42;font-family:'Space Mono',monospace">~32%</div>
          <div style="font-size:9px;color:rgba(255,255,255,.5);font-weight:700">aller Steuereinnahmen</div>
        </div>
      </div>
    </div>

    ${[
      {icon:'🧾',title:'Voranmeldungen prüfen',desc:'Unternehmer melden USt monatlich/quartalsweise vorab – du prüfst Stimmigkeit und erkennst Auffälligkeiten.',color:'#e67e22'},
      {icon:'🔍',title:'Vorsteuer-Betrug aufdecken',desc:'USt-Karusselle (Betrug mit Scheinfirmen) kosten den Staat Milliarden. Finanzbeamte erkennen die Muster.',color:'#c0392b'},
      {icon:'📍',title:'Leistungsort bestimmen',desc:'Bei internationalen Transaktionen entscheidet der Leistungsort ob überhaupt deutsche USt anfällt (§ 3a UStG).',color:'#3a78c0'},
    ].map(s=>`
    <div style="display:flex;gap:10px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.06)">
      <span style="font-size:22px;flex-shrink:0">${s.icon}</span>
      <div>
        <div style="font-size:11px;font-weight:900;color:${s.color}">${s.title}</div>
        <div style="font-size:10px;color:rgba(255,255,255,.5);font-weight:700;line-height:1.5">${s.desc}</div>
      </div>
    </div>`).join('')}
  </div>

  <div style="background:rgba(255,217,74,.07);border:1px solid rgba(255,217,74,.2);border-radius:12px;padding:12px;margin-bottom:14px">
    <div style="font-size:11px;font-weight:900;color:#ffd94a;margin-bottom:5px">🔑 Das USt-System auf einen Blick</div>
    <div style="font-size:11px;color:rgba(255,255,255,.65);font-weight:700;line-height:1.7">Unternehmer berechnen USt auf ihre Umsätze → dürfen aber die ihnen berechnete USt (<b>Vorsteuer</b>) abziehen. Ans FA zahlen sie nur die <b>Differenz (Zahllast)</b>. Der Endverbraucher kann keine Vorsteuer abziehen → er trägt die gesamte Steuerlast.</div>
  </div>

  <div style="display:flex;gap:8px">
    <button onclick="_introNext('ust',0)" style="flex:1;padding:11px;border-radius:12px;border:1.5px solid rgba(255,255,255,.1);background:transparent;color:rgba(255,255,255,.4);font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;cursor:pointer">← Zurück</button>
    <button onclick="_introNext('ust',2)" style="flex:3;padding:11px;border-radius:12px;border:none;background:linear-gradient(135deg,#c0581a,#7a3000);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer">7 % oder 19 %? →</button>
  </div>`;
}

// ══════════════════════════════════════════════════════════════
// BILANZ – Was ist die Bilanz?
// ══════════════════════════════════════════════════════════════
function _renderIntro_bilanz_was(a){
  a.classList.add('basics-dark-mode');
  a.innerHTML=`
  <div style="background:linear-gradient(160deg,#0a2a18,#1a5a30);border-radius:20px;overflow:hidden;margin-bottom:14px">
    <svg viewBox="0 0 360 185" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
      <rect width="360" height="185" fill="#071a10"/>
      <!-- Bilanz-Waage visual -->
      <line x1="180" y1="30" x2="180" y2="75" stroke="#00c97b" stroke-width="3"/>
      <circle cx="180" cy="28" r="6" fill="#00c97b"/>
      <!-- Waagebalken -->
      <line x1="70" y1="75" x2="290" y2="75" stroke="#00c97b" stroke-width="2.5"/>
      <!-- Linke Schale: AKTIVA -->
      <line x1="95" y1="75" x2="95" y2="105" stroke="#7eb8ff" stroke-width="1.5"/>
      <rect x="50" y="105" width="90" height="55" fill="rgba(58,120,192,.2)" stroke="#3a78c0" stroke-width="1.5" rx="4"/>
      <text x="95" y="122" font-size="9" fill="#7eb8ff" font-family="sans-serif" font-weight="900" text-anchor="middle">AKTIVA</text>
      <text x="95" y="134" font-size="7.5" fill="rgba(255,255,255,.5)" font-family="sans-serif" text-anchor="middle">Was besitze ich?</text>
      <text x="95" y="145" font-size="7" fill="rgba(255,255,255,.35)" font-family="sans-serif" text-anchor="middle">Maschinen, Bank,</text>
      <text x="95" y="155" font-size="7" fill="rgba(255,255,255,.35)" font-family="sans-serif" text-anchor="middle">Forderungen...</text>
      <!-- Rechte Schale: PASSIVA -->
      <line x1="265" y1="75" x2="265" y2="105" stroke="#ff8c42" stroke-width="1.5"/>
      <rect x="220" y="105" width="90" height="55" fill="rgba(230,126,34,.2)" stroke="#e67e22" stroke-width="1.5" rx="4"/>
      <text x="265" y="122" font-size="9" fill="#ff8c42" font-family="sans-serif" font-weight="900" text-anchor="middle">PASSIVA</text>
      <text x="265" y="134" font-size="7.5" fill="rgba(255,255,255,.5)" font-family="sans-serif" text-anchor="middle">Wie finanziert?</text>
      <text x="265" y="145" font-size="7" fill="rgba(255,255,255,.35)" font-family="sans-serif" text-anchor="middle">Eigenkapital,</text>
      <text x="265" y="155" font-size="7" fill="rgba(255,255,255,.35)" font-family="sans-serif" text-anchor="middle">Schulden...</text>
      <!-- Gleichgewicht -->
      <text x="180" y="100" font-size="18" text-anchor="middle">⚖️</text>
      <!-- Goldene Regel -->
      <text x="180" y="170" font-size="10" fill="#00c97b" font-family="monospace" font-weight="900" text-anchor="middle">AKTIVA = PASSIVA (immer!)</text>
      <!-- Betrag Beispiele -->
      <text x="95" y="168" font-size="9" fill="#7eb8ff" font-family="monospace" font-weight="900" text-anchor="middle">250.000 €</text>
      <text x="265" y="168" font-size="9" fill="#ff8c42" font-family="monospace" font-weight="900" text-anchor="middle">250.000 €</text>
    </svg>
    <div style="padding:0 18px 18px">
      <div style="font-size:10px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.4);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">📋 Bilanz Basics · Was ist das?</div>
      <div style="font-size:18px;font-weight:900;color:#fff;line-height:1.3;margin-bottom:6px">Die Bilanz ist eine Momentaufnahme: Was hat das Unternehmen – und wem gehört es?</div>
      <div style="font-size:12px;color:rgba(255,255,255,.55);font-weight:700;line-height:1.65">§ 242 HGB: Jeder Kaufmann muss zu Beginn und zum Schluss jedes Geschäftsjahres eine Bilanz aufstellen. Aktiva = Passiva – diese Gleichung ist das Herzstück der doppelten Buchführung.</div>
    </div>
  </div>

  <div style="background:rgba(255,255,255,.04);border-radius:14px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:900;color:#fff;margin-bottom:10px">Aktiva vs. Passiva – der Unterschied</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      <div style="background:rgba(58,120,192,.1);border:1px solid rgba(58,120,192,.3);border-radius:10px;padding:10px">
        <div style="font-size:10px;font-family:'Space Mono',monospace;color:#7eb8ff;font-weight:700;margin-bottom:6px">AKTIVA (links)</div>
        <div style="font-size:10px;color:rgba(255,255,255,.6);font-weight:700;line-height:1.6"><b style="color:#fff">Was gehört dem Unternehmen?</b><br><br>📦 Anlagevermögen:<br>Maschinen, Gebäude, Fuhrpark<br><br>💼 Umlaufvermögen:<br>Kasse, Bank, Vorräte, Forderungen</div>
      </div>
      <div style="background:rgba(230,126,34,.1);border:1px solid rgba(230,126,34,.3);border-radius:10px;padding:10px">
        <div style="font-size:10px;font-family:'Space Mono',monospace;color:#ff8c42;font-weight:700;margin-bottom:6px">PASSIVA (rechts)</div>
        <div style="font-size:10px;color:rgba(255,255,255,.6);font-weight:700;line-height:1.6"><b style="color:#fff">Wer hat es finanziert?</b><br><br>💰 Eigenkapital:<br>Einlagen der Eigentümer + Gewinne<br><br>📋 Fremdkapital:<br>Bankdarlehen, Verbindlichkeiten</div>
      </div>
    </div>
  </div>

  <div style="display:flex;gap:8px">
    <button onclick="_introNext('bilanz',1)" style="flex:3;padding:13px;border-radius:12px;border:none;background:linear-gradient(135deg,#1a5a30,#0a2a18);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer">Warum brauche ich das? →</button>
    <button onclick="_introNext('bilanz',99)" style="flex:1;padding:13px;border-radius:12px;border:1.5px solid rgba(255,255,255,.1);background:transparent;color:rgba(255,255,255,.35);font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;cursor:pointer">Überspr.</button>
  </div>`;
}

function _renderIntro_bilanz_warum(a){
  a.classList.add('basics-dark-mode');
  a.innerHTML=`
  <div style="background:linear-gradient(135deg,#0a2a18,#1a5a30);border-radius:18px;padding:18px;margin-bottom:14px">
    <div style="font-size:10px;font-family:'Space Mono',monospace;color:#7effa0;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">📋 Warum brauche ich Bilanz/Buchführung?</div>
    <div style="font-size:16px;font-weight:900;color:#fff;margin-bottom:12px">Buchführung ist die Sprache des Geldes – als Finanzbeamter musst du sie lesen können.</div>

    <div style="background:rgba(255,255,255,.04);border-radius:12px;padding:12px;margin-bottom:12px">
      <div style="font-size:10px;font-weight:900;color:#ffd94a;margin-bottom:8px">🔍 Was du in der Praxis prüfst:</div>
      ${[
        {icon:'📊',title:'Gewinnermittlung',desc:'Aus der GuV (Gewinn- und Verlustrechnung) liest du den steuerlichen Gewinn – Grundlage für ESt, KSt, GewSt.'},
        {icon:'🕵️',title:'Manipulationen erkennen',desc:'Stimmige Buchführung vs. frisierte Bilanzen. „Wenn die Bank keinen Kredit mehr gibt, prüft das Finanzamt die Buchhaltung."'},
        {icon:'💰',title:'Entnahmen prüfen',desc:'Hat der Unternehmer privat entnommen? Wurde es richtig gebucht? Privatentnahmen erhöhen den steuerpflichtigen Gewinn.'},
      ].map(s=>`
      <div style="display:flex;gap:10px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.06)">
        <span style="font-size:20px;flex-shrink:0">${s.icon}</span>
        <div>
          <div style="font-size:11px;font-weight:900;color:#00c97b">${s.title}</div>
          <div style="font-size:10px;color:rgba(255,255,255,.5);font-weight:700;line-height:1.5">${s.desc}</div>
        </div>
      </div>`).join('')}
    </div>

    <div style="background:rgba(255,217,74,.07);border:1px solid rgba(255,217,74,.2);border-radius:12px;padding:12px">
      <div style="font-size:11px;font-weight:900;color:#ffd94a;margin-bottom:6px">📐 Die Grundgleichung der Buchführung</div>
      <div style="background:#0a1a10;border-radius:8px;padding:10px;font-family:'Space Mono',monospace;font-size:11px;font-weight:700;text-align:center;line-height:2">
        <span style="color:#7eb8ff">SOLL</span> = <span style="color:#ff8c42">HABEN</span><br>
        <span style="color:rgba(255,255,255,.4);font-size:9px">Jeder Buchungssatz hat eine Soll- und eine Habenseite</span><br>
        <span style="color:#00c97b">Aktiva = Passiva</span><br>
        <span style="color:rgba(255,255,255,.4);font-size:9px">Die Bilanzsumme ist immer ausgeglichen</span>
      </div>
    </div>
  </div>

  <div style="display:flex;gap:8px">
    <button onclick="_introNext('bilanz',0)" style="flex:1;padding:11px;border-radius:12px;border:1.5px solid rgba(255,255,255,.1);background:transparent;color:rgba(255,255,255,.4);font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;cursor:pointer">← Zurück</button>
    <button onclick="_introNext('bilanz',2)" style="flex:3;padding:11px;border-radius:12px;border:none;background:linear-gradient(135deg,#1a5a30,#0a2a18);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer">T-Konto & Buchungssätze →</button>
  </div>`;
}

// ══════════════════════════════════════════════════════════════
// RECHT – Was ist Privatrecht?
// ══════════════════════════════════════════════════════════════
function _renderIntro_recht_was(a){
  a.classList.add('basics-dark-mode');
  a.innerHTML=`
  <div style="background:linear-gradient(160deg,#1a0a3e,#4a1a8f);border-radius:20px;overflow:hidden;margin-bottom:14px">
    <svg viewBox="0 0 360 175" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
      <rect width="360" height="175" fill="#100820"/>
      <!-- Rechtssystem-Übersicht -->
      <rect x="10" y="15" width="340" height="32" fill="#2a1a5e" rx="6"/>
      <text x="180" y="36" font-size="11" fill="#c8a0ff" font-family="sans-serif" font-weight="900" text-anchor="middle">Rechtssystem Deutschland</text>
      <!-- Zwei Hauptzweige -->
      <line x1="90" y1="47" x2="90" y2="70" stroke="rgba(255,255,255,.2)" stroke-width="1.5"/>
      <line x1="270" y1="47" x2="270" y2="70" stroke="rgba(255,255,255,.2)" stroke-width="1.5"/>
      <line x1="90" y1="47" x2="270" y2="47" stroke="rgba(255,255,255,.1)" stroke-width="1"/>
      <!-- Privatrecht Box -->
      <rect x="15" y="70" width="155" height="95" fill="rgba(123,94,167,.2)" stroke="#7b5ea7" stroke-width="2" rx="8"/>
      <text x="92" y="88" font-size="10" fill="#c8a0ff" font-family="sans-serif" font-weight="900" text-anchor="middle">PRIVATRECHT</text>
      <text x="92" y="100" font-size="8" fill="rgba(255,255,255,.4)" font-family="sans-serif" text-anchor="middle">zwischen Bürger ↔ Bürger</text>
      ${[['BGB','Kaufvertrag, Miete'],['HGB','Handelsrecht'],['GmbHG','Gesellschaftsrecht'],['InsO','Insolvenz']].map(([g,e],i)=>`
      <text x="28" y="${115+i*13}" font-size="8" fill="#c8a0ff" font-family="monospace" font-weight="700">${g}</text>
      <text x="70" y="${115+i*13}" font-size="7.5" fill="rgba(255,255,255,.4)" font-family="sans-serif">${e}</text>`).join('')}
      <!-- Öffentliches Recht Box -->
      <rect x="190" y="70" width="160" height="95" fill="rgba(58,120,192,.2)" stroke="#3a78c0" stroke-width="2" rx="8"/>
      <text x="270" y="88" font-size="10" fill="#7eb8ff" font-family="sans-serif" font-weight="900" text-anchor="middle">ÖFFENTL. RECHT</text>
      <text x="270" y="100" font-size="8" fill="rgba(255,255,255,.4)" font-family="sans-serif" text-anchor="middle">Staat ↔ Bürger</text>
      ${[['AO','Abgabenordnung'],['EStG','Einkommensteuer'],['GG','Grundgesetz'],['VwGO','Verwaltungsgericht']].map(([g,e],i)=>`
      <text x="203" y="${115+i*13}" font-size="8" fill="#7eb8ff" font-family="monospace" font-weight="700">${g}</text>
      <text x="240" y="${115+i*13}" font-size="7.5" fill="rgba(255,255,255,.4)" font-family="sans-serif">${e}</text>`).join('')}
      <!-- Du-Pfeil -->
      <text x="180" y="158" font-size="20" text-anchor="middle">👆</text>
      <text x="180" y="172" font-size="8" fill="rgba(255,255,255,.3)" font-family="sans-serif" text-anchor="middle">Als Finanzbeamter arbeitest du in beiden Bereichen</text>
    </svg>
    <div style="padding:0 18px 18px">
      <div style="font-size:10px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.4);letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">🏛️ Recht Basics · Was ist das?</div>
      <div style="font-size:18px;font-weight:900;color:#fff;line-height:1.3;margin-bottom:6px">Privatrecht regelt das Miteinander von Menschen. Öffentliches Recht regelt den Staat.</div>
      <div style="font-size:12px;color:rgba(255,255,255,.55);font-weight:700;line-height:1.65">Im Finanzamt begegnest du beiden: Die <b style="color:#c8a0ff">AO ist öffentliches Recht</b> – das Verhältnis Staat/FA zu Bürger. Aber <b style="color:#7eb8ff">wer wirksam geschenkt, vererbt oder verkauft hat</b>, richtet sich nach dem BGB (Privatrecht).</div>
    </div>
  </div>

  <div style="background:rgba(255,255,255,.04);border-radius:14px;padding:14px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:900;color:#fff;margin-bottom:10px">Warum das BGB im Finanzamt wichtig ist:</div>
    ${[
      ['🎁','Schenkung','Hat jemand wirksam geschenkt? BGB bestimmt Wirksamkeit → dann Schenkungsteuer.'],
      ['⚰️','Erbschaft','Wer ist Erbe? BGB §§ 1922 ff. → dann ErbSt-Festsetzung durch FA.'],
      ['🏢','GmbH-Gründung','Gesellschaftsvertrag wirksam? BGB/GmbHG → dann KSt-Pflicht.'],
      ['📋','Mietvertrag','Vermieter vs. Mieter? Einkünfte § 21 EStG nur bei rechtswirksamem Mietverhältnis.'],
    ].map(([icon,title,desc])=>`
    <div style="display:flex;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.06)">
      <span style="font-size:18px;flex-shrink:0">${icon}</span>
      <div><div style="font-size:10px;font-weight:900;color:#c8a0ff">${title}</div><div style="font-size:10px;color:rgba(255,255,255,.45);font-weight:700;line-height:1.4">${desc}</div></div>
    </div>`).join('')}
  </div>

  <div style="display:flex;gap:8px">
    <button onclick="_introNext('recht',1)" style="flex:3;padding:13px;border-radius:12px;border:none;background:linear-gradient(135deg,#4a1a8f,#2a0a5e);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer">Warum brauche ich das? →</button>
    <button onclick="_introNext('recht',99)" style="flex:1;padding:13px;border-radius:12px;border:1.5px solid rgba(255,255,255,.1);background:transparent;color:rgba(255,255,255,.35);font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;cursor:pointer">Überspr.</button>
  </div>`;
}

function _renderIntro_recht_warum(a){
  a.classList.add('basics-dark-mode');
  a.innerHTML=`
  <div style="background:linear-gradient(135deg,#1a0a3e,#3a1080);border-radius:18px;padding:18px;margin-bottom:14px">
    <div style="font-size:10px;font-family:'Space Mono',monospace;color:#c8a0ff;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">🏛️ Warum brauche ich Privatrecht?</div>
    <div style="font-size:16px;font-weight:900;color:#fff;margin-bottom:12px">Im Finanzamt brauchst du Privatrecht um steuerliche Sachverhalte überhaupt beurteilen zu können.</div>

    <div style="background:rgba(255,255,255,.04);border-radius:12px;padding:12px;margin-bottom:10px">
      <div style="font-size:10px;font-weight:900;color:#ffd94a;margin-bottom:8px">📚 Konkrete Praxis-Situationen:</div>
      ${[
        {icon:'📱',sit:'Vater schenkt seiner 16-jährigen Tochter ein Handy für 1.200 €.',frage:'Unterliegt das der Schenkungsteuer?',antwort:'Nur wenn die Schenkung zivilrechtlich wirksam ist (§§ 516 ff. BGB). Bei Minderjährigen: lediglich vorteilhaft → § 107 BGB → wirksam ohne Eltern → Schenkungsteuer prüfen.'},
        {icon:'🤝',sit:'GmbH-Gesellschafter beschließen eine Gewinnausschüttung.',frage:'Wann unterliegt die Ausschüttung der KapESt?',antwort:'Nur wenn der Gesellschafterbeschluss wirksam ist (GmbHG, BGB). Formfehler bei der Beschlussfassung können steuerliche Wirkung verhindern.'},
        {icon:'🏠',sit:'Eheleute verkaufen ein Grundstück, das nur einem gehört.',frage:'Wem sind die Einkünfte zuzurechnen?',antwort:'§ 39 AO: Einkünfte werden dem wirtschaftlichen Eigentümer zugerechnet. Das richtet sich nach Zivilrecht (§§ 929 ff. BGB – wem gehört es wirklich?).'},
      ].map(s=>`
      <div style="background:rgba(255,255,255,.03);border-radius:8px;padding:10px;margin-bottom:6px">
        <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,.7);margin-bottom:5px"><span style="font-size:16px;margin-right:6px">${s.icon}</span>${s.sit}</div>
        <div style="font-size:10px;font-weight:900;color:#c8a0ff;margin-bottom:3px">❓ ${s.frage}</div>
        <div style="font-size:10px;color:rgba(255,255,255,.5);font-weight:700;line-height:1.5">→ ${s.antwort}</div>
      </div>`).join('')}
    </div>
  </div>

  <div style="background:rgba(255,217,74,.07);border:1px solid rgba(255,217,74,.2);border-radius:12px;padding:12px;margin-bottom:14px">
    <div style="font-size:11px;font-weight:900;color:#ffd94a;margin-bottom:5px">💡 Grundsatz</div>
    <div style="font-size:11px;color:rgba(255,255,255,.65);font-weight:700;line-height:1.7">Das Steuerrecht knüpft an <b>zivilrechtliche Vorgänge</b> an. Bevor du die Steuerpflicht prüfst, musst du wissen: <i>Ist das rechtlich überhaupt passiert?</i> War der Vertrag wirksam? War die Person geschäftsfähig? Privatrecht kommt zuerst.</div>
  </div>

  <div style="display:flex;gap:8px">
    <button onclick="_introNext('recht',0)" style="flex:1;padding:11px;border-radius:12px;border:1.5px solid rgba(255,255,255,.1);background:transparent;color:rgba(255,255,255,.4);font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;cursor:pointer">← Zurück</button>
    <button onclick="_introNext('recht',2)" style="flex:3;padding:11px;border-radius:12px;border:none;background:linear-gradient(135deg,#4a1a8f,#2a0a5e);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer">Geschäftsfähigkeit & BGB →</button>
  </div>`;
}
