
// ==================== DATA ====================

const D_EINKUNFT = [
  {icon:'👩‍💻',name:'Software-Entwicklerin',sub:'Angestellte im Tech-Unternehmen',ans:1,lvl:1,explain:'Ein Gehalt aus einem Arbeitsverhältnis ist <b>Einkunft aus nicht-selbständiger Arbeit</b> (§ 19 EStG). Der Arbeitgeber zieht die Lohnsteuer direkt vom Lohn ab.'},
  {icon:'₿',name:'Bitcoin-Gewinn',sub:'Kauf für 2.000 € → Verkauf für 5.000 € nach 6 Monaten',ans:6,lvl:2,explain:'Krypto-Gewinne innerhalb der <b>Haltefrist von 1 Jahr</b> sind <b>sonstige Einkünfte</b> (§ 22 Nr. 2, § 23 EStG). Nach 1 Jahr Haltedauer: steuerfrei!'},
  {icon:'🏠',name:'Vermieter',sub:'Wohnung vermietet für 900 € / Monat',ans:5,lvl:1,explain:'<b>Einkünfte aus Vermietung & Verpachtung</b> (§ 21 EStG): Mieteinnahmen minus Werbungskosten (Zinsen, Reparaturen, Abschreibung) = steuerpflichtiger Überschuss.'},
  {icon:'🎨',name:'Illustratorin',sub:'Freiberufliche Künstlerin, Auftragsarbeiten',ans:3,lvl:2,explain:'Freie Berufe (Künstler, Architekten, Ärzte) erzielen <b>Einkünfte aus selbständiger Arbeit</b> (§ 18 EStG) – kein Gewerbeschein nötig!'},
  {icon:'📈',name:'Aktien-Dividende',sub:'500 Aktien × 1,20 € Dividende',ans:4,lvl:2,explain:'Dividenden sind <b>Einkünfte aus Kapitalvermögen</b> (§ 20 EStG). Die Bank zieht automatisch 25 % Abgeltungssteuer + Soli ab.'},
  {icon:'🛠️',name:'Handwerksbetrieb',sub:'Selbstständiger Klempner mit eigenem Betrieb',ans:2,lvl:1,explain:'Gewerbliche Tätigkeit = <b>Einkünfte aus Gewerbebetrieb</b> (§ 15 EStG). Zusätzlich zur Einkommensteuer fällt Gewerbesteuer an!'},
  {icon:'🌾',name:'Landwirt',sub:'Bauernhof, verkauft Kartoffeln und Weizen',ans:0,lvl:1,explain:'<b>Einkünfte aus Land- und Forstwirtschaft</b> (§ 13 EStG) – die älteste Einkunftsart! Bauern haben besondere steuerliche Pauschalierungsregeln.'},
  {icon:'💰',name:'Zinsen aufs Sparbuch',sub:'10.000 € × 3 % Zinsen = 300 €',ans:4,lvl:2,explain:'Zinsen sind <b>Kapitaleinkünfte</b> (§ 20 EStG). Sparerpauschbetrag: 1.000 € (Einzelperson) – darunter steuerfrei!'},
  {icon:'🎰',name:'Lottogewinn',sub:'Jackpot! 500.000 € gewonnen',ans:-1,lvl:2,explain:'Überraschung! <b>Lottogewinne sind in Deutschland nicht einkommensteuerbar</b>, weil sie keine der 7 Einkunftsarten (§ 2 EStG) erfüllen – Glücksspielgewinne aus staatlich erlaubten Lotterien sind kein Einkommen im steuerrechtlichen Sinne. Achtung: Zinsen auf den Gewinn (z.B. Festgeldzinsen) sind danach wieder Kapitalerträge nach § 20 EStG.'},
  {icon:'👴',name:'Rentner',sub:'Gesetzliche Rente: 1.400 € / Monat',ans:6,lvl:2,explain:'Renten aus der gesetzlichen Rentenversicherung sind <b>sonstige Einkünfte</b> (§ 22 EStG). Je nach Rentenbeginn ist ein steigender Anteil steuerpflichtig (Kohortenprinzip).'},
  {icon:'🎮',name:'Twitch-Streamer',sub:'Verdient Geld mit Abonnements & Werbung',ans:2,lvl:2,explain:'Content-Creator betreiben i.d.R. ein <b>Gewerbe</b> (§ 15 EStG). Gewerbeanmeldung beim Gewerbeamt ist Pflicht!'},
  {icon:'🎓',name:'Stipendium',sub:'Begabtenförderung: 800 € / Monat',ans:-1,lvl:2,explain:'Die meisten <b>Stipendien sind steuerfrei</b> (§ 3 Nr. 44 EStG), solange sie der Bildungsförderung dienen und keine Gegenleistung erfordern.'},
  {icon:'🎥',name:'YouTube-Kanal',sub:'Regelmäßige Werbe- und Aboeinnahmen, kein Arbeitgeber',ans:2,lvl:2,explain:'Ein YouTube-Kanal mit nachhaltigen Einnahmen und Gewinnerzielungsabsicht ist ein <b>Gewerbebetrieb (§ 15 EStG)</b>. Gewerbeschein + GewSt-Pflicht ab 24.500 € Gewerbeertrag. Anders als ein Freiberufler fehlt es an einer freiberuflichen (geistigen) Tätigkeit im gesetzlichen Sinn.'},
  {icon:'🔬',name:'Patentlizenzeinnahmen',sub:'Erfinder lizenziert sein Patent – laufende Lizenzgebühren',ans:3,lvl:3,explain:'Lizenzeinnahmen aus selbst entwickeltem geistigen Eigentum sind <b>Einkünfte aus selbständiger Arbeit (§ 18 EStG)</b> – der Erfinder erbringt eine eigenschöpferische Leistung ohne kaufmännischen Betrieb. Kein Gewerbe, da keine gewerbliche Organisation erforderlich ist.'},
  {icon:'💼',name:'Abfindung bei Kündigung',sub:'Arbeitgeber zahlt 45.000 € Abfindung einmalig',ans:1,lvl:3,explain:'Abfindungen gehören zu den <b>Einkünften aus nichtselbstständiger Arbeit (§ 19 EStG)</b>. Als außerordentliche Einkünfte (§ 34 EStG) können sie nach der <b>Fünftelregelung</b> besteuert werden, die die Progressionswirkung der Einmalzahlung mildert.'},,
  {icon:'🏡',name:'Ferienwohnung',sub:'Eigengenutzt 6 Monate, vermietet 6 Monate',ans:5,lvl:2,explain:'<b>Einkünfte aus Vermietung & Verpachtung (§ 21 EStG)</b> – aber nur für den Vermietungsanteil. Anteilige Kosten (6/12) können als Werbungskosten abgezogen werden. Eigennutzung führt zu keiner Steuer.'},
  {icon:'⚖️',name:'Rechtsanwalt',sub:'Eigene Kanzlei, keine Angestellten',ans:3,lvl:1,explain:'Rechtsanwälte sind Katalogberuf in <b>§ 18 Abs. 1 Nr. 1 EStG</b> – Einkünfte aus <b>selbständiger Arbeit</b>. Kein Gewerbebetrieb, keine Gewerbesteuer.'},
  {icon:'🏦',name:'Festgeld-Zinsen',sub:'50.000 € Festgeld × 3,5 % = 1.750 €',ans:4,lvl:1,explain:'<b>§ 20 EStG – Kapitalvermögen.</b> Sparerpauschbetrag 1.000 € (Single) – die restlichen 750 € werden mit 25 % Abgeltungsteuer + Soli besteuert. Die Bank führt die Steuer automatisch ab.'},
  {icon:'🎤',name:'Sängerin',sub:'Konzertgagen und Plattenvertrag',ans:3,lvl:2,explain:'Künstler zählen zu den Katalogberufen des <b>§ 18 EStG</b> (selbständige Arbeit). Voraussetzung: eigenschöpferische Leistung. Eine reine "Coverband" ohne kreative Eigenleistung könnte gewerblich sein.'},
  {icon:'🏗️',name:'Bauunternehmer',sub:'GmbH & Co. KG, Baugewerbe',ans:2,lvl:1,explain:'Baugewerbe ist ein klassischer Gewerbebetrieb <b>(§ 15 EStG)</b>. Gewerbesteuer fällt an (Freibetrag 24.500 € bei Einzelkaufleuten/Personengesellschaften). Bei GmbH & Co. KG: gewerbliche Einkünfte der Gesellschaft, die auf Gesellschafter verteilt werden.'},
  {icon:'🌲',name:'Forstwirt',sub:'Einnahmen aus Holzverkauf',ans:0,lvl:1,explain:'<b>§ 13 EStG – Land- und Forstwirtschaft.</b> Holzeinnahmen aus eigenem Wald sind Einkünfte aus Land- und Forstwirtschaft. Besonderheit: Holzeinnahmen können nach der "Einschlagsmethode" oder Durchschnittssatzmethode ermittelt werden.'},
  {icon:'📖',name:'Buchautor',sub:'Royalties aus Buchverkäufen',ans:3,lvl:2,explain:'<b>§ 18 EStG – selbständige Arbeit.</b> Schriftsteller sind Katalogberufe ("Schriftsteller" ausdrücklich in § 18 Abs. 1 Nr. 1 EStG). Keine Gewerbesteuer. Einnahmen-Überschuss-Rechnung üblich.'},
  {icon:'💸',name:'Unterhaltsleistungen',sub:'Empfangene Unterhaltszahlungen vom Ex-Ehepartner (Realsplitting)',ans:6,lvl:3,explain:'Unterhaltsleistungen beim Realsplitting (§ 22 Nr. 1a EStG i.V.m. § 10 Abs. 1a EStG): Leistet der Zahler den Sonderausgabenabzug, muss der Empfänger die Zahlungen als <b>sonstige Einkünfte</b> versteuern. Ohne Realsplitting-Antrag: Unterhalt ist beim Zahler steuerlich nicht absetzbar und beim Empfänger nicht steuerbar.'},

];

const D_EINKATS = [
  {id:0,name:'Land- & Forstwirtschaft',sub:'§ 13 EStG',icon:'🌾'},
  {id:1,name:'Nicht-selbständige Arbeit',sub:'§ 19 EStG – Lohn/Gehalt',icon:'👔'},
  {id:2,name:'Gewerbebetrieb',sub:'§ 15 EStG',icon:'🏭'},
  {id:3,name:'Selbständige Arbeit',sub:'§ 18 EStG – Freiberufler',icon:'🖊️'},
  {id:4,name:'Kapitalvermögen',sub:'§ 20 EStG',icon:'📊'},
  {id:5,name:'Vermietung & Verpachtung',sub:'§ 21 EStG',icon:'🏠'},
  {id:6,name:'Sonstige Einkünfte',sub:'§ 22 EStG – Rente, Krypto',icon:'🔖'},
  {id:-1,name:'Steuerfrei!',sub:'§ 3 EStG & andere',icon:'🎉'},
];

const D_WERBUNG = [
  {icon:'🚗',name:'Fahrtkosten zur Arbeit',desc:'30 km einfache Strecke, täglich gependelt',ans:true,lvl:1,explain:'JA! <b>Pendlerpauschale (§ 9 Abs. 1 Nr. 4 EStG)</b> <span class="new26">ab 2026</span>: einheitlich <b>0,38 €/km ab dem 1. km</b> (StÄndG 2025 – bisherige Staffelung entfallen). Beispiel: 30 km × 220 Arbeitstage × 0,38 € = <b>2.508 € Werbungskosten</b>.'},
  {icon:'💻',name:'Neuer Gaming-PC',desc:'Hauptsächlich privat genutzt, gelegentlich Home-Office',ans:false,lvl:2,explain:'NEIN (in diesem Fall). Bei unter 10 % beruflicher Nutzung ist gar kein Abzug möglich. Zwischen 10–90 % wäre der berufliche Anteil absetzbar – bei einem Gaming-PC kaum glaubhaft nachzuweisen.'},
  {icon:'📚',name:'Fachbücher & Fachliteratur',desc:'Fachliteratur direkt für den Beruf gekauft',ans:true,lvl:1,explain:'JA! Fachbücher und Fachzeitschriften, die direkt für den Beruf benötigt werden, sind voll absetzbar.'},
  {icon:'👔',name:'Business-Anzug',desc:'Anzug für das Büro gekauft',ans:false,lvl:1,explain:'NEIN! Normale Kleidung ist nicht absetzbar – auch wenn sie "nur" für die Arbeit getragen wird. Typische Berufskleidung (Arztkittel, Schutzhelm, Uniform) dagegen schon.'},
  {icon:'🎓',name:'Weiterbildungskurs',desc:'Online-Kurs zur Verbesserung der Berufskenntnisse',ans:true,lvl:1,explain:'JA! Fort- und Weiterbildungskosten für den ausgeübten Beruf sind voll absetzbar – auch Sprachkurse, wenn der Beruf es erfordert.'},
  {icon:'🍽️',name:'Mittagessen in der Kantine',desc:'Täglich Mittagessen, 8 € pro Tag',ans:false,lvl:1,explain:'NEIN. Essen ist grundsätzlich Privatsache. Bei Dienstreisen gibt es Verpflegungspauschalen (ab 8 h Abwesenheit: 14 €/Tag, ab 24 h: 28 €/Tag). Das normale Mittagessen am Arbeitsort ist nicht absetzbar.'},
  {icon:'🏠',name:'Homeoffice-Pauschale',desc:'An 100 Tagen ausschließlich von zuhause gearbeitet',ans:true,lvl:2,explain:'JA! <b>6 € pro Homeoffice-Tag</b>, max. 1.260 € / Jahr (210 Tage). Kein separates Arbeitszimmer nötig (§ 4 Abs. 5 Nr. 6b EStG). Bei ausschließlichem Homeoffice-Arbeitsplatz: ganzes Arbeitszimmer absetzbar.'},
  {icon:'✈️',name:'Urlaub in Spanien',desc:'Schöner Urlaub – man habe dabei "etwas gelernt"',ans:false,lvl:1,explain:'NEIN! Urlaub ist private Ausgabe. Auch wenn man dabei etwas lernte – kein Abzug. Ein echter Berufskongress im Ausland mit belegtem beruflichem Bezug wäre anders.'},
  {icon:'📱',name:'Smartphone (beruflich)',desc:'Privat gekauftes Handy, ca. 60 % beruflich genutzt',ans:true,lvl:2,explain:'JA! Bei teilweiser beruflicher Nutzung ist das Gerät anteilig absetzbar. Bei 60 % beruflicher Nutzung = 60 % der Kosten als Werbungskosten. Eine plausible Nutzungsschätzung ist wichtig.'},
  {icon:'🎸',name:'Gitarren-Unterricht',desc:'Hobby-Musiker nimmt Unterricht für die Freizeit',ans:false,lvl:1,explain:'NEIN. Hobby-Ausgaben sind nicht absetzbar. Anders bei einem Berufsmusiker, dem das Instrument beruflich dient.'},
  {icon:'🔧',name:'Werkzeug für den Job',desc:'Handwerker kauft Bohrmaschine für seine Arbeit',ans:true,lvl:2,explain:'JA! Arbeitsmittel, die für die Berufsausübung nötig sind, können abgesetzt werden. <span class="new26">Stand 2026</span> Bis 952 € inkl. MwSt. sofort absetzbar (GWG). Darüber: über mehrere Jahre abschreiben (AfA).'},
  {icon:'🐕',name:'Hund als Wachhund',desc:'Unternehmer – der Hund bewacht das Betriebsgelände',ans:true,lvl:2,explain:'JA – wenn nachweislich beruflich eingesetzt! Wenn ein Tier für berufliche Zwecke gehalten wird (z.B. echter Wachhund fürs Betriebsgelände), sind die Kosten absetzbar. Die berufliche Nutzung muss aber glaubhaft sein.'},
  {icon:'🏡',name:'Doppelte Haushaltsführung',desc:'Hauptwohnsitz Hamburg, Zweitwohnung am Arbeitsort Frankfurt',ans:true,lvl:3,explain:'JA! <b>Doppelte Haushaltsführung (§ 9 Abs. 1 Nr. 5 EStG)</b>: Kosten für die Zweitwohnung am Beschäftigungsort sind Werbungskosten – Unterkunftskosten max. 1.000 € / Monat. Voraussetzung: eigenständiger, finanziell mitgetragener Hausstand am Hauptwohnort.'},
  {icon:'📐',name:'Häusliches Arbeitszimmer',desc:'Ausschließlich beruflich genutzter Raum, aber kein Tätigkeitsmittelpunkt',ans:true,lvl:3,explain:'JA! Steht kein anderer Arbeitsplatz zur Verfügung, können die tatsächlichen Kosten des Arbeitszimmers vollständig abgesetzt werden (§ 4 Abs. 5 Nr. 6b EStG). Alternativ: Homeoffice-Pauschale 6 €/Tag, max. 1.260 €/Jahr – ohne Nachweis eines separaten Raums.'},
];

const D_UST = [
  {icon:'🥦',name:'Frisches Gemüse',desc:'Wocheneinkauf im Supermarkt',ans:7,lvl:1,explain:'<b>7 %</b> – Lebensmittel gehören zu den klassischen Gütern mit ermäßigtem Steuersatz (Anlage 2 UStG). Grundnahrungsmittel sollen für alle erschwinglich sein.'},
  {icon:'📺',name:'Neuer Fernseher',desc:'Im Elektronikmarkt gekauft',ans:19,lvl:1,explain:'<b>19 %</b> – Elektronikgeräte sind normale Konsumgüter ohne Sonderregelung → voller Regelsteuersatz.'},
  {icon:'🍝',name:'Pasta im Restaurant',desc:'Abendessen vor Ort, Tisch und Service inklusive',ans:7,lvl:2,explain:'<b>7 %</b> <span class="new26">ab 2026</span> – Seit dem <b>Steueränderungsgesetz 2025</b> gilt ab 01.01.2026 dauerhaft 7 % auf Speisen in der Gastronomie (vor Ort & Außer-Haus). Getränke bleiben bei 19 %. Ziel: Entlastung und Stärkung der Gastronomiebranche.'},
  {icon:'🍺',name:'Bier im Restaurant',desc:'Zum Essen bestellt, vor Ort getrunken',ans:19,lvl:2,explain:'<b>19 %</b> – Alkoholische Getränke wurden bewusst nicht in die Steuersenkung einbezogen. Nur Speisen profitieren vom ermäßigten Satz. Ausnahme: Milchmischgetränke mit ≥ 75 % Milchanteil → 7 %.'},
  {icon:'🏨',name:'Hotelübernachtung',desc:'Geschäftsreise, 1 Nacht',ans:7,lvl:2,explain:'<b>7 %</b> – Übernachtungen unterliegen dem ermäßigten Steuersatz (§ 12 Abs. 2 Nr. 11 UStG). Das Frühstück als Speise gilt ebenfalls mit 7 %. Andere Extras (Parkplatz, Minibar) weiterhin 19 %.'},
  {icon:'📖',name:'Roman kaufen',desc:'Buchhandlung, neues Taschenbuch',ans:7,lvl:1,explain:'<b>7 %</b> – Bücher, E-Books, Zeitungen und Zeitschriften haben den ermäßigten Steuersatz. Kultur und Bildung sollen steuerlich begünstigt sein.'},
  {icon:'🚌',name:'Busfahrkarte (ÖPNV)',desc:'Monatskarte für den Nahverkehr',ans:7,lvl:1,explain:'<b>7 %</b> – Der öffentliche Nahverkehr (Fahrscheine bis 50 km Strecke) hat den ermäßigten Steuersatz, um umweltfreundliche Mobilität zu fördern.'},
  {icon:'🍕',name:'Pizza zum Mitnehmen',desc:'Take-away vom Pizzastand, keine Sitzgelegenheit',ans:7,lvl:2,explain:'<b>7 %</b> – Speisen zum Mitnehmen hatten schon vor der Reform den ermäßigten Satz. Seit der dauerhaften 7 %-Regelung für Gastronomie gibt es bei Speisen keinen Unterschied mehr zwischen Take-away und Restaurant.'},
  {icon:'👩‍⚕️',name:'Arztbesuch',desc:'Allgemeinarzt, gesetzlich versichert',ans:0,lvl:2,explain:'<b>Steuerfrei (§ 4 Nr. 14 UStG)</b> – Ärztliche Heilbehandlungen sind von der Umsatzsteuer befreit (unechte Steuerbefreiung – kein Vorsteuerabzug). Gilt für Ärzte, Zahnärzte, Heilpraktiker u.a.'},
  {icon:'💈',name:'Friseur',desc:'Haarschnitt beim Friseur',ans:19,lvl:1,explain:'<b>19 %</b> – Friseur-Dienstleistungen fallen unter den Regelsteuersatz. Keine Ausnahmeregelung für Körperpflege-Dienstleistungen.'},
  {icon:'🏫',name:'Staatliche Schule',desc:'Unterricht an einer staatlichen Schule',ans:0,lvl:2,explain:'<b>Steuerfrei (§ 4 Nr. 21 UStG)</b> – Leistungen anerkannter Bildungseinrichtungen sind steuerbefreit (unechte Befreiung ohne Vorsteuerabzug). Bildung soll ohne versteckte Steuer zugänglich sein.'},
  {icon:'☕',name:'Cappuccino im Café',desc:'Vor Ort getrunken, am Tisch serviert',ans:19,lvl:3,explain:'<b>19 %</b> – Getränke bei Verpflegungsdienstleistungen (Vor-Ort-Konsum) bleiben generell bei 19 %. ⚠️ Achtung: Die 7%-Ausnahme für Milchmischgetränke mit ≥ 75 % Milchanteil (Anlage 2 Nr. 35 UStG) gilt nur beim <em>Take-away / Lieferung</em>, nicht beim Restaurantbesuch – dort gilt § 12 Abs. 2 Nr. 15 UStG, der Speisen begünstigt, aber Getränke explizit ausschließt.'},
  {icon:'⛽',name:'Benzin an der Tankstelle',desc:'30 Liter Super-Benzin',ans:19,lvl:1,explain:'<b>19 %</b> – Kraftstoffe werden mit dem Regelsteuersatz belastet. Zusätzlich kommt noch die Energiesteuer (früher Mineralölsteuer) dazu – das macht Benzin besonders teuer!'},
  {icon:'🎭',name:'Theaterkarte',desc:'Eintrittskarte für das Staatstheater',ans:7,lvl:2,explain:'<b>7 %</b> – Eintrittskarten für Theater, Konzerte, Opern, Zirkus und Kinos haben den ermäßigten Steuersatz (§ 12 Abs. 2 Nr. 7a UStG). Kultur wird steuerlich begünstigt.'},
  {icon:'🏦',name:'Bankgebühren',desc:'Kontoführungsgebühr der Hausbank',ans:0,lvl:2,explain:'<b>Steuerfrei (§ 4 Nr. 8 UStG)</b> – Bankleistungen (Kreditgewährung, Wertpapierhandel, Kontoverwaltung) sind steuerbefreit. Unechte Befreiung: kein Vorsteuerabzug für die Bank.'},
  {icon:'💊',name:'Rezeptpflichtige Medikamente',desc:'Apotheke verkauft verschreibungspflichtiges Medikament',ans:7,lvl:2,explain:'<b>7 %</b> – Arzneimittel i.S.d. Arzneimittelgesetzes unterliegen dem ermäßigten Steuersatz (§ 12 Abs. 2 Nr. 1 UStG i.V.m. Anlage 2). Frei verkäufliche Kosmetik oder Nahrungsergänzungsmittel hingegen: 19 %.'},
  {icon:'🌍',name:'Warenexport nach Japan',desc:'Deutsches Unternehmen liefert Maschinen nach Osaka (Ausfuhr ins Drittland)',ans:0,lvl:3,explain:'<b>Steuerfrei nach § 4 Nr. 1a UStG</b> – Ausfuhrlieferungen in Drittländer (außerhalb EU) sind steuerfrei. Wichtig: Es handelt sich um eine <b>echte Steuerbefreiung</b> – der Vorsteuerabzug bleibt erhalten! Ausfuhrnachweis durch Ausfuhrbelege/Zolldokumente erforderlich.'},
  {icon:'🏗️',name:'Subunternehmer erbringt Bauleistung',desc:'Dachdecker B saniert das Dach von Bauunternehmer A (A erbringt ebenfalls Bauleistungen)',ans:19,lvl:3,explain:'<b>Reverse Charge (§ 13b UStG)!</b> Bei Bauleistungen an einen Unternehmer, der selbst nachhaltig Bauleistungen erbringt, schuldet der <b>Leistungsempfänger (A)</b> die Umsatzsteuer. B stellt eine Nettorechnung aus. A schuldet 19 % USt, hat aber gleichzeitig den Vorsteuerabzug. Effekt: keine Liquiditätsvorfinanzierung durch B.'},
  {q:'Unternehmerin Mia hat im Vorjahr einen Gesamtumsatz von 21.000 € erzielt. Kann sie die Kleinunternehmerregelung nutzen?',opts:['Nein – Umsatz über 20.000 € schließt sie aus','Ja – solange der Vorjahresumsatz unter 25.000 € und laufende Jahr unter 100.000 € bleibt (§ 19 UStG ab 2025)','Nein – nur für Gewerbe, nicht für Freiberufler','Ja – nur mit ausdrücklicher FA-Zustimmung'],ans:1,lvl:1,explain:'<b>§ 19 UStG – Kleinunternehmerregelung ab 2025:</b> Neue Grenzen: Vorjahresumsatz max. <b>25.000 €</b> (bis 2024: 22.000 €), im laufenden Jahr max. <b>100.000 €</b> (bis 2024: 50.000 €). Mias 21.000 € liegen darunter → Kleinunternehmer-Status möglich. Folge: keine USt auf Ausgangsleistungen, aber auch <b>kein Vorsteuerabzug</b>.'},
  {q:'Wo liegt der Ort einer Beratungsleistung (sonstige Leistung) an einen anderen Unternehmer (B2B) nach § 3a UStG?',opts:['Am Sitz des leistenden Unternehmers','Am Sitz des Leistungsempfängers (§ 3a Abs. 2 UStG)','Am Ort der Leistungserbringung','Am Ort der Rechnungsausstellung'],ans:1,lvl:2,explain:'<b>§ 3a Abs. 2 UStG – B2B-Grundregel:</b> Sonstige Leistungen an andere Unternehmer sind am <b>Sitz des Leistungsempfängers</b> steuerbar. Deutsche Beraterin berät US-Firma: Leistungsort USA → in Deutschland nicht steuerbar! Bei B2C gilt der Umkehrschluss: Leistungsort = Sitz des leistenden Unternehmers (§ 3a Abs. 1 UStG).'},
  {q:'Was ist eine innergemeinschaftliche Lieferung (§ 6a UStG) und wie wird sie besteuert?',opts:['Lieferung innerhalb Deutschlands mit 7 %','Steuerfreie Lieferung an einen Unternehmer in einem anderen EU-Staat – Besteuerung beim Käufer im Bestimmungsland','Lieferung ins Nicht-EU-Ausland (Ausfuhr)','Lieferung mit 0 % nur bei Lebensmitteln'],ans:1,lvl:2,explain:'<b>§§ 4 Nr. 1a, 6a UStG:</b> Innergemeinschaftliche Lieferungen sind <b>steuerfrei</b> im Abgangsland. Stattdessen unterliegt der Käufer im Bestimmungsland dem <b>innergemeinschaftlichen Erwerb</b> (§ 1a UStG). Ziel: Besteuerung am Verbrauchsort. Voraussetzung: Käufer ist Unternehmer + USt-ID + tatsächliche Warenbewegung.'},
  {q:'Was bedeutet Vorsteuerüberhang und was folgt daraus?',opts:['Ausgaben-USt > Einnahmen-USt → Nachzahlung','Abziehbare Vorsteuer > geschuldete USt → Erstattung durch das FA','Vorsteuer kann nicht genutzt werden','Tritt nur bei Kleinunternehmern auf'],ans:1,lvl:2,explain:'<b>Vorsteuerüberhang:</b> Übersteigt die abzugsfähige Vorsteuer (§ 15 UStG) die geschuldete Umsatzsteuer, ergibt sich ein <b>Guthaben</b>, das das Finanzamt erstattet. Typisch bei Gründern (hohe Investitionen, noch wenig Umsatz), Exporteuren (steuerfreie Ausgangsumsätze) und Unternehmen in Aufbauphasen.'},
  {q:'Welchen USt-Satz haben Taxifahrten und Hotelübernachtungen in Deutschland?',opts:['Beide 19 %','Taxi 7 %, Hotel 7 % (§ 12 Abs. 2 Nr. 10 und 11 UStG)','Taxi 19 %, Hotel 7 %','Taxi 7 %, Hotel 19 %'],ans:1,lvl:1,explain:'<b>§ 12 Abs. 2 Nr. 10 UStG:</b> Personenbeförderung im Inland mit Taxen (bis 50 km) → <b>7 %</b>. <b>§ 12 Abs. 2 Nr. 11 UStG:</b> Übernachtungsleistungen → <b>7 %</b>. Achtung: Hotelfrühstück (Restaurationsleistung) gesondert → 19 %. Bahn: immer 7 % seit 2020.'},
  {q:'Was ist der Unterschied zwischen echter und unechter Steuerbefreiung bei der USt?',opts:['Echter: mit Vorsteuerabzug | Unechter: ohne Vorsteuerabzug (§ 15 Abs. 2 UStG)','Echter: höherer Satz | Unechter: ermäßigt','Echter: nur für KMU | Unechter: für Konzerne','Kein Unterschied'],ans:0,lvl:2,explain:'<b>Echte Befreiungen:</b> Umsatz steuerfrei + Vorsteuerabzug bleibt erhalten (z. B. Ausfuhrlieferungen, ig. Lieferungen). <b>Unechte Befreiungen:</b> Umsatz steuerfrei, aber <b>kein Vorsteuerabzug</b> (§ 15 Abs. 2 UStG) – z.B. Ärzte (§ 4 Nr. 14), Versicherungen, Grundstücksverkäufe. Unechte Befreiungen können wirtschaftlich nachteilig sein (Vorsteuer wird zum Kostenfaktor).'},
  {q:'Wann entsteht der Anspruch auf Vorsteuerabzug bei der Soll-Besteuerung?',opts:['Erst nach der Zahlung der Eingangsrechnung','Mit Leistungserbringung und Vorliegen einer ordnungsgemäßen Rechnung (§ 15 Abs. 1 UStG)','Am Jahresende','Erst nach Abgabe der USt-Voranmeldung'],ans:1,lvl:2,explain:'<b>§ 15 Abs. 1 UStG (Soll-Besteuerung):</b> Vorsteuerabzug entsteht mit <b>Ausführung der Leistung + Vorlage einer ordnungsgemäßen Rechnung</b> – unabhängig von der Zahlung. Rechnung im Oktober erhalten, zahlen erst im Januar → Vorsteuer trotzdem im Oktober abziehbar. Ausnahme: Ist-Besteuerung (§ 20 UStG) → erst mit Zahlung.'},
  {q:'Was ist ein innergemeinschaftliches Dreiecksgeschäft (§ 25b UStG)?',opts:['Drei Unternehmer aus drei EU-Ländern, eine Warenbewegung – mit Vereinfachungsregelung','Drei Rechnungen für eine Lieferung','Geschäft mit drei Zahlungsraten','Lieferung in drei EU-Länder gleichzeitig'],ans:0,lvl:3,explain:'<b>§ 25b UStG – Dreiecksgeschäft:</b> A (Land 1) verkauft an B (Land 2) verkauft an C (Land 3), Ware geht direkt A→C. Die Vereinfachungsregelung befreit B von der Registrierungspflicht in Land 3: B stellt C eine Rechnung mit Hinweis auf § 25b aus, C schuldet die Erwerbsteuer. Sehr prüfungsrelevant im Außenhandel.'},
  {q:'Eine Unternehmerin ist nur zu 60 % vorsteuerabzugsberechtigt (40 % steuerfreie Umsätze). Sie kauft Geräte für 30.000 € netto + 5.700 € USt. Wie viel Vorsteuer darf sie abziehen?',opts:['5.700 € (voll)','3.420 € (60 % von 5.700 €)','2.280 € (40 % von 5.700 €)','0 € – kein Abzug möglich'],ans:1,lvl:3,explain:'<b>§ 15 Abs. 4 UStG – Vorsteueraufteilung:</b> Bei gemischter Nutzung (steuerbar + steuerfrei) ist die Vorsteuer im Umsatzverhältnis aufzuteilen. 60 % steuerbare Umsätze → 60 % × 5.700 € = <b>3.420 € abziehbar</b>. 40 % × 5.700 € = 2.280 € nicht abziehbar (Kostenfaktor für das Unternehmen).'},
];


const D_BILANZ_ZU = [
  {icon:'🏢',name:'Firmengebäude',desc:'Eigenes Bürogebäude des Unternehmens',ans:'av',ansLabel:'Anlagevermögen',sub:'Sachanlagen – langfristig genutzt',lvl:1,explain:'<b>Anlagevermögen / Sachanlagen</b> – Grundstücke und Gebäude sind dauerhaft im Betrieb und werden über ihre Nutzungsdauer abgeschrieben (AfA). Gebäude: 33–50 Jahre.'},
  {icon:'💵',name:'Kassenbestand',desc:'Bargeld in der Firmenkasse',ans:'uv',ansLabel:'Umlaufvermögen',sub:'Zahlungsmittel',lvl:1,explain:'<b>Umlaufvermögen / Zahlungsmittel</b> – Kassenbestand gehört zu den liquiden Mitteln. Er befindet sich im ständigen Umlauf und verändert sich täglich.'},
  {icon:'📜',name:'Patent',desc:'Technisches Patent auf eine Erfindung',ans:'av',ansLabel:'Anlagevermögen',sub:'Immaterielle Vermögensgegenstände',lvl:2,explain:'<b>Anlagevermögen / Immaterielle Vermögensgegenstände</b> – Patente, Lizenzen und Markenrechte sind nicht körperlich, aber langfristig im Betrieb nutzbar.'},
  {icon:'📦',name:'Warenvorrat',desc:'Lagernde Waren, die zum Verkauf bestimmt sind',ans:'uv',ansLabel:'Umlaufvermögen',sub:'Vorräte',lvl:1,explain:'<b>Umlaufvermögen / Vorräte</b> – Waren sind zum Verkauf bestimmt und befinden sich im Umlauf. Sie verlassen den Betrieb durch Verkauf.'},
  {icon:'🚙',name:'Firmenwagen',desc:'PKW für den Außendienst',ans:'av',ansLabel:'Anlagevermögen',sub:'Sachanlagen – Fahrzeuge',lvl:1,explain:'<b>Anlagevermögen / Sachanlagen</b> – Betrieblich genutzte Fahrzeuge sind dauerhaft im Unternehmen und werden über die Nutzungsdauer (i.d.R. 6 Jahre) abgeschrieben.'},
  {icon:'📄',name:'Forderungen aus L+L',desc:'Offene Rechnungen an Kunden',ans:'uv',ansLabel:'Umlaufvermögen',sub:'Forderungen',lvl:1,explain:'<b>Umlaufvermögen / Forderungen</b> – Forderungen aus Lieferungen und Leistungen entstehen beim Verkauf auf Rechnung. Sie werden (kurzfristig) zu Geld, sobald der Kunde zahlt.'},
  {icon:'🏦',name:'Beteiligung an GmbH',desc:'25 % Anteile an einer Partnergesellschaft (langfristig)',ans:'av',ansLabel:'Anlagevermögen',sub:'Finanzanlagen',lvl:2,explain:'<b>Anlagevermögen / Finanzanlagen</b> – Langfristig gehaltene Beteiligungen an anderen Unternehmen gehören ins Anlagevermögen, weil sie dauerhaft dem Betrieb dienen sollen.'},
  {icon:'🔩',name:'Rohstoffe',desc:'Für die Produktion eingekaufte Metalle',ans:'uv',ansLabel:'Umlaufvermögen',sub:'Vorräte – Roh- & Hilfsstoffe',lvl:2,explain:'<b>Umlaufvermögen / Vorräte</b> – Rohstoffe werden in der Produktion verbraucht (kurzfristig). Sie sind nicht dauerhaft im Betrieb, sondern werden verarbeitet und verlassen ihn als Produkt.'},
  {icon:'💡',name:'Geschäftswert (Goodwill)',desc:'Beim Unternehmenskauf bezahlter Mehrwert',ans:'av',ansLabel:'Anlagevermögen',sub:'Immaterielle Vermögensgegenstände',lvl:3,explain:'<b>Anlagevermögen / Immateriell</b> – Der Geschäftswert (Goodwill) entsteht beim Kauf eines Unternehmens als Differenz zwischen Kaufpreis und Substanzwert. Er wird über 10–15 Jahre abgeschrieben.'},
  {icon:'🏗️',name:'Anzahlungen auf Maschinen',desc:'Vorauszahlung für noch nicht gelieferte Anlage',ans:'av',ansLabel:'Anlagevermögen',sub:'Geleistete Anzahlungen',lvl:3,explain:'<b>Anlagevermögen / Geleistete Anzahlungen</b> – Anzahlungen für Anlagen gehören schon vor Lieferung zum Anlagevermögen, weil die zukünftige Anlage langfristig dem Betrieb dienen wird.'},
];

const D_BUCHUNG = [
  {
    icon:'🖥️',name:'Kauf von Büroausstattung',desc:'Das Unternehmen kauft Schreibtische und Stühle für 2.400 € und zahlt bar.',
    options:[
      {soll:'Betriebs- & Geschäftsausstattung',haben:'Kasse',correct:true},
      {soll:'Kasse',haben:'Betriebs- & Geschäftsausstattung',correct:false},
      {soll:'Betriebs- & Geschäftsausstattung',haben:'Bank',correct:false},
    ],
    explain:'Kauf von Büroausstattung gegen Barzahlung: <b>Soll: Betriebs- & Geschäftsausstattung</b> (Anlage ↑) / <b>Haben: Kasse</b> (liquide Mittel ↓). Aktivtausch.'
  },
  {
    icon:'💳',name:'Kunde zahlt offene Rechnung',desc:'Kunde überweist eine offene Rechnung von 1.200 € auf das Firmenkonto.',
    options:[
      {soll:'Bank',haben:'Forderungen aus L+L',correct:true},
      {soll:'Forderungen aus L+L',haben:'Bank',correct:false},
      {soll:'Bank',haben:'Umsatzerlöse',correct:false},
    ],
    explain:'Zahlungseingang: <b>Soll: Bank</b> (Geld ↑) / <b>Haben: Forderungen aus L+L</b> (Forderung erlischt ↓). Aktivtausch.'
  },
  {
    icon:'🛒',name:'Wareneinkauf auf Ziel',desc:'Lieferant schickt Waren im Wert von 3.000 €. Rechnung wird später bezahlt.',
    options:[
      {soll:'Wareneingang',haben:'Verbindlichkeiten aus L+L',correct:true},
      {soll:'Verbindlichkeiten aus L+L',haben:'Wareneingang',correct:false},
      {soll:'Wareneingang',haben:'Kasse',correct:false},
    ],
    explain:'"Auf Ziel" = auf Rechnung. <b>Soll: Wareneingang</b> (Aktivum ↑) / <b>Haben: Verbindlichkeiten aus L+L</b> (Passivum ↑ – wir schulden Geld). Bilanzverlängerung!'
  },
  {
    icon:'👩‍💼',name:'Gehaltszahlung per Überweisung',desc:'Unternehmen überweist Gehälter in Höhe von 4.500 €.',
    options:[
      {soll:'Löhne & Gehälter',haben:'Bank',correct:true},
      {soll:'Bank',haben:'Löhne & Gehälter',correct:false},
      {soll:'Löhne & Gehälter',haben:'Kasse',correct:false},
    ],
    explain:'Gehaltszahlung ist Aufwand: <b>Soll: Löhne & Gehälter</b> (Aufwand ↑) / <b>Haben: Bank</b> (Aktivum ↓ – Geld verlässt das Konto).'
  },
  {
    icon:'🏦',name:'Aufnahme Bankdarlehen',desc:'Bank gewährt Darlehen über 20.000 €, geht auf Konto ein.',
    options:[
      {soll:'Bank',haben:'Darlehensverbindlichkeiten',correct:true},
      {soll:'Darlehensverbindlichkeiten',haben:'Bank',correct:false},
      {soll:'Bank',haben:'Eigenkapital',correct:false},
    ],
    explain:'Darlehensaufnahme: <b>Soll: Bank</b> (Geld ↑) / <b>Haben: Darlehensverbindlichkeiten</b> (Schulden entstehen ↑). Bilanzverlängerung auf beiden Seiten!'
  },
  {
    icon:'📬',name:'Lieferantenrechnung bezahlt',desc:'Unternehmen überweist offene Lieferantenrechnung über 800 €.',
    options:[
      {soll:'Verbindlichkeiten aus L+L',haben:'Bank',correct:true},
      {soll:'Bank',haben:'Verbindlichkeiten aus L+L',correct:false},
      {soll:'Verbindlichkeiten aus L+L',haben:'Kasse',correct:false},
    ],
    explain:'Schuld tilgen: <b>Soll: Verbindlichkeiten aus L+L</b> (Schuld ↓) / <b>Haben: Bank</b> (Geld ↓). Bilanzverkürzung!'
  },
  {
    icon:'👤',name:'Privatentnahme des Inhabers',desc:'Inhaber entnimmt 300 € bar aus der Firmenkasse.',
    options:[
      {soll:'Privatentnahme / Eigenkapital',haben:'Kasse',correct:true},
      {soll:'Kasse',haben:'Privatentnahme',correct:false},
      {soll:'Gehalt Inhaber',haben:'Kasse',correct:false},
    ],
    explain:'Privatentnahme: <b>Soll: Privatentnahme</b> (Eigenkapital ↓) / <b>Haben: Kasse</b> (Bargeld ↓). Ein Einzelunternehmer hat kein Gehalt – er entnimmt direkt.'
  },
  {
    icon:'⚙️',name:'Maschinenkauf per Überweisung',desc:'Unternehmen kauft CNC-Maschine für 8.000 € per Banküberweisung.',
    options:[
      {soll:'Maschinen',haben:'Bank',correct:true},
      {soll:'Bank',haben:'Maschinen',correct:false},
      {soll:'Maschinen',haben:'Verbindlichkeiten aus L+L',correct:false},
    ],
    explain:'Maschinenkauf: <b>Soll: Maschinen</b> (Anlagevermögen ↑) / <b>Haben: Bank</b> (liquide Mittel ↓). Aktivtausch – Bilanzsumme bleibt gleich.'
  },
  {
    icon:'🏢',name:'Mietzahlung per Banküberweisung',desc:'Das Unternehmen zahlt die monatliche Büromiete von 800 € per Überweisung.',
    options:[
      {soll:'Mietaufwand',haben:'Bank',correct:true},
      {soll:'Bank',haben:'Mietaufwand',correct:false},
      {soll:'Mietaufwand',haben:'Kasse',correct:false},
    ],
    explain:'Mietzahlung: <b>Soll: Mietaufwand</b> (Aufwand ↑) / <b>Haben: Bank</b> (Geld ↓). Aufwandsbuchung – mindert den Gewinn.'
  },
  {
    icon:'💼',name:'Verkauf von Waren auf Ziel',desc:'Das Unternehmen verkauft Waren für 5.000 € auf Rechnung (Zahlung folgt).',
    options:[
      {soll:'Forderungen aus L+L',haben:'Umsatzerlöse',correct:true},
      {soll:'Umsatzerlöse',haben:'Forderungen aus L+L',correct:false},
      {soll:'Bank',haben:'Umsatzerlöse',correct:false},
    ],
    explain:'Verkauf auf Ziel: <b>Soll: Forderungen aus L+L</b> (Forderung entsteht ↑) / <b>Haben: Umsatzerlöse</b> (Ertrag ↑). Aktiv-Passiv-Mehrung – Bilanzsumme steigt.'
  },
  {
    icon:'👩‍💼',name:'Gehaltszahlung an Mitarbeiter',desc:'Das Unternehmen überweist das Gehalt von 3.200 € brutto an einen Mitarbeiter.',
    options:[
      {soll:'Löhne und Gehälter',haben:'Bank',correct:true},
      {soll:'Bank',haben:'Löhne und Gehälter',correct:false},
      {soll:'Personalaufwand',haben:'Kasse',correct:false},
    ],
    explain:'Gehaltszahlung: <b>Soll: Löhne und Gehälter</b> (Aufwand ↑) / <b>Haben: Bank</b> (Geld ↓). Aufwandsbuchung – mindert den Jahresgewinn.'
  },
  {
    icon:'🏦',name:'Aufnahme eines Bankdarlehens',desc:'Das Unternehmen nimmt ein Darlehen über 20.000 € auf, das auf dem Konto gutgeschrieben wird.',
    options:[
      {soll:'Bank',haben:'Darlehensverbindlichkeiten',correct:true},
      {soll:'Darlehensverbindlichkeiten',haben:'Bank',correct:false},
      {soll:'Bank',haben:'Eigenkapital',correct:false},
    ],
    explain:'Darlehensaufnahme: <b>Soll: Bank</b> (Geld ↑) / <b>Haben: Darlehensverbindlichkeiten</b> (Schulden ↑). Aktiv-Passiv-Mehrung – Bilanzsumme steigt auf beiden Seiten.'
  },
  {
    icon:'📉',name:'Abschreibung auf Maschine',desc:'Eine Maschine (AK 12.000 €, ND 6 Jahre) wird linear abgeschrieben. Jahresbuchung.',
    options:[
      {soll:'Abschreibungen auf Sachanlagen',haben:'Maschinen',correct:true},
      {soll:'Maschinen',haben:'Abschreibungen auf Sachanlagen',correct:false},
      {soll:'Aufwand Abschreibung',haben:'Bank',correct:false},
    ],
    explain:'Lineare AfA: 12.000 € ÷ 6 Jahre = 2.000 €/Jahr. <b>Soll: Abschreibungen auf Sachanlagen</b> (Aufwand ↑) / <b>Haben: Maschinen</b> (Buchwert ↓). Aufwandsbuchung ohne Geldabfluss.'
  },
  {
    icon:'🔄',name:'Tilgung einer Verbindlichkeit',desc:'Das Unternehmen überweist 1.500 € an einen Lieferanten zur Tilgung einer offenen Rechnung.',
    options:[
      {soll:'Verbindlichkeiten aus L+L',haben:'Bank',correct:true},
      {soll:'Bank',haben:'Verbindlichkeiten aus L+L',correct:false},
      {soll:'Aufwand',haben:'Bank',correct:false},
    ],
    explain:'Tilgung: <b>Soll: Verbindlichkeiten aus L+L</b> (Schuld ↓) / <b>Haben: Bank</b> (Geld ↓). Aktiv-Passiv-Minderung – Bilanzsumme sinkt.'
  },
  {
    icon:'💡',name:'Umsatzsteuer auf Ausgangsrechnung',desc:'Das Unternehmen stellt eine Rechnung: 2.000 € netto + 380 € USt (19 %).',
    options:[
      {soll:'Forderungen aus L+L 2.380 €',haben:'Umsatzerlöse 2.000 € / Umsatzsteuer 380 €',correct:true},
      {soll:'Umsatzerlöse 2.380 €',haben:'Forderungen aus L+L 2.380 €',correct:false},
      {soll:'Bank 2.380 €',haben:'Umsatzerlöse 2.380 €',correct:false},
    ],
    explain:'Ausgangsrechnung mit USt: <b>Soll: Forderungen aus L+L 2.380 €</b> / <b>Haben: Umsatzerlöse 2.000 €</b> (Ertrag) + <b>Umsatzsteuer 380 €</b> (Verbindlichkeit gegenüber FA). Die Umsatzsteuer ist ein durchlaufender Posten – kein Ertrag.'
  },
  {
    icon:'📦',name:'Vorsteuer aus Eingangsrechnung',desc:'Lieferant stellt Rechnung: 500 € netto + 95 € Vorsteuer (19 %). Zahlung auf Ziel.',
    options:[
      {soll:'Wareneingang 500 € / Vorsteuer 95 €',haben:'Verbindlichkeiten aus L+L 595 €',correct:true},
      {soll:'Wareneingang 595 €',haben:'Verbindlichkeiten aus L+L 595 €',correct:false},
      {soll:'Vorsteuer 595 €',haben:'Bank 595 €',correct:false},
    ],
    explain:'Eingangsrechnung: <b>Soll: Wareneingang 500 €</b> (Aufwand) + <b>Vorsteuer 95 €</b> (Forderung vs. FA) / <b>Haben: Verbindlichkeiten aus L+L 595 €</b>. Vorsteuer ist ein Aktivposten – das FA schuldet uns diesen Betrag.'
  },
  {
    icon:'🏗️',name:'Eigenleistung / selbsterstelltes Anlagevermögen',desc:'Das Unternehmen baut eigene Regale (Herstellungskosten 1.800 €) für den Betrieb.',
    options:[
      {soll:'Betriebs- & Geschäftsausstattung',haben:'Andere aktivierte Eigenleistungen',correct:true},
      {soll:'Aufwand Eigenleistung',haben:'Kasse',correct:false},
      {soll:'Betriebs- & Geschäftsausstattung',haben:'Bank',correct:false},
    ],
    explain:'Eigenleistung: <b>Soll: BGA</b> (Anlagevermögen entsteht ↑) / <b>Haben: Andere aktivierte Eigenleistungen</b> (Ertrag – neutralisiert den Aufwand der Herstellung). Die Herstellungskosten werden aktiviert statt sofort als Aufwand verbucht.'
  },
  {
    icon:'💰',name:'Zinszahlung auf Darlehen',desc:'Das Unternehmen zahlt Zinsen in Höhe von 240 € auf sein Bankdarlehen.',
    options:[
      {soll:'Zinsaufwand',haben:'Bank',correct:true},
      {soll:'Bank',haben:'Zinsaufwand',correct:false},
      {soll:'Darlehensverbindlichkeiten',haben:'Bank',correct:false},
    ],
    explain:'Zinszahlung: <b>Soll: Zinsaufwand</b> (Aufwand ↑) / <b>Haben: Bank</b> (Geld ↓). Aufwandsbuchung. Achtung: Die Zinsen mindern den Gewinn – die Tilgung des Darlehens ist eine separate Buchung!'
  },
  {
    icon:'📊',name:'Privatentnahme des Inhabers',desc:'Einzelkaufmann entnimmt 500 € aus der Kasse für private Zwecke.',
    options:[
      {soll:'Privatentnahmen',haben:'Kasse',correct:true},
      {soll:'Kasse',haben:'Privatentnahmen',correct:false},
      {soll:'Privatentnahmen',haben:'Eigenkapital',correct:false},
    ],
    explain:'Privatentnahme: <b>Soll: Privatentnahmen</b> (Eigenkapital ↓) / <b>Haben: Kasse</b> (Geld ↓). Das Eigenkapitalkonto wird am Jahresende durch Privatentnahmen gemindert. Kein Aufwand – daher kein Gewinneinfluss direkt.'
  },
  {
    icon:'📦',name:'Wareneinkauf auf Ziel',desc:'Das Unternehmen kauft Waren für 3.000 € auf Rechnung (ohne USt zur Vereinfachung).',
    options:[
      {soll:'Wareneingang / Einkauf',haben:'Verbindlichkeiten aus L+L',correct:true},
      {soll:'Verbindlichkeiten aus L+L',haben:'Wareneingang',correct:false},
      {soll:'Wareneingang',haben:'Bank',correct:false},
    ],
    explain:'Wareneinkauf auf Ziel: <b>Soll: Wareneingang</b> (Aufwand ↑ → Gewinn ↓) / <b>Haben: Verbindlichkeiten aus L+L</b> (Schulden ↑). Der Kauf auf Ziel bedeutet: Ware da, Geld noch nicht geflossen.'
  },
  {
    icon:'💰',name:'Warenverkauf auf Ziel',desc:'Das Unternehmen verkauft Waren für 4.800 € auf Rechnung.',
    options:[
      {soll:'Forderungen aus L+L',haben:'Umsatzerlöse',correct:true},
      {soll:'Umsatzerlöse',haben:'Forderungen aus L+L',correct:false},
      {soll:'Bank',haben:'Umsatzerlöse',correct:false},
    ],
    explain:'Warenverkauf auf Ziel: <b>Soll: Forderungen aus L+L</b> (Geld steht noch aus ↑) / <b>Haben: Umsatzerlöse</b> (Ertrag ↑ → Gewinn ↑). Erst wenn der Kunde zahlt, folgt: Bank an Forderungen.'
  },
  {
    icon:'🏦',name:'Tilgung eines Bankdarlehens',desc:'Das Unternehmen überweist 2.000 € Tilgung auf ein langfristiges Bankdarlehen.',
    options:[
      {soll:'Verbindlichkeiten gegenüber Kreditinstituten',haben:'Bank',correct:true},
      {soll:'Bank',haben:'Verbindlichkeiten gegenüber Kreditinstituten',correct:false},
      {soll:'Zinsaufwand',haben:'Bank',correct:false},
    ],
    explain:'Darlehenstilgung: <b>Soll: Verbindlichkeiten ggü. Kreditinstituten</b> (Schulden ↓) / <b>Haben: Bank</b> (Geld ↓). Reine Tilgung – kein Aufwand! Die Zinsen werden separat als Zinsaufwand gebucht.'
  },
  {
    icon:'💸',name:'Zinszahlung auf Bankdarlehen',desc:'Das Unternehmen zahlt 240 € Zinsen für das Bankdarlehen per Überweisung.',
    options:[
      {soll:'Zinsaufwand',haben:'Bank',correct:true},
      {soll:'Bank',haben:'Zinsaufwand',correct:false},
      {soll:'Verbindlichkeiten ggü. Kreditinstituten',haben:'Zinsaufwand',correct:false},
    ],
    explain:'Zinszahlung: <b>Soll: Zinsaufwand</b> (Aufwand ↑ → Gewinn ↓) / <b>Haben: Bank</b> (Geld ↓). Zinsen sind Aufwand, keine Tilgung. Tipp: Tilgung und Zinsen immer trennen!'
  },
  {
    icon:'🏢',name:'Mietzahlung für Büro',desc:'Das Unternehmen überweist die Monatsmiete von 1.500 € für Büroräume.',
    options:[
      {soll:'Mietaufwand',haben:'Bank',correct:true},
      {soll:'Bank',haben:'Mietaufwand',correct:false},
      {soll:'Mietaufwand',haben:'Verbindlichkeiten',correct:false},
    ],
    explain:'Mietzahlung: <b>Soll: Mietaufwand</b> (Aufwand ↑) / <b>Haben: Bank</b> (Geld ↓). Klassischer Aufwandsfall. Merke: Aufwandskonten stehen immer im Soll, Ertragskonten im Haben.'
  },
  {
    icon:'🧾',name:'Umsatzsteuer-Buchung bei Verkauf',desc:'Warenverkauf 1.000 € netto + 190 € USt (19 %) auf Rechnung.',
    options:[
      {soll:'Forderungen aus L+L 1.190 €',haben:'Umsatzerlöse 1.000 € + Umsatzsteuer 190 €',correct:true},
      {soll:'Umsatzerlöse 1.190 €',haben:'Forderungen aus L+L 1.190 €',correct:false},
      {soll:'Forderungen 1.000 €',haben:'Umsatzsteuer 190 €',correct:false},
    ],
    explain:'<b>Soll: Forderungen 1.190 €</b> / <b>Haben: Umsatzerlöse 1.000 € + Umsatzsteuer 190 €</b>. Die USt ist durchlaufender Posten – sie steht auf der Passivseite bis zur Abführung ans FA. Nettoerlös = 1.000 €, die 190 € sind keine Einnahme des Unternehmens!'
  },
  {
    icon:'📋',name:'Vorsteuer beim Wareneinkauf',desc:'Wareneinkauf 2.000 € netto + 380 € Vorsteuer (19 %) auf Rechnung.',
    options:[
      {soll:'Wareneingang 2.000 € + Vorsteuer 380 €',haben:'Verbindlichkeiten aus L+L 2.380 €',correct:true},
      {soll:'Wareneingang 2.380 €',haben:'Verbindlichkeiten 2.380 €',correct:false},
      {soll:'Vorsteuer 380 €',haben:'Wareneingang 2.000 €',correct:false},
    ],
    explain:'<b>Soll: Wareneingang 2.000 € + Vorsteuer 380 €</b> / <b>Haben: Verbindlichkeiten 2.380 €</b>. Die Vorsteuer ist ein Aktivposten (Forderung gegen das FA) – kein Aufwand! Die 2.000 € sind der tatsächliche Aufwand.'
  },
  {
    icon:'🖨️',name:'Geringwertiges Wirtschaftsgut (GWG)',desc:'Kauf eines Druckers für 600 € netto (zzgl. 114 € USt), Zahlung per Bank.',
    options:[
      {soll:'GWG-Aufwand 600 € + Vorsteuer 114 €',haben:'Bank 714 €',correct:true},
      {soll:'Büroausstattung 600 €',haben:'Bank 600 €',correct:false},
      {soll:'GWG 714 €',haben:'Bank 714 €',correct:false},
    ],
    explain:'GWG bis 800 € netto (§ 6 Abs. 2 EStG): <b>Soll: GWG-Aufwand 600 € + Vorsteuer 114 €</b> / <b>Haben: Bank 714 €</b>. Sofortabschreibung! Der Drucker wird nicht aktiviert, sondern direkt als Aufwand erfasst. Wichtig: Grenze bezieht sich immer auf den Nettobetrag.'
  },
  {
    icon:'📉',name:'Abschreibung auf Maschine (AfA)',desc:'Jahresabschreibung auf eine Maschine (Anschaffung 24.000 €, Nutzungsdauer 8 Jahre): 3.000 €.',
    options:[
      {soll:'Abschreibung auf Sachanlagen',haben:'Maschinen (kumulierte AfA)',correct:true},
      {soll:'Maschinen',haben:'Abschreibung',correct:false},
      {soll:'Abschreibung',haben:'Bank',correct:false},
    ],
    explain:'AfA-Buchung: <b>Soll: Abschreibung auf Sachanlagen</b> (Aufwand 3.000 €) / <b>Haben: Maschinen</b> (Buchwert ↓). Kein Geldfluss! AfA ist ein nicht-zahlungswirksamer Aufwand. 24.000 € / 8 Jahre = 3.000 € p.a. (lineare AfA § 7 Abs. 1 EStG).'
  },
  {
    icon:'📬',name:'Zahlung an Lieferant',desc:'Das Unternehmen begleicht eine offene Lieferantenrechnung von 2.380 € per Überweisung.',
    options:[
      {soll:'Verbindlichkeiten aus L+L',haben:'Bank',correct:true},
      {soll:'Bank',haben:'Verbindlichkeiten aus L+L',correct:false},
      {soll:'Aufwand',haben:'Bank',correct:false},
    ],
    explain:'Zahlungsausgang an Lieferant: <b>Soll: Verbindlichkeiten aus L+L</b> (Schulden ↓) / <b>Haben: Bank</b> (Geld ↓). Reine Bilanzverkürzung – kein Aufwand, da dieser bereits beim Einkauf gebucht wurde!'
  },
  {
    icon:'🔄',name:'Rückstellung für ungewisse Verbindlichkeit',desc:'Rückstellung für drohende Steuernachzahlung in Höhe von 5.000 €.',
    options:[
      {soll:'Steueraufwand / Rückstellungsaufwand',haben:'Steuerrückstellungen',correct:true},
      {soll:'Steuerrückstellungen',haben:'Bank',correct:false},
      {soll:'Bank',haben:'Steuerrückstellungen',correct:false},
    ],
    explain:'Rückstellung (§ 249 HGB): <b>Soll: Steueraufwand 5.000 €</b> / <b>Haben: Steuerrückstellungen 5.000 €</b>. Rückstellungen sind Passivposten für wahrscheinliche, aber noch ungewisse Verpflichtungen. Kein Geldfluss! Folgt das Imparitätsprinzip: Verluste erfassen, bevor sie sicher sind.'
  },
  {
    icon:'🎁',name:'Einlage des Gesellschafters',desc:'Ein Gesellschafter legt 10.000 € in die GmbH ein (Bareinlage auf Bankkonto).',
    options:[
      {soll:'Bank',haben:'Gezeichnetes Kapital / Stammkapital',correct:true},
      {soll:'Stammkapital',haben:'Bank',correct:false},
      {soll:'Bank',haben:'Verbindlichkeiten ggü. Gesellschafter',correct:false},
    ],
    explain:'Kapitaleinlage: <b>Soll: Bank</b> (Geld ↑) / <b>Haben: Gezeichnetes Kapital</b> (Eigenkapital ↑). Aktivmehrung + Passivmehrung (Bilanzverlängerung). Das gezeichnete Kapital ist das satzungsmäßige Stammkapital der GmbH – es steht immer im Haben des Eigenkapitalkontos.'
  },
  {
    icon:'📋',name:'Auflösung einer Rückstellung (zu hoch)',desc:'Die Steuerrückstellung über 5.000 € wird aufgelöst – tatsächliche Nachzahlung: nur 3.200 €.',
    options:[
      {soll:'Steuerrückstellungen 5.000 €',haben:'Bank 3.200 € + sonstiger Ertrag 1.800 €',correct:true},
      {soll:'Bank 5.000 €',haben:'Steuerrückstellungen 5.000 €',correct:false},
      {soll:'Steuerrückstellungen 3.200 €',haben:'Bank 3.200 €',correct:false},
    ],
    explain:'Rückstellungsauflösung: <b>Soll: Steuerrückstellungen 5.000 €</b> / <b>Haben: Bank 3.200 € + sonstiger Ertrag 1.800 €</b>. Zu hoch angesetzte Rückstellungen werden gewinnerhöhend aufgelöst (Ertrag). Der Mehrbetrag (1.800 €) war zu viel zurückgestellt.'
  },
  {
    icon:'💡',name:'Aktive Rechnungsabgrenzung (ARAP)',desc:'Im Dezember wird die Kfz-Versicherung für Jan–Dez des nächsten Jahres vorab gezahlt: 1.200 €.',
    options:[
      {soll:'Aktive Rechnungsabgrenzung (ARAP)',haben:'Bank',correct:true},
      {soll:'Versicherungsaufwand',haben:'Bank',correct:false},
      {soll:'Bank',haben:'Aktive Rechnungsabgrenzung',correct:false},
    ],
    explain:'ARAP (§ 250 Abs. 1 HGB): <b>Soll: Aktive Rechnungsabgrenzung 1.200 €</b> / <b>Haben: Bank 1.200 €</b>. Zahlung im Dezember für das Folgejahr: der Aufwand gehört noch nicht ins laufende Jahr! ARAP sichert die periodengerechte Abgrenzung. Im Folgejahr: Versicherungsaufwand an ARAP.'
  },
  ,
  {
    icon:'🏭',name:'Kauf einer Maschine auf Kredit',desc:'Unternehmen kauft eine Produktionsmaschine für 50.000 €. Zahlung erfolgt durch Bankdarlehen.',
    options:[
      {soll:'Maschinen',haben:'Darlehen',correct:true},
      {soll:'Darlehen',haben:'Maschinen',correct:false},
      {soll:'Maschinen',haben:'Bank',correct:false},
    ],
    explain:'Maschine kommt ins Unternehmen, Darlehen entsteht: <b>Soll: Maschinen</b> (Anlage ↑) / <b>Haben: Darlehen</b> (Verbindlichkeit ↑). Bilanzverlängerung: Aktiv und Passiv steigen gleichermaßen.'
  },
  {
    icon:'📉',name:'Abschreibung auf PKW',desc:'Der Fuhrpark-PKW (Anschaffung 30.000 €, Nutzungsdauer 5 Jahre) wird am Jahresende abgeschrieben.',
    options:[
      {soll:'Abschreibungen auf Sachanlagen',haben:'Fuhrpark',correct:true},
      {soll:'Fuhrpark',haben:'Abschreibungen auf Sachanlagen',correct:false},
      {soll:'Abschreibungen auf Sachanlagen',haben:'Bank',correct:false},
    ],
    explain:'AfA = 30.000 ÷ 5 = 6.000 €/Jahr: <b>Soll: Abschreibungen auf Sachanlagen</b> (Aufwand ↑) / <b>Haben: Fuhrpark</b> (Buchwert sinkt ↓). Aktivminderung + Aufwandsbuchung. Kein Geldfluss!'
  },
  {
    icon:'💰',name:'Warenverkauf auf Rechnung mit USt',desc:'Unternehmen verkauft Waren für 2.000 € netto + 19 % USt = 2.380 € brutto. Zahlung noch ausstehend.',
    options:[
      {soll:'Forderungen aus L+L 2.380 €',haben:'Umsatzerlöse 2.000 € + USt 380 €',correct:true},
      {soll:'Umsatzerlöse 2.380 €',haben:'Forderungen aus L+L 2.380 €',correct:false},
      {soll:'Forderungen aus L+L 2.000 €',haben:'Umsatzerlöse 2.000 €',correct:false},
    ],
    explain:'Verkauf auf Ziel mit USt: <b>Soll: Forderungen aus L+L 2.380 €</b> / <b>Haben: Umsatzerlöse 2.000 €</b> und <b>Umsatzsteuer 380 €</b>. Die USt gehört dem Finanzamt – sie ist kein Erlös!'
  },
  {
    icon:'🛍️',name:'Wareneinkauf mit Vorsteuer',desc:'Einkauf von Rohstoffen: 5.000 € netto + 19 % VSt = 5.950 € brutto. Sofortüberweisung.',
    options:[
      {soll:'Rohstoffe 5.000 € + Vorsteuer 950 €',haben:'Bank 5.950 €',correct:true},
      {soll:'Rohstoffe 5.950 €',haben:'Bank 5.950 €',correct:false},
      {soll:'Rohstoffe 5.000 €',haben:'Bank 5.000 €',correct:false},
    ],
    explain:'Einkauf mit Vorsteuer: <b>Soll: Rohstoffe 5.000 €</b> + <b>Vorsteuer 950 €</b> / <b>Haben: Bank 5.950 €</b>. Vorsteuer ist eine Forderung gegen das Finanzamt – sie mindert später die USt-Zahllast.'
  },
  {
    icon:'📝',name:'Rückstellung für Prozessrisiko',desc:'Rechtsanwalt schätzt: 70 % Wahrscheinlichkeit einer Zahlung von 8.000 € im nächsten Jahr.',
    options:[
      {soll:'Zuführung zu Rückstellungen',haben:'Rückstellungen',correct:true},
      {soll:'Rückstellungen',haben:'Zuführung zu Rückstellungen',correct:false},
      {soll:'Sonstige Verbindlichkeiten',haben:'Bank',correct:false},
    ],
    explain:'Ungewisse Verbindlichkeit → Rückstellung: <b>Soll: Zuführung zu Rückstellungen</b> (Aufwand ↑) / <b>Haben: Rückstellungen</b> (Passiv ↑). § 249 HGB: Rückstellungen für ungewisse Verbindlichkeiten sind Pflicht!'
  },
  {
    icon:'🏦',name:'Darlehenstilgung',desc:'Unternehmen zahlt eine Darlehenstilgung von 5.000 € an die Bank.',
    options:[
      {soll:'Darlehen',haben:'Bank',correct:true},
      {soll:'Bank',haben:'Darlehen',correct:false},
      {soll:'Zinsaufwand',haben:'Bank',correct:false},
    ],
    explain:'Tilgung = Schuld sinkt: <b>Soll: Darlehen</b> (Verbindlichkeit ↓) / <b>Haben: Bank</b> (liquide Mittel ↓). Passivminderung + Aktivminderung = Bilanzverkürzung. Achtung: Zinsen sind ein separater Buchungssatz!'
  },
  {
    icon:'⚡',name:'Stromrechnung erhalten, noch nicht bezahlt',desc:'Stromrechnung über 600 € (netto) + 114 € USt kommt an. Zahlung nächsten Monat.',
    options:[
      {soll:'Energiekosten 600 € + Vorsteuer 114 €',haben:'Verbindlichkeiten aus L+L 714 €',correct:true},
      {soll:'Energiekosten 714 €',haben:'Kasse 714 €',correct:false},
      {soll:'Energiekosten 600 €',haben:'Verbindlichkeiten aus L+L 600 €',correct:false},
    ],
    explain:'Aufwand entsteht mit Rechnungseingang: <b>Soll: Energiekosten 600 €</b> + <b>Vorsteuer 114 €</b> / <b>Haben: Verbindlichkeiten aus L+L 714 €</b>. Passiv- und Aktivmehrung (Aufwand + Verbindlichkeit).'
  },
  {
    icon:'🎁',name:'Privatentnahme des Unternehmers',desc:'Einzelunternehmer entnimmt Waren im Wert von 500 € für den Privatbedarf.',
    options:[
      {soll:'Privatentnahme',haben:'Warenbestand',correct:true},
      {soll:'Warenbestand',haben:'Privatentnahme',correct:false},
      {soll:'Privatentnahme',haben:'Kasse',correct:false},
    ],
    explain:'Privatentnahme mindert das Eigenkapital: <b>Soll: Privatentnahme</b> (EK-Minderungskonto ↑) / <b>Haben: Warenbestand</b> (Aktiv ↓). Achtung: USt-pflichtig als unentgeltliche Wertabgabe (§ 3 Abs. 1b UStG)!'
  },
  {
    icon:'📊',name:'Buchung einer Anzahlung vom Kunden',desc:'Kunde zahlt 3.000 € Anzahlung für einen Auftrag, der erst im nächsten Monat erfüllt wird.',
    options:[
      {soll:'Bank',haben:'Erhaltene Anzahlungen',correct:true},
      {soll:'Bank',haben:'Umsatzerlöse',correct:false},
      {soll:'Forderungen aus L+L',haben:'Umsatzerlöse',correct:false},
    ],
    explain:'Anzahlung ≠ Umsatz! Leistung wurde noch nicht erbracht: <b>Soll: Bank</b> (Geld ↑) / <b>Haben: Erhaltene Anzahlungen</b> (Verbindlichkeit ↑). Erst bei Leistungserfüllung wird in Umsatzerlöse umgebucht.'
  },
  {
    icon:'📦',name:'Abschreibung auf uneinbringliche Forderung',desc:'Forderung von 1.000 € gegen insolventen Kunden wird abgeschrieben.',
    options:[
      {soll:'Forderungsabschreibungen',haben:'Forderungen aus L+L',correct:true},
      {soll:'Forderungen aus L+L',haben:'Forderungsabschreibungen',correct:false},
      {soll:'Sonstige Aufwendungen',haben:'Bank',correct:false},
    ],
    explain:'Uneinbringliche Forderung = Aufwand: <b>Soll: Forderungsabschreibungen</b> (Aufwand ↑) / <b>Haben: Forderungen aus L+L</b> (Forderung ↓). Aktivminderung + Aufwandsbuchung. USt-Korrektur nach § 17 UStG beachten!'
  },
  {
    icon:'🔄',name:'USt-Zahllast abführen',desc:'Umsatzsteuer-Voranmeldung: Zahllast 2.400 € (USt 3.200 € ./. Vorsteuer 800 €) wird überwiesen.',
    options:[
      {soll:'Umsatzsteuer',haben:'Bank',correct:true},
      {soll:'Vorsteuer',haben:'Bank',correct:false},
      {soll:'Bank',haben:'Umsatzsteuer',correct:false},
    ],
    explain:'Zahllast = USt ./. VSt abführen: <b>Soll: Umsatzsteuer 2.400 €</b> / <b>Haben: Bank 2.400 €</b>. Das Konto "Umsatzsteuer" (Passiv) wird geleert, Bank sinkt. Vorsteuer wurde vorher bereits mit USt verrechnet.'
  },
  {
    icon:'🏢',name:'Miete im Voraus bezahlt (ARAP)',desc:'Unternehmen zahlt im Dezember Januarmiete 1.200 € im Voraus.',
    options:[
      {soll:'Aktiver Rechnungsabgrenzungsposten (ARAP)',haben:'Bank',correct:true},
      {soll:'Mietaufwand',haben:'Bank',correct:false},
      {soll:'Bank',haben:'Mietaufwand',correct:false},
    ],
    explain:'Zahlung im Dezember für Leistung im Januar → Abgrenzung: <b>Soll: ARAP</b> (Aktiv ↑) / <b>Haben: Bank</b> (↓). Im Januar dann: Mietaufwand an ARAP. So wird der Aufwand dem richtigen Periode zugeordnet (§ 250 HGB).'
  },
];;

const D_AO = [
  {q:'Wie lange ist die reguläre Festsetzungsverjährungsfrist für Einkommensteuer?',opts:['1 Jahr','2 Jahre','4 Jahre','10 Jahre'],ans:2,lvl:1,explain:'<b>4 Jahre</b> (§ 169 Abs. 2 Nr. 2 AO) – so lange darf das Finanzamt Steuern noch nachfordern. Bei leichtfertiger Steuerverkürzung: 5 Jahre. Bei vorsätzlicher Steuerhinterziehung: 10 Jahre!'},
  {q:'Wie lange hat man Zeit, Einspruch gegen einen Steuerbescheid einzulegen?',opts:['1 Woche','2 Wochen','1 Monat','3 Monate'],ans:2,lvl:1,explain:'<b>1 Monat</b> (§ 355 AO) – ab dem Tag der Bekanntgabe des Steuerbescheids (gilt als bekannt gegeben am <b>4. Tag</b> nach Aufgabe zur Post – § 122 Abs. 2 AO, geändert durch JStG 2022 ab 01.01.2023). Verpasst man diese Frist, wird der Bescheid <b>bestandskräftig</b>!'},
  {q:'Steuerhinterziehung (§ 370 AO) ist rechtlich gesehen…',opts:['Eine Ordnungswidrigkeit','Eine Straftat (Vergehen)','Ein Kavaliersdelikt','Ein Zivilrechtsstreit'],ans:1,lvl:1,explain:'<b>Eine Straftat (Vergehen)</b> – Steuerhinterziehung kann mit Geldstrafe oder bis zu 5 Jahren Gefängnis bestraft werden. In besonders schweren Fällen (über 50.000 €) drohen bis zu 10 Jahre Haft!'},
  {q:'Was ist eine strafbefreiende Selbstanzeige (§ 371 AO)?',opts:['Eine Beschwerde beim Finanzamt','Freiwillige Meldung + vollständige Nachzahlung → keine Strafe','Eine Amnestie für alle Steuerschulden','Ein Antrag auf Steuererlass'],ans:1,lvl:2,explain:'<b>Freiwillige Korrektur + vollständige Nachzahlung → Straffreiheit</b>. Wer sich selbst anzeigt, alle falschen Angaben korrigiert und die hinterzogenen Steuern + Zinsen nachzahlt, bleibt straffrei. Aber: Sie muss vollständig sein – seit 2015 keine Teilanzeigen mehr!'},
  {q:'Was regelt die Abgabenordnung (AO)?',opts:['Nur die Einkommensteuer','Nur Unternehmensteuern','Das allgemeine Steuerverfahrensrecht für alle Steuerarten','Die genaue Höhe aller Steuersätze'],ans:2,lvl:1,explain:'Die AO ist das <b>„Grundgesetz des Steuerrechts"</b> – sie regelt das allgemeine Steuerverfahren: Steuerpflicht, Erklärungsfristen, Verjährung, Rechtsbehelfe, Außenprüfung und vieles mehr. Sie gilt für alle Steuerarten.'},
  {q:'Wer erhält in Deutschland eine Steuer-Identifikationsnummer?',opts:['Nur Selbstständige & Gewerbetreibende','Nur Arbeitnehmer','Alle in Deutschland gemeldeten natürlichen Personen – ab Geburt','Nur Personen ab 18 Jahren'],ans:2,lvl:1,explain:'<b>Alle in Deutschland gemeldeten Personen – ab Geburt</b> (§ 139b AO)! Die 11-stellige Steuer-ID wird automatisch zugeteilt und ist <em>lebenslang</em> unveränderlich. Sie gilt sogar noch bis zu 20 Jahre nach dem Tod!'},
  {q:'Was ist eine Außenprüfung (Betriebsprüfung)?',opts:['Eine Prüfung durch externe Wirtschaftsprüfer','Das Finanzamt prüft die Bücher des Unternehmens vor Ort','Eine EU-weite Steuerprüfung','Eine Selbstprüfung des Unternehmens auf Fehler'],ans:1,lvl:2,explain:'<b>Das Finanzamt prüft die Bücher vor Ort</b> (§§ 193 ff. AO). Betriebsprüfer kommen ins Unternehmen und prüfen Buchhaltung, Belege und Steuererklärungen der letzten Jahre. Betroffen sind vor allem größere Unternehmen.'},
  {q:'Was bedeutet „Bestandskraft" eines Steuerbescheids?',opts:['Der Bescheid ist vorläufig und kann jederzeit geändert werden','Der Bescheid enthält einen Bestandsnachweis','Die Einspruchsfrist ist abgelaufen – der Bescheid ist grundsätzlich endgültig','Das Finanzamt muss den Bescheid nochmals prüfen'],ans:2,lvl:2,explain:'<b>Formelle Bestandskraft:</b> Die Einspruchsfrist (1 Monat) ist abgelaufen. <b>Materielle Bestandskraft:</b> Der Inhalt ist bindend, aber in gesetzlichen Ausnahmefällen noch änderbar (z. B. § 173 AO bei neuen Tatsachen, § 129 AO bei offenbarer Unrichtigkeit).'},
  {q:'Was ist der Unterschied zwischen Steuerhinterziehung und leichtfertiger Steuerverkürzung?',opts:['Keiner – beide sind gleich strafbar','Hinterziehung = Vorsatz (Straftat), Verkürzung = Fahrlässigkeit (Ordnungswidrigkeit)','Verkürzung = Vorsatz, Hinterziehung = Fahrlässigkeit','Beide sind nur Ordnungswidrigkeiten'],ans:1,lvl:2,explain:'<b>Entscheidend ist der Vorsatz:</b> Steuerhinterziehung = wissentlich & absichtlich → Straftat (§ 370 AO). Leichtfertige Steuerverkürzung = grob fahrlässig → nur Ordnungswidrigkeit (§ 378 AO), aber trotzdem nachzahlen + Bußgeld!'},
  {q:'Was passiert, wenn man die Steuererklärung trotz Pflicht nicht abgibt?',opts:['Nichts – das Finanzamt schätzt automatisch positiv','Das Finanzamt kann schätzen (§ 162 AO) und Verspätungszuschläge erheben','Man bekommt sofort eine Strafanzeige','Die Steuerschuld verfällt nach 1 Jahr'],ans:1,lvl:1,explain:'Das Finanzamt kann die Besteuerungsgrundlagen <b>schätzen (§ 162 AO)</b> – meist zum Nachteil des Steuerpflichtigen. Zusätzlich drohen <b>Verspätungszuschläge</b> (§ 152 AO): mind. 25 € pro Monat, bis zu 25.000 €.'},
  {q:'Was ist ein Säumniszuschlag (§ 240 AO)?',opts:['Eine Strafe für vorsätzliche Steuerhinterziehung','Ein Zuschlag (1 % / Monat) für nicht rechtzeitig gezahlte Steuern','Eine Gebühr für die verspätete Abgabe der Steuererklärung','Ein Bußgeld bei falschen Angaben'],ans:1,lvl:2,explain:'<b>Säumniszuschlag (§ 240 AO):</b> Für jede angefangene Monatsfrist, in der Steuern nicht gezahlt werden, entsteht automatisch ein Zuschlag von <b>1 % des rückständigen Steuerbetrags</b>. Das macht im Jahr 12 % – teurer als die meisten Bankdarlehen! Mindestbetrag: 25 €.'},
  {q:'Was sind steuerliche „Nebenleistungen" (§ 3 Abs. 4 AO)?',opts:['Freiwillige Zahlungen des Steuerpflichtigen','Zusätzliche Abgaben neben der eigentlichen Steuer – z.B. Zinsen, Verspätungszuschläge, Säumniszuschläge','Sondertarife für bestimmte Branchen','Steuerminderungen bei pünktlicher Zahlung'],ans:1,lvl:2,explain:'<b>Steuerliche Nebenleistungen (§ 3 Abs. 4 AO)</b> sind Abgaben, die neben der eigentlichen Steuerschuld entstehen: Verspätungszuschläge (§ 152 AO), Zinsen (§§ 233 ff. AO), Säumniszuschläge (§ 240 AO) und Zwangsgelder. Sie sollen zur rechtzeitigen Erfüllung steuerlicher Pflichten anreizen – und die Staatskasse entschädigen.'},
  {q:'Was ist das „Steuergeheimnis" (§ 30 AO)?',opts:['Finanzbeamte dürfen keine Steuern zahlen','Steuerliche Daten von Bürgern sind streng vertraulich und dürfen nicht weitergegeben werden','Steuerbescheide werden nie schriftlich versandt','Betriebsprüfungen finden immer heimlich statt'],ans:1,lvl:1,explain:'Das <b>Steuergeheimnis (§ 30 AO)</b> schützt alle Daten, die im Besteuerungsverfahren bekannt werden. Finanzbeamte dürfen diese Informationen grundsätzlich nicht an Dritte weitergeben – ein fundamentales Grundrecht der Steuerpflichtigen. Verstöße sind strafbar!'},
  {q:'Wie nennt man den Zeitraum, für den eine Steuer erhoben wird?',opts:['Steuerjahr','Veranlagungszeitraum','Steuerzeitraum','Erhebungszeitraum'],ans:1,lvl:1,explain:'Der <b>Veranlagungszeitraum (VZ)</b> ist der Zeitraum, für den die Steuer festgesetzt wird. Bei der Einkommensteuer ist das das Kalenderjahr (§ 25 EStG). Am Ende des VZ reicht man die Steuererklärung ein, das Finanzamt erlässt dann den Bescheid.'},
  {q:'Was ist ein „Vorläufigkeitsvermerk" im Steuerbescheid?',opts:['Der Bescheid ist falsch und wird berichtigt','Bestimmte Punkte bleiben offen, weil z.B. ein Verfahren vor dem BFH läuft','Der Bescheid gilt nur vorübergehend für 1 Monat','Das Finanzamt hat vergessen zu prüfen'],ans:1,lvl:3,explain:'Ein <b>Vorläufigkeitsvermerk (§ 165 AO)</b> bedeutet: In bestimmten Punkten ist der Bescheid noch nicht endgültig – z.B. weil ein Musterverfahren beim BFH oder BVerfG läuft. Sobald dieses entschieden ist, wird der Bescheid automatisch angepasst. Das schützt Steuerpflichtige, ohne dass sie Einspruch einlegen müssen.'},
  {q:'Was versteht man unter „Treu und Glauben" im Steuerrecht?',opts:['Das Finanzamt muss immer zugunsten des Steuerpflichtigen entscheiden','Beide Seiten – Finanzamt und Steuerpflichtiger – müssen sich redlich und widerspruchsfrei verhalten','Steuerpflichtige dürfen dem Finanzamt nicht widersprechen','Bedeutet, dass Steuern pünktlich gezahlt werden müssen'],ans:1,lvl:3,explain:'<b>Treu und Glauben</b> ist ein allgemeiner Rechtsgrundsatz, der auch im Steuerrecht gilt. Weder Finanzamt noch Steuerpflichtiger dürfen sich widersprüchlich verhalten. Beispiel: Wenn das Finanzamt über Jahre eine bestimmte Praxis akzeptiert hat, kann es nicht ohne Weiteres plötzlich rückwirkend anders entscheiden.'},
  {q:'Was unterscheidet formelle von materieller Bestandskraft eines Steuerbescheids?',opts:['Formelle = Einspruchsfrist abgelaufen; Materielle = inhaltliche Bindung (änderbar nur in gesetzl. Ausnahmefällen)','Beide Begriffe bezeichnen dasselbe','Formell = rechnerisch korrekt; Materiell = fristgerecht zugestellt','Formelle Bestandskraft ist stärker und schließt jede Änderung aus'],ans:0,lvl:3,explain:'<b>Formelle Bestandskraft</b> (§ 355 AO): Einspruchsfrist abgelaufen – kein Rechtsmittel mehr möglich. <b>Materielle Bestandskraft</b> (§§ 172 ff. AO): Der Bescheid ist inhaltlich bindend, kann aber trotzdem noch geändert werden – z. B. bei neuen Tatsachen (§ 173 AO), offenbarer Unrichtigkeit (§ 129 AO) oder Vorläufigkeitsvermerk (§ 165 AO). Formelle und materielle Bestandskraft sind zwei verschiedene Rechtsbegriffe!'},
  {q:'Was ist eine Wiedereinsetzung in den vorigen Stand (§ 110 AO)?',opts:['Eine rückwirkende Steuerbefreiung','Möglichkeit, eine versäumte Frist nachträglich zu heilen, wenn die Versäumnis unverschuldet war','Eine automatische Fristverlängerung um 1 Monat','Das Finanzamt setzt den Bescheid zurück auf Null'],ans:1,lvl:3,explain:'<b>§ 110 AO:</b> Wer eine gesetzliche Frist (z.B. Einspruchsfrist) ohne eigenes Verschulden versäumt, kann innerhalb eines Monats nach Wegfall des Hindernisses Wiedereinsetzung beantragen. Typische Fälle: schwere Erkrankung, behördliche Fehlinformation. Die versäumte Handlung muss gleichzeitig nachgeholt werden.'},
  {q:'Was bedeutet „Anlaufhemmung" der Festsetzungsverjährung (§ 170 Abs. 2 AO)?',opts:['Die Verjährung beginnt sofort im Entstehungsjahr','Die Frist beginnt erst mit Ablauf des Jahres der Abgabe der Steuererklärung','Die Verjährung wird um genau 1 Jahr verlängert','Bei Anlaufhemmung gibt es gar keine Verjährung'],ans:1,lvl:3,explain:'Bei abgabepflichtigen Steuern beginnt die Festsetzungsverjährung erst mit <b>Ablauf des Kalenderjahres, in dem die Erklärung abgegeben wird</b>. Wer seine ESt-Erklärung 2021 für 2020 abgibt, startet die 4-Jahres-Frist erst Ende 2021 → Verjährung Ende 2025. Wer keine Erklärung abgibt, verlängert so die Frist zu Lasten des Finanzamts – aber auch zu seinen eigenen Lasten, wenn Schwarzeinnahmen irgendwann auftauchen.'},
  {q:'Wer kann nach § 69 AO als Haftungsschuldner in Anspruch genommen werden?',opts:['Nur der Steuerschuldner selbst','Gesetzliche Vertreter (z.B. GmbH-Geschäftsführer), die Steuerpflichten grob fahrlässig oder vorsätzlich verletzt haben','Jeder Mitarbeiter des Unternehmens','Nur der Steuerberater'],ans:1,lvl:3,explain:'<b>Haftung der Vertreter (§ 69 AO):</b> Gesetzliche Vertreter (z.B. GmbH-Geschäftsführer) haften persönlich, wenn sie Steuern durch grob fahrlässige oder vorsätzliche Pflichtverletzung nicht abgeführt haben. Das Finanzamt erlässt dann einen <b>Haftungsbescheid (§ 191 AO)</b> direkt gegen die Person.'},,
  {q:'Was ist der Unterschied zwischen Steuerpflicht und Steuerschuldnerschaft?',opts:['Keine – beide Begriffe sind identisch','Steuerpflicht umfasst alle steuerlichen Pflichten (§ 33 AO); Steuerschuldner ist nur, wer die Steuer tatsächlich schuldet (§ 43 AO)','Nur natürliche Personen sind steuerpflichtig; juristische Personen sind Steuerschuldner','Steuerpflicht endet mit Renteneintritt'],ans:1,lvl:2,explain:'<b>§ 33 AO:</b> Steuerpflichtig ist, wer eine steuerliche Pflicht hat (z.B. Erklärungspflicht, Auskunftspflicht). <b>§ 43 AO:</b> Steuerschuldner ist konkret, wer die Steuer schuldet. Alle Steuerschuldner sind steuerpflichtig, aber nicht alle Steuerpflichtigen sind Steuerschuldner.'},
  {q:'Was versteht man unter dem "Grundsatz der Verhältnismäßigkeit" im Steuerrecht?',opts:['Alle Steuern müssen gleich hoch sein','Steuerliche Maßnahmen dürfen nur soweit gehen, wie es zur Erreichung des Zwecks erforderlich ist – kein Eingriff über das notwendige Maß hinaus','Das Finanzamt muss immer die höchste Steuer festsetzen','Steuerpflichtige müssen im gleichen Verhältnis wie Vermögende zahlen'],ans:1,lvl:2,explain:'Der <b>Verhältnismäßigkeitsgrundsatz</b> (Art. 20 GG) gilt auch im Steuerrecht: Eine Maßnahme (z.B. Außenprüfung, Sicherheitsleistung, Pfändung) muss geeignet, erforderlich und angemessen sein. Das Finanzamt darf z.B. nicht sofort die gesamte Pfändung einleiten, wenn eine Ratenzahlung reicht.'},
  {q:'Wann liegt eine Bekanntgabe durch öffentliche Zustellung vor (§ 122 Abs. 5 AO)?',opts:['Immer wenn der Bescheid nicht persönlich übergeben wird','Nur wenn der Empfänger unbekannt verzogen ist und Zustellung per Post nicht möglich ist','Bei allen Steuerbescheiden über 50.000 €','Wenn der Empfänger den Brief nicht öffnet'],ans:1,lvl:3,explain:'<b>Öffentliche Zustellung (§ 122 Abs. 5 AO)</b> ist das letzte Mittel: Sie ist zulässig, wenn der Aufenthalt des Empfängers unbekannt ist und eine Zustellung per Post/Bote scheitert. Der Verwaltungsakt gilt 2 Wochen nach Bekanntmachung (z.B. Aushang) als bekanntgegeben.'},
  {q:'Was ist ein "Grundlagenbescheid" im Sinne von § 171 Abs. 10 AO?',opts:['Ein Steuerbescheid, auf dem alle anderen Steuern aufbauen','Ein Bescheid, dessen Feststellungen für einen anderen Bescheid (Folgebescheid) bindend sind – z.B. Feststellungsbescheid der Gesellschaft','Ein Bescheid, der erst erlassen wird, nachdem alle Einsprüche abgearbeitet wurden','Der Einkommensteuerbescheid des Finanzamts'],ans:1,lvl:3,explain:'<b>Grundlagenbescheid:</b> Ein Bescheid, dessen Feststellungen für einen anderen Bescheid (Folgebescheid) verbindlich sind. Typisches Beispiel: Feststellungsbescheid einer GbR → Einkommensteuerbescheid des Gesellschafters. Der Folgebescheid ist gemäß § 175 Abs. 1 AO zu ändern, wenn sich der Grundlagenbescheid ändert.'},
  {q:'Bis wann muss ein Steuerpflichtiger seine Einkommensteuererklärung ohne Steuerberater abgeben (§ 149 AO)?',opts:['31. März des Folgejahres','31. Juli des Folgejahres (ab VZ 2021)','31. Dezember des Folgejahres','15. Februar des übernächsten Jahres'],ans:1,lvl:1,explain:'<b>Abgabefrist (§ 149 AO) ab VZ 2021:</b> Für Steuerpflichtige ohne Steuerberater: <b>31. Juli</b> des Folgejahres. Mit Steuerberater: 28./29. Februar des übernächsten Jahres. Vor 2021 war die Frist der 31. Mai. Bei Verzug können Verspätungszuschläge (§ 152 AO) entstehen.'},
  {q:'Was ist das Prinzip der Bestandskraft eines Steuerbescheids?',opts:['Der Bescheid kann nie mehr geändert werden','Ein nicht fristgerecht angefochtener Bescheid wird unanfechtbar – Änderungen nur noch in engen gesetzlichen Grenzen (§§ 172 ff. AO)','Der Bescheid gilt lebenslang','Bestandskraft tritt nach 5 Jahren automatisch ein'],ans:1,lvl:2,explain:'<b>Bestandskraft</b> tritt ein, wenn die Einspruchsfrist (1 Monat, § 355 AO) ungenutzt verstreicht. Danach ist der Bescheid unanfechtbar. Änderungen sind nur noch in den engen Grenzen der §§ 172–177 AO möglich (z.B. neue Tatsachen § 173, Grundlagenbescheid § 175, offenbare Unrichtigkeit § 129).'},
  {q:'Was versteht man unter "Mitwirkungspflicht" des Steuerpflichtigen (§ 90 AO)?',opts:['Pflicht, an Betriebsprüfungen teilzunehmen und Büros bereitzustellen','Pflicht, steuerlich erhebliche Sachverhalte vollständig und wahrheitsgemäß aufzuklären und Nachweise zu erbringen','Pflicht, Steuerberater zu bezahlen','Pflicht, an Steuer-Informationsveranstaltungen teilzunehmen'],ans:1,lvl:1,explain:'<b>§ 90 AO – Mitwirkungspflicht:</b> Steuerpflichtige müssen bei der Sachverhaltsermittlung aktiv mitwirken: Tatsachen vollständig und wahrheitsgemäß darlegen, Unterlagen vorlegen, Auskünfte erteilen. Bei Verletzung: Beweislastumkehr, Schätzung (§ 162 AO) oder Verzögerungsgeld möglich.'},
  {q:'Wann darf das Finanzamt den Steuerbetrag schätzen (§ 162 AO)?',opts:['Immer – das Finanzamt kann stets schätzen','Nur wenn der Steuerpflichtige keine Steuererklärung abgibt','Wenn die Besteuerungsgrundlagen nicht ermittelt werden können – z.B. bei fehlender Buchführung, verweigerter Mitwirkung oder unvollständigen Unterlagen','Nur bei Umsätzen über 500.000 €'],ans:2,lvl:2,explain:'<b>§ 162 AO – Schätzung:</b> Das Finanzamt darf schätzen, wenn Besteuerungsgrundlagen nicht ermittelt werden können. Typische Fälle: keine Buchführung, Nichterklärung, Verweigerung von Auskünften, unplausible Buchführung. Die Schätzung soll den wahrscheinlichsten Sachverhalt treffen – sie darf aber auch Strafcharakter haben bei schwerer Mitwirkungsverletzung.'},
  {q:'Was ist ein "Haftungsbescheid" (§ 191 AO) und wer kann davon betroffen sein?',opts:['Ein Bescheid, der die Haftung des Finanzamts festlegt','Ein Verwaltungsakt, der einen Dritten (z.B. Geschäftsführer) für fremde Steuerschulden in Anspruch nimmt','Ein Bescheid über die Steuerhaftung des Steuerpflichtigen selbst','Nur relevant bei Insolvenzen'],ans:1,lvl:3,explain:'<b>§ 191 AO:</b> Wenn jemand durch Gesetz für eine fremde Steuerschuld haftet (z.B. Geschäftsführer einer GmbH nach § 69 AO bei grober Pflichtverletzung), erlässt das Finanzamt einen Haftungsbescheid. Der Haftende ist dann verpflichtet, die Steuerschuld zu entrichten. Dagegen ist Einspruch möglich.'},
  {q:'Was bedeutet "Aussetzung der Vollziehung" (§ 361 AO)?',opts:['Das Finanzamt verzichtet auf die Steuer','Während eines laufenden Einspruchs- oder Klageverfahrens wird die Zahlung der strittigen Steuer vorübergehend ausgesetzt – der Steuerpflichtige muss erst nach Entscheidung zahlen','Die Vollstreckung ist dauerhaft gestoppt','Nur möglich, wenn der Steuerpflichtige zahlungsunfähig ist'],ans:1,lvl:2,explain:'<b>§ 361 AO – AdV:</b> Wenn ernstliche Zweifel an der Rechtmäßigkeit eines Bescheids bestehen oder die Vollziehung eine unbillige Härte wäre, kann das Finanzamt (oder auf Antrag das FG) die Vollziehung aussetzen. Der Steuerpflichtige muss die Steuer dann erst zahlen, wenn das Verfahren rechtskräftig abgeschlossen ist. Cave: Zinsen können anfallen.'},

];

// ===== NEU: GEWERBESTEUER (GewStG) =====
// Hinweis: Alle Inhalte basieren auf dem GewStG und EStG in der für Ausbildungszwecke
// maßgeblichen Fassung. Für verbindliche Auskünfte gelten stets die offiziellen Gesetze.
const D_GEWST = [
  {q:'Welche Steuer unterliegt der Gewerbesteuer grundsätzlich?',opts:['Natürliche Personen mit Arbeitseinkommen','Gewerbebetriebe (§ 2 GewStG)','Land- und Forstwirte','Freiberufler wie Ärzte und Anwälte'],ans:1,lvl:1,explain:'<b>§ 2 GewStG:</b> Steuerpflichtig ist der Gewerbebetrieb, nicht die Person. Freiberufler (§ 18 EStG), Land- und Forstwirte und Vermögensverwaltung unterliegen <b>nicht</b> der Gewerbesteuer. Daher prüfe stets die Einkunftsart: Nur § 15 EStG-Einkünfte lösen GewSt aus.'},
  {q:'Was ist die Bemessungsgrundlage der Gewerbesteuer?',opts:['Der Jahresumsatz des Unternehmens','Der Gewerbeertrag (§ 7 GewStG) – also der nach EStG/KStG ermittelte Gewinn, korrigiert durch Hinzurechnungen und Kürzungen','Das Eigenkapital des Unternehmens','Der Lohnaufwand des Unternehmens'],ans:1,lvl:1,explain:'<b>Gewerbeertrag (§ 7 GewStG):</b> Ausgangspunkt ist der Gewinn nach EStG/KStG, der durch <b>Hinzurechnungen</b> (§ 8 GewStG, z.B. Finanzierungsanteile aus Zinsen, Mieten, Pachten) erhöht und durch <b>Kürzungen</b> (§ 9 GewStG, z.B. 1,2 % des Einheitswerts für Grundbesitz) vermindert wird.'},
  {q:'Wie wird der Gewerbesteuer-Messbetrag berechnet?',opts:['Gewerbeertrag × Hebesatz der Gemeinde','(Gewerbeertrag − Freibetrag) × Steuermesszahl 3,5 % (§ 11 GewStG)','Gewinn × 15 %','Umsatz × 3,5 %'],ans:1,lvl:2,explain:'<b>§ 11 GewStG:</b> Messbetrag = (Gewerbeertrag − Freibetrag) × 3,5 %. Der Freibetrag beträgt 24.500 € für natürliche Personen und Personengesellschaften. Der Messbetrag wird dann mit dem <b>Hebesatz</b> der Gemeinde multipliziert, um die zu zahlende Gewerbesteuer zu ermitteln. Hebesätze variieren stark (z.B. Berlin ca. 410 %, Frankfurt ca. 460 %).'},
  {q:'Welche Hinzurechnung (§ 8 GewStG) ist besonders prüfungsrelevant?',opts:['100 % der Gehälter der Geschäftsführer','25 % der Summe aus Entgelten für Schulden, Miet-/Pachtzinsen, Lizenzgebühren (Finanzierungsanteile)','50 % der Abschreibungen auf Anlagevermögen','10 % der Betriebseinnahmen'],ans:1,lvl:3,explain:'<b>§ 8 Nr. 1 GewStG – Finanzierungsanteile:</b> Um Fremd- und Eigenfinanzierung gleichzustellen, werden folgende <b>Finanzierungsanteile</b> hinzugerechnet (effektive Sätze nach § 8 Nr. 1 GewStG):<br>• <b>25 %</b> der Zinsaufwendungen (Nr. 1a: ¼ × 100 %)<br>• <b>5 %</b> der Miet-/Pachtzinsen für <b>bewegliche</b> WG (Nr. 1d: ¼ × ⅕)<br>• <b>12,5 %</b> der Miet-/Pachtzinsen für <b>unbewegliche</b> WG (Nr. 1e: ¼ × ½)<br>• <b>6,25 %</b> der Lizenzgebühren (Nr. 1f: ¼ × ¼)<br>→ Aber nur der Betrag, der <b>200.000 € überschreitet</b>. Diese Regelung ist prüfungsrelevant.'},
  {q:'Was ist die Kürzung für Grundbesitz (§ 9 Nr. 1 GewStG)?',opts:['Gewinn mindert sich um die gesamte Grundsteuer','1,2 % des maßgebenden Einheitswerts des Grundbesitzes wird vom Gewerbeertrag abgezogen','Der Buchwert des Grundstücks wird abgezogen','100 % der Grundsteuer wird abgezogen'],ans:1,lvl:2,explain:'<b>§ 9 Nr. 1 GewStG:</b> Zur Vermeidung einer Doppelbelastung (Grundsteuer + Gewerbesteuer auf denselben Grundbesitz) wird 1,2 % des Einheitswerts des Grundbesitzes vom Gewerbeertrag abgezogen. Bei Grundstücksunternehmen gibt es eine erweiterte Kürzung auf 100 % der Einnahmen.'},
  {q:'Wie wird die Gewerbesteuer bei der Einkommensteuer berücksichtigt?',opts:['Gewerbesteuer ist voll als Betriebsausgabe abziehbar','Gewerbesteuer ist nicht abziehbar, aber Einkommensteuer wird pauschal um das 4-fache des GewSt-Messbetrags ermäßigt (§ 35 EStG)','Gewerbesteuer ist als Sonderausgabe abziehbar','Gewerbesteuer mindert den zu versteuernden Gewinn um 50 %'],ans:1,lvl:2,explain:'<b>§ 35 EStG – Steuerermäßigung:</b> <b>Ab dem Veranlagungszeitraum 2020</b> wird die Einkommensteuer um das <b>4-fache des GewSt-Messbetrags</b> ermäßigt (§ 35 Abs. 1 S. 1 EStG – Anrechnungsmultiplikator seit JStG 2019 von 3,8 auf 4,0 erhöht). Diese Anrechnung soll die Doppelbelastung durch GewSt und ESt bei Gewerbetreibenden abmildern. Die tatsächliche Entlastung hängt vom Hebesatz ab – bei niedrigem Hebesatz kann die Ermäßigung die gesamte GewSt übersteigen. Achtung: § 4 Abs. 5b EStG verbietet den Betriebsausgabenabzug der GewSt seit 2008.'},
  {q:'Welche Rechtsform ist von der Gewerbesteuer befreit?',opts:['GmbH','AG','Einzelunternehmer mit Einnahmen unter 17.500 €','Keine – alle Gewerbebetriebe zahlen Gewerbesteuer; nur Freibeträge und § 3 GewStG-Befreiungen gelten'],ans:3,lvl:2,explain:'<b>§ 3 GewStG – sachliche Steuerbefreiungen:</b> Bestimmte Organisationen sind befreit, z.B. gemeinnützige Körperschaften, Krankenhäuser, bestimmte landwirtschaftliche Unternehmen. Kapitalgesellschaften (GmbH, AG) zahlen immer Gewerbesteuer – ohne Freibetrag! Nur Einzelunternehmer und Personengesellschaften profitieren vom 24.500 €-Freibetrag.'},
  {q:'Was ist die „Zerlegung" der Gewerbesteuer (§§ 28 ff. GewStG)?',opts:['Aufteilung der Gewerbesteuer auf verschiedene Steuerarten','Aufteilung des Messbetrags auf mehrere Gemeinden, wenn ein Unternehmen Betriebsstätten in verschiedenen Gemeinden hat','Zerlegung des Gewerbeertrags in Hinzurechnungen und Kürzungen','Aufteilung zwischen Bund und Ländern'],ans:1,lvl:3,explain:'<b>§§ 28–34 GewStG – Zerlegung:</b> Hat ein Unternehmen Betriebsstätten in mehreren Gemeinden, wird der Steuermessbetrag auf diese Gemeinden aufgeteilt. Der Zerlegungsmaßstab ist hauptsächlich die <b>Lohnsumme</b> in der jeweiligen Gemeinde. Dies ist relevant bei größeren Unternehmen mit mehreren Standorten.'},
];

// ===== NEU: BESTEUERUNG DER GESELLSCHAFTEN (KStG / GmbH / Personengesellschaften) =====
// Hinweis: Diese Fragen behandeln Grundlagen des KStG und der Gesellschaftsbesteuerung
// für Ausbildungszwecke. Verbindlich sind stets die aktuellen Gesetze (KStG, EStG, GmbHG).
const D_GESELLSCHAFT = [
  {q:'Wer ist körperschaftsteuerpflichtig (§ 1 KStG)?',opts:['Natürliche Personen und Personengesellschaften','Juristische Personen des privaten Rechts (z.B. GmbH, AG, eG) und bestimmte andere Körperschaften','Nur Aktiengesellschaften','Alle Unternehmen mit mehr als 10 Mitarbeitern'],ans:1,lvl:1,explain:'<b>§ 1 KStG:</b> Körperschaftsteuerpflichtig sind Körperschaften, Personenvereinigungen und Vermögensmassen. Klassische Beispiele: GmbH, AG, eG, Vereine, Stiftungen. Personengesellschaften (GbR, OHG, KG) sind <b>nicht</b> körperschaftsteuerpflichtig – ihre Gesellschafter versteuern Gewinne im Rahmen der Einkommensteuer (Transparenzprinzip).'},
  {q:'Wie hoch ist der Körperschaftsteuersatz (§ 23 KStG)?',opts:['25 %','15 % zzgl. 5,5 % Solidaritätszuschlag','10 %','Progressiver Tarif wie bei der ESt'],ans:1,lvl:1,explain:'<b>§ 23 KStG:</b> Der KSt-Satz beträgt einheitlich <b>15 %</b> – zzgl. 5,5 % Solidaritätszuschlag auf die KSt (also effektiv 15,825 %). Dazu kommt die Gewerbesteuer (je nach Gemeinde ca. 14–17 %). Die Gesamtbelastung einer GmbH liegt typischerweise bei etwa 30–33 %.'},
  {q:'Was ist das „Trennungsprinzip" bei Kapitalgesellschaften?',opts:['Privat- und Betriebsvermögen werden steuerlich getrennt','Kapitalgesellschaft und Gesellschafter sind steuerlich getrennte Rechtssubjekte – die GmbH zahlt KSt auf ihren Gewinn, der Gesellschafter zahlt Kapitalertragsteuer auf Ausschüttungen','Nur der Gesellschafter zahlt Steuern, nicht die GmbH','Die GmbH zahlt Steuern für alle Gesellschafter'],ans:1,lvl:1,explain:'<b>Trennungsprinzip:</b> Die Kapitalgesellschaft ist ein eigenständiges Steuersubjekt. Sie zahlt auf ihren Gewinn KSt (15 %) + GewSt (ca. 14–17 %). Wird der verbleibende Gewinn ausgeschüttet, zahlt der Gesellschafter zusätzlich <b>Kapitalertragsteuer (25 % + SolZ)</b> oder – bei Betriebsvermögen – ESt nach dem Teileinkünfteverfahren (§ 3 Nr. 40 EStG). Das nennt sich wirtschaftliche Doppelbelastung.'},
  {q:'Was versteht man unter einer „verdeckten Gewinnausschüttung" (vGA, § 8 Abs. 3 S. 2 KStG)?',opts:['Einen versteckten Gewinn, den die GmbH nicht in der Buchhaltung erfasst','Eine Vermögensminderung oder verhinderte Vermögensmehrung bei der Kapitalgesellschaft, die durch das Gesellschaftsverhältnis veranlasst ist und nicht auf einem ordnungsgemäßen Gewinnverteilungsbeschluss beruht','Ein Gewinn, der an Dritte statt an Gesellschafter ausgeschüttet wird','Jede Zahlung der GmbH an ihren Gesellschafter'],ans:1,lvl:3,explain:'<b>vGA (§ 8 Abs. 3 S. 2 KStG):</b> Klassisches Prüfungsbeispiel: GmbH zahlt Gesellschafter-Geschäftsführer ein überhöhtes Gehalt. Der Überbestandteil ist keine Betriebsausgabe, sondern wird dem Gewinn der GmbH hinzugerechnet (→ mehr KSt) und beim Gesellschafter als Kapitalertrag behandelt (→ KapESt). Maßstab ist der <b>ordentliche und gewissenhafter Geschäftsleiter</b>.'},
  {q:'Wie werden Gewinne einer GbR oder OHG besteuert?',opts:['Die Gesellschaft zahlt KSt auf den Gesamtgewinn','Transparenzprinzip: Gewinn wird den Gesellschaftern anteilig zugerechnet und von diesen im Rahmen der Einkommensteuer versteuert (§§ 179, 180 AO)','Die Gesellschaft wählt zwischen KSt und ESt','Gewinne von Personengesellschaften sind steuerfrei'],ans:1,lvl:1,explain:'<b>Transparenzprinzip:</b> Personengesellschaften (GbR, OHG, KG) sind keine eigenständigen Steuersubjekte für ESt/KSt. Stattdessen werden die Gewinne einheitlich und gesondert festgestellt (§§ 179, 180 AO) und den Gesellschaftern zugerechnet. Diese versteuern ihren Anteil dann individuell – ggf. als gewerbliche Einkünfte (§ 15 EStG) inklusive GewSt.'},
  {q:'Was ist das „Teileinkünfteverfahren" (§ 3 Nr. 40 EStG)?',opts:['Ein Verfahren bei dem nur ein Teil des Einkommens besteuert wird, wenn man mehrere Jobs hat','Dividenden und Gewinne aus der Veräußerung von Anteilen an Kapitalgesellschaften sind nur zu 60 % steuerpflichtig, 40 % sind steuerfrei – gilt für betriebliche Beteiligungen','Eine Methode zur Halbierung der Steuerlast bei Selbstständigen','Besteuerung von Teilzeitarbeit'],ans:1,lvl:2,explain:'<b>§ 3 Nr. 40 EStG – Teileinkünfteverfahren:</b> Bei Beteiligungen im Betriebsvermögen werden Dividenden und Veräußerungsgewinne nur zu 60 % besteuert (40 % steuerfrei), um die Doppelbelastung durch KSt und ESt abzumildern. Spiegelbildlich sind Aufwendungen nur zu 60 % abziehbar (§ 3c Abs. 2 EStG). Gilt nicht für Privatvermögen – dort greift § 32d EStG (25 % KapESt, Abgeltungsteuer).'},
  {q:'Was ist eine „Organschaft" im Körperschaftsteuerrecht (§§ 14 ff. KStG)?',opts:['Eine Fusion zweier GmbHs','Eine steuerliche Einheit zwischen Organgesellschaft (Tochter) und Organträger (Mutter): Das Einkommen der Tochter wird dem Organträger zugerechnet und dort versteuert','Eine Pflicht, einen Steuerberater zu beauftragen','Die Verbindung zwischen Finanzamt und GmbH'],ans:1,lvl:3,explain:'<b>§§ 14–19 KStG – Organschaft:</b> Voraussetzungen: (1) finanzielle Eingliederung (Organträger hält Mehrheit), (2) Ergebnisabführungsvertrag (EAV) für mind. 5 Jahre. Folge: Das Einkommen der Organgesellschaft wird dem Organträger zugerechnet und dort versteuert – Verluste können konzernweit verrechnet werden. Dies ist eine wichtige Gestaltungsmöglichkeit in Unternehmensgruppen.'},
  {q:'Wann muss eine GmbH Kapitalertragsteuer (KapESt) einbehalten?',opts:['Nur bei Dividenden über 10.000 €','Bei jeder Gewinnausschüttung an Gesellschafter – KapESt 25 % + SolZ, einzubehalten und abzuführen durch die GmbH als Schuldner der Kapitalerträge','Nur wenn der Gesellschafter mehr als 50 % hält','Nie – die GmbH zahlt nur KSt'],ans:1,lvl:2,explain:'<b>§§ 43, 44 EStG – KapESt:</b> Die GmbH ist verpflichtet, bei Gewinnausschüttungen <b>25 % KapESt + 5,5 % SolZ</b> einzubehalten und abzuführen (§§ 43, 44 EStG). Hinweis: Seit dem SolZ-Abbaugesetz 2021 entfällt der SolZ für die meisten natürlichen Personen – der <b>Einbehalt durch die GmbH bleibt trotzdem verpflichtend</b>; eine eventuelle Erstattung erfolgt über die Veranlagung des Gesellschafters. Im Privatvermögen: Abgeltungsteuer (§ 32d EStG). Im Betriebsvermögen: Teileinkünfteverfahren, KapESt wird angerechnet.'},
  {q:'Was versteht man unter dem „Verlustabzug" (§ 10d EStG) bei Kapitalgesellschaften?',opts:['Verluste einer GmbH werden auf die Gesellschafter übertragen','Verluste können ins Vorjahr zurückgetragen (1 Mio. €) oder in Folgejahre vorgetragen werden – beim Vortrag gilt die Mindestbesteuerung (Gewinne bis 1 Mio. € voll, darüber nur 60 % verrechenbar)','Verluste einer Kapitalgesellschaft sind nicht abzugsfähig','Verluste werden automatisch mit der Gewerbesteuer verrechnet'],ans:1,lvl:2,explain:'<b>§ 10d EStG / § 8 KStG:</b> Verlustrücktrag: max. <b>1 Mio. €</b> ins Vorjahr (Grundregel § 10d EStG; für VZ 2020–2023 galt temporär 10 Mio. € – Corona-Hilfe). Verlustvortrag: zeitlich unbegrenzt, aber <b>Mindestbesteuerung</b> (§ 10d Abs. 2): Gewinne bis 1 Mio. € voll verrechenbar, darüber nur 60 %. Diese Regelung kann Liquiditätsprobleme verursachen. Cave: <b>§ 8c KStG</b> – bei schädlichem Anteilserwerb über 50 % können Verlustvorträge anteilig oder vollständig untergehen (Mantelkauf-Risiko).'},
];

// === NEU: KURIOSES (Wahr oder Falsch) ===
const D_KURIOS = [
  {q:'Lottogewinne sind in Deutschland vollständig steuerfrei.',icon:'🎰',ans:true,lvl:1,explain:'WAHR! Glücksspielgewinne aus staatlich zugelassenen Lotterien sind <b>nicht einkommensteuerbar</b> – sie erfüllen keine der 7 Einkunftsarten des § 2 EStG. Es gibt keine gesonderte Steuerbefreiungsnorm; sie sind schlicht kein Einkommen im Sinne des EStG. Vorsicht: Die <b>Lotteriesteuer</b> (ca. 16,66 % auf den Gesamteinsatz, Rennwett- und Lotteriegesetz) zahlt der Veranstalter – das ist aber eine eigene Verkehrsteuer, keine Vorauszahlung auf den Gewinn des Gewinners. Und: Zinsen auf den Gewinn danach sind Kapitalerträge nach § 20 EStG!'},
  {q:'Die Sektsteuer wurde 1902 eingeführt, um die Kaiserliche Marine zu finanzieren.',icon:'🍾',ans:true,lvl:1,explain:'WAHR! Kaiser Wilhelm II. ließ die Schaumweinsteuer einführen, um seine Flotte zu bezahlen. Die Kaiserliche Marine ist längst Geschichte – die Sektsteuer gibt es bis heute: 136 € pro 100 Liter Sekt.'},
  {q:'Bis in die 1990er Jahre konnten Bestechungsgelder in Deutschland als Betriebsausgaben abgesetzt werden.',icon:'💸',ans:true,lvl:2,explain:'WAHR – und erschreckend! Bis 1999 konnten Unternehmen Bestechungsgelder im Ausland als „nützliche Aufwendungen" steuerlich geltend machen. Das Korruptionsbekämpfungsgesetz 1999 machte dem ein Ende (§ 4 Abs. 5 Nr. 10 EStG).'},
  {q:'Ein normaler Urlaubstrip nach Mallorca lässt sich als Fortbildungskosten steuerlich absetzen, wenn man dabei „etwas gelernt" hat.',icon:'✈️',ans:false,lvl:1,explain:'FALSCH. Privatausgaben sind nicht absetzbar. Selbst wenn man Eindrücke sammelt – kein Abzug. Ein echter, belegter Berufskongress im Ausland mit überwiegend beruflichem Bezug wäre anders. Das Finanzamt ist hier sehr genau.'},
  {q:'Die Steuer-Identifikationsnummer eines Menschen bleibt noch 20 Jahre nach seinem Tod gespeichert.',icon:'🪪',ans:true,lvl:2,explain:'WAHR! § 139b Abs. 5 AO schreibt vor: Die Steuer-ID wird 20 Jahre nach dem Tod gespeichert. Das ermöglicht die nachträgliche steuerliche Abwicklung des Nachlasses und eventuelle spätere Prüfungen.'},
  {q:'In Deutschland gibt es eine eigene Steuer speziell auf Kaffee.',icon:'☕',ans:true,lvl:1,explain:'WAHR! Das Kaffeesteuergesetz (KaffeeStG) erhebt auf Röstkaffee 2,19 €/kg und auf löslichen Kaffee 4,78 €/kg. Sie bringt dem Bund ca. 1 Mrd. € pro Jahr. Tee hingegen ist in Deutschland steuerfrei – historisch gewachsen!'},
  {q:'Schenkungen zwischen Eheleuten sind bis zu 500.000 € alle 10 Jahre steuerfrei.',icon:'🎁',ans:true,lvl:2,explain:'WAHR! § 16 ErbStG gewährt Ehepartnern (und eingetragenen Lebenspartnern) einen Freibetrag von 500.000 € bei Schenkungen und Erbschaften. Dieser Freibetrag erneuert sich alle 10 Jahre – ein legales Steuergestaltungsinstrument!'},
  {q:'Der Spitzensteuersatz der Einkommensteuer lag in Deutschland nach dem Zweiten Weltkrieg bei über 90 %.',icon:'📈',ans:true,lvl:1,explain:'WAHR! Unter alliierter Kontrolle nach 1945 wurden zeitweise Spitzensteuersätze von bis zu 95 % erhoben. In den 1970er Jahren: noch 56 %. Heute: <b>42 % Spitzensteuersatz</b> (ab 69.879 €) und <b>45 % „Reichensteuer"</b> (ab 279.512 €) <span class="new26">Stand 2026</span>.'},
  {q:'Kinder in Deutschland erhalten bereits bei ihrer Geburt eine Steuer-Identifikationsnummer.',icon:'👶',ans:true,lvl:1,explain:'WAHR! Jedes in Deutschland gemeldete Kind erhält automatisch bei seiner ersten Anmeldung eine lebenslange 11-stellige Steuer-ID (§ 139b AO). Man ist also quasi schon als Säugling beim Finanzamt registriert!'},
  {q:'Tierkosten für Haustiere lassen sich grundsätzlich beim Finanzamt absetzen, wenn man viel von zu Hause aus arbeitet.',icon:'🐕',ans:false,lvl:1,explain:'FALSCH. Haustierkosten für rein privat gehaltene Tiere sind nicht abzugsfähig – auch nicht im Homeoffice. Nur bei nachgewiesener beruflicher Nutzung (z.B. echter Wachhund fürs Betriebsgelände, Blindenhund für Sehbehinderte) sind Kosten anteilig absetzbar.'},
  {q:'In Deutschland gibt es eine Steuer, die speziell auf Spielautomaten erhoben wird.',icon:'🎮',ans:true,lvl:1,explain:'WAHR! Die Vergnügungssteuer (auch Spielgerätesteuer) ist eine Gemeindesteuer auf Spielautomaten und andere Unterhaltungsgeräte. Jede Gemeinde kann sie selbst regeln – ähnlich wie die Hundesteuer.'},
  {q:'Ein Finderlohn von 1.000 € (z.B. für eine zurückgegebene Geldbörse) ist in Deutschland vollständig steuerfrei.',icon:'💰',ans:false,lvl:2,explain:'FALSCH. Finderlöhne sind als sonstige Einkünfte (§ 22 Nr. 3 EStG) steuerpflichtig, soweit sie im Jahr 256 € übersteigen. Wer also 1.000 € Finderlohn bekommt, muss den Überschuss grundsätzlich versteuern!'},
  {q:'Die Kirchensteuer wird in Deutschland direkt vom Arbeitgeber einbehalten und ans Finanzamt abgeführt.',icon:'⛪',ans:true,lvl:2,explain:'WAHR! Die Kirchensteuer (8 % in Bayern & BW, 9 % in anderen Bundesländern der Einkommensteuer) wird vom Arbeitgeber wie die Lohnsteuer direkt abgeführt. Der Staat kassiert dafür eine Gebühr (Verwaltungskostenbeitrag) von den Kirchen.'},
  {q:'Wer Bitcoins länger als 1 Jahr hält und dann verkauft, muss den Gewinn in Deutschland nicht versteuern.',icon:'₿',ans:true,lvl:2,explain:'WAHR! Private Veräußerungsgeschäfte (§ 23 EStG) bei Kryptowährungen sind nach einer Haltefrist von mehr als einem Jahr steuerfrei. Verkauf innerhalb der Jahresfrist → sonstige Einkünfte (§ 22 Nr. 2 EStG) mit persönlichem Steuersatz – Freigrenze 600 €/Jahr.'},
  {q:'Wer eine Erbschaft macht, muss immer Erbschaftsteuer zahlen.',icon:'🏛️',ans:false,lvl:2,explain:'FALSCH! Es gibt erhebliche Freibeträge (§ 16 ErbStG): Ehepartner 500.000 €, Kinder 400.000 €, Enkel 200.000 € – alle 10 Jahre nutzbar. Viele Erbschaften bleiben damit vollständig steuerfrei. Nur bei großen Vermögen oder entfernten Verwandten wird es ernst.'},
  {q:'Steuergesetze dürfen rückwirkend in Kraft gesetzt werden und vergangene Jahre neu besteuern.',icon:'⚠️',ans:false,lvl:3,explain:'FALSCH (grundsätzlich). Das Rückwirkungsverbot schützt Steuerpflichtige: Eine unechte Rückwirkung (Eingriff in laufende Sachverhalte) ist unter engen Voraussetzungen möglich, eine echte Rückwirkung (nachträgliche Besteuerung abgeschlossener Sachverhalte) ist verfassungsrechtlich fast nie zulässig (Art. 20 GG, Vertrauensschutzprinzip).'},
  // ===== NEU: VERFAHRENSRECHT TIEFER (15 Fragen) =====
  {q:'Hat ein Einspruch gegen einen Steuerbescheid automatisch aufschiebende Wirkung?',opts:['Ja – mit Einspruch muss nicht gezahlt werden','Nein – der Einspruch hat keine aufschiebende Wirkung (§ 361 Abs. 1 AO)','Nur bei Beträgen über 5.000 €','Nur wenn das Finanzamt zustimmt'],ans:1,lvl:2,explain:'<b>§ 361 Abs. 1 AO:</b> Ein Einspruch hemmt die Vollziehung <b>nicht</b>. Der Steuerpflichtige muss die Steuer trotzdem zahlen. Wer nicht zahlen will, muss gesondert die <b>Aussetzung der Vollziehung (AdV)</b> beantragen – beim Finanzamt oder Finanzgericht.'},
  {q:'Was ist die Aussetzung der Vollziehung (AdV) nach § 361 AO?',opts:['Eine automatische Folge des Einspruchs','Das Finanzamt stundet die Steuer auf 10 Jahre','Das Finanzamt setzt auf Antrag die Zahlung aus, wenn ernstliche Zweifel an der Rechtmäßigkeit bestehen','Ein gerichtliches Zahlungsverbot'],ans:2,lvl:2,explain:'<b>AdV (§ 361 AO)</b>: Das Finanzamt kann auf Antrag die Vollziehung aussetzen, wenn <b>ernstliche Zweifel</b> an der Rechtmäßigkeit des Bescheids bestehen. Solange die AdV gilt, muss der streitige Betrag nicht gezahlt werden. Bei Ablehnung durch das FA kann man auch beim Finanzgericht (§ 69 FGO) AdV beantragen.'},
  {q:'Was kann das Finanzamt in einer Einspruchsentscheidung tun?',opts:['Nur dem Einspruch stattgeben oder ihn zurückweisen','Einspruch zurückweisen, stattgeben – oder den Bescheid auch zulasten des Steuerpflichtigen verbösern (§ 367 Abs. 2 AO)','Einen neuen Bescheid erlassen ohne die alten Fehler zu beachten','Strafen verhängen'],ans:1,lvl:3,explain:'<b>Verböserung (§ 367 Abs. 2 AO):</b> Das Finanzamt kann den angefochtenen Bescheid auch <b>zulasten</b> des Einspruchsführers ändern – also mehr Steuern festsetzen als vorher! Voraussetzung: Das FA muss vorher auf diese Möglichkeit hinweisen. Der Steuerpflichtige kann dann den Einspruch zurücknehmen.'},
  {q:'Was ist eine Prüfungsanordnung (§ 196 AO)?',opts:['Eine interne Dienstanweisung des Finanzamts','Der Verwaltungsakt, mit dem das Finanzamt eine Außenprüfung offiziell ankündigt','Ein Beschluss des Finanzgerichts','Eine formlose Mitteilung per E-Mail'],ans:1,lvl:2,explain:'<b>Prüfungsanordnung (§ 196 AO)</b>: Die Außenprüfung beginnt formal mit diesem <b>Verwaltungsakt</b> (nicht nur einer Bitte!), der dem Steuerpflichtigen <b>mit angemessener Frist vorher</b> zuzustellen ist. Sie muss u.a. den Prüfungszeitraum und die zu prüfenden Steuerarten nennen. Sie kann mit Einspruch angefochten werden.'},
  {q:'Welche Wirkung hat die Bekanntgabe einer Prüfungsanordnung auf die Verjährung?',opts:['Keine – die Verjährung läuft unbeeinflusst weiter','Die Verjährung ist ab Bekanntgabe bis zum Abschluss der Prüfung gehemmt – Ablaufhemmung § 171 Abs. 4 AO','Die Verjährung wird auf 10 Jahre verlängert','Der Prüfungszeitraum verjährt sofort'],ans:1,lvl:3,explain:'<b>Ablaufhemmung § 171 Abs. 4 AO:</b> Die Festsetzungsfrist läuft nicht ab, solange eine Außenprüfung stattfindet – und zwar für die geprüften Steuerarten. Das Finanzamt kann also auch nach Ablauf der 4-Jahres-Frist noch Steuern nachfordern, wenn die Prüfung läuft.'},
  {q:'Wann darf das Finanzamt einen bestandskräftigen Bescheid nach § 173 Abs. 1 Nr. 1 AO ändern?',opts:['Immer, wenn es neue Erkenntnisse gibt','Nur wenn neue Tatsachen oder Beweismittel nachträglich bekannt werden, die zu einer <b>höheren</b> Steuer führen','Nur auf Antrag des Steuerpflichtigen','Nur innerhalb von 1 Monat nach Erlass des Bescheids'],ans:1,lvl:2,explain:'<b>§ 173 Abs. 1 Nr. 1 AO:</b> Das FA kann <b>zulasten</b> des Steuerpflichtigen ändern, wenn nachträglich Tatsachen oder Beweismittel bekannt werden, die zu einer höheren Steuer führen. „Neu" bedeutet: dem FA bei Erlass des ursprünglichen Bescheids nicht bekannt. Beispiel: Das FA erfährt von nicht erklärten Mieteinnahmen.'},
  {q:'Unter welcher Bedingung darf das FA nach § 173 Abs. 1 Nr. 2 AO einen Bescheid zugunsten des Steuerpflichtigen ändern?',opts:['Immer, wenn neue Tatsachen auftauchen','Nur wenn den Steuerpflichtigen kein grobes Verschulden am nachträglichen Bekanntwerden trifft','Nur wenn die Änderung mehr als 500 € ausmacht','Nur innerhalb der Einspruchsfrist'],ans:1,lvl:3,explain:'<b>§ 173 Abs. 1 Nr. 2 AO:</b> Zugunsten des Steuerpflichtigen ist die Änderung nur möglich, wenn ihn <b>kein grobes Verschulden</b> trifft. Wer z.B. einfach vergessen hat, einen Beleg einzureichen, darf trotzdem noch korrigiert werden. Wer aber trotz Wissen bewusst Belege zurückgehalten hat, verliert sein Recht auf die Korrektur.'},
  {q:'Was ist eine „offenbare Unrichtigkeit" nach § 129 AO?',opts:['Jeder inhaltliche Fehler eines Steuerbescheids','Rein mechanische Fehler (Rechen-, Schreibfehler) des Finanzamts, die sofort erkennbar sind','Jeder Fehler, der mehr als 100 € ausmacht','Falsche Rechtsanwendung durch das Finanzamt'],ans:1,lvl:2,explain:'<b>§ 129 AO:</b> Rein mechanische Fehler – Tipp-, Rechen- oder Übertragungsfehler – die dem FA bei Erlass des Bescheids unterlaufen sind und <b>offenbar erkennbar</b> sind, können jederzeit berichtigt werden. Kein neues Besteuerungsmerkmal darf dabei berücksichtigt werden. Entscheidend: Der Fehler muss sich aus dem Akt selbst ergeben.'},
  {q:'Was ist ein Grundlagenbescheid (§ 171 Abs. 10 / § 175 AO)?',opts:['Ein Bescheid, der grundsätzlich nie geändert werden kann','Ein Bescheid, der für einen anderen Bescheid verbindliche Grundlagen festsetzt – z.B. Feststellungsbescheid für Personengesellschaften','Ein Bescheid über die Grundsteuer','Der erste Bescheid nach einer Außenprüfung'],ans:1,lvl:3,explain:'<b>Grundlagenbescheid (§ 175 Abs. 1 Nr. 1 AO):</b> Wenn ein Bescheid auf einem anderen Bescheid aufbaut (z.B. Einkommensteuer auf einem Feststellungsbescheid für eine GbR), muss der abgeleitete Bescheid geändert werden, wenn sich der Grundlagenbescheid ändert – auch wenn er bereits bestandskräftig ist. Die Änderungsfrist beträgt 2 Jahre ab Bekanntgabe des Grundlagenbescheids.'},
  {q:'Was sind Voraussetzungen für die Vollstreckung durch das Finanzamt (§ 254 AO)?',opts:['Vollstreckung ist immer sofort möglich','Fälligkeit, Bekanntgabe einer Mahnung (Leistungsgebot), Ablauf einer Schonfrist von 1 Woche','Nur möglich nach Urteil des Finanzgerichts','Immer erst nach Ablauf von 1 Monat'],ans:1,lvl:2,explain:'<b>§ 254 AO Vollstreckungsvoraussetzungen:</b> Die Steuer muss (1) <b>fällig</b> sein, (2) ein <b>Leistungsgebot</b> muss bekannt gegeben worden sein, (3) die <b>Schonfrist von 1 Woche</b> muss abgelaufen sein. Erst dann darf das FA vollstrecken (z.B. durch Pfändung oder Kontopfändung).'},
  {q:'Was ist der Unterschied zwischen Stundung (§ 222 AO) und Erlass (§ 227 AO)?',opts:['Kein Unterschied – beide bedeuten, die Steuer muss nicht gezahlt werden','Stundung = vorübergehende Verschiebung des Zahlungstermins; Erlass = dauerhaftes Erlöschen der Steuerschuld','Stundung gilt nur für Einkommensteuer; Erlass für alle Steuerarten','Erlass ist immer kostenlos, Stundung kostet Zinsen'],ans:1,lvl:2,explain:'<b>§ 222 AO Stundung:</b> Das FA kann die Zahlung <b>aufschieben</b> – der Anspruch bleibt bestehen, nur der Fälligkeitstermin wird verschoben. Stundungszinsen nach § 234 AO können anfallen. <b>§ 227 AO Erlass:</b> Die Steuerschuld wird ganz oder teilweise <b>dauerhaft aufgehoben</b> – aus Billigkeit (persönliche oder sachliche Unbilligkeit). Strenger Maßstab!'},
  {q:'Was bedeutet Gesamtschuldnerschaft bei zusammenveranlagten Ehegatten (§ 44 AO)?',opts:['Jeder Ehegatte zahlt nur seinen eigenen Anteil','Das FA muss von beiden gleichermaßen zahlen','Beide Ehegatten schulden die festgesetzte Einkommensteuer in voller Höhe – das FA kann von jedem die volle Summe verlangen','Nur der Höherverdienende haftet'],ans:2,lvl:3,explain:'<b>§ 44 AO:</b> Bei Gesamtschuldnern (z.B. zusammenveranlagte Ehegatten) schuldet jeder die gesamte Steuer. Das FA kann sich aussuchen, von wem es die Zahlung verlangt – solange nicht der Gesamtbetrag überschritten wird. Oft nutzt das FA Vollstreckungsschutzklauseln (§ 268 AO), damit jeder nur seinen „Anteil" zahlen muss.'},
  {q:'Was ist eine Schätzung der Besteuerungsgrundlagen nach § 162 AO?',opts:['Eine freundliche Schätzung zugunsten des Steuerpflichtigen','Das FA darf Einnahmen und Ausgaben so hoch schätzen, wie es will','Wenn Buchführung fehlt oder unzuverlässig ist, schätzt das FA – dabei orientiert es sich an Richtwerten, Branchendaten und Plausibilitäten','Eine verbindliche Auskunft des FA zur Steuerhöhe'],ans:2,lvl:2,explain:'<b>§ 162 AO Schätzung:</b> Das FA darf (und muss) schätzen, wenn der Steuerpflichtige keine ordnungsgemäße Buchführung hat oder Steuererklärungen fehlen. Basis: Branchendurchschnitte, Eigenkapitalvergleich, Kassenprüfung. Die Schätzung fällt erfahrungsgemäß nicht zugunsten des Steuerpflichtigen aus – das ist ein starker Anreiz für ordentliche Buchhaltung!'},
  {q:'Was ist das Mitwirkungspflicht-Prinzip im Steuerrecht (§ 90 AO)?',opts:['Das FA muss alle Steuern selbst berechnen','Steuerpflichtige haben umfangreiche Mitwirkungspflichten – z.B. Steuererklärungen abgeben, Unterlagen vorlegen, Fragen beantworten','Steuerpflichtige dürfen jederzeit die Zusammenarbeit verweigern','Mitwirkung ist nur bei Betriebsprüfungen Pflicht'],ans:1,lvl:1,explain:'<b>§ 90 AO Mitwirkungspflicht:</b> Im Steuerrecht gilt der Untersuchungsgrundsatz (§ 88 AO) – das FA ermittelt von Amts wegen. Aber: Steuerpflichtige haben erhebliche <b>Mitwirkungspflichten</b> (§ 90 AO) – Steuererklärungen, Buchführung, Vorlage von Unterlagen. Bei Auslandsbeziehungen (§ 90 Abs. 2 AO) noch verstärkte Pflichten.'},
  {q:'Was ist eine verbindliche Auskunft nach § 89 Abs. 2 AO?',opts:['Eine kostenfreie Beratung durch das FA','Eine kostenpflichtige, rechtlich bindende Zusage des FA über die steuerliche Behandlung eines geplanten Sachverhalts','Eine Auskunft, die nur für das laufende Jahr gilt','Ein Steuerberatungsersatz'],ans:1,lvl:3,explain:'<b>Verbindliche Auskunft (§ 89 Abs. 2 AO):</b> Wer plant, einen bestimmten Sachverhalt zu verwirklichen, kann das FA vorab nach der steuerlichen Beurteilung fragen. Die Antwort ist <b>bindend</b> – wenn der Sachverhalt so realisiert wird wie angekündigt. Kosten richten sich nach dem Gegenstandswert (GNotKG). Wichtig für Unternehmen bei komplexen Strukturen.'},
];
const D_RECHT = [
  {q:'Welchem Rechtsgebiet gehört das Steuerrecht an?',opts:['Privatrecht','Öffentliches Recht','Handelsrecht','Zivilprozessrecht'],ans:1,lvl:1,explain:'Das Steuerrecht ist <b>Öffentliches Recht</b>. Es regelt das Verhältnis zwischen Staat (Finanzverwaltung) und Bürger. Der Staat kann Steuern einseitig festsetzen – das nennt man Über- und Unterordnungsverhältnis.'},
  {q:'Was kennzeichnet das Privatrecht?',opts:['Staat hat stets Vorrang vor Bürgern','Gleichordnung – regelt Verhältnisse zwischen gleichberechtigten Privaten','Gilt nur für Unternehmen ab 10 Mitarbeitern','Wird allein vom Bundesverfassungsgericht ausgelegt'],ans:1,lvl:1,explain:'<b>Gleichordnung</b>: Im Privatrecht sind beide Parteien gleichgestellt – kein "Über-" und kein "Untergeordneter". Klassisch: zwei Bürger, die miteinander einen Kaufvertrag schließen. Niemand kann dem anderen einseitig Pflichten auferlegen.'},
  {q:'Das Bürgerliche Gesetzbuch (BGB) mit über 2.300 Paragraphen gehört zum…',opts:['Öffentlichen Recht','Verwaltungsrecht','Privatrecht','Verfassungsrecht'],ans:2,lvl:1,explain:'Das <b>BGB ist Privatrecht</b>. Es regelt alle zentralen Lebensbereiche zwischen Privatpersonen: Kaufverträge, Mietrecht, Erbrecht, Familienrecht, Schadensersatz, Vertragsfreiheit usw.'},
  {q:'An welchem Gericht werden Steuerstreitigkeiten verhandelt?',opts:['Amtsgericht','Landgericht','Finanzgericht','Bundesgerichtshof'],ans:2,lvl:1,explain:'Steuerstreitigkeiten gehören vor das <b>Finanzgericht</b> – der Rechtsweg im Öffentlichen Recht. Erst nach erfolglosem Einspruch beim Finanzamt kann man klagen. Letzte Instanz: <b>Bundesfinanzhof (BFH)</b> in München.'},
  {q:'Was bedeutet das Legalitätsprinzip im Steuerrecht (§ 3 AO, Art. 20 GG)?',opts:['Das Finanzamt darf Steuern frei nach Ermessen festlegen','Keine Steuer ohne gesetzliche Grundlage','Steuerpflicht entsteht automatisch ab 18 Jahren','Alle Steuerbescheide sind vorläufig'],ans:1,lvl:1,explain:'<b>Keine Steuer ohne Gesetz!</b> Jede Steuer muss durch ein formelles Gesetz geregelt sein. Das Finanzamt darf nur erheben, was das Gesetz erlaubt. Das schützt Bürger vor willkürlicher Besteuerung.'},
  {q:'Was ist ein Steuerbescheid rechtlich gesehen?',opts:['Ein privatrechtlicher Vertrag zwischen Finanzamt und Bürger','Ein Verwaltungsakt nach § 118 AO','Eine Empfehlung des Finanzamts','Ein Gerichtsurteil'],ans:1,lvl:1,explain:'Ein Steuerbescheid ist ein <b>Verwaltungsakt (§ 118 AO)</b> – eine einseitige, hoheitliche Regelung der Behörde mit Außenwirkung. Gegen ihn gibt es Rechtsschutz: Einspruch (1 Monat) → Klage beim Finanzgericht → Revision beim BFH.'},
  {q:'Wie stehen Beamte der Finanzverwaltung rechtlich zum Staat?',opts:['Privatrechtlicher Arbeitsvertrag wie alle Arbeitnehmer','Öffentlich-rechtliches Dienstverhältnis – Ernennung, kein Arbeitsvertrag','Gleiche Rechte und Pflichten wie Angestellte im Privatsektor','Freier Mitarbeitervertrag nach BGB'],ans:1,lvl:2,explain:'Beamte stehen in einem <b>öffentlich-rechtlichen Dienst- und Treueverhältnis</b> zum Staat. Sie werden durch Urkunde ernannt (nicht eingestellt). Vorteile: Unkündbarkeit, Pension. Pflichten: Loyalität, kein Streikrecht.'},
  {q:'Das Grundgesetz (GG) der Bundesrepublik gehört zum…',opts:['Privatrecht','Öffentlichen Recht (Verfassungsrecht)','Handelsrecht','Zivilprozessrecht'],ans:1,lvl:1,explain:'Das Grundgesetz ist <b>Verfassungsrecht – das höchste Öffentliche Recht</b>. Es regelt Grundrechte, Staatsaufbau und Gewaltenteilung. Alle anderen Gesetze, auch Steuergesetze, müssen verfassungskonform sein.'},
  {q:'Was ist der "Vorbehalt des Gesetzes" im Öffentlichen Recht?',opts:['Bürger dürfen nur machen, was im Gesetz ausdrücklich erlaubt ist','Staatliche Eingriffe in Grundrechte bedürfen einer gesetzlichen Grundlage','Gesetze müssen zuerst vom Bundesrat ratifiziert werden','Steuern brauchen keine gesetzliche Grundlage'],ans:1,lvl:2,explain:'<b>Vorbehalt des Gesetzes</b>: Staatliche Eingriffe in Freiheit und Eigentum (z.B. Steuererhebung!) brauchen eine gesetzliche Grundlage. Im Steuerrecht bedeutet das: ohne Steuergesetz keine Steuerpflicht. Ein wichtiges Schutzprinzip!'},
  {q:'Welche Rechtsgebiete sind dem Öffentlichen Recht zuzuordnen?',opts:['Kaufrecht, Mietrecht, Erbrecht (BGB)','Steuerrecht, Beamtenrecht, Verwaltungsrecht','BGB, HGB, GmbHG','Familienrecht, Deliktsrecht, Schuldrecht'],ans:1,lvl:1,explain:'<b>Steuerrecht, Beamtenrecht und Verwaltungsrecht</b> sind Öffentliches Recht – sie regeln alle das Verhältnis Staat↔Bürger. Kaufrecht (BGB), Mietrecht (BGB) und Erbrecht (BGB) sind Privatrecht.'},
  {q:'Was versteht man im Öffentlichen Recht unter einem "Ermessensspielraum" der Behörde?',opts:['Die Behörde darf nach freiem Belieben handeln','Die Behörde hat bei der gesetzlichen Grundlage einen Entscheidungsspielraum, den sie pflichtgemäß ausüben muss','Steuerpflichtige können eigene Regeln aufstellen','Nur Privatrecht kennt Ermessen'],ans:1,lvl:2,explain:'Im Öffentlichen Recht bedeutet <b>Ermessen</b>, dass das Gesetz der Behörde einen Handlungsspielraum einräumt – sie muss ihn aber pflichtgemäß, d.h. fehlerfrei (verhältnismäßig, gleichmäßig, zweckgerecht) ausüben. Ermessensfehler (Ermessensüberschreitung, -missbrauch, -nichtgebrauch) machen eine Entscheidung rechtswidrig.'},
  {q:'Was unterscheidet einen Verwaltungsakt von einer Allgemeinverfügung?',opts:['Beide sind identisch, nur verschiedene Namen','Ein VA regelt einen Einzelfall; eine Allgemeinverfügung richtet sich an einen nach allgemeinen Merkmalen bestimmten Personenkreis','Ein VA ist privates Recht, eine Allgemeinverfügung Öffentliches Recht','Allgemeinverfügungen sind nur im Strafrecht relevant'],ans:1,lvl:3,explain:'<b>Verwaltungsakt (§ 118 AO / § 35 VwVfG):</b> Regelung eines Einzelfalls für eine bestimmte Person. <b>Allgemeinverfügung:</b> Ebenfalls VA-Kategorie, aber für einen unbestimmten Personenkreis (z.B. Straßenbenutzungsverbote). Im Steuerrecht relevanter Grenzfall: ein an alle Steuerpflichtigen eines Sektors gerichtetes Informationsschreiben.'},
  {q:'Was ist das Verhältnismäßigkeitsprinzip und wo spielt es im Steuerrecht eine Rolle?',opts:['Steuergesetze müssen genau gleich viel Einnahmen bringen wie sie kosten','Staatliche Eingriffe müssen geeignet, erforderlich und angemessen sein','Das Finanzamt muss immer die günstigste Lösung für den Steuerpflichtigen wählen','Gilt nur im Strafrecht, nicht im Steuerrecht'],ans:1,lvl:3,explain:'Das <b>Verhältnismäßigkeitsprinzip (Art. 20 GG)</b> gilt auch im Steuerrecht. Ein Steuergesetz muss einen legitimen Zweck verfolgen (geeignet), der Zweck darf nicht durch mildere Mittel erreichbar sein (erforderlich) und die Belastung muss zumutbar sein (angemessen). Das BVerfG hat u. a. die Halbteilungsgrundsatz-Diskussion damit geführt.'},,
  {q:'Was regelt § 433 BGB?',opts:['Den Kaufvertrag – Verkäufer schuldet Übergabe und Eigentumsverschaffung, Käufer schuldet Kaufpreis','Den Werkvertrag','Die Schenkung','Den Mietvertrag'],ans:0,lvl:1,explain:'<b>§ 433 BGB – Kaufvertrag:</b> Der Verkäufer ist verpflichtet, die Sache zu übergeben und dem Käufer das Eigentum zu verschaffen (frei von Sach- und Rechtsmängeln). Der Käufer ist verpflichtet, den Kaufpreis zu zahlen und die Sache abzunehmen. Grundlage aller privatrechtlichen Kaufgeschäfte.'},
  {q:'Was ist der Unterschied zwischen Anfechtbarkeit und Nichtigkeit eines Rechtsgeschäfts?',opts:['Kein Unterschied – beides bedeutet das Rechtsgeschäft ist unwirksam','Nichtigkeit: von Anfang an (ex tunc) unwirksam (z.B. § 105 BGB Geschäftsunfähiger); Anfechtbarkeit: zunächst wirksam, kann aber durch Anfechtungserklärung rückwirkend vernichtet werden (§ 142 BGB)','Anfechtbarkeit ist stärker als Nichtigkeit','Nichtigkeit ist nur bei Verbraucherverträgen möglich'],ans:1,lvl:2,explain:'<b>Nichtigkeit (§ 134, 138 BGB):</b> Das Geschäft ist von Anfang an unwirksam – keine Anfechtungserklärung nötig. <b>Anfechtbarkeit (§§ 119 ff. BGB):</b> Das Geschäft ist zunächst wirksam. Wird angefochten (z.B. wegen Irrtums, arglistiger Täuschung), gilt es als von Anfang an nichtig (§ 142 BGB). Wichtig: Anfechtungsfrist beachten!'},
  {q:'Was ist eine GbR (§ 705 BGB) und wann entsteht sie?',opts:['Eine Kapitalgesellschaft, die ins Handelsregister eingetragen werden muss','Eine Personengesellschaft, die durch Abschluss eines Gesellschaftsvertrags entsteht – keine Formvorschrift, keine Eintragung erforderlich','Eine Aktiengesellschaft mit beschränkter Haftung','Nur möglich für Freiberufler'],ans:1,lvl:1,explain:'<b>GbR (§ 705 BGB):</b> Entsteht durch formlosen Gesellschaftsvertrag. Zwei oder mehr Personen verfolgen einen gemeinsamen Zweck. Keine Mindesteinlage, keine Eintragung ins Handelsregister. Alle Gesellschafter haften persönlich und unbeschränkt. Seit dem MoPeG 2024 kann die GbR ins Gesellschaftsregister eingetragen werden.'},
  {q:'Wer haftet bei einer OHG für die Gesellschaftsschulden (§ 128 HGB)?',opts:['Nur die Gesellschaft mit ihrem Vermögen','Die Gesellschaft und alle Gesellschafter persönlich, unbeschränkt und gesamtschuldnerisch','Nur der Geschäftsführer','Jeder Gesellschafter nur bis zur Höhe seiner Einlage'],ans:1,lvl:2,explain:'<b>OHG – Haftung (§ 128 HGB):</b> Neben der Gesellschaft haften alle Gesellschafter persönlich, unbeschränkt (mit Privatvermögen) und gesamtschuldnerisch. Das heißt: Gläubiger können sich jeden Gesellschafter für die volle Schuld aussuchen. Das ist der wesentliche Unterschied zur GmbH.'},
  {q:'Was versteht man unter dem "Trennungsprinzip" bei der GmbH?',opts:['Trennung von Privat- und Gesellschaftsvermögen – Gesellschafter haften grundsätzlich nur mit ihrer Einlage, nicht mit Privatvermögen','Trennung von Geschäftsführung und Gesellschaftern','Trennung der Buchhaltung von der Steuererklärung','Trennung von Eigenkapital und Fremdkapital'],ans:0,lvl:1,explain:'<b>Trennungsprinzip (§ 13 GmbHG):</b> Die GmbH ist eine juristische Person – rechtlich strikt getrennt von ihren Gesellschaftern. Gesellschafter haften nur mit ihrer Stammeinlage, nicht mit dem Privatvermögen. Ausnahme: "Durchgriffshaftung" bei Vermögensvermischung oder Missbrauch der Rechtsform.'},
  {q:'Was ist ein "Verbraucher" im Sinne des BGB (§ 13 BGB)?',opts:['Jede natürliche Person, die Waren kauft','Jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend nicht ihrer gewerblichen oder selbstständigen beruflichen Tätigkeit zuzurechnen sind','Nur Personen mit einem Nettoeinkommen unter 50.000 €','Nur Personen ohne Gewerbeschein'],ans:1,lvl:1,explain:'<b>§ 13 BGB – Verbraucher:</b> Natürliche Person im Privatrechtsverkehr. Verbrauchereigenschaft ist entscheidend für Schutzvorschriften (Widerrufsrecht, AGB-Kontrolle, Gewährleistungsrechte). Unternehmer (§ 14 BGB) genießt diese Schutzrechte nicht – er ist der professionelle Marktteilnehmer.'},
  {q:'Was sind die Voraussetzungen einer wirksamen AGB-Klausel (§§ 305 ff. BGB)?',opts:['AGBs sind immer gültig, wenn sie vom Unternehmer erstellt werden','Einbeziehung durch ausdrücklichen Hinweis + Möglichkeit der Kenntnisnahme + Einverständnis des Kunden; Klauseln dürfen Kunden nicht unangemessen benachteiligen (§ 307 BGB)','AGBs gelten nur bei Verbraucherverträgen','Eine notarielle Beurkundung ist erforderlich'],ans:1,lvl:2,explain:'<b>AGB-Einbeziehung (§ 305 BGB):</b> Klarer Hinweis vor Vertragsschluss + Möglichkeit zur Kenntnisnahme + Einverständnis. <b>Inhaltskontrolle (§ 307 BGB):</b> Unwirksam sind Klauseln, die den Vertragspartner unangemessen benachteiligen. Typisch unwirksam: kurze Gewährleistungsausschlüsse, Haftungsausschlüsse bei grober Fahrlässigkeit.'},
  {q:'Was ist der Unterschied zwischen einem Kaufmann nach HGB und einer normalen Privatperson?',opts:['Kein Unterschied – das HGB gilt für alle','Kaufleute unterliegen dem HGB (strengere Pflichten: Buchführung, Jahresabschluss, Handelsregister); Privatpersonen nur dem BGB. Kaufleute können sich nicht auf Verbraucherschutz berufen','Kaufleute müssen keine Steuern zahlen','Kaufleute haften weniger als Privatpersonen'],ans:1,lvl:2,explain:'<b>Kaufmann (§ 1 HGB):</b> Wer ein Handelsgewerbe betreibt. Pflichten: Buchführung (§ 238 HGB), Jahresabschluss (§ 242 HGB), Handelsregistereintragung, Firma. Vorteile: Vollkaufmännische Vollmachten (Prokura), Handelsbräuche. Kaufleute können sich nicht auf Verbraucherschutzrechte berufen (§ 13 BGB gilt nur für Privatpersonen).'},

];

// ==================== FLASHCARD DATA ====================
const D_FC_AO = [
  {icon:'⏳',term:'Festsetzungsverjährungsfrist',sub:'§ 169 AO',answer:'<b>4 Jahre</b> regulär (§ 169 Abs. 2 Nr. 2 AO)<br>5 Jahre bei leichtfertiger Steuerverkürzung<br>10 Jahre bei vorsätzlicher Steuerhinterziehung<br><br><b>Fristbeginn (§ 170 AO):</b> Grundsätzlich mit Ablauf des Entstehungsjahres. Bei Abgabepflicht: erst mit Ablauf des Jahres der Abgabe (<b>Anlaufhemmung</b>) – das kann die Frist erheblich verlängern!',merkhilfe:'4–5–10: je mehr Vorsatz, desto länger das Gedächtnis des Finanzamts. Anlaufhemmung: Wer keine Erklärung abgibt, verlängert die Frist für das Finanzamt – ein weiterer Grund, pünktlich abzugeben!'},
  {icon:'📬',term:'Einspruchsfrist',sub:'§ 355 AO',answer:'<b>1 Monat</b> ab Bekanntgabe des Bescheids.<br>Bekanntgabe gilt am <b>4. Tag nach Aufgabe zur Post</b> (§ 122 Abs. 2 AO).<br>Geändert durch das JStG 2022 – ab 01.01.2023 gilt die <b>4-Tage-Fiktion</b>!<br>Verpassen → Bestandskraft!',merkhilfe:'Kalendercheck: Datum auf dem Bescheid + 4 Tage = Bekanntgabe, dann läuft 1 Monat Einspruchsfrist. Früher 3, jetzt 4 Tage (JStG 2022)!'},
  {icon:'🏛️',term:'Verwaltungsakt',sub:'§ 118 AO',answer:'Jede <b>hoheitliche Maßnahme einer Behörde</b> zur Regelung eines Einzelfalls mit <b>unmittelbarer Außenwirkung</b>.<br>Beispiele: Steuerbescheid, Haftungsbescheid, Verspätungszuschlagsbescheid, Prüfungsanordnung.<br><b>Wirksamkeit:</b> Erst mit Bekanntgabe (§ 124 Abs. 1 AO). Bekanntgabefiktion: 4 Tage nach Aufgabe zur Post.<br><b>Bestandskraft</b> tritt ein, wenn Einspruchsfrist (1 Monat) ungenutzt abläuft.',merkhilfe:'Behörde + Regelung + Einzelfall + Außenwirkung = VA. Merke: Ein VA wird wirksam mit Bekanntgabe und bestandskräftig ohne fristgerechten Einspruch. Gegen jeden VA gibt es Rechtsschutz!'},
  {icon:'🔒',term:'Steuergeheimnis',sub:'§ 30 AO',answer:'Alle im Besteuerungsverfahren bekannt gewordenen Daten sind <b>streng vertraulich</b>.<br>Finanzbeamte dürfen diese Informationen <b>nicht an Dritte weitergeben</b>.<br>Verstoß → Strafbarkeit!',merkhilfe:'Das Finanzamt weiß alles über dein Einkommen – aber darf es niemandem sagen. Nicht mal deinem Arbeitgeber.'},
  {icon:'🚨',term:'Steuerhinterziehung',sub:'§ 370 AO',answer:'<b>Straftat (Vergehen)</b> durch wissentlich falsche/unvollständige Angaben oder pflichtwidriges Schweigen.<br>Strafe: Geldstrafe oder bis zu <b>5 Jahre</b> Haft.<br>Über 50.000 € Schaden: bis zu <b>10 Jahre</b>!',merkhilfe:'Vorsatz = § 370 AO = Straftat. Fahrlässig = § 378 AO = nur Ordnungswidrigkeit. Der Vorsatz ist der Unterschied!'},
  {icon:'🕊️',term:'Strafbefreiende Selbstanzeige',sub:'§ 371 AO',answer:'Vollständige Korrektur + <b>Nachzahlung inkl. Hinterziehungszinsen (1,8 % p.a., § 235 AO)</b> → Straffreiheit.<br><b>Sperrwirkung (§ 371 Abs. 2 AO) – keine Selbstanzeige möglich wenn:</b><br>• Prüfungsanordnung bereits bekanntgegeben<br>• Straftat bereits entdeckt (und Täter musste damit rechnen)<br>• Tatentdeckung bei einem Amtsträger bereits eingetreten<br>Bei Hinterziehungsbetrag &gt; 25.000 €: zusätzlich strafbefreiender Zuschlag 10–20 % nötig (§ 398a AO).<br>Seit 2015: <b>nur vollständige Selbstanzeige</b> wirkt strafbefreiend.',merkhilfe:'Sobald der Prüfer sich ankündigt oder die Tat entdeckt ist, ist es zu spät! Ab 25.000 € Hinterziehung braucht es einen zusätzlichen Geldzuschlag für Straffreiheit.'},
  {icon:'💸',term:'Säumniszuschlag',sub:'§ 240 AO',answer:'<b>1 % pro angefangener Monatsfrist</b> auf den rückständigen Steuerbetrag.<br>Entsteht automatisch – ohne Bescheid!<br>Mindestbetrag: 25 €. Macht effektiv 12 % p.a.',merkhilfe:'Pünktlich zahlen lohnt sich: 12 % Säumnis-Zins ist teurer als jeder Bankkredit.'},
  {icon:'🎯',term:'Schätzung der Besteuerungsgrundlagen',sub:'§ 162 AO',answer:'Wenn Unterlagen fehlen, unvollständig oder unglaubwürdig sind, kann das FA schätzen.<br><b>Schätzmethoden:</b> Innerer/äußerer Betriebsvergleich, Richtsatz-Schätzung (BMF-Richtsätze), Vermögensvergleich, Geldverkehrsrechnung.<br>Schätzung geht i.d.R. <b>zum Nachteil des Steuerpflichtigen</b> aus – Zweifel gehen zu seinen Lasten.',merkhilfe:'Keine Aufzeichnungen = Finanzamt darf raten – und rundet großzügig nach oben! Die Geldverkehrsrechnung ist besonders gefährlich: FA vergleicht Einnahmen mit Ausgaben, jede Differenz wird als Schwarzeinnahme gewertet.'},
  {icon:'🔎',term:'Außenprüfung / Betriebsprüfung',sub:'§§ 193 ff. AO',answer:'Das FA prüft steuerliche Verhältnisse <b>direkt beim Steuerpflichtigen vor Ort</b>.<br><b>Ankündigung:</b> Prüfungsanordnung muss angemessene Zeit vorher bekanntgegeben werden (§ 197 AO).<br><b>Prüfungszeitraum:</b> i.d.R. 3 Jahre; bei Steuerhinterziehung bis zu 10 Jahre.<br>Nach Abschluss: <b>Schlussbesprechung</b> (§ 201 AO), dann Prüfungsbericht und ggf. geänderte Bescheide.',merkhilfe:'Wichtig: Ab dem Zeitpunkt der Bekanntgabe der Prüfungsanordnung ist eine strafbefreiende Selbstanzeige gesperrt! Prüfer haben umfassende Einsichtsrechte in Buchführung, Belege und EDV-Systeme.'},
  {icon:'📋',term:'Mitwirkungspflicht',sub:'§ 90 AO',answer:'Steuerpflichtige müssen <b>aktiv bei der Ermittlung der Sachverhalte mitwirken</b>:<br>• Unterlagen vorlegen<br>• Auskünfte erteilen<br>• Aufzeichnungen führen',merkhilfe:'Das Steuerrecht ist kein Geheimnis-Spiel. Der Steuerpflichtige muss kooperieren – die Beweislast liegt bei ihm.'},
  {icon:'📅',term:'Veranlagungszeitraum (VZ)',sub:'§ 25 EStG i.V.m. AO',answer:'Zeitraum, für den die Steuer festgesetzt wird.<br>Bei ESt: = <b>Kalenderjahr</b> (1. Januar – 31. Dezember).<br>Steuererklärung danach einreichen → Finanzamt erlässt Steuerbescheid.',merkhilfe:'VZ ≠ Erklärungsfrist! Der VZ 2025 endet am 31.12.2025 – die Erklärungsfrist läuft oft noch bis Mitte 2026 oder länger.'},
  {icon:'📝',term:'Vorläufigkeitsvermerk',sub:'§ 165 AO',answer:'Bestimmte Punkte im Steuerbescheid bleiben <b>vorläufig</b>, z.B. weil ein Musterverfahren beim BFH läuft.<br>Vorteil: kein Einspruch nötig – Bescheid wird <b>automatisch angepasst</b>, wenn das Verfahren entschieden ist.',merkhilfe:'Suche im Bescheid nach "gemäß § 165 AO vorläufig" – das bedeutet: Dieser Punkt könnte sich noch ändern. Kein Handlungsbedarf!'},
  {icon:'⚖️',term:'Treu und Glauben im Steuerrecht',sub:'Allgemeiner Rechtsgrundsatz',answer:'Sowohl Finanzamt als auch Steuerpflichtiger müssen sich <b>redlich und widerspruchsfrei verhalten</b>.<br>Beispiel: Hat das Finanzamt eine Praxis jahrelang akzeptiert, kann es sie nicht rückwirkend beanstanden.',merkhilfe:'Wer sich auf eine zugesagte Behandlung verlassen hat, darf auf diesen Vertrauensschutz pochen – auch gegenüber dem Finanzamt.'},
  {icon:'🪪',term:'Steuer-Identifikationsnummer',sub:'§ 139b AO',answer:'11-stellige Nummer, die jedem in Deutschland gemeldeten Menschen <b>automatisch ab Geburt</b> zugeteilt wird.<br><b>Lebenslang unveränderlich</b> und noch <b>20 Jahre nach dem Tod</b> gespeichert.',merkhilfe:'Einmal ID – immer ID. Die Steuer-ID ist der digitale Fingerabdruck im deutschen Steuersystem.'},
];

const D_FC_RECHT = [
  {icon:'⚖️',term:'Privatrecht vs. Öffentliches Recht',sub:'Grundunterscheidung',answer:'<b>Privatrecht:</b> Gleichordnung – regelt Verhältnisse zwischen gleichberechtigten Privaten (z.B. BGB, HGB).<br><b>Öffentliches Recht:</b> Überordnung – Staat kann einseitig Pflichten auferlegen (z.B. Steuerrecht, Beamtenrecht).',merkhilfe:'Frage: Wer steht oben? Wenn der Staat Befehle geben kann (Steuerbescheid!), ist es Öffentliches Recht.'},
  {icon:'📖',term:'Bürgerliches Gesetzbuch (BGB)',sub:'Privatrecht',answer:'Privatrechtliches Gesetzbuch mit über 2.300 §§.<br>Regelt: Kaufverträge, Mietrecht, Erbrecht, Familienrecht, Schadensersatz.<br>Gleichordnung zwischen den Parteien.',merkhilfe:'BGB = zwei Bürger auf Augenhöhe. Niemand kann dem anderen einseitig Pflichten aufzwingen.'},
  {icon:'🏛️',term:'Steuerrecht – Rechtsgebiet',sub:'Öffentliches Recht',answer:'Das Steuerrecht ist <b>Öffentliches Recht</b>.<br>Über- und Unterordnungsverhältnis: Der Staat setzt Steuern <b>einseitig</b> fest.<br>Steuerbescheid = Verwaltungsakt.',merkhilfe:'Du kannst mit dem Finanzamt nicht verhandeln wie mit einem Kaufmann. Es entscheidet kraft Hoheitsgewalt.'},
  {icon:'⚖️',term:'Legalitätsprinzip / Gesetzesvorbehalt',sub:'§ 3 AO, Art. 20 GG',answer:'<b>Keine Steuer ohne Gesetz!</b><br>Jede Steuer braucht eine gesetzliche Grundlage.<br>Das Finanzamt darf nur erheben, was ein formelles Gesetz erlaubt.',merkhilfe:'Das schützt vor staatlicher Willkür: Ohne Steuergesetz = keine Steuerpflicht. Ein zentrales Bürgerrecht!'},
  {icon:'🏦',term:'Steuerbescheid – Rechtsnatur',sub:'§ 118 AO',answer:'Der Steuerbescheid ist ein <b>Verwaltungsakt</b>.<br>Einseitig und hoheitlich – der Staat regelt deine Steuerpflicht ohne deine Zustimmung.<br>Rechtsschutz: Einspruch → Finanzgericht → BFH.',merkhilfe:'Gegen einen Steuerbescheid gibt es immer Rechtsschutz – aber Fristen beachten! 1 Monat Einspruchsfrist.'},
  {icon:'📍',term:'Finanzgericht',sub:'Gerichtsbarkeit Steuerrecht',answer:'Steuerstreitigkeiten werden vor dem <b>Finanzgericht</b> verhandelt.<br>Instanzenweg: Einspruch → Finanzgericht → <b>Bundesfinanzhof (BFH)</b> in München.<br>BFH = höchste Instanz im Steuerrecht.',merkhilfe:'Steuerprozess ≠ Zivilprozess! Amts-/Landgericht ist falsch. Das Finanzgericht ist die richtige Adresse.'},
  {icon:'🎓',term:'Beamtenverhältnis',sub:'Öffentliches Recht',answer:'Beamte stehen in einem <b>öffentlich-rechtlichen Dienst- und Treueverhältnis</b> zum Staat.<br>Ernennung durch Urkunde (kein Arbeitsvertrag).<br>Vorteile: Unkündbarkeit, Pension. Pflichten: Loyalität, kein Streikrecht.',merkhilfe:'Beamte werden ernannt, nicht eingestellt. Das macht den Unterschied zum Angestellten im öffentlichen Dienst (TVöD).'},
  {icon:'📜',term:'Grundgesetz – Einordnung',sub:'Öffentliches Recht / Verfassungsrecht',answer:'Das GG ist <b>Verfassungsrecht – das höchste Öffentliche Recht</b>.<br>Regelt: Grundrechte, Staatsaufbau, Gewaltenteilung.<br>Alle Gesetze (auch Steuergesetze!) müssen GG-konform sein.',merkhilfe:'Das GG steht über allem. Kein Steuergesetz darf Grundrechte (z.B. Eigentumsgarantie Art. 14 GG) unverhältnismäßig einschränken.'},
  {icon:'🔑',term:'Vorbehalt des Gesetzes',sub:'Art. 20 GG',answer:'<b>Staatliche Eingriffe in Grundrechte</b> (Freiheit, Eigentum) <b>brauchen eine gesetzliche Grundlage</b>.<br>Im Steuerrecht: Ohne Steuergesetz keine Steuerpflicht.<br>Schützt Bürger vor willkürlichen staatlichen Eingriffen.',merkhilfe:'Der Staat darf nur, was er darf – und dafür braucht er ein Gesetz. Kein Gesetz = kein Eingriff erlaubt.'},
  {icon:'📊',term:'Öffentliches Recht: Beispiele',sub:'Überblick',answer:'<b>Öffentliches Recht:</b> Steuerrecht, Beamtenrecht, Verwaltungsrecht, Strafrecht, Verfassungsrecht, Sozialrecht.<br><b>Privatrecht:</b> BGB (Kaufrecht, Mietrecht, Erbrecht), HGB (Handelsrecht), GmbHG.',merkhilfe:'Faustregel: Ist der Staat direkt beteiligt und hat er Hoheitsgewalt? → Öffentliches Recht. Zwei Private unter sich? → Privatrecht.'},
];

const D_FC_EST = [
  {icon:'🌾',term:'§ 13 EStG – Land- & Forstwirtschaft',sub:'1. Einkunftsart',answer:'Einkünfte aus land- und forstwirtschaftlicher Tätigkeit sowie Tierzucht und Tierhaltung.<br><b>Gewinnermittlung:</b> Betriebsvermögensvergleich (§ 4 Abs. 1) oder Einnahmen-Überschussrechnung (§ 4 Abs. 3).<br><b>Pauschalierungen:</b> § 13a EStG ermöglicht Durchschnittssatzbesteuerung für kleinere Betriebe (vereinfacht).<br><b>Keine Gewerbesteuer!</b> Abweichendes Wirtschaftsjahr möglich (z.B. 01.07.–30.06.).',merkhilfe:'Älteste Einkunftsart – und privilegiert: keine Gewerbesteuer! Merkpunkt: Wenn ein Landwirt seinen Betrieb so stark ausbaut, dass er gewerblich wird (z.B. Direktvermarktung im großen Stil), kann er in § 15 EStG ‘hinein‘wachsen’.'},
  {icon:'🏭',term:'§ 15 EStG – Gewerbebetrieb',sub:'2. Einkunftsart',answer:'<b>Tatbestandsmerkmale § 15 Abs. 2 EStG:</b><br>① Selbständigkeit (auf eigene Rechnung und Gefahr)<br>② Nachhaltigkeit (Wiederholungsabsicht, nicht nur einmalig)<br>③ Gewinnerzielungsabsicht (kein Hobby / keine Liebhaberei)<br>④ Beteiligung am allgemeinen wirtschaftlichen Verkehr<br><b>Ungeschriebenes Tatbestandsmerkmal:</b> keine reine Vermögensverwaltung<br>Wer nur Kapital anlegt oder Immobilien vermietet, übt kein Gewerbe aus (Abgrenzung zu §§ 20, 21 EStG).<br><br><b>Folge:</b> Gewerbesteuer (§ 2 GewStG). Freibetrag: 24.500 € (§ 11 Abs. 1 GewStG).',merkhilfe:'Prüfschema: alle 4 TBM erfüllt + keine reine Vermögensverwaltung = § 15 EStG. Beispiel Grenzfall: Wer 3 Immobilien vermietet = § 21. Wer 10 kauft und innerhalb von 5 Jahren verkauft = gewerblicher Grundstückshandel = § 15 (sog. Drei-Objekt-Grenze)!'},
  {icon:'🎨',term:'§ 18 EStG – Selbständige Arbeit',sub:'3. Einkunftsart',answer:'<b>Katalogberufe (§ 18 Abs. 1 Nr. 1 EStG):</b> Ärzte, Zahnärzte, Tierärzte, Rechtsanwälte, Notare, Steuerberater, WP, Architekten, Ingenieure, Journalisten, Lehrer.<br><b>Ähnliche Berufe:</b> Vergleichbarkeit mit Katalogberufen nötig (wiss./künstl. Ausbildung + persönliche leitende Tätigkeit).<br><b>Abgrenzung zu § 15:</b> Mischt ein Freiberufler gewerbliche Tätigkeiten ein, droht <b>Infektionsgefahr</b> – die gesamte Tätigkeit wird gewerblich!<br>Kein Gewerbeschein, <b>keine Gewerbesteuer</b>.',merkhilfe:'Merkhilfe Infektion: Ein Arzt, der nebenher Nahrungsergänzungsmittel verkauft, riskiert, dass ALLE Einnahmen als Gewerbe gelten. Sauber trennen oder separate Gesellschaft gründen!'},
  {icon:'💼',term:'§ 19 EStG – Nichtselbständige Arbeit',sub:'4. Einkunftsart',answer:'Gehälter, Löhne, Gratifikationen, Tantiemen, <b>geldwerte Vorteile</b> (z.B. Firmenwagen, vergnstigte Waren) aus einem Arbeitsverhältnis.<br><b>Lohnsteuer (§§ 38 ff. EStG):</b> Einbehalt durch Arbeitgeber als Vorauszahlung auf die ESt. Abführung ans Finanzamt monatl./viertelj./jährlich je nach Lohnsteuerbetrag.<br><b>Werbungskosten-Pauschbetrag:</b> 1.230 € / Jahr (VZ 2023 ff.) – automatisch, ohne Nachweis.<br>Daraus folgt: Lohnsteuer-Jahresausgleich möglich, wenn tatsächliche WK den Pauschbetrag übersteigen.',merkhilfe:'Arbeitgeber = steuerlicher Hilfsbeamter. Er trägt die Haftung für zu wenig einbehaltene Lohnsteuer! Tipp: Wer hohe Werbungskosten hat (z.B. Pendler), sollte unbedingt eine Steuerklärung machen – Erstattung winkt!'},
  {icon:'📈',term:'§ 20 EStG – Kapitalvermögen',sub:'5. Einkunftsart',answer:'Dividenden, Zinsen, Kursgewinne bei Wertpapieren.<br><b>Abgeltungssteuer:</b> 25 % pauschal + Soli.<br><b>Sparerpauschbetrag:</b> 1.000 € (Einzelperson).',merkhilfe:'Die Bank zieht alles automatisch ab – Steuererklärung oft nicht nötig. Aber: Sparerpauschbetrag-Antrag nicht vergessen!'},
  {icon:'🏠',term:'§ 21 EStG – Vermietung & Verpachtung',sub:'6. Einkunftsart',answer:'Einkünfte aus Vermietung von Grundstücken, Gebäuden, beweglichen Gegenständen und Rechten.<br><b>Gewinnermittlung:</b> Überschussrechnung (Einnahmen minus Werbungskosten).<br><b>Wichtige Werbungskosten:</b> Schuldzinsen, Reparaturen, Verwaltung, Grundsteuer, AfA Gebäude (2 % p.a., § 7 Abs. 4 EStG).<br><b>Achtung:</b> Verbilligte Vermietung unter 66 % der ortsblüblichen Miete → WK nur anteilig abziehbar.<br><b>Liebhaberei-Risiko:</b> Dauerhafte Verluste → FA zweifelt an Einkunftserzielungsabsicht.',merkhilfe:'AfA-Beispiel: Gebäude 300.000 € × 2 % = 6.000 € AfA pro Jahr – ohne Geldabfluss! Das erklärt, warum viele Vermieter auf dem Papier Verluste haben und keine ESt zahlen.'},
  {icon:'🔖',term:'§ 22 EStG – Sonstige Einkünfte',sub:'7. Einkunftsart',answer:'<b>Auffangtatbestand</b> für alles, was nicht in §§ 13–21 EStG fällt:<br>① Renten aus ges. RV (§ 22 Nr. 1 EStG): Besteuerungsanteil nach Kohortenprinzip (Rentenbeginn 2040+ = 100 % steuerpflichtig)<br>② Leistungen (§ 22 Nr. 3): Finderlohn &gt; 256 €, Entschädigungen<br>③ Private Veräußerungsgeschäfte (§ 23 EStG):<br>• Krypto / Fremdwährungen: Verkauf &lt; 1 Jahr Haltedauer steuerpflichtig<br>• Grundstücke: Verkauf &lt; 10 Jahre (außer selbst genutzt &gt; 2 J.)<br>• Freigrenze: 600 € / Jahr (§ 23 Abs. 3 S. 5 EStG)',merkhilfe:'Krypto-Falle: Bitcoin nach 11 Monaten verkauft → voller pers. Steuersatz! Nach 12 Monaten → steuerfrei. Genau 1 Jahr + 1 Tag warten kann tausende Euro sparen. Freigrenze 600 € gilt jahresbezogen für ALLE privaten Verkaufsgewinne zusammen.'},
  {icon:'🧾',term:'§ 9 EStG – Werbungskosten',sub:'Abzüge bei Überschusseinkünften',answer:'Aufwendungen zur <b>Erwerbung, Sicherung und Erhaltung der Einnahmen</b> (§ 9 Abs. 1 EStG).<br>Gilt für: §§ 19, 20, 21, 22 EStG (sog. Überschusseinkünfte).<br>Pendant: Betriebsausgaben (§ 4 Abs. 4 EStG) bei Gewinneinkünften (§§ 13, 15, 18).<br><b>Wichtige Werbungskosten:</b><br>• Pendlerpauschale: 0,38 €/km ab km 1 (ab 2026)<br>• Arbeitsmittel (GWG bis 952 € inkl. USt sofort absetzbar)<br>• Fortbildungskosten, Homeoffice-Pauschale (6 €/Tag, max. 1.260 €)<br><b>Pauschbetrag § 9a EStG:</b> 1.230 € (automatisch bei § 19-Einkünften).',merkhilfe:'Werbungskosten (§ 9) = Überschusseinkünfte. Betriebsausgaben (§ 4 Abs. 4) = Gewinneinkünfte. Beide Konzepte mindern das zu versteuernde Einkommen – aber nur, was tatsächlich beruflich veranlasst ist!'},
  {icon:'📊',term:'§ 32a EStG – Einkommensteuertarif',sub:'Steuersätze 2026',answer:'Progressiver Tarif:<br>0 % bis Grundfreibetrag (12.336 €)<br>14 % Eingangssteuersatz<br>42 % Spitzensteuersatz (ab 69.879 €)<br>45 % "Reichensteuer" (ab 279.512 €)',merkhilfe:'Progressiv = je mehr du verdienst, desto höher der GRENZ-Steuersatz. Aber: Nicht der Gesamtverdienst wird mit 42% besteuert – nur der Teil darüber!'},
  {icon:'🏠',term:'Homeoffice-Pauschale',sub:'§ 4 Abs. 5 Nr. 6b EStG',answer:'<b>6 € pro Tag</b> (reine Homeoffice-Tage)<br>Maximum: <b>210 Tage = 1.260 € / Jahr</b><br>Kein eigenes Arbeitszimmer nötig!',merkhilfe:'100 Homeoffice-Tage = 600 €. Einfach in der Steuererklärung eintragen – kein Nachweis der Kosten nötig!'},
];

let fcMode='ao', fcIdx=0, fcFlipped=false, fcKnown=[], fcUnknown=[];
let fcData = [];

const D_FC_GEWST = [
  {icon:'🏭',term:'Gewerbesteuer-Berechnung',sub:'§§ 7, 11, 16 GewStG',answer:'<b>Schritt 1:</b> Gewerbeertrag = Gewinn (EStG/KStG) + Hinzurechnungen – Kürzungen<br><b>Schritt 2:</b> Messbetrag = (Gewerbeertrag – Freibetrag) × 3,5 %<br><b>Schritt 3:</b> GewSt = Messbetrag × Hebesatz der Gemeinde',merkhilfe:'Formel merken: G-M-H = Gewerbeertrag → Messbetrag (3,5%) → Hebesatz. Der Freibetrag (24.500 €) gilt nur für Einzelunternehmen und Personengesellschaften, nicht für GmbH & AG!'},
  {icon:'➕',term:'Hinzurechnungen § 8 GewStG',sub:'Wichtigste Posten',answer:'Dem Gewerbeertrag werden u. a. hinzugerechnet:<br>• <b>25 %</b> der Entgelte für Schulden (Zinsaufwendungen)<br>• <b>12,5 %</b> der Miet-/Pachtzinsen für <b>unbewegliche</b> WG (Nr. 1e: ¼ × ½)<br>• <b>5 %</b> der Miet-/Pachtzinsen für <b>bewegliche</b> WG (Nr. 1d: ¼ × ⅕)<br>• <b>6,25 %</b> der Lizenzgebühren (Nr. 1f: ¼ × ¼)<br>→ Aber nur der Betrag, der 200.000 € <b>übersteigt</b>',merkhilfe:'Merkhilfe effektive Sätze: 25 % (Zinsen) – 12,5 % (Immobilien-Miete) – 5 % (bewegliche Miete) – 6,25 % (Lizenzen). Die Freigrenze 200.000 € schützt viele KMU vollständig!'},
  {icon:'➖',term:'Kürzungen § 9 GewStG',sub:'Wichtigste Posten',answer:'Wichtige Kürzungen:<br>• <b>1,2 %</b> des maßgebenden Einheitswerts des Grundbesitzes<br>• Dividenden aus Beteiligungen ≥ 15 % (volle Kürzung)<br>→ Verhindert Doppelbelastung durch GewSt + Grundsteuer / GewSt + KSt',merkhilfe:'Kürzung = Doppelbesteuerung vermeiden. Grundbesitz: 1,2 % Einheitswert. Schachteldividenden (≥ 15 %): vollständig herausnehmen.'},
  {icon:'📊',term:'Anrechnung GewSt auf ESt',sub:'§ 35 EStG',answer:'Die ESt des Gewerbetreibenden wird um das <b>4-fache des GewSt-Messbetrags</b> ermäßigt.<br>Deckelung: max. die tatsächlich gezahlte GewSt.<br>Bei Hebesatz 400 %: vollständige Kompensation.<br>Bei Hebesatz über 400 %: Restbelastung durch GewSt.',merkhilfe:'Faktor <b>4 × Messbetrag</b> = ESt-Entlastung (gilt ab VZ 2020; davor 3,8 × Messbetrag). Bei 400 % Hebesatz = vollständige Kompensation für Einzelunternehmer. Berlin (410 %) → geringe Mehrbelastung. Deshalb ist der Hebesatz politisch wichtig!'},
  {icon:'🏙️',term:'Gewerbesteuerpflicht – Wer zahlt?',sub:'§ 2 GewStG',answer:'<b>Steuerpflichtig:</b> Gewerbebetriebe (§ 15 EStG) und Kapitalgesellschaften<br><b>Nicht steuerpflichtig:</b><br>• Freiberufler (§ 18 EStG): Ärzte, Anwälte, Architekten<br>• Land- und Forstwirtschaft (§ 13 EStG)<br>• Reine Vermögensverwaltung',merkhilfe:'Nur Gewerbebetrieb zahlt GewSt! Deshalb ist die Abgrenzung § 15 vs. § 18 EStG praxisrelevant. Ein Arzt, der Medizinprodukte verkauft, riskiert die Infektionsgefahr → plötzlich GewSt auf alle Einnahmen!'},
];

const D_FC_GESELLSCHAFT = [
  {icon:'🏢',term:'KSt vs. ESt – Vergleich',sub:'§ 23 KStG · § 32a EStG',answer:'<b>Körperschaftsteuer (KSt):</b><br>• Steuerpflichtige: GmbH, AG, eG, Vereine<br>• Tarif: <b>15 % flat</b> (+ 5,5 % Soli)<br>• Keine Progression<br><br><b>Einkommensteuer (ESt):</b><br>• Steuerpflichtige: Natürliche Personen<br>• Tarif: <b>0–45 %</b> (progressiv)<br>• Grundfreibetrag 12.336 € (2026)',merkhilfe:'KSt = flach (15%), ESt = progressiv (0–45%). Bei niedrigem Einkommen zahlt die Personengesellschaft weniger. Bei hohem Einkommen wird die GmbH attraktiver – aber erst nach Ausschüttung kommt die KapESt!'},
  {icon:'💼',term:'vGA – Verdeckte Gewinnausschüttung',sub:'§ 8 Abs. 3 S. 2 KStG',answer:'<b>Merkmale der vGA:</b><br>① Vermögensminderung bei der GmbH<br>② Gesellschaftsrechtliche Veranlassung<br>③ Kein ordnungsgemäßer Gewinnverteilungsbeschluss<br><b>Folge:</b> Hinzurechnung zum GmbH-Gewinn (→ mehr KSt) + Behandlung als Ausschüttung beim Gesellschafter (→ KapESt)<br><b>Maßstab:</b> Fremdvergleich – was hätte ein unabhängiger Dritter erhalten?',merkhilfe:'Typische vGA-Fallen: überhöhtes GF-Gehalt, zinsloses Darlehen an Gesellschafter, private Reise als "Geschäftsreise". Das FA prüft: Hätte ein Fremder genauso viel bekommen?'},
  {icon:'🔗',term:'Organschaft – Voraussetzungen',sub:'§§ 14–19 KStG',answer:'<b>Voraussetzungen der körperschaftsteuerlichen Organschaft:</b><br>① <b>Finanzielle Eingliederung:</b> Organträger hält Mehrheit der Stimmrechte an Organgesellschaft<br>② <b>Ergebnisabführungsvertrag (EAV):</b> Organgesellschaft verpflichtet sich, gesamten Gewinn abzuführen; Organträger übernimmt Verluste<br>③ EAV muss <b>mind. 5 Jahre</b> laufen und tatsächlich durchgeführt werden',merkhilfe:'Organschaft = steuerliche Konzernverschmelzung. Ohne EAV = keine Organschaft. 5-Jahres-Mindestlaufzeit ist hart – vorzeitige Beendigung zerstört die Anerkennung rückwirkend!'},
  {icon:'⚖️',term:'Teileinkünfteverfahren vs. Abgeltungsteuer',sub:'§ 3 Nr. 40 EStG · § 32d EStG',answer:'<b>Teileinkünfteverfahren (Betriebsvermögen):</b><br>• Dividenden: 60 % steuerpflichtig × persönlicher Tarif<br>• Kosten: 60 % abziehbar<br>• Gilt ab 1 % Beteiligung oder Geschäftsführerstellung<br><br><b>Abgeltungsteuer (Privatvermögen):</b><br>• Dividenden: 25 % pauschal + Soli<br>• Werbungskosten: pauschal 1.000 € (Sparerpauschbetrag)<br>• Weitere WK nicht absetzbar',merkhilfe:'Betriebsvermögen = 60/40 Teilung. Privatvermögen = 25 % Abgeltung, fertig. Bei Beteiligungen > 1 % lohnt sich die Günstigerprüfung (§ 32d Abs. 6 EStG) falls persönlicher Steuersatz unter 25%.'},
  {icon:'💰',term:'Steuerbelastungsvergleich GmbH vs. Einzelunternehmer',sub:'Gesamtbelastung',answer:'<b>GmbH (Thesaurierung):</b> KSt 15 % + GewSt ~14–17 % ≈ 29–32 % Gesamtbelastung<br><b>GmbH (Ausschüttung):</b> + KapESt 25 % → Gesamtbelastung ca. 48–50 %<br><b>Einzelunternehmer:</b> ESt 0–45 % + GewSt (abzüglich § 35 EStG-Anrechnung) ≈ individuell',merkhilfe:'GmbH ist bei Thesaurierung (Einbehalten) attraktiv: ~30%. Erst bei Ausschüttung kommt die zweite Stufe. Einzelunternehmer zahlen alles sofort. Faustregel: Ab ca. 60.000 € Gewinn lohnt sich die Überlegung einer GmbH – aber immer mit Steuerberater!'},
];

function getFcData(m){
  if(m==='ao') return D_FC_AO;
  if(m==='recht') return D_FC_RECHT;
  if(m==='gewst') return D_FC_GEWST;
  if(m==='gesellschaft') return D_FC_GESELLSCHAFT;
  return D_FC_EST;
}
const FACTS = [
  {icon:'🏺',title:'Über 40 Steuerarten in Deutschland',preview:'Deutschland hat... wie viele Steuern eigentlich?',detail:'Deutschland erhebt über 40 verschiedene Steuerarten – von der Einkommensteuer über die Kaffeesteuer, Biersteuer und Schaumweinsteuer bis zur Hundesteuer. Im Vergleich: Ein durchschnittlicher OECD-Staat hat etwa 10–15 Steuerarten.'},
  {icon:'🍾',title:'Die Sektsteuer finanzierte die Marine (1902)',preview:'Ein Sekt für den Kaiser und seine Flotte...',detail:'Die Schaumweinsteuer (Sektsteuer) wurde 1902 von Kaiser Wilhelm II. eingeführt, um die Kaiserliche Marine zu finanzieren. Obwohl die Marine längst Geschichte ist, gibt es die Sektsteuer bis heute – 136 € pro 100 Liter!'},
  {icon:'🐕',title:'Hundesteuer: eine der ältesten deutschen Steuern',preview:'Seit dem 19. Jahrhundert zahlen Hundehalter...',detail:'Die Hundesteuer ist eine der ältesten noch erhobenen Steuern in Deutschland – nachweisbar seit den 1820er Jahren. Sie ist eine Gemeindesteuer, deren Höhe jede Gemeinde selbst festlegt. Kampfhunde zahlen oft das Doppelte oder mehr.'},
  {icon:'🪪',title:'Steuer-ID ab Geburt – lebenslang + 20 Jahre',preview:'Schon als Baby ein Steuerpflichtiger?',detail:'Die 11-stellige Steuer-Identifikationsnummer (§ 139b AO) wird jedem in Deutschland gemeldeten Menschen automatisch zugeteilt – bereits bei der Geburt. Sie ist lebenslang unveränderlich und gilt sogar noch 20 Jahre nach dem Tod!'},
  {icon:'⛪',title:'Kirchensteuer – weltweit fast einmalig',preview:'8–9 % extra Steuer für Kirchenmitglieder...',detail:'Die Kirchensteuer (8 % in Bayern & BW, 9 % in anderen Bundesländern der Einkommensteuer) ist in dieser Form weltweit fast einmalig. Der Staat zieht sie ein und überweist sie an die Kirchen – gegen eine Verwaltungsgebühr.'},
  {icon:'📜',title:'Die AO: das Grundgesetz des Steuerrechts',preview:'Eine Abgabenordnung gilt für alle Steuern gleichzeitig...',detail:'Die Abgabenordnung (AO) gilt seit 1977 und enthält über 400 Paragraphen. Sie ist das allgemeine Steuerverfahrensrecht, das für ALLE Steuerarten gilt – von der Einkommensteuer bis zur Biersteuer.'},
  {icon:'🕵️',title:'Selbstanzeige: Reue macht straffrei',preview:'Wer sich selbst anzeigt, kommt straffrei davon?',detail:'§ 371 AO erlaubt eine strafbefreiende Selbstanzeige: Wer hinterzogene Steuern vollständig korrigiert und nachzahlt (inkl. Zinsen), bleibt straffrei. Aber: Die Anzeige muss vollständig sein – partielle Selbstanzeigen sind seit 2015 nicht mehr strafbefreiend!'},
  {icon:'💸',title:'Spitzensteuersatz historisch bis 95 %',preview:'Ja, 95 % Einkommensteuer gab es wirklich...',detail:'Nach dem Zweiten Weltkrieg erhoben die Alliierten in Deutschland zeitweise Spitzensteuersätze von bis zu 95 %. In den 1970er Jahren lagen sie noch bei 56 %. Heute beträgt der Spitzensteuersatz 42 %, die "Reichensteuer" 45 %.'},
  {icon:'☕',title:'Kaffeesteuer: 2,19 € pro kg Röstkaffee',preview:'Selbst der Morgenkaffee ist besteuert...',detail:'Deutschland erhebt eine eigene Kaffeesteuer (§ 1 KaffeeStG): Auf Röstkaffee entfallen 2,19 €/kg, auf löslichen Kaffee 4,78 €/kg. Sie fließt vollständig an den Bund und bringt ca. 1 Mrd. € / Jahr. Tee ist dagegen steuerfrei!'},
  {icon:'🧮',title:'58 % aller Steuern: Lohn + Mehrwert',preview:'Zwei Steuern dominieren den Staatshaushalt...',detail:'Lohnsteuer (248,9 Mrd. €) und Umsatzsteuer (302,1 Mrd. €) machen zusammen über 58 % des gesamten deutschen Steueraufkommens von 947,7 Mrd. € aus (2024, Quelle: Statistisches Bundesamt). Fast jeder Kauf und fast jedes Gehalt finanziert den Staatshaushalt direkt.'},
  {icon:'🏛️',title:'Berlin hat 23 Finanzämter',preview:'So viele Finanzämter hat die Hauptstadt...',detail:'Berlin hat insgesamt 23 Finanzämter: 17 Regionalfinanzämter (von Charlottenburg bis Zehlendorf) sowie 6 Finanzämter mit zentraler Zuständigkeit: FA für Körperschaften I–IV, FA für Fahndung und Strafsachen und das Technische Finanzamt. In diesen 23 Ämtern arbeiten über 6.100 Beschäftigte.'},
  {icon:'🎓',title:'FHF Königs Wusterhausen – gemeinsame Ausbildungsstätte',preview:'Wo lernen Berlins und Brandenburgs Finanzbeamte?',detail:'Die Fachhochschule für Finanzen (FHF) in Königs Wusterhausen (OT Niederlehme) ist die gemeinsame Ausbildungsstätte für Berlin, Brandenburg und Sachsen-Anhalt. Das 3-jährige duale Studium endet mit dem akademischen Grad <b>Diplom-Finanzwirt/in (FH)</b> – komplett kostenfrei, mit vollen Anwärterbezügen ab Tag 1.'},
];

// ==================== PRAXISFÄLLE ====================
const D_PRAXIS = [
  {
    id:'p1', icon:'🔍', cat:'AO', title:'Die Betriebsprüfung',
    intro:'Kai betreibt seit 2021 eine IT-Beratung als Einzelunternehmer. Das Finanzamt schickt ihm eine Prüfungsanordnung für die Jahre 2021–2023.',
    steps:[
      {nr:1, situation:'Die Prüfungsanordnung wird Kai am Montag, 3. März 2025 zur Post aufgegeben.',
       frage:'Wann gilt die Prüfungsanordnung als bekannt gegeben?',
       opts:['Am 3. März 2025 (Aufgabetag)','Am 7. März 2025 (4-Tage-Fiktion, § 122 Abs. 2 AO)','Am 10. März 2025 (1 Woche Sicherheitsfrist)','Am 3. April 2025 (1 Monat später)'],
       ans:1, explain:'§ 122 Abs. 2 AO: Ein schriftlicher Verwaltungsakt gilt am <b>4. Tag nach Aufgabe zur Post</b> als bekannt gegeben – also am 7. März 2025. Ab diesem Tag beginnen alle Fristen zu laufen.',
       merker:'4-Tage-Fiktion gilt immer bei postalischer Zustellung – egal ob Prüfungsanordnung, Steuerbescheid oder Einspruchsentscheidung.'},
      {nr:2, situation:'Kai hatte gehofft, für 2021 sei bald Verjährung eingetreten. Die 4-jährige Festsetzungsverjährung würde normalerweise Ende 2025 enden.',
       frage:'Kann das Finanzamt nach der Prüfungsanordnung für 2021 noch Steuern nachfordern?',
       opts:['Nein – reguläre Verjährung Ende 2025 schützt ihn','Ja – die Prüfungsanordnung löst eine Ablaufhemmung (§ 171 Abs. 4 AO) aus','Nur wenn Steuerhinterziehung vorliegt','Nein – einmal begonnen läuft die Verjährung weiter'],
       ans:1, explain:'<b>Ablaufhemmung (§ 171 Abs. 4 AO):</b> Mit Beginn der Außenprüfung läuft die Festsetzungsverjährung nicht ab, solange die Prüfung noch läuft. Der Ablauf ist "gehemmt". Das Finanzamt kann also auch für 2021 noch Steuern nachfordern.',
       merker:'Ablaufhemmung = Uhr bleibt stehen. Ohne § 171 AO würde eine Betriebsprüfung kurz vor der Verjährung ins Leere laufen.'},
      {nr:3, situation:'Der Betriebsprüfer stellt Einnahmen aus einem Kundenprojekt fest, die Kai nicht erklärt hat. Kai hatte dies vergessen – er handelte nicht vorsätzlich.',
       frage:'Welche steuerrechtliche Konsequenz hat die leichtfertige Nichtangabe?',
       opts:['Keine – Fahrlässigkeit ist folgenlos','Ordnungswidrigkeit nach § 378 AO + Verlängerung der Festsetzungsverjährung auf 5 Jahre','Strafanzeige wegen § 370 AO (Steuerhinterziehung)','Automatischer Erlass der Steuerschuld wegen Mitwirkung'],
       ans:1, explain:'<b>Leichtfertige Steuerverkürzung (§ 378 AO)</b> ist eine <b>Ordnungswidrigkeit</b> – keine Straftat! Konsequenz: Bußgeld bis 50.000 € + die Festsetzungsverjährung verlängert sich auf <b>5 Jahre</b> (§ 169 Abs. 2 Nr. 2 AO). Bei vorsätzlicher Hinterziehung wären es 10 Jahre.',
       merker:'Vergessen ≠ Vorsatz. Wer leichtfertig handelt, riskiert Bußgeld und 5 Jahre Verjährung. Wer vorsätzlich handelt: Straftat + 10 Jahre.'},
    ]
  },
  {
    id:'p2', icon:'🏠', cat:'ESt', title:'Homeoffice und Werbungskosten',
    intro:'Lena ist Gymnasiallehrerin in Berlin. Sie unterrichtet auch von Zuhause, kauft einen neuen Laptop und fährt täglich 22 km zur Schule.',
    steps:[
      {nr:1, situation:'Lena kauft einen Laptop für <b>1.000 € netto</b> zzgl. 190 € USt (= 1.190 € brutto laut Rechnung). Sie nutzt ihn zu 70 % beruflich, zu 30 % privat.',
       frage:'Wie viel kann Lena als Werbungskosten absetzen – und warum netto oder brutto?',
       opts:['1.190 € – voller Bruttobetrag (Privatanteil wird ignoriert)','833 € (70 % von 1.190 € brutto) – da Lena keinen Vorsteuerabzug hat, ist der Bruttobetrag maßgeblich','700 € (70 % von 1.000 € netto) – nur der Nettobetrag zählt als Aufwand','0 € – Privatanteil macht den ganzen Abzug unmöglich'],
       ans:1, explain:'<b>Schlüsselfrage: Netto oder Brutto?</b> Lena ist Arbeitnehmerin – sie hat <b>keinen Vorsteuerabzug</b>. Die 190 € USt kann sie nicht zurückfordern. Ihr tatsächlicher Aufwand ist der <b>Bruttobetrag 1.190 €</b> – nicht 1.000 € netto. Wer 700 € (70 % × 1.000 €) ansetzt, verschenkt Geld! Anders ein Unternehmer: Er setzt 1.000 € netto als Betriebsausgabe an und bekommt 190 € Vorsteuer zurück.<br><br><b>GWG-Grenze für Arbeitnehmer: 952 € brutto</b> (= 800 € netto × 1,19; § 6 Abs. 2 EStG). Da 1.190 € > 952 €, kein GWG. Aber: BMF-Schreiben 22.02.2022 erlaubt für Computerhardware optional <b>1 Jahr Nutzungsdauer</b> → Sofortabschreibung. Ergebnis: 70 % × 1.190 € = <b>833 € im Anschaffungsjahr absetzbar</b>.',
       merker:'Arbeitnehmer = kein Vorsteuerabzug → Bruttobetrag absetzen! Unternehmer = Vorsteuerabzug möglich → Nettobetrag absetzen. GWG-Grenze: 952 € brutto (AN) bzw. 800 € netto (Unternehmer).'},
      {nr:2, situation:'Lena arbeitet an 120 Tagen im Jahr aus dem Homeoffice. Eine abgetrennte Arbeitszimmer hat sie nicht – sie arbeitet am Küchentisch.',
       frage:'Welche Homeoffice-Pauschale kann Lena für 2025 geltend machen?',
       opts:['Nichts – ohne abgetrenntes Arbeitszimmer kein Abzug','6 € pro Tag, max. 210 Tage = max. 1.260 € / Jahr (§ 4 Abs. 5 Nr. 6b EStG)','5 € pro Tag ohne Begrenzung','1.250 € Pauschbetrag unabhängig von Tagen'],
       ans:1, explain:'<b>Homeoffice-Pauschale (§ 4 Abs. 5 Nr. 6b EStG):</b> Seit 2023 dauerhaft: <b>6 € pro Homeoffice-Tag, max. 210 Tage = 1.260 €/Jahr</b>. Ein abgetrenntes Arbeitszimmer ist nicht mehr nötig. Lena macht 120 × 6 € = <b>720 €</b> geltend.',
       merker:'Homeoffice-Pauschale: 6 €/Tag, max. 1.260 €/Jahr. Kein Arbeitszimmer nötig. Gilt alternativ zur Entfernungspauschale für denselben Tag!'},
      {nr:3, situation:'Lena fährt an 180 Arbeitstagen 22 km einfache Strecke zur Schule mit dem Auto. Das Schuljahr 2025/26 läuft – es gilt die neue Entfernungspauschale ab 2026.',
       frage:'Wie hoch ist die Entfernungspauschale für Lenas Fahrten (VZ 2026)?',
       opts:['180 × 22 × 0,38 € = 1.504,80 € (einheitlich ab 2026)','180 × 22 × 0,30 € = 1.188 € (alter Satz, gilt bis 2025)','180 × 44 × 0,38 € = 3.009,60 € (Hin- und Rückfahrt)','Pauschal 1.000 € unabhängig von der Strecke'],
       ans:0, explain:'<b>Entfernungspauschale ab VZ 2026 (§ 9 Abs. 1 Nr. 4 EStG, StÄndG 2025):</b> Einheitlich <b>0,38 € je Entfernungskilometer ab dem ersten Kilometer</b> – die bisherige Staffelung (0,30 € für km 1–20, 0,38 € ab km 21) ist weggefallen. 22 km × 0,38 € × 180 Tage = <b>1.504,80 €</b>. Bis 2025 galt noch: 20 × 0,30 + 2 × 0,38 = 6,76 €/Tag × 180 = 1.216,80 €. Die Vereinfachung gilt ab Veranlagungszeitraum 2026.',
       merker:'Ab 2026: einheitlich 0,38 €/km ab km 1 (Steueränderungsgesetz 2025). Gilt nur für die einfache Strecke – keine Hin- und Rückfahrt. Kein Abzug für denselben Tag wie Homeoffice-Pauschale.'},
    ]
  },
  {
    id:'p3', icon:'🛒', cat:'USt', title:'Die Umsatzsteuerfalle',
    intro:'Ali eröffnet ein kleines Café in Berlin-Mitte. Er verkauft Kaffee, belegte Brötchen und abgepackte Kaffeebohnen zum Mitnehmen.',
    steps:[
      {nr:1, situation:'Ali verkauft eine Tasse Cappuccino (Vor-Ort-Verzehr) für 3,80 € brutto.',
       frage:'Welcher Umsatzsteuersatz und welcher Nettobetrag gelten?',
       opts:['7 % – Kaffee ist ein Lebensmittel','19 % – Restaurantleistung ist mit voll besteuert; Netto: 3,19 €','0 % – Kleinunternehmer zahlen keine USt','7 % bis 250 € Tagesumsatz, dann 19 %'],
       ans:1, explain:'<b>19 % USt bei Vor-Ort-Verzehr:</b> Das Servieren von Speisen und Getränken im Lokal ist eine Restaurantleistung – voller Steuersatz 19 % (§ 12 Abs. 1 UStG). Netto: 3,80 / 1,19 = <b>3,19 €</b>. Anders: Abgepackte Lebensmittel zum Mitnehmen → 7 %.',
       merker:'Faustformel: Vor-Ort (serviert) = 19 %. Zum Mitnehmen (verpackt) = 7 %. Die Zubereitung und das Ambiente sind der Unterschied.'},
      {nr:2, situation:'Ali verkauft auch abgepackte Kaffeebohnen (250 g, ungemahlen) zum Mitnehmen für 8,00 € brutto.',
       frage:'Wie hoch ist die enthaltene Umsatzsteuer bei den Kaffeebohnen?',
       opts:['ca. 1,28 € (19 %): Kaffeebohnen unterliegen dem vollen Steuersatz (nicht Anlage 2 UStG)','0,52 € (7 %): Lebensmittel zum Mitnehmen = ermäßigter Satz','0 €: Kaffeebohnen sind umsatzsteuerfrei','0,40 € (5 %): Grundnahrungsmittel-Ausnahme'],
       ans:0, explain:'<b>Achtung: Kaffeebohnen sind ein Sonderfall!</b> Obwohl es sich um ein Lebensmittel handelt, sind Kaffeebohnen (auch gemahlen, auch zum Mitnehmen) <b>mit 19 % besteuert</b> – nicht mit 7 %. Der ermäßigte Satz gilt für Lebensmittel nach Anlage 2 UStG; Kaffee ist dort bewusst ausgenommen. Enthaltene USt: 8,00 × 19/119 = <b>ca. 1,28 €</b> (nicht 8,00 × 0,19 = 1,52 € – das wäre der Aufschlag, nicht die enthaltene Steuer!).',
       merker:'Kaffeebohnen, Kaffee-Kapseln = 19 %. Tee = 7 %. Diese Ausnahme ist prüfungsrelevant! Die USt-Anlage 2 genau kennen.'},
      {nr:3, situation:'Alis <b>Nettoumsatz</b> (ohne USt) liegt im laufenden Jahr bei 120.000 €. Sein Steuerberater erwähnt die Kleinunternehmerregelung.',
       frage:'Kann Ali die Kleinunternehmerregelung (§ 19 UStG) nutzen?',
       opts:['Ja, da Jahresumsatz unter 150.000 €','Nein – ab 2025 gilt die Kleinunternehmergrenze von 25.000 € Vorjahresumsatz und 100.000 € laufendes Jahr; Ali überschreitet beide','Ja, nur für die abgepackten Waren','Ja, aber nur im ersten Geschäftsjahr'],
       ans:1, explain:'<b>Kleinunternehmerregelung (§ 19 UStG) ab 2025:</b> Vorjahresumsatz ≤ 25.000 € UND laufendes Jahr ≤ 100.000 €. Ali macht 120.000 € – er überschreitet die laufende Grenze von 100.000 € und muss zwingend USt ausweisen und abführen. Keine Option!',
       merker:'Kleinunternehmer ab 2025: 25.000 € Vorjahr + 100.000 € laufend. Bei Überschreiten im laufenden Jahr: Sofortiger Wegfall der KU-Regelung!'},
    ]
  },
  {
    id:'p4', icon:'⚠️', cat:'AO', title:'Einspruch – fast zu spät',
    intro:'Petra erhält am Freitag, 7. Februar 2025 ihren Einkommensteuerbescheid 2023 per Post. Sie stellt beim Lesen fest, dass das Finanzamt ihre Fortbildungskosten (2.400 € brutto – als Arbeitnehmerin ohne Vorsteuerabzug) nicht anerkannt hat.',
    steps:[
      {nr:1, situation:'Der Bescheid wurde laut Poststempel am 3. Februar 2025 aufgegeben.',
       frage:'Bis wann muss Petra spätestens Einspruch einlegen?',
       opts:['7. März 2025 (1 Monat ab Empfang am 7. Feb.)','7. März 2025 (1 Monat ab Bekanntgabe = 7. Feb. + 4 Tage = 7. Feb., dann 1 Monat)','3. März 2025 (1 Monat ab Aufgabedatum)','7. April 2025 (2 Monate Kulanzfrist)'],
       ans:0, explain:'<b>Bekanntgabe (§ 122 Abs. 2 AO):</b> Aufgabe 3. Feb. + 4 Tage = Bekanntgabe am <b>7. Februar 2025</b>. Einspruchsfrist: 1 Monat = bis <b>7. März 2025</b>. Achtung: Wenn der 7. März ein Wochenende oder Feiertag wäre, würde die Frist auf den nächsten Werktag verlängert (§ 108 Abs. 3 AO).',
       merker:'Formel: Aufgabedatum + 4 Tage = Bekanntgabe + 1 Monat = Einspruchsendedatum. Bei Wochenenden/Feiertagen: nächster Werktag.'},
      {nr:2, situation:'Petra reicht am 7. März 2025 ihren Einspruch ein, begründet ihn aber erst 3 Wochen später. Das Finanzamt fordert eine Begründung innerhalb von 4 Wochen.',
       frage:'Was passiert, wenn Petra die Begründung nicht fristgerecht nachreicht?',
       opts:['Der Einspruch gilt automatisch als zurückgenommen','Das Finanzamt kann den Einspruch als unbegründet zurückweisen (§ 367 AO), muss es aber nicht','Der Einspruch wird verlängert','Petra verliert das Recht auf Klage beim Finanzgericht'],
       ans:1, explain:'Das Finanzamt kann zwar auffordern (§ 364b AO), Sachargumente innerhalb einer Frist beizubringen. Werden sie nicht geliefert, kann das FA Vortrag präkludieren (ausschließen). Dennoch: Der Einspruch selbst bleibt bestehen und wird entschieden. Das FA weist zurück oder gibt nach – das ist ein Ermessensspielraum.',
       merker:'Einspruch fristgerecht einlegen – Begründung kann nachgereicht werden. Trotzdem: Setze dir selbst eine Frist, damit das FA nicht präkludiert.'},
      {nr:3, situation:'Das Finanzamt weist den Einspruch zurück. Petra möchte nun vor Gericht klagen. Gleichzeitig bemerkt das Finanzamt einen weiteren Fehler zu ihren Ungunsten.',
       frage:'Was muss das Finanzamt tun, bevor es im Einspruchsverfahren zu Lasten von Petra entscheiden kann?',
       opts:['Gar nichts – das FA entscheidet frei','Petra über die mögliche Verböserung informieren und ihr die Rücknahme des Einspruchs ermöglichen (§ 367 Abs. 2 S. 2 AO)','Automatisch an das Finanzgericht weiterleiten','Petra eine Mahnung schicken'],
       ans:1, explain:'<b>Verböserungshinweis (§ 367 Abs. 2 Satz 2 AO):</b> Bevor das Finanzamt eine <b>reformatio in peius</b> (Verschlechterung für den Einspruchsführer) vornimmt, muss es ausdrücklich darauf hinweisen. Petra bekommt dann die Möglichkeit, ihren Einspruch zurückzunehmen – um die Verschlechterung zu verhindern.',
       merker:'Verböserung = Verschlechterung für den Einspruchsführer. Vorher: Pflichthinweis + Rücknahmemöglichkeit. Ohne Hinweis: rechtswidriger Bescheid!'},
    ]
  },
  {
    id:'p5', icon:'💼', cat:'ESt', title:'Freiberufler oder Gewerbetreibender?',
    intro:'Thomas ist Diplom-Ingenieur und berät Unternehmen zu Energieeffizienz. Er arbeitet allein, hat keine Angestellten und ist in Berlin ansässig.',
    steps:[
      {nr:1, situation:'Thomas fragt sich, ob er freiberuflich oder gewerblich tätig ist – das hat steuerliche Konsequenzen.',
       frage:'Was ist der steuerrechtliche Unterschied zwischen Freiberufler und Gewerbetreibenden?',
       opts:['Kein Unterschied – alle Selbstständigen sind Gewerbetreibende','Freiberufler (§ 18 EStG) erzielen Einkünfte aus selbstständiger Arbeit; Gewerbetreibende (§ 15 EStG) Einkünfte aus Gewerbebetrieb – und zahlen Gewerbesteuer','Freiberufler haben weniger Steuern zu zahlen pauschal','Gewerbetreibende müssen keine Umsatzsteuer zahlen'],
       ans:1, explain:'<b>§ 18 EStG (Freiberufler)</b>: Katalogberufe (Ärzte, Anwälte, Architekten, Ingenieure, Lehrer, Künstler etc.) und ähnliche Berufe. <b>Kein Gewerbebetrieb, keine Gewerbesteuer.</b> Thomas als Diplom-Ingenieur in klassischer Beratung fällt unter § 18 EStG. <b>§ 15 EStG (Gewerbetreibender)</b>: Gewerbesteuer + Gewerbesteueranrechnung auf ESt.',
       merker:'Ingenieure sind im Katalog des § 18 EStG – meist Freiberufler. Tricky: Wenn ein Freiberufler einen Angestellten ohne eigene Qualifikation einstellt, kann die Tätigkeit "gewerblich infiziert" werden.'},
      {nr:2, situation:'Thomas macht einen Jahresgewinn von 95.000 €. Er fragt sich, ob er Gewerbesteuer zahlen muss.',
       frage:'Muss Thomas als Freiberufler Gewerbesteuer zahlen?',
       opts:['Ja – alle Selbstständigen ab 24.500 € Gewinn','Nein – Freiberufler unterliegen nicht der Gewerbesteuer (§ 2 GewStG)','Ja, aber nur in Berlin mit seinem hohen Hebesatz','Nein, aber er muss eine Gewerbesteuererklärung abgeben'],
       ans:1, explain:'<b>Gewerbesteuer (§ 2 GewStG)</b> trifft nur Gewerbebetriebe. Als Freiberufler (§ 18 EStG) betreibt Thomas keinen Gewerbebetrieb – keine Gewerbesteuer. Das ist ein erheblicher steuerlicher Vorteil: Bei 95.000 € Gewinn würde die GewSt bei typisch 13-15 % effektivem Satz 12.000–14.000 € zusätzlich bedeuten.',
       merker:'Freiberufler zahlt keine Gewerbesteuer. Gewerbetreibender: 3,5 % × Gewinn × Hebesatz der Gemeinde. Berlin: Hebesatz 410 % → effektiv ~14,4 %.'},
      {nr:3, situation:'Thomas erzielt 95.000 € Gewinn und zahlt keine Gewerbesteuer. Er ist unverheiratet, kinderlos, konfessionslos.',
       frage:'Welcher Steuersatz gilt für Einkommensteuer für Thomas bei ~95.000 € zu versteuerndem Einkommen (Näherungsrechnung)?',
       opts:['14 % – Eingangssteuersatz für alle','42 % Spitzensteuersatz auf den gesamten Betrag','Progressiv – effektiver Steuersatz ca. 30-34 % auf das Gesamteinkommen, Grenzsteuersatz 42 %','25 % Abgeltungsteuer wie bei Kapitalerträgen'],
       ans:2, explain:'<b>Progressive Einkommensteuer (§ 32a EStG):</b> Der Steuersatz steigt mit dem Einkommen. Bei 95.000 € gilt der <b>Grenzsteuersatz von 42 %</b> (Spitzensteuersatz ab 69.879 €) auf den darüber liegenden Teil. Der <b>effektive (Durchschnitts-)Steuersatz</b> liegt bei ca. 30–34 % – weil auf die unteren Einkommensbereiche weniger Steuer anfällt. Das Missverständnis "42 % auf alles" ist weit verbreitet!',
       merker:'Grenzsteuersatz ≠ Durchschnittssteuersatz! Der Grenzsteuersatz gilt nur für den letzten Euro. Der Durchschnittssatz ist immer niedriger – dank Steuerprogression.'},
    ]
  },
  {
    id:'p6', icon:'🏦', cat:'AO', title:'Die Selbstanzeige',
    intro:'Nadine hat 2019–2022 Mieteinnahmen aus einer Ferienwohnung (insg. 28.000 €) nicht in der Steuererklärung angegeben. Sie bereut es und möchte reinen Tisch machen.',
    steps:[
      {nr:1, situation:'Nadine möchte eine strafbefreiende Selbstanzeige (§ 371 AO) stellen. Sie überlegt, ob sie nur die letzten 2 Jahre offenlegen soll.',
       frage:'Wäre eine Teilselbstanzeige (nur 2021–2022) strafbefreiend?',
       opts:['Ja – auch Teilanzeigen wirken strafbefreiend','Nein – seit 2015 gilt: nur vollständige Selbstanzeigen aller unverjährten Zeiträume sind strafbefreiend','Ja, wenn der Betrag unter 25.000 € liegt','Nein, aber Strafminderung ist möglich'],
       ans:1, explain:'<b>Vollständigkeitsprinzip seit 2015 (§ 371 Abs. 1 AO):</b> Die Selbstanzeige muss für alle unverjährten Zeiträume vollständig sein. Nadine muss alle 4 Jahre (2019–2022) offenlegen. Eine Teilanzeige würde keine Straffreiheit bringen. Bei vorsätzlicher Hinterziehung: 10 Jahre Verjährung!',
       merker:'Selbstanzeige: Alles oder nichts. Seit 2015 gibt es keine "Teilvergebung" mehr. Alle unverjährten Zeiträume müssen vollständig korrigiert werden.'},
      {nr:2, situation:'Nadines hinterzogene Steuer beträgt zusammen 8.400 €. Sie möchte wissen, ob zusätzliche Kosten entstehen.',
       frage:'Welche Zahlungen muss Nadine neben der Steuer leisten, um Straffreiheit zu erlangen?',
       opts:['Nur die Steuerschuld 8.400 € nachzahlen','Steuerschuld + Hinterziehungszinsen nach § 235 AO (1,8 % p.a.) für den Hinterziehungszeitraum','Steuerschuld + 10 % Strafzuschlag (§ 398a AO)','Steuerschuld + Säumniszuschläge + Ordnungsgeld'],
       ans:1, explain:'<b>Hinterziehungszinsen (§ 235 AO):</b> Zusätzlich zur hinterzogenen Steuer sind Zinsen von <b>1,8 % p.a.</b> (0,15 %/Monat) für den Hinterziehungszeitraum zu zahlen. Für 2019–2022 ca. 3–5 Jahre × 1,8 % = ca. 756–1.512 € Zinsen. Der 10 %-Zuschlag nach § 398a AO gilt erst ab Hinterziehung über <b>25.000 €</b> – den erreicht Nadine nicht.',
       merker:'Unter 25.000 €: Steuer + Zinsen reichen. Ab 25.000 €: Steuer + Zinsen + 10–20 % Zuschlag (§ 398a AO). Bei Nadines 8.400 € ist nur Steuer + Zinsen nötig.'},
      {nr:3, situation:'Beim Abfassen der Selbstanzeige erfährt Nadine, dass das Finanzamt bereits bei ihrer Nachbarin eine Betriebsprüfung durchführt, die ähnliche Ferienwohnungen betrifft.',
       frage:'Welche Auswirkung hat das auf Nadines Selbstanzeige?',
       opts:['Keine – die Prüfung der Nachbarin betrifft Nadine nicht','Es kommt auf den Zeitpunkt an: Hat das Finanzamt Nadines Tat bereits entdeckt (oder musste sie damit rechnen), greift eine Sperrwirkung (§ 371 Abs. 2 AO) – keine Straffreiheit mehr','Straffreiheit nur noch, wenn sie sich innerhalb von 24h meldet','Die Selbstanzeige wirkt rückwirkend ab dem Moment der Einreichung'],
       ans:1, explain:'<b>Sperrwirkung (§ 371 Abs. 2 AO):</b> Die Selbstanzeige wirkt nicht strafbefreiend, wenn die Tat bei Eingang der Anzeige bereits entdeckt war <b>und der Täter damit rechnen musste</b>. Eine laufende Prüfung ähnlicher Sachverhalte in der Nachbarschaft kann ein Indiz sein. Im Zweifel: Sofort Selbstanzeige stellen und Steuerberater / Anwalt einschalten!',
       merker:'Sperrwirkung = zu spät. Prüfungsanordnung bekanntgegeben? Tat entdeckt? → Keine Straffreiheit mehr. Im Zweifel gilt: Jede Stunde kann entscheiden.'},
    ]
  },
  {
    id:'p7', icon:'📄', cat:'AO', title:'Der geänderte Steuerbescheid',
    intro:'Martin Eckhardt betreibt ein kleines Café in Leipzig. Sein USt-Bescheid 2022 ist seit langem bestandskräftig. Plötzlich gerät er ins Visier der Finanzverwaltung – und muss verstehen, wann und wie ein „fertiger" Bescheid nochmals geändert werden darf.',
    steps:[
      {nr:1, situation:'Das Finanzamt entdeckt bei einer Kontenabfrage, dass Martin 2022 Bareinnahmen von 8.000 € <b>brutto</b> (inkl. 19 % USt; netto ca. 6.723 €) nicht verbucht hat. Der USt-Bescheid 2022 ist bereits bestandskräftig.',
       frage:'Auf welche Vorschrift stützt das Finanzamt die Änderung zulasten von Martin?',
       opts:['§ 129 AO – offenbare Unrichtigkeit','§ 173 Abs. 1 Nr. 1 AO – neue Tatsachen zulasten','§ 175 AO – Grundlagenbescheid','Der Bescheid kann nicht mehr geändert werden'],
       ans:1, explain:'<b>§ 173 Abs. 1 Nr. 1 AO:</b> Ein bestandskräftiger Bescheid kann geändert werden, wenn <b>nachträglich Tatsachen oder Beweismittel bekannt werden</b>, die zu einer höheren Steuer führen. Voraussetzung: Die Tatsache war dem FA beim Erlass des Bescheids noch nicht bekannt. Die nicht verbuchten Bareinnahmen sind genau so eine neue, dem FA erst jetzt bekannte Tatsache.',
       merker:'§ 173 Nr. 1 AO = neue Tatsache ZULASTEN. Ohne dieses Instrument wäre jeder fehlerhafte Bescheid nach Bestandskraft unantastbar – das würde Steuerhinterziehung zu leicht machen.'},
      {nr:2, situation:'Martin findet einen Betriebsausgabenbeleg: Kaffeemaschinen-Reparatur <b>1.200 € netto</b> zzgl. 228 € USt = 1.428 € brutto. Als Unternehmer kann Martin die 228 € Vorsteuer beim Finanzamt zurückfordern – er setzt also nur 1.200 € netto als Betriebsausgabe an.',
       frage:'Kann der ESt-Bescheid 2022 jetzt noch zugunsten von Martin geändert werden?',
       opts:['Nein – neue Tatsachen können nur zulasten des Steuerpflichtigen berücksichtigt werden','Ja, nach § 173 Abs. 1 Nr. 2 AO – aber nur wenn Martin kein grobes Verschulden am Vergessen trifft','Ja, immer und ohne Einschränkung','Nein, da die Einspruchsfrist schon lange abgelaufen ist'],
       ans:1, explain:'<b>§ 173 Abs. 1 Nr. 2 AO – zugunsten:</b> Neue Tatsachen können auch zugunsten des Steuerpflichtigen berücksichtigt werden, wenn ihn <b>kein grobes Verschulden</b> am nachträglichen Bekanntwerden trifft. Einfaches Vergessen = kein grobes Verschulden → Änderung möglich. Wer den Beleg bewusst zurückgehalten hätte, wäre von der Korrektur ausgeschlossen.',
       merker:'§ 173 Nr. 2 = ZUGUNSTEN, aber kein grobes Verschulden. Merke: Zugunsten ist strenger als zulasten – der Steuerpflichtige darf keine Schuld tragen.'},
      {nr:3, situation:'Das Finanzamt bemerkt beim Änderungsbescheid selbst einen Tippfehler: Es hat Martins USt-Zahllast mit 4.800 € statt 3.840 € beziffert – ein klarer Rechenfehler.',
       frage:'Auf welche Vorschrift stützt sich die Berichtigung dieses Fehlers?',
       opts:['§ 173 AO – neue Tatsachen','§ 172 AO – allgemeine Änderungsvorschrift','§ 129 AO – Berichtigung offenbarer Unrichtigkeiten','§ 175 AO – Grundlagenbescheid'],
       ans:2, explain:'<b>§ 129 AO:</b> Rein mechanische Fehler – Rechen-, Schreib- oder Übertragungsfehler – die dem FA bei Bescheidserlass unterlaufen sind und <b>offenbar erkennbar</b> sind, können jederzeit berichtigt werden, ohne dass neue Tatsachen vorliegen müssen. Ein offensichtlicher Rechenfehler (4.800 statt 3.840) fällt genau darunter.',
       merker:'§ 129 = Tippmaus-Paragraph. Nur für mechanische Fehler, kein neues Besteuerungsmerkmal – und der Fehler muss aus dem Akt selbst erkennbar sein.'},
      {nr:4, situation:'Martin erhält den geänderten Bescheid und ist mit der Höhe nicht einverstanden. Er fragt sich, ob er noch etwas tun kann.',
       frage:'Wie lange hat Martin Zeit, um Einspruch gegen den geänderten Steuerbescheid einzulegen?',
       opts:['Gar nicht mehr – er hätte gegen den ersten Bescheid Einspruch einlegen müssen','1 Woche ab Zugang','1 Monat ab Bekanntgabe des geänderten Bescheids (§ 355 AO)','3 Monate'],
       ans:2, explain:'<b>§ 355 AO:</b> Jeder neue oder geänderte Steuerbescheid gibt eine <b>neue Einspruchsfrist von 1 Monat</b> ab Bekanntgabe. Die Bestandskraft des alten Bescheids ist irrelevant – der Änderungsbescheid ist ein eigenständiger, anfechtbarer Verwaltungsakt. Martin hat also noch einen Monat Zeit.',
       merker:'Merke: Änderungsbescheid = neuer Verwaltungsakt = neue 1-Monats-Einspruchsfrist. Das gilt für jeden Änderungsbescheid, egal auf welcher Grundlage er erlassen wurde.'},
    ]
  }
  ,
  {
    id:'p8', icon:'🔧', cat:'USt', title:'Werklieferung oder Werkleistung?',
    intro:'Tischler Thomas fertigt und montiert Einbaumöbel. Drei Aufträge kommen rein – jeder unterscheidet sich in einem entscheidenden Detail.',
    steps:[
      {nr:1, situation:'Auftrag A: Thomas baut einen Einbauschrank aus eigenem Holz (Materialwert: 800 €, Arbeitslohn: 400 €) beim Kunden in dessen Wohnung ein.',
       frage:'Wie ist dieser Umsatz umsatzsteuerlich zu qualifizieren?',
       opts:['Werkleistung – Thomas arbeitet beim Kunden','Werklieferung (§ 3 Abs. 4 UStG) – eigene Stoffe überwiegen; Behandlung wie Lieferung','Gemischte Leistung – kein eindeutiger Fall','Steuerfreie Lieferung, da Einbau beim Kunden'],
       ans:1, explain:'<b>Werklieferung (§ 3 Abs. 4 UStG):</b> Thomas verarbeitet überwiegend <b>eigene Stoffe</b> (800 € Material > 400 € Lohn). Das qualifiziert als Werklieferung = Behandlung wie eine Lieferung. Leistungsort: Ort des Einbaus (§ 3 Abs. 7 UStG). USt-Satz: 19 %. Maßgeblich ist WEM das Hauptmaterial gehört, nicht wer arbeitet.',
       merker:'Werklieferung = eigene Stoffe überwiegen → wie Lieferung. Leistungsort = Einbauort.'},
      {nr:2, situation:'Auftrag B: Thomas repariert einen vorhandenen Schrank des Kunden. Er verwendet das Holz des Kunden (Wert: 50 €). Sein Arbeitslohn beträgt 350 €.',
       frage:'Wie ändert sich die Qualifikation, wenn Thomas mit Kundenmaterial arbeitet?',
       opts:['Werklieferung bleibt – Thomas führt immer Werklieferungen aus','Werkleistung (§ 3 Abs. 9 UStG) – fremde Stoffe; Leistungsort B2B: Sitz des Leistungsempfängers','Steuerfreie Instandhaltung','Werklieferung, da der Schrank körperlich bearbeitet wird'],
       ans:1, explain:'<b>Werkleistung (§ 3 Abs. 9 UStG):</b> Thomas verwendet <b>fremde Stoffe</b> (Kundenmaterial: 50 €, Arbeit: 350 €). Damit liegt eine Werkleistung vor = sonstige Leistung. Leistungsort B2B: Sitz des Leistungsempfängers (§ 3a Abs. 2 UStG). Leistungsort B2C: Ort der Tätigkeit (§ 3a Abs. 1 UStG).',
       merker:'Werkleistung = fremde Stoffe → wie sonstige Leistung. Leistungsort B2B = Sitz Empfänger.'},
      {nr:3, situation:'Auftrag C: Thomas fertigt denselben Schrank wie in Auftrag A (eigene Stoffe, Wert 800 €) und baut ihn in Zürich (Schweiz) ein.',
       frage:'Unterliegt dieser Umsatz der deutschen Umsatzsteuer?',
       opts:['Ja – Thomas ist in Deutschland ansässig, daher immer deutsche USt','Nein – Leistungsort ist Zürich (Werklieferung = Einbauort § 3 Abs. 7 UStG); in Deutschland nicht steuerbar','Ja – Lieferung in die Schweiz ist als Ausfuhr steuerfrei (mit 0 %)','Nein – Schweiz ist kein EU-Staat, daher generell steuerbefreit'],
       ans:1, explain:'<b>Werklieferung → Leistungsort = Einbauort:</b> Da der Einbau in Zürich stattfindet, ist der Umsatz in der Schweiz steuerbar, nicht in Deutschland (§ 3 Abs. 7 UStG). In Deutschland ist er <b>nicht steuerbar</b>. Thomas muss die Schweizer USt-Regelungen beachten und sich ggf. dort registrieren. Hinweis: Anders wäre es bei einer Ausfuhrlieferung ohne Einbau – dort wäre der Umsatz steuerbar aber steuerfrei.',
       merker:'Werklieferung = Lieferung. Lieferort = Einbauort. Einbau Schweiz = schweizer Steuerrecht gilt.'},
    ]
  },
  {
    id:'p9', icon:'🔗', cat:'USt', title:'Reihengeschäft: Wer schuldet was?',
    intro:'Großhändlerin Gabi (Deutschland) kauft Elektrogeräte bei Hersteller A (Polen) und verkauft sie weiter an Endkunde C (Frankreich). Die Ware geht direkt von Polen nach Frankreich.',
    steps:[
      {nr:1, situation:'A (Polen) → B/Gabi (Deutschland) → C (Frankreich). Gabi beauftragt die Spedition und tritt gegenüber A mit ihrer deutschen USt-ID auf.',
       frage:'Welche der beiden Lieferungen im Reihengeschäft ist die bewegte Lieferung?',
       opts:['Lieferung A→B (Polen→Deutschland) – weil A der Hersteller ist','Lieferung B→C (Deutschland→Frankreich) – weil B (Gabi) den Transport beauftragt und gegenüber A die USt-ID des Abgangslandes verwendet','Beide Lieferungen sind gleich – die Ware geht von A nach C','Keine – bei einem Reihengeschäft gibt es keine bewegte Lieferung'],
       ans:1, explain:'<b>§ 3 Abs. 6 Satz 5 UStG:</b> Wenn der Mittelsmann (B) den Transport beauftragt und gegenüber seinem Lieferanten (A) die USt-ID des <b>Abgangslandes</b> (hier: deutsche ID) verwendet, wird die Warenbewegung der <b>Lieferung B→C zugeordnet</b>. Lieferung A→B ist dann die unbewegte Lieferung – ihr Ort liegt im Abgangsland Polen.',
       merker:'B beauftragt Transport + nutzt USt-ID Abgangsland → bewegte Lieferung = B→C.'},
      {nr:2, situation:'Gabi ändert ihre Vorgehensweise und tritt gegenüber A nun mit ihrer französischen USt-ID (Bestimmungsland) auf.',
       frage:'Wie ändert sich die Zuordnung der bewegten Lieferung?',
       opts:['Keine Änderung – die physische Warenbewegung bestimmt alles','Die bewegte Lieferung wechselt zu A→B, weil B die USt-ID des Bestimmungslandes (Frankreich) verwendet (§ 3 Abs. 6 Satz 6 UStG)','Die bewegte Lieferung entfällt, da Gabi nun im Bestimmungsland registriert ist','B→C bleibt die bewegte Lieferung, da Gabi den Transport beauftragt'],
       ans:1, explain:'<b>§ 3 Abs. 6 Satz 6 UStG – Ausnahme:</b> Verwendet der Mittelsmann die USt-ID des <b>Bestimmungslandes</b>, wechselt die bewegte Lieferung zu <b>A→B</b>. Lieferung B→C ist dann die unbewegte Lieferung im Bestimmungsland Frankreich. Konsequenz: A muss jetzt die innergemeinschaftliche Lieferung deklarieren; B schuldet in Frankreich den innergemeinschaftlichen Erwerb.',
       merker:'B nutzt USt-ID Bestimmungsland → bewegte Lieferung = A→B. Zuordnung dreht sich um.'},
      {nr:3, situation:'Im ursprünglichen Fall (deutscheUSt-ID bei A): Die Lieferung B→C ist die bewegte, eine innergemeinschaftliche Lieferung von Deutschland nach Frankreich.',
       frage:'Welche umsatzsteuerlichen Pflichten hat Gabi für die Lieferung B→C?',
       opts:['Gabi stellt eine Rechnung mit 19 % deutsche USt aus','Steuerfreie innergemeinschaftliche Lieferung (§ 4 Nr. 1b, § 6a UStG): Gabi stellt Nettorechnung aus und meldet die Lieferung in der ZM (Zusammenfassende Meldung)','Gabi zahlt 20 % französische USt direkt ans französische Finanzamt','Keine Pflichten – Reihengeschäfte sind automatisch steuerbefreit'],
       ans:1, explain:'<b>Innergemeinschaftliche Lieferung B→C:</b> Steuerfrei nach § 4 Nr. 1b UStG i.V.m. § 6a UStG. Voraussetzungen: C hat gültige ausländische USt-ID, Ware gelangt in anderen EU-Staat, Nachweis durch Gelangensbestätigung. Gabi meldet die Lieferung in der <b>Zusammenfassenden Meldung (ZM)</b>. C schuldet in Frankreich den innergemeinschaftlichen Erwerb.',
       merker:'Ig. Lieferung = steuerfrei + Nettorechnung + ZM-Meldung. C schuldet Erwerb in Frankreich.'},
    ]
  },
];
;


// ==================== PRÜFUNGSFRAGEN (D_EXAM) ====================
// Einheitliches MC-Format: {q, opts[4], ans(0-3), cat, lvl, explain}
// cat: 'est'|'ust'|'ao'|'bilanz'|'recht'
// lvl: 1=Basis, 2=Fortgeschritten, 3=Prüfungsniveau

const D_EXAM = [

// ── EINKOMMENSTEUER ──────────────────────────────────────────────
{cat:'est',lvl:1,q:'Welche der folgenden Einkunftsarten unterliegt der Gewerbesteuer?',
 opts:['Einkünfte aus selbständiger Arbeit (§ 18 EStG)','Einkünfte aus Gewerbebetrieb (§ 15 EStG)','Einkünfte aus Kapitalvermögen (§ 20 EStG)','Einkünfte aus Vermietung und Verpachtung (§ 21 EStG)'],
 ans:1,explain:'Nur <b>Einkünfte aus Gewerbebetrieb (§ 15 EStG)</b> lösen Gewerbesteuerpflicht aus. Freiberufler (§ 18 EStG), Kapitalanleger und Vermieter zahlen keine Gewerbesteuer.'},

{cat:'est',lvl:1,q:'Wie hoch ist der Arbeitnehmer-Pauschbetrag für Werbungskosten (§ 9a EStG) ab dem Veranlagungszeitraum 2023?',
 opts:['920 €','1.000 €','1.230 €','2.000 €'],
 ans:2,explain:'Der <b>Arbeitnehmer-Pauschbetrag beträgt 1.230 €</b> (ab VZ 2023, vorher 1.000 €). Er wird automatisch abgezogen, wenn keine höheren Werbungskosten nachgewiesen werden.'},

{cat:'est',lvl:2,q:'Petra (ledig, konfessionslos) erzielt 2026 ausschließlich Einkünfte aus nichtselbständiger Arbeit von 75.000 €. Wie wird ihre Einkommensteuer berechnet?',
 opts:['Pauschal 25 % auf 75.000 €','Progressiver Tarif nach § 32a EStG auf das zu versteuernde Einkommen (Einkünfte minus Werbungskosten, Sonderausgaben, außergewöhnliche Belastungen)','Einheitlich 42 % auf alles über dem Grundfreibetrag','Flat Tax 20 % auf alle Einkünfte'],
 ans:1,explain:'Die ESt wird nach dem <b>progressiven Tarif (§ 32a EStG)</b> auf das <b>zu versteuernde Einkommen (zvE)</b> berechnet. Das zvE = Summe der Einkünfte − Werbungskosten − Sonderausgaben − außergewöhnliche Belastungen − Freibeträge. Der Durchschnittssteuersatz bei 75.000 € liegt ca. bei 27–29 %.'},

{cat:'est',lvl:1,q:'Was ist der Grundfreibetrag bei der Einkommensteuer (§ 32a EStG) – wozu dient er?',
 opts:['Mindestbetrag, der bei Abgabe einer Steuererklärung immer erstattet wird','Einkommensbetrag, bis zu dem keine Einkommensteuer anfällt – sichert das steuerliche Existenzminimum','Freibetrag nur für Rentner','Steuerfreier Betrag für Zinseinkünfte'],
 ans:1,explain:'Der <b>Grundfreibetrag</b> (2025: 12.096 €; 2026: 12.336 €) sichert das steuerliche Existenzminimum. Einkommen bis zu dieser Grenze bleibt steuerfrei. Ab dem ersten Euro darüber beginnt die Besteuerung mit dem Eingangssteuersatz von 14 %.'},

{cat:'est',lvl:2,q:'Welches Prinzip liegt der Einkommensteuer zugrunde, wenn Steuerpflichtige mit gleichem Einkommen gleich viel Steuern zahlen?',
 opts:['Territorialprinzip','Welteinkommensprinzip','Horizontale Steuergerechtigkeit','Progressionsprinzip'],
 ans:2,explain:'<b>Horizontale Steuergerechtigkeit:</b> Personen mit gleicher wirtschaftlicher Leistungsfähigkeit (gleiches Einkommen) werden gleich besteuert. Die <b>vertikale Steuergerechtigkeit</b> fordert, dass höhere Einkommen verhältnismäßig mehr Steuern zahlen – umgesetzt durch die Progression des § 32a EStG.'},

{cat:'est',lvl:2,q:'Hans kauft im April 2026 ein vermietetes Mehrfamilienhaus (Baujahr 2010) für 800.000 € (davon 200.000 € Grundstücksanteil). Wie hoch ist seine AfA-Absetzung im Kaufjahr 2026 (§ 7 EStG)?',
 opts:['12.000 € (volle Jahres-AfA, 2 % von 600.000 €)','9.000 € (zeitanteilig: 9/12 des Jahres ab April = 9 Monate)','6.000 € (halbjährig, da im ersten Halbjahr erworben)','16.000 € (2 % von 800.000 €, Grundstück zählt mit)'],
 ans:1,explain:'<b>AfA § 7 Abs. 4 EStG:</b> 2 % p.a. für Gebäude (Baujahr vor 2023). Basis: nur der Gebäudeanteil (800.000 − 200.000 = <b>600.000 €</b>). Jahres-AfA = 600.000 × 2 % = 12.000 €.<br><br><b>Zeitanteiligkeit im Anschaffungsjahr (§ 7 Abs. 1 S. 4 EStG):</b> Im Erwerbsjahr nur anteilig für die Monate ab Anschaffung. Kauf im April = April bis Dezember = <b>9 Monate</b>. AfA 2026: 12.000 × 9/12 = <b>9.000 €</b>.<br><br>Ab 2027 dann die volle Jahres-AfA von 12.000 €.'},

{cat:'est',lvl:3,q:'Was ist die \"Fünftelregelung\" (§ 34 EStG) und wann ist sie anwendbar?',
 opts:['Regelung, nach der nur 1/5 aller Einkünfte versteuert werden muss','Tarifermäßigung für außerordentliche Einkünfte (z.B. Abfindungen): rechnerisch wird nur 1/5 des Betrages dem zvE hinzugerechnet, die Steuerdifferenz auf den vollen Betrag hochgerechnet','Sonderregelung für Rentner über 65','Vereinfachungsregel bei Gewinnen aus Grundstücksverkauf'],
 ans:1,explain:'<b>§ 34 EStG – Fünftelregelung:</b> Bei Einkünften, die auf mehrere Jahre entfallen (z.B. Abfindung), wird rechnerisch 1/5 des Betrages dem Einkommen hinzugerechnet. Die resultierende Steuermehrbelastung wird × 5 multipliziert. So mildert die Progression. Anwendbar bei außerordentlichen Einkünften: Abfindungen, Veräußerungsgewinne (§ 34 Abs. 2 EStG).'},

{cat:'est',lvl:2,q:'Was sind Sonderausgaben (§§ 10 ff. EStG)? Nennen Sie ein typisches Beispiel.',
 opts:['Ausgaben, die im Betrieb anfallen – z.B. Büromaterial','Private Ausgaben, die der Gesetzgeber ausnahmsweise abzugsfähig stellt – z.B. Vorsorgeaufwendungen, Kirchensteuer, Altersvorsorge (Riester)','Alle privaten Ausgaben können als Sonderausgaben abgezogen werden','Sonderausgaben gibt es nur bei Gewerbetreibenden'],
 ans:1,explain:'<b>Sonderausgaben</b> sind private Kosten, die steuerlich dennoch abzugsfähig sind. Typisch: Rentenversicherungsbeiträge (§ 10 Abs. 1 Nr. 2 EStG), Kranken-/Pflegeversicherung (§ 10 Abs. 1 Nr. 3 EStG), Kirchensteuer, Riester-Beiträge, Unterhalt (Realsplitting), Spenden. Nicht abzugsfähig: Lebensversicherungsbeiträge (abgeschafft ab 2005).'},

{cat:'est',lvl:1,q:'Klaus ist Taxifahrer und Arbeitnehmer. Er fährt täglich 40 km zur Arbeit (180 Tage/Jahr). Wie hoch ist seine Entfernungspauschale für VZ 2026?',
 opts:['40 × 0,30 € × 180 = 2.160 €','40 × 0,38 € × 180 = 2.736 €','40 × 0,38 € × 2 × 180 = 5.472 € (Hin und Rückfahrt)','Pauschal 1.000 € Arbeitnehmer-Pauschbetrag'],
 ans:1,explain:'<b>Entfernungspauschale ab VZ 2026 (§ 9 Abs. 1 Nr. 4 EStG):</b> Einheitlich 0,38 € je Entfernungskilometer ab dem ersten Kilometer (Steueränderungsgesetz 2025). Nur die <b>einfache Strecke</b> zählt. 40 km × 0,38 € × 180 Tage = <b>2.736 €</b>.'},

{cat:'est',lvl:3,q:'Was versteht man unter \"gewerblicher Infizierung\" (§ 15 Abs. 3 Nr. 1 EStG)?',
 opts:['Umwandlung einer GmbH in eine OHG','Wenn eine Personengesellschaft auch nur teilweise gewerblich tätig ist, werden alle Einkünfte als Gewerbeeinkünfte behandelt','Steuerhinterziehung durch gewerbliche Einnahmen','Zusammenrechnung von Einkünften aus mehreren Betrieben'],
 ans:1,explain:'<b>§ 15 Abs. 3 Nr. 1 EStG – Abfärberegelung:</b> Erzielt eine Personengesellschaft auch nur teilweise gewerbliche Einkünfte (z.B. neben freiberuflicher Tätigkeit), werden <b>alle</b> Einkünfte der Gesellschaft als Gewerbebetrieb eingestuft – auch die eigentlich freiberuflichen. Folge: Gewerbesteuerpflicht für die gesamte Gesellschaft. Lösung: Trennung in zwei Gesellschaften.'},

// ── UMSATZSTEUER ─────────────────────────────────────────────────
{cat:'ust',lvl:1,q:'Was ist das Prinzip der Mehrwertsteuer / Umsatzsteuer?',
 opts:['Jedes Unternehmen zahlt 19 % auf seinen Umsatz ohne Abzugsmöglichkeit','Jedes Unternehmen erhebt USt auf Ausgangsleistungen und darf Vorsteuer auf Eingangsleistungen abziehen – wirtschaftlich nur der Mehrwert wird besteuert','Nur der Endverbraucher zahlt USt direkt an das Finanzamt','Die USt wird einmalig beim Hersteller erhoben'],
 ans:1,explain:'Das <b>Mehrwertsteuer-Prinzip:</b> Unternehmer erhebt USt auf seine Leistungen (Umsatzsteuer), darf aber die gezahlte USt auf Eingangsleistungen als <b>Vorsteuer</b> abziehen (§ 15 UStG). Wirtschaftlich trägt nur der Endverbraucher die Steuer – er kann keine Vorsteuer geltend machen.'},

{cat:'ust',lvl:1,q:'Ein Elektriker berechnet seinem Privatkunden für eine Reparatur 200 € netto. Wie hoch ist der Bruttorechnungsbetrag?',
 opts:['207 €','214 €','238 €','220 €'],
 ans:2,explain:'Regelsteuersatz 19 %: 200 € × 1,19 = <b>238 €</b>. Handwerkerleistungen an Privatkunden unterliegen dem Regelsteuersatz von 19 % (§ 12 Abs. 1 UStG). Hinweis: Der Privatkunde kann 20 % der Lohnkosten (max. 1.200 €/Jahr) als Steuerermäßigung nach § 35a EStG geltend machen.'},

{cat:'ust',lvl:2,q:'Was ist die Voraussetzung für den Vorsteuerabzug (§ 15 UStG)?',
 opts:['Beliebige Ausgabe des Unternehmers reicht aus','Ordnungsgemäße Rechnung mit USt-Ausweis + Leistung für das unternehmerische Tätigkeitsfeld + der Rechnungsaussteller ist ein USt-pflichtiger Unternehmer','Nur möglich bei Investitionen über 1.000 €','Vorsteuerabzug ist immer ausgeschlossen bei gemischter Nutzung'],
 ans:1,explain:'<b>§ 15 UStG – Vorsteuerabzug:</b> Voraussetzungen: (1) ordnungsgemäße Rechnung mit ausgewiesener USt (§ 14 UStG), (2) Leistung für das Unternehmen, (3) Rechnungsaussteller ist Unternehmer. Ausschluss: private Nutzung (anteilig kein Vorsteuerabzug), steuerfreie Ausgangsumsätze (§ 15 Abs. 2 UStG).'},

{cat:'ust',lvl:2,q:'Anna ist Heilpraktikerin. Sie erbringt heilkundliche Leistungen. Welchem Umsatzsteuersatz unterliegen diese?',
 opts:['7 % – ermäßigter Satz für Gesundheitsleistungen','19 % Regelsteuersatz','0 % – steuerfrei nach § 4 Nr. 14 UStG','Heilpraktiker sind Kleinunternehmer, daher keine USt'],
 ans:2,explain:'Heilkundliche Leistungen von Heilpraktikern sind nach <b>§ 4 Nr. 14 UStG steuerfrei</b>. Folge: Keine USt-Ausweisung auf Rechnung, aber auch kein Vorsteuerabzug aus Eingangsleistungen (§ 15 Abs. 2 UStG – Verwendung für steuerfreie Umsätze schließt VSt aus).'},

{cat:'ust',lvl:3,q:'Ein Unternehmer nutzt einen neu gekauften PKW zu 60 % unternehmerisch und 40 % privat. Wie wird die Vorsteuer behandelt?',
 opts:['Voller Vorsteuerabzug, private Nutzung ist irrelevant','Kein Vorsteuerabzug, da gemischte Nutzung','60 % Vorsteuerabzug (unternehmerischer Anteil); private Nutzung wird als unentgeltliche Wertabgabe (§ 3 Abs. 9a UStG) besteuert','Pauschal 50 % Vorsteuerabzug bei gemischter Nutzung'],
 ans:2,explain:'<b>Gemischte Nutzung:</b> Vorsteuerabzug nur in Höhe des unternehmerischen Anteils (60 %). Die private Nutzung gilt als <b>unentgeltliche Wertabgabe (§ 3 Abs. 9a Nr. 1 UStG)</b> – der Unternehmer muss darauf USt entrichten (Bemessungsgrundlage: Kosten der privaten Nutzung). Alternativ: 1 %-Regelung für die Bemessungsgrundlage.'},

{cat:'ust',lvl:1,q:'Welcher USt-Satz gilt für die Lieferung von Büchern (keine E-Books) in Deutschland?',
 opts:['0 % – Bücher sind steuerfrei','7 % – ermäßigter Steuersatz (Anlage 2 UStG)','19 % – Regelsteuersatz','10,7 % – Sonderregelung Kulturleistungen'],
 ans:1,explain:'Bücher, Zeitungen, Zeitschriften und Noten unterliegen dem <b>ermäßigten Steuersatz von 7 %</b> (Anlage 2 Nr. 49 UStG). Achtung: E-Books ebenfalls 7 % seit 2020. Hörbücher: 7 %. Lernspiele/Apps: 19 %.'},

{cat:'ust',lvl:2,q:'Was ist die Ist-Versteuerung (§ 20 UStG) und wer kann sie beantragen?',
 opts:['Besteuerung nach dem tatsächlichen Zahlungseingang statt nach Rechnungsstellung – möglich für Unternehmer mit Jahresumsatz bis 600.000 € oder Freiberufler','Pflichtversteuerung für alle Unternehmer','Sonderregelung nur für Kleinunternehmer','Besteuerung nach Ist-Kosten, nicht nach Plan-Kosten'],
 ans:0,explain:'<b>§ 20 UStG – Ist-Versteuerung:</b> Normalfall ist die Soll-Versteuerung (USt entsteht bei Leistungserbringung). Bei der Ist-Versteuerung entsteht die USt erst mit Zahlungseingang – Liquiditätsvorteil. Möglich für Unternehmer mit Vorjahresumsatz ≤ 600.000 €, für Freiberufler (§ 18 EStG) und für bestimmte Behörden.'},

{cat:'ust',lvl:3,q:'Was versteht man unter dem \"Reverse-Charge-Verfahren\" (§ 13b UStG)?',
 opts:['Rückerstattung der USt an den Endverbraucher','Umkehr der Steuerschuldnerschaft: der Leistungsempfänger (statt des Leistenden) schuldet die Umsatzsteuer ans Finanzamt','Verfahren zur Rückabwicklung fehlerhafter USt-Bescheide','Spezialregelung für grenzüberschreitende Schenkungen'],
 ans:1,explain:'<b>§ 13b UStG – Reverse Charge:</b> Bei bestimmten Umsätzen (z.B. Bauleistungen zwischen Unternehmern, innergemeinschaftliche Dienstleistungen) schuldet nicht der leistende Unternehmer die USt, sondern der <b>Leistungsempfänger</b>. Vorteil: verhindert Umsatzsteuer-Betrug (missing trader). Der Empfänger verrechnet selbst gezahlte USt mit abzugsfähiger Vorsteuer.'},

{cat:'ust',lvl:2,q:'Eine Arztpraxis kauft medizinische Geräte für 50.000 € zzgl. 9.500 € USt. Kann die Praxis die Vorsteuer abziehen?',
 opts:['Ja – immer bei Unternehmern','Nein – da ärztliche Leistungen nach § 4 Nr. 14 UStG steuerfrei sind, ist der Vorsteuerabzug ausgeschlossen','Ja, aber nur 50 %','Ja, wenn die Geräte ausschließlich für gesetzlich Versicherte genutzt werden'],
 ans:1,explain:'<b>§ 15 Abs. 2 UStG:</b> Kein Vorsteuerabzug, soweit der Unternehmer Eingangsleistungen für <b>steuerfreie Ausgangsumsätze</b> verwendet. Da Arztleistungen nach § 4 Nr. 14 UStG steuerfrei sind, ist der Vorsteuerabzug vollständig ausgeschlossen. Das ist ein erheblicher wirtschaftlicher Nachteil für Arztpraxen.'},

// ── ABGABENORDNUNG ───────────────────────────────────────────────
{cat:'ao',lvl:1,q:'Welche Frist gilt grundsätzlich für die Festsetzungsverjährung bei der Einkommensteuer (§ 169 AO)?',
 opts:['2 Jahre','4 Jahre','5 Jahre','10 Jahre'],
 ans:1,explain:'<b>§ 169 Abs. 2 Nr. 2 AO:</b> Die Festsetzungsverjährung beträgt grundsätzlich <b>4 Jahre</b> bei Einkommensteuer, Körperschaftsteuer, Umsatzsteuer. Ausnahmen: 5 Jahre bei leichtfertiger Steuerverkürzung (§ 378 AO), <b>10 Jahre bei Steuerhinterziehung</b> (§ 370 AO).'},

{cat:'ao',lvl:1,q:'Wann beginnt die Festsetzungsverjährung (§ 170 AO)?',
 opts:['Am 1. Januar des Jahres, in dem die Steuer entstanden ist','Mit Ablauf des Jahres, in dem die Steuererklärung eingereicht wird (§ 170 Abs. 2 AO) – bei Erklärungspflicht frühestens mit Ablauf des dritten Jahres nach der Entstehung','Am Tag, an dem die Steuer fällig wird','Am 31. Dezember des Steuerjahres'],
 ans:1,explain:'<b>§ 170 Abs. 2 AO:</b> Besteht eine Erklärungspflicht (z.B. ESt-Erklärung), beginnt die Verjährung erst mit Ablauf des Jahres der Abgabe der Erklärung – mindestens aber 3 Jahre nach Entstehung. Ohne Erklärungspflicht: Ablauf des Entstehungsjahres. Bedeutung: Das FA hat in der Regel länger als 4 Jahre Zeit.'},

{cat:'ao',lvl:2,q:'Max erhält seinen Einkommensteuerbescheid 2024 am Dienstag, 4. März 2025 (Aufgabe zur Post: Freitag, 28. Februar 2025). Wann läuft die Einspruchsfrist ab?',
 opts:['28. März 2025 (1 Monat ab Aufgabe)','4. April 2025 (1 Monat ab Empfang)','4. März 2025 (sofort nach Empfang)','3. April 2025 (1 Monat ab Bekanntgabe 3. März)'],
 ans:1,explain:'<b>§ 122 Abs. 2 AO (4-Tage-Fiktion):</b> Aufgabe 28. Feb. + 4 Tage = Bekanntgabe <b>4. März 2025</b>. Einspruchsfrist § 355 AO: 1 Monat = bis <b>4. April 2025</b>. (28. Feb. + 4 Tage = 4. März, da der 4. Tag der 4. März ist.) 1 Monat ab 4. März = 4. April 2025.'},

{cat:'ao',lvl:2,q:'Das Finanzamt will einen bereits bestandskräftigen ESt-Bescheid ändern, weil der Steuerpflichtige vergessen hat, Zinserträge anzugeben. Welche Norm ermöglicht das?',
 opts:['§ 129 AO (offenbare Unrichtigkeit)','§ 173 Abs. 1 Nr. 1 AO (neue Tatsachen zulasten)','§ 164 AO (Vorbehalt der Nachprüfung)','§ 175 AO (Grundlagenbescheid)'],
 ans:1,explain:'<b>§ 173 Abs. 1 Nr. 1 AO:</b> Tritt nachträglich eine Tatsache oder ein Beweismittel hervor, das zu einer höheren Steuer führt, kann der bestandskräftige Bescheid geändert werden. Voraussetzung: FA kannte die Tatsache (Zinserträge) beim Erlass noch nicht. Kannte das FA sie bereits, ist keine Änderung möglich.'},

{cat:'ao',lvl:1,q:'Was ist der Unterschied zwischen Einspruch und Klage im Steuerrecht?',
 opts:['Kein Unterschied – beide sind Rechtsmittel gegen Steuerbescheide','Einspruch (§ 347 AO) ist außergerichtliches Vorverfahren beim Finanzamt; erst danach kann Klage beim Finanzgericht (§ 40 FGO) erhoben werden','Klage ist günstiger als Einspruch','Einspruch richtet sich an das Finanzgericht, Klage an das Finanzamt'],
 ans:1,explain:'<b>Zweistufiges Rechtsbehelfsverfahren:</b> Zunächst muss Einspruch beim zuständigen Finanzamt eingelegt werden (§ 347 AO) – das ist das obligatorische Vorverfahren. Erst wenn der Einspruch zurückgewiesen wurde (Einspruchsentscheidung), kann Klage beim Finanzgericht (FG) eingereicht werden (§ 40 FGO). Danach: BFH als Revisionsinstanz.'},

{cat:'ao',lvl:2,q:'Was bewirkt ein Antrag auf Aussetzung der Vollziehung (AdV, § 361 AO)?',
 opts:['Der Einspruch wird rückgängig gemacht','Die Zahlung der strittigen Steuer wird bis zum Abschluss des Rechtsbehelfsverfahrens aufgeschoben – keine Zwangsvollstreckung während der Prüfung','Die Steuerschuld erlischt','Das Finanzamt muss die Steuer erstatten'],
 ans:1,explain:'<b>§ 361 AO – AdV:</b> Das FA setzt auf Antrag die Vollziehung aus, wenn ernstliche Zweifel an der Rechtmäßigkeit bestehen (z.B. strittiger Sachverhalt) oder die Vollziehung eine unbillige Härte wäre. Der Steuerpflichtige zahlt vorläufig nicht – spart Liquidität. Aber: Im Verlustfall werden <b>Aussetzungszinsen (§ 237 AO, 1,8 % p.a.)</b> fällig.'},

{cat:'ao',lvl:3,q:'Was ist der Unterschied zwischen Steuerhinterziehung (§ 370 AO) und Steuerordnungswidrigkeit (§ 378 AO)?',
 opts:['Kein Unterschied – beides sind Straftaten','§ 370 AO (Hinterziehung) setzt Vorsatz voraus – Strafe bis 5 Jahre Haft (bei besonders schweren Fällen: 10 Jahre); § 378 AO (leichtfertige Verkürzung) erfordert nur grobe Fahrlässigkeit – nur Geldbuße bis 50.000 €','§ 378 AO ist schwerwiegender als § 370 AO','Beide Normen haben identische Rechtsfolgen'],
 ans:1,explain:'<b>§ 370 AO – Steuerhinterziehung:</b> Vorsätzliche Tatbegehung, Straftat, Freiheitsstrafe bis 5 Jahre (besonders schwere Fälle: bis 10 Jahre), 10 Jahre Verjährung. <b>§ 378 AO – leichtfertige Steuerverkürzung:</b> Grob fahrlässiges Handeln, <b>Ordnungswidrigkeit</b> (keine Straftat), nur Geldbuße bis 50.000 €, 5 Jahre Festsetzungsverjährung.'},

{cat:'ao',lvl:2,q:'Wann ist eine Außenprüfung (Betriebsprüfung) zulässig (§ 193 AO)?',
 opts:['Nur bei konkretem Verdacht auf Steuerhinterziehung','Bei Gewerbetreibenden, Freiberuflern und Personen mit Einkünften aus Vermietung/Verpachtung – auch ohne konkreten Verdacht (§ 193 Abs. 1 AO)','Nur bei Jahresumsätzen über 1 Mio. €','Nur alle 10 Jahre'],
 ans:1,explain:'<b>§ 193 Abs. 1 AO:</b> Außenprüfung ist zulässig bei Steuerpflichtigen, die einen gewerblichen oder freiberuflichen Betrieb unterhalten, sowie bei Personen mit Überschusseinkünften. Kein Anfangsverdacht erforderlich – reine Routineprüfung möglich. Ankündigung: mind. 2 Wochen vorher (Grundsatz), außer bei Gefahr im Verzug.'},

{cat:'ao',lvl:3,q:'Was versteht man unter dem steuerlichen \"Einheitswert\" und ist er heute noch relevant?',
 opts:['Einheitswert ist die aktuelle Verkehrswertermittlung für alle Vermögensgegenstände','Einheitswerte sind veraltete Grundstücksbewertungen (Stand 1964/West bzw. 1935/Ost), die vom BVerfG (2018) für verfassungswidrig erklärt wurden – seit 2025 gilt das neue Grundsteuergesetz mit aktuellen Grundsteuerwerten','Einheitswerte werden täglich angepasst','Einheitswerte sind nur bei der Erbschaftsteuer relevant'],
 ans:1,explain:'<b>Grundsteuerreform 2022/2025:</b> Das BVerfG erklärte die alten Einheitswerte (West 1964, Ost 1935) 2018 für verfassungswidrig. Ab 2025 gilt das neue Grundsteuergesetz mit aktuellen Grundsteuerwerten (Bundesmodell) oder Ländermodellen (Bayern, Baden-Württemberg u.a. nutzen abweichende Regelungen). Die alten Einheitswerte gelten noch für die Grunderwerbsteuer.'},

// ── BILANZ & BUCHFÜHRUNG ─────────────────────────────────────────
{cat:'bilanz',lvl:1,q:'Was besagt das Niederstwertprinzip (§ 253 Abs. 4 HGB) im Umlaufvermögen?',
 opts:['Das Umlaufvermögen darf nur zum Anschaffungspreis bewertet werden','Das Umlaufvermögen ist mit dem niedrigeren Wert aus Anschaffungskosten oder Marktwert anzusetzen (strenges Niederstwertprinzip)','Das Anlagevermögen wird nach dem Niederstwertprinzip bewertet','Das Prinzip gilt nur für Vorräte'],
 ans:1,explain:'<b>§ 253 Abs. 4 HGB – strenges Niederstwertprinzip:</b> Im Umlaufvermögen ist immer der <b>niedrigere</b> Wert (Anschaffungskosten oder beizulegender Zeitwert) anzusetzen. Beim Anlagevermögen gilt das gemilderte Niederstwertprinzip: Abschreibung auf niedrigeren Wert nur bei dauerhafter Wertminderung (§ 253 Abs. 3 HGB).'},

{cat:'bilanz',lvl:1,q:'Was ist der Unterschied zwischen Aufwand und Ausgabe in der Buchführung?',
 opts:['Kein Unterschied – beide Begriffe sind identisch','Ausgabe = Abfluss liquider Mittel (Zahlung); Aufwand = erfolgswirksame Verminderung des Eigenkapitals – zeitlich können beide auseinanderfallen (z.B. Abschreibung: kein Mittelabfluss, aber Aufwand)','Aufwand ist immer größer als Ausgabe','Ausgaben sind nur Barzahlungen'],
 ans:1,explain:'<b>Aufwand ≠ Ausgabe:</b> Eine Ausgabe tritt auf, wenn Zahlungsmittel abfließen (z.B. Maschinenkauf). Die Ausgabe wird nicht sofort zum Aufwand – die Maschine wird über AfA (Abschreibung) über Jahre zum Aufwand. Umgekehrt: Abschreibung ist Aufwand ohne Ausgabe. Dieses Periodisierungsprinzip ist zentral für die Gewinnermittlung.'},

{cat:'bilanz',lvl:2,q:'Was ist der Unterschied zwischen Anlage- und Umlaufvermögen (§ 247 HGB)?',
 opts:['Anlagevermögen sind Wertpapiere, Umlaufvermögen sind Immobilien','Anlagevermögen dient dauerhaft dem Geschäftsbetrieb (z.B. Maschinen, Gebäude); Umlaufvermögen ist zum einmaligen Verbrauch oder Weiterverkauf bestimmt (z.B. Waren, Forderungen, Kasse)','Anlagevermögen liegt immer über 10.000 €','Umlaufvermögen kann nicht abgeschrieben werden'],
 ans:1,explain:'<b>§ 247 HGB:</b> Anlagevermögen (AV): zur dauerhaften Nutzung im Geschäftsbetrieb bestimmt (immaterielle WG, Sachanlagen, Finanzanlagen). Umlaufvermögen (UV): zur einmaligen Verwendung oder Veräußerung (Vorräte, Forderungen aus LuL, Wertpapiere, Kassenbestand). Die Unterscheidung bestimmt die Bewertungsregeln und die Bilanzgliederung.'},

{cat:'bilanz',lvl:2,q:'Buchungssatz: Ein Unternehmen kauft Büromaterial für 119 € (inkl. 19 % USt) auf Rechnung. Wie lautet der korrekte Buchungssatz?',
 opts:['Büroaufwand 119 € an Verbindlichkeiten 119 €','Büroaufwand 100 € + Vorsteuer 19 € an Verbindlichkeiten 119 €','Verbindlichkeiten 119 € an Büroaufwand 100 € + USt 19 €','Büroaufwand 119 € an Bank 119 €'],
 ans:1,explain:'<b>Buchungssatz:</b> Soll: Büroaufwand 100 € + Vorsteuer (VSt) 19 € | Haben: Verbindlichkeiten aus LuL 119 €. Die Vorsteuer wird als eigenes Konto erfasst und gegen die Umsatzsteuerzahllast verrechnet. Zahlung erfolgt später (Verbindlichkeit → Bank).'},

{cat:'bilanz',lvl:3,q:'Was ist das Imparitätsprinzip (§ 252 Abs. 1 Nr. 4 HGB)?',
 opts:['Gewinne und Verluste werden gleich behandelt','Noch nicht realisierte Verluste müssen bereits berücksichtigt werden; noch nicht realisierte Gewinne dürfen nicht ausgewiesen werden (asymmetrische Vorsicht)','Alle Positionen werden zu Anschaffungskosten bewertet','Das Prinzip gilt nur für Banken'],
 ans:1,explain:'<b>§ 252 Abs. 1 Nr. 4 HGB – Imparitätsprinzip (Teil des Vorsichtsprinzips):</b> Verluste, die bis zum Abschlussstichtag entstanden sind, aber noch nicht realisiert wurden, müssen dennoch ausgewiesen werden (Rückstellungen, Abschreibungen). Gewinne dürfen erst bei Realisation (= Umsatz) ausgewiesen werden. Ziel: Gläubigerschutz.'},

{cat:'bilanz',lvl:1,q:'Was versteht man unter dem Grundsatz der Bilanzidentität (§ 252 Abs. 1 Nr. 1 HGB)?',
 opts:['Alle Bilanzen müssen identisch aufgebaut sein','Die Eröffnungsbilanz eines Geschäftsjahres muss mit der Schlussbilanz des Vorjahres übereinstimmen','Die Aktiv- und Passivseite der Bilanz müssen gleich groß sein','Bilanz und GuV müssen denselben Gewinn ausweisen'],
 ans:1,explain:'<b>Bilanzidentität / Bilanzkontinuität:</b> Eröffnungsbilanz des laufenden Jahres = Schlussbilanz des Vorjahres. Wertansätze werden periodenübergreifend fortgeführt. Dies sichert die Vergleichbarkeit der Jahresabschlüsse und verhindert willkürliche Bewertungswechsel. Verwandt: Grundsatz der Bewertungsstetigkeit (§ 252 Abs. 1 Nr. 6 HGB).'},

{cat:'bilanz',lvl:2,q:'Was ist eine Rückstellung (§ 249 HGB) und wie unterscheidet sie sich von einer Verbindlichkeit?',
 opts:['Rückstellung = eingezahltes Geld für spätere Ausgaben; Verbindlichkeit = nur fälliger Betrag','Rückstellung: Verpflichtung ist dem Grunde oder der Höhe nach ungewiss; Verbindlichkeit: konkrete, feststehende Schuld mit bekanntem Betrag und Gläubiger','Kein Unterschied – beide Begriffe sind austauschbar','Rückstellungen stehen auf der Aktivseite der Bilanz'],
 ans:1,explain:'<b>Rückstellung:</b> Verpflichtung ist wahrscheinlich, aber Betrag oder Fälligkeit noch ungewiss (z.B. drohende Steuernachzahlung, Prozessrisiko, Garantieverpflichtungen). <b>Verbindlichkeit:</b> Schuld steht fest (Gläubiger, Betrag, Fälligkeit bekannt). Rückstellungen stehen auf der <b>Passivseite</b> der Bilanz und mindern den Gewinn.'},

// ── PRIVAT- UND ÖFFENTLICHES RECHT ──────────────────────────────
{cat:'recht',lvl:1,q:'Was ist eine \"Willenserklärung\" im Sinne des BGB und welche Elemente hat sie?',
 opts:['Nur schriftliche Erklärungen gegenüber Behörden','Äußerung eines Rechtsbindungswillens – setzt objektiven Tatbestand (erkennbare Erklärung) und subjektiven Tatbestand (Handlungswille, Erklärungsbewusstsein, Geschäftswille) voraus','Nur mündliche Erklärungen unter Zeugen','Jede Äußerung einer Person, auch ohne Rechtsbindungswillen'],
 ans:1,explain:'<b>Willenserklärung (WE):</b> Objektiv: eine nach außen erkennbare Erklärung. Subjektiv: (1) Handlungswille – bewusstes Tun, (2) Erklärungsbewusstsein – Wissen, dass eine rechtliche Erklärung abgegeben wird (str.), (3) Geschäftswille – Wille zum konkreten Rechtsgeschäft. WE + WE = Vertrag. Ohne Geschäftsfähigkeit: unwirksam (§ 105 BGB).'},

{cat:'recht',lvl:1,q:'Ab welchem Alter gilt eine Person im BGB als voll geschäftsfähig?',
 opts:['16 Jahre','17 Jahre','18 Jahre','21 Jahre'],
 ans:2,explain:'<b>§ 2 BGB:</b> Volljährigkeit und damit volle Geschäftsfähigkeit tritt mit <b>18 Jahren</b> ein. Unter 7 Jahren: geschäftsunfähig (§ 104 BGB). 7–17 Jahre: beschränkt geschäftsfähig (§ 106 BGB) – Rechtsgeschäfte nur mit Zustimmung der Eltern wirksam, außer bei rechtlichem Vorteil (§ 107 BGB, Taschengeldparagraph).'},

{cat:'recht',lvl:2,q:'Was versteht man unter dem \"Abstraktionsprinzip\" im deutschen Sachenrecht?',
 opts:['Alle Verträge müssen schriftlich geschlossen werden','Schuld- und Sachenrecht sind getrennt: Das Verpflichtungsgeschäft (z.B. Kaufvertrag) und das Verfügungsgeschäft (Übereignung) sind rechtlich unabhängig – Unwirksamkeit des einen berührt den anderen nicht automatisch','Eigentum und Besitz sind dasselbe','Abstraktionsprinzip gilt nur bei Immobilien'],
 ans:1,explain:'<b>Abstraktionsprinzip:</b> Kauf = Verpflichtungsgeschäft (§ 433 BGB). Übereignung = Verfügungsgeschäft (§ 929 BGB). Beide sind abstrakt voneinander – ist der Kaufvertrag nichtig (z.B. Anfechtung), bleibt die Eigentumsübertragung zunächst wirksam; der Verkäufer muss aber nach § 812 BGB (ungerechtfertigte Bereicherung) zurückverlangen. Deutschland ist eine der wenigen Rechtsordnungen mit diesem Prinzip.'},

{cat:'recht',lvl:2,q:'Was ist ein Formkaufmann nach § 6 HGB?',
 opts:['Jede natürliche Person, die einen Gewerbebetrieb führt','Eine Kapitalgesellschaft (GmbH, AG), die kraft Rechtsform Kaufmann ist – unabhängig davon, ob sie ein Handelsgewerbe betreibt','Nur Kaufleute mit einer besonderen Zulassung','Kaufleute mit Umsatz über 1 Mio. €'],
 ans:1,explain:'<b>§ 6 HGB – Formkaufmann:</b> Kapitalgesellschaften (GmbH, AG, SE, eG) sind kraft ihrer Rechtsform Kaufleute – unabhängig von ihrer tatsächlichen Tätigkeit. Selbst eine GmbH, die nur Immobilien verwaltet (eigentlich kein Handelsgewerbe), ist Formkaufmann und unterliegt den HGB-Vorschriften (Buchführungspflicht, Jahresabschluss, Handelsregister).'},

{cat:'recht',lvl:3,q:'Was ist eine Prokura (§§ 48 ff. HGB) und welche Grenzen hat sie?',
 opts:['Handlungsvollmacht für einzelne Geschäfte','Umfassende gesetzliche Handlungsvollmacht für alle Arten gerichtlicher und außergerichtlicher Geschäfte des Handelsgewerbes – außer Grundstücksveräußerung, Eintragung ins HR und Erteilung/Erlöschen einer Prokura selbst','Vollmacht nur für Bankgeschäfte','Identisch mit der allgemeinen Vollmacht nach § 167 BGB'],
 ans:1,explain:'<b>Prokura (§ 48 HGB):</b> Gesetzlich definierte, weitreichende Vollmacht für alle Handelsgeschäfte. Grenzen: Keine Grundstücksveräußerung ohne zusätzliche Ermächtigung (§ 49 Abs. 2 HGB), keine Erteilung von Unterprokura, keine Änderung der Gesellschaft selbst. Wird im Handelsregister eingetragen. Wichtig: Beschränkungen im Innenverhältnis sind nach außen unwirksam.'},

{cat:'recht',lvl:1,q:'Was ist der Unterschied zwischen einer GmbH und einer UG (haftungsbeschränkt)?',
 opts:['Kein Unterschied – UG ist nur ein anderer Name für GmbH','UG = Mini-GmbH mit Mindeststammkapital ab 1 € (statt 25.000 €); Pflicht, 25 % des Jahresüberschusses als Rücklage zu bilden, bis 25.000 € Stammkapital erreicht; dann Umwandlung in GmbH möglich','UG haftet unbeschränkt, GmbH beschränkt','GmbH kann nur von Einzelpersonen gegründet werden, UG von mehreren'],
 ans:1,explain:'<b>UG (haftungsbeschränkt) = §§ 5a GmbHG:</b> Sonderform der GmbH mit Gründung ab 1 € Stammkapital. Pflicht: 25 % des Jahresüberschusses in die gesetzliche Rücklage, bis 25.000 € erreicht sind. Haftung: wie GmbH – beschränkt auf Gesellschaftsvermögen. Nachteil: Geringe Eigenkapitalbasis schadet Bonität bei Banken und Geschäftspartnern.'},

{cat:'recht',lvl:2,q:'Was versteht man unter \"culpa in contrahendo\" (c.i.c., § 311 Abs. 2 BGB)?',
 opts:['Schadensersatzpflicht für fehlerhafte Verträge nach Vertragsschluss','Vorvertragliches Schuldverhältnis: Bei Vertragsverhandlungen entstehen gegenseitige Schutz- und Rücksichtspflichten – Verletzung dieser Pflichten führt zu Schadensersatz (§ 280 BGB), auch wenn kein Vertrag zustande kommt','Haftung nur bei vorsätzlichem Verhalten','Nur anwendbar bei Kaufverträgen'],
 ans:1,explain:'<b>§ 311 Abs. 2 BGB – c.i.c.:</b> Schon bei der Anbahnung eines Vertrags entsteht ein gesetzliches Schuldverhältnis mit Rücksichtspflichten (§ 241 Abs. 2 BGB). Klassisches Beispiel: Jemand rutscht im Supermarkt beim Vertragsanbahnen aus – Supermarkt haftet nach c.i.c. Wichtig: Eigene Anspruchsgrundlage, kein Vertrag nötig.'},
// ── GEWERBESTEUER ─────────────────────────────────────────────────
{cat:'gewst',lvl:1,q:'Was ist die Bemessungsgrundlage der Gewerbesteuer?',
 opts:['Jahresumsatz des Unternehmens','Gewerbeertrag (§ 7 GewStG) – Gewinn + Hinzurechnungen – Kürzungen','Eigenkapital des Unternehmens','Lohnsumme der Mitarbeiter'],
 ans:1,explain:'<b>Gewerbeertrag (§ 7 GewStG):</b> Ausgangspunkt ist der steuerliche Gewinn, der durch Hinzurechnungen (§ 8) erhöht und durch Kürzungen (§ 9) vermindert wird. Der Gewerbeertrag × 3,5 % = Messbetrag × Hebesatz = GewSt.'},

{cat:'gewst',lvl:1,q:'Wie hoch ist die Steuermesszahl bei der Gewerbesteuer (§ 11 GewStG)?',
 opts:['15 %','3,5 %','25 %','7 %'],
 ans:1,explain:'<b>§ 11 GewStG: Steuermesszahl = 3,5 %.</b> Der Gewerbeertrag (abzüglich Freibetrag bei Personenunternehmen) × 3,5 % = Steuermessbetrag. Dieser wird dann mit dem gemeindlichen Hebesatz multipliziert.'},

{cat:'gewst',lvl:1,q:'Welche Unternehmen zahlen keine Gewerbesteuer?',
 opts:['Alle Unternehmen mit Umsatz unter 100.000 €','Freiberufler (§ 18 EStG) wie Ärzte, Anwälte, Architekten','GmbH und AG','Alle Einzelunternehmer'],
 ans:1,explain:'<b>§ 2 GewStG:</b> Nur Gewerbebetriebe sind gewerbesteuerpflichtig. Freiberufler (§ 18 EStG), Land- und Forstwirte und reine Vermögensverwaltung zahlen keine GewSt. Der Freibetrag (24.500 €) gilt nur für Personenunternehmen.'},

{cat:'gewst',lvl:2,q:'Eine GmbH in Berlin (Hebesatz 410 %) hat einen Gewerbeertrag von 100.000 €. Wie hoch ist die Gewerbesteuer?',
 opts:['3.500 €','14.350 €','10.000 €','41.000 €'],
 ans:1,explain:'GmbH hat keinen Freibetrag. Messbetrag: 100.000 € × 3,5 % = 3.500 €. GewSt: 3.500 € × 410 % = <b>14.350 €</b>. Bei einem Einzelunternehmer würde der Freibetrag von 24.500 € abgezogen (100.000 – 24.500 = 75.500 × 3,5 % × 410 % = 10.834 €).'},

{cat:'gewst',lvl:2,q:'Was bewirkt § 35 EStG für gewerbetreibende Einzelunternehmer?',
 opts:['Gewerbesteuer ist vollständig als Betriebsausgabe abziehbar','Einkommensteuer wird um das 4-fache des GewSt-Messbetrags ermäßigt (ab VZ 2020)','Gewerbesteuer wird mit Körperschaftsteuer verrechnet','Keine Auswirkung auf Einkommensteuer'],
 ans:1,explain:'<b>§ 35 EStG:</b> Die ESt des Einzelunternehmers/Gesellschafters wird um das <b>4-fache des GewSt-Messbetrags</b> ermäßigt (ab VZ 2020; vorher 3,8-fach). Bei Hebesatz 400 %: vollständige Entlastung. Bei Hebesatz 410 % (Berlin): geringe Restbelastung. Achtung: § 4 Abs. 5b EStG verbietet den Betriebsausgabenabzug der GewSt seit 2008.'},

{cat:'gewst',lvl:3,q:'Welche Aussage zu den Hinzurechnungen (§ 8 GewStG) ist korrekt?',
 opts:['100 % der Zinsaufwendungen werden hinzugerechnet','25 % der Zinsaufwendungen, 5 % der Miet/Pacht beweglicher WG, 12,5 % der Miet/Pacht unbeweglicher WG – aber nur der Teil über 200.000 €','50 % aller Finanzierungskosten','Hinzurechnungen gelten nur für Kapitalgesellschaften'],
 ans:1,explain:'<b>§ 8 Nr. 1 GewStG – Finanzierungsanteile:</b> Effektive Sätze: 25 % Zinsen (Nr. 1a), 5 % bewegliche WG-Mieten (Nr. 1d: ¼×⅕), 12,5 % unbewegliche WG-Mieten (Nr. 1e: ¼×½). Freigrenze: nur der Teil über 200.000 € wird addiert. Ziel: Gleichbehandlung von Eigen- und Fremdfinanzierung.'},

// ── GESELLSCHAFTSBESTEUERUNG ──────────────────────────────────────
{cat:'gesellschaft',lvl:1,q:'Wie hoch ist der Körperschaftsteuersatz für eine GmbH (§ 23 KStG)?',
 opts:['25 %','15 % (zzgl. 5,5 % Solidaritätszuschlag)','10 %','Progressiver Tarif wie ESt'],
 ans:1,explain:'<b>§ 23 KStG:</b> Einheitlicher Satz: <b>15 %</b> auf das zu versteuernde Einkommen, zzgl. 5,5 % Soli auf die KSt (= 15,825 % effektiv). Dazu GewSt (ca. 14–17 %). Gesamtbelastung GmbH typisch: ca. 30–33 %.'},

{cat:'gesellschaft',lvl:1,q:'Was bedeutet das Transparenzprinzip bei Personengesellschaften?',
 opts:['Die GmbH zahlt Steuern für alle Gesellschafter','Gewinne werden anteilig den Gesellschaftern zugerechnet und bei diesen persönlich versteuert','Personengesellschaften sind steuerfrei','Nur der Geschäftsführer zahlt Steuern'],
 ans:1,explain:'<b>Transparenzprinzip:</b> GbR, OHG, KG sind keine eigenständigen Steuersubjekte für ESt/KSt. Gewinne werden einheitlich festgestellt (§§ 179, 180 AO) und den Gesellschaftern anteilig zugerechnet. Diese versteuern ihren Anteil individuell – ggf. als § 15 EStG-Einkünfte inkl. GewSt.'},

{cat:'gesellschaft',lvl:2,q:'Was ist eine verdeckte Gewinnausschüttung (vGA, § 8 Abs. 3 S. 2 KStG)?',
 opts:['Eine legale Gewinnausschüttung an Gesellschafter','Eine durch das Gesellschaftsverhältnis veranlasste Vermögensminderung ohne ordnungsgemäßen Gewinnverteilungsbeschluss','Eine verdeckte Bilanzierung','Jede Zahlung der GmbH an Gesellschafter'],
 ans:1,explain:'<b>vGA:</b> Maßstab ist der Fremdvergleich – was hätte die GmbH einem unabhängigen Dritten bezahlt? Klassisch: überhöhtes GF-Gehalt. Folge: Hinzurechnung zum GmbH-Gewinn (→ mehr KSt) + Behandlung als Ausschüttung beim Gesellschafter (→ KapESt). Der ordentliche und gewissenhafte Geschäftsleiter ist der Maßstab.'},

{cat:'gesellschaft',lvl:2,q:'Wie werden Dividenden aus einer GmbH-Beteiligung im Privatvermögen besteuert?',
 opts:['Mit dem persönlichen ESt-Satz','Mit 25 % Abgeltungsteuer + 5,5 % Soli (§ 32d EStG)','Steuerfrei bis 10.000 €','Mit 15 % KSt'],
 ans:1,explain:'<b>§ 32d EStG – Abgeltungsteuer:</b> Kapitalerträge im Privatvermögen werden einheitlich mit 25 % + 5,5 % Soli besteuert. Die GmbH behält die KapESt direkt ein und führt sie ab. Sparerpauschbetrag: 1.000 € (Einzelperson). Im Betriebsvermögen gilt stattdessen das Teileinkünfteverfahren (§ 3 Nr. 40 EStG): nur 60 % steuerpflichtig.'},

{cat:'gesellschaft',lvl:3,q:'Was sind die Voraussetzungen für eine körperschaftsteuerliche Organschaft (§§ 14 ff. KStG)?',
 opts:['Nur Mehrheitsbeteiligung nötig','Finanzielle Eingliederung (Mehrheit der Stimmrechte) + Ergebnisabführungsvertrag (EAV) für mind. 5 Jahre','Nur EAV ohne Beteiligungsvoraussetzung','Nur bei AG möglich, nicht bei GmbH'],
 ans:1,explain:'<b>§ 14 KStG – Organschaft:</b> (1) Finanzielle Eingliederung: Organträger hält die Mehrheit der Stimmrechte. (2) EAV: Organgesellschaft führt gesamten Gewinn ab, Organträger übernimmt Verluste – mind. 5 Jahre, tatsächlich durchgeführt. Folge: Einkommen der Tochter wird der Mutter zugerechnet → konzernweite Verlustverrechnung.'},


];


// ==================== STEUER-STORIES ====================
const STORY_PROGRESS_KEY = 'storyProgress_v1';
let storyProgress = {};
try { storyProgress = JSON.parse(localStorage.getItem(STORY_PROGRESS_KEY)||'{}'); } catch(e){ storyProgress={}; }
function saveStoryProgress(){ localStorage.setItem(STORY_PROGRESS_KEY, JSON.stringify(storyProgress)); }

const D_STORY = [
{
  id:'lohnzettel',
  icon:'💼',
  title:'Der erste Lohnzettel',
  protagonist:'Lena, 18 – Azubi im Einzelhandel, Steuerklasse I',
  level:'Einstieg',
  duration:'8 Min.',
  color:'#1a4a8f',
  scenes:[
    {
      type:'info',
      title:'850 € – oder doch weniger?',
      narrative:'Lena unterschreibt ihren Ausbildungsvertrag. Ihr Chef zeigt ihr auf die Zahl: „850 € Bruttogehalt im ersten Lehrjahr." Lena freut sich. Ende des Monats kommt die Gehaltsabrechnung. Überwiesener Betrag: 682,48 €. Lena starrt auf die Differenz von fast 170 € und fragt sich: Wo ist das Geld geblieben?',
      fact:{
        title:'Was zwischen Brutto und Netto passiert',
        content:'Das Gehalt wird um zwei Arten von Abzügen reduziert:<br><br><b>1. Sozialversicherung (AN-Anteil):</b><br>• Krankenversicherung: ca. 8,4 % (z.B. AOK)<br>• Pflegeversicherung: ca. 1,8 % (ab 23 J. ohne Kind + 0,6 %)<br>• Rentenversicherung: 9,3 %<br>• Arbeitslosenversicherung: 1,3 %<br>→ Gesamt: ~20,8 % × 850 € = <b>176,80 € Sozialabgaben</b><br><br><b>2. Lohnsteuer:</b> Bei 850 € Brutto/Monat = 10.200 € Jahreseinkommen. Der Grundfreibetrag 2026 liegt bei 12.336 €/Jahr – Lena zahlt daher <b>keine Lohnsteuer</b>.<br><br>→ Netto: 850 € − 176,80 € = <b>673,20 €</b> (ca. – plus kleine Abrundungen durch exakte KV-Sätze)',
        norm:'§ 38 EStG · §§ 226 ff. SGB V · § 157 SGB VI'
      }
    },
    {
      type:'info',
      title:'Steuerklassen: Was bedeutet „Klasse I"?',
      narrative:'Lenas Mutter fragt beim Abendessen: „Welche Steuerklasse bist du?" Lena schaut auf die Abrechnung: „Klasse I". Ihre Mutter: „Das ist Standard für Ledige. Wenn du mal heiratest, ändert sich das." Lena versteht nicht ganz – warum gibt es überhaupt verschiedene Klassen?',
      fact:{
        title:'Die 6 Lohnsteuerklassen (§ 38b EStG)',
        content:'Die Lohnsteuerklasse bestimmt, wie viel Lohnsteuer monatlich einbehalten wird – sie beeinflusst <b>nicht</b> die endgültige Steuerschuld, nur den Vorabzug.<br><br><b>Klasse I:</b> Ledige, Geschiedene, Verwitwete → Grundtarif<br><b>Klasse II:</b> Alleinerziehende → Entlastungsbetrag 4.260 €/Jahr<br><b>Klasse III/V:</b> Ehepaar, Alleinverdiener bzw. Geringverdiener → niedrig/hoch<br><b>Klasse IV:</b> Ehepaar mit ähnlichem Einkommen<br><b>Klasse VI:</b> Zweiter Job → höchster Abzug<br><br>Wichtig: Die Lohnsteuer ist eine <b>Vorauszahlung auf die Einkommensteuer</b>. Wurde zu viel einbehalten, gibt es es per Steuererklärung zurück. Zu wenig: Nachzahlung.',
        norm:'§ 38b EStG · § 39 EStG'
      }
    },
    {
      type:'choice',
      title:'Lohnt sich die Steuererklärung für Lena?',
      narrative:'Lenas Freundin sagt: „Du fährst doch 22 km mit dem Bus zur Ausbildung – du solltest Steuererklärung machen." Lena ist skeptisch. Sie hat 210 Ausbildungstage, 22 km einfache Entfernung, und hat 120 € für Steuerfachbücher ausgegeben. Ihr Ausbilder sagt: „Keine Lohnsteuer gezahlt – lohnt sich nicht." Stimmt das?',
      question:'Was ist richtig – soll Lena eine Steuererklärung abgeben?',
      opts:[
        {
          text:'✅ Ja – auch ohne Lohnsteuer kann sich eine Erklärung lohnen',
          correct:true,
          outcome:'Lena bekommt keine Erstattung – aber schafft einen Verlustvortrag von 646 €.',
          explain:'<b>Lenas Werbungskosten:</b><br>• Fahrtkosten: 22 km × 0,38 € × 210 Tage = <b>1.756 €</b> (§ 9 Abs. 1 Nr. 4 EStG)<br>• Fachbücher: <b>120 €</b><br>• Summe: <b>1.876 €</b><br>• Abzgl. Arbeitnehmer-Pauschbetrag: 1.230 €<br>• Überhang: <b>646 €</b><br><br>Da Lena unter dem Grundfreibetrag liegt, bekommt sie keine Soforterstattung. Aber: Das Finanzamt stellt einen <b>verbleibenden Verlustabzug</b> fest (§ 10d EStG). Dieser kann in Folgejahren (wenn Lena mehr verdient) mit späteren Einkünften verrechnet werden. <b>Außerdem:</b> Die freiwillige Abgabe hat keine Nachzahlungsgefahr – und muss bis zu <b>4 Jahre rückwirkend</b> nachgeholt werden können (§ 46 Abs. 2 Nr. 8 EStG).'
        },
        {
          text:'❌ Nein – keine Lohnsteuer gezahlt, also keine Erstattung möglich',
          correct:false,
          outcome:'Formell nicht falsch – aber Lena verschenkt einen wertvollen Verlustvortrag.',
          explain:'Wer keine Lohnsteuer gezahlt hat, bekommt tatsächlich keine Erstattung aus dem laufenden Jahr. Das stimmt. Aber: Werbungskosten, die den Grundfreibetrag nicht ausschöpfen, können als <b>Verlustvortrag (§ 10d EStG)</b> festgestellt werden – auch wenn keine Steuer anfiel. Dieser Betrag reduziert in Zukunft das zu versteuernde Einkommen. Wer im 3. Lehrjahr 1.200 € Brutto/Monat verdient und dann Lohnsteuer zahlt, profitiert rückwirkend. Die Frist: 4 Jahre (§ 169 AO) – Lena sollte also spätestens 2030 die Erklärung für 2026 einreichen.'
        }
      ],
      fact:{
        title:'Verlustvortrag und freiwillige Erklärung',
        content:'<b>§ 10d EStG – Verlustabzug:</b> Negative Einkünfte eines Jahres können in zukünftige Jahre vorgetragen werden (Verlustvortrag). Das Finanzamt stellt den Betrag gesondert fest (§ 10d Abs. 4 EStG).<br><br><b>Freiwillige Erklärung (§ 46 EStG):</b> Arbeitnehmer ohne Pflicht zur Abgabe können die Erklärung freiwillig einreichen – bis zu <b>4 Jahre rückwirkend</b>. Bei Pflichtveranlagung dagegen: 7 Monate nach Jahresende (mit Berater: bis Ende Februar des übernächsten Jahres).',
        norm:'§ 10d EStG · § 46 Abs. 2 Nr. 8 EStG · § 169 AO'
      }
    },
    {
      type:'info',
      title:'Im dritten Lehrjahr: die erste echte Erstattung',
      narrative:'Lena ist jetzt im dritten Lehrjahr: 1.200 € Brutto. Sie zahlt nun tatsächlich Lohnsteuer – 42 € im Monat. Sie hat auch in den ersten beiden Jahren Steuererklärungen abgegeben und einen Verlustvortrag von 1.292 € angehäuft. Das Finanzamt verrechnet ihn jetzt. Ihr Bescheid: Erstattung 386 €. „Das war es wert", sagt sie zu ihrer Mutter.',
      fact:{
        title:'Was Lena über drei Jahre gelernt hat',
        content:'✅ <b>Brutto ≠ Netto:</b> ~20 % Sozialversicherung, Lohnsteuer je nach Einkommen<br>✅ <b>Lohnsteuerklasse I</b> ist Standard für Ledige – ändert sich bei Heirat, Kind, Zweitjob<br>✅ <b>Pendlerpauschale 2026:</b> 0,38 €/km ab km 1 (einfache Strecke, § 9 EStG)<br>✅ <b>Freiwillige Erklärung lohnt sich</b> wegen Verlustvortrag – auch ohne sofortige Erstattung<br>✅ <b>4-Jahres-Frist</b> für freiwillige Abgabe (§ 169 AO)<br>✅ <b>Elster.de</b> – kostenlose Software der Finanzverwaltung',
        norm:'§ 9, § 10d, § 38, § 46 EStG · §§ 226 ff. SGB V'
      }
    }
  ],
  learned:['Brutto/Netto: ~20 % Sozialversicherung als AN-Anteil','Lohnsteuer = Vorauszahlung, Klasse I für Ledige','Pendlerpauschale 0,38 €/km (2026), einfache Strecke','Verlustvortrag (§ 10d EStG): auch ohne Erstattung wertvoll','Freiwillige Abgabe 4 Jahre rückwirkend möglich']
},
{
  id:'schwarzarbeit',
  icon:'🏠',
  title:'Rechnung oder schwarz?',
  protagonist:'Marie, 34 – Angestellte, saniert Badezimmer',
  level:'Einstieg',
  duration:'7 Min.',
  color:'#c0003a',
  scenes:[
    {
      type:'info',
      title:'Der Anruf des Fliesenlegers',
      narrative:'Maries Badezimmer ist seit Jahren ein Problem – Schimmel hinter den Fliesen, der Abfluss verstopft chronisch. Der Fliesenleger kommt zur Besichtigung und gibt ihr zwei Zahlen: „Mit Rechnung: 1.400 € brutto – 900 € Lohnanteil, 500 € Material. Oder cash: 1.100 €, kein Beleg." Marie rechnet nach.',
      fact:{
        title:'§ 35a EStG – Steuerermäßigung für Handwerker',
        content:'Wer Handwerksleistungen in seiner Wohnung in Auftrag gibt, kann <b>20 % der reinen Lohnkosten</b> direkt von seiner Einkommensteuer-Schuld abziehen – nicht vom Einkommen, sondern von der Steuer selbst.<br><br><b>Bedingungen (alle drei müssen erfüllt sein):</b><br>1. Leistung in der eigenen Wohnung (Miete oder Eigentum)<br>2. <b>Ordnungsgemäße Rechnung</b> – mit allen Pflichtangaben<br>3. <b>Zahlung per Überweisung</b> – keine Barzahlung anerkannt<br><br><b>Grenzen:</b><br>• Max. 6.000 € Lohnkosten anrechenbar → max. 1.200 € Steuerersparnis/Jahr<br>• Nur Lohn/Fahrt, kein Material, keine Mwst auf Material',
        norm:'§ 35a Abs. 3 EStG · BMF-Schreiben 09.11.2016'
      }
    },
    {
      type:'choice',
      title:'Maries Entscheidung: Die Rechnung lohnt sich – oder?',
      narrative:'Marie verdient 45.000 € brutto als Angestellte und zahlt rund 8.500 € Einkommensteuer im Jahr. Der Fliesenleger hat 900 € Lohnanteil angegeben. Marie rechnet: 20 % von 900 € = 180 € Steuerersparnis. Effektiver Preis mit Rechnung: 1.400 − 180 = 1.220 €. Ohne Rechnung: 1.100 €. Nur 120 € Differenz. Lohnt es sich trotzdem?',
      question:'Was soll Marie tun – und warum?',
      opts:[
        {
          text:'✅ Mit Rechnung zahlen – trotz 120 € Mehrkosten',
          correct:true,
          outcome:'Marie zahlt 120 € mehr, hat dafür aber vollständigen Schutz – und spart netto effektiv.',
          explain:'<b>Die vollständige Rechnung:</b><br>Mit Rechnung (1.220 € netto nach Steuer) vs. schwarz (1.100 €) = <b>120 € Differenz</b>.<br><br>Was die 120 € kaufen:<br>• <b>2 Jahre Gewährleistung (§ 634a BGB)</b> – treten Mängel auf, haftet der Fliesenleger. Schimmel hinter neuen Fliesen nach 8 Monaten? Kostenlose Nachbesserung.<br>• <b>Versicherungsschutz:</b> Beschädigt der Fliesenleger Maries Wasserleitung – seine Betriebshaftpflicht springt ein. Ohne Rechnung: kein Nachweis, keine Versicherungsleistung.<br>• <b>Kein persönliches Bußgeld-Risiko</b> (§ 8 SchwarzArbG: bis 50.000 € für Auftraggeber bei Beihilfe).<br><br>Fazit: Die 120 € sind eine günstige Versicherungsprämie.'
        },
        {
          text:'❌ Schwarz zahlen – 120 € gespart ist 120 € gespart',
          correct:false,
          outcome:'Marie spart kurzfristig 120 € – und geht dabei ein unverhältnismäßiges Risiko ein.',
          explain:'<b>Was Marie tatsächlich riskiert:</b><br><br>Szenario 1: <b>Gewährleistung</b> – Nach 6 Monaten lösen sich Fliesen. Ohne Rechnung hat Marie keinen Werkvertrag (§ 631 BGB), keinen Nachweis, keine Anspruchsgrundlage. Neues Angebot: 800 €.<br><br>Szenario 2: <b>Wasserschaden</b> – Der Fliesenleger beschädigt ein Rohr. Ohne Rechnung: kein Versicherungsschutz. Wasserschaden in der Wohnung darunter: 15.000 €.<br><br>Szenario 3: <b>Kontrolle</b> – Bei einer Betriebsprüfung des Fliesenlegers taucht Maries Name in Notizbüchern auf. § 8 SchwarzArbG: Bußgeld bis 50.000 € als Auftraggeberin.<br><br>Das Einsparpotential von 120 € steht in keinem vernünftigen Verhältnis zu diesen Risiken.'
        }
      ],
      fact:{
        title:'Schwarzarbeitsbekämpfungsgesetz (SchwarzArbG)',
        content:'Das <b>Gesetz zur Bekämpfung der Schwarzarbeit (SchwarzArbG)</b> gilt für Auftraggeber UND Auftragnehmer.<br><br><b>§ 1 SchwarzArbG:</b> Verboten ist u.a. die Erbringung und Entgegennahme von Dienst- oder Werkleistungen ohne ordnungsgemäße steuerliche und sozialversicherungsrechtliche Abwicklung.<br><b>§ 8 SchwarzArbG:</b> Ordnungswidrigkeit für Auftraggeber – Bußgeld bis <b>50.000 €</b>.<br><b>§ 266a StGB:</b> Vorenthaltung von Sozialversicherungsbeiträgen – das ist eine Straftat (bis 5 Jahre Haft).<br><br>Wichtig: Die Zollbehörde (FKS) prüft aktiv – nicht nur Großbaustellen, auch Privathaushalte bei begründetem Verdacht.',
        norm:'§ 8 SchwarzArbG · § 266a StGB · § 35a EStG'
      }
    },
    {
      type:'info',
      title:'Das Ergebnis – und was Marie noch lernt',
      narrative:'Marie überweist, hebt Rechnung auf, trägt die 900 € Lohnanteil in ihrer Steuererklärung ein (Anlage „Haushaltsnahe Aufwendungen"). Im April kommt ihr Bescheid: Die 180 € werden direkt von ihrer Steuerschuld abgezogen. Und: Zwei Monate nach der Arbeit bildet sich ein kleiner Riss in einer Fuge – der Fliesenleger kommt nochmal vorbei. Kostenlos.',
      fact:{
        title:'§ 35a auf einen Blick – und was noch zählt',
        content:'<b>Was nach § 35a EStG absetzbar ist:</b><br>✅ Handwerkerleistungen in der Wohnung (Renovierung, Reparatur, Modernisierung)<br>✅ Haushaltsnahe Dienstleistungen (Putzhilfe, Gärtner): 20 % bis 4.000 €/Jahr<br>✅ Pflegeleistungen/Betreuer: 20 % bis 4.000 €/Jahr<br><br><b>Was NICHT geht:</b><br>❌ Neubaumaßnahmen (kein bestehender Haushalt)<br>❌ Materialkosten<br>❌ Öffentlich geförderte Maßnahmen (z.B. KfW-Zuschuss)<br>❌ Barzahlung – auch wenn Rechnung vorhanden<br><br>Alle drei Kategorien zusammen sind auf <b>20.000 € Lohnkosten / Jahr</b> begrenzt (= max. 4.000 € Steuerersparnis).',
        norm:'§ 35a EStG · R 35a EStR'
      }
    }
  ],
  learned:['§ 35a EStG: 20 % der Lohnkosten direkt von Steuerschuld','Max. 1.200 €/Jahr bei Handwerkern (6.000 € Lohnkosten)','Nur mit Rechnung UND Überweisung – keine Barzahlung','§ 8 SchwarzArbG: bis 50.000 € Bußgeld für Auftraggeber','Gewährleistung 2 Jahre (§ 634a BGB) nur mit Vertrag']
},
{
  id:'selbstaendig',
  icon:'🚀',
  title:'Selbständig werden',
  protagonist:'Kai, 27 – Grafikdesigner, kündigt seinen Job',
  level:'Fortgeschritten',
  duration:'10 Min.',
  color:'#007a5a',
  scenes:[
    {
      type:'info',
      title:'Die Abmeldung beim Chef',
      narrative:'Kai hat seinen Job als Angestellter bei einer Agentur gekündigt. Er will als freier Grafikdesigner arbeiten – Logos, Corporate Design, Webauftritte. Sein erstes Problem: Ein Freund sagt „Du musst ein Gewerbe anmelden." Ein anderer: „Unsinn, du bist Freiberufler." Das Finanzamt wartet auf seine Entscheidung.',
      fact:{
        title:'§ 18 EStG (Freiberufler) vs. § 15 EStG (Gewerbe)',
        content:'<b>§ 18 Abs. 1 Nr. 1 EStG – Freiberufliche Tätigkeit:</b><br>Grafiker und Designer sind als „ähnliche Berufe" zu den Künstlern anerkannt, <b>wenn die Tätigkeit eigenschöpferisch ist</b> – also eigene kreative Gestaltungsleistung, nicht reine Ausführung nach Vorgaben.<br><br>BFH-Rechtsprechung: Reines Layout nach fest vorgegebenem Corporate Design ohne eigenen Gestaltungsspielraum → <b>gewerblich (§ 15 EStG)</b>. Eigene kreative Konzeptarbeit → <b>freiberuflich (§ 18 EStG)</b>.<br><br><b>Unterschied in der Praxis:</b><br>• Freiberufler: keine Gewerbeanmeldung, keine Gewerbesteuer, keine IHK-Pflicht, EÜR reicht<br>• Gewerbetreibender: Gewerbeanmeldung (ca. 30 €), ab 24.500 € Gewinn Gewerbesteuer, IHK-Mitglied<br><br>Kai macht eigene Konzepte → <b>freiberuflich</b>. Er meldet sich beim Finanzamt per Fragebogen zur steuerlichen Erfassung an.',
        norm:'§ 18 Abs. 1 Nr. 1 EStG · BFH v. 25.4.2002, IV R 4/01 · H 15.6 EStH'
      }
    },
    {
      type:'choice',
      title:'Kleinunternehmer oder Regelbesteuerung?',
      narrative:'Kai erwartet im ersten Jahr ~22.000 € Umsatz. Sein Hauptkunde: eine Werbeagentur (umsatzsteuerpflichtig). Sein Steuerberater legt ihm zwei Optionen vor. Kai kauft außerdem: MacBook Pro 2.499 € brutto, Adobe Creative Suite 756 €/Jahr brutto, Grafiktablett 357 € brutto – zusammen 3.612 € mit Mehrwertsteuer.',
      question:'Kleinunternehmerregelung (§ 19 UStG) – ja oder nein?',
      opts:[
        {
          text:'❌ Nein – Regelbesteuerung ist für Kai vorteilhafter',
          correct:true,
          outcome:'Kai spart durch Vorsteuerabzug 576,47 € – und seine Agenturkunden zahlen netto gleich viel.',
          explain:'<b>Vorsteuerabzug (§ 15 UStG) als Regelbesteuerer:</b><br>MacBook 2.499 € → 19 % = 399,03 € VSt<br>Adobe 756 € → 19 % = 120,75 € VSt<br>Grafiktablett 357 € → 19 % = 56,97 € VSt<br>→ <b>576,47 € Vorsteuererstattung</b> im ersten Jahr<br><br><b>Auswirkung auf Kunden:</b> Die Werbeagentur bekommt auf Kais Rechnung 19 % USt ausgewiesen – die sie sofort als Vorsteuer abzieht. Für die Agentur ist Kais Preis netto gleich, ob Klein- oder Regelbesteuerer. Effektiv zahlt nur der Endverbraucher die USt.<br><br><b>Kais Pflichten:</b> Monatliche/quartalsweise USt-Voranmeldungen via Elster (§ 18 UStG). Im ersten Jahr Dauerfristverlängerung möglich.'
        },
        {
          text:'✅ Ja – Kleinunternehmerregelung (§ 19 UStG)',
          correct:false,
          outcome:'Einfacher in der Verwaltung – aber Kai zahlt seine Investitionen 576 € teurer.',
          explain:'<b>Kleinunternehmerregelung:</b> Kein USt-Ausweis auf Rechnungen, keine Voranmeldungen, kein Vorsteuerabzug.<br><br><b>Was Kai verliert:</b><br>• Vorsteuer auf alle Investitionen: <b>576,47 € nicht erstattbar</b><br>• Bei Privatkunden: leicht günstiger (keine USt obendrauf)<br>• Bei Geschäftskunden (Agentur): macht keinen Unterschied (die ziehen VSt ab)<br><br><b>Wann KU sinnvoll ist:</b><br>• Hauptsächlich Privatkunden (die VSt nicht abziehen können)<br>• Sehr geringe Investitionen<br>• Erwarteter Jahresumsatz deutlich unter der Grenze<br><br><b>Grenze ab 2025:</b> Vorjahresumsatz ≤ 25.000 € UND laufendes Jahr voraussichtlich ≤ 100.000 € (§ 19 Abs. 1 UStG n.F.)'
        }
      ],
      fact:{
        title:'USt-Mechanik: Warum Vorsteuer so wichtig ist',
        content:'<b>Das Grundprinzip (§§ 1, 15 UStG):</b><br>Jeder Unternehmer erhebt USt auf seine Ausgangsleistungen und darf die bezahlte USt auf Eingangsleistungen als Vorsteuer abziehen. Ergebnis: Die Steuer belastet wirtschaftlich nur den <b>Endverbraucher</b> ohne Vorsteuerabzugsberechtigung.<br><br><b>USt-Voranmeldung (§ 18 UStG):</b><br>Gründer im ersten Jahr: monatliche Pflicht. Ab zweitem Jahr: wenn Vorjahreszahllast unter 7.500 € → quartalsweise. Mit Dauerfristverlängerung: einen Monat mehr Zeit.<br><br>Meldet Kai seine USt nicht rechtzeitig an: Verspätungszuschlag (§ 152 AO) + Schätzung durch Finanzamt (§ 162 AO).',
        norm:'§ 15, § 18, § 19 UStG · § 152, § 162 AO'
      }
    },
    {
      type:'info',
      title:'Die erste Rechnung – und ein Fehler',
      narrative:'Kais erste Rechnung an die Werbeagentur: „Corporate Design Konzept, 20 Stunden à 75 € = 1.500 € zzgl. 19 % USt = 1.785 € brutto." Er schickt die PDF. Stunde später antwortet die Buchhaltung der Agentur: „Wir können keine Vorsteuer ziehen – Pflichtangabe fehlt." Kai sucht verzweifelt: Was hat er vergessen?',
      fact:{
        title:'Pflichtangaben auf Rechnungen (§ 14 Abs. 4 UStG)',
        content:'Eine Rechnung mit USt-Ausweis muss zwingend enthalten:<br><br>1. Vollständiger Name & Anschrift <b>beider</b> Parteien<br>2. <b>Steuernummer</b> (vom Finanzamt) oder <b>USt-IdNr.</b> (vom BZSt)<br>3. Ausstellungsdatum<br>4. <b>Fortlaufende Rechnungsnummer</b> (eindeutig, einmalig)<br>5. Menge + handelsübliche Bezeichnung der Leistung<br>6. <b>Zeitpunkt der Leistungserbringung</b> (auch „entspricht Rechnungsdatum" reicht)<br>7. Netto-Entgelt, <b>Steuersatz (19 %)</b>, Steuerbetrag, Bruttobetrag<br><br>⚠️ Kai hat seine <b>Steuernummer vergessen</b>. Folge: Die Agentur darf die 285 € Vorsteuer nicht abziehen (§ 15 Abs. 1 S. 1 Nr. 1 UStG) – bis eine korrigierte Rechnung vorliegt.',
        norm:'§ 14 Abs. 4, § 15 Abs. 1 UStG · BMF-Schreiben 7.12.2021'
      }
    },
    {
      type:'choice',
      title:'Oktober: Die Steuer-Falle',
      narrative:'Kai hat gut verdient: 28.000 € Umsatz bis Oktober, 22.400 € davon sind Netto-Einnahmen (nach USt). Er freut sich über den Kontostand: 24.600 €. Dann kommt die USt-Voranmeldung für Q3: 1.330 € Zahllast. Im November: Gewerbe-Vorauszahlung (Kai hat doch Gewerbe – ein Auftrag war rein nach Vorgaben). Der Steuerberater: „Hast du fürs Jahresende Rücklagen?"',
      question:'Wie hätte Kai von Anfang an richtig planen sollen?',
      opts:[
        {
          text:'💡 Von jeder Zahlung sofort Rücklagen auf ein separates Konto',
          correct:true,
          outcome:'Keine Überraschungen, keine Liquiditätsprobleme.',
          explain:'<b>Kais Faustregel für jede Einnahme:</b><br><br>Eingang: 1.785 € brutto (Kundenrechnung)<br>→ <b>285 € USt sofort wegtransferieren</b> – das ist nicht Kais Geld, nur durchlaufend<br>→ Von den 1.500 € netto:<br>  • ~28 % ESt-Rücklage: 420 € (je nach Progressionsstufe)<br>  • ~18 % Krankenversicherung (freiwillig GKV): 270 €<br>  • Rentenversicherung (optional, aber wichtig): variabel<br><br><b>Praktisch:</b> Separates Konto „Steuern & SV" eröffnen. Nach jedem Eingang automatisch ~45 % überweisen. Was auf dem Geschäftskonto bleibt, gehört Kai.<br><br>Das klingt viel – ist aber nötig. Selbständige haben keinen Arbeitgeber, der die Abzüge vornimmt.'
        },
        {
          text:'🤞 Abwarten und schauen, was das Finanzamt schickt',
          correct:false,
          outcome:'Jahresende: ESt-Nachzahlung, USt-Zahllast und KV-Beiträge gleichzeitig – Liquiditätskrise.',
          explain:'<b>Was Kai im Januar passiert:</b><br><br>1. <b>USt-Jahreserklärung:</b> 22.400 € Nettoumsatz × 19 % = 4.256 € Zahllast, abzgl. Voranmeldungen und Vorsteuer → Rest-Zahllast<br>2. <b>ESt-Vorauszahlungen:</b> Ab dem zweiten Jahr setzt das Finanzamt quartalsweise Vorauszahlungen fest (§ 37 EStG) – basierend auf dem Vorjahresbescheid. Im ersten Jahr keine Pflicht, aber die Jahressteuernachzahlung trifft auf einmal.<br>3. <b>Krankenversicherung:</b> Als Selbständiger zahlt Kai den vollen Beitrag (~850 €/Monat bei durchschnittlichem Einkommen).<br><br>Ohne Rücklagen: Stundungsantrag (§ 222 AO), Zinsen 1,8 % p.a. (§ 238 AO). Im schlimmsten Fall: Vollstreckung (§ 249 AO).'
        }
      ],
      fact:{
        title:'Vorauszahlungen und Liquiditätsplanung',
        content:'<b>§ 37 EStG – Vorauszahlungen:</b> Das Finanzamt setzt ab dem zweiten Steuerjahr vierteljährliche Vorauszahlungen fest (15.3., 15.6., 15.9., 15.12.). Basis: letzter Bescheid. Werden sie nicht gezahlt: Säumniszuschlag 1 % pro angefangenem Monat (§ 240 AO).<br><br><b>§ 222 AO – Stundung:</b> Auf Antrag möglich bei erheblicher Härte und Sicherheitsleistung. Zinsen: 1,8 % p.a. (§ 238 AO).<br><br><b>Praxistipp:</b> Separates Steuerkonto führen. Viele Steuerberater empfehlen: 35–45 % jeder Netto-Einnahme zurücklegen (USt bereits raus) für ESt + GewSt + KV.',
        norm:'§ 37, § 240 EStG · § 222, § 238, § 240 AO'
      }
    }
  ],
  learned:['§ 18 EStG Freiberufler: eigenschöpferisch kreativ = kein Gewerbe','§ 19 UStG Kleinunternehmer: sinnvoll nur bei Privatkunden + geringen Investitionen','§ 15 UStG Vorsteuer: Investitionen werden günstiger','§ 14 UStG Rechnungspflicht: Steuernummer nicht vergessen!','§ 37 EStG Vorauszahlungen + 45 %-Rücklagenregel als Selbständiger']
},
{
  id:'einspruch',
  icon:'⚖️',
  title:'Einspruch gegen den Bescheid',
  protagonist:'Tom, 29 – Softwareentwickler, Angestellter, erster Steuerbescheid',
  level:'Fortgeschritten',
  duration:'9 Min.',
  color:'#7b5ea7',
  scenes:[
    {
      type:'info',
      title:'Post vom Finanzamt',
      narrative:'Tom hat zum ersten Mal eine Steuererklärung abgegeben. Er hat 2.400 € Fahrtkosten (30 km × 0,38 € × 210 Tage), einen neuen Laptop für 1.100 € und Fachliteratur für 280 € als Werbungskosten angegeben. Dann kommt der Einkommensteuerbescheid. Erstattung: nur 380 € statt der erwarteten 720 €. Tom versteht nicht warum – bis er auf Seite 2 liest: „Aufwendungen für Computer wurden nicht anerkannt."',
      fact:{
        title:'Der Steuerbescheid – ein Verwaltungsakt (§ 118 AO)',
        content:'Jeder Steuerbescheid ist ein <b>Verwaltungsakt</b> (§ 118 AO). Er wird wirksam durch <b>Bekanntgabe</b> (§ 122 AO).<br><br><b>Was im Bescheid steht:</b><br>• Festgesetzte Steuer (§ 155 AO) und Nachzahlung/Erstattung<br>• Berechnungsgrundlagen und erklärte vs. anerkannte Beträge<br>• <b>Rechtsbehelfsbelehrung</b> (§ 356 AO) – fehlt sie, verlängert sich die Frist auf 1 Jahr!<br><br><b>Bekanntgabe-Fiktion (§ 122 Abs. 2 Nr. 1 AO, JStG 2022 ab 01.01.2023):</b><br>Einfacher Brief gilt am <b>4. Tag nach Aufgabe zur Post</b> als zugegangen. Fällt dieser Tag auf Sa/So/Feiertag → nächster Werktag.',
        norm:'§ 118, § 122, § 155, § 356 AO'
      }
    },
    {
      type:'choice',
      title:'Was soll Tom jetzt tun?',
      narrative:'Toms Kollege sagt: „Ruf doch einfach beim Finanzamt an, die korrigieren das." Sein Steuerberater-Freund mahnt: „Du musst offiziell Einspruch einlegen – und zwar innerhalb der Frist!" Der Bescheid wurde am Mittwoch, 12. März 2026 zur Post gegeben. Heute ist Donnerstag, 20. März.',
      question:'Was ist der richtige nächste Schritt für Tom?',
      opts:[
        {
          text:'📞 Beim Finanzamt anrufen und bitten, den Laptop noch aufzunehmen',
          correct:false,
          outcome:'Tom telefoniert – der Sachbearbeiter ist freundlich, kann aber nichts ändern.',
          explain:'<b>Ein Anruf ist kein Rechtsbehelf!</b><br><br>Ein freundliches Telefonat ist okay, aber es hemmt <b>keine Fristen</b>. Der Steuerbescheid kann nur durch förmlichen <b>Einspruch (§ 347 AO)</b> angefochten werden. Wenn Tom nur anruft und die Frist verstreicht, ist der Bescheid <b>bestandskräftig</b> (§ 351 AO) – dann hilft kein Anruf mehr.<br><br><b>Bestandskraft</b> bedeutet: Der Bescheid ist endgültig, auch wenn er falsch ist. Nur in Ausnahmefällen (§ 173, § 175 AO: neue Tatsachen, rückwirkendes Ereignis) kann noch korrigiert werden.'
        },
        {
          text:'📝 Schriftlich Einspruch einlegen beim zuständigen Finanzamt',
          correct:true,
          outcome:'Tom legt fristgerecht Einspruch ein. Das Rechtsbehelfsverfahren beginnt.',
          explain:'<b>Richtig! Einspruch gem. § 347 Abs. 1 S. 1 AO ist der Weg.</b><br><br><b>Die Frist (§ 355 Abs. 1 AO):</b><br>• 1 Monat ab Bekanntgabe<br>• Aufgabe zur Post: 12.03.2026 (Mi) → Bekanntgabe-Fiktion: 16.03.2026 (Mo)<br>• Fristende: <b>16.04.2026</b><br><br><b>Form (§ 357 AO):</b><br>• Schriftlich, elektronisch oder zur Niederschrift beim Finanzamt<br>• Muss erkennen lassen: wer, gegen was, warum<br>• Keine Begründungspflicht – aber dringend empfohlen!<br><br>Tom hat also bis zum 17. April Zeit. Er sollte den Kaufbeleg für den Laptop beilegen.'
        },
        {
          text:'⏳ Erstmal abwarten – man hat bestimmt ein Jahr Zeit',
          correct:false,
          outcome:'Tom wartet – und verpasst die Einspruchsfrist.',
          explain:'<b>Gefährlich! Die Einspruchsfrist beträgt nur 1 Monat (§ 355 Abs. 1 AO).</b><br><br>Ein Jahr Frist gilt <b>nur</b> wenn die Rechtsbehelfsbelehrung fehlt oder unrichtig ist (§ 356 Abs. 2 AO). In Toms Bescheid steht eine korrekte Belehrung → es gilt die reguläre Monatsfrist.<br><br>Nach Ablauf der Frist ist der Bescheid <b>bestandskräftig</b>. Die ca. 340 € Erstattungsdifferenz (Laptop-Werbungskosten) sind dann verloren – für immer.'
        }
      ],
      fact:{
        title:'Das Einspruchsverfahren auf einen Blick',
        content:'<b>Ablauf nach § 347 ff. AO:</b><br><br><span style="color:var(--blue);font-weight:900">1.</span> Einspruch einlegen (§ 347 AO) – Frist: 1 Monat (§ 355 AO)<br><span style="color:var(--blue);font-weight:900">2.</span> Finanzamt prüft den gesamten Bescheid erneut (§ 367 Abs. 2 AO – <b>Verböserungsmöglichkeit!</b>)<br><span style="color:var(--blue);font-weight:900">3.</span> Mögliche Ergebnisse:<br>• <b>Abhilfe</b> (§ 367 Abs. 2 S. 3): FA gibt Tom recht → geänderter Bescheid<br>• <b>Teilabhilfe</b>: teilweise Korrektur<br>• <b>Einspruchsentscheidung</b> (§ 367 Abs. 1): FA weist Einspruch zurück → Tom kann innerhalb 1 Monat <b>Klage beim Finanzgericht</b> erheben (§ 47 FGO)<br>• <b>Rücknahme</b> (§ 362 AO): Tom zieht den Einspruch zurück<br><br>⚠️ <b>Verböserung (§ 367 Abs. 2 S. 2 AO):</b> Das FA darf den Bescheid zum Nachteil von Tom ändern! Vorher wird Tom angehört (§ 367 Abs. 2 S. 2 AO) – dann kann er zurücknehmen.',
        norm:'§§ 347, 355, 357, 362, 367 AO · § 47 FGO'
      }
    },
    {
      type:'info',
      title:'Der Ausgang – und was Tom daraus lernt',
      narrative:'Tom legt am 28. März schriftlich Einspruch ein und legt den Kaufbeleg bei. Er formuliert: „Der Laptop wird zu 90 % beruflich genutzt (Softwareentwicklung, Home-Office). Er ist ein typisches Arbeitsmittel gem. § 9 Abs. 1 EStG." Drei Wochen später kommt ein geänderter Bescheid: Der Laptop wird zu 90 % anerkannt (990 €). Toms Erstattung steigt um 330 € auf 710 €.',
      fact:{
        title:'Praxistipps für Einsprüche',
        content:'<b>Warum wurde der Laptop zuerst abgelehnt?</b><br>Häufigster Grund: Fehlende Nachweise. Das Finanzamt sieht einen Laptop und vermutet private Mitbenutzung. Ohne Beleg oder Erklärung wird der Abzug gestrichen.<br><br><b>So machst du es richtig:</b><br>• <b>Nachweis beifügen:</b> Kaufbeleg, Screenshot der beruflichen Nutzung<br>• <b>Berufliche Nutzung begründen:</b> „Programmierung erfordert leistungsstarke Hardware"<br>• <b>Aufteilung angeben:</b> bei Mischnutzung z.B. 90 % beruflich, 10 % privat (§ 12 Nr. 1 EStG, BFH-Urteil v. 21.09.2009)<br>• <b>GWG-Grenze beachten:</b> Netto ≤ 800 € (brutto 952 €) → sofort absetzbar. Darüber → AfA über 3 Jahre (§ 7 Abs. 1 EStG, § 6 Abs. 2 EStG)<br><br>Toms Laptop kostete 1.100 € brutto → liegt über der GWG-Grenze. Aber: Digitale Wirtschaftsgüter dürfen seit BMF-Schreiben 2021 auf 1 Jahr abgeschrieben werden (Nutzungsdauer 1 Jahr für „Computerhardware").',
        norm:'§ 9, § 7, § 6 Abs. 2 EStG · § 347 ff. AO · BMF v. 22.02.2022'
      }
    }
  ],
  learned:['§ 347 AO: Einspruch ist der einzige Rechtsbehelf gegen Steuerbescheide','§ 355 AO: Frist = 1 Monat ab Bekanntgabe (3-Tages-Fiktion beachten!)','§ 367 Abs. 2 AO: Verböserungsgefahr – FA darf Bescheid auch verschlechtern','§ 357 AO: Schriftlich, elektronisch oder zur Niederschrift','Nachweise beifügen und berufliche Nutzung begründen']
}
,
{
  id:'nebenjob',
  icon:'💰',
  learned:['Grundfreibetrag 2026: 12.336 € (§ 32a EStG) – darunter keine ESt','Schwarzarbeit ist auch strafbar wenn keine Steuer anfällt (§ 370 AO)','Schüler können freiwillig Steuererklärung abgeben – 4 Jahre rückwirkend','556 € = aktuelle Minijob-Grenze 2026 (SV), kein ESt-Freibetrag','Gelegentliche Gefälligkeit ≠ Gewerbetätigkeit'],
  title:'Nebenjob oder Schwarzarbeit?',
  protagonist:'Leon, 17 – Schüler, verdient Geld mit Nachhilfe und Rasenmähen',
  level:'Einstieg',
  duration:'6 Min.',
  color:'#b35c00',
  scenes:[
    {
      type:'info',
      title:'400 Euro – aber wie anmelden?',
      narrative:'Leon gibt samstags Nachhilfe in Mathe und mäht den Rasen der Nachbarn. Im Monat kommen ca. 400 € zusammen. Sein Freund Milo sagt: „Einfach bar kassieren, das Finanzamt merkt das sowieso nicht." Leons Mutter ist anderer Meinung. Wer hat recht?',
      hint:'Schüler bis 17 Jahre können steuerpflichtige Einnahmen erzielen – das Alter schützt nicht automatisch vor Steuerpflicht.'
    },
    {
      type:'choice',
      question:'Was rät Leon seine Mutter?',
      context:'Leons Mutter ist Steuerassistentin und kennt die Regeln.',
      choices:[
        {text:'„Unter 556 €/Monat ist alles steuerfrei – mach dir keine Sorgen."', correct:false, feedback:'Nicht ganz richtig. 556 € ist die aktuelle Minijob-Grenze 2026 (SV), aber steuerlich gibt es kein automatisches Freibetragsmodell für Schüler.'},
        {text:'„Bis 12.336 € Jahreseinkommen fällt keine Einkommensteuer an – du bist weit darunter. Aber du solltest Einnahmen trotzdem korrekt angeben."', correct:true, feedback:'Genau! Der Grundfreibetrag (§ 32a EStG) schützt Leons Einkommen vor Steuer. Schwarzarbeit – also bewusstes Verschweigen – ist aber trotzdem strafbar (§ 370 AO), selbst wenn am Ende keine Steuer anfällt.'},
        {text:'„Meld dich als Unternehmer an – dann läuft alles legal."', correct:false, feedback:'Eine Gewerbeanmeldung wäre bei diesem Umfang übertrieben. Gelegentliche Gefälligkeiten fallen nicht automatisch unter Gewerbe.'},
      ]
    },
    {
      type:'info',
      title:'Was ist eigentlich Schwarzarbeit?',
      narrative:'Schwarzarbeit bedeutet: Arbeit erbringen oder erhalten, die steuerlich oder sozialversicherungsrechtlich nicht gemeldet ist. Das betrifft nicht nur den Arbeitnehmer, sondern auch den Auftraggeber. Nachbarin Frau Bauer, die Leon für den Rasen zahlt, kann ebenfalls in Schwierigkeiten geraten – wenn das als „Beschäftigung" gilt.',
      hint:'Gelegentliche Gefälligkeiten (Freundschaftsdienst) sind kein Problem. Sobald regelmäßige Zahlung für Arbeit erfolgt, wird es ernst.'
    },
    {
      type:'choice',
      question:'Leon verdient 4.800 € im Jahr mit Nachhilfe. Muss er eine Steuererklärung abgeben?',
      context:'Leon ist 17, Schüler, keine weiteren Einkünfte.',
      choices:[
        {text:'Ja – jeder Schüler mit Einkommen muss eine Erklärung abgeben', correct:false, feedback:'Nicht automatisch. Die Abgabepflicht hängt vom Einkommen ab.'},
        {text:'Nein – 4.800 € liegt unter dem Grundfreibetrag (12.336 €), keine Abgabepflicht, keine Steuer', correct:true, feedback:'Richtig! 4.800 € < 12.336 € Grundfreibetrag → keine Steuer, keine Pflicht zur Erklärung. Aber: Leon kann freiwillig eine Erklärung abgeben (bis zu 4 Jahre rückwirkend) – das schadet nicht.'},
        {text:'Nur wenn er mehr als 556 € pro Monat verdient', correct:false, feedback:'556 € ist die Minijob-Grenze 2026 (SV), kein ESt-Freibetrag.'},
      ]
    },
    {
      type:'info',
      title:'Das Fazit: Legal, einfach, sicher',
      narrative:'Leon muss nichts Kompliziertes tun. Solange er unter dem Grundfreibetrag bleibt, zahlt er keine Einkommensteuer. Er muss sich nicht als Unternehmer anmelden und auch keine Erklärung abgeben. Aber: bar kassieren und nichts sagen – das ist trotzdem keine gute Idee. Ehrlichkeit schützt vor Problemen.',
      hint:'Tipp: Wer später eine Berufsausbildung beginnt, kann rückwirkend Ausbildungskosten geltend machen – dafür braucht man Belege und eine Erklärung!'
    },
  ]
},
{
  id:'betriebspruefung',
  icon:'🔍',
  learned:['Prüfungsanordnung (§ 196 AO) ist ein Verwaltungsakt – Frist von 2+ Wochen','Mitwirkungspflicht (§ 90 AO): Unterlagen vorlegen, Auskünfte geben','Schätzung (§ 162 AO) fällt i.d.R. zum Nachteil des Steuerpflichtigen aus','Schlussbesprechung (§ 201 AO): letzte Chance für Einwände','§ 147 AO: 10 Jahre Aufbewahrungspflicht für Buchführungsunterlagen'],
  title:'Die Betriebsprüfung',
  protagonist:'Familie Müller – kleiner Imbiss in Berlin, 3. Generation',
  level:'Fortgeschritten',
  duration:'8 Min.',
  color:'#1a3a8f',
  scenes:[
    {
      type:'info',
      title:'Der Brief vom Finanzamt',
      narrative:'Imbiss-Betreiberin Sabine Müller öffnet montags ihre Post. Ein Brief vom Finanzamt Berlin-Mitte: „Prüfungsanordnung gemäß § 196 AO – wir werden Ihre steuerlichen Verhältnisse der Jahre 2021–2023 prüfen." Sabine wird blass. Was bedeutet das?',
      hint:'Eine Prüfungsanordnung ist ein Verwaltungsakt (§ 118 AO) – sie kann mit Einspruch angefochten werden, aber das lohnt sich selten.'
    },
    {
      type:'choice',
      question:'Sabine fragt ihren Steuerberater: „Muss ich überhaupt kooperieren?" Was antwortet er?',
      context:'Der Steuerberater kennt § 90 AO genau.',
      choices:[
        {text:'„Nein – du darfst die Prüfung ablehnen, wenn du nichts zu verbergen hast."', correct:false, feedback:'Falsch. Es gibt keine Möglichkeit, eine rechtmäßige Betriebsprüfung einfach abzulehnen.'},
        {text:'„Ja – du hast weitreichende Mitwirkungspflichten (§ 90 AO): Unterlagen vorlegen, Auskünfte erteilen, Zugang zu EDV gewähren."', correct:true, feedback:'Genau. § 90 AO verpflichtet zur aktiven Mitwirkung. Wer das verweigert, riskiert Schätzungen (§ 162 AO) – oft ungünstig. Kooperation ist fast immer die bessere Strategie.'},
        {text:'„Nur wenn du einen Anwalt dabei hast."', correct:false, feedback:'Ein Anwalt oder Steuerberater darf anwesend sein – aber Kooperation ist unabhängig davon Pflicht.'},
      ]
    },
    {
      type:'info',
      title:'Der Prüfer kommt',
      narrative:'Betriebsprüfer Herr König erscheint pünktlich. Er prüft drei Jahre: Kassenbücher, Registrierkasse, Wareneinkauf vs. Umsatz. Er macht eine „Nachkalkulation": Wenn pro Döner 2,50 € Wareneinsatz entstehen und 4.200 Döner pro Jahr verkauft werden, müsste der Umsatz mindestens X betragen. Die erklärten Umsätze sind niedriger.',
      hint:'Nachkalkulation und Kassensturz sind klassische Prüfungsmethoden. Differenzen führen zur Schätzung (§ 162 AO).'
    },
    {
      type:'choice',
      question:'Herr König stellt eine Umsatzdifferenz von 12.000 € fest und will schätzen. Sabine sagt, die Differenz kommt von Schwund und Eigenverbrauch. Was sollte sie jetzt tun?',
      context:'Schätzungen nach § 162 AO können sehr nachteilig sein.',
      choices:[
        {text:'Schweigen und den Prüfungsbericht abwarten', correct:false, feedback:'Nicht empfehlenswert. Wer keine Erklärung liefert, lässt die Schätzung so stehen.'},
        {text:'Belege und Nachweise für Schwund und Eigenverbrauch vorlegen – und dies in der Schlussbesprechung sachlich darlegen', correct:true, feedback:'Richtig! Die Schlussbesprechung (§ 201 AO) ist die Chance, Einwände einzubringen. Belege reduzieren die Schätzungsbasis. Nach der Besprechung wird der Prüfungsbericht erstellt.'},
        {text:'Einspruch gegen die Prüfungsanordnung einlegen', correct:false, feedback:'Zu spät – die Prüfung läuft bereits. Einspruch gegen den späteren Steuerbescheid wäre der richtige Weg.'},
      ]
    },
    {
      type:'info',
      title:'Das Ergebnis',
      narrative:'Nach der Schlussbesprechung akzeptiert Herr König einen Teil der Belege. Die geschätzte Hinzurechnung wird auf 4.000 € reduziert. Das Finanzamt erlässt geänderte Steuerbescheide für 3 Jahre – mit Nachzahlungen und Zinsen (§ 233a AO: 1,8 % p.a. seit 2023). Sabine ist erleichtert, dass sie kooperiert hat.',
      hint:'Merksatz: Kooperation + gute Buchführung = geringste Belastung bei einer Betriebsprüfung. Wer Unterlagen ordentlich aufbewahrt (§ 147 AO: 10 Jahre), hat selten Probleme.'
    },
  ]
}

,
{
  id:'werklieferung',
  icon:'🔧',
  learned:['Werklieferung (§ 3 Abs. 4 UStG): eigene Stoffe überwiegen → Behandlung wie Lieferung','Werkleistung (§ 3 Abs. 9 UStG): fremde Stoffe → Behandlung wie sonstige Leistung','Leistungsort Werklieferung: Ort des Einbaus (§ 3 Abs. 7 UStG)','Leistungsort Werkleistung B2B: Sitz des Empfängers (§ 3a Abs. 2 UStG)','Merksatz: Wessen Werkstoff → Werklieferung oder Werkleistung?'],
  title:'Werklieferung oder Werkleistung?',
  protagonist:'Steuerberater Klaus – erklärt seinen Azubis die USt-Grundlagen',
  level:'Fortgeschritten',
  duration:'7 Min.',
  color:'#005c36',
  scenes:[
    {
      type:'info',
      title:'Die entscheidende Frage',
      narrative:'Klaus schreibt zwei Fälle an die Tafel. Fall A: Tischler baut aus eigenem Holz einen Einbauschrank beim Kunden. Fall B: Tischler repariert einen vorhandenen Schrank des Kunden mit dessen Materialien. „Beide Male arbeitet ein Tischler beim Kunden. Und doch ist das umsatzsteuerlich etwas völlig anderes", sagt Klaus. Warum?',
      hint:'§ 3 Abs. 4 UStG: Eine Werklieferung liegt vor, wenn der Unternehmer einen Gegenstand aus fremden Stoffen herstellt ODER aus überwiegend eigenen Stoffen be- oder verarbeitet.'
    },
    {
      type:'choice',
      question:'Tischler Thomas baut aus EIGENEM Holz (Wert: 800 €) einen Einbauschrank beim Kunden. Arbeitslohn: 400 €. Was liegt umsatzsteuerlich vor?',
      context:'Die überwiegende Leistung entscheidet: Material oder Arbeit?',
      choices:[
        {text:'Werkleistung – Thomas arbeitet beim Kunden', correct:false, feedback:'Falsch. Werkleistung wäre es, wenn Thomas überwiegend mit Material des Kunden arbeiten würde. Hier bringt er eigenes Holz (800 €) mit – das überwiegt die Arbeitsleistung (400 €).'},
        {text:'Werklieferung (§ 3 Abs. 4 UStG) – eigenes Material überwiegt, Ort = Einbauort', correct:true, feedback:'Richtig! Thomas verarbeitet überwiegend eigene Stoffe → Werklieferung. Behandlung wie eine Lieferung: Leistungsort nach § 3 Abs. 7 UStG = dort, wo der Einbau stattfindet.'},
        {text:'Gemischte Leistung – kein eindeutiger Fall', correct:false, feedback:'Nein. Wenn eigene Stoffe überwiegen, ist es eindeutig Werklieferung. Nur bei fremden Materialien des Kunden wäre es Werkleistung.'},
      ]
    },
    {
      type:'choice',
      question:'Tischler Thomas repariert denselben Schrank mit Holz DES KUNDEN. Sein Arbeitslohn: 350 €, verbrauchtes Kundenmaterial: 50 €. Was liegt vor?',
      context:'Jetzt dreht sich das Verhältnis um.',
      choices:[
        {text:'Werklieferung – Thomas arbeitet mit Material', correct:false, feedback:'Nein. Das Material gehört dem Kunden (50 €) und der Arbeitslohn überwiegt (350 €). Das ist kein eigenes Material von Thomas.'},
        {text:'Werkleistung (§ 3 Abs. 9 UStG) – Arbeit überwiegt, Leistungsort = Sitz des Kunden (B2B) oder Ort der Ausführung (B2C)', correct:true, feedback:'Genau! Fremdes Material + Arbeit = Werkleistung. Behandlung wie sonstige Leistung (§ 3 Abs. 9 UStG). Leistungsort B2B: Sitz des Empfängers (§ 3a Abs. 2 UStG). Leistungsort B2C: Ort der Tätigkeit.'},
        {text:'Werklieferung, weil Holz verarbeitet wurde', correct:false, feedback:'Die Art des Stoffs ist nicht entscheidend – sondern WEM er gehört. Fremde Stoffe = Werkleistung.'},
      ]
    },
    {
      type:'info',
      title:'Warum die Abgrenzung wichtig ist',
      narrative:'Klaus erklärt: „Der Unterschied bestimmt den Leistungsort und damit, ob ihr in Deutschland oder im Ausland USt schuldet. Bei Werklieferung gilt der Ort des Einbaus (§ 3 Abs. 7 UStG). Bei Werkleistung B2B der Sitz des Kunden (§ 3a Abs. 2 UStG). Das wird kritisch wenn der Kunde im EU-Ausland sitzt!"',
      hint:'Merksatz: Eigene Stoffe überwiegen → Werklieferung = Lieferung. Fremde Stoffe → Werkleistung = sonstige Leistung.'
    },
    {
      type:'choice',
      question:'Schweizer Unternehmer kauft bei Thomas einen Einbauschrank aus Eigenem Holz (Werklieferung), Einbau in Zürich. Ist dieser Umsatz in Deutschland steuerbar?',
      context:'Werklieferung → Leistungsort = Ort des Einbaus.',
      choices:[
        {text:'Ja – Thomas sitzt in Deutschland, also deutsches USt-Recht', correct:false, feedback:'Irrtum! Bei Lieferungen (inkl. Werklieferungen) kommt es nicht auf den Sitz des Liefernden an.'},
        {text:'Nein – Leistungsort ist Zürich (Schweiz), kein EU-Inland → nicht steuerbar in Deutschland', correct:true, feedback:'Richtig! Werklieferung = Lieferung. Ort des Einbaus = Zürich. Damit ist der Umsatz in der Schweiz steuerbar, nicht in Deutschland. Thomas muss sich ggf. in der Schweiz registrieren lassen.'},
        {text:'Nein – Lieferungen in die Schweiz sind immer steuerfrei', correct:false, feedback:'Nicht automatisch. Steuerfrei wäre es, wenn es als Ausfuhrlieferung qualifiziert und alle Nachweise vorliegen (§ 4 Nr. 1a, § 6 UStG). Das ist ein anderer Aspekt.'},
      ]
    },
    {
      type:'info',
      title:'Zusammenfassung',
      narrative:'Klaus schließt: „Drei Sekunden Prüfung: Wessen Material überwiegt? Eigenes → Werklieferung. Fremdes → Werkleistung. Das klingt einfach, aber im Klausurfall zählt jede Sekunde."',
      hint:'Lernhilfe: W-W-W – Wessen Werkstoff → Werklieferung oder Werkleistung → Welcher Ort gilt?'
    },
  ]
},
{
  id:'reihengeschaeft',
  icon:'🔗',
  learned:['Im Reihengeschäft gibt es immer nur eine bewegte Lieferung','Bewegte Lieferung = die Lieferung der der Transport zugeordnet wird (§ 3 Abs. 6 S. 5 UStG)','Verwendet Mittelsmann USt-ID des Bestimmungslandes: Bewegung wechselt zu A→B','Dreiecksgeschäft § 25b UStG: Vereinfachung für A→B→C in drei EU-Ländern','Prüfreihenfolge: Wer transportiert? Welche USt-ID? Bewegte/unbewegte Lieferung?'],
  title:'Das Reihengeschäft – wer liefert was?',
  protagonist:'Großhändler Gabi – kauft in China, verkauft in Polen',
  level:'Fortgeschritten',
  duration:'8 Min.',
  color:'#1a0060',
  scenes:[
    {
      type:'info',
      title:'Was ist ein Reihengeschäft?',
      narrative:'A (China) → B (Deutschland, Gabi) → C (Polen). Gabi kauft Elektrogeräte bei A und verkauft sie sofort an C weiter. Aber: Die Ware geht direkt von A in China nach C in Polen – ohne Umweg über Gabis Lager. Das nennt sich Reihengeschäft (§ 3 Abs. 6a UStG): Eine einzige Warenbewegung, aber zwei Lieferungen.',
      hint:'Im Reihengeschäft gibt es immer genau eine bewegte Lieferung (die Ware reist physisch) und eine oder mehrere unbewegte Lieferungen (nur auf dem Papier).'
    },
    {
      type:'choice',
      question:'A liefert aus China direkt an C in Polen. B (Gabi) ist der Mittelsmann. Wer ist der Transporteur – B beauftragt die Spedition. Welche Lieferung ist die bewegte?',
      context:'Grundregel § 3 Abs. 6a S. 1 UStG: Die bewegte Lieferung ist die Lieferung, der der Transport zugeordnet wird.',
      choices:[
        {text:'Die Lieferung A→B ist die bewegte Lieferung, da A den Transport veranlasst', correct:false, feedback:'Nicht ganz. Wenn B (der Mittelsmann) den Transport beauftragt, kommt es auf die USt-ID an, die B gegenüber A verwendet.'},
        {text:'Die Lieferung B→C ist die bewegte Lieferung, weil B den Transport beauftragt und B gegenüber A mit einer deutschen USt-ID auftritt', correct:true, feedback:'Richtig! Wenn der mittlere Unternehmer (B) den Transport veranlasst und gegenüber seinem Lieferanten (A) mit der USt-ID des Abgangslandes auftritt, wird die Bewegung der Lieferung B→C zugeordnet. Die Lieferung A→B ist dann unbewegt – ruhende Lieferung im Abgangsland China.'},
        {text:'Beide Lieferungen sind gleich – die Ware bewegt sich von A nach C', correct:false, feedback:'Nein. Obwohl die Ware physisch von A nach C geht, gibt es steuerrechtlich immer nur eine bewegte und eine unbewegte Lieferung.'},
      ]
    },
    {
      type:'info',
      title:'Was bedeutet das konkret?',
      narrative:'Die bewegte Lieferung (B→C) bestimmt den Lieferort: Sie findet im Abgangsland China statt und ist als innergemeinschaftliche Lieferung oder Ausfuhrlieferung zu behandeln. Die unbewegte Lieferung (A→B) findet ebenfalls in China statt – A und B müssen dort klären, ob Steuern anfallen. Gabi muss prüfen: Muss sie sich in China registrieren?',
      hint:'Merksatz: Bewegte Lieferung = die Lieferung, der der Transport gehört. Alle anderen Lieferungen in der Kette sind unbewegt – ihr Ort bestimmt sich nach § 3 Abs. 7 UStG.'
    },
    {
      type:'choice',
      question:'B (Gabi) tritt gegenüber A mit einer POLNISCHEN USt-ID auf (statt der deutschen). Ändert sich dadurch die Zuordnung der bewegten Lieferung?',
      context:'§ 3 Abs. 6a S. 2 UStG: Besondere Regel wenn der Mittelsmann die USt-ID des Bestimmungslandes verwendet.',
      choices:[
        {text:'Nein – die USt-ID ändert nichts an der physischen Warenbewegung', correct:false, feedback:'Die physische Bewegung bleibt gleich – aber die steuerliche Zuordnung ändert sich nach dem Gesetz.'},
        {text:'Ja – die bewegte Lieferung wechselt zu A→B, da B mit polnischer USt-ID agiert (Bestimmungsland)', correct:true, feedback:'Richtig! § 3 Abs. 6a S. 2 UStG: Verwendet der Mittelsmann die USt-ID des Bestimmungslandes, wird die Bewegung der Lieferung A→B zugeordnet. B→C ist dann die unbewegte Lieferung im Bestimmungsland Polen. Das hat erhebliche steuerliche Konsequenzen für A!'},
        {text:'Teilweise – nur die Mehrwertsteuer ändert sich, nicht die Zuordnung', correct:false, feedback:'Nein – es ändert sich die komplette steuerliche Zuordnung der bewegten vs. unbewegten Lieferung.'},
      ]
    },
    {
      type:'info',
      title:'Dreiecksgeschäft als Vereinfachung',
      narrative:'Für den Fall A (EU-Land 1) → B (EU-Land 2) → C (EU-Land 3) gibt es die Vereinfachungsregelung § 25b UStG: B muss sich nicht im Land von C registrieren, wenn er C darüber informiert und die Steuer auf C überträgt. C schuldet dann die Erwerbsteuer. Das spart B eine aufwändige Auslandsregistrierung.',
      hint:'Prüfungsreihenfolge Reihengeschäft: (1) Wer transportiert? (2) Welche USt-ID verwendet der Mittelsmann? (3) Bewegte oder unbewegte Lieferung? (4) Leistungsort bestimmen.'
    },
  ]
}


,
{
  id:'doener',
  icon:'🥙',
  title:'Was steckt in 8 €?',
  protagonist:'Jede Person die jemals einen Döner gekauft hat',
  level:'Einstieg',
  duration:'5 Min.',
  color:'#c05800',
  learned:['In jedem Preis steckt Mehrwertsteuer – meistens 19 %','Der Staat nimmt an jedem Kauf automatisch teil','Mehrwertsteuer zahlt immer der Endkäufer – unsichtbar im Preis','19 % bedeutet: von 100 € gehen ~16 € ans Finanzamt','Steuern finanzieren Schulen, Straßen, Feuerwehr, Krankenhäuser'],
  scenes:[
    {
      type:'info',
      title:'8,00 € – aber wem gehören sie wirklich?',
      narrative:'Du kaufst einen Döner. 8,00 €. Du gibst dem Imbissbesitzer Ali einen 10-Euro-Schein, er gibt dir 2 Euro zurück.\n\nAber weißt du was? Einer sitzt unsichtbar mit am Tisch.\n\nDer Staat.',
      hint:'Von jedem Einkauf in Deutschland bekommt der Staat automatisch einen Anteil. Das nennt sich Mehrwertsteuer oder Umsatzsteuer.'
    },
    {
      type:'choice',
      question:'Ali verkauft den Döner für 8,00 € brutto. Darin sind 19 % Mehrwertsteuer enthalten. Wie viel davon gehört dem Staat?',
      context:'19 % Mehrwertsteuer ist in fast allen Preisen in Deutschland enthalten – unsichtbar, aber immer da.',
      choices:[
        {text:'0 € – der Preis gehört komplett Ali', correct:false, feedback:'Leider nein. Der Staat nimmt bei jedem Einkauf automatisch mit. Ali muss einen Teil abführen.'},
        {text:'Ca. 1,28 € – das Finanzamt bekommt automatisch seinen Anteil', correct:true, feedback:'Genau! 8,00 € ÷ 1,19 × 0,19 = ca. 1,28 €. Das klingt wenig – aber bei 200 Döner pro Tag sind das 144 € täglich, die Ali ans Finanzamt überweist. Pro Jahr über 50.000 €!'},
        {text:'Ca. 0,86 € – 19 % von 8,00 €', correct:false, feedback:'Fast! Aber 19 % VON 8,00 € wäre der Aufschlag – die Steuer ist bereits IM Preis enthalten (sog. Bruttobetrag). Die richtige Formel: 8,00 × 19/119 = 1,28 €.'},
      ]
    },
    {
      type:'info',
      title:'Warte mal – ich zahle Steuern ohne es zu merken?',
      narrative:'Ja. Genau das.\n\nJedes Mal wenn du etwas kaufst:\n🛍️ T-Shirt für 29,99 € → ~4,79 € Steuer\n📱 App für 0,99 € → ~0,16 € Steuer\n🎟️ Kinokarte 12 € → ~1,92 € Steuer\n\nDu hast noch nie einen Steuerzettel ausgefüllt. Und trotzdem zahlst du täglich Steuern.\n\nDas nennt sich indirekte Steuer – weil sie unsichtbar im Preis steckt.',
      hint:'Indirekte Steuer = im Preis enthalten. Direkte Steuer = du zahlst direkt ans Finanzamt (z.B. Einkommensteuer auf dein Gehalt).'
    },
    {
      type:'choice',
      question:'Für welche Produkte gilt in Deutschland nur 7 % Mehrwertsteuer (ermäßigter Satz)?',
      context:'Nicht alle Produkte haben 19 %. Der Staat hat für bestimmte Dinge einen niedrigeren Satz festgelegt.',
      choices:[
        {text:'Elektronik und Kleidung – weil die wichtig fürs Leben sind', correct:false, feedback:'Nein – Elektronik und Kleidung haben 19 %. Der ermäßigte Satz ist für andere Dinge gedacht.'},
        {text:'Lebensmittel, Bücher und Zeitungen – Grundbedürfnisse sollen günstiger bleiben', correct:true, feedback:'Richtig! Brot, Gemüse, Bücher, Zeitungen: 7 %. Der Gedanke: Grundbedürfnisse sollen für alle bezahlbar bleiben. Deshalb zahlt man auf eine Zeitung weniger Steuer als auf einen Flachbildschirm.'},
        {text:'Alles unter 10 € – kleine Beträge sind steuerfrei', correct:false, feedback:'Das wäre schön, aber es gibt keine Preisgrenze. Selbst für 0,10 € Kaugummi zahlt man 19 % Mehrwertsteuer.'},
      ]
    },
    {
      type:'info',
      title:'Und wohin geht das Geld?',
      narrative:'Stell dir vor: Alle 84 Millionen Menschen in Deutschland kaufen täglich Dinge. Die Mehrwertsteuer läuft zusammen zu über 300 Milliarden Euro pro Jahr.\n\nDavon werden bezahlt:\n🏫 Schulen und Lehrer\n🚒 Feuerwehr und Polizei  \n🏥 Krankenhäuser\n🛣️ Straßen und Brücken\n🚊 Bus und Bahn\n\nJedes Mal wenn du einen Döner kaufst, trägst du dazu bei. 0,72 € von dir. Multipliziert mit Millionen Menschen.\n\nSteuern sind nicht der Staat der dein Geld nimmt. Steuern sind dein Beitrag zu dem was wir alle zusammen nutzen.',
      hint:'Deutschland nimmt ca. 947 Milliarden € Steuern pro Jahr ein. Das sind über 11.000 € pro Person – vom Neugeborenen bis zum Rentner gerechnet.'
    },
  ]
},
{
  id:'lohnschock',
  icon:'😱',
  title:'Der Lohnschock',
  protagonist:'Leon, 16 – sein allererstes Gehalt als Minijobber',
  level:'Einstieg',
  duration:'5 Min.',
  color:'#0d5e2a',
  learned:['Brutto ≠ Netto – vom Bruttogehalt werden Steuern und Sozialabgaben abgezogen','Minijob bis 556 €/Monat (2026): Arbeitnehmer zahlt keine Lohnsteuer','Sozialversicherung = Rente, Krankenversicherung, Pflege, Arbeitslosigkeit','Lohnsteuer ist eine Vorauszahlung auf die Einkommensteuer','Der Staat gibt vieles zurück: Bildung, Gesundheit, Sicherheit'],
  scenes:[
    {
      type:'info',
      title:'600 € – und dann?',
      narrative:'Leon ist 16. Er jobbt seit 3 Wochen samstags in einer Bäckerei. Vereinbart: 12 € pro Stunde, jeden Samstag 8 Stunden. Das macht 96 € pro Woche, ungefähr 384 € im Monat.\n\nErste Gehaltsabrechnung kommt. Leon öffnet den Umschlag.\n\n„Hier stimmt was nicht."',
      hint:'Das Gefühl kennen fast alle beim ersten Gehalt: Warum kommt weniger an als vereinbart?'
    },
    {
      type:'choice',
      question:'Leon hat eine Vereinbarung über ca. 384 € brutto. Auf dem Überweisungszettel steht 384,00 €. Er hat einen Minijob (unter 556 €/Monat). Was passiert mit dem Geld?',
      context:'Ein Minijob ist eine besondere Beschäftigung – die Regeln sind anders als bei Vollzeit.',
      choices:[
        {text:'Er bekommt weniger – der Chef behält einen Teil als Steuer ein', correct:false, feedback:'Beim Minijob bis 556 € trägt der Arbeitgeber die pauschalen Abgaben (ca. 30 % auf den Bruttolohn). Leon selbst zahlt in der Regel keine Steuern vom Netto.'},
        {text:'Er bekommt die vollen 384 € – beim Minijob zahlt der Arbeitnehmer keine Lohnsteuer', correct:true, feedback:'Richtig! Beim Minijob bis 556 € Monatsgrenze zahlt Leon keine Steuern. Sein Chef zahlt pauschal ca. 30 % (Kranken-, Rentenversicherung + Steuerpauschale) direkt ans Finanzamt. Leon merkt nichts davon. Sein Netto = Brutto.'},
        {text:'Er bekommt 307 € – 20 % Steuer werden immer abgezogen', correct:false, feedback:'Das wäre bei einem normalen Arbeitsverhältnis möglich. Aber beim Minijob gelten Sonderregeln.'},
      ]
    },
    {
      type:'info',
      title:'Was wäre wenn Leon 2.000 € verdienen würde?',
      narrative:'Stell dir vor Leon wächst, macht seinen Abschluss und bekommt eine Ausbildungsstelle mit 1.200 € Brutto.\n\nJetzt sieht die Abrechnung anders aus:\n\n💰 Brutto: 1.200 €\n➖ Krankenversicherung: ~84 €\n➖ Rentenversicherung: ~112 €\n➖ Pflegeversicherung: ~20 €\n➖ Arbeitslosenversicherung: ~14 €\n➖ Lohnsteuer: ~0–50 € (je nach Klasse)\n\n✅ Netto: ~920–950 €\n\nFast ein Viertel bleibt weg. Wo geht das hin?',
      hint:'Sozialversicherung ≠ Steuer. Krankenversicherung, Rente und Co. kommen zurück – als Arztbesuch, als Rente, als Arbeitslosengeld wenn du mal keine Stelle findest.'
    },
    {
      type:'choice',
      question:'Rentenversicherung: Leon zahlt jeden Monat seinen Anteil ein. Was bekommt er dafür?',
      context:'Die gesetzliche Rente ist ein Solidarsystem – die Jungen zahlen für die Alten.',
      choices:[
        {text:'Nichts – das Geld ist weg und wird für aktuelle Rentner verwendet', correct:false, feedback:'Nicht ganz. Es stimmt dass das Geld für aktuelle Rentner verwendet wird (Umlageverfahren). Aber Leon sammelt Rentenpunkte – und wenn er in Rente geht, zahlen die dann arbeitenden Menschen für ihn.'},
        {text:'Rentenpunkte – wenn Leon selbst in Rente geht, finanzieren jüngere Arbeitnehmer seine Rente', correct:true, feedback:'Genau! Das Solidarsystem: Die Jungen zahlen für die Alten. Wenn Leon in 50 Jahren Rentner ist, zahlt die dann arbeitende Generation für ihn. Deshalb ist es wichtig dass genug junge Menschen arbeiten und in die Kasse einzahlen.'},
        {text:'Ein eigenes Rentenkonto bei der Bank das Zinsen bringt', correct:false, feedback:'Das wäre die private Rentenversicherung. Die gesetzliche Rente funktioniert anders – kein Sparkonto, sondern direkter Transfer von Jung zu Alt.'},
      ]
    },
    {
      type:'info',
      title:'Der Deal mit dem Staat',
      narrative:'Also hier ist der Deal:\n\nDu zahlst Steuern und Abgaben.\n\nDafür bekommst du:\n🏥 Krankenversicherung (Arztbesuch kostet dich fast nichts)\n👴 Rentenanspruch (wenn du alt bist)\n🎓 Kostenlose Schule und bezuschusstes Studium\n🚑 Notaufnahme ohne Vorkasse\n⚖️ Rechtssystem und Polizei\n\nKein perfektes System. Aber eines der besten der Welt.\n\nDas ist die Kurzzusammenfassung von Steuern und Sozialabgaben. Alles was danach kommt – Paragrafen, Steuererklärungen, Absetzbarkeit – ist nur die Detailarbeit.',
      hint:'Deutschland gibt ca. 35 % des Bruttoinlandsprodukts für Sozialleistungen aus. Das ist einer der höchsten Werte weltweit.'
    },
  ]
},
{
  id:'steuerwofuer',
  icon:'🏗️',
  title:'Wofür zahlen wir eigentlich?',
  protagonist:'Eine Reise durch einen Tag in Deutschland',
  level:'Einstieg',
  duration:'4 Min.',
  color:'#5c2db8',
  learned:['Steuern finanzieren Dinge die wir täglich nutzen ohne es zu merken','Deutschland nimmt ca. 947 Milliarden € Steuern pro Jahr ein','Bildung, Gesundheit, Infrastruktur, Sicherheit – alles steuerfinanziert','Ohne Steuern müsste jeder Schul-, Straßen- und Feuerwehrnutzung separat zahlen','Steuern sind das Solidarsystem: alle zahlen ein, alle profitieren'],
  scenes:[
    {
      type:'info',
      title:'7:00 Uhr – du stehst auf',
      narrative:'Dein Wecker klingelt. 7 Uhr morgens.\n\nDu weißt es nicht, aber in den nächsten 10 Minuten nutzt du schon Dinge die durch Steuern bezahlt wurden:\n\n💧 Wasser aus dem Hahn? Städtische Wasserversorgung.\n🚿 Dusche warm? Energienetz – teils reguliert, teils subventioniert.\n🪟 Straßenlicht draußen noch an? Steuerfinanziert.\n\nUnd du hast noch nicht mal gefrühstückt.',
      hint:'Die meisten Dinge die wir täglich nutzen existieren weil alle gemeinsam einzahlen – durch Steuern.'
    },
    {
      type:'choice',
      question:'Du fährst mit dem Bus zur Schule. Das Ticket kostet 2,50 €. Der tatsächliche Kostenbetrieb des Busses pro Fahrgast liegt aber bei ca. 6–8 €. Wer zahlt die Differenz?',
      context:'Öffentlicher Nahverkehr wäre ohne Subventionen für die meisten Menschen unerschwinglich.',
      choices:[
        {text:'Der Busfahrer zahlt die Differenz aus eigenem Gehalt', correct:false, feedback:'Der Busfahrer bekommt ein normales Gehalt. Die Differenz trägt nicht er.'},
        {text:'Das Busunternehmen macht Verlust und schließt irgendwann', correct:false, feedback:'In der Praxis werden Busse und Bahnen staatlich subventioniert – sonst würde ein Ticket 8 € statt 2,50 € kosten.'},
        {text:'Bund, Länder und Kommunen subventionieren den ÖPNV – mit Steuergeldern', correct:true, feedback:'Genau! Der öffentliche Nahverkehr wird massiv subventioniert. In Deutschland fließen ca. 17 Milliarden € Steuergelder pro Jahr in Bus und Bahn. Ohne Steuern: Ticket 8 €+. Deshalb ist das 9-Euro-Ticket oder das Deutschlandticket (49 €) nur durch Steuermittel möglich.'},
      ]
    },
    {
      type:'info',
      title:'8:00 Uhr – du bist in der Schule',
      narrative:'Dein Unterricht beginnt.\n\nDie Lehrerin vor dir verdient ca. 60.000 € pro Jahr (brutto, mit Erfahrung).\nDas Schulgebäude wurde für Millionen Euro gebaut.\nDie Heizung läuft. Internet ist da. Bücher hat der Staat bestellt.\n\nDu zahlst: 0 €.\n\nIn vielen Ländern der Welt ist das nicht selbstverständlich. In den USA zahlen Eltern für gute Schulen Tausende Dollar pro Jahr – oder die Schule ist schlechter.\n\nIn Deutschland: kostenlos. Finanziert durch Steuern.',
      hint:'Bildungsausgaben in Deutschland: ca. 170 Milliarden € pro Jahr. Das entspricht ca. 2.000 € pro Schüler pro Jahr – bezahlt durch Steuergelder.'
    },
    {
      type:'choice',
      question:'Auf dem Schulweg siehst du einen Unfall. Die Feuerwehr kommt in 4 Minuten. Was hättest du ohne Steuern zahlen müssen?',
      context:'In manchen US-Bundesstaaten ist Feuerwehr privat – und kommt nur wenn du bezahlt hast.',
      choices:[
        {text:'Nichts – Feuerwehr ist immer kostenlos, das ist ein Grundrecht', correct:false, feedback:'In Deutschland ja – aber das ist keine Naturgewalt, sondern das Ergebnis eines politischen Entscheids. Wir haben uns als Gesellschaft darauf geeinigt, Feuerwehr aus Steuern zu finanzieren.'},
        {text:'Möglicherweise hunderte oder tausende Euro – in vielen Ländern gibt es kostenpflichtige Feuerwehr', correct:true, feedback:'Kein Scherz: In manchen US-Bundesstaaten gibt es private Feuerwehren. Wer nicht zahlt, schaut zu wie das Haus brennt. Das klingt absurd – aber es zeigt wie viel der Steuer-Solidarvertrag wert ist.'},
        {text:'50 € Selbstbeteiligung wie bei der Krankenkasse', correct:false, feedback:'Das ist eine interessante Vorstellung, aber so funktioniert es in Deutschland (zum Glück) nicht.'},
      ]
    },
    {
      type:'info',
      title:'Der Solidarvertrag',
      narrative:'Steuern sind kein Raub.\nSteuern sind ein Vertrag.\n\nDer Vertrag lautet:\n„Wir alle zahlen ein bisschen ein – damit wir alle viel bekommen."\n\nDu fragst dich nicht ob der Richter der deinen Fall verhandelt heute gut gelaunt ist.\nDu fragst nicht ob die Feuerwehr heute Dienst hat.\nDu gibst deinen Kindern in die Schule ohne Prüfung ob sie die zahlen können.\n\nAll das ist der unsichtbare Wert von Steuern.\n\nUnd der erste Schritt um das System wirklich zu verstehen – und aktiv mitzugestalten – ist genau das: zu wissen wie es funktioniert.',
      hint:'Jetzt weißt du wofür Steuern da sind. In den nächsten Stories lernst du wie sie berechnet werden – und wie du im System gut navigierst.'
    },
  ]
}


,
{
  id:'influencer',
  icon:'📸',
  title:'Gratis-Produkte, echter Stress',
  protagonist:'Sofia, 19 – wächst als Lifestyle-Influencerin auf TikTok und Instagram',
  level:'Einstieg',
  duration:'6 Min.',
  color:'#8b1a8b',
  learned:['Gratis-Produkte von Unternehmen sind steuerpflichtiges Einkommen (§ 22 Nr. 3 EStG)','Sachzuwendungen werden mit dem Marktwert bewertet','Wer regelmäßig Geld verdient muss ein Gewerbe anmelden','Influencer zahlen Einkommensteuer + ggf. Gewerbesteuer + Umsatzsteuer','Belege aufbewahren: Kamera, Licht, Studio als Betriebsausgaben absetzbar'],
  scenes:[
    {
      type:'info',
      title:'Das Paket',
      narrative:'Sofia öffnet ihr Postfach. Ein riesiges Paket von einer Kosmetikmarke. Serum, Parfüm, Lippenstifte – Gesamtwert laut Preisliste: 340 €.\n\nKommentar darunter von @steuerfee_official: „Nicht vergessen – das ist steuerpflichtiges Einkommen 😬"\n\nSofia lacht. Steuerpflichtiges Einkommen? Das ist doch nur ein Gratis-Paket?',
      hint:'Wer Dinge im Wert von Geld erhält – egal ob als Zahlung oder als Produkt – hat in den Augen des Steuerrechts Einkommen erzielt.'
    },
    {
      type:'choice',
      question:'Sofia bekommt Produkte im Wert von 340 € kostenlos zugeschickt und postet darüber. Ist das steuerpflichtiges Einkommen?',
      context:'Das Steuerrecht unterscheidet nicht zwischen Geld und Sachleistungen.',
      choices:[
        {text:'Nein – sie hat kein Geld bekommen, nur Produkte', correct:false, feedback:'Das Finanzamt sieht das anders. Sachzuwendungen (Produkte, Reisen, Tickets) zählen genauso wie Geld – bewertet mit dem Marktpreis. Sofia hat 340 € Einkommen erzielt, nur eben nicht in Euro sondern in Serum.'},
        {text:'Ja – Sachzuwendungen sind steuerpflichtiges Einkommen (§ 22 Nr. 3 EStG), bewertet mit dem Marktpreis', correct:true, feedback:'Genau! § 22 Nr. 3 EStG: Einkünfte aus sonstigen Leistungen umfassen auch Sachzuwendungen. Das Finanzamt nimmt den Marktwert: 340 €. Wenn Sofia im Jahr mehr als 256 € an Produkten bekommt, muss sie das versteuern. Die Freigrenze ist schnell überschritten.'},
        {text:'Nur wenn sie das Produkt in einem Sponsored Post kenntlich macht', correct:false, feedback:'Die Kennzeichnungspflicht (Werberecht) und die Steuerpflicht sind zwei verschiedene Dinge. Auch nicht gekennzeichnete Werbung bleibt steuerpflichtig – und umgekehrt ist auch gekennzeichnete Werbung selbstverständlich steuerpflichtig.'},
      ]
    },
    {
      type:'info',
      title:'Das Jahr läuft gut',
      narrative:'Sofia wächst. 180.000 Follower. Marken schicken mehr. Manchmal kommt auch Geld:\n\n📦 Produktpakete über das Jahr: ~4.200 € Marktwert\n💸 Paid Posts und Kooperationen: ~6.800 €\n✈️ Einladung zu einem Event in Mailand (Flug + Hotel bezahlt): ~900 €\n\nTotal: ~11.900 €\n\nSofia hat nie ein Formular ausgefüllt. Sie hat keinen Steuerberater. Sie weiß nicht einmal dass sie eins braucht.',
      hint:'Viele Influencer wissen nicht: Wer mehr als 12.336 € pro Jahr (2026) verdient – inklusive Sachleistungen – muss Einkommensteuer zahlen und eine Steuererklärung abgeben.'
    },
    {
      type:'choice',
      question:'Sofia verdient 11.900 € (Geld + Sachleistungen). Sie hat kein Gewerbe angemeldet. Was riskiert sie?',
      context:'Ab einem bestimmten Umfang wird Influencing als Gewerbetätigkeit eingestuft.',
      choices:[
        {text:'Gar nichts – unter 22.000 € gilt die Kleinunternehmerregelung', correct:false, feedback:'Die Kleinunternehmerregelung bezieht sich auf die Umsatzsteuer – nicht auf die Einkommensteuer. Sofia muss trotzdem Einkommensteuer zahlen, wenn ihr Einkommen über dem Grundfreibetrag liegt. Und das Gewerbe müsste angemeldet sein.'},
        {text:'Steuernachzahlung + Verspätungszuschläge + mögliche Ordnungsstrafe wegen nicht angemeldetem Gewerbe', correct:true, feedback:'Richtig. Drei Probleme gleichzeitig: (1) Einkommensteuer war fällig aber nicht gezahlt → Nachzahlung + 5 % Verspätungszinsen. (2) Gewerbe nicht angemeldet → Bußgeld bis 1.000 €. (3) Keine Umsatzsteuer abgeführt wenn Umsatz > 25.000 €. Das Finanzamt entdeckt das oft über Instagram-Werbeanzeigen oder Banktransaktionen.'},
        {text:'Sie muss nur die Produktpakete zurückschicken', correct:false, feedback:'Leider so einfach ist es nicht. Einmal erhaltene Leistungen können steuerlich nicht einfach „zurückgegeben" werden.'},
      ]
    },
    {
      type:'info',
      title:'Was Sofia jetzt tut',
      narrative:'Sofia googelt. Findet einen Steuerberater der auf Creator spezialisiert ist. Ein Gespräch später ist vieles klarer:\n\n✅ Gewerbeanmeldung beim Ordnungsamt (kostet ca. 20 €, dauert 15 Minuten)\n✅ Steuernummer beim Finanzamt beantragen\n✅ Belege sammeln: Kamera (1.200 €), Ringlicht (89 €), Schreibtisch (350 €), Adobe-Abo (240 €/Jahr) → alles Betriebsausgaben\n\nDas Wichtigste was sie lernt:\n„Ich muss nicht alles selber wissen. Ich muss nur wissen, dass ich es herausfinden muss."',
      hint:'Betriebsausgaben senken den Gewinn – und damit die Steuer. Kamera, Equipment, Software, Handy (anteilig): alles kann abgesetzt werden. Gute Buchführung zahlt sich aus.'
    },
    {
      type:'choice',
      question:'Sofia kauft für 1.200 € eine neue Kamera – ausschließlich für ihre Creator-Arbeit. Wie wirkt sich das steuerlich aus?',
      context:'Betriebsausgaben reduzieren den zu versteuernden Gewinn.',
      choices:[
        {text:'Gar nicht – private Käufe sind nicht absetzbar', correct:false, feedback:'Die Kamera ist nicht privat – sie ist ausschließlich für das Gewerbe. Betriebslich genutzte Gegenstände können abgesetzt werden.'},
        {text:'Die 1.200 € mindern den Gewinn → Sofia zahlt Steuern nur auf 10.700 € statt 11.900 €', correct:true, feedback:'Genau! Betriebsausgaben (§ 4 Abs. 4 EStG) mindern den Gewinn. 11.900 € Einnahmen – 1.200 € Kamera = 10.700 € Gewinn. Dazu kommen weitere absetzbare Kosten: Software, Licht, Daten-Abo, anteiliger Handyvertrag. Der tatsächlich zu versteuernde Betrag kann deutlich sinken.'},
        {text:'Sie bekommt 1.200 € vom Finanzamt zurück', correct:false, feedback:'Das wäre schön – aber das Finanzamt erstattet keine Ausgaben direkt. Betriebsausgaben mindern den Gewinn, und damit die Steuer. Bei 25 % Steuersatz spart sie ca. 300 € Steuern – nicht 1.200 €.'},
      ]
    },
  ]
}

];

// Story runtime state
let storyOpen = null;   // story id
let storyScene = 0;     // current scene index
let storyChosen = null; // chosen option index for choice scene, or null

function openStoryDirect(id){
  storyOpen=id;
  _doSw('story');
}
function startStory(id, resume){
  storyOpen = id;
  if(resume && storyProgress[id] && !storyProgress[id].done){
    storyScene = storyProgress[id].scene || 0;
  } else {
    storyScene = 0;
  }
  storyChosen = null;
  render();
}

function storyNext(){
  const story = D_STORY.find(s=>s.id===storyOpen);
  if(!story) return;
  storyScene++;
  storyChosen = null;
  if(storyScene >= story.scenes.length){
    // Mark done
    storyProgress[storyOpen] = { done: true, ts: Date.now() };
    saveStoryProgress();
    render(); // shows result
    return;
  }
  storyProgress[storyOpen] = { done: false, scene: storyScene };
  saveStoryProgress();
  render();
}

function storyChoose(idx){
  if(storyChosen !== null) return; // already answered
  storyChosen = idx;
  render();
}

function renderStory(a){
  if(!storyOpen){ renderStoryOverview(a); return; }
  const story = D_STORY.find(s=>s.id===storyOpen);
  if(!story){ storyOpen=null; renderStoryOverview(a); return; }
  if(storyScene >= story.scenes.length){ renderStoryEnd(a, story); return; }
  renderStoryScene(a, story);
}

function renderStoryOverview(a){
  const cards = D_STORY.map(s=>{
    const prog = storyProgress[s.id];
    const done = prog && prog.done;
    const inProg = prog && !prog.done && (prog.scene||0) > 0;
    const sceneDone = prog ? (prog.scene||0) : 0;
    const total = s.scenes.length;
    const pct = done ? 100 : Math.round(sceneDone/total*100);
    const statusIcon = done ? '✅' : inProg ? '⏸️' : '▶️';
    const btnStyle = 'flex:1;padding:8px 12px;border-radius:10px;border:none;color:#fff;font-family:Nunito,sans-serif;font-weight:800;font-size:12px;cursor:pointer;background:'+s.color;
    const btn2Style = 'flex:1;padding:8px 12px;border-radius:10px;border:2px solid #dde5f5;background:#f0f4ff;color:var(--navy);font-family:Nunito,sans-serif;font-weight:800;font-size:12px;cursor:pointer';
    let btns = '';
    if(inProg){
      btns = '<button style="'+btnStyle+'" onclick="startStory(\''+s.id+'\',true)">▶ Weiterlesen</button>'
           + '<button style="'+btn2Style+'" onclick="startStory(\''+s.id+'\',false)">↺ Neu</button>';
    } else if(done){
      btns = '<button style="'+btn2Style+'" onclick="startStory(\''+s.id+'\',false)">↺ Nochmal lesen</button>';
    } else {
      btns = '<button style="'+btnStyle+'" onclick="startStory(\''+s.id+'\',false)">▶ Story starten</button>';
    }
    return '<div style="background:#fff;border-radius:18px;border:2px solid '+(done?'rgba(0,201,123,.4)':inProg?'rgba(26,58,143,.25)':'#dde5f5')+';padding:18px;margin-bottom:12px;overflow:hidden;position:relative">'
      +'<div style="position:absolute;top:0;left:0;right:0;height:4px;background:#f0f4ff;border-radius:2px 2px 0 0"><div style="height:100%;width:'+pct+'%;background:'+s.color+';border-radius:inherit;transition:width .6s"></div></div>'
      +'<div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:12px;margin-top:4px">'
        +'<div style="font-size:32px;line-height:1">'+s.icon+'</div>'
        +'<div style="flex:1">'
          +'<div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">'
            +'<span style="font-size:9px;font-family:Space Mono,monospace;background:'+s.color+'22;color:'+s.color+';padding:2px 7px;border-radius:100px;font-weight:700;text-transform:uppercase">'+s.level+'</span>'
            +'<span style="font-size:9px;color:#aaa;font-family:Space Mono,monospace">⏱ '+s.duration+'</span>'
            +'<span style="margin-left:auto;font-size:14px">'+statusIcon+'</span>'
          +'</div>'
          +'<div style="font-size:15px;font-weight:900;color:var(--navy);margin-bottom:2px">'+s.title+'</div>'
          +'<div style="font-size:11px;color:#888;font-weight:700">'+s.protagonist+'</div>'
        +'</div>'
      +'</div>'
      +'<div style="font-size:10px;color:#aaa;font-family:Space Mono,monospace;margin-bottom:10px">'+(done?'Abgeschlossen':inProg?'Szene '+(sceneDone+1)+' / '+total:total+' Szenen · '+s.learned.length+' Lernziele')+'</div>'
      +'<div style="display:flex;gap:8px">'+btns+'</div>'
      +'</div>';
  }).join('');

  a.innerHTML = `
    <div style="background:linear-gradient(135deg,#0a1a3a,#1a3a8f,#0a2a60);border-radius:18px;padding:22px 20px 18px;margin-bottom:18px;position:relative;overflow:hidden">
      <div style="position:absolute;right:-10px;bottom:-10px;font-size:80px;opacity:.07">📖</div>
      <div style="font-size:9px;font-family:'Space Mono',monospace;color:var(--cyan);font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">Steuer-Stories</div>
      <div style="font-size:20px;font-weight:900;color:#fff;margin-bottom:6px">Steuern im echten Leben</div>
      <div style="font-size:12px;color:rgba(255,255,255,.45);font-weight:700">Lerne anhand echter Alltagssituationen – mit echten Zahlen und geltenden Gesetzen.</div>
    </div>
    ${cards}
    <button onclick="sw('basics')" style="width:100%;padding:11px;border-radius:13px;border:2px solid #dde5f5;background:#f0f4ff;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;cursor:pointer;margin-bottom:90px">← Zurück zu Basics</button>`;
}

function renderStoryScene(a, story){
  const scene = story.scenes[storyScene];
  const total = story.scenes.length;
  const pct = Math.round(storyScene/total*100);

  // Dots
  const dots = story.scenes.map((_,i)=>{
    const cls = i < storyScene ? 'done' : i===storyScene ? 'active' : '';
    return '<div style="width:'+(cls==='active'?'18px':'8px')+';height:8px;border-radius:100px;background:'+(cls==='done'?story.color:cls==='active'?story.color:'#dde5f5')+';opacity:'+(cls===''?'.5':'1')+';transition:all .3s"></div>';
  }).join('');

  let choiceHtml = '';
  let nextHtml = '';

  if(scene.type==='choice'){
    if(storyChosen === null){
      // Show options
      choiceHtml = '<div style="margin-top:4px;background:#f4f7ff;border-radius:14px;padding:14px 15px;margin-bottom:14px">'
        +'<div style="font-size:13px;font-weight:900;color:var(--navy);margin-bottom:12px">💬 '+scene.question+'</div>'
        + scene.opts.map((o,i)=>
            '<button onclick="storyChoose('+i+')" style="display:block;width:100%;text-align:left;padding:13px 15px;border-radius:12px;border:2px solid #dde5f5;background:#fff;margin-bottom:8px;font-family:Nunito,sans-serif;font-weight:800;font-size:13px;cursor:pointer;color:var(--navy);transition:all .18s" onmouseover="this.style.borderColor=\''+story.color+'\'" onmouseout="this.style.borderColor=\'#dde5f5\'">'+o.text+'</button>'
          ).join('')
        +'</div>';
    } else {
      // Show outcome
      const chosen = scene.opts[storyChosen];
      const bgCol = chosen.correct ? 'rgba(0,201,123,.07)' : 'rgba(255,77,109,.07)';
      const borderCol = chosen.correct ? 'rgba(0,201,123,.4)' : 'rgba(255,77,109,.3)';
      const resultIcon = chosen.correct ? '✅' : '❌';
      choiceHtml = '<div style="background:'+bgCol+';border:2px solid '+borderCol+';border-radius:14px;padding:15px;margin-bottom:14px">'
        +'<div style="font-size:14px;font-weight:900;color:var(--navy);margin-bottom:8px">'+resultIcon+' '+chosen.outcome+'</div>'
        +'<div style="font-size:12px;font-weight:700;color:#555;line-height:1.65">'+chosen.explain+'</div>'
        +'</div>';
      nextHtml = '<button onclick="storyNext()" style="width:100%;padding:13px;border-radius:13px;border:none;background:'+story.color+';color:#fff;font-family:Nunito,sans-serif;font-weight:900;font-size:14px;cursor:pointer;margin-bottom:8px">'+(storyScene+1<total?'Weiter ➜':'Abschluss 🎓')+'</button>';
    }
  } else {
    nextHtml = '<button onclick="storyNext()" style="width:100%;padding:13px;border-radius:13px;border:none;background:'+story.color+';color:#fff;font-family:Nunito,sans-serif;font-weight:900;font-size:14px;cursor:pointer;margin-bottom:8px">'+(storyScene+1<total?'Weiter ➜':'Abschluss 🎓')+'</button>';
  }

  a.innerHTML = `
    <div style="background:linear-gradient(135deg,${story.color}dd,${story.color}aa);border-radius:18px;padding:16px 18px;margin-bottom:16px">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
        <span style="font-size:22px">${story.icon}</span>
        <div>
          <div style="font-size:11px;color:rgba(255,255,255,.55);font-weight:700">${story.title}</div>
          <div class="u-heading-sm">${scene.title}</div>
        </div>
        <div style="margin-left:auto;font-size:11px;color:rgba(255,255,255,.5);font-family:'Space Mono',monospace">${storyScene+1}/${total}</div>
      </div>
      <div style="display:flex;gap:4px;align-items:center">${dots}</div>
    </div>

    <div style="background:#f8faff;border-radius:14px;padding:15px 16px;margin-bottom:14px;border-left:4px solid ${story.color}">
      <div style="font-size:13px;font-weight:700;color:#444;line-height:1.7;font-style:italic">${scene.narrative}</div>
    </div>

    ${choiceHtml}

    ${scene.fact && (storyChosen!==null || scene.type==='info') ? `<div style="background:#fff;border-radius:14px;border:2px solid #dde5f5;padding:14px 16px;margin-bottom:14px">
      <div style="font-size:9px;font-family:'Space Mono',monospace;color:${story.color};font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:7px">📋 ${scene.fact.title}</div>
      <div style="font-size:12px;font-weight:700;color:#444;line-height:1.7">${scene.fact.content}</div>
      <div style="margin-top:8px;font-size:10px;font-family:'Space Mono',monospace;color:#aaa;font-weight:700">${scene.fact.norm}</div>
    </div>` : ''}

    ${nextHtml}
    <button onclick="storyOpen=null;sw('basics')" style="width:100%;padding:10px;border-radius:11px;border:2px solid #dde5f5;background:#f0f4ff;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;cursor:pointer;margin-bottom:90px">← Zurück zu Basics</button>`;
}

function renderStoryEnd(a, story){
  const learnedHtml = story.learned.map(l=>
    '<div style="display:flex;align-items:flex-start;gap:8px;padding:8px 0;border-bottom:1px solid #f0f4ff">'
    +'<span style="color:'+story.color+';font-size:14px;flex-shrink:0">✓</span>'
    +'<span style="font-size:12px;font-weight:700;color:var(--navy)">'+l+'</span>'
    +'</div>'
  ).join('');

  a.innerHTML = `
    <div style="background:linear-gradient(135deg,${story.color}cc,${story.color}88);border-radius:18px;padding:28px 22px;margin-bottom:18px;text-align:center">
      <div style="font-size:52px;margin-bottom:8px">${story.icon}</div>
      <div style="font-size:9px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.55);font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:4px">Story abgeschlossen</div>
      <div style="font-size:20px;font-weight:900;color:#fff;margin-bottom:4px">${story.title}</div>
      <div style="font-size:12px;color:rgba(255,255,255,.55);font-weight:700">${story.protagonist}</div>
    </div>
    <div style="background:#fff;border-radius:16px;border:2px solid #dde5f5;padding:16px;margin-bottom:14px">
      <div style="font-size:11px;font-weight:900;color:#888;font-family:'Space Mono',monospace;letter-spacing:.5px;text-transform:uppercase;margin-bottom:10px">📚 Das hast du gelernt</div>
      ${learnedHtml}
    </div>
    <div style="background:linear-gradient(135deg,#003d1a,#00703a);border-radius:14px;padding:14px 16px;margin-bottom:10px">
      <div style="font-size:11px;font-weight:900;color:rgba(255,255,255,.8);margin-bottom:8px">🎯 Jetzt dein Wissen testen!</div>
      <div style="font-size:11px;color:rgba(255,255,255,.6);font-weight:700;margin-bottom:10px;line-height:1.6">Du hast die Story gelesen – prüfe sofort, ob du die Konzepte verstanden hast.</div>
      <button onclick="storyTestStart(storyOpen)" style="width:100%;padding:11px;border-radius:10px;border:none;background:rgba(255,255,255,.15);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer;border:1px solid rgba(255,255,255,.25)">⚡ Schnell-Quiz starten (5 Fragen)</button>
    </div>
    <button onclick="storyOpen=null;sw('basics')" style="width:100%;padding:12px;border-radius:13px;border:none;background:${einstLaunched?'linear-gradient(135deg,#005c36,#00c97b)':'linear-gradient(135deg,#1a3a8f,#0d2b5e)'};color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer;margin-bottom:8px">${einstLaunched?'← Zurück zum Lernpfad':'← Zurück zu Basics'}</button>
    ${einstLaunched?'':'<button onclick="sw(\'est\')" style="width:100%;padding:10px;border-radius:11px;border:2px solid #dde5f5;background:#f0f4ff;color:var(--navy);font-family:\'Nunito\',sans-serif;font-weight:800;font-size:12px;cursor:pointer;margin-bottom:90px">💼 Zum ESt-Quiz →</button>'}
    <div style="height:90px"></div>`;
}



// Story quick-test
function storyTestClose(){ var w=document.getElementById('sqw'); if(w) w.remove(); }
function storyQuizAns(chosen, correct){
  window._sqSc += (chosen===correct) ? 1 : 0;
  window._sqIdx++;
  storyTestRender();
}
function storyTestRender(){
  var wrap = document.getElementById('sqw');
  if(!wrap) return;
  var picked = window._sqPicked, qi = window._sqIdx, sc = window._sqSc;
  if(qi >= picked.length){
    wrap.innerHTML = '<div style="padding:40px 20px;text-align:center;color:#fff">'
      +'<div style="font-size:42px;margin-bottom:12px">\uD83C\uDFC6</div>'
      +'<div style="font-size:20px;font-weight:900;margin-bottom:6px">Schnell-Quiz fertig!</div>'
      +'<div style="font-size:14px;color:rgba(255,255,255,.6);margin-bottom:24px">'+sc+' / '+picked.length+' richtig</div>'
      +'<button onclick="storyTestClose()" style="padding:13px 28px;border-radius:13px;border:none;background:linear-gradient(135deg,#1a3a8f,#0d2b5e);color:#fff;font-family:Nunito,sans-serif;font-weight:900;font-size:14px;cursor:pointer">Fertig &#10003;</button>'
      +'</div>';
    return;
  }
  var q = picked[qi];
  var pct = Math.round(qi/picked.length*100);
  var opts = q.opts.map(function(o,i){
    return '<button onclick="storyQuizAns('+i+','+q.correct+')" style="display:block;width:100%;text-align:left;padding:11px 14px;margin-bottom:7px;border-radius:11px;border:2px solid rgba(255,255,255,.15);background:rgba(255,255,255,.06);color:#fff;font-family:Nunito,sans-serif;font-weight:700;font-size:12px;cursor:pointer">'+o+'</button>';
  }).join('');
  wrap.innerHTML = '<div style="max-width:480px;margin:0 auto">'
    +'<div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">'
      +'<span style="font-size:10px;font-family:Space Mono,monospace;color:rgba(255,255,255,.4)">'+(qi+1)+'/'+picked.length+'</span>'
      +'<div style="flex:1;height:5px;background:rgba(255,255,255,.1);border-radius:100px"><div style="height:100%;width:'+pct+'%;background:var(--cyan);border-radius:100px;transition:width .3s"></div></div>'
      +'<button onclick="storyTestClose()" style="background:none;border:none;color:rgba(255,255,255,.4);font-size:20px;cursor:pointer">&#10005;</button>'
    +'</div>'
    +'<div style="background:rgba(255,255,255,.07);border-radius:14px;padding:14px;margin-bottom:12px;font-size:13px;font-weight:700;color:#fff;line-height:1.6">'+q.q+'</div>'
    +opts
    +'</div>';
}
function storyTestStart(storyId){
  // Always use full data array – sh_ein is the depleted play queue
  const pool = D_EINKUNFT && D_EINKUNFT.length > 4 ? D_EINKUNFT : [];
  window._sqPicked = [...pool].sort(()=>Math.random()-.5).slice(0,5);
  window._sqIdx = 0;
  window._sqSc  = 0;
  var old = document.getElementById('sqw');
  if(old) old.remove();
  var wrap = document.createElement('div');
  wrap.id = 'sqw';
  wrap.style.cssText = 'position:fixed;inset:0;background:rgba(13,27,62,.97);z-index:3000;overflow-y:auto;padding:20px 16px 100px';
  document.body.appendChild(wrap);
  storyTestRender();
}

// ==================== LEVEL SYSTEM ====================
const LEVEL_KEY = 'userLevel_v1';
let userLevel = localStorage.getItem(LEVEL_KEY) || null;

function saveLevel(l){ userLevel=l; localStorage.setItem(LEVEL_KEY,l); }

function lgSelect(l){
  document.getElementById('lg-card-einsteiger').classList.toggle('sel', l==='einsteiger');
  document.getElementById('lg-card-profi').classList.toggle('sel', l==='profi');
  const btn = document.getElementById('lg-start-btn');
  btn.disabled = false;
  btn.dataset.level = l;
  btn.classList.toggle('sel-einsteiger', l==='einsteiger');
  btn.classList.toggle('sel-profi', l==='profi');
}

function updateLevelChip(){
  const banner = document.getElementById('level-banner');
  const txt    = document.getElementById('level-banner-text');
  if(!banner || !txt) return;
  if(!userLevel){ banner.style.display='none'; return; }
  banner.style.display='flex';
  if(userLevel === 'einsteiger'){
    banner.style.background = 'linear-gradient(135deg,rgba(0,100,50,.55),rgba(0,150,80,.35))';
    banner.style.border = '1.5px solid rgba(0,201,123,.4)';
    txt.innerHTML = `🟢 &nbsp;<b>Einsteiger</b> <span style="font-weight:600;opacity:.7;font-size:11px">– Schritt für Schritt</span>`;
  } else {
    banner.style.background = 'linear-gradient(135deg,rgba(10,40,120,.65),rgba(26,70,180,.4))';
    banner.style.border = '1.5px solid rgba(100,160,255,.4)';
    txt.innerHTML = `🔵 &nbsp;<b>Fortgeschritten</b> <span style="font-weight:600;opacity:.7;font-size:11px">– Voller Zugriff</span>`;
  }
  updateResumeBanner();
}

// ==================== RESUME BANNER ====================
const LAST_TAB_KEY = 'lastTab_v1';
const TAB_ICONS = { basics:'📚', est:'💼', ust:'🛒', ao:'⚖️', bilanz:'📋', recht:'🏛️', karriere:'🎓', kurios:'🤯', speed:'⚡', pruefung:'🎓', praxis:'📁', flashcard:'🃏', glossar:'📖', fehler:'🔁' };
const TAB_NAMES = { basics:'Basics', est:'Einkommensteuer', ust:'Umsatzsteuer', ao:'Abgabenordnung', bilanz:'Bilanz', recht:'Recht', karriere:'Karriere', kurios:'Kurioses', speed:'Speed-Quiz', pruefung:'Prüfungsmodus', praxis:'Praxisfälle', flashcard:'Lernkarten', glossar:'Glossar', fehler:'Fehler üben', gewst:'Gewerbesteuer', gesellschaft:'Gesellschaftsbesteuerung' };

function saveLastTab(m){ if(m && m!=='einfuehrung') localStorage.setItem(LAST_TAB_KEY, m); }

function markTabVisited(m){
  const visited = JSON.parse(localStorage.getItem('tabs_visited_v1')||'[]');
  if(!visited.includes(m)){ visited.push(m); localStorage.setItem('tabs_visited_v1', JSON.stringify(visited)); }
  const el = document.getElementById('tab-'+m);
  if(el) el.classList.add('visited');
}

function restoreTabVisited(){
  const visited = JSON.parse(localStorage.getItem('tabs_visited_v1')||'[]');
  visited.forEach(m=>{ const el=document.getElementById('tab-'+m); if(el) el.classList.add('visited'); });
}

function updateResumeBanner(){
  // Resume-Banner deaktiviert
  const banner = document.getElementById('resume-banner');
  if(banner) banner.style.display = 'none';
}

function resumeLastTab(){
  const last = localStorage.getItem(LAST_TAB_KEY);
  if(last) sw(last);
}



function lgConfirm(){
  const btn = document.getElementById('lg-start-btn');
  const l = btn.dataset.level;
  if(!l) return;
  saveLevel(l);
  hideLevelGate();
  updateLevelChip();
  updateResumeBanner();
  applyLevelUI();
  // First ever visit: show tour welcome after short delay
  if(!localStorage.getItem(TOUR_KEY)){
    setTimeout(showTourWelcome, 1000);
  }
  // Force re-render even if already on basics
  mode='basics';
  const ga=document.getElementById('ga');
  if(ga) ga.classList.remove('etag-mode');
  setTopicHeader('basics');
  render();
  window.scrollTo({top:0,behavior:'smooth'});
}

function showLevelGate(fromChip){
  const gate = document.getElementById('level-gate');
  gate.style.display = 'flex';
  if(fromChip){
    if(userLevel) lgSelect(userLevel);
    // Add close button
    const box = gate.querySelector('.lg-box');
    if(!document.getElementById('lg-close-btn')){
      const cb = document.createElement('button');
      cb.id = 'lg-close-btn';
      cb.textContent = '✕';
      cb.style.cssText = 'position:absolute;top:14px;right:16px;background:rgba(255,255,255,.18);border:none;color:#fff;width:30px;height:30px;border-radius:50%;font-size:14px;cursor:pointer;font-weight:900;z-index:1';
      cb.onclick = hideLevelGate;
      const hero = box.querySelector('.lg-hero');
      hero.style.position = 'relative';
      hero.appendChild(cb);
    }
  }
}

function hideLevelGate(){
  document.getElementById('level-gate').style.display = 'none';
}

function applyLevelUI(){
  const isEinst = userLevel === 'einsteiger';

  // Drawer: profi section
  const profiSection = document.getElementById('drawer-profi-section');
  if(profiSection) profiSection.style.display = isEinst ? 'none' : '';

  // Drawer: einsteiger basics section
  ['drawer-einst-label','drawer-einst-grid'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.style.display = isEinst ? '' : 'none';
  });

  // Tabs hidden for Einsteiger: full AO, Bilanz, Recht, Speed, Karten, Glossar
  const profiOnly = ['tab-ao','tab-bilanz','tab-recht','tab-gewst','tab-gesellschaft','tab-speed','tab-flashcard','tab-glossar'];
  profiOnly.forEach(id=>{
    const t = document.getElementById(id);
    if(t) t.style.display = isEinst ? 'none' : '';
  });

  // Hide/show Vertiefung group label + separator for Einsteiger
  ['tab-sep-vertiefung','tgl-vertiefung'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.style.display = isEinst ? 'none' : '';
  });

  // Tabs only for Einsteiger: AO Basics, Recht Basics, USt Basics, Bilanz Basics, ESt Basics
  ['tab-ao_basics','tab-recht_basics','tab-ust_basics','tab-bilanz_basics','tab-est_basics'].forEach(id=>{
    const t = document.getElementById(id);
    if(t) t.style.display = isEinst ? '' : 'none';
  });

  // E-Tag: always visible, dim for Einsteiger
  const etagTab = document.getElementById('tab-einfuehrung');
  if(etagTab) etagTab.style.opacity = isEinst ? '0.65' : '1';
}



// ==================== EINSTEIGER BASICS ====================

// § 1 EStG interactive check – state
let para1Answers = {}; // {0: 'ja'|'nein', ...}

const PARA1_CASES = [
  {
    avatar:'🧑‍🎓',
    name:'Tim, 17',
    desc:'Wohnt in Berlin, macht Ausbildung zum Einzelhandelskaufmann. Hat dieses Jahr 7.800 € verdient.',
    question:'Ist Tim in Deutschland einkommensteuerpflichtig?',
    answer:'ja',
    correct_explain:'✅ Ja – <b>§ 1 Abs. 1 EStG:</b> Wer einen <b>Wohnsitz</b> oder seinen gewöhnlichen Aufenthalt im Inland hat, ist <b>unbeschränkt steuerpflichtig</b>. Das gilt für alle – unabhängig von Alter oder Nationalität.<br>Tim zahlt trotzdem keine Steuer: Sein Einkommen (7.800 €) liegt unter dem <b>Grundfreibetrag von 12.336 € (2026)</b>. Keine Steuer, aber trotzdem steuerpflichtig.',
    wrong_explain:'❌ Nicht ganz: Tim ist sehr wohl steuerpflichtig – er hat Wohnsitz in Deutschland (§ 1 Abs. 1 EStG). Steuerpflichtig ≠ Steuer zahlen. Tim zahlt keine Steuer (er liegt unter dem Grundfreibetrag 12.336 €), ist aber im Steuersystem erfasst.',
  },
  {
    avatar:'👵',
    name:'Maria, 71',
    desc:'Hat 40 Jahre lang in München gearbeitet. Zieht jetzt nach Mallorca. Bekommt 1.200 € Rente aus Deutschland.',
    question:'Ist Maria in Deutschland noch steuerpflichtig?',
    answer:'ja',
    correct_explain:'✅ Ja – auch nach dem Wegzug! <b>§ 1 Abs. 4 EStG (beschränkte Steuerpflicht):</b> Wer keinen Wohnsitz mehr in Deutschland hat, aber <b>inländische Einkünfte</b> bezieht, ist beschränkt steuerpflichtig. Die Deutsche Rentenversicherung zahlt Marias Rente – das ist eine inländische Einkunft (§ 49 Abs. 1 Nr. 7 EStG). Nur die deutschen Einkünfte werden besteuert, nicht das gesamte Welteinkommen.',
    wrong_explain:'❌ Nein, Maria bleibt steuerpflichtig. Zwar hat sie keinen Wohnsitz mehr in DE (§ 1 Abs. 1 EStG greift nicht mehr), aber sie bezieht eine <b>deutsche Rente = inländische Einkünfte</b>. Das löst die <b>beschränkte Steuerpflicht (§ 1 Abs. 4 EStG)</b> aus. Nur ihre deutschen Einkünfte werden besteuert.',
  },
  {
    avatar:'🚘',
    name:'Klaus, 44',
    desc:'Lebt in Salzburg (Österreich). Arbeitet täglich in München. Sein Arbeitgeber sitzt in Deutschland.',
    question:'Kann Klaus in Deutschland als unbeschränkt steuerpflichtig behandelt werden?',
    answer:'ja',
    correct_explain:'✅ Ja – auf Antrag! <b>§ 1 Abs. 3 EStG:</b> Personen ohne deutschen Wohnsitz können auf Antrag als unbeschränkt steuerpflichtig behandelt werden, wenn mindestens <b>90 % ihrer Einkünfte aus Deutschland</b> stammen (oder die ausländischen Einkünfte unter dem Grundfreibetrag liegen). Vorteil: Klaus kann dann alle Abzüge nutzen (Werbungskosten, Sonderausgaben), die nur unbeschränkt Steuerpflichtigen offenstehen.',
    wrong_explain:'❌ Doch – Klaus kann das beantragen. <b>§ 1 Abs. 3 EStG</b> erlaubt es Grenzpendlern, auf Antrag als unbeschränkt steuerpflichtig behandelt zu werden. Voraussetzung: ≥ 90 % der Einkünfte kommen aus Deutschland. Der Vorteil: Zugang zu Werbungskosten, Sonderausgaben und Splitting-Tarif.',
  },
  {
    avatar:'👧',
    name:'Emma, 9',
    desc:'Hat von ihrer Oma Aktien geschenkt bekommen. Die Aktien zahlen jährlich 800 € Dividende.',
    question:'Ist Emma einkommensteuerpflichtig?',
    answer:'ja',
    correct_explain:'✅ Ja – <b>§ 1 EStG kennt keine Altersgrenze.</b> Jede natürliche Person mit Wohnsitz in Deutschland ist unbeschränkt steuerpflichtig – auch Kinder. Emmas Dividenden sind Einkünfte aus Kapitalvermögen (§ 20 EStG). Da 800 € unter dem <b>Sparer-Pauschbetrag (1.000 €/Jahr)</b> liegt, fällt keine Steuer an. Aber: Emma muss eine Steuererklärung abgeben oder eine Freistellungserklärung bei der Bank vorlegen.',
    wrong_explain:'❌ Doch – § 1 EStG gilt für alle natürlichen Personen mit Wohnsitz in Deutschland, <b>ohne Altersgrenze</b>. Emma ist steuerpflichtig. Da die Dividenden (800 €) aber unter dem Sparer-Pauschbetrag (1.000 €/Jahr, § 20 Abs. 9 EStG) liegen, zahlt sie keine Steuer. Trotzdem: Steuerpflichtig ist sie.',
  }
];

// ── para1 state: 0=rating, 1=revealed ──
let para1Phase = 0; // 0 = still rating, 1 = all revealed

function para1Answer(caseIdx, ans){
  if(para1Answers[caseIdx] !== undefined) return;
  para1Answers[caseIdx] = ans;
  // Re-render in place
  const el = document.getElementById('para1-block');
  if(el) el.innerHTML = renderPara1Block();
}

function para1Reveal(){
  para1Phase = 1;
  setEinstStep('para1');
  const el = document.getElementById('para1-block');
  if(el) el.innerHTML = renderPara1Block();
  setTimeout(()=>{ if(el) el.scrollIntoView({behavior:'smooth', block:'start'}); }, 60);
}

function para1Reset(){
  para1Answers = {};
  para1Phase = 0;
  const el = document.getElementById('para1-block');
  if(el) el.innerHTML = renderPara1Block();
  setTimeout(()=>{ if(el) el.scrollIntoView({behavior:'smooth', block:'start'}); }, 60);
}

function renderPara1Block(){
  const answered = Object.keys(para1Answers).length;
  const total    = PARA1_CASES.length;
  const allRated = answered >= total;

  // ── Phase 1: Revealed ──────────────────────────────────────────
  if(para1Phase === 1){
    const correct = PARA1_CASES.filter((_,i)=>para1Answers[i]===PARA1_CASES[i].answer).length;
    const scoreColor = correct === total ? '#00c97b' : correct >= total/2 ? 'var(--cyan)' : '#ff8c42';

    const casesHtml = PARA1_CASES.map((pc,i)=>{
      const given   = para1Answers[i];
      const isRight = given === pc.answer;
      const bg      = isRight ? 'rgba(0,201,123,.1)' : 'rgba(255,77,109,.08)';
      const border  = isRight ? 'rgba(0,201,123,.35)' : 'rgba(255,77,109,.3)';
      return `<div style="background:${bg};border:1.5px solid ${border};border-radius:14px;padding:14px;margin-bottom:8px">
        <div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px">
          <div style="font-size:26px;flex-shrink:0">${pc.avatar}</div>
          <div style="flex:1">
            <div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:2px">${pc.name}</div>
            <div style="font-size:11px;color:rgba(255,255,255,.55);font-weight:700">${pc.desc}</div>
          </div>
          <div style="flex-shrink:0;font-size:18px">${isRight ? '✅' : '❌'}</div>
        </div>
        <div style="font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.65;background:rgba(255,255,255,.05);border-radius:10px;padding:10px">
          ${isRight ? pc.correct_explain : pc.wrong_explain}
        </div>
      </div>`;
    }).join('');

    return `<div>
      <div style="background:rgba(255,255,255,.05);border-radius:14px;padding:14px;margin-bottom:12px;text-align:center">
        <div style="font-size:28px;margin-bottom:6px">${correct===total?'🏆':correct>=total/2?'👍':'📖'}</div>
        <div style="font-size:18px;font-weight:900;color:${scoreColor};font-family:'Space Mono',monospace;margin-bottom:3px">${correct} / ${total} richtig</div>
        <div style="font-size:11px;color:rgba(255,255,255,.4);font-weight:700">${correct===total?'Perfekt! Du kennst §1 EStG schon gut.':'Lies die Erklärungen unten – dann klappt es beim nächsten Mal!'}</div>
      </div>
      ${casesHtml}
      <div style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:14px;margin-bottom:10px">
        <div style="font-size:11px;font-weight:900;color:rgba(255,255,255,.9);margin-bottom:8px">§ 1 EStG – Steuerpflicht auf einen Blick</div>
        <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,.65);line-height:1.8">
          <span style="color:var(--cyan);font-weight:900">Unbeschränkt (§ 1 Abs. 1 EStG):</span> Natürliche Person mit <b>Wohnsitz (§ 8 AO)</b> oder <b>gewöhnlichem Aufenthalt (§ 9 AO)</b> in DE → gesamtes <b>Welteinkommen</b> steuerpflichtig.<br><br>
          <span style="color:#ff8c42;font-weight:900">Beschränkt (§ 1 Abs. 4 EStG):</span> Kein Wohnsitz in DE, aber <b>inländische Einkünfte (§ 49 EStG)</b> → nur diese werden in DE besteuert (Quellenprinzip).<br><br>
          <span style="color:#ffd94a;font-weight:900">Fiktiv unbeschränkt (§ 1 Abs. 3 EStG):</span> Grenzpendler ohne DE-Wohnsitz können auf Antrag wie Inländer behandelt werden, wenn ≥ 90 % der Einkünfte aus DE stammen.
        </div>
        <div style="margin-top:8px;font-size:9px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.25)">§ 1 Abs. 1, 3, 4 EStG · § 8 AO · § 9 AO · § 49 EStG · Nur für natürliche Personen – juristische Personen: KStG</div>
      </div>
      <div style="display:flex;gap:8px">
        <button onclick="para1Reset()" style="flex:1;padding:11px;border-radius:11px;border:1.5px solid rgba(255,255,255,.2);background:rgba(255,255,255,.06);color:rgba(255,255,255,.7);font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer">↺ Nochmal</button>
        <button onclick="einstGoStep2()" style="flex:2;padding:11px;border-radius:11px;border:none;background:linear-gradient(135deg,#0a8a5c,#00c97b);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer">Weiter: Lenas Lohnzettel →</button>
      </div>
    </div>`;
  }

  // ── Phase 0: Rating ────────────────────────────────────────────
  const casesHtml = PARA1_CASES.map((pc,i)=>{
    const given = para1Answers[i];
    const selected_ja   = given==='ja';
    const selected_nein = given==='nein';
    return `<div style="background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.1);border-radius:14px;padding:14px;margin-bottom:8px">
      <div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:10px">
        <div style="font-size:26px;flex-shrink:0">${pc.avatar}</div>
        <div style="flex:1">
          <div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:2px">${pc.name}</div>
          <div style="font-size:11px;color:rgba(255,255,255,.55);font-weight:700">${pc.desc}</div>
        </div>
        ${given ? `<div style="font-size:18px;flex-shrink:0">${selected_ja?'✔️':'✖️'}</div>` : ''}
      </div>
      <div style="font-size:12px;font-weight:800;color:rgba(255,255,255,.75);margin-bottom:8px">${pc.question}</div>
      <div style="display:flex;gap:8px">
        <button onclick="para1Answer(${i},'ja')" style="flex:1;padding:10px;border-radius:10px;border:2px solid ${selected_ja?'var(--cyan)':'rgba(255,255,255,.15)'};background:${selected_ja?'rgba(0,194,224,.2)':'rgba(255,255,255,.06)'};color:${selected_ja?'var(--cyan)':'rgba(255,255,255,.7)'};font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer;transition:all .15s">Ja</button>
        <button onclick="para1Answer(${i},'nein')" style="flex:1;padding:10px;border-radius:10px;border:2px solid ${selected_nein?'#ff4d6d':'rgba(255,255,255,.15)'};background:${selected_nein?'rgba(255,77,109,.2)':'rgba(255,255,255,.06)'};color:${selected_nein?'#ff4d6d':'rgba(255,255,255,.7)'};font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer;transition:all .15s">Nein</button>
      </div>
    </div>`;
  }).join('');

  return `<div>
    <div style="background:linear-gradient(135deg,#0a1a3a,#1a3a8f);border-radius:16px;padding:14px 16px 12px;margin-bottom:12px">
      <div style="font-size:9px;font-family:'Space Mono',monospace;color:var(--cyan);font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:3px">Schritt 1 · § 1 EStG</div>
      <div style="font-size:16px;font-weight:900;color:#fff;margin-bottom:3px">Wer muss Steuern zahlen?</div>
      <div style="font-size:11px;color:rgba(255,255,255,.45);font-weight:700">Erst alle 4 einschätzen – dann kommt die Auflösung</div>
    </div>
    ${casesHtml}
    ${allRated
      ? `<button onclick="para1Reveal()" style="width:100%;padding:13px;border-radius:13px;border:none;background:linear-gradient(135deg,var(--cyan),#0095c8);color:#0d1b3e;font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer;margin-top:4px">🔍 Auflösung anzeigen</button>`
      : `<div style="text-align:center;padding:10px;font-size:11px;color:rgba(255,255,255,.35);font-weight:700;font-family:'Space Mono',monospace">${answered} / ${total} beantwortet</div>`
    }
  </div>`;
}




// ==================== STATE ====================
let mode='basics', submode='einkunft', bilanzSub='zu';
let scoreMode=null; // tracks which mode the current score belongs to
let einstLaunched=null; // tracks if navigated from Einsteiger Lernpfad ('step2','step3')
let idx=0;
let sh_ein=[], sh_werb=[], sh_ust=[], sh_bzu=[], sh_buch=[], sh_ao=[], sh_kurios=[], sh_recht=[], sh_gewst=[], sh_gesellschaft=[];
let answered=false;
let totSc=0, corr=0, wrong=0, streak=0;
let quizDiff=0; // 0=Alle, 1=Basis, 2=Fortgeschritten, 3=Prüfungsniveau

// ===== PRAXISFÄLLE STATE =====
const PRAXIS_DONE_KEY = 'praxisDone_v1';
const PRAXIS_PROGRESS_KEY = 'praxisProgress_v1';
let praxisOpen = null;  // id of currently active case, or null for overview
let praxisStep = 0;
let praxisAnswered = false;
let praxisScore = 0;
let praxisDone = {};
let praxisProgress = {}; // {id: {step, score}} – in-progress saves
try { praxisDone = JSON.parse(localStorage.getItem(PRAXIS_DONE_KEY)||'{}'); } catch(e){ praxisDone={}; }
try { praxisProgress = JSON.parse(localStorage.getItem(PRAXIS_PROGRESS_KEY)||'{}'); } catch(e){ praxisProgress={}; }
function savePraxisDone(){ localStorage.setItem(PRAXIS_DONE_KEY, JSON.stringify(praxisDone)); }
function savePraxisProgress(){ localStorage.setItem(PRAXIS_PROGRESS_KEY, JSON.stringify(praxisProgress)); }

function shuffle(a){return[...a].sort(()=>Math.random()-.5)}
function filtShuffle(arr){
  const f=quizDiff===0?arr:arr.filter(q=>q.lvl===quizDiff);
  return shuffle(f.length?f:arr);
}
function setQuizDiff(d){
  quizDiff=d; idx=0; answered=false;
  if(mode==='est'){sh_ein=filtShuffle(D_EINKUNFT);sh_werb=filtShuffle(D_WERBUNG);}
  else if(mode==='ust')sh_ust=filtShuffle(D_UST);
  else if(mode==='bilanz'){sh_bzu=filtShuffle(D_BILANZ_ZU);sh_buch=filtShuffle(D_BUCHUNG);}
  else if(mode==='ao')sh_ao=filtShuffle(D_AO);
  else if(mode==='kurios')sh_kurios=filtShuffle(D_KURIOS);
  else if(mode==='recht')sh_recht=filtShuffle(D_RECHT);
  else if(mode==='gewst')sh_gewst=filtShuffle(D_GEWST);
  else if(mode==='gesellschaft')sh_gesellschaft=filtShuffle(D_GESELLSCHAFT);
  render();
}
function quizFilterBar(){
  const defs=[[0,'Alle'],[1,'⭐ Basis'],[2,'⭐⭐ Fortg.'],[3,'⭐⭐⭐ Profi']];
  return `<div class="quiz-diff-bar">${defs.map(([d,l])=>`<button class="qd-btn${quizDiff===d?' active':''}" onclick="setQuizDiff(${d})">${l}</button>`).join('')}</div>`;
}
function init(){
  sh_ein=shuffle(D_EINKUNFT);sh_werb=shuffle(D_WERBUNG);sh_ust=shuffle(D_UST);
  sh_bzu=shuffle(D_BILANZ_ZU);sh_buch=shuffle(D_BUCHUNG);sh_ao=shuffle(D_AO);
  sh_kurios=shuffle(D_KURIOS);sh_recht=shuffle(D_RECHT);
  sh_gewst=shuffle(D_GEWST);sh_gesellschaft=shuffle(D_GESELLSCHAFT);
  initSplash();
  // Badge after DOM renders
  setTimeout(updateFehlerBadge, 100);
}
function updSc(ok){
  trackCategoryProgress(mode, ok);
  if(ok){streak++;totSc+=10+Math.min(streak-1,4)*2;corr++;}
  else{streak=0;wrong++;}
  document.getElementById('totSc').textContent=totSc;
  document.getElementById('corrCt').textContent=corr;
  document.getElementById('wrongCt').textContent=wrong;
  const sc=document.getElementById('streakCt');
  sc.textContent=streak+' 🔥';
  if(streak>=3){sc.classList.add('streak-hot');}else{sc.classList.remove('streak-hot');}
  checkBadges();
}
const MODE_ORDER = ['basics','meinbereich','est','ust','bilanz','ao','kurios','recht','gewst','gesellschaft','flashcard','karriere','badges','glossar'];
function resetScore(){
  totSc=0;corr=0;wrong=0;streak=0;
  document.getElementById('totSc').textContent=0;
  document.getElementById('corrCt').textContent=0;
  document.getElementById('wrongCt').textContent=0;
  document.getElementById('streakCt').textContent='0 🔥';
  document.getElementById('streakCt').classList.remove('streak-hot');
}
const SCORE_LABELS={'est':'ESt','ust':'USt','bilanz':'Bilanz','ao':'AO','kurios':'Kurioses','recht':'Recht','speed':'Speed','flashcard':'Karten','pruefung':'Prüfung'};
function updateScoreLabel(m){
  const el=document.getElementById('score-mode-label');
  if(!el) return;
  const lbl=SCORE_LABELS[m];
  el.textContent=lbl?'Punkte · '+lbl:'Punkte';
}
function updateEinstBackBar(step){
  const bar=document.getElementById('einst-back-bar');
  const lbl=document.getElementById('einst-back-step');
  if(!bar) return;
  if(step && userLevel==='einsteiger'){
    bar.style.display='block';
    const labels={step2:'Schritt 2/4',step3:'Schritt 3/4'};
    if(lbl) lbl.textContent=labels[step]||'';
  } else {
    bar.style.display='none';
    einstLaunched=null;
  }
}
function toggleDrawer(){
  const d=document.getElementById('quizDrawer'),b=document.getElementById('drawerBackdrop');
  if(d.classList.contains('open')){closeDrawer();}
  else{d.classList.add('open');b.classList.add('open');document.getElementById('mnav-quiz').classList.add('active');}
}
function openQuiz(){
  toggleDrawer();
}
function closeDrawer(){
  const d=document.getElementById('quizDrawer'),b=document.getElementById('drawerBackdrop');
  if(!d)return;
  d.classList.remove('open');b.classList.remove('open');
  const quizModes=['est','ust','bilanz','ao','ao_basics','recht_basics','kurios','recht','flashcard','speed','glossar','praxis','fehler'];
  if(!quizModes.includes(mode)) document.getElementById('mnav-quiz').classList.remove('active');
}
function swDrawer(m){closeDrawer();sw(m);}
function syncMobileNav(m){
  const quizModes=['est','ust','bilanz','ao','ao_basics','recht_basics','kurios','recht','flashcard','speed','glossar','praxis','pruefung','story'];
  document.querySelectorAll('.mnav-btn').forEach(b=>b.classList.remove('active'));
  if(m==='basics') document.getElementById('mnav-basics')?.classList.add('active');
  else if(m==='meinbereich'||m==='badges') document.getElementById('mnav-meinbereich')?.classList.add('active');
  else if(m==='fehler') document.getElementById('mnav-fehler')?.classList.add('active');
  else if(m==='karriere') document.getElementById('mnav-karriere')?.classList.add('active');
  else if(m==='einfuehrung') document.getElementById('mnav-karriere')?.classList.add('active');
  else if(quizModes.includes(m)) document.getElementById('mnav-quiz')?.classList.add('active');
  document.querySelectorAll('.drawer-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('drawer-'+m)?.classList.add('active');
  updateFehlerBadge();
}
function sw(m){
  saveLastTab(m);
  markTabVisited(m);
  const QUIZ_MODES = ['est','ust','bilanz','ao','kurios','recht'];
  if(QUIZ_MODES.includes(m) && !seenIntros.includes(m)){
    closeDrawer();
    maybeShowIntro(m, ()=>{ _doSw(m); });
    return;
  }
  _doSw(m);
}
function _doSw(m){
  // Auto-reset score when switching between different quiz modes
  const SCORE_MODES=['est','ust','bilanz','ao','kurios','recht','speed','flashcard','pruefung'];
  if(SCORE_MODES.includes(m) && scoreMode!==m){
    resetScore();
    scoreMode=m;
  } else if(!SCORE_MODES.includes(m)){
    scoreMode=null;
  }
  updateScoreLabel(m);
  mode=m;idx=0;answered=false;
  closeDrawer();
  // remove etag dark background when leaving einfuehrung
  if(m!=='einfuehrung'){ const ga=document.getElementById('ga'); if(ga) ga.classList.remove('etag-mode'); }
  if(m!=='karriere'){ const ga=document.getElementById('ga'); if(ga) ga.classList.remove('karriere-mode'); }
  if(m!=='ao_basics'&&m!=='recht_basics'&&m!=='ust_basics'&&m!=='bilanz_basics'&&m!=='est_basics'&&m!=='basics'){ const ga=document.getElementById('ga'); if(ga) ga.classList.remove('basics-dark-mode'); }
  window.scrollTo({top:0,behavior:'smooth'});
  if(m==='est'){sh_ein=filtShuffle(D_EINKUNFT);sh_werb=filtShuffle(D_WERBUNG);}
  else if(m==='ust')sh_ust=filtShuffle(D_UST);
  else if(m==='bilanz'){sh_bzu=filtShuffle(D_BILANZ_ZU);sh_buch=filtShuffle(D_BUCHUNG);}
  else if(m==='ao')sh_ao=filtShuffle(D_AO);
  else if(m==='kurios')sh_kurios=filtShuffle(D_KURIOS);
  else if(m==='recht')sh_recht=filtShuffle(D_RECHT);
  else if(m==='gewst')sh_gewst=filtShuffle(D_GEWST);
  else if(m==='gesellschaft')sh_gesellschaft=filtShuffle(D_GESELLSCHAFT);
  else if(m==='story'){ /* storyOpen set by openStory() or caller */ }
  else if(m==='flashcard'){fcIdx=0;fcFlipped=false;fcKnown=[];}
  else if(m==='praxis'){ if(mode!=='praxis') praxisOpen=null; praxisStep=0; praxisAnswered=false; praxisScore=0; }
  else if(m==='meinbereich'){loadDailyData();updateStreakChip();}
  else if(m==='speed'){ clearInterval(spTimer); }
  else if(m!=='pruefung'){ clearInterval(examTimerInterval); }
  if(!playedModes.includes(m)){playedModes.push(m);savePlayedModes();checkBadges();}
  document.querySelectorAll('.mode-tab').forEach(t=>t.classList.remove('active'));
  const tab=document.getElementById('tab-'+m);
  if(tab)tab.classList.add('active');
  syncMobileNav(m);
  const sel=document.getElementById('mobileSelect');
  if(sel)sel.value=m;
  setTopicHeader(m);
  // Show/hide Einsteiger back bar
  if(einstLaunched && m!=='basics') updateEinstBackBar(einstLaunched);
  else updateEinstBackBar(null);
  render();
}
function swSub(s){submode=s;idx=0;answered=false;
  if(s==='einkunft')sh_ein=filtShuffle(D_EINKUNFT);
  else sh_werb=filtShuffle(D_WERBUNG);
  render();
}
function swBilanz(s){bilanzSub=s;idx=0;answered=false;
  if(s==='zu')sh_bzu=filtShuffle(D_BILANZ_ZU);
  else sh_buch=filtShuffle(D_BUCHUNG);
  render();
}
// ==================== TOPIC HEADER ====================
const TOPIC_CFG = {
  est:    { icon:'💼', title:'Einkommensteuer',           sub:'§§ 1–120 EStG · Übungsquiz',
            desc:'Erkenne alle 7 Einkunftsarten, ordne Werbungskosten zu und verstehe den progressiven Steuertarif.',
            chips:['7 Einkunftsarten','Werbungskosten','Progressiver Tarif','Lohnsteuer'],
            bg:'linear-gradient(135deg,#0d2b5e,#1a4a8f)' },
  ust:    { icon:'🛒', title:'Umsatzsteuer',              sub:'§§ 1–28 UStG · Welcher Satz gilt?',
            desc:'Produkt kommt – 0 %, 7 % oder 19 %? Trainiere die wichtigsten Steuersätze und den Vorsteuerabzug.',
            chips:['0 % steuerfrei','7 % ermäßigt','19 % Regelsteuersatz','Vorsteuerabzug'],
            bg:'linear-gradient(135deg,#003a1a,#005c36)' },
  bilanz: { icon:'📋', title:'Bilanz & Buchführung',      sub:'HGB · Doppelte Buchführung',
            desc:'Wirtschaftsgüter richtig einordnen und Buchungssätze nach dem Prinzip Soll an Haben korrekt formulieren.',
            chips:['Anlage- / Umlaufvermögen','Soll / Haben','Buchungssatz','AfA'],
            bg:'linear-gradient(135deg,#1a3a00,#2a5e00)' },
  ao:     { icon:'⚖️', title:'Abgabenordnung',           sub:'§§ 1–412 AO · Steuerverfahrensrecht',
            desc:'Das "Grundgesetz des Steuerrechts": Fristen, Rechtsmittel, Außenprüfung, Haftung und Verjährung.',
            chips:['Einspruch 1 Monat','Verjährung 4 Jahre','§ 173 AO','Außenprüfung'],
            bg:'linear-gradient(135deg,#1a0060,#3a008a)' },
  kurios: { icon:'🤯', title:'Kurioses Steuerrecht',      sub:'Wahr oder Falsch? · 40+ Steuerarten',
            desc:'Skurrile, historische und überraschende Fakten aus dem deutschen Steuerrecht. Trau deiner Intuition?',
            chips:['Sektsteuer 1902','Krypto & Co.','Hundesteuer','Jahresfrist'],
            bg:'linear-gradient(135deg,#3a1a00,#7a3800)' },
  recht:  { icon:'🏛️', title:'Privat- & Öffentliches Recht', sub:'Rechtsordnung · Abgrenzung',
            desc:'Privatrecht (Gleichordnung: BGB, HGB) vs. Öffentliches Recht (Überordnung: AO, BeamtStG). Wo liegt das Steuerrecht?',
            chips:['BGB · HGB','AO · BeamtStG','Finanzgericht','BFH'],
            bg:'linear-gradient(135deg,#003a3a,#005c5c)' },
  ao_basics: { icon:'⚖️', title:'AO Basics – Darf man das?', sub:'Steuergeheimnis · Fristen · Rechte',
            desc:'Echte Fälle aus dem Alltag des Finanzamts: Was gilt beim Steuergeheimnis? Was passiert bei Betriebsprüfungen? Und wann verjähren Steuern?',
            chips:['§ 30 Steuergeheimnis','§ 170 Fristen','§ 370 Hinterziehung','§ 200 Mitwirkung'],
            bg:'linear-gradient(135deg,#001a3a,#003060)' },
  recht_basics: { icon:'🏛️', title:'Recht Basics – Vertrag gültig?', sub:'Minderjährige · §§ 104–113 BGB',
            desc:'Kann ein 15-Jähriger ein iPhone bei eBay kaufen? Wann greift der Taschengeldparagraph? Lerne Geschäftsfähigkeit anhand echter Situationen.',
            chips:['§ 106 Beschränkte GF','§ 108 Genehmigung','§ 110 Taschengeld','§ 113 Ermächtigung'],
            bg:'linear-gradient(135deg,#001a10,#003020)' },
  ust_basics: { icon:'🛒', title:'USt Basics – Lieferung oder Leistung?', sub:'Lieferung · sonstige Leistung · Ort · Zeitpunkt',
            desc:'Was ist der Unterschied zwischen Lieferung und sonstiger Leistung? Wo ist der Umsatz steuerbar? Lerne die Grundregeln der Umsatzsteuer an konkreten Fällen.',
            chips:['§ 3 Abs. 1 UStG Lieferung','§ 3 Abs. 9 UStG Leistung','§ 3a Lieferort','§ 13 Entstehung'],
            bg:'linear-gradient(135deg,#2a1000,#4a2000)' },
  bilanz_basics: { icon:'📋', title:'Bilanz Basics – Soll & Haben', sub:'Bestandskonten · Erfolgskonten · Buchungssätze',
            desc:'Was bedeutet Soll und Haben wirklich? Wie funktionieren Bestandskonten, Aufwands- und Ertragskonten? Grundregeln der doppelten Buchführung an echten Fällen.',
            chips:['Aktiv-/Passivkonto','Aufwand/Ertrag','Buchungssatz','§ 238 HGB'],
            bg:'linear-gradient(135deg,#001030,#001a50)' },
  est_basics: { icon:'💼', title:'ESt Basics – Wie funktioniert Einkommensteuer?', sub:'Steuerpflicht · Einkunftsarten · Werbungskosten · Tarif',
            desc:'Was ist Einkommensteuer überhaupt? Wer zahlt sie, wie wird sie berechnet? Die wichtigsten Grundbegriffe anhand alltäglicher Situationen.',
            chips:['§ 1 EStG Steuerpflicht','7 Einkunftsarten','§ 9 Werbungskosten','Grundfreibetrag'],
            bg:'linear-gradient(135deg,#0d1a3a,#1a2d5e)' },
  praxis: { icon:'📋', title:'Praxisfälle',               sub:'Realistische Steuerszenarien · 3 Schritte',
            desc:'Wende dein Wissen auf echte Situationen an: Betriebsprüfung, Einspruchsfristen, Homeoffice, Selbstanzeige und mehr.',
            chips:['AO-Verfahren','ESt-Abzüge','USt-Sätze','Selbstanzeige'],
            bg:'linear-gradient(135deg,#0a1a5c,#1a3a8f)' },
  gewst:  { icon:'🏭', title:'Gewerbesteuer',              sub:'GewStG · Messbetrag · Hebesatz',
            desc:'Gewerbeertrag berechnen, Hinzurechnungen und Kürzungen anwenden, Messbetrag ermitteln und die Anrechnung auf die ESt verstehen.',
            chips:['§ 7 Gewerbeertrag','§ 8 Hinzurechnungen','§ 9 Kürzungen','§ 35 EStG Anrechnung'],
            bg:'linear-gradient(135deg,#1a2a00,#2e4a00)' },
  gesellschaft: { icon:'🏢', title:'Besteuerung der Gesellschaften', sub:'KStG · GmbH · Personengesellschaften',
            desc:'KSt-Satz, Trennungsprinzip, verdeckte Gewinnausschüttung, Organschaft und Teileinkünfteverfahren – Unternehmensbesteuerung im Überblick.',
            chips:['§ 23 KSt 15 %','vGA § 8 KStG','Teileinkünfteverfahren','Organschaft §§ 14 ff.'],
            bg:'linear-gradient(135deg,#1a0a3a,#2e1260)' },
  story:  { icon:'📖', title:'Steuer-Stories', sub:'Interaktive Alltagsszenarien',
            desc:'Lerne Steuerrecht durch echte Geschichten – Lohnzettel, Betriebsprüfung, Reihengeschäft und mehr.',
            chips:['Einsteiger','Fortgeschritten','USt · AO · ESt','8 Stories'],
            bg:'linear-gradient(135deg,#1a0a5e,#3a1a8f)' },
};

function setTopicHeader(m){
  const el = document.getElementById('topic-header');
  if(!el) return;
  const cfg = TOPIC_CFG[m];
  if(!cfg){ el.style.display='none'; el.innerHTML=''; return; }
  el.style.display='block';
  el.innerHTML = `<div class="topic-banner" style="background:${cfg.bg}">
    <div class="tbanner-row1">
      <span class="tbanner-icon">${cfg.icon}</span>
      <div class="tbanner-text" style="flex:1">
        <div class="tbanner-title">${cfg.title}</div>
        <div class="tbanner-sub">${cfg.sub}</div>
      </div>
      <button onclick="openAiChat('${m}')" class="ai-ask-btn" title="KI-Assistent – Fragen stellen">
        <span style="font-size:16px">✨</span> Fragen?
      </button>
    </div>
    <div class="tbanner-desc">${cfg.desc}</div>
    <div class="tbanner-chips">${cfg.chips.map(c=>`<span class="tbanner-chip">${c}</span>`).join('')}</div>
  </div>`;
}

function render(){
  const a=document.getElementById('ga');
  if(mode==='basics'){
    if(userLevel==='einsteiger'){renderBasicsEinsteiger(a);}else{renderBasics(a);requestAnimationFrame(startTaxAnimations);}
  }
  else if(mode==='est')renderEst(a);
  else if(mode==='ust')renderUst(a);
  else if(mode==='bilanz')renderBilanz(a);
  else if(mode==='ao')renderAo(a);
  else if(mode==='ao_basics')renderAoBasics(a);
  else if(mode==='recht_basics')renderRechtBasics(a);
  else if(mode==='ust_basics')renderUstBasics(a);
  else if(mode==='bilanz_basics')renderBilanzBasics(a);
  else if(mode==='est_basics')renderEstBasics(a);
  else if(mode==='kurios')renderKurios(a);
  else if(mode==='recht')renderRecht(a);
  else if(mode==='gewst')renderGewSt(a);
  else if(mode==='gesellschaft')renderGesellschaft(a);
  else if(mode==='flashcard')renderFlashcard(a);
  else if(mode==='meinbereich')renderMeinBereich(a);
  else if(mode==='badges')renderBadges(a);
  else if(mode==='speed')renderSpeed(a);
  else if(mode==='glossar')renderGlossar(a);
  else if(mode==='fehler')renderFehler(a);
  else if(mode==='story')renderStory(a);
  else if(mode==='pruefung')renderPruefung(a);
  else if(mode==='praxis')renderPraxis(a);
  else if(mode==='einfuehrung')renderEinfuehrung(a);
  else renderKarriere(a);
}

// ==================== EINSTEIGER SYSTEM ====================
const EINST_PROGRESS_KEY = 'einstProgress_v1';
function getEinstProgress(){ try{ return JSON.parse(localStorage.getItem(EINST_PROGRESS_KEY)||'{}'); }catch(e){ return {}; } }
function setEinstStep(step){ const p=getEinstProgress(); p[step]=true; localStorage.setItem(EINST_PROGRESS_KEY,JSON.stringify(p)); }

function einstGoStep1(){
  const allDone = Object.keys(para1Answers).length >= PARA1_CASES.length;
  if(allDone){ para1Answers = {}; }
  // Open the collapsed section
  const sec = document.getElementById('spot-szenarien');
  if(sec) sec.classList.add('open');
  const el = document.getElementById('einst-content');
  if(el){ el.innerHTML = renderPara1Block(); }
  setTimeout(()=>{
    const target = sec || el;
    if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
  }, 80);
}
function einstGoStep2(){
  einstLaunched='step2';
  storyOpen = 'lohnzettel';
  updateEinstBackBar('step2');
  _doSw('story');
}
function einstGoStep3(){
  einstLaunched='step3';
  // Skip intro modal for einsteiger - they have enough context from the page
  if(!seenIntros.includes('est')) { seenIntros.push('est'); localStorage.setItem(SEEN_INTROS_KEY, JSON.stringify(seenIntros)); }
  _doSw('est');
}
function einstGoStep4(){
  const el = document.getElementById('sec-absetzen');
  if(el){ el.classList.add('open'); setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'start'}), 80); }
  setTimeout(()=>{ setEinstStep('mehr'); }, 3000);
}

function resetEinstProgress(){
  localStorage.removeItem(EINST_PROGRESS_KEY);
  para1Answers = {};
  storyProgress = {};
  saveStoryProgress();
  const a = document.getElementById('ga');
  if(a) renderBasicsEinsteiger(a);
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderBasicsEinsteiger(a){
  a.classList.add('basics-dark-mode');
  const p = getEinstProgress();
  const stepsDone = ['para1','story','quiz','mehr'].filter(k=>!!p[k]).length;
  const pct = Math.round(stepsDone/4*100);

  // Only show first 3 Einstieg stories on basics page
  const allEinstieg = (typeof D_STORY!=='undefined'?D_STORY:[]).filter(s=>s.level==='Einstieg');
  const previewStories = allEinstieg.slice(0, 3);
  const moreCount = allEinstieg.length - previewStories.length;

  const storiesHtml = previewStories.map(s=>{
    const prog = storyProgress[s.id];
    const done = prog&&prog.done;
    const inProg = prog&&!prog.done&&(prog.scene||0)>0;
    const hook = s.scenes&&s.scenes[0]&&s.scenes[0].narrative
      ? s.scenes[0].narrative.replace(/\\n/g,' ').replace(/\\\\n/g,' ').substring(0,90)+'…'
      : '';
    const badgeBg  = done?'rgba(0,201,123,.25)':inProg?'rgba(255,217,74,.2)':`${s.color}33`;
    const badgeTxt = done?'#00c97b':inProg?'#c08000':s.color;
    const badgeLbl = done?'✓ Fertig':inProg?'⏸ Läuft':'▶ Neu';
    const btnLabel = done?'↺ Nochmal':inProg?'▶ Weiterlesen':'▶ Starten';
    return `<div onclick="openStoryDirect('${s.id}')" style="background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.1);border-radius:16px;overflow:hidden;cursor:pointer;transition:all .2s" onmouseover="this.style.background='rgba(255,255,255,.09)';this.style.borderColor='${s.color}66'" onmouseout="this.style.background='rgba(255,255,255,.05)';this.style.borderColor='rgba(255,255,255,.1)'">
      <div style="height:3px;background:${s.color}"></div>
      <div style="padding:13px 14px;display:flex;gap:12px;align-items:flex-start">
        <div style="font-size:30px;line-height:1;flex-shrink:0">${s.icon}</div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
            <span style="font-size:13px;font-weight:900;color:#fff">${s.title}</span>
            <span style="margin-left:auto;font-size:9px;font-weight:800;padding:2px 7px;border-radius:100px;background:${badgeBg};color:${badgeTxt};flex-shrink:0">${badgeLbl}</span>
          </div>
          <div style="font-size:11px;color:rgba(255,255,255,.5);font-weight:700;line-height:1.5;margin-bottom:8px">${hook}</div>
          <div style="display:flex;align-items:center;justify-content:space-between">
            <span style="font-size:9px;color:rgba(255,255,255,.3);font-family:'Space Mono',monospace">⏱ ${s.duration}</span>
            <button onclick="event.stopPropagation();openStoryDirect('${s.id}')" style="padding:5px 14px;border-radius:100px;border:none;background:${s.color};color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:11px;cursor:pointer">${btnLabel}</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');

  const para1Html = renderPara1Block();

  a.innerHTML = `<!-- HERO -->
<div style="background:linear-gradient(145deg,#060f22,#0d2b5e 55%,#1a0a5e);border-radius:22px;padding:22px 18px 20px;margin-bottom:14px;position:relative;overflow:hidden">
  <div style="position:absolute;right:-10px;top:-10px;font-size:110px;opacity:.04;line-height:1;transform:rotate(10deg)">🧾</div>
  <div style="font-size:9px;font-family:'Space Mono',monospace;color:var(--cyan);font-weight:700;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:8px">📍 Willkommen im Steuerrecht</div>
  <div style="font-size:22px;font-weight:900;color:#fff;line-height:1.25;margin-bottom:8px">Du zahlst täglich Steuern –<br>ohne es zu merken 🤯</div>
  <div style="font-size:12px;color:rgba(255,255,255,.55);font-weight:700;line-height:1.6;margin-bottom:16px">Vom Döner bis zum Konzertticket steckt Steuer drin. Lerne in 20 Minuten was das bedeutet – und was du damit machst.</div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:16px">
    <div style="background:rgba(255,255,255,.08);border-radius:12px;padding:10px 8px;text-align:center">
      <div style="font-size:18px;font-weight:900;color:var(--cyan);font-family:'Space Mono',monospace">1,28€</div>
      <div style="font-size:9px;color:rgba(255,255,255,.4);font-weight:700;margin-top:2px">Steuer im Döner</div>
    </div>
    <div style="background:rgba(255,255,255,.08);border-radius:12px;padding:10px 8px;text-align:center">
      <div style="font-size:18px;font-weight:900;color:#ffd94a;font-family:'Space Mono',monospace">19%</div>
      <div style="font-size:9px;color:rgba(255,255,255,.4);font-weight:700;margin-top:2px">auf fast alles</div>
    </div>
    <div style="background:rgba(255,255,255,.08);border-radius:12px;padding:10px 8px;text-align:center">
      <div style="font-size:16px;font-weight:900;color:#00c97b;font-family:'Space Mono',monospace">???</div>
      <div style="font-size:9px;color:rgba(255,255,255,.4);font-weight:700;margin-top:2px">Mrd. € – weißt du's?</div>
    </div>
  </div>
  ${pct>0?`<div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-size:10px;color:rgba(255,255,255,.4);font-weight:700">Dein Fortschritt</span><span style="font-size:10px;color:var(--cyan);font-weight:900;font-family:'Space Mono',monospace">${stepsDone}/4 Schritte</span></div><div style="height:5px;background:rgba(255,255,255,.1);border-radius:100px;overflow:hidden"><div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--cyan),#00c97b);border-radius:100px;transition:width .6s"></div></div></div>`:''}
  <div style="display:flex;gap:8px">
    <button onclick="pct>0?einstGoStep1():startSteuerTour()" style="flex:1;padding:13px;border-radius:13px;border:none;background:linear-gradient(135deg,var(--cyan),#0095c8);color:#0d1b3e;font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer">${pct>0?'▶ Weiter lernen':'🚀 Jetzt starten'}</button>
    ${pct>0?'<button onclick="resetEinstProgress()" style="padding:13px 14px;border-radius:13px;border:1.5px solid rgba(255,255,255,.12);background:transparent;color:rgba(255,255,255,.35);font-family:\'Nunito\',sans-serif;font-weight:800;font-size:12px;cursor:pointer">↺</button>':''}
  </div>
</div>
<!-- §1 EStG -->
<div style="margin-bottom:14px">
  <div style="font-size:9px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.35);font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">⚖️ §1 EStG – Wer ist steuerpflichtig?</div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:14px;margin-bottom:8px">
    <div style="font-size:13px;font-weight:900;color:#fff;margin-bottom:8px">Natürliche Personen: Unbeschränkt vs. beschränkt</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
      <div style="background:rgba(0,194,224,.1);border:1px solid rgba(0,194,224,.25);border-radius:12px;padding:10px">
        <div style="font-size:10px;font-weight:900;color:var(--cyan);margin-bottom:3px">§ 1 Abs. 1 EStG</div>
        <div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:4px">Unbeschränkt</div>
        <div style="font-size:10px;color:rgba(255,255,255,.6);font-weight:700;line-height:1.55"><b style="color:#fff">Natürliche Person</b> mit Wohnsitz (§ 8 AO) oder gewöhnlichem Aufenthalt (§ 9 AO) im Inland → gesamtes <b style="color:var(--cyan)">Welteinkommen</b> steuerpflichtig</div>
      </div>
      <div style="background:rgba(255,140,66,.1);border:1px solid rgba(255,140,66,.25);border-radius:12px;padding:10px">
        <div style="font-size:10px;font-weight:900;color:#ff8c42;margin-bottom:3px">§ 1 Abs. 4 EStG</div>
        <div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:4px">Beschränkt</div>
        <div style="font-size:10px;color:rgba(255,255,255,.6);font-weight:700;line-height:1.55"><b style="color:#fff">Natürliche Person</b> ohne Wohnsitz in DE, aber mit <b style="color:#ff8c42">inländischen Einkünften</b> (§ 49 EStG) → nur diese werden besteuert</div>
      </div>
    </div>
    <div style="background:rgba(0,194,224,.07);border-left:3px solid var(--cyan);border-radius:0 8px 8px 0;padding:8px 10px;font-size:10px;color:rgba(255,255,255,.65);font-weight:700;line-height:1.6">
      💡 <b style="color:#fff">Merksatz:</b> Steuerpflichtig ≠ Steuer zahlen. Alle natürlichen Personen mit Wohnsitz in DE sind unbeschränkt steuerpflichtig – auch Kinder, Rentner, Azubis. Erst wer den Grundfreibetrag überschreitet (12.336 € / 2026), zahlt tatsächlich Einkommensteuer.
    </div>
  </div>
  <div id="para1-block">${para1Html}</div>
</div>

<!-- KURIOSES -->
<div onclick="sw('kurios')" style="background:linear-gradient(135deg,rgba(58,10,0,.7),rgba(120,40,0,.4));border:1.5px solid rgba(255,140,66,.25);border-radius:16px;padding:15px;cursor:pointer;margin-bottom:14px;transition:all .2s" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''">
  <div style="font-size:9px;font-family:'Space Mono',monospace;color:#ff8c42;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">🤯 Kurioses Steuerrecht – 3 Fakten</div>
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
    <div style="background:rgba(255,255,255,.06);border-radius:10px;padding:10px 12px;display:flex;gap:10px;align-items:flex-start">
      <span style="font-size:20px;flex-shrink:0">🍾</span>
      <div>
        <div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:2px">Sektsteuer seit 1902</div>
        <div style="font-size:10px;color:rgba(255,255,255,.5);font-weight:700">Eingeführt um den Aufbau der Kaiserlichen Marine zu finanzieren – gibt es noch heute.</div>
      </div>
    </div>
    <div style="background:rgba(255,255,255,.06);border-radius:10px;padding:10px 12px;display:flex;gap:10px;align-items:flex-start">
      <span style="font-size:20px;flex-shrink:0">🐕</span>
      <div>
        <div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:2px">Hundesteuer</div>
        <div style="font-size:10px;color:rgba(255,255,255,.5);font-weight:700">Hunde zahlen Steuer – je nach Stadt 60–200 € pro Jahr. Für Kampfhunde manchmal das Doppelte.</div>
      </div>
    </div>
    <div style="background:rgba(255,255,255,.06);border-radius:10px;padding:10px 12px;display:flex;gap:10px;align-items:flex-start">
      <span style="font-size:20px;flex-shrink:0">☕</span>
      <div>
        <div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:2px">Kaffeebohnen vs. Tee</div>
        <div style="font-size:10px;color:rgba(255,255,255,.5);font-weight:700">Tee: 7 % Steuer. Kaffeebohnen: 19 %. Gleiche Funktion – komplett unterschiedlicher Steuersatz.</div>
      </div>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:8px;background:rgba(255,140,66,.15);border-radius:10px;padding:10px 12px">
    <span style="font-size:16px">🎯</span>
    <div style="flex:1;font-size:12px;font-weight:900;color:#ff8c42">40+ weitere kuriose Steuerfakten → zum Quiz</div>
    <span style="font-size:18px;color:rgba(255,255,255,.3)">›</span>
  </div>
</div>
<!-- STEUERAUFKOMMEN RATEN -->
<div style="margin-bottom:14px">
  <div style="font-size:9px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.35);font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">💰 Was bringt dem Staat am meisten?</div>
  <div style="background:linear-gradient(135deg,rgba(0,60,30,.6),rgba(0,100,50,.3));border:1.5px solid rgba(0,201,123,.2);border-radius:16px;padding:14px">
    <div style="font-size:12px;color:rgba(255,255,255,.6);font-weight:700;margin-bottom:10px">Schätze: Welche Steuer nimmt Deutschland am meisten ein?</div>
    <div id="aufk-game-wrap" style="min-height:60px"></div>
  </div>
</div>

<!-- WAS SIND STEUERN -->
<div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:16px;margin-bottom:14px">
  <div style="font-size:9px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.35);font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">💡 Was sind Steuern überhaupt?</div>
  <div style="font-size:14px;font-weight:900;color:#fff;margin-bottom:10px">Steuern · Gebühren · Beiträge – was ist der Unterschied?</div>
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
    <div style="background:rgba(0,194,224,.08);border-left:3px solid var(--cyan);border-radius:0 10px 10px 0;padding:10px 12px">
      <div style="font-size:11px;font-weight:900;color:var(--cyan);margin-bottom:3px">Steuer (§ 3 Abs. 1 AO)</div>
      <div style="font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.6">Geldleistung ohne direkte Gegenleistung. Du bezahlst – und der Staat entscheidet, wofür er das Geld einsetzt. <b style="color:#fff">Beispiel:</b> Einkommensteuer, Umsatzsteuer, Kfz-Steuer.</div>
    </div>
    <div style="background:rgba(255,140,66,.08);border-left:3px solid #ff8c42;border-radius:0 10px 10px 0;padding:10px 12px">
      <div style="font-size:11px;font-weight:900;color:#ff8c42;margin-bottom:3px">Gebühr</div>
      <div style="font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.6">Zahlung für eine <b style="color:#fff">konkrete staatliche Leistung</b>. Du bekommst direkt etwas dafür. <b style="color:#fff">Beispiel:</b> Passgebühr, Gerichtsgebühr, KfZ-Zulassung.</div>
    </div>
    <div style="background:rgba(255,217,74,.08);border-left:3px solid #ffd94a;border-radius:0 10px 10px 0;padding:10px 12px">
      <div style="font-size:11px;font-weight:900;color:#ffd94a;margin-bottom:3px">Beitrag</div>
      <div style="font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.6">Zahlung für die <b style="color:#fff">Möglichkeit einer Leistung</b> – ob du sie nutzt oder nicht. <b style="color:#fff">Beispiel:</b> Krankenversicherungsbeitrag, Rundfunkbeitrag.</div>
    </div>
  </div>
  <div style="background:rgba(255,255,255,.05);border-radius:10px;padding:10px 12px;font-size:10px;color:rgba(255,255,255,.5);font-weight:700;line-height:1.65">
    🔑 <b style="color:rgba(255,255,255,.75)">Merksatz:</b> Steuern sind die einzige Abgabe <b style="color:rgba(255,255,255,.75)">ohne individuellen Anspruch auf Gegenleistung</b> (§ 3 Abs. 1 AO). Das unterscheidet sie fundamental von Gebühren und Beiträgen – und macht sie zur wichtigsten Finanzierungsquelle des Staates: <b style="color:var(--cyan)">947 Milliarden € pro Jahr</b>.
  </div>
</div>

<!-- WAS KANN ICH ABSETZEN -->
<div id="sec-absetzen" style="margin-bottom:14px">
  <div style="font-size:9px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.35);font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">💡 Was kann ich absetzen?</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
    <div onclick="absetzOv('fahrt')" style="background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.1);border-radius:14px;padding:12px;cursor:pointer;transition:all .2s" onmouseover="this.style.background='rgba(255,255,255,.09)'" onmouseout="this.style.background='rgba(255,255,255,.05)'">
      <div style="font-size:26px;margin-bottom:6px">🚗</div>
      <div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:2px">Fahrtkosten</div>
      <div style="font-size:9px;color:var(--cyan);font-family:'Space Mono',monospace;font-weight:700">§ 9 Abs. 1 Nr. 4 EStG</div>
    </div>
    <div onclick="absetzOv('laptop')" style="background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.1);border-radius:14px;padding:12px;cursor:pointer;transition:all .2s" onmouseover="this.style.background='rgba(255,255,255,.09)'" onmouseout="this.style.background='rgba(255,255,255,.05)'">
      <div style="font-size:26px;margin-bottom:6px">💻</div>
      <div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:2px">Laptop & Handy</div>
      <div style="font-size:9px;color:var(--cyan);font-family:'Space Mono',monospace;font-weight:700">§ 9 EStG · § 6 Abs. 2 EStG</div>
    </div>
    <div onclick="absetzOv('home')" style="background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.1);border-radius:14px;padding:12px;cursor:pointer;transition:all .2s" onmouseover="this.style.background='rgba(255,255,255,.09)'" onmouseout="this.style.background='rgba(255,255,255,.05)'">
      <div style="font-size:26px;margin-bottom:6px">🏠</div>
      <div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:2px">Homeoffice</div>
      <div style="font-size:9px;color:var(--cyan);font-family:'Space Mono',monospace;font-weight:700">§ 4 Abs. 5 Nr. 6b EStG</div>
    </div>
    <div onclick="absetzOv('fortbild')" style="background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.1);border-radius:14px;padding:12px;cursor:pointer;transition:all .2s" onmouseover="this.style.background='rgba(255,255,255,.09)'" onmouseout="this.style.background='rgba(255,255,255,.05)'">
      <div style="font-size:26px;margin-bottom:6px">📚</div>
      <div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:2px">Weiterbildung</div>
      <div style="font-size:9px;color:var(--cyan);font-family:'Space Mono',monospace;font-weight:700">§ 9 Abs. 1 Nr. 6 EStG</div>
    </div>
    <div onclick="absetzOv('spende')" style="background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.1);border-radius:14px;padding:12px;cursor:pointer;transition:all .2s" onmouseover="this.style.background='rgba(255,255,255,.09)'" onmouseout="this.style.background='rgba(255,255,255,.05)'">
      <div style="font-size:26px;margin-bottom:6px">🎁</div>
      <div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:2px">Spenden</div>
      <div style="font-size:9px;color:var(--cyan);font-family:'Space Mono',monospace;font-weight:700">§ 10b EStG</div>
    </div>
    <div onclick="absetzOv('krank')" style="background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.1);border-radius:14px;padding:12px;cursor:pointer;transition:all .2s" onmouseover="this.style.background='rgba(255,255,255,.09)'" onmouseout="this.style.background='rgba(255,255,255,.05)'">
      <div style="font-size:26px;margin-bottom:6px">🩺</div>
      <div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:2px">Krankheitskosten</div>
      <div style="font-size:9px;color:var(--cyan);font-family:'Space Mono',monospace;font-weight:700">§ 33 EStG</div>
    </div>
    <div onclick="absetzOv('kleidung')" style="background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.1);border-radius:14px;padding:12px;cursor:pointer;transition:all .2s" onmouseover="this.style.background='rgba(255,255,255,.09)'" onmouseout="this.style.background='rgba(255,255,255,.05)'">
      <div style="font-size:26px;margin-bottom:6px">👔</div>
      <div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:2px">Arbeitskleidung</div>
      <div style="font-size:9px;color:var(--cyan);font-family:'Space Mono',monospace;font-weight:700">§ 9 Abs.1 Nr.6 EStG</div>
    </div>
  </div>
</div>

<!-- ══ WK / SONDERAUSGABEN / AUẞERGEWÖHNLICHE BELASTUNGEN ══════════ -->
<div style="margin-bottom:14px">
  <div style="font-size:9px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.35);font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">📋 Abzüge im Überblick – was ist was?</div>
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:16px;overflow:hidden">
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr">
      <div style="padding:12px;border-right:1px solid rgba(255,255,255,.08)">
        <div style="font-size:9px;font-weight:900;color:var(--cyan);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Werbungskosten · § 9 Abs. 1 EStG</div>
        <div style="font-size:10px;color:rgba(255,255,255,.6);font-weight:700;line-height:1.55"><b style="color:#fff">Definition:</b> Aufwendungen zur Erwerbung, Sicherung und Erhaltung der Einnahmen. Berufliche Veranlassung muss auf Nachfrage nachgewiesen werden.<br><br>Mindern die <b style="color:var(--cyan)">einzelnen Einkünfte</b> (z.B. Einnahmen aus nsa. Arbeit).<br><br>✓ Fahrtkosten<br>✓ Arbeitsmittel<br>✓ Homeoffice<br>✓ Berufskleidung<br>✓ Fortbildung</div>
      </div>
      <div style="padding:12px;border-right:1px solid rgba(255,255,255,.08)">
        <div style="font-size:9px;font-weight:900;color:#ffd94a;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Sonderausgaben · §§ 10–10b EStG</div>
        <div style="font-size:10px;color:rgba(255,255,255,.6);font-weight:700;line-height:1.55"><b style="color:#fff">Definition:</b> Weder WK/BA noch AuBe, aber gesetzlich ausdrücklich zum Abzug zugelassen (abschließende Aufzählung!).<br><br>Mindern den <b style="color:#ffd94a">Gesamtbetrag der Einkünfte</b>.<br><br>✓ Kranken-/Rentenversicherung<br>✓ Kirchensteuer<br>✓ Spenden (§ 10b)<br>✓ Unterhalt (§ 10 Abs.1 Nr.5)<br>✓ Erstausbildung (§ 10 Abs.1 Nr.7)</div>
      </div>
      <div style="padding:12px">
        <div style="font-size:9px;font-weight:900;color:#ff8c42;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Außergewöhnl. Belastungen · § 33 EStG</div>
        <div style="font-size:10px;color:rgba(255,255,255,.6);font-weight:700;line-height:1.55"><b style="color:#fff">Definition:</b> Zwangsläufige Aufwendungen, die dem Grunde und der Höhe nach außergewöhnlich sind. Nur soweit sie die <b style="color:#ff8c42">zumutbare Belastung</b> (§ 33 Abs. 3 EStG: 1–7 % des GdE) übersteigen.<br><br>✓ Krankheitskosten<br>✓ Zahnarzt/Brille<br>✓ Pflegeaufwendungen<br>✓ Kurkosten m. ärztl. Attest</div>
      </div>
    </div>
    <div style="background:rgba(255,255,255,.04);padding:10px 12px;font-size:10px;color:rgba(255,255,255,.4);font-weight:700;line-height:1.6;border-top:1px solid rgba(255,255,255,.07)">
      🔑 <b style="color:rgba(255,255,255,.65)">Merksatz:</b> WK = beruflich · SA = privat aber anerkannt · AuBe = unausweichlich. Alle drei senken die Steuer – aber mit verschiedenen Grenzen und Regelungen.
    </div>
  </div>
</div>


<!-- ARBEIT IM FINANZAMT -->
<div style="background:linear-gradient(135deg,#060f22,#0a2a60 60%,#0d3a20);border:1.5px solid rgba(0,194,224,.2);border-radius:18px;padding:18px;margin-bottom:14px">
  <div style="font-size:9px;font-family:'Space Mono',monospace;color:var(--cyan);font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">🏛️ Arbeit im Finanzamt – nicht was du denkst</div>
  <div style="font-size:16px;font-weight:900;color:#fff;margin-bottom:8px">Akten sortieren? Nein. Wirtschaftskriminalität aufdecken. ⚡</div>
  <div style="font-size:12px;color:rgba(255,255,255,.6);font-weight:700;line-height:1.65;margin-bottom:14px">Finanzbeamte prüfen Millionenunternehmen, entlarven Steuerhinterziehung, setzen komplexe Bescheide fest und entscheiden über Einsprüche – und sichern damit die Grundlage für Schulen, Krankenhäuser und Straßen.</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">
    <div style="background:rgba(255,255,255,.06);border-radius:12px;padding:12px">
      <div style="font-size:22px;margin-bottom:6px">🔍</div>
      <div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:4px">Betriebsprüfung</div>
      <div style="font-size:10px;color:rgba(255,255,255,.5);font-weight:700;line-height:1.5">Du prüfst Millionenunternehmen. Findest versteckte Einnahmen. Sorgst für Steuergerechtigkeit.</div>
    </div>
    <div style="background:rgba(255,255,255,.06);border-radius:12px;padding:12px">
      <div style="font-size:22px;margin-bottom:6px">⚖️</div>
      <div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:4px">Rechtsbehelfe</div>
      <div style="font-size:10px;color:rgba(255,255,255,.5);font-weight:700;line-height:1.5">Einsprüche bearbeiten, Finanzgericht, EU-Recht. Steuerrecht ist anspruchsvolle Rechtsarbeit.</div>
    </div>
    <div style="background:rgba(255,255,255,.06);border-radius:12px;padding:12px">
      <div style="font-size:22px;margin-bottom:6px">🌍</div>
      <div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:4px">Internationales</div>
      <div style="font-size:10px;color:rgba(255,255,255,.5);font-weight:700;line-height:1.5">Verrechnungspreise, Doppelbesteuerungsabkommen, OECD-Standards. Global denken.</div>
    </div>
    <div style="background:rgba(255,255,255,.06);border-radius:12px;padding:12px">
      <div style="font-size:22px;margin-bottom:6px">📄</div>
      <div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:4px">Steuerfestsetzung</div>
      <div style="font-size:10px;color:rgba(255,255,255,.5);font-weight:700;line-height:1.5">Erklärungen prüfen, Bescheide erlassen, Einsprüche entscheiden – jeder Fall ist anders.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
    <div style="background:rgba(0,194,224,.08);border:1px solid rgba(0,194,224,.2);border-radius:12px;padding:12px">
      <div style="font-size:9px;font-weight:900;color:var(--cyan);margin-bottom:5px;text-transform:uppercase;letter-spacing:1px">Mittlerer Dienst</div>
      <div style="font-size:13px;font-weight:900;color:#fff;margin-bottom:4px">Ausbildung · 2 Jahre</div>
      <div style="font-size:10px;color:rgba(255,255,255,.55);font-weight:700;line-height:1.6">Anwärterbezüge Berlin: <b style="color:#fff">1.467 €</b> · BB: <b style="color:#fff">1.518 €</b> brutto/Monat<br>Abschluss: Steuersekretär/in (mD)<br>Einstieg: <b style="color:var(--cyan)">A 7</b> · Steuersekretär</div>
    </div>
    <div style="background:rgba(0,201,123,.08);border:1px solid rgba(0,201,123,.2);border-radius:12px;padding:12px">
      <div style="font-size:9px;font-weight:900;color:#00c97b;margin-bottom:5px;text-transform:uppercase;letter-spacing:1px">Gehobener Dienst</div>
      <div style="font-size:13px;font-weight:900;color:#fff;margin-bottom:4px">Studium FHF · 3 Jahre</div>
      <div style="font-size:10px;color:rgba(255,255,255,.55);font-weight:700;line-height:1.6">Anwärterbezüge Berlin: <b style="color:#fff">1.527 €</b> · BB: <b style="color:#fff">1.571 €</b> brutto/Monat<br>Abschluss: Dipl.-Finanzwirt(in) (FH)<br>Einstieg: <b style="color:#00c97b">A 9</b> · Steuerinspektor/in</div>
    </div>
  </div>
  <div style="background:rgba(255,255,255,.04);border-left:3px solid rgba(255,255,255,.12);padding:9px 12px;border-radius:0 8px 8px 0;margin-bottom:12px;font-size:10px;color:rgba(255,255,255,.45);font-weight:700;line-height:1.65">
    💡 <b style="color:rgba(255,255,255,.7)">Anwärterbezüge (§ 59 BBesG)</b> sind keine Ausbildungsvergütung sondern Beamtenbezüge während der Ausbildung/des Studiums als <b style="color:rgba(255,255,255,.7)">Beamter auf Widerruf</b>. Davon werden keine Sozialversicherungsbeiträge abgezogen – der Nettobetrag ist daher vergleichsweise hoch. Die Bezüge von mD und gD liegen nah beieinander; der langfristige Unterschied zeigt sich erst in der Laufbahnentwicklung und Aufstiegsmöglichkeiten.
  </div>

  <!-- Beamte vs. Angestellte -->
  <div style="margin-bottom:12px">
    <div style="font-size:10px;font-weight:900;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">⚖️ Beamter oder Angestellter – was ist der Unterschied?</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
      <div style="background:rgba(0,194,224,.08);border:1px solid rgba(0,194,224,.18);border-radius:10px;padding:10px">
        <div style="font-size:11px;font-weight:900;color:var(--cyan);margin-bottom:6px">🏛️ Beamter</div>
        <div style="font-size:10px;color:rgba(255,255,255,.6);font-weight:700;line-height:1.65">
          ✓ Öffentlich-rechtl. Dienstverhältnis<br>
          ✓ Keine Sozialversicherung (KV, RV, PV, ALV)<br>
          ✓ Beihilfe statt GKV (Krankheitskosten z.T. erstattet)<br>
          ✓ Pension statt gesetzl. Rente (höher)<br>
          ✓ Unkündbar nach Verbeamtung<br>
          ✓ Alimentationsprinzip: Staat muss angemessen versorgen<br>
          ✗ Kein Streikrecht<br>
          ✗ Besondere Treuepflicht
        </div>
      </div>
      <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:10px">
        <div style="font-size:11px;font-weight:900;color:rgba(255,255,255,.7);margin-bottom:6px">📋 Angestellter (TVöD)</div>
        <div style="font-size:10px;color:rgba(255,255,255,.5);font-weight:700;line-height:1.65">
          ✓ Privatrechtl. Arbeitsverhältnis<br>
          ✓ Tarifvertrag öff. Dienst (TVöD)<br>
          ✓ Volle Sozialversicherung<br>
          ✓ Streikrecht<br>
          ✗ Gesetzliche Rente (geringer als Pension)<br>
          ✗ Kündigung möglich<br>
          ✗ Keine Beihilfe im Krankheitsfall
        </div>
      </div>
    </div>
    <div style="margin-top:6px;padding:8px 10px;background:rgba(255,217,74,.06);border:1px solid rgba(255,217,74,.15);border-radius:8px;font-size:10px;color:rgba(255,255,255,.5);font-weight:700;line-height:1.6">
      💰 <b style="color:rgba(255,255,255,.7)">Netto-Vergleich:</b> Beamte zahlen keine ~20 % Sozialversicherung → ihr Nettobezug ist bei gleichem Bruttogehalt deutlich höher als bei Angestellten. Dafür bauen sie keine gesetzliche Rente auf – sondern erwerben Pensionsansprüche (i.d.R. bis 71,75 % des letzten Bruttogehalts nach max. 40 Dienstjahren).
    </div>
  </div>

  <button onclick="sw('karriere')" style="width:100%;padding:12px;border-radius:12px;border:none;background:linear-gradient(135deg,#00c97b,#005c36);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer">Karriere entdecken → Ausbildung, Studium, Karriere-Test</button>
</div>

<!-- QUIZ TEASER -->
<div onclick="einstGoStep3()" style="background:linear-gradient(135deg,#1a0a5e,#3d0a6b);border:1.5px solid rgba(139,92,246,.3);border-radius:16px;padding:15px;cursor:pointer;display:flex;align-items:center;gap:14px;margin-bottom:90px;transition:all .2s" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''">
  <div style="font-size:32px">⚡</div>
  <div><div style="font-size:14px;font-weight:900;color:#fff;margin-bottom:2px">Schnell-Quiz: Was weißt du schon?</div><div style="font-size:11px;color:rgba(255,255,255,.45);font-weight:700">5 Fragen · 3 Minuten · sofort Ergebnis</div></div>
  <div style="margin-left:auto;font-size:20px;color:rgba(255,255,255,.25)">›</div>
</div>

</div>`;

  setTimeout(()=>{ if(typeof renderAufkGame==='function') renderAufkGame(); }, 120);
}

// ══════════════════════════════════════════════════════════════════
// STEUER-TOUR – Geführte interaktive Einführung ins Steuerrecht
// ══════════════════════════════════════════════════════════════════

const STEUER_TOUR_KEY = 'steuerTourDone_v1';
let tourStep = 0;
let tourAnswers = {};

function startSteuerTour(){
  tourStep = 0;
  tourAnswers = {};
  const a = document.getElementById('ga');
  if(a){
    a.classList.add('basics-dark-mode');
    renderTourStep(a);
    a.scrollIntoView({behavior:'smooth', block:'start'});
  }
}

function renderTourStep(a){
  const step = STEUER_TOUR_STEPS[tourStep];
  if(!step){ tourDone(a); return; }
  const prog = Math.round(tourStep / STEUER_TOUR_STEPS.length * 100);

  a.innerHTML = `<div style="color:#fff;min-height:100vh">
    <!-- Progress -->
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
      <button onclick="const a=document.getElementById('ga');renderBasicsEinsteiger(a)" style="background:rgba(255,255,255,.08);border:none;color:rgba(255,255,255,.5);border-radius:8px;padding:5px 10px;font-size:11px;font-weight:800;font-family:'Nunito',sans-serif;cursor:pointer">✕ Beenden</button>
      <div style="flex:1;height:4px;background:rgba(255,255,255,.1);border-radius:100px;overflow:hidden">
        <div style="height:100%;width:${prog}%;background:linear-gradient(90deg,var(--cyan),#00c97b);border-radius:100px;transition:width .4s"></div>
      </div>
      <span style="font-size:10px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.35);font-weight:700">${tourStep+1}/${STEUER_TOUR_STEPS.length}</span>
    </div>
    ${step.render()}
  </div>`;
}

function tourNext(){
  tourStep++;
  const a = document.getElementById('ga');
  if(a){ renderTourStep(a); a.scrollIntoView({behavior:'smooth',block:'start'}); }
}

function tourAnswer(key, val, correctVal){
  tourAnswers[key] = val;
  const correct = val === correctVal;
  const step = STEUER_TOUR_STEPS[tourStep];
  const a = document.getElementById('ga');
  if(a && step){ renderTourStep(a); }
}

function tourDone(a){
  localStorage.setItem(STEUER_TOUR_KEY, '1');
  a.innerHTML = `<div style="color:#fff;text-align:center;padding:40px 20px">
    <div style="font-size:60px;margin-bottom:16px">🎉</div>
    <div style="font-size:22px;font-weight:900;color:#fff;margin-bottom:8px">Einführung abgeschlossen!</div>
    <div style="font-size:13px;color:rgba(255,255,255,.55);font-weight:700;margin-bottom:24px">Du kennst jetzt die Grundlagen des deutschen Steuerrechts. Zeit zum Üben!</div>
    <button onclick="renderBasicsEinsteiger(document.getElementById('ga'))" style="width:100%;padding:14px;border-radius:14px;border:none;background:linear-gradient(135deg,var(--cyan),#0095c8);color:#0d1b3e;font-family:'Nunito',sans-serif;font-weight:900;font-size:15px;cursor:pointer;margin-bottom:12px">← Zurück zur Übersicht</button>
    <button onclick="sw('est')" style="width:100%;padding:14px;border-radius:14px;border:1.5px solid rgba(255,255,255,.2);background:transparent;color:rgba(255,255,255,.7);font-family:'Nunito',sans-serif;font-weight:900;font-size:15px;cursor:pointer">Direkt zum ESt-Quiz →</button>
  </div>`;
}

const STEUER_TOUR_STEPS = [
  // ── Schritt 1: Wofür gibt der Staat Geld aus? ──────────────────
  {
    id:'aufkommen_wohin',
    render(){
      return `
      <div style="background:linear-gradient(135deg,#060f22,#0a2a60);border-radius:18px;padding:20px;margin-bottom:14px">
        <div style="font-size:9px;font-family:'Space Mono',monospace;color:var(--cyan);font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">🏛️ Schritt 1 – Wofür zahlen wir?</div>
        <div style="font-size:20px;font-weight:900;color:#fff;margin-bottom:10px">Deutschland nimmt fast eine Billion Euro Steuern ein.</div>
        <div style="font-size:12px;color:rgba(255,255,255,.6);font-weight:700;line-height:1.7;margin-bottom:14px">947 Milliarden Euro im Jahr 2024. Das sind jeden Tag 2,6 Milliarden Euro. Jede Sekunde: 30.000 €.<br><br>Aber wofür fließt dieses Geld?</div>
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
          ${[
            {icon:'🏫',label:'Schulen & Bildung',mrd:'105 Mrd. €',color:'#1a3a8f'},
            {icon:'🏥',label:'Gesundheit & Soziales',mrd:'278 Mrd. €',color:'#005c36'},
            {icon:'🛣️',label:'Infrastruktur & Verkehr',mrd:'44 Mrd. €',color:'#8a4000'},
            {icon:'🛡️',label:'Innere & äußere Sicherheit',mrd:'92 Mrd. €',color:'#5c1a8f'},
            {icon:'🌍',label:'Entwicklungshilfe & Außenpolitik',mrd:'14 Mrd. €',color:'#006060'},
          ].map(x=>`<div style="display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.05);border-radius:10px;padding:10px 12px">
            <span style="font-size:22px;flex-shrink:0">${x.icon}</span>
            <div style="flex:1;font-size:12px;font-weight:900;color:#fff">${x.label}</div>
            <div style="font-size:11px;font-weight:900;color:var(--cyan);font-family:'Space Mono',monospace">${x.mrd}</div>
          </div>`).join('')}
        </div>
        <div style="background:rgba(0,194,224,.08);border:1px solid rgba(0,194,224,.2);border-radius:12px;padding:12px;font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.65">
          💡 <b style="color:#fff">Fazit:</b> Steuern sind nicht „Geld das der Staat nimmt" – sie sind der gemeinsame Topf aus dem alles finanziert wird was alle nutzen. Ohne Steuern: kein Lehrer, keine Feuerwehr, keine funktionierende Infrastruktur.
        </div>
      </div>
      <button onclick="tourNext()" style="width:100%;padding:13px;border-radius:13px;border:none;background:linear-gradient(135deg,var(--cyan),#0095c8);color:#0d1b3e;font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer">Weiter: Steuern im Alltag →</button>`;
    }
  },
  // ── Schritt 2: Steuern im Alltag ──────────────────────────────
  {
    id:'alltag',
    render(){
      const shown = tourAnswers['alltag_shown'];
      return `
      <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:18px;padding:20px;margin-bottom:14px">
        <div style="font-size:9px;font-family:'Space Mono',monospace;color:#ff8c42;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">🛒 Schritt 2 – Steuern überall</div>
        <div style="font-size:18px;font-weight:900;color:#fff;margin-bottom:12px">Ein ganz normaler Dienstag.</div>
        ${[
          {time:'7:15',scene:'Du duschst.',item:'Wassergebühren',steuer:'Nein! Gebühr – direkte Gegenleistung.',icon:'🚿',tax:false},
          {time:'8:00',scene:'Du kaufst einen Kaffee to go für 3,50 €.',item:'19 % USt = 0,56 €',steuer:'Ja – direkt im Preis enthalten.',icon:'☕',tax:true},
          {time:'12:00',scene:'Du fährst Bus. Ticket 2,50 €.',item:'7 % USt = 0,16 € + Fördergelder',steuer:'Ja – und ohne Subventionen würde das Ticket 8 € kosten.',icon:'🚌',tax:true},
          {time:'18:30',scene:'Du tankst Benzin für 50 €.',item:'Davon ~27 € Energiesteuer + 19 % USt',steuer:'Ja – fast 55 % des Benzinpreises sind Steuern und Abgaben.',icon:'⛽',tax:true},
          {time:'20:00',scene:'Du kaufst Brot für 2,50 €.',item:'7 % USt = 0,16 €',steuer:'Ja – Lebensmittel: ermäßigter Satz.',icon:'🍞',tax:true},
        ].map((s,i)=>`
          <div style="display:flex;gap:10px;margin-bottom:8px">
            <div style="font-size:9px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.3);font-weight:700;min-width:36px;padding-top:12px">${s.time}</div>
            <div style="flex:1;background:rgba(255,255,255,.05);border-left:3px solid ${s.tax?'#ff8c42':'rgba(255,255,255,.2)'};border-radius:0 10px 10px 0;padding:10px">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
                <span style="font-size:18px">${s.icon}</span>
                <span style="font-size:11px;font-weight:700;color:rgba(255,255,255,.75)">${s.scene}</span>
              </div>
              <div style="font-size:10px;font-weight:900;color:${s.tax?'#ff8c42':'rgba(255,255,255,.4)'}">${s.item} — ${s.steuer}</div>
            </div>
          </div>`).join('')}
      </div>
      <button onclick="tourNext()" style="width:100%;padding:13px;border-radius:13px;border:none;background:linear-gradient(135deg,#ff8c42,#c05800);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer">Weiter: Wer zahlt eigentlich Steuern? →</button>`;
    }
  },
  // ── Schritt 3: Wer ist steuerpflichtig? (Raten) ─────────────
  {
    id:'steuerpflicht_raten',
    render(){
      const CASES = [
        {avatar:'👶',name:'Mia, 8 Monate',desc:'Wohnt mit ihren Eltern in München. Hat kein Einkommen.',q:'Steuerpflichtig?',answer:'ja',richtig:'✅ Ja! § 1 Abs. 1 EStG gilt für ALLE natürlichen Personen mit Wohnsitz in Deutschland – unabhängig von Alter. Mia zahlt keine Steuer (kein Einkommen), ist aber steuerpflichtig.',falsch:'Nicht ganz. § 1 Abs. 1 EStG gilt für alle natürlichen Personen mit Wohnsitz in Deutschland – auch Babys. Steuerpflichtig ≠ Steuer zahlen!'},
        {avatar:'🧑‍🎓',name:'Tim, 17',desc:'Schüler in Berlin. Macht Nachhilfe, verdient 3.000 € im Jahr.',q:'Steuerpflichtig?',answer:'ja',richtig:'✅ Ja – Wohnsitz in DE, Einkünfte aus sonstiger Leistung. Aber: 3.000 € < Grundfreibetrag 12.336 € → zahlt keine Einkommensteuer.',falsch:'Ja! Tim hat Wohnsitz in DE → steuerpflichtig. Seine 3.000 € liegen unter dem Grundfreibetrag (12.336 €) → zahlt aber keine Steuer.'},
        {avatar:'🏖️',name:'Sandra, 32',desc:'Lebt in Spanien. Besitzt eine vermietete Wohnung in Hamburg.',q:'Steuerpflichtig in Deutschland?',answer:'ja',richtig:'✅ Ja – beschränkte Steuerpflicht (§ 1 Abs. 4 EStG)! Sandra hat keinen Wohnsitz mehr in DE, aber inländische Einkünfte (Mieteinnahmen § 49 Nr. 6 EStG) → nur diese werden in DE besteuert.',falsch:'Doch! § 1 Abs. 4 EStG: Kein Wohnsitz in DE, aber inländische Einkünfte (Miete) → beschränkte Steuerpflicht. Nur die deutschen Mieteinnahmen werden hier besteuert.'},
        {avatar:'🏢',name:'Müller GmbH',desc:'Unternehmen mit Sitz in Frankfurt. Macht 2 Mio. € Gewinn.',q:'Einkommensteuer-pflichtig?',answer:'nein',richtig:'✅ Nein – das EStG gilt nur für natürliche Personen (Menschen)! Eine GmbH zahlt stattdessen Körperschaftsteuer (§ 1 KStG) + Gewerbesteuer. Völlig andere Steuerart!',falsch:'Richtig! Die Müller GmbH ist eine juristische Person – sie zahlt keine Einkommensteuer, sondern Körperschaftsteuer (15 %) nach dem KStG. Das EStG gilt nur für Menschen!'},
      ];
      const answered = CASES.filter((_,i)=>tourAnswers['sp_'+i]!==undefined).length;
      const allDone = answered >= CASES.length;
      
      const casesHtml = CASES.map((pc,i)=>{
        const given = tourAnswers['sp_'+i];
        const isCorrect = given === pc.answer;
        return `<div style="background:rgba(255,255,255,.05);border:1.5px solid ${given===undefined?'rgba(255,255,255,.1)':isCorrect?'rgba(0,201,123,.4)':'rgba(255,77,109,.35)'};border-radius:14px;padding:14px;margin-bottom:8px">
          <div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px">
            <div style="font-size:28px;flex-shrink:0">${pc.avatar}</div>
            <div style="flex:1"><div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:2px">${pc.name}</div><div style="font-size:11px;color:rgba(255,255,255,.5);font-weight:700">${pc.desc}</div></div>
            ${given!==undefined?`<div style="font-size:18px;flex-shrink:0">${isCorrect?'✅':'❌'}</div>`:''}
          </div>
          <div style="font-size:12px;font-weight:800;color:rgba(255,255,255,.8);margin-bottom:8px">${pc.q}</div>
          ${given===undefined?`<div style="display:flex;gap:8px">
            <button onclick="tourAnswers['sp_${i}']='ja';const a=document.getElementById('ga');if(a)renderTourStep(a)" style="flex:1;padding:10px;border-radius:10px;border:2px solid rgba(0,194,224,.3);background:rgba(0,194,224,.08);color:var(--cyan);font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer">Ja</button>
            <button onclick="tourAnswers['sp_${i}']='nein';const a=document.getElementById('ga');if(a)renderTourStep(a)" style="flex:1;padding:10px;border-radius:10px;border:2px solid rgba(255,77,109,.3);background:rgba(255,77,109,.08);color:#ff4d6d;font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer">Nein</button>
          </div>`:`<div style="font-size:11px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.65;background:${isCorrect?'rgba(0,201,123,.08)':'rgba(255,77,109,.06)'};border:1px solid ${isCorrect?'rgba(0,201,123,.25)':'rgba(255,77,109,.2)'};border-radius:10px;padding:10px">${isCorrect?pc.richtig:pc.falsch}</div>`}
        </div>`;
      }).join('');

      return `
      <div style="background:linear-gradient(135deg,#0a1a3a,#1a3a8f);border-radius:16px;padding:14px 16px 12px;margin-bottom:12px">
        <div style="font-size:9px;font-family:'Space Mono',monospace;color:var(--cyan);font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:3px">🎯 Schritt 3 – Wer zahlt Steuern?</div>
        <div style="font-size:16px;font-weight:900;color:#fff;margin-bottom:3px">Erst raten – dann die Erklärung</div>
        <div style="font-size:11px;color:rgba(255,255,255,.45);font-weight:700">Alle 4 einschätzen, dann kommt die Auflösung</div>
      </div>
      ${casesHtml}
      ${allDone?`
      <div style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:14px;margin-bottom:12px">
        <div style="font-size:11px;font-weight:900;color:rgba(255,255,255,.8);margin-bottom:8px">📋 § 1 EStG – Die Kurzfassung</div>
        <div style="font-size:11px;color:rgba(255,255,255,.6);font-weight:700;line-height:1.75">
          <b style="color:var(--cyan)">Nur für natürliche Personen</b> – nicht für GmbH, AG etc.<br>
          <b style="color:var(--cyan)">Unbeschränkt (§ 1 Abs. 1):</b> Wohnsitz/Aufenthalt in DE → Welteinkommen<br>
          <b style="color:#ff8c42">Beschränkt (§ 1 Abs. 4):</b> Kein Wohnsitz, aber inländische Einkünfte<br>
          <b style="color:rgba(255,255,255,.5)">Steuerpflichtig ≠ Steuer zahlen</b> – erst ab Grundfreibetrag 12.336 €
        </div>
      </div>
      <button onclick="tourNext()" style="width:100%;padding:13px;border-radius:13px;border:none;background:linear-gradient(135deg,#1a3a8f,#3d0a6b);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer">Weiter: Die 7 Einkunftsarten →</button>`
      :`<div style="text-align:center;padding:10px;font-size:11px;color:rgba(255,255,255,.35);font-weight:700;font-family:'Space Mono',monospace">${answered} / ${CASES.length} beantwortet</div>`}`;
    }
  },
  // ── Schritt 4: 7 Einkunftsarten ──────────────────────────────
  {
    id:'einkunftsarten',
    render(){
      const eink = [
        {nr:1,para:'§ 13',icon:'🌾',name:'Land- & Forstwirtschaft',bsp:'Bauer der Getreide verkauft'},
        {nr:2,para:'§ 15',icon:'🏭',name:'Gewerbebetrieb',bsp:'Bäcker, GmbH-Gesellschafter, Händler'},
        {nr:3,para:'§ 18',icon:'⚕️',name:'Selbständige Arbeit',bsp:'Arzt, Rechtsanwalt, Steuerberater'},
        {nr:4,para:'§ 19',icon:'💼',name:'Nichtselbständige Arbeit',bsp:'Azubi, Angestellter, Beamter'},
        {nr:5,para:'§ 20',icon:'💰',name:'Kapitalvermögen',bsp:'Zinsen, Dividenden, Kursgewinne'},
        {nr:6,para:'§ 21',icon:'🏠',name:'Vermietung & Verpachtung',bsp:'Wohnung vermieten'},
        {nr:7,para:'§ 22',icon:'📦',name:'Sonstige Einkünfte',bsp:'Renten, gelegentliche Leistungen'},
      ];
      return `
      <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:18px;padding:16px;margin-bottom:14px">
        <div style="font-size:9px;font-family:'Space Mono',monospace;color:#ffd94a;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">💼 Schritt 4 – Die 7 Einkunftsarten</div>
        <div style="font-size:16px;font-weight:900;color:#fff;margin-bottom:4px">Woher kommt das Geld – und wie wird es besteuert?</div>
        <div style="font-size:11px;color:rgba(255,255,255,.5);font-weight:700;margin-bottom:14px">Das Einkommensteuergesetz kennt nur 7 Quellen. Alles was dort nicht auftaucht: steuerfrei.</div>
        <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:14px">
          ${eink.map(e=>`<div style="display:flex;gap:10px;align-items:center;background:rgba(255,255,255,.04);border-radius:10px;padding:9px 12px">
            <div style="font-size:9px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.3);font-weight:700;min-width:20px">${e.nr}</div>
            <div style="font-size:18px;flex-shrink:0">${e.icon}</div>
            <div style="flex:1">
              <div style="font-size:11px;font-weight:900;color:#fff">${e.name} <span style="font-size:9px;color:var(--cyan);font-family:'Space Mono',monospace">${e.para}</span></div>
              <div style="font-size:10px;color:rgba(255,255,255,.4);font-weight:700">${e.bsp}</div>
            </div>
          </div>`).join('')}
        </div>
        <div style="background:rgba(255,217,74,.08);border:1px solid rgba(255,217,74,.2);border-radius:10px;padding:10px 12px;font-size:10px;color:rgba(255,255,255,.65);font-weight:700;line-height:1.65">
          🔑 <b style="color:#ffd94a">Merksatz:</b> Einkunftsarten 1–3 = Gewinneinkunftsarten (§ 4/5 EStG). Einkunftsarten 4–7 = Überschusseinkunftsarten (Einnahmen ./. WK). Unterschied: wie der Gewinn/Überschuss ermittelt wird.
        </div>
      </div>
      <button onclick="tourNext()" style="width:100%;padding:13px;border-radius:13px;border:none;background:linear-gradient(135deg,#8a4000,#ff8c42);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer">Weiter: Umsatzsteuer – die unsichtbare Steuer →</button>`;
    }
  },
  // ── Schritt 5: Umsatzsteuer ───────────────────────────────────
  {
    id:'ust',
    render(){
      const quizAns = tourAnswers['ust_q'];
      return `
      <div style="background:linear-gradient(135deg,rgba(0,60,30,.6),rgba(0,100,50,.3));border:1.5px solid rgba(0,201,123,.2);border-radius:18px;padding:18px;margin-bottom:14px">
        <div style="font-size:9px;font-family:'Space Mono',monospace;color:#00c97b;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px">🛒 Schritt 5 – Umsatzsteuer</div>
        <div style="font-size:18px;font-weight:900;color:#fff;margin-bottom:10px">Die Steuer die du immer zahlst – ohne es zu merken</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">
          <div style="background:rgba(255,255,255,.08);border-radius:12px;padding:12px;text-align:center">
            <div style="font-size:28px;font-weight:900;color:#ff8c42;font-family:'Space Mono',monospace">19%</div>
            <div style="font-size:10px;font-weight:900;color:#fff;margin:4px 0">Regelsteuersatz</div>
            <div style="font-size:9px;color:rgba(255,255,255,.45);font-weight:700">Elektronik · Kleidung · Dienstleistungen</div>
          </div>
          <div style="background:rgba(255,255,255,.08);border-radius:12px;padding:12px;text-align:center">
            <div style="font-size:28px;font-weight:900;color:#00c97b;font-family:'Space Mono',monospace">7%</div>
            <div style="font-size:10px;font-weight:900;color:#fff;margin:4px 0">Ermäßigt</div>
            <div style="font-size:9px;color:rgba(255,255,255,.45);font-weight:700">Lebensmittel · Bücher · Taxi · Bahn</div>
          </div>
        </div>
        <div style="background:rgba(255,255,255,.06);border-radius:12px;padding:14px;margin-bottom:14px">
          <div style="font-size:12px;font-weight:900;color:#fff;margin-bottom:10px">❓ Schnell-Quiz: Welcher Satz gilt?</div>
          ${[
            {item:'🍕 Pizza beim Lieferdienst (ab 2026)',a7:'7%',a19:'19%',correct:'7'},
            {item:'💻 Laptop',a7:'7%',a19:'19%',correct:'19'},
            {item:'☕ Kaffee-Bohnen im Supermarkt',a7:'7%',a19:'19%',correct:'19'},
            {item:'📰 Zeitung',a7:'7%',a19:'19%',correct:'7'},
          ].map((q,i)=>{
            const k = 'ust_'+i;
            const g = tourAnswers[k];
            return `<div style="margin-bottom:8px">
              <div style="font-size:11px;font-weight:800;color:rgba(255,255,255,.8);margin-bottom:5px">${q.item}</div>
              <div style="display:flex;gap:6px">
                <button onclick="tourAnswers['${k}']='7';const a=document.getElementById('ga');if(a)renderTourStep(a)" style="flex:1;padding:7px;border-radius:8px;border:2px solid ${g==='7'?(q.correct==='7'?'rgba(0,201,123,.6)':'rgba(255,77,109,.6)'):'rgba(255,255,255,.15)'};background:${g==='7'?(q.correct==='7'?'rgba(0,201,123,.15)':'rgba(255,77,109,.1)'):'rgba(255,255,255,.05)'};color:${g==='7'?(q.correct==='7'?'#00c97b':'#ff4d6d'):'rgba(255,255,255,.6)'};font-family:'Nunito',sans-serif;font-weight:900;font-size:12px;cursor:pointer">7%</button>
                <button onclick="tourAnswers['${k}']='19';const a=document.getElementById('ga');if(a)renderTourStep(a)" style="flex:1;padding:7px;border-radius:8px;border:2px solid ${g==='19'?(q.correct==='19'?'rgba(0,201,123,.6)':'rgba(255,77,109,.6)'):'rgba(255,255,255,.15)'};background:${g==='19'?(q.correct==='19'?'rgba(0,201,123,.15)':'rgba(255,77,109,.1)'):'rgba(255,255,255,.05)'};color:${g==='19'?(q.correct==='19'?'#00c97b':'#ff4d6d'):'rgba(255,255,255,.6)'};font-family:'Nunito',sans-serif;font-weight:900;font-size:12px;cursor:pointer">19%</button>
              </div>
              ${g?`<div style="font-size:10px;font-weight:700;color:${g===q.correct?'#00c97b':'#ff4d6d'};margin-top:3px">${g===q.correct?'✓ Richtig!':'✗ '+q.item.split(' ')[1]+': '+q.correct+' %'}</div>`:''}
            </div>`;
          }).join('')}
        </div>
      </div>
      <button onclick="tourNext()" style="width:100%;padding:13px;border-radius:13px;border:none;background:linear-gradient(135deg,#005c36,#00c97b);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer">Fertig! Zusammenfassung →</button>`;
    }
  },
];


// ── Absetz Overlay ────────────────────────────────────────────────────────
const ABSETZ_OV = {
  fahrt:{
    icon:'🚗', title:'Entfernungspauschale – Fahrten zur Arbeit',
    norm:'§ 9 Abs. 1 Satz 3 Nr. 4 EStG · StÄndG 2025 · R 9.10 LStR',
    recht:`<b>Voraussetzung – berufliche Veranlassung (§ 9 Abs. 1 Satz 1 EStG):</b> Werbungskosten sind Aufwendungen zur Erwerbung, Sicherung und Erhaltung der Einnahmen. Der berufliche Veranlassungszusammenhang ist auf Nachfrage gegenüber dem Finanzamt nachzuweisen (R 9.1 LStR).<br><br>
<b>Entfernungspauschale ab VZ 2026 (StÄndG 2025):</b> Einheitlich <b>0,38 €/km ab dem 1. km</b> (einfache Strecke Wohnung ↔ erste Tätigkeitsstätte). Die frühere Staffelung (0,30 € bis km 20) entfällt. Gilt für alle Verkehrsmittel; bei tatsächlich höheren ÖPNV-Kosten können diese alternativ angesetzt werden.<br><br>
<b>Begrenzung:</b> Grds. max. 4.500 €/Jahr – Ausnahme: PKW eigener oder zur Nutzung überlassener (dann unbegrenzt, aber Nachweis durch Fahrtenbuch o.Ä.).<br><br>
<b>Ausschluss:</b> Kein gleichzeitiger Ansatz mit der Homeoffice-Pauschale für denselben Kalendertag (§ 9 Abs. 1 Nr. 4 Satz 3 EStG).`,
    example:'Azubi Lena (22 km zur Ausbildungsstätte, 180 Arbeitstage): 180 × 22 × 0,38 € = <b>1.504,80 €</b> WK. Übersteigt den AN-Pauschbetrag (1.230 € · § 9a Nr. 1a EStG) → Steuererklärung lohnt sich.',
    calc:true
  },
  laptop:{
    icon:'💻', title:'Arbeitsmittel – Laptop, PC, Tablet, Handy',
    norm:'§ 9 Abs. 1 Satz 3 Nr. 6 EStG · § 6 Abs. 2 EStG · BMF-Schreiben v. 22.02.2022',
    recht:`<b>Arbeitsmittel (§ 9 Abs. 1 Satz 3 Nr. 6 EStG):</b> Wirtschaftsgüter, die typischerweise beruflich genutzt werden. Berufliche Veranlassung ist Voraussetzung und auf Anforderung nachzuweisen.<br><br>
<b>GWG-Sofortabschreibung (§ 6 Abs. 2 EStG):</b> Anschaffungskosten bis 800 € (netto, ohne USt). Da Arbeitnehmer keinen Vorsteuerabzug haben, gilt für sie der Bruttokaufpreis als Anschaffungskosten → Grenze: <b>952 € brutto</b> (800 € × 1,19).<br><br>
<b>Wahlrecht 1-Jahres-Nutzungsdauer (BMF-Schreiben v. 22.02.2022):</b> Für Computer-Hardware (Notebook, Tablet, Desktop, externe Monitore, Maus, Tastatur etc.) und -Software kann einheitlich eine <b>Nutzungsdauer von 1 Jahr</b> angesetzt werden. Dies ist ein <b>Wahlrecht</b> – keine Pflicht. Alternativ weiterhin Abschreibung über tatsächliche Nutzungsdauer möglich (i.d.R. 3 Jahre). Gilt ab VZ 2021.<br><br>
<b>Gemischte Nutzung:</b> Anteilig nach beruflichem Nutzungsanteil. Bei < 10 % beruflicher Nutzung: kein Abzug. Privatanteil ist glaubhaft zu machen, das FA kann Nachweis verlangen.`,
    example:'AN Jonas kauft Notebook für 1.190 € brutto (1.000 € netto). 70 % berufliche Nutzung. Mit Wahlrecht BMF 2022 (1 Jahr ND): 70 % × 1.190 € = <b>833 € WK im Anschaffungsjahr</b>. Ohne Wahlrecht: 833 €/3 Jahre = 278 €/Jahr.'
  },
  home:{
    icon:'🏠', title:'Homeoffice-Pauschale',
    norm:'§ 4 Abs. 5 Satz 1 Nr. 6b EStG i.V.m. § 9 Abs. 5 EStG',
    recht:`<b>Rechtliche Grundlage:</b> Seit VZ 2023 dauerhaft als Vereinfachungsregelung: Für jeden Kalendertag, an dem die Tätigkeit <b>überwiegend in der häuslichen Wohnung</b> ausgeübt wird und keine Tätigkeitsstätte außerhalb der Wohnung aufgesucht wird, kann die Pauschale abgezogen werden.<br><br>
<b>Höhe:</b> <b>6 € pro Homeoffice-Tag</b>, maximal <b>210 Tage = 1.260 €/Jahr</b>. Kein Nachweis, kein abgetrenntes Arbeitszimmer erforderlich.<br><br>
<b>Ausschluss Doppelnutzung:</b> Für denselben Kalendertag kann nicht gleichzeitig die Entfernungspauschale geltend gemacht werden.<br><br>
<b>Abgrenzung Arbeitszimmer (§ 4 Abs. 5 Nr. 6b EStG):</b> Wer ein <b>häusliches Arbeitszimmer</b> als Mittelpunkt der gesamten Tätigkeit hat, kann alternativ die tatsächlichen Kosten (anteilige Miete, Strom, etc.) unbegrenzt absetzen – oder weiterhin die Pauschale wählen.`,
    example:'Lehrerin Andrea, 120 Homeoffice-Tage: 120 × 6 € = <b>720 € WK</b>. Zusammen mit anderen WK (Fahrt, Fachliteratur) ggf. über AN-Pauschbetrag 1.230 € → Erklärung lohnend.'
  },
  fortbild:{
    icon:'📚', title:'Fort- und Weiterbildungskosten',
    norm:'§ 9 Abs. 1 Satz 3 Nr. 6 EStG · § 9 Abs. 6 EStG · § 10 Abs. 1 Nr. 7 EStG',
    recht:`<b>Weiterbildung im ausgeübten Beruf:</b> Aufwendungen für berufliche Fort- und Weiterbildung sind unbegrenzt als Werbungskosten abziehbar, wenn ein unmittelbarer Zusammenhang mit der ausgeübten Tätigkeit besteht. Absetzbar: Kursgebühren, Prüfungsgebühren, Fachliteratur, Fahrtkosten (0,38 €/km), Verpflegungspauschalen bei mehrtägigen Seminaren.<br><br>
<b>Erstausbildung / Erststudium (§ 9 Abs. 6 EStG):</b> Kosten der ersten Berufsausbildung ohne vorangehende Berufsausbildung sind <b>keine</b> Werbungskosten, sondern nur <b>Sonderausgaben (§ 10 Abs. 1 Nr. 7 EStG)</b>, max. 6.000 €/Jahr.<br><br>
<b>Zweitstudium / Zweitausbildung:</b> Vollständig als Werbungskosten absetzbar – auch wenn noch kein Einkommen erzielt wird (vorweggenommene WK, Verlustvortrag § 10d EStG).`,
    example:'Azubi Kai besucht nach der Ausbildung einen Steuerfachkurs: 450 € Kursgebühr + 120 € Literatur + 80 € Fahrt = <b>650 € WK</b>. Berufliche Veranlassung: Kurs dient der Vertiefung steuerlicher Kenntnisse.'
  },
  spende:{
    icon:'🎁', title:'Spenden – Sonderausgaben',
    norm:'§ 10b EStG · § 50 EStDV · § 63 AO',
    recht:`<b>Sonderausgaben (§§ 10–10b EStG):</b> Sonderausgaben sind Aufwendungen, die weder WK/BA noch außergewöhnliche Belastungen sind, aber vom Gesetz ausdrücklich zum Abzug zugelassen werden. Sie mindern den <b>Gesamtbetrag der Einkünfte</b>.<br><br>
<b>Zuwendungen / Spenden (§ 10b EStG):</b> Geld- oder Sachzuwendungen an gemeinnützige, mildtätige oder kirchliche Körperschaften (§§ 52–54 AO), die vom Finanzamt als steuerbegünstigt anerkannt sind.<br><br>
<b>Höchstbetrag:</b> 20 % des Gesamtbetrags der Einkünfte oder 4 ‰ der Summe aus Umsatz + Löhnen/Gehältern. Übersteigender Betrag: Spendenübertrag in Folgejahre (§ 10b Abs. 1 Satz 9 EStG).<br><br>
<b>Nachweispflicht (§ 50 EStDV):</b> Bis 300 € genügt Kontoauszug mit Empfänger. Ab 300 € zwingend amtliche Zuwendungsbestätigung.`,
    example:'Max (30.000 € GdE) spendet 4.500 € an Rotes Kreuz. Höchstbetrag: 20 % × 30.000 € = 6.000 € → voll absetzbar. Bei 25 % Grenzsteuersatz: Steuerersparnis ca. <b>1.125 €</b>.'
  },
  krank:{
    icon:'🩺', title:'Außergewöhnliche Belastungen – Krankheitskosten',
    norm:'§ 33 EStG · § 33a EStG · § 33b EStG · R 33.1–33.4 EStR',
    recht:`<b>Außergewöhnliche Belastungen (§ 33 EStG):</b> Aufwendungen, die (1) <b>außergewöhnlich</b> (dem Grunde und der Höhe nach verglichen mit Gleichstehenden), (2) <b>zwangsläufig</b> (aus rechtlichen, tatsächlichen oder sittlichen Gründen unvermeidbar) und (3) <b>notwendig und angemessen</b> sind. Mindern den Gesamtbetrag der Einkünfte.<br><br>
<b>Zumutbare Belastung (§ 33 Abs. 3 EStG):</b> Eigenanteil je nach Einkommen und Familienstand: 1–7 % des GdE. Nur was darüber liegt, wird steuerlich anerkannt. Die zumutbare Belastung ist <b>stufenweise</b> zu berechnen (BFH-Urt. v. 19.01.2017, VI R 75/14).<br><br>
<b>Typische Fälle:</b> Zuzahlungen Zahnarzt/Brille, Medikamente (Rezept), Kuraufenthalte (ärztliche Verordnung!), Pflegekosten.<br><br>
<b>Behinderten-Pauschbetrag (§ 33b EStG):</b> Wird alternativ gewährt – ohne Nachweis einzelner Kosten, ohne Abzug der zumutbaren Belastung.`,
    example:'Ledig, 35.000 € GdE, Zahnarzt 2.400 €. Zumutbare Belastung: 35.000 × 3 % = 1.050 €. Abziehbar: 2.400 − 1.050 = <b>1.350 €</b> AuBe.'
  },
  kleidung:{
    icon:'👔', title:'Arbeitskleidung – typische Berufskleidung',
    norm:'§ 9 Abs. 1 Satz 3 Nr. 6 EStG · R 9.12 LStR · BFH-Rspr.',
    recht:`<b>Nur typische Berufskleidung absetzbar:</b> Arbeitsmittel sind Kleidungsstücke, die nach ihrer Beschaffenheit und Bestimmung nahezu ausschließlich für die berufliche Nutzung geeignet sind. Drei anerkannte Kategorien:<br><br>
(1) <b>Schutzkleidung</b> (Sicherheitsschuhe, Helm, Warnweste)<br>
(2) <b>Uniformen und Amtskleidung</b> (Polizei, Feuerwehr, Richterrobe, Arztkleidung mit Institutionskennzeichen)<br>
(3) <b>Kleidung mit beruflichem Kennzeichen</b> – z.B. Dienstkleidung mit <b>aufgenähtem Firmenlogo</b> oder -badge, das eine private Nutzung unzumutbar erscheinen lässt<br><br>
<b>Nicht absetzbar – Alltagskleidung:</b> Dunkle Anzüge, schwarze Kleidung, Business-Kleidung und andere handelsübliche Kleidung sind auch dann <b>nicht</b> absetzbar, wenn sie ausschließlich zur Arbeit getragen werden (BFH v. 13.11.1987; ständige Rspr.). Maßgeblich: objektive Eignung zur privaten Mitbenutzung.<br><br>
<b>Reinigungskosten:</b> Kosten für Reinigung, Pflege und Reparatur von anerkannter Berufskleidung sind ebenfalls absetzbar.`,
    example:'Azubi am Finanzamt trägt Dienstkleidung mit Behördenlogo – absetzbar. Ein Anwalt kauft sich teure schwarze Anzüge nur für die Arbeit – nicht absetzbar (BFH), da privat nutzbar. Rettungssanitäter: Schutzkleidung → absetzbar.'
  }
};


function absetzOv(id){
  const d = ABSETZ_OV[id];
  if(!d) return;
  const old = document.getElementById('absetz-full-ov');
  if(old) old.remove();
  const ov = document.createElement('div');
  ov.id = 'absetz-full-ov';
  ov.style.cssText = 'position:fixed;inset:0;z-index:9800;background:rgba(5,10,30,.85);backdrop-filter:blur(6px);display:flex;align-items:flex-end;justify-content:center;padding:0';
  ov.onclick = e => { if(e.target===ov) ov.remove(); };

  const calcHtml = d.calc ? `
    <div style="background:rgba(0,194,224,.08);border:1px solid rgba(0,194,224,.25);border-radius:14px;padding:14px;margin-top:14px">
      <div style="font-size:11px;font-weight:900;color:var(--cyan);margin-bottom:10px">🧮 Rechner – Entfernungspauschale 2026</div>
      <div style="display:flex;gap:8px;margin-bottom:8px">
        <div style="flex:1">
          <div style="font-size:10px;color:rgba(255,255,255,.5);font-weight:700;margin-bottom:4px">Arbeitstage/Jahr</div>
          <input id="fahrt-tage" type="number" value="220" min="1" max="365" oninput="calcFahrt()" style="width:100%;padding:8px 10px;border-radius:8px;border:1.5px solid rgba(255,255,255,.15);background:rgba(255,255,255,.08);color:#fff;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;box-sizing:border-box">
        </div>
        <div style="flex:1">
          <div style="font-size:10px;color:rgba(255,255,255,.5);font-weight:700;margin-bottom:4px">Einfache km</div>
          <input id="fahrt-km" type="number" value="22" min="1" max="500" oninput="calcFahrt()" style="width:100%;padding:8px 10px;border-radius:8px;border:1.5px solid rgba(255,255,255,.15);background:rgba(255,255,255,.08);color:#fff;font-family:'Nunito',sans-serif;font-weight:800;font-size:14px;box-sizing:border-box">
        </div>
      </div>
      <div id="fahrt-result" style="background:rgba(0,194,224,.15);border-radius:10px;padding:10px;text-align:center">
        <div style="font-size:11px;color:rgba(255,255,255,.5);font-weight:700">Entfernungspauschale</div>
        <div id="fahrt-val" style="font-size:24px;font-weight:900;color:var(--cyan);font-family:'Space Mono',monospace">1.835,20 €</div>
        <div style="font-size:10px;color:rgba(255,255,255,.4);font-weight:700;margin-top:2px">220 Tage × 22 km × 0,38 €</div>
      </div>
    </div>` : '';

  ov.innerHTML = `<div style="background:#0d1b3e;border-radius:24px 24px 0 0;width:100%;max-width:520px;max-height:88vh;overflow-y:auto;padding:24px 20px 36px">
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
      <span style="font-size:32px">${d.icon}</span>
      <div style="flex:1">
        <div style="font-size:15px;font-weight:900;color:#fff">${d.title}</div>
        <div style="font-size:9px;font-family:'Space Mono',monospace;color:var(--cyan);font-weight:700;margin-top:2px">${d.norm}</div>
      </div>
      <button onclick="document.getElementById('absetz-full-ov').remove()" style="background:rgba(255,255,255,.1);border:none;color:rgba(255,255,255,.6);border-radius:50%;width:30px;height:30px;font-size:16px;cursor:pointer;flex-shrink:0">✕</button>
    </div>
    <div style="font-size:12px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.7;background:rgba(255,255,255,.04);border-radius:12px;padding:12px;margin-bottom:12px">${d.recht}</div>
    <div style="background:rgba(0,201,123,.08);border:1px solid rgba(0,201,123,.25);border-radius:12px;padding:12px">
      <div style="font-size:10px;font-weight:900;color:#00c97b;margin-bottom:4px">📋 Beispiel</div>
      <div style="font-size:12px;color:rgba(255,255,255,.75);font-weight:700;line-height:1.6">${d.example}</div>
    </div>
    ${calcHtml}
  </div>`;
  document.body.appendChild(ov);
  if(d.calc) setTimeout(calcFahrt, 50);
}

function calcFahrt(){
  const t = parseInt(document.getElementById('fahrt-tage')?.value)||0;
  const k = parseInt(document.getElementById('fahrt-km')?.value)||0;
  const result = t * k * 0.38;
  const el = document.getElementById('fahrt-val');
  const hint = document.querySelector('#fahrt-result div:last-child');
  if(el) el.textContent = result.toLocaleString('de-DE',{minimumFractionDigits:2,maximumFractionDigits:2}) + ' €';
  if(hint) hint.textContent = `${t} Tage × ${k} km × 0,38 €`;
}


// ── Tax animations (profi hero counter) ──────────────────────────────────
let taxLiveInterval = null;
function startTaxAnimations(){
  const el = document.getElementById('tax-animated-total');
  if(!el) return;
  const target = 947.7;
  let current = 0;
  const steps = 60, duration = 1600;
  const increment = target / steps;
  const t = setInterval(()=>{
    current = Math.min(current + increment, target);
    el.textContent = current.toFixed(1).replace('.',',') + ' Mrd. €';
    if(current >= target) clearInterval(t);
  }, duration / steps);
  if(taxLiveInterval) clearInterval(taxLiveInterval);
  const liveEl = document.getElementById('tax-live-num');
  if(!liveEl) return;
  const perSec = 30044, liveStart = Date.now();
  taxLiveInterval = setInterval(()=>{
    if(!document.getElementById('tax-live-num')){ clearInterval(taxLiveInterval); return; }
    const elapsed = (Date.now() - liveStart) / 1000;
    document.getElementById('tax-live-num').textContent = Math.round(elapsed * perSec).toLocaleString('de-DE') + ' €';
  }, 200);
}

// ── Absetz tile helper ────────────────────────────────────────────────────
function absetzTile(id, emoji, title, norm, bodyHtml){
  if(!window.ABSETZ_DATA) window.ABSETZ_DATA = {};
  window.ABSETZ_DATA[id] = { emoji:emoji, title:title, norm:norm, body:bodyHtml };
  return '<div class="absetz-tile" data-absetz="'+id+'" onclick="toggleAbsetz(this.dataset.absetz)">'
    +'<div style="display:flex;align-items:center;gap:10px">'
      +'<span style="font-size:20px;flex-shrink:0;width:28px;text-align:center">'+emoji+'</span>'
      +'<div class="u-flex-min">'
        +'<div style="font-size:12px;font-weight:900;color:var(--navy);line-height:1.3">'+title+'</div>'
        +'<div style="font-size:10px;font-weight:700;color:var(--blue);margin-top:2px;font-family:Space Mono,monospace">'+norm+'</div>'
      +'</div>'
      +'<span style="font-size:18px;color:#c0d4ff;flex-shrink:0">›</span>'
    +'</div>'
    +'</div>';
}

// ── Toggle absetz overlay ─────────────────────────────────────────────────
function toggleAbsetz(id){
  if(!window.ABSETZ_DATA) return;
  var data = window.ABSETZ_DATA[id];
  if(!data) return;
  var old = document.getElementById('absetz-ov');
  if(old) old.remove();
  var ov = document.createElement('div');
  ov.id = 'absetz-ov';
  ov.className = 'absetz-overlay';
  ov.onclick = function(e){ if(e.target===ov) ov.remove(); };
  ov.innerHTML = '<div class="absetz-overlay-box">'
    +'<div class="absetz-overlay-header">'
      +'<button class="absetz-overlay-close" onclick="document.getElementById(\'absetz-ov\').remove()">✕</button>'
      +'<div style="font-size:10px;font-family:Space Mono,monospace;color:rgba(255,255,255,.5);margin-bottom:4px">'+data.norm+'</div>'
      +'<div style="font-size:18px;font-weight:900">'+data.emoji+' '+data.title+'</div>'
    +'</div>'
    +'<div class="absetz-overlay-body">'+data.body+'</div>'
    +'</div>';
  document.body.appendChild(ov);
}


// ── Absetz overlay with full legal detail ────────────────────────────


// ==================== BASICS ====================
function renderBasics(a){
  a.classList.add('basics-dark-mode');
  a.classList.remove('etag-mode');

  // ── Live stats from catStats ──────────────────────────────────────
  const catDef = [
    {key:'est',   icon:'💼', label:'ESt',       mode:'est',         color:'#1a3a8f'},
    {key:'ust',   icon:'🛒', label:'USt',       mode:'ust',         color:'#ff8c42'},
    {key:'ao',    icon:'⚖️', label:'AO',        mode:'ao',          color:'#7b5ea7'},
    {key:'bilanz',icon:'📋', label:'Bilanz',    mode:'bilanz',      color:'#00bcd4'},
    {key:'recht', icon:'🏛️', label:'Recht',     mode:'recht',       color:'#005c36'},
    {key:'gewst', icon:'🏭', label:'GewSt',     mode:'gewst',       color:'#4a7a00'},
    {key:'kurios',icon:'🤯', label:'Kurioses',  mode:'kurios',      color:'#b84a00'},
    {key:'gesellschaft',icon:'🏢',label:'Gesellschaft',mode:'gesellschaft',color:'#5c1a8f'},
  ];

  const totalQ = catDef.reduce((s,ct)=>{ const st=catStats[ct.key]; return s+(st?st.t:0); },0);
  const totalC = catDef.reduce((s,ct)=>{ const st=catStats[ct.key]; return s+(st?st.c:0); },0);
  const ovPct  = totalQ>0 ? Math.round(totalC/totalQ*100) : 0;

  // Quiz kacheln with per-topic stats
  const quizKacheln = catDef.map(ct=>{
    const st  = catStats[ct.key];
    const pct = st&&st.t>0 ? Math.round(st.c/st.t*100) : -1;
    const hs  = highscores[ct.mode];
    const col = pct<0?'rgba(255,255,255,.25)':pct>=80?'#00c97b':pct>=50?'var(--cyan)':'#ff8c42';
    const bar = pct<0?0:pct;
    return `<div onclick="sw('${ct.mode}')" style="background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.1);border-radius:14px;padding:11px 12px;cursor:pointer;transition:all .18s;position:relative;overflow:hidden" onmouseover="this.style.background='rgba(255,255,255,.09)';this.style.borderColor='${ct.color}66'" onmouseout="this.style.background='rgba(255,255,255,.05)';this.style.borderColor='rgba(255,255,255,.1)'">
      <div style="position:absolute;bottom:0;left:0;height:3px;width:${bar}%;background:${col};transition:width .4s"></div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:5px">
        <span style="font-size:18px">${ct.icon}</span>
        <span style="font-size:12px;font-weight:900;color:#fff;flex:1">${ct.label}</span>
        <span style="font-size:10px;font-weight:900;color:${col};font-family:'Space Mono',monospace">${pct<0?'–':pct+'%'}</span>
      </div>
      <div style="font-size:9px;color:rgba(255,255,255,.35);font-weight:700;font-family:'Space Mono',monospace">${st&&st.t>0?st.c+'/'+st.t+' richtig':'Noch nicht gespielt'}${hs?' · Best: '+hs.score+'/'+hs.total:''}</div>
    </div>`;
  }).join('');

  a.innerHTML = `<div class="basics" style="color:#fff">

<!-- ══ DASHBOARD HERO ════════════════════════════════════════════════ -->
<div style="background:linear-gradient(145deg,#060f22,#0d2b5e 55%,#1a0060);border-radius:22px;padding:20px 18px;margin-bottom:14px;position:relative;overflow:hidden">
  <div style="position:absolute;right:-10px;top:-10px;font-size:100px;opacity:.04;line-height:1">📊</div>
  <div style="font-size:9px;font-family:'Space Mono',monospace;color:var(--cyan);font-weight:700;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:6px">Dein Lernstand · Fortgeschritten</div>
  <div style="font-size:20px;font-weight:900;color:#fff;margin-bottom:12px">
    ${totalQ===0 ? 'Bereit? Starte mit einem Thema ↓' : ovPct>=80 ? '🏆 Sehr guter Stand – weiter so!' : ovPct>=50 ? '📈 Guter Fortschritt – dran bleiben' : '🎯 Noch Luft nach oben – übe weiter'}
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px">
    <div style="background:rgba(255,255,255,.08);border-radius:12px;padding:10px 8px;text-align:center">
      <div style="font-size:20px;font-weight:900;color:var(--cyan);font-family:'Space Mono',monospace">${totalQ}</div>
      <div style="font-size:9px;color:rgba(255,255,255,.4);font-weight:700;margin-top:2px">Fragen gespielt</div>
    </div>
    <div style="background:rgba(255,255,255,.08);border-radius:12px;padding:10px 8px;text-align:center">
      <div style="font-size:20px;font-weight:900;color:${ovPct>=80?'#00c97b':ovPct>=50?'var(--cyan)':'#ff8c42'};font-family:'Space Mono',monospace">${totalQ>0?ovPct+'%':'–'}</div>
      <div style="font-size:9px;color:rgba(255,255,255,.4);font-weight:700;margin-top:2px">Richtigquote</div>
    </div>
    <div style="background:rgba(255,255,255,.08);border-radius:12px;padding:10px 8px;text-align:center">
      <div style="font-size:20px;font-weight:900;color:#ffd94a;font-family:'Space Mono',monospace">${catDef.filter(ct=>{const s=catStats[ct.key];return s&&s.t>0&&s.c/s.t>=0.8;}).length}</div>
      <div style="font-size:9px;color:rgba(255,255,255,.4);font-weight:700;margin-top:2px">Themen ≥80%</div>
    </div>
  </div>
  <div style="display:flex;gap:8px">
    <button onclick="sw('meinbereich')" style="flex:1;padding:11px;border-radius:12px;border:none;background:linear-gradient(135deg,var(--cyan),#0095c8);color:#0d1b3e;font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer">📊 Mein Bereich</button>
    <button onclick="sw('meinbereich');setTimeout(()=>renderDaily(document.getElementById('ga')),50)" style="flex:1;padding:11px;border-radius:12px;border:1.5px solid rgba(255,217,74,.3);background:rgba(255,217,74,.08);color:#ffd94a;font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer">📅 Daily</button>
  </div>
</div>

<!-- ══ ZVE-SCHEMA ════════════════════════════════════════════════════ -->
<!-- ZVE -->
<div class="bsec" style="margin-top:18px">🧮 Der Weg zum zu versteuernden Einkommen</div>
<div id="tour-zve" style="background:#fff;border-radius:16px;border:2px solid #dde5f5;padding:16px;margin-bottom:10px">
  <div style="font-size:10px;font-weight:700;color:#aaa;font-family:'Space Mono',monospace;margin-bottom:14px;letter-spacing:.5px">§ 2 Abs. 1–5 EStG · Prüfungsrelevante Schrittfolge</div>

  <div class="zve-step"><div class="zve-badge blue">①</div><div class="zve-content"><div class="zve-title">Einnahmen je Einkunftsart</div><div class="zve-hint">Summe aller Einnahmen aus den 7 Einkunftsarten (§ 2 Abs. 1 EStG)</div></div></div>
  <div class="zve-minus">− Werbungskosten / Betriebsausgaben <span class="zve-para">§ 9 / § 4 Abs. 4 EStG · Pauschale 1.230 €</span></div>
  <div class="zve-result-line">= <b>Einkünfte je Einkunftsart</b> <span class="zve-para">§ 2 Abs. 2 EStG</span></div>
  <div class="zve-minus">± Verlustausgleich (horizontaler + vertikaler) <span class="zve-para">§ 2 Abs. 3 EStG</span></div>
  <div class="zve-result-line">= <b>Summe der Einkünfte</b> <span class="zve-para">§ 2 Abs. 3 EStG</span></div>
  <div class="zve-minus">− Altersentlastungsbetrag <span class="zve-para">§ 24a EStG</span></div>
  <div class="zve-minus">− Entlastungsbetrag Alleinerziehende <span class="zve-para">§ 24b EStG</span></div>
  <div class="zve-minus">− Freibetrag Land- & Forstwirtschaft <span class="zve-para">§ 13 Abs. 3 EStG</span></div>

  <div class="zve-step" style="margin-top:8px"><div class="zve-badge purple">②</div><div class="zve-content"><div class="zve-title">Gesamtbetrag der Einkünfte (GdE)</div><div class="zve-hint">§ 2 Abs. 3 EStG – Ausgangspunkt für Verlustabzug und Sonderausgaben</div></div></div>
  <div class="zve-minus">− Verlustabzug (Verlustrücktrag / Verlustvortrag) <span class="zve-para">§ 10d EStG</span></div>
  <div class="zve-minus">− Sonderausgaben <span class="zve-para">§ 10, 10a, 10b, 10c EStG: KV/PV, Altersvorsorge, Spenden, Kirchensteuer</span></div>
  <div class="zve-minus">− Außergewöhnliche Belastungen <span class="zve-para">§ 33, 33a, 33b EStG: zumutbare Eigenbelastung beachten!</span></div>

  <div class="zve-step" style="margin-top:8px"><div class="zve-badge" style="background:#b84a00">③</div><div class="zve-content"><div class="zve-title">Einkommen</div><div class="zve-hint">§ 2 Abs. 4 EStG – Zwischenschritt, oft in Klausuren gefragt!</div></div></div>
  <div class="zve-minus">− Kinderfreibeträge (Günstigerprüfung gg. Kindergeld) <span class="zve-para">§ 31, § 32 Abs. 6 EStG</span></div>
  <div class="zve-minus">− Härteausgleich <span class="zve-para">§ 46 Abs. 3, 5 EStG · § 70 EStDV</span></div>

  <div class="zve-step zve-final" style="margin-top:8px"><div class="zve-badge green">④</div><div class="zve-content"><div class="zve-title">zu versteuerndes Einkommen (zvE)</div><div class="zve-hint">§ 2 Abs. 5 EStG – Bemessungsgrundlage für den Steuertarif</div></div></div>
  <div class="zve-minus">× Steuertarif § 32a EStG (0 %→14 %→42 %→45 %)</div>
  <div class="zve-result-line">= <b>tarifliche Einkommensteuer</b></div>
  <div class="zve-minus">− Steuerermäßigungen <span class="zve-para">§ 35 GewSt-Anrechnung · § 35a Haushaltsnah · § 34c Anrechnung ausl. Steuern</span></div>
  <div class="zve-result-line zve-end">= <b>festzusetzende Einkommensteuer</b> 💰</div>

  <div style="background:#fffbea;border:2px solid #ffe082;border-radius:10px;padding:10px 12px;margin-top:12px;font-size:11px;font-weight:700;color:#7a5c00;line-height:1.6">
    ⚡ <b>Klausurtipp:</b> Die Schritte §-genau abarbeiten! Häufigster Fehler: den Zwischenschritt „Einkommen" (§ 2 Abs. 4) überspringen und direkt vom GdE zum zvE gehen. Prüfer achten darauf.
  </div>
</div>

<!-- GUTACHTENSTIL -->
<div class="bsec" style="margin-top:4px">✍️ Gutachtenstil – so schreibst du Steuerrecht</div>
<div style="background:#fff;border-radius:16px;border:2px solid #dde5f5;padding:16px;margin-bottom:10px">

  <!-- OVSE Schema -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:14px">
    <div style="background:#0d2b5e;border-radius:10px;padding:10px 12px">
      <div style="font-size:16px;font-weight:900;color:#fff;font-family:'Space Mono',monospace">O</div>
      <div style="font-size:11px;font-weight:900;color:rgba(255,255,255,.85);margin-top:2px">Obersatz</div>
      <div style="font-size:10px;color:rgba(255,255,255,.5);margin-top:3px;line-height:1.4">„X könnte gemäß § … steuerpflichtig sein."</div>
    </div>
    <div style="background:#0a5c3a;border-radius:10px;padding:10px 12px">
      <div style="font-size:16px;font-weight:900;color:#fff;font-family:'Space Mono',monospace">V</div>
      <div style="font-size:11px;font-weight:900;color:rgba(255,255,255,.85);margin-top:2px">Voraussetzungen (TBM)</div>
      <div style="font-size:10px;color:rgba(255,255,255,.5);margin-top:3px;line-height:1.4">Alle Tatbestandsmerkmale der Norm einzeln nennen</div>
    </div>
    <div style="background:#5c2d91;border-radius:10px;padding:10px 12px">
      <div style="font-size:16px;font-weight:900;color:#fff;font-family:'Space Mono',monospace">S</div>
      <div style="font-size:11px;font-weight:900;color:rgba(255,255,255,.85);margin-top:2px">Subsumtion</div>
      <div style="font-size:10px;color:rgba(255,255,255,.5);margin-top:3px;line-height:1.4">Sachverhalt unter jeden TBM subsumieren</div>
    </div>
    <div style="background:#b84a00;border-radius:10px;padding:10px 12px">
      <div style="font-size:16px;font-weight:900;color:#fff;font-family:'Space Mono',monospace">E</div>
      <div style="font-size:11px;font-weight:900;color:rgba(255,255,255,.85);margin-top:2px">Ergebnis</div>
      <div style="font-size:10px;color:rgba(255,255,255,.5);margin-top:3px;line-height:1.4">Klares Ja/Nein mit Normzitat</div>
    </div>
  </div>

  <!-- TBM Checkliste -->
  <div style="background:#f8faff;border-radius:12px;border:2px solid #dde5f5;padding:12px;margin-bottom:12px">
    <div style="font-size:9px;font-family:'Space Mono',monospace;color:var(--blue);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">📋 Tatbestandsmerkmale (TBM) – Vorgehen</div>
    <div style="font-size:11px;font-weight:700;color:#333;line-height:1.8">
      <span style="color:var(--blue);font-family:'Space Mono',monospace;font-size:10px">1.</span> Norm lesen → alle TBM identifizieren und nummerieren<br>
      <span style="color:var(--blue);font-family:'Space Mono',monospace;font-size:10px">2.</span> Jeden TBM als eigene Überschrift setzen<br>
      <span style="color:var(--blue);font-family:'Space Mono',monospace;font-size:10px">3.</span> Für jeden TBM: Definition (ggf. Legaldefinition aus AO) → Sachverhaltsangaben → Zwischenergebnis<br>
      <span style="color:var(--blue);font-family:'Space Mono',monospace;font-size:10px">4.</span> Fehlt ein TBM → Tatbestand nicht erfüllt, abbrechen mit Begründung
    </div>
  </div>

  <!-- Beispiel A: § 1 EStG -->
  <div style="background:#f8faff;border-radius:12px;border:2px solid #dde5f5;padding:12px;margin-bottom:12px">
    <div style="font-size:9px;font-family:'Space Mono',monospace;color:var(--blue);letter-spacing:1px;margin-bottom:8px;text-transform:uppercase">Beispiel A: Unbeschränkte Steuerpflicht § 1 Abs. 1 EStG</div>
    <div style="font-size:11px;font-weight:700;line-height:1.9;color:#333">
      <div><span style="background:#0d2b5e;color:#fff;border-radius:4px;padding:1px 7px;font-size:9px;margin-right:6px;font-family:'Space Mono',monospace">O</span>Lena könnte gem. <b>§ 1 Abs. 1 EStG</b> unbeschränkt einkommensteuerpflichtig sein.</div>
      <div style="margin-top:6px"><span style="background:#0a5c3a;color:#fff;border-radius:4px;padding:1px 7px;font-size:9px;margin-right:6px;font-family:'Space Mono',monospace">V</span>Voraussetzung: <b>(1)</b> natürliche Person, <b>(2)</b> Wohnsitz (§ 8 AO) oder gewöhnlicher Aufenthalt (§ 9 AO) <b>(3)</b> im Inland.</div>
      <div style="margin-top:6px"><span style="background:#5c2d91;color:#fff;border-radius:4px;padding:1px 7px;font-size:9px;margin-right:6px;font-family:'Space Mono',monospace">S</span><b>(1)</b> Lena ist eine natürliche Person (keine juristische Person). <b>(2)</b> Sie bewohnt eine Wohnung in Berlin unter Umständen, die auf Beibehaltung schließen lassen (§ 8 AO – Wohnsitz). <b>(3)</b> Berlin liegt im Inland i.S.d. § 1 Abs. 1 EStG.</div>
      <div style="margin-top:6px"><span style="background:#b84a00;color:#fff;border-radius:4px;padding:1px 7px;font-size:9px;margin-right:6px;font-family:'Space Mono',monospace">E</span>Alle TBM sind erfüllt. Lena ist gem. <b>§ 1 Abs. 1 EStG unbeschränkt einkommensteuerpflichtig</b>.</div>
    </div>
  </div>

  <!-- Beispiel B: § 9 EStG -->
  <div style="background:#f8faff;border-radius:12px;border:2px solid #dde5f5;padding:12px;margin-bottom:12px">
    <div style="font-size:9px;font-family:'Space Mono',monospace;color:var(--blue);letter-spacing:1px;margin-bottom:8px;text-transform:uppercase">Beispiel B: Werbungskosten § 9 Abs. 1 S. 1 EStG</div>
    <div style="font-size:11px;font-weight:700;line-height:1.9;color:#333">
      <div><span style="background:#0d2b5e;color:#fff;border-radius:4px;padding:1px 7px;font-size:9px;margin-right:6px;font-family:'Space Mono',monospace">O</span>Die Fahrtkosten könnten gem. <b>§ 9 Abs. 1 S. 1 EStG</b> als Werbungskosten abzugsfähig sein.</div>
      <div style="margin-top:6px"><span style="background:#0a5c3a;color:#fff;border-radius:4px;padding:1px 7px;font-size:9px;margin-right:6px;font-family:'Space Mono',monospace">V</span>TBM: <b>(1)</b> Aufwendungen, <b>(2)</b> zur Erwerbung, Sicherung oder Erhaltung, <b>(3)</b> von Einnahmen aus einer Überschusseinkunftsart.</div>
      <div style="margin-top:6px"><span style="background:#5c2d91;color:#fff;border-radius:4px;padding:1px 7px;font-size:9px;margin-right:6px;font-family:'Space Mono',monospace">S</span><b>(1)</b> Fahrtkosten sind Aufwendungen (bewusster Vermögensabfluss). <b>(2)</b> Sie dienen der Erzielung von Arbeitslohn – berufliche Veranlassung gegeben. <b>(3)</b> Arbeitslohn = § 19 EStG = Überschusseinkunftsart.</div>
      <div style="margin-top:6px"><span style="background:#b84a00;color:#fff;border-radius:4px;padding:1px 7px;font-size:9px;margin-right:6px;font-family:'Space Mono',monospace">E</span>Die Fahrtkosten sind als <b>Werbungskosten gem. § 9 Abs. 1 S. 1 i.V.m. Abs. 1 S. 3 Nr. 4 EStG abzugsfähig</b>. Konkret: Entfernungspauschale (einfache Strecke × 0,38 € ab km 1, VZ 2026).</div>
    </div>
  </div>

  <!-- Beispiel C: § 15 EStG – Einkünfte aus Gewerbebetrieb (NEU) -->
  <div style="background:#f8faff;border-radius:12px;border:2px solid #dde5f5;padding:12px;margin-bottom:12px">
    <div style="font-size:9px;font-family:'Space Mono',monospace;color:var(--blue);letter-spacing:1px;margin-bottom:8px;text-transform:uppercase">Beispiel C: Einkünfte aus Gewerbebetrieb § 15 Abs. 2 EStG</div>
    <div style="font-size:11px;font-weight:700;line-height:1.9;color:#333">
      <div><span style="background:#0d2b5e;color:#fff;border-radius:4px;padding:1px 7px;font-size:9px;margin-right:6px;font-family:'Space Mono',monospace">O</span>Herr Müller könnte gem. <b>§ 15 Abs. 2 S. 1 EStG</b> Einkünfte aus Gewerbebetrieb erzielen.</div>
      <div style="margin-top:6px"><span style="background:#0a5c3a;color:#fff;border-radius:4px;padding:1px 7px;font-size:9px;margin-right:6px;font-family:'Space Mono',monospace">V</span>TBM gem. § 15 Abs. 2 S. 1 EStG: <b>(1)</b> selbständige, <b>(2)</b> nachhaltige <b>(3)</b> Betätigung, <b>(4)</b> mit Gewinnerzielungsabsicht, <b>(5)</b> Beteiligung am allg. wirtschaftlichen Verkehr, die <b>(6)</b> weder Land-/Forstwirtschaft noch selbständige Arbeit (§ 18) darstellt.</div>
      <div style="margin-top:6px"><span style="background:#5c2d91;color:#fff;border-radius:4px;padding:1px 7px;font-size:9px;margin-right:6px;font-family:'Space Mono',monospace">S</span><b>(1)</b> Müller handelt auf eigene Rechnung und Risiko (selbständig). <b>(2)</b> Er betreibt den Laden seit 5 Jahren (nachhaltig, Wiederholungsabsicht). <b>(3)</b> Der Betrieb eines Ladens ist eine Betätigung. <b>(4)</b> Er strebt Überschüsse an (Gewinnerzielungsabsicht; kein Liebhaberei-Verdacht). <b>(5)</b> Der Laden steht jedermann offen (allg. wirtschaftl. Verkehr). <b>(6)</b> Einzelhandel ist kein Katalogberuf i.S.d. § 18 EStG und keine Land-/Forstwirtschaft.</div>
      <div style="margin-top:6px"><span style="background:#b84a00;color:#fff;border-radius:4px;padding:1px 7px;font-size:9px;margin-right:6px;font-family:'Space Mono',monospace">E</span>Alle TBM sind erfüllt. Herr Müller erzielt <b>Einkünfte aus Gewerbebetrieb gem. § 15 Abs. 2 S. 1 EStG</b>. Folge: Gewinnermittlung nach § 4 Abs. 1 EStG, zusätzlich Gewerbesteuerpflicht (§ 2 GewStG).</div>
    </div>
  </div>

  <!-- Beispiel D: § 118 AO – Verwaltungsakt (NEU) -->
  <div style="background:#f8faff;border-radius:12px;border:2px solid #dde5f5;padding:12px;margin-bottom:12px">
    <div style="font-size:9px;font-family:'Space Mono',monospace;color:var(--blue);letter-spacing:1px;margin-bottom:8px;text-transform:uppercase">Beispiel D: Verwaltungsakt § 118 AO – typische AO-Klausur</div>
    <div style="font-size:11px;font-weight:700;line-height:1.9;color:#333">
      <div><span style="background:#0d2b5e;color:#fff;border-radius:4px;padding:1px 7px;font-size:9px;margin-right:6px;font-family:'Space Mono',monospace">O</span>Der Einkommensteuerbescheid könnte ein Verwaltungsakt gem. <b>§ 118 S. 1 AO</b> sein.</div>
      <div style="margin-top:6px"><span style="background:#0a5c3a;color:#fff;border-radius:4px;padding:1px 7px;font-size:9px;margin-right:6px;font-family:'Space Mono',monospace">V</span>TBM: <b>(1)</b> Maßnahme einer <b>(2)</b> Behörde, <b>(3)</b> zur Regelung <b>(4)</b> eines Einzelfalls, <b>(5)</b> auf dem Gebiet des öffentlichen Rechts, <b>(6)</b> mit unmittelbarer Rechtswirkung nach außen.</div>
      <div style="margin-top:6px"><span style="background:#5c2d91;color:#fff;border-radius:4px;padding:1px 7px;font-size:9px;margin-right:6px;font-family:'Space Mono',monospace">S</span><b>(1)</b> Die Steuerfestsetzung ist eine hoheitliche Maßnahme (Willenserklärung mit Entscheidungscharakter). <b>(2)</b> Das Finanzamt ist eine Finanzbehörde i.S.d. § 6 Abs. 2 AO. <b>(3)</b> Der Bescheid legt die Steuerschuld verbindlich fest (Regelung). <b>(4)</b> Er richtet sich an den individuellen Steuerpflichtigen (Einzelfall). <b>(5)</b> Steuerrecht ist öffentliches Recht. <b>(6)</b> Der Bescheid begründet eine Zahlungspflicht (Außenwirkung).</div>
      <div style="margin-top:6px"><span style="background:#b84a00;color:#fff;border-radius:4px;padding:1px 7px;font-size:9px;margin-right:6px;font-family:'Space Mono',monospace">E</span>Alle TBM sind erfüllt. Der Einkommensteuerbescheid ist ein <b>Verwaltungsakt i.S.d. § 118 S. 1 AO</b>. Rechtsfolge: Einspruchsmöglichkeit gem. § 347 Abs. 1 S. 1 AO, Frist: 1 Monat (§ 355 Abs. 1 AO).</div>
    </div>
  </div>

  <!-- Prüfungstipps -->
  <div style="background:#fffbea;border-radius:12px;border:2px solid #ffe082;padding:12px">
    <div style="font-size:9px;font-family:'Space Mono',monospace;color:#8a6000;font-weight:700;letter-spacing:1px;margin-bottom:8px;text-transform:uppercase">⚡ Prüfungstipps</div>
    <div style="font-size:11px;font-weight:700;color:#444;line-height:1.9">
      · <b>Abs. immer angeben:</b> „§ 1 <b>Abs. 1</b> EStG" – nicht nur „§ 1 EStG"<br>
      · <b>i.V.m. nutzen:</b> Mehrere Normen verbinden: „§ 9 Abs. 1 S. 1 <b>i.V.m.</b> Nr. 4 EStG"<br>
      · <b>Legaldefinitionen:</b> Wohnsitz (§ 8 AO), gew. Aufenthalt (§ 9 AO), Verwaltungsakt (§ 118 AO), Steuern (§ 3 Abs. 1 AO)<br>
      · <b>Zwischenergebnis:</b> Nach jedem TBM ein kurzes Zwischenergebnis formulieren<br>
      · <b>Negative Prüfung:</b> „X ist <b>nicht</b> steuerpflichtig, da TBM [Y] nicht erfüllt ist."<br>
      · <b>Rechtsfolge nennen:</b> Ergebnis immer mit konkreter Rechtsfolge abschließen<br>
      · <b>Kein Urteilsstil:</b> Nicht „Lena ist steuerpflichtig, weil…" – sondern erst prüfen, dann Ergebnis
    </div>
  </div>
</div>

<div style="height:90px"></div>

<!-- ══ QUIZ-KACHELN ═════════════════════════════════════════════════ -->
<div style="margin-bottom:14px">
  <div style="font-size:9px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.35);font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">📝 Quiz-Themen · Dein Fortschritt</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
    ${quizKacheln}
  </div>
</div>

<!-- ══ PRÜFUNGS-WERKZEUGKISTE ════════════════════════════════════════ -->
<div style="background:linear-gradient(135deg,rgba(0,40,20,.8),rgba(0,80,40,.4));border:1.5px solid rgba(0,201,123,.2);border-radius:18px;padding:16px;margin-bottom:14px">
  <div style="font-size:9px;font-family:'Space Mono',monospace;color:#00c97b;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px">🎓 Prüfungs-Werkzeugkiste</div>
  <div style="font-size:15px;font-weight:900;color:#fff;margin-bottom:10px">Alles für die nächste Klausur</div>
  <div style="display:flex;flex-direction:column;gap:7px">
    <div onclick="sw('pruefung')" style="background:rgba(255,255,255,.06);border:1.5px solid rgba(0,201,123,.25);border-radius:12px;padding:12px 14px;cursor:pointer;display:flex;align-items:center;gap:12px;transition:all .18s" onmouseover="this.style.background='rgba(0,201,123,.1)'" onmouseout="this.style.background='rgba(255,255,255,.06)'">
      <span style="font-size:24px">🎓</span>
      <div style="flex:1"><div style="font-size:13px;font-weight:900;color:#fff">Prüfungsmodus</div><div style="font-size:10px;color:rgba(255,255,255,.45);font-weight:700">Echte Klausur-Simulation · Timer · Note 1–6 · alle Themen</div></div>
      <span style="color:rgba(255,255,255,.2)">›</span>
    </div>
    <div onclick="sw('pruefung')" style="background:rgba(255,255,255,.06);border:1.5px solid rgba(255,77,109,.2);border-radius:12px;padding:12px 14px;cursor:pointer;display:flex;align-items:center;gap:12px;transition:all .18s" onmouseover="this.style.background='rgba(255,77,109,.08)'" onmouseout="this.style.background='rgba(255,255,255,.06)'">
      <span style="font-size:24px">🔁</span>
      <div style="flex:1"><div style="font-size:13px;font-weight:900;color:#fff">Fehler üben</div><div style="font-size:10px;color:rgba(255,255,255,.45);font-weight:700">Falsch beantwortete Fragen gezielt wiederholen · ${fehlerQueue?fehlerQueue.length:0} Fragen gespeichert</div></div>
      <span style="color:rgba(255,255,255,.2)">›</span>
    </div>
    <div onclick="sw('speed')" style="background:rgba(255,255,255,.06);border:1.5px solid rgba(139,92,246,.2);border-radius:12px;padding:12px 14px;cursor:pointer;display:flex;align-items:center;gap:12px;transition:all .18s" onmouseover="this.style.background='rgba(139,92,246,.08)'" onmouseout="this.style.background='rgba(255,255,255,.06)'">
      <span style="font-size:24px">⚡</span>
      <div style="flex:1"><div style="font-size:13px;font-weight:900;color:#fff">Speed-Quiz</div><div style="font-size:10px;color:rgba(255,255,255,.45);font-weight:700">Gegen die Uhr · Reaktion schärfen · Paragraphen festigen</div></div>
      <span style="color:rgba(255,255,255,.2)">›</span>
    </div>
    <div onclick="sw('praxis')" style="background:rgba(255,255,255,.06);border:1.5px solid rgba(0,194,224,.2);border-radius:12px;padding:12px 14px;cursor:pointer;display:flex;align-items:center;gap:12px;transition:all .18s" onmouseover="this.style.background='rgba(0,194,224,.08)'" onmouseout="this.style.background='rgba(255,255,255,.06)'">
      <span style="font-size:24px">📁</span>
      <div style="flex:1"><div style="font-size:13px;font-weight:900;color:#fff">Praxisfälle</div><div style="font-size:10px;color:rgba(255,255,255,.45);font-weight:700">9 realistische Szenarien in 3 Schritten · AO · ESt · USt</div></div>
      <span style="color:rgba(255,255,255,.2)">›</span>
    </div>
    <div onclick="sw('flashcard')" style="background:rgba(255,255,255,.06);border:1.5px solid rgba(255,140,66,.2);border-radius:12px;padding:12px 14px;cursor:pointer;display:flex;align-items:center;gap:12px;transition:all .18s" onmouseover="this.style.background='rgba(255,140,66,.08)'" onmouseout="this.style.background='rgba(255,255,255,.06)'">
      <span style="font-size:24px">🃏</span>
      <div style="flex:1"><div style="font-size:13px;font-weight:900;color:#fff">Lernkarten</div><div style="font-size:10px;color:rgba(255,255,255,.45);font-weight:700">44 Sets · AO · ESt · Recht · GewSt · Gesellschaft</div></div>
      <span style="color:rgba(255,255,255,.2)">›</span>
    </div>
  </div>
</div>

<!-- ══ SCHNELL-LINKS ══════════════════════════════════════════════════ -->
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:90px">
  <div onclick="sw('glossar')" style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:12px;cursor:pointer;text-align:center;transition:all .18s" onmouseover="this.style.background='rgba(255,255,255,.09)'" onmouseout="this.style.background='rgba(255,255,255,.05)'">
    <div style="font-size:22px;margin-bottom:4px">📖</div>
    <div style="font-size:12px;font-weight:900;color:#fff">Glossar</div>
    <div style="font-size:9px;color:rgba(255,255,255,.35);font-weight:700">44 Fachbegriffe</div>
  </div>
  <div onclick="sw('story')" style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:12px;cursor:pointer;text-align:center;transition:all .18s" onmouseover="this.style.background='rgba(255,255,255,.09)'" onmouseout="this.style.background='rgba(255,255,255,.05)'">
    <div style="font-size:22px;margin-bottom:4px">📖</div>
    <div style="font-size:12px;font-weight:900;color:#fff">Stories</div>
    <div style="font-size:9px;color:rgba(255,255,255,.35);font-weight:700">6 Fortgeschritten-Szenarien</div>
  </div>
</div>

</div>`;
}


function renderKarriere(a){
  a.classList.add('karriere-mode');
  a.innerHTML=`<div style="color:#fff">

<!-- HERO -->
<div style="background:linear-gradient(135deg,#003d28,#005c36);border-radius:18px;padding:22px 18px;margin-bottom:16px;text-align:center">
  <div style="font-size:36px;margin-bottom:8px">🎓</div>
  <div style="font-size:20px;font-weight:900;color:#fff;margin-bottom:4px">Karriere in der Finanzverwaltung</div>
  <div style="font-size:12px;color:rgba(255,255,255,.6);font-weight:700">Dein Einstieg bei der Finanzverwaltung Berlin &amp; Brandenburg</div>
</div>
<!-- NAV CHIPS -->
<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:18px">
  <span onclick="scrollToId('karriere-wege')" style="background:rgba(0,201,123,.12);border:1.5px solid rgba(0,201,123,.3);color:#00c97b;border-radius:100px;padding:5px 12px;font-size:11px;font-weight:800;cursor:pointer">🛤️ Ausbildungswege</span>
  <span onclick="scrollToId('karriere-voraussetzungen')" style="background:rgba(0,194,224,.1);border:1.5px solid rgba(0,194,224,.3);color:var(--cyan);border-radius:100px;padding:5px 12px;font-size:11px;font-weight:800;cursor:pointer">✅ Voraussetzungen</span>
  <span onclick="scrollToId('karriere-timeline')" style="background:rgba(255,217,74,.1);border:1.5px solid rgba(255,217,74,.3);color:var(--yellow);border-radius:100px;padding:5px 12px;font-size:11px;font-weight:800;cursor:pointer">📈 Karriereweg</span>
  <span onclick="scrollToId('karriere-fhf')" style="background:rgba(123,94,167,.15);border:1.5px solid rgba(123,94,167,.4);color:#c8a0ff;border-radius:100px;padding:5px 12px;font-size:11px;font-weight:800;cursor:pointer">🏫 FHF</span>
  <span onclick="scrollToId('karriere-vorteile')" style="background:rgba(255,140,66,.1);border:1.5px solid rgba(255,140,66,.3);color:#ffaa66;border-radius:100px;padding:5px 12px;font-size:11px;font-weight:800;cursor:pointer">🌟 Vorteile</span>
  <span onclick="scrollToId('karriere-fristen')" style="background:rgba(255,77,109,.1);border:1.5px solid rgba(255,77,109,.3);color:#ff8099;border-radius:100px;padding:5px 12px;font-size:11px;font-weight:800;cursor:pointer">⏱️ Fristen</span>
  <span onclick="scrollToId('karriere-checkliste')" style="background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.2);color:rgba(255,255,255,.7);border-radius:100px;padding:5px 12px;font-size:11px;font-weight:800;cursor:pointer">📋 Checkliste</span>
  <span onclick="scrollToId('karriere-bewerben')" style="background:linear-gradient(135deg,rgba(0,194,224,.2),rgba(26,58,143,.2));border:2px solid var(--cyan);color:var(--cyan);border-radius:100px;padding:5px 12px;font-size:11px;font-weight:800;cursor:pointer">🚀 Jetzt bewerben</span>
</div>

<!-- ZWEI WEGE -->
<div id="karriere-wege" class="u-section-head">🛤️ Zwei Wege – ein Ziel<span class="u-divider"></span></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px">
  <div style="background:linear-gradient(135deg,rgba(0,61,40,.8),rgba(0,92,54,.4));border:2px solid rgba(0,201,123,.3);border-radius:16px;padding:14px">
    <div style="font-size:10px;font-family:'Space Mono',monospace;font-weight:700;color:#00c97b;letter-spacing:1.5px;margin-bottom:5px">MITTLERER DIENST · A6–A9</div>
    <div style="font-size:13px;font-weight:900;color:#fff;margin-bottom:10px">🏫 Finanzwirt/in</div>
    <div class="u-list-item"><b class="u-muted">Dauer:</b> 2 Jahre</div>
    <div class="u-list-item"><b class="u-muted">Schulabschluss:</b> MSA / Realschule</div>
    <div class="u-list-item"><b class="u-muted">Berlin:</b> <span style="color:var(--yellow);font-family:'Space Mono',monospace">1.467 €</span> brutto/Mo.</div>
    <div class="u-list-item"><b class="u-muted">Brandenburg:</b> <span style="color:var(--yellow);font-family:'Space Mono',monospace">1.518 €</span> brutto/Mo.</div>
    <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,.7);padding:4px 0"><b class="u-muted">Start:</b> <span style="color:#00c97b;font-weight:900">15. August</span></div>
  </div>
  <div style="background:linear-gradient(135deg,rgba(26,58,143,.7),rgba(13,43,94,.5));border:2px solid rgba(0,194,224,.3);border-radius:16px;padding:14px">
    <div style="font-size:10px;font-family:'Space Mono',monospace;font-weight:700;color:var(--cyan);letter-spacing:1.5px;margin-bottom:5px">GEHOBENER DIENST · A9–A13</div>
    <div style="font-size:13px;font-weight:900;color:#fff;margin-bottom:10px">🎓 Diplom-FW (FH)</div>
    <div class="u-list-item"><b class="u-muted">Dauer:</b> 3 Jahre (dual)</div>
    <div class="u-list-item"><b class="u-muted">Schulabschluss:</b> Abitur / FHR</div>
    <div class="u-list-item"><b class="u-muted">Berlin:</b> <span style="color:var(--yellow);font-family:'Space Mono',monospace">1.527 €</span> brutto/Mo.</div>
    <div class="u-list-item"><b class="u-muted">Brandenburg:</b> <span style="color:var(--yellow);font-family:'Space Mono',monospace">1.571 €</span> brutto/Mo.</div>
    <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,.7);padding:4px 0"><b class="u-muted">Start:</b> <span style="color:var(--cyan);font-weight:900">1. September</span></div>
  </div>
</div>

<!-- ABLAUF -->
<div class="u-section-head">📅 Ablauf<span class="u-divider"></span></div>
<div style="display:flex;gap:8px;margin-bottom:12px">
  <button id="ablauf-btn-md" onclick="showAblauf('md')" style="flex:1;padding:10px;border-radius:11px;border:2px solid rgba(0,201,123,.5);background:rgba(0,201,123,.15);color:#00c97b;font-family:'Nunito',sans-serif;font-weight:800;font-size:11px;cursor:pointer">🏫 Ausbildung (MD)</button>
  <button id="ablauf-btn-gd" onclick="showAblauf('gd')" style="flex:1;padding:10px;border-radius:11px;border:2px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);color:rgba(255,255,255,.4);font-family:'Nunito',sans-serif;font-weight:800;font-size:11px;cursor:pointer">🎓 Studium (GD)</button>
</div>
<div id="ablauf-md" style="margin-bottom:14px">
  <div style="background:rgba(0,92,54,.2);border:2px solid rgba(0,201,123,.2);border-radius:13px;padding:13px">
    <div style="font-size:11px;font-weight:900;color:#00c97b;margin-bottom:10px">2-jährige Laufbahnausbildung · Start 15. August</div>
    <div style="display:flex;flex-direction:column;gap:7px">
      <div class="u-row-gap"><div style="border:1.5px solid #00c97b;color:#00c97b;border-radius:6px;padding:2px 7px;font-size:9px;font-weight:900;font-family:'Space Mono',monospace;flex-shrink:0;white-space:nowrap;margin-top:2px">Monat 1–4</div><div class="u-body-white">Grundlehrgang Theorie – FHF: Steuerrecht, AO, BGB, Beamtenrecht</div></div>
      <div class="u-row-gap"><div style="border:1.5px solid #00c97b;color:#00c97b;border-radius:6px;padding:2px 7px;font-size:9px;font-weight:900;font-family:'Space Mono',monospace;flex-shrink:0;white-space:nowrap;margin-top:2px">Monat 5–10</div><div class="u-body-white">Praxisphase Finanzamt – ESt, KSt, USt in verschiedenen Sachgebieten</div></div>
      <div class="u-row-gap"><div style="border:1.5px solid #00c97b;color:#00c97b;border-radius:6px;padding:2px 7px;font-size:9px;font-weight:900;font-family:'Space Mono',monospace;flex-shrink:0;white-space:nowrap;margin-top:2px">Monat 11–16</div><div class="u-body-white">Vertiefungslehrgang – ESt, Bewertungsrecht, Bilanzsteuerrecht, Vollstreckung</div></div>
      <div class="u-row-gap"><div style="border:1.5px solid #00c97b;color:#00c97b;border-radius:6px;padding:2px 7px;font-size:9px;font-weight:900;font-family:'Space Mono',monospace;flex-shrink:0;white-space:nowrap;margin-top:2px">Monat 17–22</div><div class="u-body-white">Zweite Praxisphase – zunehmend eigenständige Fallbearbeitung</div></div>
      <div class="u-row-gap"><div style="border:1.5px solid var(--yellow);color:var(--yellow);border-radius:6px;padding:2px 7px;font-size:9px;font-weight:900;font-family:'Space Mono',monospace;flex-shrink:0;white-space:nowrap;margin-top:2px">Monat 23–24</div><div class="u-body-white">Laufbahnprüfung – 5 Klausuren à 3 Std. + mündl. Prüfung → Finanzwirt/in ✓</div></div>
    </div>
    <div style="margin-top:10px;padding:9px;background:rgba(0,201,123,.08);border-radius:8px;border-left:3px solid rgba(0,201,123,.4);font-size:11px;color:rgba(0,201,123,.9);font-weight:700">💡 Volle Anwärterbezüge während der gesamten Ausbildung – steuerpflichtig.</div>
  </div>
</div>
<div id="ablauf-gd" style="margin-bottom:14px;display:none">
  <div style="background:rgba(26,58,143,.25);border:2px solid rgba(0,194,224,.2);border-radius:13px;padding:13px">
    <div style="font-size:11px;font-weight:900;color:var(--cyan);margin-bottom:10px">3-jähriges duales Studium · Start 1. September · 6 Semester · FHF Königs Wusterhausen</div>
    <div style="display:flex;flex-direction:column;gap:7px">
      <div class="u-row-gap"><div style="border:1.5px solid var(--cyan);color:var(--cyan);border-radius:6px;padding:2px 7px;font-size:9px;font-weight:900;font-family:'Space Mono',monospace;flex-shrink:0;white-space:nowrap;margin-top:2px">Sem. 1–3</div><div class="u-body-white">Grundstudium Theorie (FHF) – AO, ESt, USt, Bilanzsteuerrecht, Privatrecht, Öff. Recht, GewSt, Bewertung. Innerhalb der Semester: ⚠️ Klausuren als Leistungsnachweis.</div></div>
      <div class="u-row-gap"><div style="border:1.5px solid #00c97b;color:#00c97b;border-radius:6px;padding:2px 7px;font-size:9px;font-weight:900;font-family:'Space Mono',monospace;flex-shrink:0;white-space:nowrap;margin-top:2px">Praxis I</div><div class="u-body-white">Erste Praxisphase am Finanzamt – UNIFA-Software, ESt- und USt-Sachgebiete, Ausbildungsarbeitsgemeinschaften (AbAg). <span class="u-yellow">✍️ Diplomarbeit (Hausarbeit) wird in dieser Praxisphase nach dem 3. Semester geschrieben.</span></div></div>
      <div class="u-row-gap"><div style="border:1.5px solid var(--cyan);color:var(--cyan);border-radius:6px;padding:2px 7px;font-size:9px;font-weight:900;font-family:'Space Mono',monospace;flex-shrink:0;white-space:nowrap;margin-top:2px">Sem. 4</div><div class="u-body-white">Hauptstudium (FHF) – Vertiefung ESt, Körperschaftsteuer, internationale Bezüge, Verfahrensrecht, Spezialgebiete.</div></div>
      <div class="u-row-gap"><div style="border:1.5px solid #00c97b;color:#00c97b;border-radius:6px;padding:2px 7px;font-size:9px;font-weight:900;font-family:'Space Mono',monospace;flex-shrink:0;white-space:nowrap;margin-top:2px">Praxis II</div><div class="u-body-white">Zweite Praxisphase – verschiedene Sachgebiete, zunehmend eigenständige Fallbearbeitung, Betriebsprüfung, Vollstreckung u.a. Spezialbereiche.</div></div>
      <div class="u-row-gap"><div style="border:1.5px solid var(--yellow);color:var(--yellow);border-radius:6px;padding:2px 7px;font-size:9px;font-weight:900;font-family:'Space Mono',monospace;flex-shrink:0;white-space:nowrap;margin-top:2px">Sem. 5–6</div><div class="u-body-white">Hauptstudium Abschluss (FHF) + <b class="u-yellow">Laufbahnprüfung:</b> Mehrere Klausuren à 5 Std. + mündliche Prüfung → Abschluss als <b>Diplom-Finanzwirt/in (FH)</b> ✓</div></div>
    </div>
    <div style="margin-top:10px;padding:9px;background:rgba(255,217,74,.07);border-radius:8px;border-left:3px solid rgba(255,217,74,.3);font-size:11px;color:rgba(255,217,74,.9);font-weight:700;line-height:1.55">💡 Die <b>Diplomarbeit</b> ist eine schriftliche Hausarbeit, die du in der ersten Praxisphase nach dem 3. Semester anfertigst – kein klassisches Hochschul-Abschlussthema, sondern ein praxisnaher Fall aus dem Finanzamtsalltag.</div>
    <div style="margin-top:8px;padding:9px;background:rgba(0,194,224,.08);border-radius:8px;border-left:3px solid rgba(0,194,224,.4);font-size:11px;color:rgba(0,194,224,.9);font-weight:700">🎓 Keine Studiengebühren · Volle Anwärterbezüge ab Tag 1 · FHF Königs Wusterhausen (BB, Berlin, Sachsen-Anhalt gemeinsam)</div>
  </div>
</div>

<!-- VORAUSSETZUNGEN -->
<div id="karriere-voraussetzungen" style="font-size:14px;font-weight:900;color:rgba(255,255,255,.9);margin:4px 0 12px;display:flex;align-items:center;gap:8px">✅ Voraussetzungen<span class="u-divider"></span></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
  <div style="background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.1);border-radius:12px;padding:11px;display:flex;gap:9px;align-items:flex-start"><span class="u-icon-lg u-shrink-0">🇩🇪</span><div><div class="u-label-white u-mb-xs">Staatsangehörigkeit</div><div class="u-caption">Deutsch oder EU-Mitgliedstaat</div></div></div>
  <div style="background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.1);border-radius:12px;padding:11px;display:flex;gap:9px;align-items:flex-start"><span class="u-icon-lg u-shrink-0">🎂</span><div><div class="u-label-white u-mb-xs">Altersgrenze</div><div class="u-caption">Berlin: max. 47 J. · Brandenburg: max. 39 J.</div></div></div>
  <div style="background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.1);border-radius:12px;padding:11px;display:flex;gap:9px;align-items:flex-start"><span class="u-icon-lg u-shrink-0">💪</span><div><div class="u-label-white u-mb-xs">Gesundheit</div><div class="u-caption">Amtsärztliche Beamtentauglichkeit vor Einstellung</div></div></div>
  <div style="background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.1);border-radius:12px;padding:11px;display:flex;gap:9px;align-items:flex-start"><span class="u-icon-lg u-shrink-0">📋</span><div><div class="u-label-white u-mb-xs">Führungszeugnis</div><div class="u-caption">Ohne schwerwiegende Einträge</div></div></div>
  <div style="background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.1);border-radius:12px;padding:11px;display:flex;gap:9px;align-items:flex-start"><span class="u-icon-lg u-shrink-0">📖</span><div><div class="u-label-white u-mb-xs">Deutschkenntnisse</div><div class="u-caption">Mind. C1 – Gesetzestexte lesen &amp; anwenden</div></div></div>
  <div style="background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.1);border-radius:12px;padding:11px;display:flex;gap:9px;align-items:flex-start"><span class="u-icon-lg u-shrink-0">📝</span><div><div class="u-label-white u-mb-xs">Auswahlverfahren</div><div class="u-caption">Schriftl. Test (Deutsch, Logik) + Gespräch</div></div></div>
</div>
<div style="background:rgba(255,217,74,.07);border:1.5px solid rgba(255,217,74,.2);border-radius:11px;padding:11px;font-size:11px;font-weight:700;color:rgba(255,217,74,.85);margin-bottom:16px;line-height:1.6">
  💡 <b>Kein Mathegenie nötig!</b> Gefragt sind juristisches Denken, Sprachverständnis und Sorgfalt. Die Computer übernehmen das Rechnen.
</div>

<!-- TIMELINE -->
<div id="karriere-timeline" class="u-section-head">📈 Dein Karriereweg<span class="u-divider"></span></div>
<div style="margin-bottom:16px">
  <div class="u-row-12"><div class="u-col-center-shrink"><div style="width:32px;height:32px;border-radius:50%;background:var(--yellow);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:var(--navy)">1</div><div class="u-tl-line"></div></div><div class="u-pad-bottom"><div class="u-label-white u-mb-xs">📝 Bewerbung einreichen</div><div class="u-caption u-mb-xs">Online-Bewerbung · Berlin: Senatsportal · Brandenburg: fhf.brandenburg.de</div><span class="u-badge-ghost">Brandenburg: Aug–Dez des Vorjahres</span></div></div>
  <div class="u-row-12"><div class="u-col-center-shrink"><div style="width:32px;height:32px;border-radius:50%;background:var(--cyan);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:var(--navy)">2</div><div class="u-tl-line"></div></div><div class="u-pad-bottom"><div class="u-label-white u-mb-xs">🏆 Auswahltest &amp; Gespräch</div><div class="u-caption u-mb-xs">Schriftl. Test (Deutsch, Logik, Allgemeinwissen) + mündl. Gespräch. Kein komplexes Mathe!</div><span class="u-badge-ghost">Test + Gespräch</span></div></div>
  <div class="u-row-12"><div class="u-col-center-shrink"><div style="width:32px;height:32px;border-radius:50%;background:#c8a0ff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:var(--navy)">3</div><div class="u-tl-line"></div></div><div class="u-pad-bottom"><div class="u-label-white u-mb-xs">🏫 Ausbildung / Studium</div><div class="u-caption u-mb-xs">Mittlerer Dienst: 2 J. (15. Aug) · Gehobener Dienst: 3 J. (1. Sept) · Volle Bezüge, keine Studiengebühren</div><span class="u-badge-ghost">Bezahlte Ausbildung · keine Studiengebühren</span></div></div>
  <div class="u-row-12"><div class="u-col-center-shrink"><div style="width:32px;height:32px;border-radius:50%;background:#ff8c42;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:#fff">4</div><div class="u-tl-line"></div></div><div class="u-pad-bottom"><div class="u-label-white u-mb-xs">📋 Laufbahnprüfung</div><div class="u-caption u-mb-xs">MD: 5 Klausuren à 3 Std. · GD: 5 Klausuren à 5 Std. + Diplomarbeit · Bei Bestehen: Diplom-FW/in (FH)</div><span class="u-badge-ghost">Diplom-Finanzwirt/in (FH)</span></div></div>
  <div class="u-row-12"><div class="u-col-center-shrink"><div style="width:32px;height:32px;border-radius:50%;background:#00c97b;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:#fff">5</div><div class="u-tl-line"></div></div><div class="u-pad-bottom"><div class="u-label-white u-mb-xs">🏛️ Beamter auf Probe</div><div class="u-caption u-mb-xs">Ca. 2–3 Jahre im Finanzamt – ESt, USt, Betriebsprüfung oder Vollstreckung</div><span class="u-badge-ghost">Probezeit ca. 2–3 Jahre</span></div></div>
  <div class="u-row-12"><div class="u-col-center-shrink"><div style="width:32px;height:32px;border-radius:50%;background:var(--blue);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:#fff">6</div></div><div style="padding:0 0 0"><div class="u-label-white u-mb-xs">🌟 Beamter auf Lebenszeit</div><div class="u-caption u-mb-xs">Verbeamtung auf Lebenszeit nach Probezeit · Hohes Maß an Sicherheit, Pension, Aufstieg möglich</div><span class="u-badge-ghost">Unkündbar · Pensionsanspruch · Beihilfe</span></div></div>
</div>

<!-- FHF -->
<div id="karriere-fhf" class="u-section-head">🏛️ FHF Königs Wusterhausen<span class="u-divider"></span></div>
<div style="background:linear-gradient(135deg,rgba(123,94,167,.2),rgba(80,40,140,.15));border:2px solid rgba(123,94,167,.3);border-radius:14px;padding:14px;margin-bottom:16px">
  <div style="display:flex;gap:12px;align-items:flex-start;flex-wrap:wrap">
    <div style="font-size:38px;flex-shrink:0">🏫</div>
    <div style="flex:1;min-width:170px">
      <div style="font-size:13px;font-weight:900;color:#fff;margin-bottom:5px">Fachhochschule für Finanzen (FHF) · OT Niederlehme</div>
      <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,.6);line-height:1.7">
        Gemeinsame Ausbildungsstätte von Berlin, Brandenburg &amp; Sachsen-Anhalt. Ca. <b style="color:rgba(255,255,255,.85)">2.200 Stunden Fachtheorie</b>: ESt (Hauptfach), AO, Bilanzsteuerrecht, USt, Privatrecht, Öff. Recht, Bewertungsrecht, Int. Steuerrecht u.v.m.
      </div>
      <div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:8px">
        <span style="font-size:9px;font-family:'Space Mono',monospace;font-weight:700;padding:3px 8px;border-radius:100px;background:rgba(123,94,167,.2);border:1px solid rgba(123,94,167,.35);color:#c8a0ff">Kein Studienentgelt</span>
        <span style="font-size:9px;font-family:'Space Mono',monospace;font-weight:700;padding:3px 8px;border-radius:100px;background:rgba(123,94,167,.2);border:1px solid rgba(123,94,167,.35);color:#c8a0ff">Volle Anwärterbezüge</span>
        <span style="font-size:9px;font-family:'Space Mono',monospace;font-weight:700;padding:3px 8px;border-radius:100px;background:rgba(123,94,167,.2);border:1px solid rgba(123,94,167,.35);color:#c8a0ff">Internat vor Ort</span>
        <span style="font-size:9px;font-family:'Space Mono',monospace;font-weight:700;padding:3px 8px;border-radius:100px;background:rgba(123,94,167,.2);border:1px solid rgba(123,94,167,.35);color:#c8a0ff">Berlin + BB + ST</span>
      </div>
    </div>
  </div>
</div>

<!-- FINANZÄMTER -->
<div id="karriere-aemter" class="u-section-head">🗺️ Wo du arbeiten kannst<span class="u-divider"></span></div>
<div class="fa-acc-wrap" id="fa-wrap-berlin" style="margin-bottom:8px">
  <button class="fa-acc-btn" onclick="toggleAmt('berlin')" aria-expanded="false">
    <span class="fa-acc-left"><span class="fa-acc-icon">🏛️</span><span><span class="fa-acc-name">Berlin</span><span class="fa-acc-sub">17 Regional- + 6 Sonderfinanzämter</span></span></span>
    <span class="fa-acc-arrow" id="fa-arr-berlin">▼</span>
  </button>
  <div class="fa-acc-body" id="fa-body-berlin" style="display:none;background:rgba(0,20,60,.5);border-color:rgba(0,194,224,.2);border-radius:0 0 13px 13px">
    <div style="font-size:10px;font-weight:800;color:rgba(255,255,255,.35);margin-bottom:7px;letter-spacing:.5px;text-transform:uppercase">17 Regionalfinanzämter</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:5px;margin-bottom:12px">
      <div class="u-mini-card">🏛️ Charlottenburg</div>
      <div class="u-mini-card">🏛️ Friedrichshain-Kreuzberg</div>
      <div class="u-mini-card">🏛️ Lichtenberg</div>
      <div class="u-mini-card">🏛️ Marzahn-Hellersdorf</div>
      <div class="u-mini-card">🏛️ Mitte/Tiergarten</div>
      <div class="u-mini-card">🏛️ Neukölln</div>
      <div class="u-mini-card">🏛️ Pankow/Weißensee</div>
      <div class="u-mini-card">🏛️ Prenzlauer Berg</div>
      <div class="u-mini-card">🏛️ Reinickendorf</div>
      <div class="u-mini-card">🏛️ Schöneberg</div>
      <div class="u-mini-card">🏛️ Spandau</div>
      <div class="u-mini-card">🏛️ Steglitz</div>
      <div class="u-mini-card">🏛️ Tempelhof</div>
      <div class="u-mini-card">🏛️ Treptow-Köpenick</div>
      <div class="u-mini-card">🏛️ Wedding</div>
      <div class="u-mini-card">🏛️ Wilmersdorf</div>
      <div class="u-mini-card">🏛️ Zehlendorf</div>
    </div>
    <div style="font-size:10px;font-weight:800;color:rgba(255,255,255,.35);margin-bottom:7px;letter-spacing:.5px;text-transform:uppercase">Sonderfinanzämter</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:5px">
      <div style="background:rgba(0,194,224,.06);border:1px solid rgba(0,194,224,.15);border-radius:7px;padding:6px 8px;text-align:center"><div style="font-size:14px">🏢</div><div style="font-size:10px;font-weight:700;color:rgba(255,255,255,.65)">Körperschaften I–IV</div><div style="font-size:9px;color:rgba(255,255,255,.3);font-weight:700">GmbH, AG, Konzerne</div></div>
      <div style="background:rgba(0,194,224,.06);border:1px solid rgba(0,194,224,.15);border-radius:7px;padding:6px 8px;text-align:center"><div style="font-size:14px">🔍</div><div style="font-size:10px;font-weight:700;color:rgba(255,255,255,.65)">Fahndung &amp; Strafsachen</div><div style="font-size:9px;color:rgba(255,255,255,.3);font-weight:700">Steuerfahndung</div></div>
      <div style="background:rgba(0,194,224,.06);border:1px solid rgba(0,194,224,.15);border-radius:7px;padding:6px 8px;text-align:center"><div style="font-size:14px">💻</div><div style="font-size:10px;font-weight:700;color:rgba(255,255,255,.65)">Technisches FA</div><div style="font-size:9px;color:rgba(255,255,255,.3);font-weight:700">IT-Rechenzentrum</div></div>
      <div style="background:rgba(0,194,224,.06);border:1px solid rgba(0,194,224,.15);border-radius:7px;padding:6px 8px;text-align:center"><div style="font-size:14px">🌍</div><div style="font-size:10px;font-weight:700;color:rgba(255,255,255,.65)">Berlin International</div><div style="font-size:9px;color:rgba(255,255,255,.3);font-weight:700">Internat. Unternehmen</div></div>
    </div>
  </div>
</div>
<div class="fa-acc-wrap" id="fa-wrap-bb" style="margin-bottom:16px">
  <button class="fa-acc-btn fa-acc-btn-bb" onclick="toggleAmt('bb')" aria-expanded="false">
    <span class="fa-acc-left"><span class="fa-acc-icon">🌿</span><span><span class="fa-acc-name">Brandenburg</span><span class="fa-acc-sub">13 Finanzämter im ganzen Land</span></span></span>
    <span class="fa-acc-arrow" id="fa-arr-bb">▼</span>
  </button>
  <div class="fa-acc-body" id="fa-body-bb" style="display:none;background:rgba(0,40,20,.5);border-color:rgba(0,201,123,.2);border-radius:0 0 13px 13px">
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:5px">
      <div class="u-mini-card u-mini-card--green">🏛️ Cottbus</div>
      <div class="u-mini-card u-mini-card--green">🏛️ Eberswalde</div>
      <div class="u-mini-card u-mini-card--green">🏛️ Frankfurt (Oder)</div>
      <div class="u-mini-card u-mini-card--green">🏛️ Kyritz</div>
      <div class="u-mini-card u-mini-card--green">🏛️ Luckenwalde</div>
      <div class="u-mini-card u-mini-card--green">🏛️ Nauen</div>
      <div class="u-mini-card u-mini-card--green">🏛️ Neuruppin</div>
      <div class="u-mini-card u-mini-card--green">🏛️ Oranienburg</div>
      <div class="u-mini-card u-mini-card--green">🏛️ Potsdam</div>
      <div class="u-mini-card u-mini-card--green">🏛️ Strausberg</div>
      <div class="u-mini-card u-mini-card--green">🏛️ Königs Wusterhausen</div>
      <div class="u-mini-card u-mini-card--green">🏛️ Zossen</div>
      <div class="u-mini-card u-mini-card--green">🏛️ Senftenberg</div>
    </div>
  </div>
</div>

<!-- VORTEILE -->
<div id="karriere-vorteile" class="u-section-head">🌟 Deine Vorteile<span class="u-divider"></span></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
  <div class="u-card-blue"><div class="u-icon-lg">🔒</div><div class="u-label-white">Jobsicherheit</div><div class="u-caption">Praktisch unkündbar als Beamter/in auf Lebenszeit.</div></div>
  <div class="u-card-blue"><div class="u-icon-lg">💰</div><div class="u-label-white">Stabile Besoldung</div><div class="u-caption">Gesetzl. Erhöhungen. Berlin: Sonderzahlung 1.550 € (A5–A9) + Familienzuschlag.</div></div>
  <div class="u-card-blue"><div class="u-icon-lg">🏥</div><div class="u-label-white">Beihilfe &amp; Pension</div><div class="u-caption">Staatl. Beihilfe (50–80 % d. Krankheitskosten). Pension statt Rentenpunkte.</div></div>
  <div class="u-card-blue"><div class="u-icon-lg">📚</div><div class="u-label-white">Bezahlte Ausbildung</div><div class="u-caption">Keine Studiengebühren, volle Bezüge ab Tag 1.</div></div>
  <div class="u-card-blue"><div class="u-icon-lg">📈</div><div class="u-label-white">Aufstieg möglich</div><div class="u-caption">MD → GD per Aufstiegsstudium. Führungspositionen erreichbar.</div></div>
  <div class="u-card-blue"><div class="u-icon-lg">⚖️</div><div class="u-label-white">Work-Life-Balance</div><div class="u-caption">Geregelte Zeiten, Gleitzeit, Teilzeit, Homeoffice möglich.</div></div>
  <div class="u-card-blue"><div class="u-icon-lg">🌍</div><div class="u-label-white">Sinnstiftend</div><div class="u-caption">Du finanzierst Bildung, Straßen und soziale Sicherheit.</div></div>
  <div class="u-card-blue"><div class="u-icon-lg">🔀</div><div class="u-label-white">Abwechslung</div><div class="u-caption">ESt, USt, Betriebsprüfung, Vollstreckung – breites Aufgabenspektrum.</div></div>
</div>
<div style="background:rgba(255,217,74,.07);border:1.5px solid rgba(255,217,74,.2);border-radius:11px;padding:11px;font-size:11px;font-weight:700;color:rgba(255,217,74,.85);margin-bottom:16px;line-height:1.6">
  💡 <b>Kein Vorwissen nötig!</b> Alles Fachliche lernst du in der Ausbildung von Grund auf. Mitbringen: Motivation, Zuverlässigkeit, Freude an strukturiertem Denken.
</div>

<!-- FRISTEN -->
<div id="karriere-fristen" class="u-section-head">⏱️ Fristen &amp; Termine<span class="u-divider"></span></div>
<div id="karriere-countdown" style="margin-bottom:16px"></div>

<!-- CHECKLISTE -->
<div id="karriere-checkliste" class="u-section-head">📋 Bewerbungs-Checkliste<span class="u-divider"></span></div>
<div style="background:rgba(255,255,255,.04);border:2px solid rgba(255,255,255,.1);border-radius:16px;padding:14px;margin-bottom:16px">
  <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,.35);margin-bottom:10px">Hake ab, was du schon bereit hast – wird lokal gespeichert!</div>
  <div class="cl-progress"><div class="cl-prog-fill" id="cl-prog" style="width:0%"></div></div>
  <div id="cl-count" style="font-size:10px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.3);margin-bottom:14px">0 / 10 erledigt</div>
  <div style="font-size:11px;font-weight:900;color:rgba(0,194,224,.75);margin:0 0 7px">🟦 Pflicht – Online-Bewerbung</div>
  <div class="cl-item" onclick="toggleCL(this)" id="cl0" class="u-card-ghost"><div class="cl-box" class="u-cb-ghost"></div><div><div class="cl-text" class="u-white-80">📄 Schulabschlusszeugnis</div><div class="cl-sub">Scan/PDF reicht zunächst · Beglaubigung erst nach Zusage nötig</div></div></div>
  <div class="cl-item" onclick="toggleCL(this)" id="cl1" class="u-card-ghost"><div class="cl-box" class="u-cb-ghost"></div><div><div class="cl-text" class="u-white-80">📝 Online-Bewerbungsformular ausgefüllt</div><div class="cl-sub">Berlin: Senatsportal · Brandenburg: fhf.brandenburg.de</div></div></div>
  <div class="cl-item" onclick="toggleCL(this)" id="cl2" class="u-card-ghost"><div class="cl-box" class="u-cb-ghost"></div><div><div class="cl-text" class="u-white-80">📬 Aktuelle E-Mail-Adresse angegeben</div><div class="cl-sub">Alle Mitteilungen kommen per E-Mail – täglich prüfen!</div></div></div>
  <div style="font-size:11px;font-weight:900;color:rgba(255,140,66,.75);margin:14px 0 7px">🟧 Nach vorläufiger Zusage</div>
  <div class="cl-item" onclick="toggleCL(this)" id="cl3" class="u-card-ghost"><div class="cl-box" class="u-cb-ghost"></div><div><div class="cl-text" class="u-white-80">📜 Schulzeugnis Original / beglaubigte Kopie</div><div class="cl-sub">Bürgeramt, Notar oder Schule · ca. 5–10 € pro Kopie</div></div></div>
  <div class="cl-item" onclick="toggleCL(this)" id="cl4" class="u-card-ghost"><div class="cl-box" class="u-cb-ghost"></div><div><div class="cl-text" class="u-white-80">🪪 Personalausweis / Reisepass</div><div class="cl-sub">Zur Identitätsprüfung bei Unterlagenabgabe</div></div></div>
  <div class="cl-item" onclick="toggleCL(this)" id="cl5" class="u-card-ghost"><div class="cl-box" class="u-cb-ghost"></div><div><div class="cl-text" class="u-white-80">📋 Führungszeugnis (Behördenvorlage)</div><div class="cl-sub">Erst nach Zusage beantragen · max. 6 Monate alt · 13 € · 1–2 Wochen</div></div></div>
  <div class="cl-item" onclick="toggleCL(this)" id="cl6" class="u-card-ghost"><div class="cl-box" class="u-cb-ghost"></div><div><div class="cl-text" class="u-white-80">🏥 Amtsärztliches Gesundheitszeugnis</div><div class="cl-sub">Wird durch die Einstellungsbehörde veranlasst</div></div></div>
  <div class="cl-item" onclick="toggleCL(this)" id="cl7" class="u-card-ghost"><div class="cl-box" class="u-cb-ghost"></div><div><div class="cl-text" class="u-white-80">📷 Lichtbild (35×45 mm)</div><div class="cl-sub">Aktuelles Passfoto für die Personalakte</div></div></div>
  <div style="font-size:11px;font-weight:900;color:rgba(0,201,123,.65);margin:14px 0 7px">🟩 Situationsabhängig</div>
  <div class="cl-item cl-optional" onclick="toggleCL(this)" id="cl8" style="background:rgba(255,255,255,.03);border-color:rgba(255,255,255,.09);border-style:dashed"><div class="cl-box" style="border-color:rgba(255,255,255,.15);background:transparent"></div><div><div class="cl-text" style="color:rgba(255,255,255,.7)">🌐 Amtl. Übersetzung ausländischer Zeugnisse <span class="cl-badge" style="background:rgba(0,201,123,.15);color:#00c97b;border:1px solid rgba(0,201,123,.25)">Optional</span></div><div class="cl-sub">BB: Zeugnisanerkennungsstelle Landesschulamt Cottbus</div></div></div>
  <div class="cl-item cl-optional" onclick="toggleCL(this)" id="cl9" style="background:rgba(255,255,255,.03);border-color:rgba(255,255,255,.09);border-style:dashed"><div class="cl-box" style="border-color:rgba(255,255,255,.15);background:transparent"></div><div><div class="cl-text" style="color:rgba(255,255,255,.7)">🎖️ Nachweis Schwerbehinderung / Bundeswehr <span class="cl-badge" style="background:rgba(0,201,123,.15);color:#00c97b;border:1px solid rgba(0,201,123,.25)">Optional</span></div><div class="cl-sub">§ 10 SVG · Schwerbehinderte bei gleicher Eignung bevorzugt</div></div></div>
  <div style="background:rgba(0,194,224,.07);border:1px solid rgba(0,194,224,.2);border-radius:9px;padding:10px;font-size:11px;font-weight:700;color:rgba(0,194,224,.8);line-height:1.6;margin-top:12px">
    💡 Die genaue Unterlagenliste erhältst du mit dem <b>Einladungsschreiben nach bestandenem Test</b> (Angaben nach Berlin &amp; Brandenburg).
  </div>
</div>

<!-- KARRIERE MATCHING -->
<div class="u-section-head" style="margin-top:8px">🎯 Passt die Finanzverwaltung zu dir?<span class="u-divider"></span></div>
<div id="karriere-match-area">
  <div style="background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.15);border-radius:16px;padding:16px;margin-bottom:12px;text-align:center">
    <div style="font-size:32px;margin-bottom:8px">🔍</div>
    <div style="font-size:15px;font-weight:900;color:#fff;margin-bottom:6px">Der 2-Minuten-Selbsttest</div>
    <div style="font-size:12px;color:rgba(255,255,255,.6);font-weight:700;margin-bottom:14px;line-height:1.55">8 ehrliche Fragen – wir sagen dir, ob der Job wirklich zu dir passt.</div>
    <button onclick="kmStart()" style="padding:12px 28px;border-radius:100px;border:none;background:linear-gradient(135deg,var(--cyan),#0095c8);color:var(--navy);font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer">Test starten →</button>
  </div>
</div>

<!-- JETZT BEWERBEN -->
<div id="karriere-bewerben" class="u-section-head">🚀 Jetzt bewerben<span class="u-divider"></span></div>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:8px">
  <a href="https://www.berlin.de/sen/finanzen/ueber-uns/karriere/ausbildung-duales-studium/steuerverwaltung/geht-auf-uns/landingpage.1352250.php" target="_blank" rel="noopener" style="text-decoration:none">
    <div style="background:linear-gradient(135deg,#001f3f,#003f7a);border:2px solid rgba(68,136,204,.6);border-radius:14px;padding:16px 12px;text-align:center;cursor:pointer;transition:transform .2s,box-shadow .2s" onmouseover="this.style.transform='translateY(-3px)';this.style.boxShadow='0 10px 28px rgba(0,60,120,.5)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
      <div style="font-size:26px;margin-bottom:6px">🏛️</div>
      <div class="u-label-white u-mb-xs">Berlin</div>
      <div style="font-size:9px;color:rgba(255,255,255,.45);font-weight:700;margin-bottom:8px">Ausbildung &amp; Studium</div>
      <div style="background:var(--cyan);color:var(--navy);font-size:9px;font-weight:900;padding:4px 10px;border-radius:100px;display:inline-block">Bewerben →</div>
    </div>
  </a>
  <a href="https://fhf.brandenburg.de/fhf/de/ausbildung/vor-der-ausbildung/bewerbungsverfahren/" target="_blank" rel="noopener" style="text-decoration:none">
    <div style="background:linear-gradient(135deg,#003d28,#006644);border:2px solid rgba(68,187,136,.5);border-radius:14px;padding:16px 12px;text-align:center;cursor:pointer;transition:transform .2s,box-shadow .2s" onmouseover="this.style.transform='translateY(-3px)';this.style.boxShadow='0 10px 28px rgba(0,80,50,.5)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
      <div style="font-size:26px;margin-bottom:6px">🎓</div>
      <div class="u-label-white u-mb-xs">FHF Brandenburg</div>
      <div style="font-size:9px;color:rgba(255,255,255,.45);font-weight:700;margin-bottom:8px">Gehobener Dienst</div>
      <div style="background:var(--green);color:#fff;font-size:9px;font-weight:900;padding:4px 10px;border-radius:100px;display:inline-block">Bewerben →</div>
    </div>
  </a>
  <a href="https://www.steuer-deine-zukunft.de" target="_blank" rel="noopener" style="text-decoration:none">
    <div style="background:linear-gradient(135deg,#3a1a6e,#6633bb);border:2px solid rgba(153,102,221,.5);border-radius:14px;padding:16px 12px;text-align:center;cursor:pointer;transition:transform .2s,box-shadow .2s" onmouseover="this.style.transform='translateY(-3px)';this.style.boxShadow='0 10px 28px rgba(80,30,140,.5)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
      <div style="font-size:26px;margin-bottom:6px">⭐</div>
      <div class="u-label-white u-mb-xs">steuer-deine-zukunft</div>
      <div style="font-size:9px;color:rgba(255,255,255,.45);font-weight:700;margin-bottom:8px">Karriereportal BB</div>
      <div style="background:var(--yellow);color:var(--navy);font-size:9px;font-weight:900;padding:4px 10px;border-radius:100px;display:inline-block">Infos →</div>
    </div>
  </a>
</div>
<p style="font-size:10px;color:rgba(255,255,255,.25);font-weight:600;text-align:center;margin-top:4px;margin-bottom:8px">↗ Links öffnen die offiziellen Bewerbungsseiten in einem neuen Tab</p>
</div>`;
  buildCountdown(document.getElementById('karriere-countdown'));
  restoreCL();
}

// ==================== KARRIERE-MATCHING ====================
const KM_QUESTIONS = [
  {q:'Wie gehst du mit Zahlen und Tabellen um?', opts:['Ich mag das sehr – Ordnung in Zahlen finde ich befriedigend','Ist okay, aber nicht mein Highlight','Ich vermeide es lieber']},
  {q:'Wie reagierst du, wenn jemand nicht die Wahrheit sagt?', opts:['Ich möchte Gerechtigkeit – das stört mich und ich möchte es richtigstellen','Kommt auf die Situation an','Ich schaue lieber weg']},
  {q:'Wie gehst du mit genauen Regeln und Vorschriften um?', opts:['Ich finde Regeln und Strukturen gut – sie geben Sicherheit','Ich habe nichts dagegen, solange es Sinn ergibt','Ich finde viele Regeln einengend']},
  {q:'Hättest du Interesse daran, Menschen zu beraten und zu helfen – auch wenn es manchmal unangenehme Neuigkeiten sind?', opts:['Ja – ich kann auch schwierige Gespräche führen','Vielleicht, wenn ich gut vorbereitet bin','Eher nicht – ich vermeide Konflikte lieber']},
  {q:'Wie wichtig ist dir ein sicherer, planbarer Job?', opts:['Sehr wichtig – ich schätze Stabilität','Wichtig, aber Abwechslung darf sein','Ich will lieber riskieren und mehr verdienen']},
  {q:'Lernst du gerne neue, komplexe Themen – auch wenn es Zeit dauert?', opts:['Ja! Ich mag es, Dinge wirklich zu verstehen','Wenn es mich interessiert, ja','Ich lerne lieber durch Ausprobieren, nicht durch Theorie']},
  {q:'Wie stehst du zu Teamarbeit in einer Behörde?', opts:['Ich mag Zusammenarbeit in geregelten Strukturen','Ich arbeite gerne im Team, egal wo','Ich bevorzuge freies, kreatives Arbeiten']},
  {q:'Stört es dich, wenn Ergebnisse deiner Arbeit nicht sofort sichtbar sind?', opts:['Nein – ich finde nachhaltige Arbeit im Hintergrund wertvoll','Ein bisschen, aber ich kann damit umgehen','Ja – ich brauche schnell sichtbare Erfolge']},
];

let kmStep = -1, kmPoints = 0;

function kmStart(){
  kmStep = 0; kmPoints = 0;
  kmRender();
}

function kmAnswer(pts){
  kmPoints += pts;
  kmStep++;
  if(kmStep >= KM_QUESTIONS.length) kmResult();
  else kmRender();
}

function kmRender(){
  const q = KM_QUESTIONS[kmStep];
  const pct = Math.round((kmStep / KM_QUESTIONS.length) * 100);
  document.getElementById('karriere-match-area').innerHTML = `
    <div style="background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.15);border-radius:16px;padding:16px;margin-bottom:12px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <span style="font-size:11px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.5);font-weight:700">Frage ${kmStep+1} / ${KM_QUESTIONS.length}</span>
        <span style="font-size:11px;font-family:'Space Mono',monospace;color:var(--cyan);font-weight:700">${pct}%</span>
      </div>
      <div style="height:4px;background:rgba(255,255,255,.1);border-radius:100px;margin-bottom:14px">
        <div style="height:4px;background:var(--cyan);border-radius:100px;width:${pct}%;transition:width .3s"></div>
      </div>
      <div style="font-size:14px;font-weight:800;color:#fff;margin-bottom:14px;line-height:1.5">${q.q}</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${q.opts.map((o,i)=>`<button onclick="kmAnswer(${2-i})" style="text-align:left;padding:11px 14px;border-radius:12px;border:1.5px solid rgba(255,255,255,.15);background:rgba(255,255,255,.06);color:rgba(255,255,255,.85);font-family:'Nunito',sans-serif;font-weight:700;font-size:13px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='rgba(0,194,224,.12)';this.style.borderColor='rgba(0,194,224,.35)'" onmouseout="this.style.background='rgba(255,255,255,.06)';this.style.borderColor='rgba(255,255,255,.15)'">${o}</button>`).join('')}
      </div>
    </div>`;
}

function kmResult(){
  const max = KM_QUESTIONS.length * 2;
  const pct = Math.round(kmPoints / max * 100);
  let icon, title, msg, color, cta;
  if(pct >= 70){
    icon='🏆'; color='#00c97b';
    title='Sehr gute Übereinstimmung!';
    msg='Du bringst das mit, was der Beruf braucht: Genauigkeit, Interesse an Recht & Zahlen und Freude am Helfen. Die Finanzverwaltung könnte dein Platz sein.';
    cta='Jetzt bewerben ↓';
  } else if(pct >= 45){
    icon='✅'; color='var(--cyan)';
    title='Gute Übereinstimmung';
    msg='Du hast viele passende Eigenschaften. Schau dir die Aufgaben und den Ausbildungsalltag genauer an – du könntest positiv überrascht werden.';
    cta='Mehr erfahren ↓';
  } else {
    icon='💡'; color='var(--yellow)';
    title='Interessante Kombination';
    msg='Dein Profil passt nicht in allen Punkten – das ist okay! Es gibt viele Wege. Schau trotzdem mal in die Karriere-Infos, manchmal überrascht der Alltag.';
    cta='Trotzdem anschauen ↓';
  }
  document.getElementById('karriere-match-area').innerHTML = `
    <div style="background:rgba(255,255,255,.07);border:2px solid ${color}40;border-radius:16px;padding:20px;margin-bottom:12px;text-align:center">
      <div style="font-size:40px;margin-bottom:8px">${icon}</div>
      <div style="font-size:16px;font-weight:900;color:#fff;margin-bottom:6px">${title}</div>
      <div style="font-size:22px;font-weight:900;color:${color};font-family:'Space Mono',monospace;margin-bottom:10px">${pct} % Übereinstimmung</div>
      <div style="font-size:13px;color:rgba(255,255,255,.7);font-weight:700;line-height:1.6;margin-bottom:16px">${msg}</div>
      <div style="display:flex;gap:8px;justify-content:center">
        <button onclick="document.getElementById('karriere-bewerben').scrollIntoView({behavior:'smooth'})" style="padding:11px 20px;border-radius:100px;border:none;background:${color};color:${pct>=70?'#0d1b3e':'#fff'};font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer">${cta}</button>
        <button onclick="kmStart()" style="padding:11px 20px;border-radius:100px;border:1.5px solid rgba(255,255,255,.2);background:transparent;color:rgba(255,255,255,.6);font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;cursor:pointer">↺ Nochmal</button>
      </div>
    </div>`;
}
const CL_KEY = 'bewerbung_checklist';
function loadCL(){ try{return JSON.parse(localStorage.getItem(CL_KEY)||'[]');}catch(e){return[];} }
function saveCL(arr){ localStorage.setItem(CL_KEY, JSON.stringify(arr)); }

function toggleCL(el){
  el.classList.toggle('done');
  updateCLProgress();
  const items = Array.from(document.querySelectorAll('.cl-item'));
  saveCL(items.map(i=>i.classList.contains('done')));
}

function restoreCL(){
  const saved = loadCL();
  if(!saved.length) return;
  document.querySelectorAll('.cl-item').forEach((el,i)=>{
    if(saved[i]) el.classList.add('done');
  });
  updateCLProgress();
}

function updateCLProgress(){
  const all = document.querySelectorAll('.cl-item');
  const done = document.querySelectorAll('.cl-item.done');
  const pct = all.length ? Math.round(done.length/all.length*100) : 0;
  const prog = document.getElementById('cl-prog');
  const cnt  = document.getElementById('cl-count');
  if(prog) prog.style.width = pct+'%';
  if(cnt)  cnt.textContent = done.length+' / '+all.length+' erledigt'+(pct===100?' 🎉 Alles bereit!':'');
}

// ==================== SHARED ====================
function toggleAmt(which){
  const body = document.getElementById('fa-body-'+which);
  const arr  = document.getElementById('fa-arr-'+which);
  const btn  = body?.previousElementSibling;
  if(!body) return;
  const open = body.style.display !== 'none';
  body.style.display = open ? 'none' : 'block';
  if(arr) arr.style.transform = open ? '' : 'rotate(180deg)';
  if(btn) btn.setAttribute('aria-expanded', String(!open));
}

function buildCountdown(el){
  if(!el) return;
  const now = new Date();
  const yr  = now.getFullYear();

  // Bewerbungsfristen – offizielle Angaben, jährlich prüfen
  // BB: Bewerbung läuft Aug–Dez des Vorjahres für Start im nächsten Jahr
  // Berlin: Bewerbungsportal öffnet ca. Aug, Einsendeschluss ca. Okt/Nov
  const deadlines = [
    {
      id:'bb-fin',
      label:'Finanzwirt/in Brandenburg',
      detail:'Mittlerer Dienst · Ausbildungsstart 15. Aug.',
      url:'https://www.fhf.brandenburg.de/karriere',
      col:'#00c97b', bg:'rgba(0,60,30,.25)', border:'rgba(0,201,123,.3)',
      // Bewerbungsschluss ca. 31. Januar des Einstellungsjahres (variiert)
      getDeadline: yr => {
        const d = new Date(yr, 0, 31); // 31. Jan
        return d < now ? new Date(yr+1, 0, 31) : d;
      },
      note:'Bewerbungsportal: fhf.brandenburg.de'
    },
    {
      id:'bb-studi',
      label:'Diplom-Finanzwirt/in Brandenburg',
      detail:'Gehobener Dienst · Studienstart 1. Sep.',
      url:'https://www.fhf.brandenburg.de/karriere',
      col:'var(--cyan)', bg:'rgba(0,30,80,.25)', border:'rgba(0,194,224,.3)',
      getDeadline: yr => {
        const d = new Date(yr, 0, 31);
        return d < now ? new Date(yr+1, 0, 31) : d;
      },
      note:'Bewerbungsportal: fhf.brandenburg.de'
    },
    {
      id:'berlin',
      label:'Berlin – Ausbildung & Studium',
      detail:'Beide Laufbahnen · Bewerbung online',
      url:'https://www.berlin.de/sen/finanzen/steuern/fachkraefte/',
      col:'#c8a0ff', bg:'rgba(40,10,80,.25)', border:'rgba(123,94,167,.3)',
      getDeadline: yr => {
        const d = new Date(yr, 9, 31); // ca. 31. Okt
        return d < now ? new Date(yr+1, 9, 31) : d;
      },
      note:'Karriereportal Berlin · Termin variiert jährlich'
    }
  ];

  function daysBetween(a, b){
    return Math.ceil((b - a) / 86400000);
  }
  function formatDate(d){
    return d.toLocaleDateString('de-DE', {day:'2-digit', month:'long', year:'numeric'});
  }
  function urgencyColor(days){
    if(days <= 14) return '#ff4d6d';
    if(days <= 30) return '#ffd94a';
    return '#00c97b';
  }
  function calLink(title, deadline){
    // ICS data URI für Kalender-Export
    const ds = deadline.toISOString().replace(/[-:]/g,'').split('T')[0];
    const ics = [
      'BEGIN:VCALENDAR','VERSION:2.0',
      'BEGIN:VEVENT',
      'DTSTART;VALUE=DATE:'+ds,
      'DTEND;VALUE=DATE:'+ds,
      'SUMMARY:Bewerbungsfrist – '+title,
      'DESCRIPTION:Bewerbungsfrist prüfen und Unterlagen einreichen!',
      'END:VEVENT','END:VCALENDAR'
    ].join('\r\n');
    return 'data:text/calendar;charset=utf8,'+encodeURIComponent(ics);
  }

  el.innerHTML = deadlines.map(d=>{
    const deadline = d.getDeadline(yr);
    const days = daysBetween(now, deadline);
    const urg = urgencyColor(days);
    const weeks = Math.floor(days/7);
    const timeStr = days <= 0 ? 'Frist abgelaufen'
      : days === 1 ? 'Morgen!'
      : days <= 7 ? `Noch ${days} Tage!`
      : weeks === 1 ? 'Noch 1 Woche'
      : `Noch ${weeks} Wochen`;

    return `<div style="background:${d.bg};border:2px solid ${d.border};border-radius:14px;padding:13px 14px;margin-bottom:9px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:8px">
        <div class="u-flex-min">
          <div style="font-size:12px;font-weight:900;color:${d.col};margin-bottom:2px">📅 ${d.label}</div>
          <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,.5)">${d.detail}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-size:16px;font-weight:900;color:${urg};line-height:1">${timeStr}</div>
          <div style="font-size:10px;color:rgba(255,255,255,.35);font-weight:700;margin-top:1px">${formatDate(deadline)}</div>
        </div>
      </div>
      <div style="height:4px;background:rgba(255,255,255,.08);border-radius:100px;overflow:hidden;margin-bottom:8px">
        <div style="height:100%;width:${Math.max(2,Math.min(100,100-Math.round(days/180*100)))}%;background:${urg};border-radius:100px;transition:width .6s"></div>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">
        <div style="font-size:10px;color:rgba(255,255,255,.35);font-weight:700;font-style:italic">ℹ️ ${d.note}</div>
        <div style="display:flex;gap:6px;flex-shrink:0">
          <a href="${calLink(d.label, deadline)}" download="bewerbung-${d.id}.ics" style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:rgba(255,255,255,.65);border-radius:8px;padding:3px 9px;font-size:10px;font-weight:800;font-family:'Nunito',sans-serif;text-decoration:none;display:inline-block">📆 Kalender</a>
          <a href="${d.url}" target="_blank" rel="noopener" style="background:rgba(255,255,255,.08);border:1px solid ${d.border};color:${d.col};border-radius:8px;padding:3px 9px;font-size:10px;font-weight:800;font-family:'Nunito',sans-serif;text-decoration:none;display:inline-block">Bewerben →</a>
        </div>
      </div>
    </div>`;
  }).join('') +
  `<div style="background:rgba(255,217,74,.06);border:1.5px solid rgba(255,217,74,.18);border-radius:11px;padding:10px 12px;font-size:10px;font-weight:700;color:rgba(255,217,74,.75);line-height:1.6;margin-top:2px">
    ⚠️ Fristen variieren jährlich – immer direkt auf den Portalen prüfen. Frühzeitig bewerben, Plätze sind begrenzt!
  </div>`;

  // Live-Tick für den Tage-Counter (alle 60s aktualisieren)
  if(!el._countdownTimer) el._countdownTimer = setInterval(()=>buildCountdown(el), 60000);
}


function showFb(ok, explain, context){
  const fb=document.getElementById('fb');
  if(fb){
    fb.className='fb show '+(ok?'correct':'wrong');
    let html = (ok?'✅ <b>Richtig!</b> ':'❌ <b>Leider falsch.</b> ') + explain;
    if(!ok){
      const merkText = extractMerkregel(explain, context);
      html += `<div class="fb-merkhilfe"><span class="fmk-icon">💡</span><span>${merkText}</span></div>`;
    }
    fb.innerHTML = html;
    const nb=document.getElementById('nb');
    if(nb) nb.classList.add('show');
    // Scroll feedback into view on all devices
    setTimeout(()=>fb.scrollIntoView({behavior:'smooth',block:'nearest'}),80);
  }
  // Mobile sticky bar disabled — inline #fb already scrolls into view on all devices
}
let _mobileFbNextFn = null;
function mobileFbNext(){
  const bar=document.getElementById('mobile-fb-bar');
  if(bar) bar.style.display='none';
  const nb=document.getElementById('nb');
  if(nb&&nb.classList.contains('show')) nb.click();
}

function extractMerkregel(explain, context){
  // Try to extract the key rule from the bold content at the start
  const boldMatch = explain.match(/<b>([^<]{3,60})<\/b>/);
  const core = boldMatch ? boldMatch[1] : '';
  if(core && core.length > 4){
    return `Merkhilfe: Die richtige Antwort lautet <b>${core}</b>. Versuche, diesen Begriff mit einem konkreten Alltagsbeispiel zu verknüpfen!`;
  }
  return 'Merkhilfe: Lies die Erklärung oben nochmal in Ruhe durch und versuche, die Regel mit eigenen Worten zu wiederholen.';
}
function nextQ(){
  idx++;answered=false;render();
}
// ==================== QUIZ RENDER FUNCTIONS ====================

function _quizProgress(arr,i){
  const total=arr.length, p=Math.round(i/total*100);
  return `<div style="font-size:10px;font-family:'Space Mono',monospace;color:#aaa;margin-bottom:4px;display:flex;justify-content:space-between"><span>Frage ${i+1} / ${total}</span><span class="u-green">${corr} ✓</span></div><div class="prog-wrap" style="margin-bottom:14px"><div class="prog-fill" style="width:${p}%;background:var(--blue)"></div></div>`;
}

// ─── EINKOMMENSTEUER ───────────────────────────────────────────
function renderEst(a){
  const tabs=`<div style="display:flex;gap:6px;margin-bottom:12px">
    <button onclick="swSub('einkunft')" style="flex:1;padding:9px;border-radius:10px;border:2px solid ${submode==='einkunft'?'#1a3a8f':'#dde5f5'};background:${submode==='einkunft'?'#1a3a8f':'#f0f4ff'};color:${submode==='einkunft'?'#fff':'#555'};font-family:'Nunito',sans-serif;font-weight:800;font-size:11px;cursor:pointer;transition:all .15s">📂 Einkunftsarten</button>
    <button onclick="swSub('werbung')" style="flex:1;padding:9px;border-radius:10px;border:2px solid ${submode==='werbung'?'#1a3a8f':'#dde5f5'};background:${submode==='werbung'?'#1a3a8f':'#f0f4ff'};color:${submode==='werbung'?'#fff':'#555'};font-family:'Nunito',sans-serif;font-weight:800;font-size:11px;cursor:pointer;transition:all .15s">🧾 Werbungskosten</button>
  </div>`;
  if(submode==='einkunft') renderEstEinkunft(a, tabs);
  else renderEstWerbung(a, tabs);
}

function renderEstEinkunft(a, tabs){
  if(idx>=sh_ein.length){a.innerHTML='';renderResult2('ga','💼 Einkommensteuer',sh_ein.length);return;}
  const q=sh_ein[idx];
  const catsHtml=D_EINKATS.map(c=>`<button class="choice-btn" onclick="ansEinkunft(${c.id})" data-i="${c.id}" style="text-align:left"><span class="ct">${c.icon} ${c.name}<br><span style="font-size:9px;font-family:'Space Mono',monospace;opacity:.6">${c.sub}</span></span></button>`).join('');
  a.innerHTML=`${tabs}${quizFilterBar()}${_quizProgress(sh_ein,idx)}
    <div class="item-card"><span class="ii">${q.icon}</span><div><div class="in">${q.name}</div><div class="is">${q.sub}</div></div></div>
    <div style="font-size:11px;color:#777;font-weight:700;margin-bottom:8px;font-family:'Space Mono',monospace">Welche Einkunftsart? Ordne zu:</div>
    <div class="ao-grid">${catsHtml}</div>
    <div class="fb" id="fb"></div>
    <button class="next-btn" id="nb" onclick="nextQ()">Nächste Frage ➜</button>`;
  answered=false;
}

function ansEinkunft(chosen){
  if(answered)return; answered=true;
  const q=sh_ein[idx]; const ok=(chosen===q.ans);
  updSc(ok);
  if(!ok) addFehler({...q,q:q.name,opts:D_EINKATS.map(c=>c.icon+' '+c.name),_qtype:'mc'},'est');
  document.querySelectorAll('.choice-btn').forEach(b=>{
    b.disabled=true;
    const v=parseInt(b.dataset.i);
    if(v===q.ans)b.classList.add('correct');
    else if(v===chosen&&!ok)b.classList.add('wrong');
  });
  showFb(ok, q.explain, q.name);
}

function renderEstWerbung(a, tabs){
  if(idx>=sh_werb.length){a.innerHTML='';renderResult2('ga','🧾 Werbungskosten',sh_werb.length);return;}
  const q=sh_werb[idx];
  a.innerHTML=`${tabs}${quizFilterBar()}${_quizProgress(sh_werb,idx)}
    <div class="wk-card" style="background:#fff;border-radius:16px;border:2px solid #dde5f5;padding:16px;margin-bottom:14px;display:flex;align-items:flex-start;gap:12px">
      <span style="font-size:32px">${q.icon}</span>
      <div><div style="font-size:14px;font-weight:900;color:var(--navy)">${q.name}</div><div style="font-size:11px;color:#888;font-weight:700;margin-top:2px">${q.desc}</div></div>
    </div>
    <div class="wk-btns"><button class="wk-btn yb" onclick="ansWerbung(true)">✅ Ja, absetzbar!</button><button class="wk-btn nb" onclick="ansWerbung(false)">❌ Nein, nicht absetzbar</button></div>
    <div class="fb" id="fb"></div>
    <button class="next-btn" id="nb" onclick="nextQ()">Nächste Frage ➜</button>`;
  answered=false;
}

function ansWerbung(chosen){
  if(answered)return; answered=true;
  const q=sh_werb[idx]; const ok=(chosen===q.ans);
  updSc(ok);
  if(!ok) addFehler({...q,_qtype:'wk'},'est');
  document.querySelectorAll('.wk-btn').forEach(b=>b.disabled=true);
  const cb=q.ans?document.querySelector('.yb'):document.querySelector('.nb');
  if(cb)cb.classList.add('ca');
  showFb(ok, q.explain, q.name);
}

// ─── UMSATZSTEUER ──────────────────────────────────────────────
function renderUst(a){
  if(idx>=sh_ust.length){a.innerHTML='';renderResult2('ga','🛒 Umsatzsteuer',sh_ust.length);return;}
  const q=sh_ust[idx];
  a.innerHTML=`${quizFilterBar()}${_quizProgress(sh_ust,idx)}
    <div class="item-card"><span class="ii">${q.icon}</span><div><div class="in">${q.name}</div><div class="is">${q.desc}</div></div></div>
    <div class="ust-choices">
      <button class="ust-btn ust-btn-0" onclick="ansUst(0)" data-r="0">0 %<div class="ust-lbl">Steuerfrei</div></button>
      <button class="ust-btn ust-btn-7" onclick="ansUst(7)" data-r="7">7 %<div class="ust-lbl">Ermäßigt</div></button>
      <button class="ust-btn ust-btn-19" onclick="ansUst(19)" data-r="19">19 %<div class="ust-lbl">Regelsteuersatz</div></button>
    </div>
    <div class="fb" id="fb"></div>
    <button class="next-btn" id="nb" onclick="nextQ()">Nächste Frage ➜</button>`;
  answered=false;
}

function ansUst(chosen){
  if(answered)return; answered=true;
  const q=sh_ust[idx]; const ok=(chosen===q.ans);
  updSc(ok);
  if(!ok) addFehler({...q,_qtype:'ust'},'ust');
  document.querySelectorAll('.ust-btn').forEach(b=>{b.disabled=true;if(parseInt(b.dataset.r)===q.ans)b.classList.add('ca');});
  showFb(ok, q.explain, q.name);
}

// ─── ABGABENORDNUNG ────────────────────────────────────────────
function renderAo(a){
  if(idx>=sh_ao.length){a.innerHTML='';renderResult2('ga','⚖️ Abgabenordnung',sh_ao.length);return;}
  const q=sh_ao[idx];
  const optsHtml=q.opts.map((o,i)=>`<button class="choice-btn" onclick="ansAo(${i})" data-i="${i}"><span class="ct">${o}</span></button>`).join('');
  a.innerHTML=`${quizFilterBar()}${_quizProgress(sh_ao,idx)}
    <div style="background:#f4f7ff;border-radius:14px;padding:15px 16px;margin-bottom:14px;font-size:14px;font-weight:800;color:var(--navy);line-height:1.55;border-left:4px solid var(--blue)">${q.q}</div>
    <div class="ao-grid">${optsHtml}</div>
    <div class="fb" id="fb"></div>
    <button class="next-btn" id="nb" onclick="nextQ()">Nächste Frage ➜</button>`;
  answered=false;
}

function ansAo(chosen){
  if(answered)return; answered=true;
  const q=sh_ao[idx]; const ok=(chosen===q.ans);
  updSc(ok);
  if(!ok) addFehler({...q,_qtype:'mc'},'ao');
  document.querySelectorAll('.choice-btn').forEach(b=>{b.disabled=true;const i=parseInt(b.dataset.i);if(i===q.ans)b.classList.add('correct');else if(i===chosen&&!ok)b.classList.add('wrong');});
  showFb(ok, q.explain, q.q);
}

// ─── KURIOSES ──────────────────────────────────────────────────
function renderKurios(a){
  if(idx>=sh_kurios.length){a.innerHTML='';renderResult2('ga','🤯 Kurioses',sh_kurios.length);return;}
  const q=sh_kurios[idx];
  // Kurios may have opts (MC) or wahr/falsch (boolean ans)
  const isMC = q.opts && q.opts.length > 0;
  let answerHtml;
  if(isMC){
    answerHtml=`<div class="ao-grid">${q.opts.map((o,i)=>`<button class="choice-btn" onclick="ansKurios(${i})" data-i="${i}"><span class="ct">${o}</span></button>`).join('')}</div>`;
  } else {
    answerHtml=`<div class="wf-choices"><button class="wf-btn wf-wahr" onclick="ansKurios(true)" data-v="true">✅ Wahr</button><button class="wf-btn wf-falsch" onclick="ansKurios(false)" data-v="false">❌ Falsch</button></div>`;
  }
  a.innerHTML=`${quizFilterBar()}${_quizProgress(sh_kurios,idx)}
    <div class="item-card"><span class="ii">${q.icon||'🤯'}</span><div><div class="in" style="font-size:14px;line-height:1.45">${q.q}</div></div></div>
    ${answerHtml}
    <div class="fb" id="fb"></div>
    <button class="next-btn" id="nb" onclick="nextQ()">Nächste Frage ➜</button>`;
  answered=false;
}

function ansKurios(chosen){
  if(answered)return; answered=true;
  const q=sh_kurios[idx]; const ok=(chosen===q.ans);
  updSc(ok);
  if(!ok) addFehler({...q,_qtype:q.opts?'mc':'kurios'},'kurios');
  if(q.opts){
    document.querySelectorAll('.choice-btn').forEach(b=>{b.disabled=true;const i=parseInt(b.dataset.i);if(i===q.ans)b.classList.add('correct');else if(i===chosen&&!ok)b.classList.add('wrong');});
  } else {
    document.querySelectorAll('.wf-btn').forEach(b=>{b.disabled=true;if((b.dataset.v==='true')===q.ans)b.classList.add('ca');});
  }
  showFb(ok, q.explain, q.q);
}

// ─── RECHT ─────────────────────────────────────────────────────
function renderRecht(a){
  if(idx>=sh_recht.length){a.innerHTML='';renderResult2('ga','🏛️ Privat- & Öff. Recht',sh_recht.length);return;}
  const q=sh_recht[idx];
  const optsHtml=q.opts.map((o,i)=>`<button class="choice-btn" onclick="ansRecht(${i})" data-i="${i}"><span class="ct">${o}</span></button>`).join('');
  a.innerHTML=`${quizFilterBar()}${_quizProgress(sh_recht,idx)}
    <div style="background:#f4f7ff;border-radius:14px;padding:15px 16px;margin-bottom:14px;font-size:14px;font-weight:800;color:var(--navy);line-height:1.55;border-left:4px solid #005c5c">${q.q}</div>
    <div class="ao-grid">${optsHtml}</div>
    <div class="fb" id="fb"></div>
    <button class="next-btn" id="nb" onclick="nextQ()">Nächste Frage ➜</button>`;
  answered=false;
}

function ansRecht(chosen){
  if(answered)return; answered=true;
  const q=sh_recht[idx]; const ok=(chosen===q.ans);
  updSc(ok);
  if(!ok) addFehler({...q,_qtype:'mc'},'recht');
  document.querySelectorAll('.choice-btn').forEach(b=>{b.disabled=true;const i=parseInt(b.dataset.i);if(i===q.ans)b.classList.add('correct');else if(i===chosen&&!ok)b.classList.add('wrong');});
  showFb(ok, q.explain, q.q);
}

// ─── GEWERBESTEUER ─────────────────────────────────────────────
function renderGewSt(a){
  if(idx>=sh_gewst.length){a.innerHTML='';renderResult2('ga','🏭 Gewerbesteuer',sh_gewst.length);return;}
  const q=sh_gewst[idx];
  const optsHtml=q.opts.map((o,i)=>`<button class="choice-btn" onclick="ansGewSt(${i})" data-i="${i}"><span class="ct">${o}</span></button>`).join('');
  a.innerHTML=`${quizFilterBar()}${_quizProgress(sh_gewst,idx)}
    <div style="background:#f4f7ff;border-radius:14px;padding:15px 16px;margin-bottom:14px;font-size:14px;font-weight:800;color:var(--navy);line-height:1.55;border-left:4px solid #2e4a00">${q.q}</div>
    <div class="ao-grid">${optsHtml}</div>
    <div class="fb" id="fb"></div>
    <button class="next-btn" id="nb" onclick="nextQ()">Nächste Frage ➜</button>`;
  answered=false;
}
function ansGewSt(chosen){
  if(answered)return; answered=true;
  const q=sh_gewst[idx]; const ok=(chosen===q.ans);
  updSc(ok);
  if(!ok) addFehler({...q,_qtype:'mc'},'gewst');
  document.querySelectorAll('.choice-btn').forEach(b=>{b.disabled=true;const i=parseInt(b.dataset.i);if(i===q.ans)b.classList.add('correct');else if(i===chosen&&!ok)b.classList.add('wrong');});
  showFb(ok, q.explain, q.q);
}

// ─── GESELLSCHAFTSBESTEUERUNG ──────────────────────────────────
function renderGesellschaft(a){
  if(idx>=sh_gesellschaft.length){a.innerHTML='';renderResult2('ga','🏢 Gesellschaftsbesteuerung',sh_gesellschaft.length);return;}
  const q=sh_gesellschaft[idx];
  const optsHtml=q.opts.map((o,i)=>`<button class="choice-btn" onclick="ansGesellschaft(${i})" data-i="${i}"><span class="ct">${o}</span></button>`).join('');
  a.innerHTML=`${quizFilterBar()}${_quizProgress(sh_gesellschaft,idx)}
    <div style="background:#f4f7ff;border-radius:14px;padding:15px 16px;margin-bottom:14px;font-size:14px;font-weight:800;color:var(--navy);line-height:1.55;border-left:4px solid #2e1260">${q.q}</div>
    <div class="ao-grid">${optsHtml}</div>
    <div class="fb" id="fb"></div>
    <button class="next-btn" id="nb" onclick="nextQ()">Nächste Frage ➜</button>`;
  answered=false;
}
function ansGesellschaft(chosen){
  if(answered)return; answered=true;
  const q=sh_gesellschaft[idx]; const ok=(chosen===q.ans);
  updSc(ok);
  if(!ok) addFehler({...q,_qtype:'mc'},'gesellschaft');
  document.querySelectorAll('.choice-btn').forEach(b=>{b.disabled=true;const i=parseInt(b.dataset.i);if(i===q.ans)b.classList.add('correct');else if(i===chosen&&!ok)b.classList.add('wrong');});
  showFb(ok, q.explain, q.q);
}

// ─── BILANZ ────────────────────────────────────────────────────
function renderBilanz(a){
  const tabs=`<div style="display:flex;gap:6px;margin-bottom:12px">
    <button onclick="swBilanz('zu')" style="flex:1;padding:9px;border-radius:10px;border:2px solid ${bilanzSub==='zu'?'#1a3a8f':'#dde5f5'};background:${bilanzSub==='zu'?'#1a3a8f':'#f0f4ff'};color:${bilanzSub==='zu'?'#fff':'#555'};font-family:'Nunito',sans-serif;font-weight:800;font-size:11px;cursor:pointer;transition:all .15s">📂 Zuordnung AV/UV</button>
    <button onclick="swBilanz('buch')" style="flex:1;padding:9px;border-radius:10px;border:2px solid ${bilanzSub==='buch'?'#1a3a8f':'#dde5f5'};background:${bilanzSub==='buch'?'#1a3a8f':'#f0f4ff'};color:${bilanzSub==='buch'?'#fff':'#555'};font-family:'Nunito',sans-serif;font-weight:800;font-size:11px;cursor:pointer;transition:all .15s">📒 Buchungssätze</button>
  </div>`;
  if(bilanzSub==='zu') renderBilanzZu(a, tabs);
  else renderBilanzBuch(a, tabs);
}

function renderBilanzZu(a, tabs){
  if(idx>=sh_bzu.length){a.innerHTML='';renderResult2('ga','📋 Bilanz – Zuordnung',sh_bzu.length);return;}
  const q=sh_bzu[idx];
  a.innerHTML=`${tabs}${quizFilterBar()}${_quizProgress(sh_bzu,idx)}
    <div class="item-card"><span class="ii">${q.icon}</span><div><div class="in">${q.name}</div><div class="is">${q.desc}</div></div></div>
    <div class="wk-btns">
      <button class="wk-btn" style="background:linear-gradient(135deg,#0d2b5e,#1a4a8f);color:#fff;border:none" onclick="ansBilanzZu('av')">🏗️ Anlagevermögen</button>
      <button class="wk-btn" style="background:linear-gradient(135deg,#005c36,#007a5a);color:#fff;border:none" onclick="ansBilanzZu('uv')">💧 Umlaufvermögen</button>
    </div>
    <div class="fb" id="fb"></div>
    <button class="next-btn" id="nb" onclick="nextQ()">Nächste Frage ➜</button>`;
  answered=false;
}

function ansBilanzZu(chosen){
  if(answered)return; answered=true;
  const q=sh_bzu[idx]; const ok=(chosen===q.ans);
  updSc(ok);
  if(!ok) addFehler({...q,q:q.name,opts:['Anlagevermögen','Umlaufvermögen'],ans:q.ans==='av'?0:1,_qtype:'mc'},'bilanz');
  document.querySelectorAll('.wk-btn').forEach(b=>b.disabled=true);
  showFb(ok, `<b>${q.ansLabel}</b> – ${q.explain}`, q.name);
}

function renderBilanzBuch(a, tabs){
  if(idx>=sh_buch.length){a.innerHTML='';renderResult2('ga','📒 Buchungssätze',sh_buch.length);return;}
  const q=sh_buch[idx];
  const shuffled=[...q.options].sort(()=>Math.random()-.5);
  const optsHtml=shuffled.map((o,i)=>`<button class="choice-btn" onclick="ansBilanzBuch(${i},${o.correct})" data-correct="${o.correct}" style="text-align:left"><span class="ct">Soll: <b>${o.soll}</b><br>Haben: <b>${o.haben}</b></span></button>`).join('');
  a.innerHTML=`${tabs}${quizFilterBar()}${_quizProgress(sh_buch,idx)}
    <div class="item-card"><span class="ii">${q.icon}</span><div><div class="in">${q.name}</div><div class="is">${q.desc}</div></div></div>
    <div style="font-size:11px;font-weight:800;color:#777;margin-bottom:8px;font-family:'Space Mono',monospace">Welcher Buchungssatz ist korrekt?</div>
    <div class="ao-grid">${optsHtml}</div>
    <div class="fb" id="fb"></div>
    <button class="next-btn" id="nb" onclick="nextQ()">Nächste Frage ➜</button>`;
  answered=false;
}

function ansBilanzBuch(chosenIdx, isCorrect){
  if(answered)return; answered=true;
  const q=sh_buch[idx]; const ok=isCorrect===true||isCorrect==='true';
  updSc(ok);
  if(!ok) addFehler({...q,q:q.name,opts:q.options.map(o=>o.soll+' / '+o.haben),ans:q.options.findIndex(o=>o.correct),_qtype:'mc'},'bilanz');
  document.querySelectorAll('.choice-btn').forEach((b,i)=>{
    b.disabled=true;
    if(b.dataset.correct==='true')b.classList.add('correct');
    else if(i===chosenIdx&&!ok)b.classList.add('wrong');
  });
  showFb(ok, q.explain, q.name);
}

// ─── LERNKARTEN (FLASHCARD) ────────────────────────────────────
function renderFlashcard(a){
  fcData=getFcData(fcMode);
  if(fcIdx>=fcData.length){
    const known=fcKnown.length, total=fcData.length;
    a.innerHTML=`<div style="text-align:center;padding:32px 20px">
      <div style="font-size:52px;margin-bottom:12px">${known===total?'🏆':'🎯'}</div>
      <div style="font-size:20px;font-weight:900;color:#fff;margin-bottom:6px">${known===total?'Alle Karten gewusst!':'Stapel abgeschlossen'}</div>
      <div style="font-size:13px;color:rgba(255,255,255,.5);margin-bottom:24px">${known} / ${total} gewusst</div>
      ${fcUnknown.length?`<button onclick="fcRestartUnknown()" style="width:100%;padding:13px;border-radius:13px;border:none;background:linear-gradient(135deg,var(--orange),#e06000);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer;margin-bottom:10px">🔁 Unbekannte nochmal (${fcUnknown.length})</button>`:''}
      <button onclick="fcRestart()" style="width:100%;padding:12px;border-radius:13px;border:2px solid rgba(255,255,255,.2);background:rgba(255,255,255,.06);color:rgba(255,255,255,.7);font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;cursor:pointer">↺ Alle Karten nochmal</button>
    </div>`;
    return;
  }
  const card=fcData[fcIdx]; const total=fcData.length;
  const modeTabsHtml=['ao','recht','est','gewst','gesellschaft'].map(m=>`<button onclick="fcSwitchMode('${m}')" style="flex:1;padding:7px;border-radius:9px;border:2px solid ${fcMode===m?'var(--cyan)':'rgba(255,255,255,.15)'};background:${fcMode===m?'rgba(0,194,224,.12)':'rgba(255,255,255,.05)'};color:${fcMode===m?'#fff':'rgba(255,255,255,.5)'};font-family:'Nunito',sans-serif;font-weight:800;font-size:10px;cursor:pointer">${m==='ao'?'⚖️ AO':m==='recht'?'🏛️ Recht':m==='gewst'?'🏭 GewSt':m==='gesellschaft'?'🏢 Gesellschaft':'💼 ESt'}</button>`).join('');
  a.innerHTML=`<div style="display:flex;gap:5px;margin-bottom:12px">${modeTabsHtml}</div>
    <div style="font-size:10px;font-family:'Space Mono',monospace;color:#aaa;margin-bottom:10px;display:flex;justify-content:space-between"><span>Karte ${fcIdx+1} / ${total}</span><span class="u-green">${fcKnown.length} ✓ gewusst</span></div>
    <div class="fc-card ${fcFlipped?'fc-card-back':'fc-card-front'}" onclick="fcFlip()" id="fc-card">
      <div style="font-size:36px;margin-bottom:10px">${card.icon}</div>
      ${fcFlipped
        ? `<div style="font-size:10px;font-family:'Space Mono',monospace;opacity:.55;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px">Antwort</div>
           <div style="font-size:13px;font-weight:700;line-height:1.65">${card.answer}</div>
           ${card.merkhilfe?`<div style="margin-top:12px;background:rgba(255,255,255,.1);border-radius:10px;padding:10px 12px;font-size:11px;font-weight:700;line-height:1.55">💡 ${card.merkhilfe}</div>`:''}` 
        : `<div style="font-size:10px;font-family:'Space Mono',monospace;opacity:.55;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px">${card.sub}</div>
           <div style="font-size:18px;font-weight:900;line-height:1.35">${card.term}</div>
           <div style="margin-top:16px;font-size:11px;opacity:.5">Tippe zum Aufdecken ↩</div>`}
    </div>
    ${fcFlipped?`<div style="display:flex;gap:8px;margin-top:10px">
      <button onclick="fcAnswer(false)" style="flex:1;padding:12px;border-radius:12px;border:2px solid rgba(255,77,109,.4);background:rgba(255,77,109,.1);color:#ff6b8a;font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer">❌ Nochmal</button>
      <button onclick="fcAnswer(true)" style="flex:1;padding:12px;border-radius:12px;border:2px solid rgba(0,201,123,.4);background:rgba(0,201,123,.1);color:#00c97b;font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer">✅ Gewusst</button>
    </div>`:''}`;
}

function fcFlip(){ fcFlipped=!fcFlipped; renderFlashcard(document.getElementById('ga')); }
function fcAnswer(known){
  if(known) fcKnown.push(fcIdx); else fcUnknown.push(fcIdx);
  fcIdx++; fcFlipped=false; renderFlashcard(document.getElementById('ga'));
}
function fcRestart(){ fcIdx=0; fcFlipped=false; fcKnown=[]; fcUnknown=[]; renderFlashcard(document.getElementById('ga')); }
function fcRestartUnknown(){ const u=[...fcUnknown]; fcData=u.map(i=>getFcData(fcMode)[i]); fcIdx=0; fcFlipped=false; fcKnown=[]; fcUnknown=[]; renderFlashcard(document.getElementById('ga')); }
function fcSwitchMode(m){ fcMode=m; fcIdx=0; fcFlipped=false; fcKnown=[]; fcUnknown=[]; fcData=getFcData(m); renderFlashcard(document.getElementById('ga')); }

// ==================== END QUIZ FUNCTIONS ====================
function renderResult2(containerId,name,total,direct=false){
  const ratio=corr/total;
  const pct=Math.round(ratio*100);
  const emoji=ratio>=.8?'🏆':ratio>=.5?'🎯':'📖';
  const msg=ratio>=.8?'Hervorragend! Du hast das Zeug zum Steuerprofi!':ratio>=.5?'Gut gemacht! Noch ein bisschen Übung!':'Guter Versuch! Probier es nochmal!';
  const nextMode=MODE_ORDER[(MODE_ORDER.indexOf(mode)+1)%MODE_ORDER.length];
  const nextLabel={'basics':'📚 Basics','est':'💼 Einkommensteuer','ust':'🛒 Umsatzsteuer','bilanz':'📋 Bilanz','ao':'⚖️ Abgabenordnung','ao_basics':'⚖️ AO Basics','recht_basics':'🏛️ Recht Basics','kurios':'🤯 Kurioses','recht':'🏛️ Privat- & Öff. Recht','flashcard':'🃏 Lernkarten','meinbereich':'⭐ Mein Bereich','karriere':'🎓 Karriere','badges':'🏅 Abzeichen','glossar':'📖 Glossar','speed':'⚡ Gegen die Zeit','pruefung':'🎓 Prüfungsmodus','praxis':'📋 Praxisfälle','fehler':'🔁 Meine Fehler','story':'📖 Steuer-Stories','einfuehrung':'📋 Einführungstag','gewst':'🏭 Gewerbesteuer','gesellschaft':'🏢 Gesellschaftsbesteuerung'}[nextMode]||'Weiter';
  const ringColor=ratio>=.8?'var(--green)':ratio>=.5?'var(--cyan)':'var(--orange)';
  const ringGlow=ratio>=.8?'rgba(0,201,123,.35)':ratio>=.5?'rgba(0,194,224,.35)':'rgba(255,140,66,.35)';
  const quizTopicName = name; // safe variable for share button
  // save highscore
  updateHighscore(mode, corr, total);
  const hs=highscores[mode];
  const isNewRecord = hs && hs.score===corr && corr>0;
  // trigger completion badges
  if(mode==='ao') triggerBadge('ao_done');
  if(mode==='kurios') triggerBadge('kurios_done');
  // Mark Einsteiger step 3 (quiz) as done when completing EST quiz from Lernpfad
  if(einstLaunched==='step3' && mode==='est') setEinstStep('quiz');
  const html=`<div class="result-sc show">
    <div class="result-trophy">${emoji}</div>
    <div class="result-score-ring" style="background:conic-gradient(${ringColor} ${pct*3.6}deg,rgba(255,255,255,.08) 0%);box-shadow:0 0 30px ${ringGlow}">
      <div class="result-score-inner">${corr}<small>/ ${total}</small></div>
    </div>
    ${isNewRecord?`<div style="background:rgba(255,217,74,.15);border:1px solid rgba(255,217,74,.4);border-radius:100px;padding:4px 14px;font-size:11px;font-family:'Space Mono',monospace;color:var(--yellow);display:inline-block;margin-bottom:8px">🏆 Neuer Rekord!</div>`:''}
    <div class="result-title">${name} abgeschlossen!</div>
    <div class="result-msg">${msg}<br><span style="font-family:'Space Mono',monospace;font-size:12px;color:${ringColor}">${pct} % richtig</span></div>
    <div class="result-actions">
      <button class="restart-btn" onclick="restart()">🔄 Nochmal</button>
      <button class="restart-btn" style="background:rgba(255,255,255,.1);border:1.5px solid rgba(255,255,255,.25);color:#fff" onclick="shareResult(${corr},${total},quizTopicName)">📤 Teilen</button>
      ${einstLaunched?'<button class="restart-btn" style="background:linear-gradient(135deg,#005c36,#00c97b);color:#fff" onclick="sw(\'basics\')">← Zum Lernpfad</button>':'<button class="restart-btn" style="background:linear-gradient(135deg,var(--blue),#2255cc);color:#fff" onclick="sw(\''+nextMode+'\')">Weiter: '+nextLabel+' ➜</button>'}
    </div>
  </div>`;
  document.getElementById(containerId).innerHTML=html;
  conf(30);
}
function restart(){
  idx=0;answered=false;corr=0;
  if(mode==='ust')sh_ust=shuffle(D_UST);
  else if(mode==='ao')sh_ao=shuffle(D_AO);
  else if(mode==='kurios')sh_kurios=shuffle(D_KURIOS);
  else if(mode==='recht')sh_recht=shuffle(D_RECHT);
  else if(mode==='gewst')sh_gewst=shuffle(D_GEWST);
  else if(mode==='gesellschaft')sh_gesellschaft=shuffle(D_GESELLSCHAFT);
  else if(mode==='est'){if(submode==='einkunft')sh_ein=shuffle(D_EINKUNFT);else sh_werb=shuffle(D_WERBUNG);}
  else if(mode==='bilanz'){if(bilanzSub==='zu')sh_bzu=shuffle(D_BILANZ_ZU);else sh_buch=shuffle(D_BUCHUNG);}
  render();
}

// ==================== CONFETTI ====================
function conf(n){
  // Skip confetti on mobile devices to avoid stray pixel artefacts
  if(window.innerWidth < 768) return;
  const c=document.getElementById('cc');
  const cols=['#ffd94a','#00c2e0','#00c97b','#ff4d6d','#fff','#1a3a8f'];
  for(let i=0;i<n;i++){
    const p=document.createElement('div');p.className='cp';
    p.style.left=Math.random()*100+'vw';p.style.top='-20px';
    p.style.background=cols[Math.floor(Math.random()*cols.length)];
    const s=6+Math.random()*8;p.style.width=s+'px';p.style.height=s+'px';
    p.style.animationDuration=(1.5+Math.random()*2)+'s';
    p.style.animationDelay=Math.random()*.5+'s';
    c.appendChild(p);setTimeout(()=>p.remove(),4000);
  }
}

// ==================== § MEMORY GAME ====================
// ==================== § PARA LOOKUP (name for every possible distractor) ====================
const PARA_NAMES = {
  '§ 1 AO':'Anwendungsbereich AO','§ 3 AO':'Steuerbegriff','§ 30 AO':'Steuergeheimnis',
  '§ 90 AO':'Mitwirkungspflichten','§ 103 AO':'Auskunftspflicht Dritter','§ 118 AO':'Verwaltungsakt',
  '§ 122 AO':'Bekanntgabe','§ 152 AO':'Verspätungszuschlag','§ 153 AO':'Berichtigungspflicht',
  '§ 155 AO':'Steuerfestsetzung','§ 157 AO':'Form Steuerbescheid','§ 162 AO':'Schätzung',
  '§ 165 AO':'Vorläufige Steuerfestsetzung','§ 169 AO':'Festsetzungsverjährung',
  '§ 170 AO':'Beginn Festsetzungsfrist','§ 171 AO':'Ablaufhemmung',
  '§ 173 AO':'Aufhebung/Änderung neuer Tatsachen','§ 180 AO':'Gesonderte Feststellung',
  '§ 193 AO':'Zulässigkeit Außenprüfung','§ 200 AO':'Mitwirkungspflicht Betriebsprüfung',
  '§ 201 AO':'Schlussbesprechung','§ 240 AO':'Säumniszuschläge',
  '§ 348 AO':'Nicht anfechtbare Verwaltungsakte','§ 355 AO':'Einspruchsfrist',
  '§ 356 AO':'Einspruchsbefugnis','§ 357 AO':'Einlegung Einspruch',
  '§ 363 AO':'Aussetzung Einspruchsverfahren','§ 370 AO':'Steuerhinterziehung',
  '§ 371 AO':'Selbstanzeige','§ 378 AO':'Leichtfertige Steuerverkürzung',
  '§ 393 AO':'Verhältnis Steuerstrafverfahren','§ 398 AO':'Einstellung bei geringer Schuld',
  '§ 1 EStG':'Unbeschränkte Steuerpflicht','§ 2 EStG':'Einkunftsarten',
  '§ 3 EStG':'Steuerfreie Einnahmen','§ 4 EStG':'Gewinnbegriff',
  '§ 6 EStG':'Bewertung Wirtschaftsgüter','§ 7 EStG':'AfA',
  '§ 9 EStG':'Werbungskosten','§ 10 EStG':'Sonderausgaben',
  '§ 11 EStG':'Zu- und Abflussprinzip','§ 12 EStG':'Nicht abziehbare Ausgaben',
  '§ 13 EStG':'Land- und Forstwirtschaft','§ 14 EStG':'Veräußerung Betrieb',
  '§ 15 EStG':'Gewerbebetrieb','§ 16 EStG':'Betriebsveräußerung',
  '§ 17 EStG':'Veräußerung von Anteilen','§ 18 EStG':'Selbständige Arbeit',
  '§ 19 EStG':'Nichtselbständige Arbeit','§ 20 EStG':'Kapitalvermögen',
  '§ 21 EStG':'Vermietung und Verpachtung','§ 22 EStG':'Sonstige Einkünfte',
  '§ 23 EStG':'Private Veräußerungsgeschäfte','§ 25 EStG':'Veranlagung',
  '§ 32a EStG':'Einkommensteuertarif','§ 34 EStG':'Außerordentliche Einkünfte',
  '§ 38 EStG':'Erhebung Lohnsteuer','§ 40 EStG':'Pauschalierung Lohnsteuer',
  '§ 46 EStG':'Veranlagung Arbeitnehmer',
  '§ 1 UStG':'Steuerbare Umsätze','§ 2 UStG':'Unternehmerbegriff',
  '§ 3 UStG':'Lieferung / sonstige Leistung','§ 4 UStG':'Steuerbefreiungen',
  '§ 10 UStG':'Bemessungsgrundlage','§ 12 UStG':'Umsatzsteuersätze',
  '§ 13 UStG':'Entstehung Steuer','§ 14 UStG':'Rechnung',
  '§ 15 UStG':'Vorsteuerabzug','§ 18 UStG':'Besteuerungsverfahren',
  '§ 19 UStG':'Kleinunternehmer',
  'Art. 1 GG':'Menschenwürde','Art. 2 GG':'Allgem. Handlungsfreiheit',
  'Art. 3 GG':'Gleichheitsgrundsatz','Art. 14 GG':'Eigentumsgarantie',
  'Art. 19 GG':'Einschränkung Grundrechte','Art. 20 GG':'Staatsgrundsätze',
  'Art. 28 GG':'Verfassungsgrundsätze Länder','Art. 105 GG':'Steuergesetzgebung',
  'Art. 106 GG':'Steuerverteilung','Art. 108 GG':'Steuerverwaltung',
  '§ 1 BGB':'Rechtsfähigkeit','§ 145 BGB':'Angebot',
  '§ 433 BGB':'Kaufvertrag','§ 823 BGB':'Schadensersatz',
  '§ 1 KStG':'Unbeschränkte Körperschaftsteuerpflicht',
  '§ 7 GewStG':'Gewerbeertrag','§ 2 GewStG':'Steuerpflicht Gewerbesteuer',
};

const D_PARA = [
  // AO
  {quote:'Steuern sind Geldleistungen, die nicht eine Gegenleistung für eine besondere Leistung darstellen.',para:'§ 3 AO',law:'AO',name:'Steuerbegriff',icon:'⚖️',distractors:['§ 30 AO','§ 155 AO','§ 3 EStG']},
  {quote:'Amtsträger … haben das Steuergeheimnis zu wahren.',para:'§ 30 AO',law:'AO',name:'Steuergeheimnis',icon:'🔒',distractors:['§ 3 AO','§ 90 AO','§ 393 AO']},
  {quote:'Steuerbescheide sind schriftlich oder elektronisch zu erteilen, soweit nichts anderes bestimmt ist.',para:'§ 157 AO',law:'AO',name:'Form des Steuerbescheids',icon:'📄',distractors:['§ 122 AO','§ 155 AO','§ 180 AO']},
  {quote:'Die Festsetzungsfrist beträgt … vier Jahre.',para:'§ 169 AO',law:'AO',name:'Festsetzungsverjährung',icon:'⏳',distractors:['§ 170 AO','§ 171 AO','§ 152 AO']},
  {quote:'Die Einspruchsfrist beträgt einen Monat.',para:'§ 355 AO',law:'AO',name:'Einspruchsfrist',icon:'📬',distractors:['§ 348 AO','§ 363 AO','§ 357 AO']},
  {quote:'Wer … Steuern verkürzt oder … nicht gerechtfertigte Steuervorteile erlangt, wird … bestraft.',para:'§ 370 AO',law:'AO',name:'Steuerhinterziehung',icon:'🚨',distractors:['§ 371 AO','§ 378 AO','§ 398 AO']},
  {quote:'Straffreiheit tritt nicht ein, wenn … eine der Steuerstraftaten im Zeitpunkt der Selbstanzeige bereits entdeckt war.',para:'§ 371 AO',law:'AO',name:'Selbstanzeige',icon:'🕊️',distractors:['§ 370 AO','§ 378 AO','§ 153 AO']},
  {quote:'Handelt der Täter leichtfertig, so ist die Tat als leichtfertige Steuerverkürzung … als Ordnungswidrigkeit zu ahnden.',para:'§ 378 AO',law:'AO',name:'Leichtfertige Steuerverkürzung',icon:'⚠️',distractors:['§ 370 AO','§ 371 AO','§ 398 AO']},
  {quote:'Soweit die Besteuerungsgrundlagen nicht ermittelt … werden können, sind sie zu schätzen.',para:'§ 162 AO',law:'AO',name:'Schätzung',icon:'🎯',distractors:['§ 155 AO','§ 169 AO','§ 173 AO']},
  {quote:'Ein Verwaltungsakt ist jede Verfügung, Entscheidung oder andere hoheitliche Maßnahme … mit unmittelbarer Rechtswirkung nach außen.',para:'§ 118 AO',law:'AO',name:'Verwaltungsakt',icon:'🏛️',distractors:['§ 122 AO','§ 155 AO','§ 157 AO']},
  {quote:'Die Außenprüfung … dient der Ermittlung … der steuerlichen Verhältnisse des Steuerpflichtigen.',para:'§ 193 AO',law:'AO',name:'Zulässigkeit Außenprüfung',icon:'🔎',distractors:['§ 162 AO','§ 200 AO','§ 201 AO']},
  {quote:'Der Steuerpflichtige hat bei der Feststellung der Sachverhalte … mitzuwirken.',para:'§ 200 AO',law:'AO',name:'Mitwirkungspflicht Betriebsprüfung',icon:'📋',distractors:['§ 90 AO','§ 193 AO','§ 201 AO']},
  {quote:'Für Steuern, die nicht bis zum Ablauf des Fälligkeitstages entrichtet werden, ist … ein Säumniszuschlag zu entrichten.',para:'§ 240 AO',law:'AO',name:'Säumniszuschläge',icon:'💸',distractors:['§ 152 AO','§ 169 AO','§ 171 AO']},
  {quote:'Steuerpflichtige und ihre Vertreter dürfen nicht verpflichtet werden, Selbstbelastungen im Besteuerungsverfahren zu machen.',para:'§ 393 AO',law:'AO',name:'Verhältnis Straf- und Besteuerungsverfahren',icon:'⚖️',distractors:['§ 30 AO','§ 370 AO','§ 378 AO']},
  // EStG
  {quote:'Natürliche Personen, die … einen Wohnsitz … im Inland haben, sind unbeschränkt einkommensteuerpflichtig.',para:'§ 1 EStG',law:'EStG',name:'Unbeschränkte Steuerpflicht',icon:'🏠',distractors:['§ 2 EStG','§ 25 EStG','§ 1 KStG']},
  {quote:'Der Einkommensteuer unterliegen … Einkünfte aus Land- und Forstwirtschaft, Gewerbebetrieb, selbständiger Arbeit …',para:'§ 2 EStG',law:'EStG',name:'Einkunftsarten (Überblick)',icon:'📊',distractors:['§ 1 EStG','§ 13 EStG','§ 15 EStG']},
  {quote:'Einkünfte aus nichtselbständiger Arbeit sind Gehälter, Löhne, Gratifikationen …',para:'§ 19 EStG',law:'EStG',name:'Nichtselbständige Arbeit',icon:'💼',distractors:['§ 18 EStG','§ 20 EStG','§ 38 EStG']},
  {quote:'Einkünfte aus selbständiger Arbeit sind Einkünfte aus freiberuflicher Tätigkeit.',para:'§ 18 EStG',law:'EStG',name:'Selbständige Arbeit (Freie Berufe)',icon:'🎨',distractors:['§ 15 EStG','§ 19 EStG','§ 22 EStG']},
  {quote:'Einkünfte aus Gewerbebetrieb sind Einkünfte aus gewerblichen Unternehmen.',para:'§ 15 EStG',law:'EStG',name:'Gewerbebetrieb',icon:'🏭',distractors:['§ 13 EStG','§ 16 EStG','§ 17 EStG']},
  {quote:'Einkünfte aus Kapitalvermögen sind … Gewinnanteile (Dividenden) …',para:'§ 20 EStG',law:'EStG',name:'Kapitalvermögen',icon:'📈',distractors:['§ 19 EStG','§ 21 EStG','§ 23 EStG']},
  {quote:'Einkünfte aus Vermietung und Verpachtung sind Einkünfte aus der Vermietung unbeweglichen Vermögens.',para:'§ 21 EStG',law:'EStG',name:'Vermietung und Verpachtung',icon:'🏘️',distractors:['§ 20 EStG','§ 22 EStG','§ 23 EStG']},
  {quote:'Die Einkommensteuer beträgt … 14 Prozent … bis … 45 Prozent.',para:'§ 32a EStG',law:'EStG',name:'Einkommensteuertarif',icon:'📊',distractors:['§ 2 EStG','§ 25 EStG','§ 34 EStG']},
  {quote:'Werbungskosten sind Aufwendungen zur Erwerbung, Sicherung und Erhaltung der Einnahmen.',para:'§ 9 EStG',law:'EStG',name:'Werbungskosten',icon:'🧾',distractors:['§ 4 EStG','§ 10 EStG','§ 12 EStG']},
  {quote:'Nicht abziehbar sind Aufwendungen für die Lebensführung des Steuerpflichtigen …',para:'§ 12 EStG',law:'EStG',name:'Nicht abziehbare Ausgaben',icon:'🚫',distractors:['§ 9 EStG','§ 10 EStG','§ 11 EStG']},
  {quote:'Einnahmen sind innerhalb des Kalenderjahres bezogen, in dem sie dem Steuerpflichtigen zugeflossen sind.',para:'§ 11 EStG',law:'EStG',name:'Zu- und Abflussprinzip',icon:'💰',distractors:['§ 9 EStG','§ 10 EStG','§ 12 EStG']},
  {quote:'Private Veräußerungsgeschäfte sind … Veräußerungsgeschäfte bei Grundstücken, bei denen der Zeitraum … nicht mehr als zehn Jahre beträgt.',para:'§ 23 EStG',law:'EStG',name:'Private Veräußerungsgeschäfte',icon:'🏡',distractors:['§ 20 EStG','§ 21 EStG','§ 22 EStG']},
  // UStG
  {quote:'Der Umsatzsteuer unterliegen … Lieferungen und sonstige Leistungen, die ein Unternehmer … im Inland gegen Entgelt erbringt.',para:'§ 1 UStG',law:'UStG',name:'Steuerbare Umsätze',icon:'🛒',distractors:['§ 2 UStG','§ 3 UStG','§ 4 UStG']},
  {quote:'Unternehmer ist, wer eine gewerbliche oder berufliche Tätigkeit … selbständig ausübt.',para:'§ 2 UStG',law:'UStG',name:'Unternehmerbegriff',icon:'🏢',distractors:['§ 1 UStG','§ 3 UStG','§ 15 UStG']},
  {quote:'Der Umsatzsteuer ist … die Lieferung von Gegenständen … Die Lieferung ist … die Verschaffung der Verfügungsmacht.',para:'§ 3 UStG',law:'UStG',name:'Lieferung / sonstige Leistung',icon:'📦',distractors:['§ 1 UStG','§ 2 UStG','§ 4 UStG']},
  {quote:'Die Steuer beträgt für jeden steuerpflichtigen Umsatz 19 Prozent … ermäßigter Steuersatz: 7 Prozent.',para:'§ 12 UStG',law:'UStG',name:'Umsatzsteuersätze',icon:'💹',distractors:['§ 1 UStG','§ 4 UStG','§ 10 UStG']},
  {quote:'Der Unternehmer kann … Vorsteuerbeträge abziehen.',para:'§ 15 UStG',law:'UStG',name:'Vorsteuerabzug',icon:'↩️',distractors:['§ 12 UStG','§ 13 UStG','§ 14 UStG']},
  {quote:'Kleinunternehmer: Steuerpflichtige … deren Umsatz … 25.000 Euro nicht überstiegen hat.',para:'§ 19 UStG',law:'UStG',name:'Kleinunternehmerregelung',icon:'🏪',distractors:['§ 2 UStG','§ 12 UStG','§ 18 UStG']},
  // GG
  {quote:'Der Bund hat die ausschließliche Gesetzgebung über … Zölle und Finanzmonopole.',para:'Art. 105 GG',law:'GG',name:'Steuergesetzgebung Bund',icon:'🇩🇪',distractors:['Art. 20 GG','Art. 106 GG','Art. 108 GG']},
  {quote:'Die Bundesrepublik Deutschland ist ein demokratischer und sozialer Bundesstaat.',para:'Art. 20 GG',law:'GG',name:'Staatsgrundsätze (Demokratie, Sozialstaat)',icon:'⚖️',distractors:['Art. 1 GG','Art. 3 GG','Art. 28 GG']},
  {quote:'Das Eigentum … wird gewährleistet … Sein Gebrauch soll … dem Wohl der Allgemeinheit dienen.',para:'Art. 14 GG',law:'GG',name:'Eigentumsgarantie',icon:'🏛️',distractors:['Art. 1 GG','Art. 2 GG','Art. 3 GG']},
  {quote:'Alle Menschen sind vor dem Gesetz gleich.',para:'Art. 3 GG',law:'GG',name:'Gleichheitsgrundsatz',icon:'⚖️',distractors:['Art. 1 GG','Art. 2 GG','Art. 20 GG']},
];


// ==================== ⚡ GEGEN DIE ZEIT ====================

// --- Buchungssätze Daten ---
const D_BSATZ = [
  {
    scenario:'Ein Unternehmen kauft Büromaterial auf Rechnung.',
    amount:'480,00 €',
    correct:'Bürobedarf 480,00 € an Verbindlichkeiten a. LL 480,00 €',
    wrong:['Bank 480,00 € an Bürobedarf 480,00 €','Verbindlichkeiten a. LL 480,00 € an Kasse 480,00 €'],
    explain:'Kauf auf Rechnung → Aufwand (Bürobedarf) steigt, Verbindlichkeit entsteht.'
  },
  {
    scenario:'Das Unternehmen zahlt die Miete für den Monat per Banküberweisung.',
    amount:'1.200,00 €',
    correct:'Mietaufwand 1.200,00 € an Bank 1.200,00 €',
    wrong:['Bank 1.200,00 € an Mietaufwand 1.200,00 €','Kasse 1.200,00 € an Mietaufwand 1.200,00 €'],
    explain:'Mietzahlung per Bank → Aufwand (Soll) steigt, Bankkonto (Haben) sinkt.'
  },
  {
    scenario:'Ein Kunde zahlt eine offene Rechnung per Banküberweisung.',
    amount:'2.380,00 €',
    correct:'Bank 2.380,00 € an Forderungen a. LL 2.380,00 €',
    wrong:['Forderungen a. LL 2.380,00 € an Bank 2.380,00 €','Umsatzerlöse 2.380,00 € an Bank 2.380,00 €'],
    explain:'Kunde zahlt → Bank (Soll) steigt, Forderung (Haben) wird ausgebucht.'
  },
  {
    scenario:'Das Unternehmen entnimmt Geld aus der Kasse und legt es auf das Bankkonto ein.',
    amount:'500,00 €',
    correct:'Bank 500,00 € an Kasse 500,00 €',
    wrong:['Kasse 500,00 € an Bank 500,00 €','Eigenkapital 500,00 € an Kasse 500,00 €'],
    explain:'Kasseneinlage: Geld geht von Kasse (Haben) auf Bank (Soll) – reiner Aktivtausch.'
  },
  {
    scenario:'Das Unternehmen kauft eine Maschine und zahlt sofort per Banküberweisung.',
    amount:'15.000,00 €',
    correct:'Maschinen 15.000,00 € an Bank 15.000,00 €',
    wrong:['Bank 15.000,00 € an Maschinen 15.000,00 €','Maschinen 15.000,00 € an Verbindlichkeiten a. LL 15.000,00 €'],
    explain:'Kauf + Sofortzahlung: Aktivkonto Maschinen (Soll) steigt, Bank (Haben) sinkt.'
  },
  {
    scenario:'Der Unternehmer entnimmt privat Bargeld aus dem Betrieb.',
    amount:'300,00 €',
    correct:'Privatentnahme 300,00 € an Kasse 300,00 €',
    wrong:['Kasse 300,00 € an Privatentnahme 300,00 €','Eigenkapital 300,00 € an Bank 300,00 €'],
    explain:'Privatentnahme vermindert das Eigenkapital (Soll) und die Kasse (Haben).'
  },
  {
    scenario:'Das Unternehmen erhält eine Anzahlung eines Kunden auf das Bankkonto.',
    amount:'800,00 €',
    correct:'Bank 800,00 € an Erhaltene Anzahlungen 800,00 €',
    wrong:['Umsatzerlöse 800,00 € an Bank 800,00 €','Forderungen a. LL 800,00 € an Bank 800,00 €'],
    explain:'Anzahlung: Bank steigt (Soll), aber noch keine Leistung erbracht → Verbindlichkeit „Erhaltene Anzahlungen" (Haben).'
  },
  {
    scenario:'Das Unternehmen zahlt Löhne und Gehälter an Mitarbeiter per Bank.',
    amount:'8.500,00 €',
    correct:'Lohnaufwand 8.500,00 € an Bank 8.500,00 €',
    wrong:['Bank 8.500,00 € an Lohnaufwand 8.500,00 €','Lohnaufwand 8.500,00 € an Verbindlichkeiten a. LL 8.500,00 €'],
    explain:'Gehaltszahlung: Aufwandskonto Lohnaufwand (Soll) steigt, Bank (Haben) sinkt.'
  },
  {
    scenario:'Ein Unternehmen verkauft Waren gegen Rechnung (ohne Umsatzsteuer).',
    amount:'3.600,00 €',
    correct:'Forderungen a. LL 3.600,00 € an Umsatzerlöse 3.600,00 €',
    wrong:['Umsatzerlöse 3.600,00 € an Forderungen a. LL 3.600,00 €','Bank 3.600,00 € an Umsatzerlöse 3.600,00 €'],
    explain:'Verkauf auf Rechnung: Forderung entsteht (Soll), Erlös (Haben) steigt.'
  },
  {
    scenario:'Das Unternehmen begleicht eine Lieferantenrechnung per Banküberweisung.',
    amount:'950,00 €',
    correct:'Verbindlichkeiten a. LL 950,00 € an Bank 950,00 €',
    wrong:['Bank 950,00 € an Verbindlichkeiten a. LL 950,00 €','Aufwand 950,00 € an Bank 950,00 €'],
    explain:'Zahlung an Lieferant: Verbindlichkeit sinkt (Soll), Bank sinkt (Haben).'
  },
  {
    scenario:'Das Unternehmen erhält Zinsen für ein Bankguthaben gutgeschrieben.',
    amount:'120,00 €',
    correct:'Bank 120,00 € an Zinserträge 120,00 €',
    wrong:['Zinsaufwand 120,00 € an Bank 120,00 €','Zinserträge 120,00 € an Forderungen 120,00 €'],
    explain:'Zinseinnahmen: Bank (Soll) steigt, Ertragskonto Zinserträge (Haben) steigt.'
  },
  {
    scenario:'Eine Maschine wird planmäßig über 5 Jahre abgeschrieben (Jahresrate).',
    amount:'2.000,00 €',
    correct:'Abschreibungen 2.000,00 € an Maschinen 2.000,00 €',
    wrong:['Maschinen 2.000,00 € an Abschreibungen 2.000,00 €','Bank 2.000,00 € an Maschinen 2.000,00 €'],
    explain:'AfA: Aufwandskonto Abschreibungen (Soll) steigt, Aktivkonto Maschinen (Haben) sinkt.'
  },
  {
    scenario:'Das Unternehmen nimmt einen Kredit bei der Bank auf.',
    amount:'20.000,00 €',
    correct:'Bank 20.000,00 € an Verbindlichkeiten gegenüber Kreditinstituten 20.000,00 €',
    wrong:['Eigenkapital 20.000,00 € an Bank 20.000,00 €','Verbindlichkeiten 20.000,00 € an Bank 20.000,00 €'],
    explain:'Kreditaufnahme: Bank (Soll) steigt, neue Verbindlichkeit gegenüber Kreditinstituten (Haben) entsteht.'
  },
  {
    scenario:'Das Unternehmen kauft Rohstoffe und zahlt sofort per Kasse.',
    amount:'760,00 €',
    correct:'Rohstoffe 760,00 € an Kasse 760,00 €',
    wrong:['Kasse 760,00 € an Rohstoffe 760,00 €','Rohstoffe 760,00 € an Verbindlichkeiten a. LL 760,00 €'],
    explain:'Barkauf Rohstoffe: Bestandskonto Rohstoffe (Soll) steigt, Kasse (Haben) sinkt.'
  },
  {
    scenario:'Das Unternehmen zahlt Versicherungsprämien für das Geschäftsjahr per Bank.',
    amount:'1.800,00 €',
    correct:'Versicherungsaufwand 1.800,00 € an Bank 1.800,00 €',
    wrong:['Bank 1.800,00 € an Versicherungsaufwand 1.800,00 €','Versicherungsaufwand 1.800,00 € an Verbindlichkeiten 1.800,00 €'],
    explain:'Versicherungszahlung: Aufwand (Soll) steigt, Bank (Haben) sinkt.'
  },
  {
    scenario:'Waren werden aus dem Warenlager entnommen und als Aufwand verbucht.',
    amount:'1.100,00 €',
    correct:'Warenaufwand 1.100,00 € an Warenbestand 1.100,00 €',
    wrong:['Warenbestand 1.100,00 € an Warenaufwand 1.100,00 €','Umsatzerlöse 1.100,00 € an Warenbestand 1.100,00 €'],
    explain:'Warenentnahme: Aufwandskonto (Soll) steigt, Aktivkonto Warenbestand (Haben) sinkt.'
  },
  {
    scenario:'Das Unternehmen erhält eine Gutschrift für eine fehlerhafte Lieferung.',
    amount:'340,00 €',
    correct:'Verbindlichkeiten a. LL 340,00 € an Skontoerträge/Wareneinkauf 340,00 €',
    wrong:['Umsatzerlöse 340,00 € an Verbindlichkeiten 340,00 €','Bank 340,00 € an Forderungen 340,00 €'],
    explain:'Gutschrift des Lieferanten: Verbindlichkeit sinkt (Soll), Gegenleistung (Haben) als Ertragskorrektur.'
  },
  {
    scenario:'Das Unternehmen zahlt Körperschaftsteuer-Vorauszahlung per Banküberweisung.',
    amount:'5.000,00 €',
    correct:'Körperschaftsteuer 5.000,00 € an Bank 5.000,00 €',
    wrong:['Bank 5.000,00 € an Körperschaftsteuer 5.000,00 €','Steueraufwand 5.000,00 € an Verbindlichkeiten 5.000,00 €'],
    explain:'Steuervorauszahlung: Steueraufwandskonto (Soll) steigt, Bank (Haben) sinkt.'
  },
];

// Speed state
let spTimer=null, spMode='menu', spSub='bsatz';
let spIdx=0, spPool=[], spAnswered=false, spSeconds=0, spScore=0, spCombo=0, spCorrect=0, spWrong=0;
const SP_TIME_BSATZ=12, SP_TIME_PARA=10, SP_ROUNDS=10;

// --- RENDER ENTRY ---
function renderSpeed(a){
  clearInterval(spTimer);
  spMode='menu';
  a.innerHTML=`<div>
    <div class="speed-hero">
      <h2>⚡ Gegen die Zeit</h2>
      <p>Schnell denken – schnell antworten · Jede Sekunde zählt!</p>
    </div>
    <div class="speed-sub-tabs">
      <button class="speed-sub-btn" onclick="spStart('bsatz')">
        <span class="ssbi">📒</span>
        <div class="ssbt">Buchungssätze</div>
        <div class="ssbs">12 Sek. · ${D_BSATZ.length} Sachverhalte</div>
      </button>
      <button class="speed-sub-btn" onclick="spStart('para')">
        <span class="ssbi">🔍</span>
        <div class="ssbt">§ Para-Sprint</div>
        <div class="ssbs">10 Sek. · ${D_PARA.length} Paragraphen</div>
      </button>
    </div>
    <div style="background:var(--light);border:2px solid #dde5f5;border-radius:14px;padding:14px 16px;font-size:12px;color:#555;font-weight:700;line-height:1.7">
      💡 <b>Wie es funktioniert:</b> Pro Frage läuft ein Countdown.<br>
      Richtige Antwort = Punkte + Combo-Bonus.<br>
      Zeit abgelaufen oder falsch = Combo bricht ab.<br>
      Schaffe so viele richtige Antworten wie möglich in <b>${SP_ROUNDS} Fragen</b>!
    </div>
  </div>`;
}

function spStart(sub){
  clearInterval(spTimer);
  spSub=sub;
  spIdx=0; spAnswered=false; spScore=0; spCombo=0; spCorrect=0; spWrong=0;
  if(sub==='bsatz') spPool=[...D_BSATZ].sort(()=>Math.random()-.5).slice(0,SP_ROUNDS);
  else spPool=[...D_PARA].sort(()=>Math.random()-.5).slice(0,SP_ROUNDS);
  spMode='playing';
  spRender();
}

function spRender(){
  clearInterval(spTimer);
  const a=document.getElementById('ga');
  if(spIdx>=spPool.length){spEnd();return;}
  spAnswered=false;
  spSeconds=spSub==='bsatz'?SP_TIME_BSATZ:SP_TIME_PARA;
  const item=spPool[spIdx];
  const circumference=2*Math.PI*30; // r=30
  if(spSub==='bsatz') spRenderBsatz(a,item,circumference);
  else spRenderPara(a,item,circumference);
  spStartTimer(circumference);
}

function spRenderBsatz(a,item,circ){
  const opts=[
    {text:item.correct,correct:true},
    ...item.wrong.map(w=>({text:w,correct:false}))
  ].sort(()=>Math.random()-.5);
  a.innerHTML=`<div>
    ${spHeader(circ)}
    <div class="bsatz-scenario">
      <div class="bsatz-scenario-label">📋 Sachverhalt – welcher Buchungssatz ist richtig?</div>
      <div class="bsatz-scenario-text">${item.scenario}</div>
      <div class="bsatz-amount">💶 ${item.amount}</div>
    </div>
    <div class="bsatz-options">
      ${opts.map((o,i)=>`<button class="bsatz-btn" id="sbopt-${i}" onclick="spAnswerBsatz(${i},${o.correct})">
        <span class="bsatz-label">Option ${String.fromCharCode(65+i)}</span>
        ${o.text}
      </button>`).join('')}
    </div>
    <div class="fb" id="spfb"></div>
  </div>`;
}

function spRenderPara(a,item,circ){
  const law=item.law;
  const allOpts=[
    {para:item.para,name:item.name,correct:true},
    ...item.distractors.map(d=>{
      const f=D_PARA.find(x=>x.para===d);
      return {para:d,name:f?f.name:(PARA_NAMES[d]||''),correct:false};
    })
  ].sort(()=>Math.random()-.5).slice(0,3); // only 3 options for speed mode
  a.innerHTML=`<div>
    ${spHeader(circ)}
    <div class="para-quote" style="margin-bottom:12px">
      <div class="para-quote-label">📖 Welcher Paragraph? · Gesetz: <b>${law}</b></div>
      <div class="para-quote-text">${item.quote}</div>
    </div>
    <div class="bsatz-options">
      ${allOpts.map((o,i)=>`<button class="bsatz-btn" id="sbopt-${i}" onclick="spAnswerPara(${i},${o.correct})">
        <span class="bsatz-label">Option ${String.fromCharCode(65+i)}</span>
        <b style="font-size:14px">${o.para}</b> ${o.name?`<span style="color:#888;font-size:10px;font-family:'Nunito',sans-serif;font-weight:700"> – ${o.name}</span>`:''}
      </button>`).join('')}
    </div>
    <div class="fb" id="spfb"></div>
  </div>`;
}

function spHeader(circ){
  const timeSec=spSub==='bsatz'?SP_TIME_BSATZ:SP_TIME_PARA;
  const ringColor=spSeconds>timeSec*.4?'#00c2e0':'#ff4d6d';
  return `<div class="speed-hdr">
    <div class="speed-ring-wrap">
      <svg class="speed-ring" viewBox="0 0 72 72" width="72" height="72">
        <circle class="speed-ring-bg" cx="36" cy="36" r="30"/>
        <circle class="speed-ring-fill" id="spRingFill" cx="36" cy="36" r="30"
          stroke="${ringColor}"
          stroke-dasharray="${circ}"
          stroke-dashoffset="${circ*(1-spSeconds/timeSec)}"/>
      </svg>
      <div class="speed-ring-num" id="spRingNum">${spSeconds}</div>
    </div>
    <div class="speed-hdr-info">
      <div class="speed-hdr-q">${spSub==='bsatz'?'📒 Buchungssatz':'🔍 § Para-Sprint'} · Frage ${spIdx+1}/${SP_ROUNDS}</div>
      <div class="speed-hdr-score">⭐ ${spScore} Pkt &nbsp;|&nbsp; 🔥 ${spCombo}er Combo &nbsp;|&nbsp; ✅ ${spCorrect} / ❌ ${spWrong}</div>
    </div>
  </div>`;
}

function spStartTimer(circ){
  const timeSec=spSub==='bsatz'?SP_TIME_BSATZ:SP_TIME_PARA;
  spTimer=setInterval(()=>{
    spSeconds--;
    const num=document.getElementById('spRingNum');
    const ring=document.getElementById('spRingFill');
    if(!num){clearInterval(spTimer);return;}
    num.textContent=spSeconds;
    const frac=Math.max(0,spSeconds/timeSec);
    const c=2*Math.PI*30;
    ring.setAttribute('stroke-dashoffset', c*(1-frac));
    ring.setAttribute('stroke', spSeconds>timeSec*.4?'#00c2e0':'#ff4d6d');
    if(spSeconds<=0){clearInterval(spTimer);if(!spAnswered)spTimeout();}
  },1000);
}

function spAnswerBsatz(idx,correct){
  if(spAnswered)return;
  spAnswered=true; clearInterval(spTimer);
  const item=spPool[spIdx];
  spProcessAnswer(correct, idx, item.explain);
}

function spAnswerPara(idx,correct){
  if(spAnswered)return;
  spAnswered=true; clearInterval(spTimer);
  const item=spPool[spIdx];
  spProcessAnswer(correct, idx, `<b>${item.para} ${item.law}</b> – ${item.name}`);
}

function spProcessAnswer(correct, idx, explain){
  document.querySelectorAll('.bsatz-btn').forEach(b=>b.disabled=true);
  if(correct){
    const timeSec=spSub==='bsatz'?SP_TIME_BSATZ:SP_TIME_PARA;
    spCombo++; spCorrect++;
    const pts=10+spCombo*2+Math.ceil(spSeconds/timeSec*10);
    spScore+=pts; totSc+=pts; corr++; streak++;
    document.getElementById('sbopt-'+idx).classList.add('correct');
    document.getElementById('totSc').textContent=totSc;
    document.getElementById('corrCt').textContent=corr;
    const sc=document.getElementById('streakCt');
    sc.textContent=streak+' 🔥';
    if(streak>=3)sc.classList.add('streak-hot');
    if(spCombo>=3) spShowCombo(spCombo);
    checkBadges(); conf(4);
    const fb=document.getElementById('spfb');
    fb.className='fb show correct';
    fb.innerHTML=`✅ Richtig! +${pts} Pkt${spCombo>1?` <span class="para-xp">🔥 ${spCombo}er Combo!</span>`:''}${explain?`<br><span style="font-size:11px;color:#666">${explain}</span>`:''}`;
  } else {
    spCombo=0; spWrong++; wrong++; streak=0;
    document.getElementById('sbopt-'+idx).classList.add('wrong');
    document.getElementById('wrongCt').textContent=wrong;
    document.getElementById('streakCt').textContent='0 🔥';
    document.getElementById('streakCt').classList.remove('streak-hot');
    // highlight correct
    document.querySelectorAll('.bsatz-btn').forEach(b=>{
      if(spSub==='bsatz'&&b.textContent.includes(spPool[spIdx].correct.substring(0,20)))b.classList.add('correct');
      else if(spSub==='para'&&b.querySelector('b')&&b.querySelector('b').textContent===spPool[spIdx].para)b.classList.add('correct');
      else if(!b.classList.contains('wrong'))b.classList.add('dim');
    });
    const fb=document.getElementById('spfb');
    fb.className='fb show wrong';
    fb.innerHTML=`❌ Falsch! Combo weg.${explain?`<br><span style="font-size:11px;color:#666">${explain}</span>`:''}`;
  }
  setTimeout(()=>{spIdx++;spRender();},1600);
}

function spTimeout(){
  spAnswered=true; spCombo=0; spWrong++; wrong++; streak=0;
  document.querySelectorAll('.bsatz-btn').forEach(b=>{
    b.disabled=true;
    if(spSub==='bsatz'&&b.textContent.includes(spPool[spIdx].correct.substring(0,20)))b.classList.add('correct');
    else if(spSub==='para'&&b.querySelector('b')&&b.querySelector('b').textContent===spPool[spIdx].para)b.classList.add('correct');
    else b.classList.add('dim');
  });
  document.getElementById('wrongCt').textContent=wrong;
  document.getElementById('streakCt').textContent='0 🔥';
  document.getElementById('streakCt').classList.remove('streak-hot');
  const fb=document.getElementById('spfb');
  fb.className='fb show wrong';
  fb.innerHTML=`⏰ Zeit! Combo weg.`;
  setTimeout(()=>{spIdx++;spRender();},1600);
}

function spShowCombo(n){
  const el=document.getElementById('comboFlash');
  const msgs={3:'🔥 Combo x3!',5:'⚡ Combo x5!!',7:'💥 COMBO x7!!!',10:'🏆 PERFECT x10!!!'};
  el.textContent=msgs[n]||(n>=10?'🏆 UNSTOPPABLE!':null);
  if(!el.textContent)return;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),900);
}

function spEnd(){
  clearInterval(spTimer);
  const a=document.getElementById('ga');
  const maxPts=SP_ROUNDS*(10+SP_ROUNDS*2+10);
  const pct=Math.round(spCorrect/SP_ROUNDS*100);
  const ringColor=pct>=80?'var(--green)':pct>=50?'var(--cyan)':'var(--orange)';
  const emoji=pct>=80?'🏆':pct>=50?'🎯':'📖';
  updateHighscore('speed_'+spSub,spScore,maxPts);
  a.innerHTML=`<div class="result-sc show">
    <div class="result-trophy">${emoji}</div>
    <div class="result-score-ring" style="background:conic-gradient(${ringColor} ${pct*3.6}deg,rgba(255,255,255,.08) 0%);box-shadow:0 0 30px rgba(0,194,224,.3)">
      <div class="result-score-inner">${spScore}<small>Pkt</small></div>
    </div>
    <div class="result-title">${spSub==='bsatz'?'📒 Buchungssätze':'🔍 § Sprint'} – Ergebnis</div>
    <div style="display:flex;gap:12px;justify-content:center;margin:10px 0">
      <div style="background:rgba(0,201,123,.12);border:2px solid rgba(0,201,123,.3);border-radius:10px;padding:8px 16px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:var(--green)">${spCorrect}</div>
        <div style="font-size:10px;color:#888;font-weight:700">Richtig</div>
      </div>
      <div style="background:rgba(255,77,109,.1);border:2px solid rgba(255,77,109,.25);border-radius:10px;padding:8px 16px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:var(--red)">${spWrong}</div>
        <div style="font-size:10px;color:#888;font-weight:700">Falsch/Zeit</div>
      </div>
      <div style="background:rgba(255,217,74,.12);border:2px solid rgba(255,217,74,.3);border-radius:10px;padding:8px 16px;text-align:center">
        <div style="font-size:20px;font-weight:900;color:var(--yellow)">${spScore}</div>
        <div style="font-size:10px;color:#888;font-weight:700">Punkte</div>
      </div>
    </div>
    <div class="result-msg">${pct>=80?'Blitzschnell und präzise – Steuerprofi!':pct>=50?'Gut! Mit etwas Übung bist du unschlagbar.':'Buchungssätze brauchen Übung – dran bleiben!'}</div>
    <div class="result-actions">
      <button class="restart-btn" onclick="spStart('${spSub}')">🔄 Nochmal</button>
      <button class="restart-btn" style="background:linear-gradient(135deg,#3d0a6b,#7b2ff7);color:#fff" onclick="spStart('${spSub==='bsatz'?'para':'bsatz'}')">
        ${spSub==='bsatz'?'🔍 § Sprint':'📒 Buchungssätze'} ausprobieren ➜
      </button>
    </div>
  </div>`;
  conf(20);
}

// ==================== BADGES ====================
const BADGES = [
  {id:'first_correct', icon:'⭐', name:'Erster Treffer', desc:'Erste richtige Antwort gegeben', check:()=>corr>=1},
  {id:'streak3',       icon:'🔥', name:'Auf Feuer',      desc:'3 richtige Antworten in Folge', check:()=>streak>=3},
  {id:'streak7',       icon:'🌋', name:'Unaufhaltsam',   desc:'7 richtige Antworten in Folge', check:()=>streak>=7},
  {id:'score50',       icon:'🥉', name:'50 Punkte',      desc:'50 Punkte erreicht', check:()=>totSc>=50},
  {id:'score200',      icon:'🥈', name:'200 Punkte',     desc:'200 Punkte erreicht', check:()=>totSc>=200},
  {id:'score500',      icon:'🥇', name:'500 Punkte',     desc:'500 Punkte erreicht', check:()=>totSc>=500},
  {id:'ao_done',       icon:'⚖️', name:'AO-Kenner',      desc:'Abgabenordnung-Quiz abgeschlossen', check:()=>false},
  {id:'kurios_done',   icon:'🤯', name:'Kuriositätenfan', desc:'Kurioses-Quiz abgeschlossen', check:()=>false},
  {id:'all_modes',     icon:'🏆', name:'Allrounder',     desc:'Alle Kategorien mindestens einmal gespielt', check:()=>false},
  {id:'daily_done',    icon:'📅', name:'Tagesaufgabe',    desc:'Daily Challenge einmal abgeschlossen', check:()=>false},
  {id:'streak7_daily', icon:'🔥', name:'Wochentreue',     desc:'7 Tage Daily Challenge in Folge', check:()=>false},
  {id:'streak30_daily',icon:'💎', name:'Monatslegende',   desc:'30 Tage Daily Challenge in Folge', check:()=>false},
];
let earnedBadges = JSON.parse(localStorage.getItem('badges')||'[]');
let playedModes  = JSON.parse(localStorage.getItem('playedModes')||'[]');
let highscores   = JSON.parse(localStorage.getItem('highscores')||'{}');
let toastQueue = [];
let toastActive = false;

function saveBadges(){localStorage.setItem('badges', JSON.stringify(earnedBadges));}
function saveHS(){localStorage.setItem('highscores', JSON.stringify(highscores));}
function savePlayedModes(){localStorage.setItem('playedModes', JSON.stringify(playedModes));}

function checkBadges(){
  BADGES.forEach(b=>{
    if(earnedBadges.includes(b.id)) return;
    let earned = false;
    if(b.id==='all_modes') earned = ['basics','est','ust','bilanz','ao','kurios','recht','karriere'].every(m=>playedModes.includes(m));
    else earned = b.check();
    if(earned){ earnedBadges.push(b.id); saveBadges(); showBadgeToast(b); }
  });
}
function triggerBadge(id){
  const b = BADGES.find(x=>x.id===id);
  if(b && !earnedBadges.includes(id)){earnedBadges.push(id);saveBadges();showBadgeToast(b);}
}
function showBadgeToast(b){
  toastQueue.push(b);
  if(!toastActive) processToastQueue();
}
function processToastQueue(){
  if(!toastQueue.length){toastActive=false;return;}
  toastActive=true;
  const b=toastQueue.shift();
  document.getElementById('bt-icon').textContent=b.icon;
  document.getElementById('bt-name').textContent=b.name;
  document.getElementById('bt-desc').textContent=b.desc;
  const t=document.getElementById('badge-toast');
  t.classList.add('show');
  setTimeout(()=>{t.classList.remove('show');setTimeout(processToastQueue,500);},3000);
}

function updateHighscore(m, score, total){
  if(!highscores[m] || score > highscores[m].score){
    highscores[m]={score,total};
    saveHS();
  }
}
function getHSChip(m){
  const hs = highscores[m];
  if(!hs) return '';
  return `<span class="hs-chip">🏆 Rekord ${hs.score}/${hs.total}</span>`;
}

function renderBadges(a){
  a.innerHTML=`<div class="basics">
<div class="basics-hero" style="background:linear-gradient(135deg,#1a1a2e,#3a2060)">
  <h2>🏅 Deine Abzeichen</h2>
  <p>${earnedBadges.length} von ${BADGES.length} freigeschaltet</p>
</div>
<div style="background:linear-gradient(135deg,rgba(255,217,74,.12),rgba(255,217,74,.05));border:2px solid rgba(255,217,74,.25);border-radius:14px;padding:14px;margin-bottom:18px;text-align:center">
  <div style="font-size:32px;font-weight:900;color:var(--yellow)">${earnedBadges.length}<span style="font-size:16px;color:rgba(255,255,255,.5)"> / ${BADGES.length}</span></div>
  <div style="font-size:11px;color:#888;font-weight:700;margin-top:2px">Abzeichen freigeschaltet</div>
  <div style="height:6px;background:rgba(255,255,255,.08);border-radius:100px;margin-top:10px;overflow:hidden">
    <div style="height:100%;background:linear-gradient(90deg,var(--yellow),var(--orange));border-radius:100px;width:${Math.round(earnedBadges.length/BADGES.length*100)}%;transition:width .6s ease"></div>
  </div>
</div>
<div class="bsec">🎖️ Alle Abzeichen</div>
<div class="badge-grid">
  ${BADGES.map(b=>{
    const earned=earnedBadges.includes(b.id);
    return `<div class="badge-item ${earned?'earned':'locked'}">
      <span class="bgi">${b.icon}</span>
      <div class="bgn">${b.name}</div>
      <div class="bgs">${earned?'✅ Freigeschaltet':b.desc}</div>
    </div>`;
  }).join('')}
</div>
<div class="bsec">📊 Highscores pro Kategorie</div>
<div style="display:flex;flex-direction:column;gap:6px;margin-bottom:18px">
  ${['est','ust','bilanz','ao','kurios','recht'].map(m=>{
    const labels={est:'💼 Einkommensteuer',ust:'🛒 Umsatzsteuer',bilanz:'📋 Bilanz',ao:'⚖️ Abgabenordnung',kurios:'🤯 Kurioses',recht:'🏛️ Privat- & Öff. Recht'};
    const hs=highscores[m];
    const pct=hs?Math.round(hs.score/hs.total*100):0;
    return `<div style="background:var(--light);border:2px solid #dde5f5;border-radius:11px;padding:11px 14px;display:flex;align-items:center;gap:12px">
      <div style="flex:1;font-size:12px;font-weight:800;color:var(--navy)">${labels[m]}</div>
      ${hs
        ?`<div style="font-size:11px;font-family:'Space Mono',monospace;color:var(--blue);font-weight:700">${hs.score}/${hs.total}</div>
           <div style="width:60px;height:5px;background:#e0e8f5;border-radius:100px;overflow:hidden"><div style="height:100%;background:${pct>=80?'var(--green)':pct>=50?'var(--cyan)':'var(--orange)'};border-radius:100px;width:${pct}%"></div></div>`
        :`<div style="font-size:10px;color:#aaa;font-weight:700">Noch nicht gespielt</div>`
      }
    </div>`;
  }).join('')}
</div>
<button onclick="showConfirm('🗑️','Abzeichen zurücksetzen?','Alle Abzeichen und Highscores werden gelöscht. Das kann nicht rückgängig gemacht werden.',()=>{earnedBadges=[];highscores={};playedModes=[];saveBadges();saveHS();savePlayedModes();renderBadges(document.getElementById('ga'));})" style="width:100%;padding:11px;border-radius:10px;border:2px solid rgba(255,77,109,.3);background:rgba(255,77,109,.08);color:#ff4d6d;font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;cursor:pointer">🗑️ Fortschritt zurücksetzen</button>
</div>`;
}

// ==================== SPLASH ====================
function initSplash(){
  setTimeout(()=>{
    const s=document.getElementById('splash');
    s.classList.add('hide');
    setTimeout(()=>{
      s.remove();
      updateLevelChip();
      applyLevelUI();
      updateResumeBanner();
      restoreTabVisited();
      if(!localStorage.getItem('nutzung_accepted_v1')){
        showConsentBanner();
      } else {
        checkTour();
      }
    },700);
  },2200);
}

function showConsentBanner(){
  document.getElementById('consent-banner').style.display='flex';
}
function acceptConsent(){
  localStorage.setItem('nutzung_accepted_v1','1');
  document.getElementById('consent-banner').style.display='none';
  checkTour();
}
function toggleConsentCheck(){
  const cb = document.getElementById('consent-check');
  const btn = document.getElementById('consent-start-btn');
  if(!cb||!btn) return;
  if(cb.checked){
    btn.disabled=false;
    btn.style.background='linear-gradient(135deg,#1a3a8f,#2255cc)';
    btn.style.cursor='pointer';
  } else {
    btn.disabled=true;
    btn.style.background='#c0cce8';
    btn.style.cursor='not-allowed';
  }
}
function handleConsentStart(){
  const cb = document.getElementById('consent-check');
  if(cb&&cb.checked) acceptConsent();
}

function scrollToId(id){
  // Small delay ensures the element is in the DOM after dynamic render
  requestAnimationFrame(()=>{
    const el = document.getElementById(id);
    if(!el) return;
    // Account for sticky bottom nav on mobile (~72px) and a little breathing room
    const navH = window.innerWidth <= 640 ? 80 : 16;
    const top = el.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({top, behavior:'smooth'});
  });
}
function showAblauf(which){
  document.getElementById('ablauf-md').style.display=which==='md'?'block':'none';
  document.getElementById('ablauf-gd').style.display=which==='gd'?'block':'none';
  const btnMd=document.getElementById('ablauf-btn-md');
  const btnGd=document.getElementById('ablauf-btn-gd');
  if(which==='md'){
    btnMd.style.background='rgba(0,201,123,.25)';btnMd.style.color='#00c97b';btnMd.style.borderColor='rgba(0,201,123,.6)';
    btnGd.style.background='rgba(255,255,255,.05)';btnGd.style.color='rgba(255,255,255,.4)';btnGd.style.borderColor='rgba(255,255,255,.1)';
  } else {
    btnGd.style.background='rgba(0,194,224,.2)';btnGd.style.color='var(--cyan)';btnGd.style.borderColor='rgba(0,194,224,.5)';
    btnMd.style.background='rgba(255,255,255,.05)';btnMd.style.color='rgba(255,255,255,.4)';btnMd.style.borderColor='rgba(255,255,255,.1)';
  }
}

// ==================== CATEGORY PROGRESS TRACKING ====================
const CAT_STATS_KEY = 'category_stats_v2';
let catStats = {};
try { catStats = JSON.parse(localStorage.getItem(CAT_STATS_KEY) || '{}'); } catch(e) { catStats = {}; }
function saveCatStats(){ localStorage.setItem(CAT_STATS_KEY, JSON.stringify(catStats)); }
function trackCategoryProgress(m, ok){
  if(!catStats[m]) catStats[m] = {c:0, t:0};
  catStats[m].t++;
  if(ok) catStats[m].c++;
  saveCatStats();
}

// ==================== PRAXISFÄLLE ====================
function startPraxis(id, resume){
  praxisOpen = id;
  if(resume && praxisProgress[id]){
    praxisStep  = praxisProgress[id].step;
    praxisScore = praxisProgress[id].score;
  } else {
    praxisStep = 0;
    praxisScore = 0;
    delete praxisProgress[id];
    savePraxisProgress();
  }
  praxisAnswered = false;
  render();
}

function leavePraxis(){
  if(praxisOpen && praxisStep > 0){
    praxisProgress[praxisOpen] = {step: praxisStep, score: praxisScore};
    savePraxisProgress();
  }
  praxisOpen = null;
  render();
}

function resetPraxis(id){
  delete praxisDone[id];
  delete praxisProgress[id];
  savePraxisDone();
  savePraxisProgress();
  render();
}

function renderPraxis(a){
  if(!praxisOpen){ renderPraxisOverview(a); return; }
  const fall = D_PRAXIS.find(p=>p.id===praxisOpen);
  if(!fall){ praxisOpen=null; renderPraxisOverview(a); return; }
  if(praxisStep >= fall.steps.length){ renderPraxisResult(a, fall); return; }
  renderPraxisActive(a, fall);
}

function makePraxisCard(p){
  const isDone = !!praxisDone[p.id];
  const inProgress = !isDone && !!praxisProgress[p.id];
  const prog = inProgress ? praxisProgress[p.id] : null;
  const catCls = p.cat.toLowerCase();
  const statusBadge = isDone ? '✅' : inProgress ? '⏸️' : '▶️';
  const statusText = isDone ? ' · ✅ Abgeschlossen'
    : inProgress ? ' · ⏸️ Ab Schritt '+(prog.step+1)+' weitermachen'
    : '';
  const cardClass = isDone ? ' done' : inProgress ? ' in-progress' : '';
  const btnStyle1 = 'flex:1;min-width:0;padding:7px 10px;border-radius:9px;border:none;background:linear-gradient(135deg,var(--blue),#2255cc);color:#fff;font-family:Nunito,sans-serif;font-weight:800;font-size:11px;cursor:pointer';
  const btnStyle2 = 'flex:1;min-width:0;padding:7px 10px;border-radius:9px;border:2px solid #dde5f5;background:#f0f4ff;color:var(--navy);font-family:Nunito,sans-serif;font-weight:800;font-size:11px;cursor:pointer';
  const btnStyleReset = 'flex:0 0 auto;padding:7px 10px;border-radius:9px;border:2px solid rgba(255,77,109,.3);background:rgba(255,77,109,.06);color:#c0003a;font-family:Nunito,sans-serif;font-weight:800;font-size:11px;cursor:pointer';
  let btns = '';
  if(inProgress){
    btns = '<button style="'+btnStyle1+'" onclick="startPraxis(\''+p.id+'\',true)">▶ Weitermachen</button>'
          +'<button style="'+btnStyle2+'" onclick="startPraxis(\''+p.id+'\',false)">↺ Neu starten</button>';
  } else if(isDone){
    btns = '<button style="'+btnStyle2+'" onclick="startPraxis(\''+p.id+'\',false)">↺ Nochmal</button>'
          +'<button style="'+btnStyleReset+'" onclick="resetPraxis(\''+p.id+'\')">🗑️ Reset</button>';
  } else {
    btns = '<button style="'+btnStyle1+'" onclick="startPraxis(\''+p.id+'\',false)">▶ Starten</button>';
  }
  return '<div class="praxis-card'+cardClass+'" style="cursor:default;align-items:flex-start">'
    +'<div class="praxis-card-icon" style="padding-top:2px">'+p.icon+'</div>'
    +'<div class="praxis-card-body" class="u-flex-min">'
      +'<div class="praxis-card-cat '+catCls+'">'+p.cat+'</div>'
      +'<div class="praxis-card-title">'+p.title+'</div>'
      +'<div class="praxis-card-sub">'+p.steps.length+' Schritte'+statusText+'</div>'
      +'<div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap">'+btns+'</div>'
    +'</div>'
    +'<div class="praxis-card-badge" style="margin-left:4px;flex-shrink:0">'+statusBadge+'</div>'
  +'</div>';
}

function renderPraxisOverview(a){
  const total = D_PRAXIS.length;
  const done = Object.keys(praxisDone).length;
  const pct = Math.round(done/total*100);
  a.innerHTML = `
    <div class="praxis-hero">
      <h2>📋 Praxisfälle</h2>
      <p>Realistische Steuerszenarien · Schritt für Schritt durchdenken</p>
      <div style="margin-top:12px;display:flex;gap:10px;align-items:center">
        <div style="flex:1;height:5px;background:rgba(255,255,255,.15);border-radius:100px;overflow:hidden">
          <div style="height:100%;background:var(--cyan);border-radius:100px;width:${pct}%;transition:width .6s"></div>
        </div>
        <span style="font-size:10px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.5)">${done}/${total} abgeschlossen</span>
      </div>
    </div>
    ${D_PRAXIS.map(p=>makePraxisCard(p)).join('')}
    <div style="height:90px"></div>`;
}

function renderPraxisActive(a, fall){
  const step = fall.steps[praxisStep];
  const total = fall.steps.length;
  const p = Math.round(praxisStep/total*100);
  const stepDots = fall.steps.map((_,i)=>`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;margin:0 2px;background:${i<praxisStep?'var(--cyan)':i===praxisStep?'#fff':'rgba(255,255,255,.2)'};transition:background .3s"></span>`).join('');

  // Build context block: intro + all previous steps' situations
  const contextLines = [`<div style="margin-bottom:6px;font-size:12px;font-weight:800;color:rgba(255,255,255,.5);letter-spacing:.5px">📖 SACHVERHALT</div>`,
    `<div style="font-size:12.5px;color:rgba(255,255,255,.75);line-height:1.6;font-weight:700;margin-bottom:${praxisStep>0?'10px':'0'}">${fall.intro}</div>`];
  for(let i=0;i<praxisStep;i++){
    contextLines.push(`<div style="border-top:1px solid rgba(255,255,255,.12);padding-top:8px;margin-top:2px">
      <div style="font-size:9px;font-family:'Space Mono',monospace;color:rgba(255,255,255,.35);letter-spacing:1px;margin-bottom:3px">SCHRITT ${i+1}</div>
      <div style="font-size:12px;color:rgba(255,255,255,.6);line-height:1.55;font-weight:700">${fall.steps[i].situation}</div>
    </div>`);
  }

  a.innerHTML = `
    <div class="praxis-scenario-header">
      <div class="praxis-sh-cat">${fall.cat} · Praxisfall ${fall.id.replace('p','')}</div>
      <div class="praxis-sh-title">${fall.icon} ${fall.title}</div>
      <div style="margin:10px 0 8px">${contextLines.join('')}</div>
      <div class="praxis-step-pill">${stepDots} &nbsp;Schritt ${praxisStep+1} von ${total}</div>
    </div>
    <div class="prog-lbl">${p}%</div><div class="prog-wrap"><div class="prog-fill" style="width:${p}%;background:var(--blue)"></div></div>
    <div class="praxis-situation">
      <div class="praxis-situation-label">📌 Schritt ${praxisStep+1} – Neue Situation</div>
      <div class="praxis-situation-text">${step.situation}</div>
    </div>
    <div class="praxis-frage">❓ ${step.frage}</div>
    <div class="ao-grid">
      ${step.opts.map((o,i)=>`<button class="choice-btn" onclick="ansPraxis(${i})" data-i="${i}"><span class="ct">${o}</span></button>`).join('')}
    </div>
    <div class="fb" id="fb"></div>
    <button class="next-btn" id="nb" onclick="nextPraxisStep()" style="display:none">Weiter ➜</button>
    <button id="leave-btn" onclick="leavePraxis()" style="width:100%;margin-top:8px;padding:10px;border-radius:11px;border:2px solid rgba(26,58,143,.2);background:#f0f4ff;color:#888;font-family:'Nunito',sans-serif;font-weight:800;font-size:12px;cursor:pointer">← Verlassen (Fortschritt wird gespeichert)</button>`;
  praxisAnswered = false;
}

function ansPraxis(ch){
  if(praxisAnswered) return;
  praxisAnswered = true;
  const fall = D_PRAXIS.find(p=>p.id===praxisOpen);
  const step = fall.steps[praxisStep];
  const ok = ch === step.ans;
  if(ok) praxisScore++;
  updSc(ok);
  if(!ok) addFehler({q:step.frage, opts:step.opts, ans:step.ans, explain:step.explain, icon:fall.icon, name:fall.title, _qtype:'mc'}, fall.cat.toLowerCase()==='est'?'est':fall.cat.toLowerCase()==='ust'?'ust':'ao');
  document.querySelectorAll('.choice-btn').forEach(b=>{
    b.disabled=true;
    if(parseInt(b.dataset.i)===step.ans) b.classList.add('correct');
    else if(parseInt(b.dataset.i)===ch && !ok) b.classList.add('wrong');
  });
  const explainWithMerker = step.explain + (step.merker?`<div class="praxis-merker">💡 <b>Merker:</b> ${step.merker}</div>`:'');
  showFb(ok, explainWithMerker, step.frage);
  if(ok) conf(5);
  const nb = document.getElementById('nb');
  if(nb) nb.style.display = 'block';
}

function nextPraxisStep(){
  praxisStep++;
  const fall = D_PRAXIS.find(p=>p.id===praxisOpen);
  if(praxisStep >= fall.steps.length){
    praxisDone[praxisOpen] = {score:praxisScore, total:fall.steps.length, ts:Date.now()};
    delete praxisProgress[praxisOpen];
    savePraxisDone();
    savePraxisProgress();
    checkBadges();
    render();
  } else {
    // Save mid-progress automatically
    praxisProgress[praxisOpen] = {step: praxisStep, score: praxisScore};
    savePraxisProgress();
    render();
  }
}

function renderPraxisResult(a, fall){
  const score = praxisScore;
  const total = fall.steps.length;
  const pct = Math.round(score/total*100);
  const emoji = pct===100?'🏆':pct>=75?'💪':pct>=50?'📚':'🔄';
  const label = pct===100?'Perfekt durchgearbeitet!':pct>=75?'Sehr gut!':pct>=50?'Gut gemacht – nochmal lohnt sich!':'Noch Luft nach oben – nochmal!';
  const allDone = Object.keys(praxisDone).length >= D_PRAXIS.length;
  a.innerHTML = `
    <div class="praxis-hero"><h2>${fall.icon} ${fall.title}</h2><p>Fall abgeschlossen</p></div>
    <div class="praxis-result">
      <div style="font-size:52px;margin-bottom:8px">${emoji}</div>
      <div style="font-size:32px;font-weight:900;color:var(--navy)">${score}<span style="font-size:16px;color:#aaa;font-weight:700"> / ${total}</span></div>
      <div style="font-size:14px;font-weight:900;color:var(--navy);margin:6px 0">${label}</div>
      <div style="font-size:11px;color:#888;font-weight:700">${pct}% der Schritte richtig beantwortet</div>
      ${allDone?'<div style="margin-top:12px;background:rgba(0,201,123,.1);border:2px solid rgba(0,201,123,.3);border-radius:10px;padding:8px;font-size:12px;color:#005c36;font-weight:800">🏅 Alle Praxisfälle abgeschlossen!</div>':''}
    </div>
    <button onclick="startPraxis('${fall.id}')" style="width:100%;padding:13px;border-radius:14px;border:none;background:linear-gradient(135deg,var(--blue),#2255cc);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer;margin-bottom:10px">🔄 Nochmal durcharbeiten</button>
    <button onclick="praxisOpen=null;render()" style="width:100%;padding:11px;border-radius:14px;border:2px solid #dde5f5;background:#f0f4ff;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;cursor:pointer;margin-bottom:90px">← Alle Praxisfälle</button>`;
}


// ==================== PRÜFUNGSMODUS ====================
const EXAM_SCORES_KEY = 'examScores_v1';
let examScores = [];
try { examScores = JSON.parse(localStorage.getItem(EXAM_SCORES_KEY)||'[]'); } catch(e){ examScores=[]; }
function saveExamScores(){ localStorage.setItem(EXAM_SCORES_KEY, JSON.stringify(examScores)); }

// Exam runtime state
let examQuestions = [];   // drawn questions
let examIdx = 0;
let examAnswers = [];     // {q, cat, correct, chosen, right}
let examSkipped = 0;
let examTimerInterval = null;
let examTimeLeft = 0;
let examTotalTime = 0;
let examSetup = { topics: ['est','ust','ao','bilanz','recht','gewst','gesellschaft'], diff: 0, count: 20 };

const EXAM_TOPICS = [
  {id:'est',        label:'💼 Einkommensteuer'},
  {id:'ust',        label:'🛒 Umsatzsteuer'},
  {id:'ao',         label:'⚖️ Abgabenordnung'},
  {id:'bilanz',     label:'📋 Bilanz & Buchführung'},
  {id:'recht',      label:'🏛️ Privat- & Öff. Recht'},
  {id:'gewst',      label:'🏭 Gewerbesteuer'},
  {id:'gesellschaft',label:'🏢 Gesellschaftsbesteuerung'},
];

function getExamGrade(pct){
  if(pct>=92) return {note:'1',color:'#00c97b',label:'Sehr gut',emoji:'🏆'};
  if(pct>=81) return {note:'2',color:'#4caf50',label:'Gut',emoji:'💪'};
  if(pct>=67) return {note:'3',color:'#ff9800',label:'Befriedigend',emoji:'📚'};
  if(pct>=50) return {note:'4',color:'#ff6b35',label:'Ausreichend',emoji:'📖'};
  if(pct>=30) return {note:'5',color:'#f44336',label:'Mangelhaft',emoji:'📉'};
  return       {note:'6',color:'#b71c1c',label:'Ungenügend',emoji:'❌'};
}

function examPoolForTopic(topicId, diff){
  let items = D_EXAM.filter(q=>q.cat===topicId);
  if(diff>0){
    const filtered = items.filter(q=>q.lvl===diff);
    if(filtered.length >= 1) items = filtered;
  }
  return shuffle(items);
}

function buildExamQuestions(setup){
  const topics = setup.topics;
  const n = setup.count;
  const perTopic = Math.floor(n / topics.length);
  let extra = n - perTopic * topics.length;
  let all = [];
  topics.forEach(tid=>{
    const pool = examPoolForTopic(tid, setup.diff);
    const take = Math.min(perTopic + (extra-->0?1:0), pool.length);
    pool.slice(0, take).forEach(q=>{ all.push(q); });
  });
  // Fill up to n if pools were small
  if(all.length < n){
    topics.forEach(tid=>{
      const pool = examPoolForTopic(tid, setup.diff);
      pool.forEach(q=>{
        if(all.length < n && !all.find(x=>x.q===q.q))
          all.push(q);
      });
    });
  }
  return shuffle(all).slice(0, n);
}

function showExamPauseMenu(){
  clearInterval(examTimerInterval);
  const m = document.getElementById('exam-pause-menu');
  if(m) m.style.display='flex';
}
function resumeExam(){
  const m = document.getElementById('exam-pause-menu');
  if(m) m.style.display='none';
  // Restart timer from remaining time
  examTimerInterval = setInterval(()=>{
    examTimeLeft--;
    updateExamTimerUI();
    if(examTimeLeft<=0){ clearInterval(examTimerInterval); finishExam(true); }
  },1000);
}
function confirmExamAbort(){
  // Show result with current progress
  const m = document.getElementById('exam-pause-menu');
  if(m) m.style.display='none';
  clearInterval(examTimerInterval);
  finishExam(false);
}
function abandonExam(){
  // Discard entirely, go back to setup
  const m = document.getElementById('exam-pause-menu');
  if(m) m.style.display='none';
  clearInterval(examTimerInterval);
  examIdx = 0;
  examQuestions = [];
  examAnswers = [];
  render();
}

function startExam(){
  const n = examSetup.count;
  examTimerInterval && clearInterval(examTimerInterval);
  examQuestions = buildExamQuestions(examSetup);
  examIdx = 0;
  examAnswers = [];
  examSkipped = 0;
  examTotalTime = n * 90; // 90 sec per question
  examTimeLeft  = examTotalTime;
  examTimerInterval = setInterval(()=>{
    examTimeLeft--;
    updateExamTimerUI();
    if(examTimeLeft<=0){ clearInterval(examTimerInterval); finishExam(true); }
  }, 1000);
  _doSw('pruefung');
}

function updateExamTimerUI(){
  const fill = document.getElementById('exam-timer-fill');
  const num  = document.getElementById('exam-timer-num');
  if(!fill||!num) return;
  const pct = examTimeLeft / examTotalTime * 100;
  fill.style.width = pct+'%';
  const mins = Math.floor(examTimeLeft/60);
  const secs = String(examTimeLeft%60).padStart(2,'0');
  num.textContent = mins+':'+secs;
  const col = pct>50?'var(--blue)':pct>20?'var(--orange)':'var(--red)';
  fill.style.background = col;
  num.style.color = col;
}

function ansExam(chosenIdx){
  if(examIdx >= examQuestions.length) return;
  const q = examQuestions[examIdx];
  const correct = chosenIdx === q.ans;
  document.querySelectorAll('.choice-btn').forEach(b=>{
    b.disabled = true;
    const i = parseInt(b.dataset.i);
    if(i === q.ans)  b.classList.add('correct');
    else if(i === chosenIdx && !correct) b.classList.add('wrong');
  });
  examAnswers.push({ cat: q.cat, correct, q: q.q, explain: q.explain||'' });
  if(!correct) addFehler({...q, opts: q.opts, _qtype:'mc'}, q.cat);
  showFb(correct, q.explain||'', '');
  const nb = document.getElementById('nb');
  if(nb) nb.style.display='block';
  const sb = document.getElementById('skip-btn');
  if(sb) sb.style.display='none';
  updSc(correct);
}

function nextExamQ(){
  examIdx++;
  if(examIdx >= examQuestions.length){ clearInterval(examTimerInterval); finishExam(false); return; }
  render();
}

function skipExamQ(){
  examSkipped++;
  examAnswers.push({ cat: examQuestions[examIdx]._examCat, correct: false, q: examQuestions[examIdx].q||examQuestions[examIdx].name||'', skipped: true });
  examIdx++;
  if(examIdx >= examQuestions.length){ clearInterval(examTimerInterval); finishExam(false); return; }
  render();
}

function finishExam(timeout){
  clearInterval(examTimerInterval);
  // Count answered (non-skipped remaining)
  const correct = examAnswers.filter(a=>a.correct).length;
  const total   = examQuestions.length;
  const score   = { correct, total, ts: Date.now(), setup: {...examSetup} };
  examScores.unshift(score);
  if(examScores.length > 20) examScores = examScores.slice(0,20);
  saveExamScores();
  if(!playedModes.includes('pruefung')){playedModes.push('pruefung');savePlayedModes();checkBadges();}
  examIdx = total; // signal done
  render();
}

function renderPruefung(a){
  if(examIdx > 0 && examIdx >= examQuestions.length){ renderExamResult(a); return; }
  if(examIdx === 0 && examQuestions.length === 0){ renderExamSetup(a); return; }
  renderExamQuestion(a);
}

function renderExamSetup(a){
  clearInterval(examTimerInterval);
  const bestScore = examScores.length ? examScores[0] : null;
  const bestPct   = bestScore ? Math.round(bestScore.correct/bestScore.total*100) : null;
  const allTopics = EXAM_TOPICS.map(t=>t.id);
  const topicHtml = EXAM_TOPICS.map(t=>{
    const sel = examSetup.topics.includes(t.id);
    const cnt = D_EXAM.filter(q=>q.cat===t.id).length;
    return `<button class="exam-topic-btn${sel?' sel':''}" onclick="toggleExamTopic('${t.id}')">
      ${t.label}<span style="display:block;font-size:9px;font-family:'Space Mono',monospace;opacity:.6;margin-top:1px">${cnt} Fragen</span>
    </button>`;
  }).join('');
  const diffLabels = {0:'Alle',1:'⭐ Basis',2:'⭐⭐ Fortg.',3:'⭐⭐⭐ Profi'};
  const diffHtml = [0,1,2,3].map(d=>{
    const avail = examSetup.topics.reduce((s,tid)=>s+D_EXAM.filter(q=>q.cat===tid&&(d===0||q.lvl===d)).length,0);
    return `<button class="exam-diff-btn${examSetup.diff===d?' sel':''}" onclick="examSetup.diff=${d};render()" ${avail<1&&d>0?'disabled style="opacity:.4"':''}>${diffLabels[d]}<span style="display:block;font-size:9px;font-family:'Space Mono',monospace;opacity:.5">${d>0?avail+' verf.':''}</span></button>`;
  }).join('');
  const countHtml = [10,20,30,42].map(n=>
    `<button class="exam-count-btn${examSetup.count===n?' sel':''}" onclick="examSetup.count=${n};render()">${n==='42'?'Alle':n}</button>`
  ).join('');
  const canStart = examSetup.topics.length > 0;
  const totalAvail = examSetup.topics.reduce((s,tid)=>s+examPoolForTopic(tid,examSetup.diff).length,0);
  const actualCount = Math.min(examSetup.count, totalAvail);

  a.innerHTML = `
    <div class="exam-hero">
      <h2>🎓 Prüfungsmodus</h2>
      <p>Simuliere eine echte Klausur – mit Timer und Note</p>
      ${bestScore?`<div style="margin-top:10px;display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.1);border-radius:100px;padding:4px 14px">
        <span style="font-size:10px;color:rgba(255,255,255,.5);font-family:'Space Mono',monospace">BESTES ERGEBNIS</span>
        <span style="font-size:13px;font-weight:900;color:${getExamGrade(bestPct).color}">Note ${getExamGrade(bestPct).note} · ${bestPct}%</span>
      </div>`:''}
    </div>
    <div class="exam-setup-card">
      <div class="exam-setup-title">📚 Themengebiete <span style="font-size:10px;color:#aaa;font-weight:700">(mind. 1)</span></div>
      <div class="exam-topic-grid">${topicHtml}</div>
      <div style="margin-top:8px">
        <button class="exam-topic-btn exam-topic-btn-all${examSetup.topics.length===allTopics.length?' sel-all':''}" onclick="toggleAllExamTopics()" style="width:100%;border-radius:10px">🗂️ Alle Themen</button>
      </div>
    </div>
    <div class="exam-setup-card">
      <div class="exam-setup-title">⭐ Schwierigkeitsgrad</div>
      <div class="exam-diff-row">${diffHtml}</div>
    </div>
    <div class="exam-setup-card">
      <div class="exam-setup-title">❓ Anzahl Fragen</div>
      <div class="exam-count-row">${countHtml}</div>
      ${totalAvail<examSetup.count?`<div style="font-size:11px;color:var(--orange);font-weight:800;margin-top:6px">⚠️ Nur ${totalAvail} Fragen verfügbar – Prüfung mit ${actualCount} Fragen</div>`:''}
    </div>
    <div class="exam-setup-card" style="background:#f8fbff">
      <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:700;color:#666;margin-bottom:6px">
        <span>⏱️ Zeit</span><span style="color:var(--navy);font-weight:900">${Math.round(actualCount*90/60)} Min</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:700;color:#666">
        <span>❓ Fragen</span><span style="color:var(--navy);font-weight:900">${actualCount}</span>
      </div>
    </div>
    <button class="exam-start-btn" onclick="startExam()" ${canStart?'':'disabled'}>🎓 Prüfung starten</button>
    ${examScores.length ? `<div style="margin-top:16px;font-size:11px;font-weight:900;color:#888;font-family:'Space Mono',monospace;letter-spacing:.5px;text-transform:uppercase;margin-bottom:6px">Letzte Ergebnisse</div>
    ${examScores.slice(0,5).map(s=>{const g=getExamGrade(Math.round(s.correct/s.total*100));return `<div style="display:flex;align-items:center;gap:10px;background:#fff;border-radius:10px;border:2px solid #e8ecf5;padding:8px 12px;margin-bottom:6px">
      <span style="font-size:18px;font-weight:900;color:${g.color};font-family:'Space Mono',monospace">${g.note}</span>
      <div style="flex:1"><div style="font-size:12px;font-weight:800;color:var(--navy)">${s.correct}/${s.total} richtig · ${Math.round(s.correct/s.total*100)}%</div>
      <div style="font-size:10px;color:#aaa;font-weight:700">${new Date(s.ts).toLocaleDateString('de-DE')}</div></div>
      <span style="font-size:14px">${g.emoji}</span></div>`;}).join('')}` : ''}
    <div style="height:90px"></div>`;
}

function toggleExamTopic(tid){
  if(examSetup.topics.includes(tid)){
    if(examSetup.topics.length<=1) return;
    examSetup.topics = examSetup.topics.filter(x=>x!==tid);
  } else {
    examSetup.topics.push(tid);
  }
  render();
}
function toggleAllExamTopics(){
  const all = EXAM_TOPICS.map(t=>t.id);
  examSetup.topics = examSetup.topics.length===all.length ? [all[0]] : [...all];
  render();
}

function renderExamQuestion(a){
  const q   = examQuestions[examIdx];
  const tot = examQuestions.length;
  const pct = Math.round(examIdx/tot*100);
  const catLabel = {est:'💼 ESt',ust:'🛒 USt',ao:'⚖️ AO',bilanz:'📋 Bilanz',recht:'🏛️ Recht'};
  const answered = examAnswers.length;
  const correct  = examAnswers.filter(x=>x.correct).length;

  const optHtml = q.opts.map((o,i)=>
    `<button class="choice-btn" onclick="ansExam(${i})" data-i="${i}"><span class="ct">${o}</span></button>`
  ).join('');

  a.innerHTML = `
    <div class="exam-timer-bar">
      <div style="font-size:11px;font-weight:900;color:#aaa;font-family:'Space Mono',monospace;white-space:nowrap">${examIdx+1} / ${tot}</div>
      <div class="exam-timer-track"><div class="exam-timer-fill" id="exam-timer-fill" style="width:100%;background:var(--blue)"></div></div>
      <div class="exam-timer-num" id="exam-timer-num">--:--</div>
      <button onclick="showExamPauseMenu()" title="Prüfung pausieren oder beenden" style="background:rgba(255,100,100,.1);border:1.5px solid rgba(255,100,100,.25);color:rgba(255,130,130,.8);border-radius:8px;padding:4px 10px;font-size:11px;font-weight:900;font-family:'Nunito',sans-serif;cursor:pointer;white-space:nowrap;flex-shrink:0">⏸ Pause</button>
    </div>
    <div id="exam-pause-menu" style="display:none;position:fixed;inset:0;z-index:8000;background:rgba(0,0,0,.7);backdrop-filter:blur(6px);align-items:center;justify-content:center;padding:20px">
      <div style="background:#fff;border-radius:20px;padding:28px 24px;max-width:320px;width:100%;text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.4)">
        <div style="font-size:36px;margin-bottom:8px">⏸</div>
        <div style="font-size:17px;font-weight:900;color:#0d1b3e;margin-bottom:6px">Prüfung pausiert</div>
        <div style="font-size:12px;color:#888;font-weight:700;margin-bottom:20px">Frage ${examIdx+1} von ${tot} · Timer läuft weiter</div>
        <div class="u-col-gap">
          <button onclick="resumeExam()" style="padding:13px;border-radius:12px;border:none;background:linear-gradient(135deg,#0d2b5e,#1a4a8f);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer">▶ Weiter</button>
          <button onclick="confirmExamAbort()" style="padding:13px;border-radius:12px;border:2px solid #ffb3b3;background:#fff5f5;color:#cc3333;font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer">🚪 Prüfung beenden</button>
          <button onclick="abandonExam()" style="padding:10px;border-radius:12px;border:2px solid #dde5f5;background:#fff;color:#888;font-family:'Nunito',sans-serif;font-weight:700;font-size:12px;cursor:pointer">✕ Abbrechen ohne Wertung</button>
        </div>
      </div>
    </div>
    <div style="margin-bottom:12px">
      <div class="prog-wrap" style="margin-bottom:5px"><div class="prog-fill" style="width:${pct}%;background:var(--blue)"></div></div>
      <div style="display:flex;justify-content:space-between;font-size:10px;font-family:'Space Mono',monospace;color:#aaa">
        <span>${catLabel[q.cat]||q.cat} · ${'⭐'.repeat(q.lvl||1)}</span>
        <span class="u-green">${correct} ✓${answered>0?' · '+Math.round(correct/answered*100)+'%':''}</span>
      </div>
    </div>
    <div style="background:#f4f7ff;border-radius:14px;padding:15px 16px;margin-bottom:16px;font-size:14px;font-weight:800;color:var(--navy);line-height:1.55;border-left:4px solid var(--blue)">${q.q}</div>
    <div class="ao-grid">${optHtml}</div>
    <div class="fb" id="fb"></div>
    <button class="next-btn" id="nb" style="display:none" onclick="nextExamQ()">${examIdx+1<tot?'Nächste Frage ➜':'Auswertung anzeigen 📊'}</button>
    <button class="exam-skip-btn" id="skip-btn" onclick="skipExamQ()">Überspringen →</button>`;
  updateExamTimerUI();
}


function renderExamResult(a){
  clearInterval(examTimerInterval);
  const correct = examAnswers.filter(x=>x.correct).length;
  const total   = examQuestions.length;
  const pct     = Math.round(correct/total*100);
  const grade   = getExamGrade(pct);

  // Per-category analysis
  const cats = {};
  examAnswers.forEach(ans=>{
    if(!cats[ans.cat]) cats[ans.cat]={c:0,t:0};
    cats[ans.cat].t++;
    if(ans.correct) cats[ans.cat].c++;
  });
  const catLabels = {est:'💼 ESt',ust:'🛒 USt',ao:'⚖️ AO',bilanz:'📋 Bilanz',recht:'🏛️ Recht',kurios:'🤯 Kurioses'};
  const catHtml = Object.entries(cats).map(([k,v])=>{
    const p = Math.round(v.c/v.t*100);
    return `<div class="exam-cat-row">
      <div style="flex:1">
        <div style="display:flex;justify-content:space-between;margin-bottom:3px">
          <span style="font-weight:800;color:var(--navy)">${catLabels[k]||k}</span>
          <span style="font-weight:900;color:${p>=75?'var(--green)':p>=50?'var(--orange)':'var(--red)'}">${v.c}/${v.t} · ${p}%</span>
        </div>
        <div class="exam-cat-bar"><div class="exam-cat-fill" style="width:${p}%;background:${p>=75?'var(--green)':p>=50?'var(--orange)':'var(--red)'}"></div></div>
      </div>
    </div>`;
  }).join('');

  // Wrong answers
  const wrong = examAnswers.filter(x=>!x.correct && !x.skipped);
  const wrongHtml = wrong.slice(0,8).map(w=>`
    <div class="exam-wrong-item">
      <div class="exam-wrong-q">${w.q.replace(/<[^>]*>/g,'').slice(0,120)}</div>
      <div class="exam-wrong-ans">${w.explain ? w.explain.replace(/<[^>]*>/g,'').slice(0,140)+'…' : ''}</div>
    </div>`).join('');

  // Study recommendations
  const weakCats = Object.entries(cats).filter(([k,v])=>Math.round(v.c/v.t*100)<60).sort((a,b)=>(a[1].c/a[1].t)-(b[1].c/b[1].t));
  const strongCats = Object.entries(cats).filter(([k,v])=>Math.round(v.c/v.t*100)>=75);
  const recoHtml = weakCats.length > 0
    ? '<div style="background:#fff8ee;border:2px solid #ffd6a0;border-radius:14px;padding:14px 16px;margin-bottom:14px">'
      +'<div style="font-size:11px;font-weight:900;color:#8a4000;font-family:\'Space Mono\',monospace;letter-spacing:.5px;text-transform:uppercase;margin-bottom:8px">📌 Empfehlung: Diese Themen vertiefen</div>'
      +weakCats.map(([k,v])=>{
        const p=Math.round(v.c/v.t*100);
        return '<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid rgba(255,180,0,.15)">'
          +'<span style="font-size:12px;font-weight:800;color:var(--navy)">'+(catLabels[k]||k)+'</span>'
          +'<span style="font-size:10px;color:var(--red);font-weight:900;font-family:\'Space Mono\',monospace">'+p+'%</span>'
          +'<button onclick="sw(\''+k+'\')" style="margin-left:auto;background:linear-gradient(135deg,#1a3a8f,#0d2b5e);color:#fff;border:none;border-radius:8px;padding:5px 12px;font-size:10px;font-weight:900;font-family:\'Nunito\',sans-serif;cursor:pointer">Üben →</button>'
          +'</div>';
      }).join('')
      +(strongCats.length>0?'<div style="margin-top:8px;font-size:11px;font-weight:700;color:#005c36">✅ Stark: '+strongCats.map(([k])=>catLabels[k]||k).join(', ')+'</div>':'')
      +'</div>'
    : (strongCats.length===Object.keys(cats).length
      ? '<div style="background:#eafff5;border:2px solid #b7f5dc;border-radius:14px;padding:14px;text-align:center;margin-bottom:14px"><div style="font-size:16px;margin-bottom:4px">💪</div><div style="font-size:13px;font-weight:900;color:#005c36">Stark in allen Themen! Versuche die nächste Schwierigkeitsstufe.</div></div>'
      : '');

  a.innerHTML = `
    <div class="exam-result-hero">
      <div class="exam-grade-circle" style="background:${grade.color}22;border-color:${grade.color}66;color:${grade.color}">${grade.note}</div>
      <div style="font-size:26px;font-weight:900;color:#fff">${correct} / ${total}</div>
      <div style="font-size:15px;font-weight:800;color:${grade.color};margin:4px 0">${grade.emoji} ${grade.label}</div>
      <div style="font-size:12px;color:rgba(255,255,255,.45);font-weight:700">${pct}% richtig${examSkipped>0?' · '+examSkipped+' übersprungen':''}</div>
      <div style="margin-top:14px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap;font-size:10px;font-family:'Space Mono',monospace">
        <span style="background:rgba(0,201,123,.2);color:#00c97b;padding:3px 10px;border-radius:100px">≥92% → Note 1</span>
        <span style="background:rgba(76,175,80,.2);color:#4caf50;padding:3px 10px;border-radius:100px">≥81% → Note 2</span>
        <span style="background:rgba(255,152,0,.2);color:#ff9800;padding:3px 10px;border-radius:100px">≥67% → Note 3</span>
        <span style="background:rgba(255,107,53,.2);color:#ff6b35;padding:3px 10px;border-radius:100px">≥50% → Note 4</span>
      </div>
    </div>
    <div style="background:#fff;border-radius:16px;border:2px solid #dde5f5;padding:16px;margin-bottom:14px">
      <div style="font-size:11px;font-weight:900;color:#888;font-family:'Space Mono',monospace;letter-spacing:.5px;text-transform:uppercase;margin-bottom:10px">Auswertung nach Thema</div>
      ${catHtml}
    </div>
    ${recoHtml}
    ${wrong.length ? `<div style="background:#fff;border-radius:16px;border:2px solid #dde5f5;padding:16px;margin-bottom:14px">
      <div style="font-size:11px;font-weight:900;color:#888;font-family:'Space Mono',monospace;letter-spacing:.5px;text-transform:uppercase;margin-bottom:10px">❌ Falsch beantwortet (${wrong.length} Fragen → im Fehlerspeicher)</div>
      ${wrongHtml}
      ${wrong.length>8?`<div style="text-align:center;font-size:11px;color:#aaa;font-weight:700;margin-top:6px">… und ${wrong.length-8} weitere im Fehlerspeicher</div>`:''}
    </div>` : `<div style="background:rgba(0,201,123,.05);border:2px solid rgba(0,201,123,.3);border-radius:14px;padding:14px;text-align:center;margin-bottom:14px">
      <div class="u-icon-lg">🏆</div>
      <div style="font-size:14px;font-weight:900;color:#005c36">Alle Fragen richtig beantwortet!</div>
    </div>`}
    <button onclick="examQuestions=[];examIdx=0;examAnswers=[];render()" style="width:100%;padding:14px;border-radius:14px;border:none;background:linear-gradient(135deg,#0d2b5e,#1a4a8f);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer;margin-bottom:8px">🎓 Neue Prüfung</button>
    <button onclick="sw('fehler')" style="width:100%;padding:11px;border-radius:14px;border:2px solid rgba(255,77,109,.3);background:rgba(255,77,109,.05);color:#c0003a;font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;cursor:pointer;margin-bottom:8px">🔁 Fehler jetzt üben (${wrong.length})</button>
    <button onclick="examQuestions=[];examIdx=0;examAnswers=[];sw('basics')" style="width:100%;padding:11px;border-radius:14px;border:2px solid #dde5f5;background:#f0f4ff;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;cursor:pointer;margin-bottom:90px">← Zurück zum Start</button>`;
}

// ==================== FEHLERSPEICHER ====================
const FEHLER_KEY = 'fehlerSpeicher_v1';
const FEHLER_MAX = 60;
let fehlerQueue = [];
try { fehlerQueue = JSON.parse(localStorage.getItem(FEHLER_KEY)||'[]'); } catch(e){ fehlerQueue=[]; }

function saveFehler(){ localStorage.setItem(FEHLER_KEY, JSON.stringify(fehlerQueue)); }

function addFehler(item, catMode){
  // Build a portable, type-agnostic snapshot
  const snap = {
    q: item.q || item.name || '',
    opts: item.opts || null,
    ans: item.ans,
    explain: item.explain || '',
    icon: item.icon || (catMode==='ao'?'⚖️':catMode==='kurios'?'🤯':catMode==='recht'?'🏛️':'📋'),
    name: item.name || item.q || '',
    desc: item.desc || item.sub || '',
    _cat: catMode,
    _qtype: item._qtype || deriveFehlerType(catMode, item),
    addedAt: Date.now()
  };
  // Avoid exact duplicates (same q text)
  if(fehlerQueue.some(f=>f.q===snap.q && f._cat===snap._cat)) return;
  fehlerQueue.push(snap);
  if(fehlerQueue.length > FEHLER_MAX) fehlerQueue.shift();
  saveFehler();
  updateFehlerBadge();
}

function deriveFehlerType(catMode, item){
  if(catMode==='ust') return 'ust';
  if(catMode==='kurios') return 'kurios';
  if(catMode==='est' && item.ans===true||item.ans===false) return 'wk';
  if(item.opts) return 'mc';
  return 'mc';
}

function removeFehler(q, cat){
  fehlerQueue = fehlerQueue.filter(f=>!(f.q===q && f._cat===cat));
  saveFehler();
  updateFehlerBadge();
}

function updateFehlerBadge(){
  const n = fehlerQueue.length;
  // Nav badge
  const badge = document.getElementById('fehler-nav-badge');
  if(badge){ badge.textContent = n > 9 ? '9+' : String(n); badge.style.display = n > 0 ? 'block' : 'none'; }
  // Drawer badge
  const dbadge = document.getElementById('drawer-fehler-badge');
  if(dbadge){ dbadge.textContent = n > 9 ? '9+' : String(n); dbadge.style.display = n > 0 ? 'inline' : 'none'; }
  // MeinBereich count
  const card = document.getElementById('mb-fehler-count');
  if(card) card.textContent = n;
}

// --- State for Fehler-Quiz ---
let fehlerSession = [];   // shuffled copy of current session
let fehlerIdx = 0;
let fehlerAnswered = false;
let fehlerCorrect = 0;
let fehlerResolved = []; // questions answered correctly this session → remove after

function startFehlerSession(){
  fehlerSession = [...fehlerQueue].sort(()=>Math.random()-.5);
  fehlerIdx = 0; fehlerAnswered = false; fehlerCorrect = 0; fehlerResolved = [];
  _doSw('fehler');
}

function renderFehler(a){
  updateFehlerBadge();
  if(fehlerQueue.length === 0){
    setTopicHeader(null);
    a.innerHTML = `<div class="fehler-hero"><h2>🔁 Fehlerspeicher</h2><p>Alle falsch beantworteten Fragen</p></div>
    <div class="fehler-empty">
      <div class="fehler-empty-icon">✅</div>
      <div class="fehler-empty-title">Fehlerfrei!</div>
      <div class="fehler-empty-sub">Du hast noch keine Fragen falsch beantwortet – oder du hast alle Fehler bereits aufgearbeitet. Gut gemacht!</div>
      <button onclick="sw('basics')" style="padding:11px 24px;border-radius:100px;border:none;background:linear-gradient(135deg,var(--blue),#2255cc);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:13px;cursor:pointer">Zurück zum Start</button>
    </div>`;
    return;
  }

  // If no active session yet, show overview
  if(fehlerSession.length === 0 || fehlerIdx >= fehlerSession.length){
    renderFehlerOverview(a);
    return;
  }

  // Active question
  const item = fehlerSession[fehlerIdx];
  const total = fehlerSession.length;
  const p = Math.round(fehlerIdx/total*100);
  const catLabels = {est:'💼 ESt',ust:'🛒 USt',ao:'⚖️ AO',kurios:'🤯 Kurioses',recht:'🏛️ Recht',bilanz:'📋 Bilanz',est_wk:'🧾 ESt'};

  let qHtml = '';
  const t = item._qtype;
  if(t==='ust'){
    qHtml = `<div class="fehler-item-meta">${catLabels[item._cat]||item._cat} · Umsatzsteuersatz</div>
      <div class="item-card"><span class="ii">${item.icon}</span><div><div class="in">${item.name}</div><div class="is">${item.desc||''}</div></div></div>
      <div class="ust-choices">
        <button class="ust-btn ust-btn-0" onclick="ansFehler(0)" data-r="0">0 %<div class="ust-lbl">Steuerfrei</div></button>
        <button class="ust-btn ust-btn-7" onclick="ansFehler(7)" data-r="7">7 %<div class="ust-lbl">Ermäßigt</div></button>
        <button class="ust-btn ust-btn-19" onclick="ansFehler(19)" data-r="19">19 %<div class="ust-lbl">Regelsteuersatz</div></button>
      </div>`;
  } else if(t==='kurios'){
    qHtml = `<div class="fehler-item-meta">${catLabels[item._cat]||item._cat} · Wahr oder Falsch?</div>
      <div class="item-card"><span class="ii">${item.icon}</span><div><div class="in" style="font-size:14px;line-height:1.45">${item.q}</div></div></div>
      <div class="wf-choices">
        <button class="wf-btn wf-wahr" onclick="ansFehler(true)" data-v="true">✅ Wahr</button>
        <button class="wf-btn wf-falsch" onclick="ansFehler(false)" data-v="false">❌ Falsch</button>
      </div>`;
  } else if(t==='wk'){
    qHtml = `<div class="fehler-item-meta">${catLabels[item._cat]||item._cat} · Werbungskosten?</div>
      <div class="wk-card"><span class="wi">${item.icon}</span><div><div class="wn">${item.name}</div><div class="wd">${item.desc||''}</div></div></div>
      <div class="wk-btns">
        <button class="wk-btn yb" onclick="ansFehler(true)">✅ Ja, absetzbar!</button>
        <button class="wk-btn nb" onclick="ansFehler(false)">❌ Nein, nicht absetzbar</button>
      </div>`;
  } else {
    // mc – handles einkunft, ao, recht, generic
    const isEinkunft = item._cat==='est' && item.opts && item.opts.length > 4;
    qHtml = `<div class="fehler-item-meta">${catLabels[item._cat]||item._cat}</div>
      <div class="item-card"><span class="ii">${item.icon}</span><div><div class="in" style="font-size:14px;line-height:1.45">${item.q||item.name}</div>${item.desc?`<div class="is">${item.desc}</div>`:''}</div></div>
      <div class="ao-grid">
        ${(item.opts||[]).map((o,i)=>`<button class="choice-btn" onclick="ansFehler(${i})" data-i="${i}"><span class="ct">${o}</span></button>`).join('')}
      </div>`;
  }

  a.innerHTML = `
    <div class="fehler-hero"><h2>🔁 Fehler aufarbeiten</h2><p>${fehlerIdx+1} von ${total} · ${fehlerCorrect} bereits gelöst</p>
      <div class="fehler-count-chip">🔴 ${fehlerQueue.length} im Speicher</div>
    </div>
    <div class="prog-lbl">${p}%</div><div class="prog-wrap"><div class="prog-fill" style="width:${p}%;background:var(--red)"></div></div>
    ${qHtml}
    <div class="fb" id="fb"></div>
    <button class="next-btn" id="nb" onclick="nextFehler()">Weiter ➜</button>`;
  fehlerAnswered = false;
}

function ansFehler(chosen){
  if(fehlerAnswered) return;
  fehlerAnswered = true;
  const item = fehlerSession[fehlerIdx];
  const t = item._qtype;
  let ok = false;

  if(t==='ust'){
    ok = chosen === item.ans;
    document.querySelectorAll('.ust-btn').forEach(b=>{b.disabled=true;if(parseInt(b.dataset.r)===item.ans)b.classList.add('ca');});
  } else if(t==='kurios'||t==='wk'){
    ok = chosen === item.ans;
    if(t==='kurios'){
      document.querySelectorAll('.wf-btn').forEach(b=>{
        b.disabled=true;
        const bVal=b.dataset.v==='true';
        if(bVal===item.ans) b.classList.add('ca');
      });
    } else {
      document.querySelectorAll('.wk-btn').forEach(b=>b.disabled=true);
      const cb=item.ans?document.querySelector('.yb'):document.querySelector('.nb');
      if(cb) cb.classList.add('ca');
    }
  } else {
    ok = chosen === item.ans;
    document.querySelectorAll('.choice-btn').forEach(b=>{
      b.disabled=true;
      if(parseInt(b.dataset.i)===item.ans) b.classList.add('correct');
      else if(parseInt(b.dataset.i)===chosen && !ok) b.classList.add('wrong');
    });
  }

  if(ok){
    fehlerCorrect++;
    fehlerResolved.push({q:item.q, _cat:item._cat});
    conf(5);
  }
  showFb(ok, item.explain, item.q||item.name);
}

function nextFehler(){
  fehlerIdx++;
  if(fehlerIdx >= fehlerSession.length){
    // Remove resolved items from the persistent queue
    fehlerResolved.forEach(r=>removeFehler(r.q, r._cat));
    fehlerSession = [];
    renderFehlerResult(document.getElementById('ga'));
    return;
  }
  renderFehler(document.getElementById('ga'));
}

function deleteFehlerByIdx(idx){
  fehlerQueue.splice(idx,1);
  saveFehler();
  updateFehlerBadge();
  const a = document.getElementById('ga');
  if(a) renderFehlerOverview(a);
}

function renderFehlerOverview(a){
  const n = fehlerQueue.length;
  const cats = {};
  fehlerQueue.forEach(f=>{ cats[f._cat]=(cats[f._cat]||0)+1; });
  const catLabels = {est:'💼 ESt',ust:'🛒 USt',ao:'⚖️ AO',kurios:'🤯 Kurioses',recht:'🏛️ Recht',bilanz:'📋 Bilanz'};

  const listHtml = fehlerQueue.map((f, i) => {
    const cat = catLabels[f._cat] || f._cat;
    const qText = f.q ? f.q.replace(/<[^>]*>/g,'') : (f.name||'Frage');
    const short = qText.length > 60 ? qText.slice(0,60)+'…' : qText;
    return `<div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid #f0f4ff">
      <div class="u-flex-min">
        <div style="font-size:9px;font-family:'Space Mono',monospace;color:#aaa;text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">${cat}</div>
        <div style="font-size:12px;font-weight:800;color:var(--navy);line-height:1.3;word-break:break-word">${short}</div>
      </div>
      <button onclick="deleteFehlerByIdx(${i})" title="Löschen" style="flex-shrink:0;width:30px;height:30px;border-radius:8px;border:2px solid rgba(255,77,109,.3);background:rgba(255,77,109,.06);color:#c0003a;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-family:'Nunito',sans-serif;font-weight:900">✕</button>
    </div>`;
  }).join('');

  a.innerHTML = `
    <div class="fehler-hero">
      <h2>🔁 Fehlerspeicher</h2>
      <p>Falsch beantwortete Fragen aus allen Quiz-Bereichen</p>
      <div class="fehler-count-chip">🔴 ${n} Frage${n!==1?'n':''} offen</div>
    </div>
    <div style="background:rgba(255,77,109,.05);border:2px solid rgba(255,77,109,.2);border-radius:14px;padding:11px 14px;margin-bottom:12px;font-size:12px;color:#666;font-weight:700;line-height:1.6">
      💡 Beantworte eine Frage <b>richtig</b> → sie verschwindet. Falsch → sie bleibt. Mit <b>✕</b> einzeln löschen.
    </div>
    <button onclick="startFehlerSession()" style="width:100%;padding:14px;border-radius:14px;border:none;background:linear-gradient(135deg,#c0003a,#ff4d6d);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:15px;cursor:pointer;margin-bottom:10px">🔁 Alle ${n} Fragen jetzt üben</button>
    <div style="background:#fff;border-radius:16px;border:2px solid #dde5f5;padding:4px 14px 4px;margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0 8px;border-bottom:2px solid #f0f4ff">
        <span style="font-size:11px;font-weight:900;color:#888;font-family:'Space Mono',monospace;letter-spacing:.5px;text-transform:uppercase">Alle Fragen (${n})</span>
        <button onclick="if(confirm('Alle ${n} Fehler löschen?')){fehlerQueue=[];saveFehler();updateFehlerBadge();const a=document.getElementById('ga');if(a)renderFehler(a);}" style="padding:4px 10px;border-radius:8px;border:2px solid rgba(255,77,109,.3);background:rgba(255,77,109,.06);color:#c0003a;font-family:'Nunito',sans-serif;font-weight:800;font-size:10px;cursor:pointer">Alle löschen</button>
      </div>
      ${listHtml}
    </div>
    <button onclick="sw('basics')" style="width:100%;padding:11px;border-radius:14px;border:2px solid #dde5f5;background:#f0f4ff;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;cursor:pointer;margin-bottom:90px">← Zurück</button>`;
}

function renderFehlerResult(a){
  const n = fehlerQueue.length;
  const cleared = fehlerResolved.length;
  a.innerHTML = `
    <div class="fehler-hero"><h2>🔁 Übung abgeschlossen!</h2><p>Gut gemacht – weiter so!</p></div>
    <div style="background:#fff;border-radius:18px;border:2px solid #dde5f5;padding:24px;text-align:center;margin-bottom:14px">
      <div style="font-size:44px;margin-bottom:8px">${cleared===fehlerSession.length?'🏆':'💪'}</div>
      <div style="font-size:28px;font-weight:900;color:var(--navy)">${cleared}<span style="font-size:14px;color:#aaa"> richtig</span></div>
      <div style="font-size:12px;color:#888;font-weight:700;margin-top:4px">${cleared} Frage${cleared!==1?'n':''} aus dem Speicher entfernt</div>
      ${n>0?`<div style="margin-top:12px;font-size:12px;color:var(--red);font-weight:800">🔴 Noch ${n} Frage${n!==1?'n':''} im Speicher</div>`:'<div style="margin-top:12px;font-size:12px;color:var(--green);font-weight:800">✅ Fehlerspeicher geleert!</div>'}
    </div>
    ${n>0
      ? `<button onclick="startFehlerSession()" style="width:100%;padding:14px;border-radius:14px;border:none;background:linear-gradient(135deg,#c0003a,#ff4d6d);color:#fff;font-family:'Nunito',sans-serif;font-weight:900;font-size:14px;cursor:pointer;margin-bottom:10px">🔁 Restliche ${n} Fragen weiter üben</button>`
      : ''}
    <button onclick="sw('basics')" style="width:100%;padding:11px;border-radius:14px;border:2px solid #dde5f5;background:#f0f4ff;color:var(--navy);font-family:'Nunito',sans-serif;font-weight:800;font-size:13px;cursor:pointer">← Zum Start</button>`;
}

// ==================== DAILY CHALLENGE ====================
const DAILY_KEY = 'daily_challenge_v2';
const STREAK_KEY = 'daily_streak_v2';
let dailyState = null;
let dailyStreak = {count:0, lastDate:null};

function getTodayStr(){ return new Date().toISOString().slice(0,10); }

function loadDailyData(){
  try { dailyState = JSON.parse(localStorage.getItem(DAILY_KEY)); } catch(e){ dailyState=null; }
  try { dailyStreak = JSON.parse(localStorage.getItem(STREAK_KEY)||'{"count":0,"lastDate":null}'); } catch(e){ dailyStreak={count:0,lastDate:null}; }
}

function saveDailyData(){
  localStorage.setItem(DAILY_KEY, JSON.stringify(dailyState));
  localStorage.setItem(STREAK_KEY, JSON.stringify(dailyStreak));
}

function buildDailyQuestions(){
  const pools = [
    ...(D_UST||[]).map(q=>({...q,_cat:'ust',_type:'ust'})),
    ...(D_AO||[]).map(q=>({...q,_cat:'ao',_type:'ao'})),
    ...(D_KURIOS||[]).map(q=>({...q,_cat:'kurios',_type:'kurios'})),
    ...(D_RECHT||[]).map(q=>({...q,_cat:'recht',_type:'recht'})),
  ];
  const today = getTodayStr();
  let rng = today.split('-').reduce((a,b)=>a*100+parseInt(b), 0);
  function sr(){ rng=(rng*9301+49297)%233280; return rng/233280; }
  return [...pools].sort(()=>sr()-.5).slice(0,7);
}

function initDailyChallenge(){
  // Only load from storage if we have nothing in RAM yet
  if(!dailyState) loadDailyData();
  const today = getTodayStr();
  if(!dailyState || dailyState.date !== today){
    dailyState = {date:today, questions:buildDailyQuestions(), idx:0, score:0, done:false, answers:[]};
    saveDailyData();
  }
  updateStreakChip();
}

function updateStreakChip(){
  const el = document.getElementById('daily-streak-disp');
  if(el) el.textContent = dailyStreak.count;
}

function completeDailyChallenge(score, total){
  const today = getTodayStr();
  dailyState.done = true;
  dailyState.score = score;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  const yStr = yesterday.toISOString().slice(0,10);
  if(dailyStreak.lastDate === yStr){ dailyStreak.count++; }
  else if(dailyStreak.lastDate === today){ /* already counted */ }
  else { dailyStreak.count = 1; }
  dailyStreak.lastDate = today;
  saveDailyData();
  updateStreakChip();
  if(!catStats['daily']) catStats['daily']={c:0,t:0};
  catStats['daily'].c+=score; catStats['daily'].t+=total;
  saveCatStats();
  triggerBadge('daily_done');
  if(dailyStreak.count>=7) triggerBadge('streak7_daily');
  if(dailyStreak.count>=30) triggerBadge('streak30_daily');
}

let dailyAnswered = false;

function renderDaily(a){
  initDailyChallenge();
  if(dailyState.done){ renderDailyResult(a); return; }
  const q = dailyState.questions[dailyState.idx];
  const total = dailyState.questions.length;
  const idx = dailyState.idx;
  const pct = Math.round(idx/total*100);
  const sc = dailyStreak.count;
  const today = getTodayStr();

  const heroHtml = '<div class="daily-hero">'
    + '<div style="font-size:10px;font-family:\'Space Mono\',monospace;color:rgba(255,255,255,.4);letter-spacing:2px;margin-bottom:6px">'
    + today + '</div>'
    + '<h2>📅 Daily Challenge</h2>'
    + '<p>7 Fragen täglich – gemischte Kategorien</p>'
    + '<div class="streak-display">'
    + '<span style="font-size:30px">🔥</span>'
    + '<div class="streak-num">' + sc + '</div>'
    + '<div class="streak-label">Tage<br>in Folge</div>'
    + '</div></div>';

  const progHtml = '<div style="display:flex;justify-content:space-between;margin-bottom:4px">'
    + '<span style="font-size:12px;font-weight:800;color:#666">Frage '+(idx+1)+' / '+total+'</span>'
    + '<span style="font-size:11px;font-family:\'Space Mono\',monospace;color:#aaa">'+dailyState.score+' ✓</span>'
    + '</div>'
    + '<div class="prog-wrap" style="margin-bottom:18px"><div class="prog-fill" style="width:'+pct+'%"></div></div>';

  let qHtml = '';
  const type = q._type;
  if(type==='ust'){
    qHtml = '<div class="item-card"><span class="ii">'+q.icon+'</span>'
      +'<div><div class="in">'+q.name+'</div><div class="is">'+q.desc+'</div></div></div>'
      +'<div style="font-size:11px;font-weight:800;color:#888;margin-bottom:10px;font-family:\'Space Mono\',monospace;text-transform:uppercase;letter-spacing:1px">🛒 Welcher USt-Satz?</div>'
      +'<div class="ust-choices">'
      +'<button class="ust-btn ust-btn-0" onclick="ansDaily(0,'+q.ans+',\'ust\')" data-r="0">0 %<div class="ust-lbl">Steuerfrei</div></button>'
      +'<button class="ust-btn ust-btn-7" onclick="ansDaily(7,'+q.ans+',\'ust\')" data-r="7">7 %<div class="ust-lbl">Ermäßigt</div></button>'
      +'<button class="ust-btn ust-btn-19" onclick="ansDaily(19,'+q.ans+',\'ust\')" data-r="19">19 %<div class="ust-lbl">Regelsteuersatz</div></button>'
      +'</div>';
  } else if(type==='kurios'){
    qHtml = '<div style="font-size:11px;font-weight:800;color:#888;margin-bottom:8px;font-family:\'Space Mono\',monospace;text-transform:uppercase;letter-spacing:1px">🤯 Wahr oder Falsch?</div>'
      +'<div class="item-card"><span class="ii">'+q.icon+'</span>'
      +'<div><div class="in" style="font-size:14px;line-height:1.5">'+q.q+'</div></div></div>'
      +'<div class="wf-choices">'
      +'<button class="wf-btn wf-wahr" onclick="ansDaily(true,'+q.ans+',\'kurios\')">✅ Wahr</button>'
      +'<button class="wf-btn wf-falsch" onclick="ansDaily(false,'+q.ans+',\'kurios\')">❌ Falsch</button>'
      +'</div>';
  } else {
    const optsBtns = q.opts.map((opt,i)=>
      '<button class="choice-btn" onclick="ansDaily('+i+','+q.ans+',\'mc\')" data-i="'+i+'"><span class="ct">'+opt+'</span></button>'
    ).join('');
    const catLabel = type==='ao'?'⚖️ Abgabenordnung':'🏛️ Recht';
    qHtml = '<div style="font-size:11px;font-weight:800;color:#888;margin-bottom:8px;font-family:\'Space Mono\',monospace;text-transform:uppercase;letter-spacing:1px">'+catLabel+'</div>'
      +'<div class="item-card"><span class="ii">⚖️</span>'
      +'<div><div class="in" style="font-size:14px;line-height:1.5">'+q.q+'</div></div></div>'
      +'<div class="ao-grid">'+optsBtns+'</div>';
  }

  a.innerHTML = '<div class="daily-q-wrap">' + heroHtml + progHtml + qHtml
    + '<div class="fb" id="fb"></div>'
    + '<button class="next-btn" id="nb" onclick="nextDaily()">Weiter ➜</button>'
    + '</div>';
  dailyAnswered = false;
}

function ansDaily(chosen, correct, type){
  if(dailyAnswered) return;
  dailyAnswered = true;
  let ok = false;
  if(type==='ust'){
    ok = (chosen===correct);
    document.querySelectorAll('.ust-btn').forEach(b=>{b.disabled=true; if(parseInt(b.dataset.r)===correct) b.classList.add('ca');});
  } else if(type==='kurios'){
    ok = (chosen===correct);
    document.querySelectorAll('.wf-btn').forEach(b=>{
      b.disabled=true;
      const isTrueBtn = b.textContent.includes('Wahr');
      if((isTrueBtn&&correct===true)||(!isTrueBtn&&correct===false)) b.classList.add('ca');
    });
  } else {
    ok = (chosen===correct);
    document.querySelectorAll('.choice-btn').forEach(b=>{
      b.disabled=true;
      if(parseInt(b.dataset.i)===correct) b.classList.add('correct');
      else if(parseInt(b.dataset.i)===chosen&&!ok) b.classList.add('wrong');
    });
  }
  if(ok){ dailyState.score++; conf(5); }
  dailyState.answers.push({ok});
  saveDailyData();
  const q = dailyState.questions[dailyState.idx];
  showFb(ok, q.explain||(ok?'Richtig!':'Leider falsch.'), q.name||q.q||'');
}

function nextDaily(){
  const bar = document.getElementById('mobile-fb-bar');
  if(bar) bar.style.display='none';
  dailyState.idx++;
  saveDailyData();
  window.scrollTo({top:0, behavior:'smooth'});
  if(dailyState.idx >= dailyState.questions.length){
    completeDailyChallenge(dailyState.score, dailyState.questions.length);
    conf(40);
    renderDailyResult(document.getElementById('ga'));
    return;
  }
  renderDaily(document.getElementById('ga'));
}

function renderDailyResult(a){
  const score = dailyState.score;
  const total = dailyState.questions.length;
  const pct = Math.round(score/total*100);
  const streak = dailyStreak.count;
  const emoji = pct>=80?'🏆':pct>=57?'🎯':'📖';
  const msg = pct>=80?'Exzellent – du kennst dich aus!':pct>=57?'Gut gemacht – weiter so!':'Guter Anfang, morgen wieder!';

  a.innerHTML = '<div class="daily-hero"><h2>'+emoji+' Daily erledigt!</h2>'
    + '<p>'+new Date().toLocaleDateString('de-DE',{weekday:'long',day:'2-digit',month:'long'})+'</p>'
    + '<div class="streak-display"><span style="font-size:30px">🔥</span>'
    + '<div class="streak-num">'+streak+'</div><div class="streak-label">Tage<br>in Folge</div>'
    + '</div></div>'
    + '<div style="background:#fff;border:2px solid #dde5f5;border-radius:18px;padding:24px;text-align:center;margin-bottom:16px">'
    + '<div style="font-size:48px;margin-bottom:8px">'+emoji+'</div>'
    + '<div style="font-size:32px;font-weight:900;color:var(--navy)">'+score+'<span style="font-size:16px;color:#aaa"> / '+total+'</span></div>'
    + '<div style="font-size:13px;color:#666;font-weight:700;margin:6px 0 2px">'+msg+'</div>'
    + '<div style="font-size:12px;font-family:\'Space Mono\',monospace;color:var(--blue)">'+pct+' % richtig</div>'
    + '</div>'
    + '<div style="background:rgba(255,140,0,.08);border:2px solid rgba(255,140,0,.25);border-radius:14px;padding:14px;text-align:center;margin-bottom:14px">'
    + '<div style="font-size:11px;color:#888;font-weight:700;margin-bottom:4px">Komm morgen für den</div>'
    + '<div style="font-size:15px;font-weight:900;color:var(--navy)">🔥 '+(streak+1)+'-Tage-Streak</div>'
    + '</div>'
    + '<div style="display:flex;gap:10px">'
    + '<button onclick="sw(\'meinbereich\')" style="flex:1;padding:12px;border-radius:12px;border:2px solid #c0d4ff;background:#eef3ff;color:var(--navy);font-family:\'Nunito\',sans-serif;font-weight:900;font-size:13px;cursor:pointer">📊 Mein Fortschritt</button>'
    + '<button onclick="sw(\'est\')" style="flex:1;padding:12px;border-radius:12px;border:2px solid #dde5f5;background:var(--light);color:var(--navy);font-family:\'Nunito\',sans-serif;font-weight:900;font-size:13px;cursor:pointer">Weiter üben ▶</button>'
    + '</div>';
}

// ==================== PROGRESS DASHBOARD ====================
function renderProgress(a){
  const cats = [
    {key:'est',   label:'💼 Einkommensteuer', mode:'est'},
    {key:'ust',   label:'🛒 Umsatzsteuer',    mode:'ust'},
    {key:'ao',    label:'⚖️ Abgabenordnung',  mode:'ao'},
    {key:'bilanz',label:'📋 Bilanz',           mode:'bilanz'},
    {key:'kurios',label:'🤯 Kurioses',         mode:'kurios'},
    {key:'recht', label:'🏛️ Recht',            mode:'recht'},
    {key:'daily', label:'📅 Daily Challenge', mode:'daily'},
  ];
  let tc=0, ta=0;
  cats.forEach(c=>{ const s=catStats[c.key]; if(s){tc+=s.c;ta+=s.t;} });
  const ovPct = ta>0 ? Math.round(tc/ta*100) : 0;
  loadDailyData();
  const sc = dailyStreak.count;

  const summaryHtml = '<div class="prog-summary">'
    +'<div class="prog-sum-item"><div class="prog-sum-num">'+ta+'</div><div class="prog-sum-lbl">Beantwortet</div></div>'
    +'<div class="prog-sum-item"><div class="prog-sum-num" class="u-green">'+tc+'</div><div class="prog-sum-lbl">Richtig</div></div>'
    +'<div class="prog-sum-item"><div class="prog-sum-num" style="color:var(--blue)">'+ovPct+'%</div><div class="prog-sum-lbl">Quote</div></div>'
    +'<div class="prog-sum-item"><div class="prog-sum-num" style="color:#ff8c00">'+sc+'</div><div class="prog-sum-lbl">🔥 Streak</div></div>'
    +'</div>';

  const masteryCards = cats.map(c=>{
    const s = catStats[c.key];
    const pct = s&&s.t>0 ? Math.round(s.c/s.t*100) : -1;
    const cls = pct<0?'untouched':pct>=80?'strong':'weak';
    const pctCls = pct<0?'untouched':pct>=80?'strong':pct>=50?'mid':'weak';
    const barClr = pct<0?'#e0e8f5':pct>=80?'var(--green)':pct>=50?'var(--cyan)':'var(--orange)';
    const lbl = pct<0?'Noch nicht gespielt':pct+'%';
    const stats = s&&s.t>0 ? s.c+'/'+s.t+' richtig' : '';
    const act = pct<0?'▶ Starten':pct>=80?'🔁 Wiederholen':'🔥 Üben!';
    return '<div class="mastery-card '+cls+'">'
      +'<div class="mc-header"><span class="mc-label">'+c.label+'</span><span class="mc-pct '+pctCls+'">'+lbl+'</span></div>'
      +'<div class="mc-bar"><div class="mc-bar-fill" style="width:'+(pct<0?0:pct)+'%;background:'+barClr+'"></div></div>'
      +'<div style="display:flex;justify-content:space-between;align-items:center">'
      +'<span class="mc-stats">'+stats+'</span>'
      +'<button class="mc-action" onclick="sw(\''+c.mode+'\')" >'+act+'</button>'
      +'</div></div>';
  }).join('');

  const weakCats = cats.filter(c=>{const s=catStats[c.key];return s&&s.t>=5&&(s.c/s.t)<.5;});
  const weakHtml = weakCats.length>0
    ? '<div style="background:rgba(255,140,66,.1);border:2px solid rgba(255,140,66,.35);border-radius:14px;padding:14px 16px;margin-bottom:18px">'
      +'<div style="font-size:12px;font-weight:900;color:#8a4000;margin-bottom:10px">⚠️ Schwachstellen – hier üben!</div>'
      +weakCats.map(c=>'<div style="display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px solid rgba(255,140,66,.15)">'
        +'<span style="font-size:12px;font-weight:800;color:var(--navy)">'+c.label+'</span>'
        +'<button onclick="sw(\''+c.mode+'\')" style="padding:5px 12px;border-radius:100px;border:2px solid var(--orange);background:rgba(255,140,66,.1);color:var(--orange);font-family:\'Nunito\',sans-serif;font-weight:800;font-size:11px;cursor:pointer">🔥 Üben</button>'
        +'</div>').join('')
      +'</div>'
    : '';

  a.innerHTML = '<div class="basics">'
    +'<div class="prog-hero"><h2>📊 Mein Lernfortschritt</h2><p>Persönliche Stärken-Schwächen-Analyse</p></div>'
    +summaryHtml
    +weakHtml
    +'<div class="bsec" style="margin-top:0">📈 Lernstand pro Kategorie</div>'
    +'<div class="mastery-grid">'+masteryCards+'</div>'
    +'<button onclick="showConfirm(\'🗑️\',\'Fortschritt zurücksetzen?\',\'Dein gesamter Lernstand wird gelöscht.\',()=>{catStats={};saveCatStats();renderProgress(document.getElementById(\'ga\'));})" '
    +'style="width:100%;padding:11px;border-radius:10px;border:2px solid rgba(255,77,109,.3);background:rgba(255,77,109,.08);color:#ff4d6d;font-family:\'Nunito\',sans-serif;font-weight:800;font-size:12px;cursor:pointer;margin-top:4px">'
    +'🗑️ Fortschritt zurücksetzen</button>'
    +'</div>';
}

function updateBasicsDailyTeaser(){
  loadDailyData();
  const sub = document.getElementById('basics-daily-sub');
  const badge = document.getElementById('basics-daily-badge');
  if(!sub||!badge) return;
  const today = getTodayStr();
  if(dailyState&&dailyState.done&&dailyState.date===today){
    sub.textContent = 'Heute erledigt • '+dailyState.score+'/'+dailyState.questions.length+' richtig';
    badge.textContent = '✅ Streak: '+dailyStreak.count+' ??';
    badge.style.background='#00c97b'; badge.style.color='#fff';
  } else {
    sub.textContent = '7 Fragen • täglich neue Aufgaben • Streak: '+dailyStreak.count;
  }
}



// ==================== SPOTLIGHT TOUR (Einsteiger) ====================
// ==================== UNIFIED SPOTLIGHT TOUR ====================
const TOUR_KEY = 'tourDone_v9'; // bumped version → everyone sees new tour

// Steps work for all levels — level-specific ones are filtered at runtime
const TOUR_STEPS = [
  {
    el: 'tour-tabs', desktopOnly: true,
    title: '📍 Deine Navigation',
    text: 'Alle Themenbereiche auf einen Blick – aufgeteilt in Gruppen: Einstieg, Vertiefung und Tools. Grüne Häkchen erscheinen bei Bereichen, die du schon besucht hast.'
  },
  {
    el: 'tour-scorebar',
    title: '🏆 Punkte & Streak',
    text: 'Punkte, Richtig/Falsch-Quote und deine aktuelle Serie. Je länger dein Streak, desto mehr leuchtet das Feuer 🔥 Tipp auf den farbigen Level-Chip um dein Level zu wechseln.'
  },
  {
    el: 'level-banner',
    title: '🎓 Einsteiger oder Fortgeschritten?',
    text: 'Als Einsteiger startest du Schritt für Schritt. Bist du Azubi, Student oder bereitest du dich auf Prüfungen vor? Dann wechsle auf Fortgeschritten – dort schaltest du AO, Bilanz, Recht, Speed-Quiz und den vollständigen Prüfungsmodus frei!'
  },
  {
    el: 'tab-karriere', desktopOnly: true,
    title: '🎓 Karriere im Finanzamt',
    text: 'Alles über Ausbildung, Studium und Bewerbung. Gehalt, Fristen, Voraussetzungen – und ein direkter Bewerbungslink am Ende der Seite.'
  },
  {
    el: 'tab-est', desktopOnly: true,
    title: '💼 Quiz starten',
    text: 'Klicke auf einen Tab und leg direkt los. Nach jeder Antwort kommt eine ausführliche Erklärung mit Paragrafenverweis. Falsche Antworten landen automatisch im Fehlerspeicher.'
  },
  {
    el: 'tab-einfuehrung', desktopOnly: true,
    title: '🔒 Einführungstag (E-Tag)',
    text: 'Passwortgeschützter Bereich für Dozenten und Lehrkräfte – mit moderiertem Klassen-Quiz für den Unterricht. Als Schüler kannst du alle anderen Bereiche jederzeit frei nutzen.'
  },
  {
    el: 'mobileNav', mobileOnly: true,
    title: '📱 Schnell-Navigation',
    text: 'Hier unten wechselst du zwischen den wichtigsten Bereichen. Das „?"-Symbol oben rechts bringt dich jederzeit zurück zu dieser Tour.'
  },
];

let spotStep = 0;
let twbStep = 0;
const TWB_TOTAL = 3;

function twbGoTo(step) {
  twbStep = Math.max(0, Math.min(TWB_TOTAL - 1, step));
  const slides = document.getElementById('twb-slides');
  if(slides) slides.style.transform = `translateX(-${twbStep * 100}%)`;
  for(let i = 0; i < TWB_TOTAL; i++){
    const d = document.getElementById('twb-dot-' + i);
    if(d) d.classList.toggle('on', i === twbStep);
  }
  const back = document.getElementById('twb-back');
  const skip = document.getElementById('twb-skip');
  const next = document.getElementById('twb-next');
  if(back) back.style.display = twbStep > 0 ? '' : 'none';
  if(skip) skip.textContent = twbStep === TWB_TOTAL - 1 ? 'Nein danke' : 'Überspringen';
  if(next){
    if(twbStep === TWB_TOTAL - 1){
      next.textContent = '✨ Ja, Tour starten!';
      next.onclick = tourWelcomeYes;
    } else {
      next.textContent = 'Weiter →';
      next.onclick = twbNext;
    }
  }
}
function twbNext(){ twbGoTo(twbStep + 1); }
function twbPrev(){ twbGoTo(twbStep - 1); }

function tourWelcomeYes(){
  document.getElementById('tour-welcome').classList.remove('open');
  twbStep = 0;
  setTimeout(spotStart, 300);
}
function tourWelcomeNo(){
  document.getElementById('tour-welcome').classList.remove('open');
  twbStep = 0;
  localStorage.setItem(TOUR_KEY, '1');
}
function tourRestart(){
  localStorage.removeItem(TOUR_KEY);
  twbGoTo(0);
  document.getElementById('tour-welcome').classList.add('open');
}
function showTourWelcome(){
  twbGoTo(0);
  document.getElementById('tour-welcome').classList.add('open');
}

function spotStart(){
  spotStep = 0;
  document.getElementById('spot-overlay').classList.add('active');
  spotRender();
}

function _visibleSteps(){
  const mob = window.innerWidth <= 640;
  return TOUR_STEPS.filter(s => {
    if(s.mobileOnly  && !mob) return false;
    if(s.desktopOnly &&  mob) return false;
    const el = document.getElementById(s.el);
    if(!el) return false;
    const r = el.getBoundingClientRect();
    // level-banner might be flex but zero-width before level set → skip
    if(r.width === 0 && r.height === 0) return false;
    return true;
  });
}

function spotRender(){
  const steps = _visibleSteps();
  if(spotStep >= steps.length){ spotEnd(); return; }

  const step   = steps[spotStep];
  const target = document.getElementById(step.el);

  target.scrollIntoView({ behavior:'smooth', block:'center' });

  // Longer delay for elements near top (no scroll needed) vs far elements
  setTimeout(() => {
    const rect = target.getBoundingClientRect();
    if(rect.width === 0){ spotStep++; spotRender(); return; }

    const pad  = 10;
    const maxH = Math.min(rect.height + pad * 2, window.innerHeight * 0.45);
    const x = Math.max(2, rect.left  - pad);
    const y = Math.max(2, rect.top   - pad);
    const w = Math.min(rect.width  + pad * 2, window.innerWidth  - 4);
    const h = maxH;

    ['spot-hole','spot-glow'].forEach(id => {
      const el = document.getElementById(id);
      if(!el) return;
      el.style.left   = x + 'px';
      el.style.top    = y + 'px';
      el.style.width  = w + 'px';
      el.style.height = h + 'px';
    });

    // Tooltip: prefer below element, fall back to above, then centred
    const tip    = document.getElementById('spot-tooltip');
    const tipW   = Math.min(300, window.innerWidth - 32);
    const tipH   = 220;
    const gap    = 14;

    let tipTop  = y + h + gap;
    let tipLeft = Math.max(16, Math.min(x, window.innerWidth - tipW - 16));

    if(tipTop + tipH > window.innerHeight - 10){
      // Try above
      tipTop = y - tipH - gap;
    }
    if(tipTop < 8){
      // Centre vertically, centred horizontally
      tipTop  = Math.round((window.innerHeight - tipH) / 2);
      tipLeft = Math.round((window.innerWidth  - tipW) / 2);
    }

    tip.style.top   = Math.max(8, tipTop)  + 'px';
    tip.style.left  = Math.max(8, tipLeft) + 'px';
    tip.style.width = tipW + 'px';

    const total  = steps.length;
    const isLast = spotStep >= total - 1;
    document.getElementById('spot-step-label').textContent = `Schritt ${spotStep+1} / ${total}`;
    document.getElementById('spot-title').textContent      = step.title;
    document.getElementById('spot-text').textContent       = step.text;
    document.getElementById('spot-next-btn').textContent   = isLast ? "Los geht's ✓" : 'Weiter →';
    document.getElementById('spot-dots').innerHTML =
      steps.map((_,i) => `<div class="spot-dot${i===spotStep?' on':''}"></div>`).join('');
  }, 580);
}

function spotNext(){
  spotStep++;
  spotRender();
}

function spotEnd(){
  document.getElementById('spot-overlay').classList.remove('active');
  ['spot-hole','spot-glow'].forEach(id=>{
    const el=document.getElementById(id);
    if(el){el.style.width='0';el.style.height='0';}
  });
  localStorage.setItem(TOUR_KEY, '1');
  window.scrollTo({ top:0, behavior:'smooth' });
}

function checkTour(){
  if(!userLevel){
    setTimeout(()=>showLevelGate(false), 600);
  } else if(!localStorage.getItem(TOUR_KEY)){
    setTimeout(showTourWelcome, 1200);
  }
}

// Legacy stubs
function tourShow(){ showTourWelcome(); }
const SPOT_KEY = TOUR_KEY;


// ==================== FACH-INTRO SYSTEM ====================
const SEEN_INTROS_KEY = 'seenIntros_v2';
let seenIntros = [];
try { seenIntros = JSON.parse(localStorage.getItem(SEEN_INTROS_KEY)||'[]'); } catch(e){ seenIntros=[]; }
let introPendingCallback = null;

const FACH_INTROS = {
  est: {
    icon: '💼',
    title: 'Einkommensteuer',
    subtitle: '§§ 1–120 EStG · Übungsquiz',
    body: 'Die <b>Einkommensteuer</b> ist die wichtigste direkte Steuer Deutschlands. Sie besteuert das <b>zu versteuernde Einkommen (zvE)</b> natürlicher Personen.\n\nEs gibt <b>7 Einkunftsarten</b> (§§ 13–22 EStG) – von Land- & Forstwirtschaft über Gewerbebetrieb bis zu sonstigen Einkünften. Der Tarif ist <b>progressiv</b> (0–45 %).\n\nIm Quiz: Einkunftsarten zuordnen und Werbungskosten erkennen.',
    chips: ['7 Einkunftsarten', 'Progressiver Tarif', 'Werbungskosten', 'Lohnsteuer']
  },
  ust: {
    icon: '🛒',
    title: 'Umsatzsteuer',
    subtitle: '§§ 1–28 UStG · Welcher Satz gilt?',
    body: 'Die <b>Umsatzsteuer (USt)</b> – im Alltag als Mehrwertsteuer bekannt – besteuert den Konsum. Als <b>indirekte Steuer</b> zahlt zwar der Endkunde, aber Unternehmer führen sie ab.\n\nEs gibt drei Sätze: <b>0 % (steuerfrei)</b>, <b>7 % (ermäßigt)</b> für Lebensmittel & Bücher, und <b>19 % (Regelsteuersatz)</b>.\n\nIm Quiz: Du bekommst ein Produkt – welcher Satz gilt?',
    chips: ['0 % steuerfrei', '7 % ermäßigt', '19 % Regelsteuersatz', 'Vorsteuerabzug']
  },
  bilanz: {
    icon: '📋',
    title: 'Bilanz & Buchführung',
    subtitle: 'Doppelte Buchführung · Buchungssätze',
    body: 'Die <b>doppelte Buchführung</b> erfasst jeden Geschäftsvorfall auf zwei Konten: <b>Soll</b> und <b>Haben</b>. Merke: Aktiv- und Aufwandskonten wachsen im Soll, Passiv- und Ertragskonten im Haben.\n\n<b>Buchungssatz-Formel:</b> Sollkonto → an → Habenkonto\n\nIm Quiz: Ein Geschäftsvorfall – welcher Buchungssatz stimmt?',
    chips: ['Soll / Haben', 'Aktivkonto', 'Passivkonto', 'Aufwand / Ertrag']
  },
  ao: {
    icon: '⚖️',
    title: 'Abgabenordnung',
    subtitle: '§§ 1–412 AO · Das Steuerverfahrensrecht',
    body: 'Die <b>Abgabenordnung (AO)</b> ist das "Grundgesetz des Steuerrechts" – sie regelt das <b>Verfahren</b> (nicht die Höhe der Steuern).\n\nThemen: Festsetzungsverjährung, Einspruchsfristen, Außenprüfungen, Steuerhinterziehung, Bestandskraft von Bescheiden.\n\nIm Quiz: Fristen, Begriffe und Verfahrensschritte – was gilt wann?',
    chips: ['Einspruch 1 Monat', 'Verjährung 4 Jahre', 'Verwaltungsakt', 'Außenprüfung']
  },
  kurios: {
    icon: '🤯',
    title: 'Kurioses Steuerrecht',
    subtitle: 'Wahr oder Falsch?',
    body: 'Das deutsche Steuerrecht hat über <b>40 Steuerarten</b> – manche historisch, manche skurril. Von der Sektsteuer (1902) über die Hundesteuer bis zur Kernbrennstoffsteuer.\n\nDieses Quiz testet: Weißt du, was wirklich stimmt – oder klingt es nur plausibel?\n\n<b>Wahr oder Falsch</b> – vertrau deiner Intuition!',
    chips: ['40+ Steuerarten', 'Historische Steuern', 'Kuriose Fakten', 'Wahr/Falsch']
  },
  recht: {
    icon: '🏛️',
    title: 'Privat- & Öffentliches Recht',
    subtitle: 'Rechtsordnung · Abgrenzung',
    body: 'Das Recht teilt sich in <b>Privatrecht</b> (Gleichordnung: BGB, HGB) und <b>Öffentliches Recht</b> (Überordnung: Steuerrecht, Beamtenrecht).\n\nDas <b>Steuerrecht ist Öffentliches Recht</b> – der Staat setzt Steuern einseitig per Verwaltungsakt fest. Kein Verhandlungsspielraum.\n\nIm Quiz: Zuordnungen, Rechtswege und Grundsätze.',
    chips: ['Privatrecht = Gleichordnung', 'Öff. Recht = Überordnung', 'Finanzgericht', 'BFH']
  }
};

function maybeShowIntro(mode, callback){
  // Fach-Intro-Modals deaktiviert – direkt zur Seite
  callback();
}

function closeIntro(){
  document.getElementById('intro-modal').classList.remove('open');
  // "Überspringen" soll trotzdem das Quiz starten
  if(introPendingCallback){ introPendingCallback(); introPendingCallback=null; }
}

function closeIntroAndGo(){
  document.getElementById('intro-modal').classList.remove('open');
  if(introPendingCallback){ introPendingCallback(); introPendingCallback=null; }
}

// ==================== GLOSSAR ====================
const GLOSSAR_DATA = [
  {term:'Abgabenordnung (AO)', norm:'§ 1 AO', def:'Das "Grundgesetz des Steuerrechts" – regelt das steuerliche Verfahren (Fristen, Einspruch, Außenprüfung), nicht die Höhe einzelner Steuern.', example:'Die AO regelt, dass ein Einspruch gegen einen Steuerbescheid innerhalb eines Monats einzulegen ist.'},
  {term:'Absetzung für Abnutzung (AfA)', norm:'§ 7 EStG', def:'Verteilung der Anschaffungs- oder Herstellungskosten eines Wirtschaftsguts auf seine betriebsgewöhnliche Nutzungsdauer. Mindert den Gewinn jährlich um den jeweiligen Abschreibungsbetrag.', example:'Laptop 1.200 €: Seit BMF-Schreiben 22.02.2022 optional Nutzungsdauer 1 Jahr → 1.200 € sofort absetzbar im Anschaffungsjahr. Alternativ Abschreibung nach üblicher Nutzungsdauer (bis 2021: 3 Jahre laut AfA-Tabelle). GWG bis 800 € netto: Sofortabschreibung nach § 6 Abs. 2 EStG.'},
  {term:'Außenprüfung (Betriebsprüfung)', norm:'§ 193 AO', def:'Prüfung der steuerlichen Verhältnisse eines Steuerpflichtigen durch das Finanzamt direkt beim Steuerpflichtigen – also im Betrieb oder beim Steuerberater. Ziel: Ermittlung des tatsächlich verwirklichten Sachverhalts.', example:'Beim Gewerbetreibenden erscheint ein Betriebsprüfer und sichtet Buchführung und Belege typischerweise der letzten drei Veranlagungszeiträume.'},
  {term:'Außergewöhnliche Belastungen', norm:'§ 33 EStG', def:'Aufwendungen, die einem Steuerpflichtigen zwangsläufig entstehen und die größer sind als bei der überwiegenden Mehrzahl der Steuerpflichtigen gleicher Einkommensverhältnisse, gleicher Vermögensverhältnisse und gleichen Familienstands.', example:'Krankheitskosten (z. B. Zahnarzt) können als außergewöhnliche Belastung geltend gemacht werden, soweit sie die zumutbare Eigenbelastung übersteigen.'},
  {term:'Bestandskraft (formell / materiell)', norm:'§§ 172 ff. AO · § 355 AO', def:'<b>Formelle Bestandskraft</b>: Tritt ein, wenn die Einspruchsfrist (1 Monat, § 355 AO) ungenutzt abgelaufen ist – Rechtsmittel sind danach ausgeschlossen. <b>Materielle Bestandskraft</b>: Der Bescheid bindet inhaltlich. Trotz formeller Bestandskraft kann eine inhaltliche Änderung noch in gesetzlich geregelten Fällen erfolgen (§§ 172 ff. AO) – z. B. bei neuen Tatsachen (§ 173 AO), bei offenbarer Unrichtigkeit (§ 129 AO) oder bei Vorläufigkeitsvermerk (§ 165 AO). Formelle und materielle Bestandskraft sind also nicht dasselbe!', example:'Bescheid vom 1. März, Einspruchsfrist läuft 1. April ab → formell bestandskräftig. Im Mai taucht ein vergessener Beleg auf → ggf. Änderung nach § 173 AO (neue Tatsache) möglich, obwohl der Bescheid formell längst bestandskräftig ist.'},
  {term:'Betriebsausgaben', norm:'§ 4 Abs. 4 EStG', def:'Aufwendungen, die durch den Betrieb veranlasst sind. Sie mindern den Gewinn und damit die Steuerlast des Unternehmers oder Freiberuflers.', example:'Büromiete, Materialkosten, Fahrtkosten für Dienstreisen, Software-Abonnements – alles Betriebsausgaben, sofern betrieblich veranlasst.'},
  {term:'Doppelbesteuerungsabkommen (DBA)', norm:'§ 2 AO i.V.m. jew. DBA', def:'Bilaterale völkerrechtliche Verträge zwischen zwei Staaten, die das Besteuerungsrecht für grenzüberschreitende Sachverhalte zuweisen und damit eine doppelte Besteuerung desselben Einkommens vermeiden.', example:'Ein in Deutschland wohnhafter Arbeitnehmer arbeitet in der Schweiz – das DBA D-CH weist das Besteuerungsrecht zu und verhindert, dass beide Staaten voll zugreifen.'},
  {term:'Einkommensteuer (ESt)', norm:'§ 1 EStG', def:'Direkte Steuer auf das Einkommen natürlicher Personen. Der Tarif ist progressiv: Er steigt von 0 % (Grundfreibetrag) über einen Eingangssteuersatz von 14 % bis zum Spitzensteuersatz von 42 % (ab ca. 68.000 €) bzw. 45 % (Reichensteuersatz ab ca. 278.000 €, 2026).', example:'Jahreseinkommen 35.000 € zvE → Einkommensteuer ca. 5.600 € (Durchschnittssteuersatz ca. 16 %).'},
  {term:'Einkunftsarten (7)', norm:'§§ 13–23 EStG', def:'Das EStG erfasst Einkommen aus 7 Einkunftsarten: Land- & Forstwirtschaft (§ 13), Gewerbebetrieb (§ 15), selbstständige Arbeit (§ 18), nichtselbstständige Arbeit (§ 19), Kapitalvermögen (§ 20), Vermietung & Verpachtung (§ 21) sowie sonstige Einkünfte (§§ 22–23).', example:'Ein Lehrer im Angestelltenverhältnis erzielt Einkünfte aus nichtselbstständiger Arbeit (§ 19 EStG).'},
  {term:'Einspruch', norm:'§ 347 AO', def:'Förmlicher außergerichtlicher Rechtsbehelf gegen einen Steuerverwaltungsakt (z. B. Steuerbescheid). Frist: 1 Monat nach Bekanntgabe (§ 355 AO). Der Einspruch hat keine automatische aufschiebende Wirkung – diese muss separat als Aussetzung der Vollziehung (AdV) beantragt werden (§ 361 AO).', example:'Steuerbescheid vom 10. März, du hältst ihn für falsch → Einspruch schriftlich oder zur Niederschrift spätestens bis 10. April einlegen.'},
  {term:'Festsetzungsverjährung', norm:'§ 169 AO', def:'Der Zeitraum, innerhalb dessen das Finanzamt eine Steuer noch festsetzen oder einen Bescheid ändern darf. Regulär 4 Jahre. Bei leichtfertiger Steuerverkürzung: 5 Jahre. Bei vorsätzlicher Steuerhinterziehung: 10 Jahre.', example:'Einkommensteuerbescheid für 2020, Erklärung abgegeben 2021 → reguläre Verjährung endet mit Ablauf 2025.'},
  {term:'Gewerbesteuer (GewSt)', norm:'§ 1 GewStG', def:'Kommunale Steuer auf den Gewerbeertrag von Gewerbebetrieben. Berechnung: Gewerbeertrag × Steuermesszahl (3,5 %) = Steuermessbetrag × gemeindlicher Hebesatz. Für Einzelunternehmen und Personengesellschaften gilt ein Freibetrag von 24.500 €.', example:'GmbH in Berlin (Hebesatz 410 %), Gewerbeertrag 100.000 €: 100.000 × 3,5 % × 410 % = 14.350 € GewSt.'},
  {term:'Grunderwerbsteuer (GrESt)', norm:'§ 1 GrEStG', def:'Steuer auf Rechtsvorgänge, die den Erwerb eines inländischen Grundstücks zum Gegenstand haben. Die Höhe ist Ländersache: von 3,5 % (Bayern, Sachsen) bis 6,5 % (z. B. Thüringen, NRW, Schleswig-Holstein).', example:'Wohnungskauf für 400.000 € in Berlin (GrESt-Satz 6,0 %) → 24.000 € Grunderwerbsteuer.'},
  {term:'Grundfreibetrag', norm:'§ 32a Abs. 1 Nr. 1 EStG', def:'Der Teil des Einkommens, der steuerfrei bleibt und das steuerliche Existenzminimum sichert. 2026: 12.336 €. Erst auf den darüber hinausgehenden Betrag wird Einkommensteuer erhoben.', example:'Jahreseinkommen 11.000 € → keine Einkommensteuer, da das zvE unter dem Grundfreibetrag liegt.'},
  {term:'Kirchensteuer', norm:'Landesrecht (z. B. KiStG Berlin)', def:'Steuer, die von Mitgliedern bestimmter Religionsgemeinschaften zusätzlich zur Einkommensteuer erhoben wird. Der Satz beträgt 8 % der Einkommensteuer in Bayern und Baden-Württemberg, 9 % in allen anderen Bundesländern.', example:'Einkommensteuer 5.000 €, Kirchenmitglied in Berlin (9 %) → 450 € Kirchensteuer, die der Arbeitgeber direkt einbehält.'},
  {term:'Körperschaftsteuer (KSt)', norm:'§ 1 KStG', def:'Ertragsteuer für juristische Personen (GmbH, AG u. a.). Einheitlicher Steuersatz von 15 % auf das zu versteuernde Einkommen, zuzüglich 5,5 % Solidaritätszuschlag auf die KSt. Hinzu kommt i. d. R. die Gewerbesteuer.', example:'GmbH mit 200.000 € zu versteuerndem Einkommen → 30.000 € KSt + 1.650 € Soli = 31.650 € (ohne GewSt).'},
  {term:'Lohnsteuer', norm:'§ 38 EStG', def:'Erhebungsform der Einkommensteuer für Arbeitnehmer – sie wird direkt an der Quelle einbehalten. Der Arbeitgeber zieht sie vom Bruttoarbeitslohn ab und führt sie ans Finanzamt ab. Sie wird im Rahmen der Veranlagung auf die Jahreseinkommensteuer angerechnet.', example:'Brutto 3.000 €, Steuerklasse I → ca. 340 € Lohnsteuer werden vom Arbeitgeber einbehalten und abgeführt.'},
  {term:'Progressionsvorbehalt', norm:'§ 32b EStG', def:'Steuerfreie Lohnersatzleistungen (z. B. Arbeitslosengeld, Elterngeld, Krankengeld) bleiben selbst steuerfrei, erhöhen aber den auf das übrige zu versteuernde Einkommen anzuwendenden Steuersatz.', example:'Arbeitslosengeld 8.000 € + steuerpflichtiges Gehalt 20.000 € → der Steuersatz richtet sich nach 28.000 €, wird aber nur auf 20.000 € angewendet.'},
  {term:'Sonderausgaben', norm:'§§ 10–10b EStG', def:'Bestimmte Aufwendungen der privaten Lebensführung, die steuerlich abgezogen werden dürfen, obwohl sie nicht der Einkunftserzielung dienen. Dazu gehören u. a. Vorsorgeaufwendungen, Kirchensteuer, Unterhalt und Spenden.', example:'Kirchensteuer 450 € + Spende 200 € an einen gemeinnützigen Verein = 650 € als Sonderausgaben, die das zvE mindern.'},
  {term:'Solidaritätszuschlag (Soli)', norm:'§ 1 SolZG', def:'Ergänzungsabgabe zur Einkommen- und Körperschaftsteuer. Seit 2021 zahlen ihn aufgrund einer Freigrenze nur noch Steuerpflichtige mit einer Einkommensteuer über ca. 18.130 € (2026). Der Satz beträgt 5,5 % der festgesetzten Einkommensteuer.', example:'ESt 10.000 € → kein Soli (unter Freigrenze). ESt 25.000 € → 1.375 € Soli (5,5 % × 25.000 €).'},
  {term:'Steuerklassen (I–VI)', norm:'§ 38b EStG', def:'Kategorien für Arbeitnehmer, die den Lohnsteuerabzug beeinflussen. Klasse I: ledig/geschieden. Klasse II: Alleinerziehende. Klasse III/V: Ehepaar mit ungleichem Einkommen. Klasse IV: Ehepaar mit ähnlichem Einkommen. Klasse VI: Zweitarbeitsverhältnis.', example:'Ehepaar: Partner A (höheres Einkommen) → Steuerklasse III, Partner B → Klasse V. Der Splittingvorteil wirkt sich so monatlich beim Lohnsteuerabzug aus.'},
  {term:'Steuerpflicht (unbeschränkt / beschränkt)', norm:'§ 1 EStG', def:'Unbeschränkte Steuerpflicht trifft, wer Wohnsitz oder gewöhnlichen Aufenthalt in Deutschland hat – sein gesamtes Welteinkommen unterliegt dann der deutschen ESt. Beschränkte Steuerpflicht gilt für Personen ohne inländischen Wohnsitz, die jedoch inländische Einkünfte (§ 49 EStG) erzielen.', example:'US-Bürger mit Wohnsitz in Berlin → unbeschränkt einkommensteuerpflichtig in Deutschland mit seinem Welteinkommen.'},
  {term:'Umsatzsteuer (USt)', norm:'§ 1 UStG', def:'Indirekte Steuer auf Lieferungen und sonstige Leistungen im Inland gegen Entgelt. Es gibt den Regelsteuersatz (19 %), den ermäßigten Steuersatz (7 %) und Steuerbefreiungen (§ 4 UStG) – echte Befreiungen (mit Vorsteuerabzug) und unechte Befreiungen (ohne Vorsteuerabzug).', example:'Supermarkt verkauft Milch: 7 % (ermäßigt). Restaurant serviert ein Gericht am Tisch: 19 % (Regelsteuersatz als Restaurationsleistung).'},
  {term:'Verlustvortrag / -rücktrag', norm:'§ 10d EStG', def:'Negative Einkünfte eines Jahres können in das unmittelbar vorangegangene Jahr zurückgetragen (bis 10 Mio. €) oder in Folgejahre vorgetragen werden. Der Verlustvortrag unterliegt ab 1 Mio. € der sog. Mindestbesteuerung (max. 60 % des übersteigenden Betrags pro Jahr).', example:'Selbstständiger macht 2024 einen Verlust von 15.000 €. Er kann ihn auf 2025 vortragen und dort das zvE entsprechend mindern.'},
  {term:'Verwaltungsakt', norm:'§ 118 Satz 1 AO', def:'Jede Verfügung, Entscheidung oder andere hoheitliche Maßnahme, die eine Behörde zur Regelung eines Einzelfalles auf dem Gebiet des öffentlichen Rechts trifft und die auf unmittelbare Rechtswirkung nach außen gerichtet ist.', example:'Das Finanzamt erlässt einen Einkommensteuerbescheid → dieser ist ein Verwaltungsakt, gegen den Einspruch eingelegt werden kann.'},
  {term:'Vorsteuerabzug', norm:'§ 15 UStG', def:'Unternehmer, die zum Vorsteuerabzug berechtigt sind, dürfen die ihnen von anderen Unternehmern in Rechnung gestellte Umsatzsteuer von ihrer eigenen Umsatzsteuerschuld abziehen. So wird jede Stufe der Leistungskette nur auf ihren eigenen Mehrwert belastet.', example:'GmbH kauft Rohstoffe für 1.000 € netto + 190 € USt. Diese 190 € Vorsteuer zieht sie von der eigenen USt-Zahllast ab.'},
  {term:'Werbungskosten', norm:'§ 9 EStG', def:'Aufwendungen zur Erwerbung, Sicherung und Erhaltung von Einnahmen aus Überschusseinkunftsarten (z. B. nichtselbstständige Arbeit, Vermietung). Ohne Nachweis gilt der Arbeitnehmer-Pauschbetrag von 1.230 € (2026).', example:'Entfernungspauschale zur Arbeit (<b>0,38 €/km ab km 1</b>, ab VZ 2026), Fachbücher, Homeoffice-Pauschale – alles Werbungskosten.'},
  {term:'Zu versteuerndes Einkommen (zvE)', norm:'§ 2 Abs. 5 EStG', def:'Das Einkommen, auf das der Steuertarif angewendet wird. Ermittlung: Summe der Einkünfte → ./. Altersentlastungsbetrag etc. = Gesamtbetrag der Einkünfte → ./. Sonderausgaben, außergewöhnliche Belastungen = Einkommen → ./. Freibeträge = zvE.', example:'Bruttogehalt 50.000 € – Werbungskosten 2.000 € – Sonderausgaben 3.000 € – Freibeträge 500 € = zvE ca. 44.500 €.'},
  {term:'Zufluss-Abfluss-Prinzip', norm:'§ 11 EStG · § 38a EStG', def:'<b>§ 11 EStG (Grundregel):</b> Einnahmen sind im Zuflussjahr, Ausgaben im Abflussjahr zu versteuern. Ausnahme: regelmäßig wiederkehrende Beträge (z.B. Miete, Zinsen) innerhalb von 10 Tagen um den Jahreswechsel gelten als im wirtschaftlich zugehörigen Jahr zugeflossen.<br><br><b>Wichtige Ausnahme – Arbeitslohn (§ 38a Abs. 1 EStG):</b> <em>Laufender Arbeitslohn</em> (reguläres Gehalt) gilt im <em>Lohnzahlungszeitraum</em> als bezogen – unabhängig vom tatsächlichen Zahlungseingang. Für laufenden Arbeitslohn ist die 10-Tage-Regel des § 11 EStG daher <b>nicht</b> entscheidend; § 38a EStG geht als Sonderregel vor. Einmalige Bezüge (Bonus, Abfindung) fallen nicht unter § 38a und werden wieder nach dem allgemeinen Zuflussprinzip behandelt.', example:'Dezemberlohn, Auszahlung am 5. Januar → stets Dezembereinkommen nach § 38a Abs. 1 EStG (nicht wegen 10-Tage-Regel). | Jahresbonus am 5. Januar → Januareinkommen (sonstiger Bezug, § 11 EStG gilt). | Weihnachtsgeld am 20. Dezember → Dezembereinkommen (Zuflussjahr = Zahlungsjahr).'},
  {term:'Zwangsläufigkeit', norm:'§ 33 Abs. 2 EStG', def:'Aufwendungen entstehen zwangsläufig, wenn der Steuerpflichtige sich ihnen aus rechtlichen, tatsächlichen oder sittlichen Gründen nicht entziehen kann. Zwangsläufigkeit ist Voraussetzung für den Abzug als außergewöhnliche Belastung.', example:'Krankheitskosten nach ärztlicher Verordnung sind zwangsläufig. Die Anschaffung eines teuren Hobbys hingegen nicht.'},
  /* ─── GEWERBESTEUER ─── */
  {term:'Gewerbeertrag', norm:'§ 7 GewStG', def:'Bemessungsgrundlage der Gewerbesteuer. Ausgangspunkt ist der Gewinn nach EStG/KStG, korrigiert durch Hinzurechnungen (§ 8 GewStG) und Kürzungen (§ 9 GewStG). Der Gewerbeertrag wird auf volle 100 € abgerundet.', example:'Gewinn lt. EStG 80.000 € + Hinzurechnungen 5.000 € – Kürzungen 1.000 € = Gewerbeertrag 84.000 €.'},
  {term:'Gewerbesteuer-Messbetrag', norm:'§ 11 GewStG', def:'Gewerbeertrag (nach Abzug des Freibetrags von 24.500 € bei Einzelunternehmen/Personengesellschaften) × Steuermesszahl 3,5 %. Das Ergebnis ist der Messbetrag, den die Gemeinde mit ihrem Hebesatz multipliziert.', example:'Gewerbeertrag 100.000 € – Freibetrag 24.500 € = 75.500 € × 3,5 % = 2.642,50 € Messbetrag.'},
  {term:'Hebesatz (Gewerbesteuer)', norm:'§ 16 GewStG', def:'Von jeder Gemeinde individuell festgelegter Multiplikator für den Gewerbesteuer-Messbetrag. Der Mindesthebesatz beträgt 200 %. In der Praxis: Berlin ca. 410 %, Frankfurt ca. 460 %, München ca. 490 %.', example:'Messbetrag 2.642,50 € × Hebesatz 410 % (Berlin) = 10.834 € Gewerbesteuer.'},
  {term:'Hinzurechnungen (GewSt)', norm:'§ 8 Nr. 1 GewStG', def:'Finanzierungsanteile werden dem Gewerbeertrag hinzugerechnet, um Eigen- und Fremdkapitalfinanzierung gleichzustellen. Effektive Sätze: 25 % der Zinsaufwendungen (Nr. 1a), 5 % der Miet-/Pacht beweglicher WG (Nr. 1d: ¼ × ⅕), 12,5 % der Miet-/Pacht unbeweglicher WG (Nr. 1e: ¼ × ½), 6,25 % der Lizenzgebühren (Nr. 1f: ¼ × ¼) – aber nur der Teil, der 200.000 € übersteigt.', example:'Zinsaufwendungen 300.000 €: 25 % × (300.000 – 200.000) = 25.000 € Hinzurechnung. Mietaufwand für Bürogebäude 400.000 €: 12,5 % × (400.000 – 200.000) = 25.000 € (anteilig).'},
  {term:'Kürzungen (GewSt)', norm:'§ 9 GewStG', def:'Beträge, die vom Gewerbeertrag abgezogen werden, um Doppelbelastungen zu vermeiden. Wichtigste: 1,2 % des Einheitswerts des Grundbesitzes (Nr. 1), Dividenden aus Beteiligungen ≥ 15 % (Nr. 2a).', example:'Grundbesitz-Einheitswert 500.000 € × 1,2 % = 6.000 € Kürzung.'},
  {term:'Anrechnung GewSt auf ESt (§ 35 EStG)', norm:'§ 35 EStG', def:'Zur Milderung der Doppelbelastung durch GewSt und ESt wird die Einkommensteuer des Gewerbetreibenden pauschal um das 4-fache des Gewerbesteuer-Messbetrags ermäßigt. Die Entlastung ist auf die tatsächlich gezahlte GewSt begrenzt.', example:'Messbetrag 2.000 € × 4 = 8.000 € ESt-Ermäßigung. Bei Hebesatz 400 %: gezahlte GewSt = 8.000 € → vollständige Anrechnung.'},
  /* ─── KÖRPERSCHAFT- & GESELLSCHAFTSBESTEUERUNG ─── */
  {term:'Körperschaftsteuer (KSt)', norm:'§§ 1, 23 KStG', def:'Ertragsteuer für juristische Personen (GmbH, AG, eG, Vereine). Einheitlicher Steuersatz 15 % auf das zu versteuernde Einkommen. Zuzüglich 5,5 % Solidaritätszuschlag auf die KSt (effektiv 15,825 %). Hinzu kommt die Gewerbesteuer.', example:'GmbH mit 200.000 € zvE → 30.000 € KSt + 1.650 € Soli = 31.650 €. Dazu ca. 28.000 € GewSt (Hebesatz 400 %) = Gesamtbelastung ca. 59.650 €.'},
  {term:'Trennungsprinzip', norm:'§§ 1, 8 KStG', def:'Kapitalgesellschaft und Gesellschafter sind steuerlich eigenständige Rechtssubjekte. Die GmbH zahlt KSt + GewSt auf ihren Gewinn. Ausschüttungen an den Gesellschafter unterliegen zusätzlich der Kapitalertragsteuer (25 %) oder dem Teileinkünfteverfahren. Ergebnis: wirtschaftliche Doppelbelastung.', example:'GmbH-Gewinn 100.000 € → ca. 30 % KSt/GewSt → 70.000 € verbleiben. Ausschüttung: 25 % KapESt → 52.500 € beim Gesellschafter.'},
  {term:'Transparenzprinzip (Personengesellschaften)', norm:'§§ 179, 180 AO · § 15 EStG', def:'Personengesellschaften (GbR, OHG, KG) sind keine eigenständigen Steuersubjekte für ESt/KSt. Gewinne werden einheitlich und gesondert festgestellt und den Gesellschaftern direkt zugerechnet – diese versteuern ihren Anteil individuell.', example:'KG mit zwei Gesellschaftern (Anteile je 50 %): Gewinn 200.000 € → je 100.000 € werden den Gesellschaftern zugerechnet und bei diesen persönlich versteuert.'},
  {term:'Verdeckte Gewinnausschüttung (vGA)', norm:'§ 8 Abs. 3 S. 2 KStG', def:'Vermögensminderung oder verhinderte Vermögensmehrung bei einer Kapitalgesellschaft, die durch das Gesellschaftsverhältnis veranlasst ist und nicht auf einem ordnungsgemäßen Gewinnverteilungsbeschluss beruht. Maßstab: Was hätte ein ordentlicher und gewissenhafter Geschäftsleiter getan?', example:'GmbH zahlt dem Gesellschafter-Geschäftsführer ein Gehalt von 300.000 € statt marktüblicher 180.000 €. Die 120.000 € Differenz sind vGA → werden der GmbH als Gewinn zugerechnet.'},
  {term:'Teileinkünfteverfahren', norm:'§ 3 Nr. 40 EStG · § 3c Abs. 2 EStG', def:'Bei Beteiligungen im Betriebsvermögen sind Dividenden und Veräußerungsgewinne aus Kapitalgesellschaften nur zu 60 % steuerpflichtig (40 % steuerfrei). Spiegelbildlich sind Aufwendungen nur zu 60 % abziehbar. Gilt nicht für Privatvermögen (dort Abgeltungsteuer § 32d EStG).', example:'Dividende 10.000 € im Betriebsvermögen → 6.000 € steuerpflichtig × persönlicher Steuersatz. Kosten 1.000 € → nur 600 € abziehbar.'},
  {term:'Organschaft (KSt)', norm:'§§ 14–19 KStG', def:'Steuerliche Einheit zwischen Organträger (Muttergesellschaft) und Organgesellschaft (Tochter). Voraussetzungen: finanzielle Eingliederung (Mehrheitsbeteiligung) + Ergebnisabführungsvertrag (EAV) für mind. 5 Jahre. Folge: Einkommen der Tochter wird der Mutter zugerechnet – Verlustverrechnung im Konzern möglich.', example:'Mutter-GmbH 100 % Beteiligung an Tochter-GmbH + EAV: Tochter macht Verlust 50.000 € → mindert Einkommen der Mutter.'},
  {term:'Kapitalertragsteuer (KapESt)', norm:'§§ 43, 44 EStG', def:'Quellensteuer, die bei Ausschüttungen von Kapitalgesellschaften einbehalten wird. Steuersatz: 25 % + 5,5 % Soli. Die GmbH ist als Schuldner verpflichtet, KapESt einzubehalten und ans Finanzamt abzuführen. Im Privatvermögen: Abgeltungswirkung (§ 32d EStG).', example:'GmbH schüttet 80.000 € an Gesellschafter aus → 20.000 € KapESt + 1.100 € Soli werden einbehalten, 58.900 € ausgezahlt.'},
  {term:'Verlustabzug / Mindestbesteuerung', norm:'§ 10d EStG · § 8 KStG', def:'Verluste können bis 1 Mio. € ins Vorjahr zurückgetragen oder zeitlich unbegrenzt vorgetragen werden. Beim Verlustvortrag gilt die Mindestbesteuerung: Gewinne bis 1 Mio. € sind voll verrechenbar, der darüber liegende Betrag nur zu 60 %. Cave: § 8c KStG – bei Anteilserwerb über 50 % können Verlustvorträge untergehen.', example:'Verlustvortrag 5 Mio. €, Gewinn 3 Mio. €: 1 Mio. voll verrechenbar + 60 % × 2 Mio. = 2,2 Mio. Verlustnutzung → 800.000 € Restgewinn steuerpflichtig.'},
];

let glossarFilter = '';
let glossarAlpha = '';
let glossarView = 'glossar'; // 'glossar' | 'merksatz'

const MERKSATZ_DATA = [
  {cat:'Abgabenordnung (AO)', icon:'⚖️', color:'#4a6fa5', rules:[
    {title:'Festsetzungsverjährung', norm:'§ 169 AO', rule:'4 Jahre regulär · 5 J. leichtfertig · 10 J. Hinterziehung', hint:'Anlaufhemmung (§ 170 AO): Frist startet erst mit Ablauf des Abgabejahres!'},
    {title:'Einspruchsfrist', norm:'§ 355 AO', rule:'1 Monat ab Bekanntgabe', hint:'Bekanntgabe = Bescheiddatum + 4 Tage (§ 122 Abs. 2 AO). Fristversäumnis → Bestandskraft!'},
    {title:'Bestandskraft – formell vs. materiell', norm:'§§ 172 ff. AO', rule:'Formell: Einspruchsfrist abgelaufen. Materiell: Inhalt bindend – aber änderbar nach § 173 AO (neue Tatsachen), § 129 AO (Unrichtigkeit), § 165 AO (Vorläufigkeit).', hint:'Formell ≠ materiell! Auch ein bestandskräftiger Bescheid kann noch korrigiert werden.'},
    {title:'Steuerhinterziehung vs. Steuerverkürzung', norm:'§§ 370 / 378 AO', rule:'Hinterziehung = Vorsatz → Straftat (bis 5 / 10 J.). Verkürzung = grobe Fahrlässigkeit → Ordnungswidrigkeit.', hint:'Vorsatz ist der entscheidende Unterschied.'},
    {title:'Strafbefreiende Selbstanzeige', norm:'§ 371 AO', rule:'Vollständige Korrektur + Nachzahlung → Straffreiheit. Gesperrt ab Bekanntgabe der Prüfungsanordnung.', hint:'Seit 2015: keine Teilanzeigen mehr wirksam. Ab 25.000 € Zuschlag nach § 398a AO nötig.'},
    {title:'Säumniszuschlag', norm:'§ 240 AO', rule:'1 % je angefangenem Monat auf den Rückstand. Entsteht automatisch. Mindestbetrag: 25 €.', hint:'Effektiv 12 % p.a. – teurer als die meisten Kredite.'},
    {title:'Verwaltungsakt', norm:'§ 118 AO', rule:'Hoheitliche Maßnahme zur Einzelfallregelung mit Außenwirkung. Wirksam ab Bekanntgabe (§ 124 AO).', hint:'Steuerbescheid = VA. Gegen jeden VA: Einspruch (1 Monat) → Finanzgericht → BFH.'},
    {title:'Schätzung', norm:'§ 162 AO', rule:'Bei fehlenden oder unglaubwürdigen Unterlagen: FA schätzt – i.d.R. zum Nachteil des Steuerpflichtigen.', hint:'Geldverkehrsrechnung: jede Lücke zwischen Einnahmen und Ausgaben gilt als Schwarzgeld.'},
    {title:'Haftung der Vertreter', norm:'§ 69 AO', rule:'GmbH-Geschäftsführer haftet persönlich bei vorsätzlicher oder grob fahrlässiger Pflichtverletzung.', hint:'Finanzamt erlässt Haftungsbescheid (§ 191 AO) direkt gegen die Person.'},
    {title:'Steuergeheimnis', norm:'§ 30 AO', rule:'Alle im Besteuerungsverfahren bekannt gewordenen Daten sind streng vertraulich. Weitergabe = Straftat.', hint:'Gilt auch für Mitarbeiter des Finanzamts gegenüber Dritten – inkl. Arbeitgeber.'},
  ]},
  {cat:'Einkommensteuer (ESt)', icon:'💶', color:'#2e8b57', rules:[
    {title:'Grundfreibetrag', norm:'§ 32a EStG', rule:'2026: 12.336 €. Bis hierhin keine ESt. Sichert das Existenzminimum.', hint:'Progressiver Tarif: 14 % → 42 % (Spitze) → 45 % (Reiche ab ca. 278.000 €).'},
    {title:'7 Einkunftsarten', norm:'§§ 13–23 EStG', rule:'① LuF ② Gewerbebetrieb ③ Selbständige Arbeit ④ Nichtselbständige Arbeit ⑤ Kapitalvermögen ⑥ V+V ⑦ Sonstige', hint:'Gewinneinkünfte (① ② ③): Betriebsvermögensvergleich oder EÜR. Überschusseinkünfte (④–⑦): Einnahmen – Werbungskosten.'},
    {title:'Progressionsvorbehalt', norm:'§ 32b EStG', rule:'ALG, Elterngeld, Krankengeld: steuerfrei, aber erhöhen den Steuersatz auf das übrige zvE.', hint:'Wer Lohnersatzleistungen bezieht, muss oft eine Steuererklärung abgeben!'},
    {title:'Werbungskosten-Pauschbetrag', norm:'§ 9a EStG', rule:'2026: 1.230 € automatisch bei nichtselbständiger Arbeit. Höhere tatsächliche WK: Nachweis erforderlich.', hint:'Pendler, Homeoffice-Nutzer: tatsächliche Kosten oft höher als Pauschale!'},
    {title:'Pendlerpauschale', norm:'§ 9 Abs. 1 Nr. 4 EStG', rule:'Ab 2026: 0,38 €/km ab km 1 (Steueränderungsgesetz 2025). Gilt für einfache Entfernung.', hint:'30 km × 220 Tage × 0,38 € = 2.508 € Werbungskosten.'},
    {title:'Fünftelregelung', norm:'§ 34 EStG', rule:'Außerordentliche Einkünfte (z.B. Abfindung) werden rechnerisch auf 5 Jahre verteilt → niedrigere Progression.', hint:'Antrag in der Steuererklärung stellen – lohnt sich bei hohen Einmalzahlungen!'},
    {title:'Zufluss-Abfluss-Prinzip', norm:'§ 11 EStG / § 38a EStG', rule:'Grundregel (§ 11 EStG): Einnahmen im Zuflussjahr, Ausgaben im Abflussjahr. 10-Tage-Regel für regelmäßig wiederkehrende Beträge. Sonderregel Arbeitslohn (§ 38a Abs. 1 EStG): Laufender Lohn gilt im Lohnzahlungszeitraum als zugeflossen – Zahlungsdatum ist irrelevant. Einmalige Bezüge (Bonus, Abfindung) → wieder § 11 EStG.', hint:'Dezemberlohn am 5. Jan. → Dezembereinkommen nach § 38a (NICHT 10-Tage-Regel!). Jahresbonus am 5. Jan. → Januareinkommen (sonstiger Bezug, § 11 gilt). Merke: laufend vs. einmalig entscheidet die Norm!'},
    {title:'Sonderausgaben', norm:'§§ 10–10b EStG', rule:'Vorsorgeaufwendungen, Kirchensteuer, Spenden, Unterhalt (begrenzter Abzug). Mindern das zvE.', hint:'Kirchensteuer ist als Sonderausgabe voll abzugsfähig!'},
    {title:'Außergewöhnliche Belastungen', norm:'§ 33 EStG', rule:'Zwangsläufige Aufwendungen über der zumutbaren Eigenbelastung. Typisch: Krankheitskosten.', hint:'Zumutbare Eigenbelastung variiert nach Einkommen und Familienstand (§ 33 Abs. 3 EStG).'},
  ]},
  {cat:'Umsatzsteuer (USt)', icon:'🛒', color:'#d4691e', rules:[
    {title:'Steuersätze', norm:'§ 12 UStG', rule:'Regelsteuersatz: 19 %. Ermäßigt: 7 % (Lebensmittel, Bücher, ÖPNV, Übernachtungen, Speisen ab 2026). Steuerbefreiungen: § 4 UStG.', hint:'Echt/unecht: echte Befreiung (§ 4 Nr. 1a: Export) = Vorsteuerabzug bleibt. Unechte Befreiung (§ 4 Nr. 14: Arzt) = kein Vorsteuerabzug.'},
    {title:'Vorsteuerabzug', norm:'§ 15 UStG', rule:'Unternehmer zieht in Rechnung gestellte USt von Vorlieferanten von der eigenen USt-Schuld ab. Nur bei korrekter Rechnung nach § 14 UStG.', hint:'Kein Vorsteuerabzug bei Kleinunternehmer (§ 19 UStG) oder unechten Befreiungen.'},
    {title:'Reverse Charge', norm:'§ 13b UStG', rule:'Bei bestimmten Leistungen (Bauleistungen, Schrottlieferungen u.a.) schuldet der Leistungsempfänger die USt – nicht der Leistende.', hint:'Leistender stellt Nettorechnung aus. Empfänger schuldet USt, hat aber gleichzeitig Vorsteuerabzug → kein Liquiditätsnachteil.'},
    {title:'Kleinunternehmerregelung', norm:'§ 19 UStG', rule:'Umsatz ≤ 25.000 € (Vorjahr) + ≤ 100.000 € (lfd. Jahr): keine USt-Pflicht, aber auch kein Vorsteuerabzug.', hint:'Wer Kleinunternehmer ist, darf auf Rechnungen keine USt ausweisen. Trotzdem ist die Option zur Regelbesteuerung möglich.'},
    {title:'Steuerbare vs. steuerfreie Umsätze', norm:'§§ 1 / 4 UStG', rule:'Steuerbar: Inland, Unternehmer, entgeltlich. Steuerpflichtig: steuerbar + nicht befreit. Steuerfrei: steuerbar, aber Befreiung greift.', hint:'Nicht jeder steuerbare Umsatz ist steuerpflichtig! Befreiungen nach § 4 UStG zuerst prüfen.'},
  ]},
  {cat:'Bilanz & Buchführung', icon:'📊', color:'#6a5acd', rules:[
    {title:'Handelsbilanz vs. Steuerbilanz', norm:'§ 5 EStG i.V.m. HGB', rule:'Maßgeblichkeitsprinzip: Handelsbilanz ist Grundlage für Steuerbilanz. Steuerrechtliche Abweichungen durch Steuergesetze möglich.', hint:'GmbH muss Handels- und Steuerbilanz erstellen. Einzelunternehmen unter Grenzwert: nur EÜR.'},
    {title:'Anlagevermögen vs. Umlaufvermögen', norm:'§ 247 HGB', rule:'AV: dauerhaft dem Betrieb dienend (> 1 Jahr). UV: kurzfristig im Umlauf (Vorräte, Forderungen, liquide Mittel).', hint:'Firmenwagen = AV. Warenvorrat = UV. Forderungen aus L+L = UV.'},
    {title:'AfA – Absetzung für Abnutzung', norm:'§ 7 EStG', rule:'Anschaffungskosten werden über Nutzungsdauer verteilt (AfA-Tabellen des BMF). GWG bis 952 € inkl. USt: Sofortabschreibung.', hint:'Gebäude: 2 % p.a. (50 Jahre). PKW: ca. 16,7 % p.a. (6 Jahre). Computer: 33 % p.a. (3 Jahre).'},
    {title:'Doppelte Buchführung', norm:'§§ 238 ff. HGB', rule:'Jeder Geschäftsvorfall = Buchung auf Soll und Haben. Soll links, Haben rechts. Bilanzsumme Aktiva = Passiva.', hint:'Aktivtausch: Bilanzsumme gleich. Bilanzverlängerung: Aktiv + Passiv steigen gleich. Bilanzverkürzung: beide fallen gleich.'},
    {title:'Buchführungspflicht', norm:'§ 141 AO / § 238 HGB', rule:'Steuerrechtlich: Umsatz > 800.000 € oder Gewinn > 80.000 €. Handelsrechtlich: alle Kaufleute (§ 1 HGB).', hint:'Unter den Grenzen: Einnahmenüberschussrechnung (EÜR, § 4 Abs. 3 EStG) zulässig.'},
  ]},
  {cat:'Privatrecht & Öffentliches Recht', icon:'🏛️', color:'#8b0000', rules:[
    {title:'Öffentliches vs. Privatrecht', norm:'Grundprinzip', rule:'Öffentliches Recht: Über-/Unterordnung (Staat ↔ Bürger). Privatrecht: Gleichordnung (zwei Private).', hint:'Steuerrecht = Öffentliches Recht. BGB (Kaufvertrag, Miete) = Privatrecht.'},
    {title:'Legalitätsprinzip', norm:'§ 3 AO, Art. 20 GG', rule:'Keine Steuer ohne Gesetz. Das Finanzamt darf nur erheben, was ein formelles Gesetz erlaubt.', hint:'Schützt vor staatlicher Willkür. Gilt für alle Eingriffe in Freiheit und Eigentum.'},
    {title:'Rechtsweg im Steuerrecht', norm:'§§ 33 ff. FGO', rule:'Einspruch (1 Monat, FA) → Finanzgericht → Bundesfinanzhof (BFH, München).', hint:'BFH = höchste Steuerinstanz. Revision nur wegen grundsätzlicher Rechtsfragen.'},
    {title:'Verhältnismäßigkeit', norm:'Art. 20 GG', rule:'Staatliche Eingriffe (auch Steuern) müssen geeignet, erforderlich und angemessen sein.', hint:'BVerfG prüft Steuergesetze auf Verhältnismäßigkeit und Gleichheitsgrundsatz (Art. 3 GG).'},
    {title:'Beamtenverhältnis', norm:'Art. 33 GG', rule:'Öffentlich-rechtliches Dienstverhältnis. Ernennung durch Urkunde, kein Arbeitsvertrag. Unkündbarkeit, Pension, kein Streikrecht.', hint:'Finanzbeamte: Beamte auf Widerruf (Ausbildung) → Probe → Lebenszeit.'},
  ]},
];