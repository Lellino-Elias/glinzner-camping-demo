import type { CampsiteConfig } from "../types";

/**
 * Hotel Fischerhof Glinzner *** — Afritz am See, Kärnten.
 * Alle Texte/Fakten belegt aus glinzner.at (Stand-Scrape 2026-06) — Quellzitate
 * je Preis/Kernfakt in REPORT.md.
 * Bilder: Eigenaufnahmen des Fischerhof Glinzner (Drohne, Unterkünfte, Camping,
 * Restaurant) in /public/campsites/glinzner/. Die Aktivitäten-Sektion zeigt die
 * Regions-/Aktivitätsfotos (Kärnten-Werbung), die der Betrieb auf glinzner.at
 * SELBST verwendet — ehrlich als Region/Aktivität ausgewiesen, nie als der Platz.
 * EHRLICH: Quelle sagt wörtlich "liegt direkt am wunderschönen Afritzer See" → see belegt.
 * Hotel-Zimmerpreise sind auf der Website nicht beziffert → Zimmer ohne priceFrom.
 */
const IMG = "/campsites/glinzner";

export const glinzner: CampsiteConfig = {
  name: "Hotel Fischerhof Glinzner",
  shortName: "Fischerhof Glinzner",
  slug: "glinzner",
  ort: "Afritz am See",
  region: "Kärnten",
  brandKind: "Hotel · Restaurant · Camping",
  see: "Afritzer See",
  regionLong: "Afritzer See · Kärnten · Österreich",

  claim: "Erleben Sie die Natur hautnah – direkt am Afritzer See",
  claimEmphasis: "direkt am Afritzer See",
  intro:
    "Drei-Sterne-Hotel, Seerestaurant und ein weitläufiger Campingplatz — der Fischerhof Glinzner liegt direkt am wunderschönen Afritzer See in Kärnten.",

  logo: { src: `${IMG}/logo-glinzner.png`, alt: "Hotel Fischerhof Glinzner Logo" },

  statement: {
    text: "Hotel, Restaurant und Camping an einem Ort — bei uns erleben Sie die Natur hautnah am Afritzer See.",
    emphasis: "die Natur hautnah",
  },

  pillars: [
    { title: "Direkt am Afritzer See", text: "Hotel, Lodges und Stellplätze liegen unmittelbar am Ufer — mit Blick auf See und die umliegende Berglandschaft.", image: { src: `${IMG}/luft-see.webp`, alt: "Luftaufnahme des Fischerhof Glinzner am Ufer des Afritzer Sees" } },
    { title: "Hotel, Lodges & Camping", text: "Vom Drei-Sterne-Hotelzimmer über See-Lodges und Campingfässer bis zum eigenen Stellplatz — alles an einem Platz am See.", image: { src: `${IMG}/seeufer-lodges.webp`, alt: "Lodges und Hütten am Seeufer des Afritzer Sees" } },
    { title: "Restaurant mit Seeterrasse", text: "Regionale Küche und fangfrischer Fisch auf der Seeterrasse und in der Bikerlounge in sonniger Lage.", image: { src: `${IMG}/seeterrasse.webp`, alt: "Seeterrasse des Restaurants am Fischerhof Glinzner" } },
  ],

  usps: [
    "Eigener Badestrand & freier Seezugang",
    "Kostenloses WLAN am Platz",
    "Kostenlose Warmwasser-Duschen",
    "Bettwäsche & Handtücher in Lodges/Hütten",
    "Direkt am Afritzer See",
    "Drei-Sterne-Hotel ***",
    "Restaurant mit Seeterrasse & Bikerlounge",
    "Fischen seit drei Generationen",
  ],

  trust: {
    heading: "Worauf Sie sich am Fischerhof Glinzner verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Familiär geführt von Familie Glinzner — Vater Gerald und Sohn Dorian am Herd —, mit ausgezeichneter Küche (Restaurant Guru 2024), regionalen Produkten und einer Traumlage direkt am Afritzer See.",
  },

  // Real, klar belegte Auszeichnung auf der Restaurant-Seite (kein Award-Bild im Scrape → nur Label).
  awards: [
    { label: "Restaurant Guru 2024 · Best Restaurant" },
  ],

  // Website nennt keine fixen Camping-Saisondaten; Quelle beschreibt Sommer- UND
  // Winterangebot am Fischerhof (Baden, Eislaufen, Eisstockschießen) → ganzjährig.
  saison: { von: "Ganzjährig", bis: "geöffnet" },

  hero: {
    aerial: { src: `${IMG}/hero-luftaufnahme.webp`, alt: "Luftaufnahme des Fischerhof Glinzner direkt am Afritzer See mit Hotel, Lodges und Campingplatz" },
  },

  camping: {
    heading: "Camping direkt am Afritzer See",
    intro:
      "Mit eigenem Badestrand und direktem Seezugang: naturbelassene Stellplätze, moderne (auch behindertengerechte) Sanitäranlagen, kostenlose Warmwasser-Duschen und WLAN — und Platz für Schwimmen, Surfen, Fischen oder Bootfahren mitten in der Natur.",
    features: [
      { title: "Camping direkt am Ufer", text: "Stellplätze und Mietunterkünfte liegen unmittelbar am Afritzer See — mit eigenem Badestrand und direktem Zugang zum Wasser.", image: { src: `${IMG}/camping-am-see.webp`, alt: "Stellplatz mit Wohnwagen direkt am Afritzer See" } },
      { title: "Naturbelassene Stellplätze", text: "Ebene, naturbelassene Plätze für Wohnwagen, Wohnmobil und Zelt — die perfekte Symbiose aus Naturverbundenheit und zeitgemäßem Komfort.", image: { src: `${IMG}/stellplatz-wiese.webp`, alt: "Naturbelassener Camping-Stellplatz auf der Wiese am See" } },
      { title: "Eigener Badestrand", text: "Freie Strandbenützung und direkter Seezugang — Schwimmen, Surfen und Bootfahren direkt vom Platz aus.", image: { src: `${IMG}/badezugang-see.webp`, alt: "Seezugang am Ufer des Afritzer Sees" } },
      { title: "Seeterrasse & Bikerlounge", text: "Das Restaurant mit Seeterrasse und Bikerlounge verwöhnt Camping-, Hotel- und Tagesgäste in sonniger Lage.", image: { src: `${IMG}/seeterrasse-bikerlounge.webp`, alt: "Sonnige Seeterrasse des Restaurants am Fischerhof Glinzner" } },
      { title: "Idylle am Wasser", text: "Gepflegte Anlage mit liebevollen Details, ruhig eingebettet zwischen See, Wiesen und Kärntner Bergwelt.", image: { src: `${IMG}/idylle-detail.webp`, alt: "Idyllisches Detail am Fischerhof Glinzner" } },
      { title: "Seeblick ringsum", text: "Wohin man blickt: der naturbelassene Afritzer See mit Trinkwasserqualität und die umliegenden Berge.", image: { src: `${IMG}/seeblick.webp`, alt: "Blick auf den Afritzer See vom Fischerhof Glinzner" } },
    ],
  },

  mobilheime: {
    heading: "Hotel, Lodges & Mietunterkünfte",
    intro:
      "Vom Drei-Sterne-Hotelzimmer mit Balkon über See-Lodges und urige Campingfässer bis zum modernen Mobilheim — komfortabel wohnen direkt am Afritzer See.",
    items: [
      { name: "Komfortzimmer", kind: "Hotel ***", text: "Stilvolles Interieur, moderne Annehmlichkeiten und ein entspannendes Ambiente — mit Balkon und Blick auf See und Berge. Reichhaltiges Frühstücksbuffet inklusive.", image: { src: `${IMG}/komfortzimmer.webp`, alt: "Modernes Komfortzimmer im Hotel Fischerhof Glinzner" }, features: ["Hotelzimmer", "Balkon", "Frühstück inkl."] },
      { name: "Familienzimmer", kind: "Hotel ***", text: "Geräumig, modern und mit schönem Ausblick — das Familienzimmer bietet Platz für die ganze Familie. Frühstücksbuffet inklusive.", image: { src: `${IMG}/familienzimmer.webp`, alt: "Helles Familienzimmer im Hotel Fischerhof Glinzner" }, features: ["für die Familie", "modern", "Frühstück inkl."] },
      { name: "Seelodge", kind: "Direkt am See", text: "Drei modern eingerichtete See-Lodges mit Küchenblock, SAT-TV und eigener Terrasse — Platz für bis zu 4 Personen in 2 Schlafzimmern. Bettwäsche & Handtücher inklusive.", image: { src: `${IMG}/seelodge.webp`, alt: "Wohnbereich einer See-Lodge am Fischerhof Glinzner" }, priceFrom: 130, features: ["bis 4 Personen", "ca. 20 m²", "eigene Terrasse"] },
      { name: "Fischerhütte Seeblick", kind: "Fischerhütte", text: "Rustikaler Charme mit Blick auf den Mirnock: gemütliche Hütte für bis zu 4 Personen mit Sitzecke, Kühlschrank und großzügiger Seeterrasse.", image: { src: `${IMG}/fischerhuette.webp`, alt: "Gemütliche Fischerhütte mit Stockbetten am Fischerhof Glinzner" }, priceFrom: 100, features: ["bis 4 Personen", "Seeterrasse", "Heizung"] },
      { name: "Campingfass", kind: "Campingfass", text: "Schlafen im Fichtenholz-Fass: minimalistisch, urig und reizend, mit Doppelbett, kleinem Kühlschrank und eigener Terrasse mit Sonnenschirm am Seeufer.", image: { src: `${IMG}/campingfass.webp`, alt: "Campingfass aus Fichtenholz am Ufer des Afritzer Sees" }, priceFrom: 90, features: ["2 Personen", "100 % Holz", "Terrasse"] },
      { name: "Mobile Home", kind: "Mobilheim", text: "Ferienhaus-Komfort am Campingplatz: mehrere Schlafzimmer, voll ausgestattete Küche, eigenes Bad und überdachte Terrasse. Buchung über Gebetsroither.", image: { src: `${IMG}/mobilheim.webp`, alt: "Modernes Mobilheim mit überdachter Terrasse am Fischerhof Glinzner" }, priceFrom: 130, features: ["mehrere Schlafzimmer", "eigene Küche & Bad", "Terrasse"] },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv am Afritzer See",
    intro:
      "Baden im kristallklaren Afritzer See, Fischen seit drei Generationen, Tennis nebenan und Touren in die Kärntner Bergwelt — im Winter Eislaufen am See und Skifahren ganz in der Nähe.",
    items: [
      { title: "Fischen", text: "Seit drei Generationen Fangsport am Afritzer See: Hechte, Zander und Karpfen, mit Tipps für Profis wie Anfänger.", image: { src: `${IMG}/aktiv-fischen.webp`, alt: "Frisch gefangener Fisch — Angeln am Afritzer See" } },
      { title: "Tennis", text: "Ein Tennisplatz direkt neben dem Fischerhof — Reservierung und Training über den Tennisclub Afritzer See.", image: { src: `${IMG}/aktiv-tennis.webp`, alt: "Tennis spielen in Kärnten" } },
      { title: "Radfahren & E-Bike", text: "Lake-Bike-Trails und Touren rund um die Seen — mit E-Bike-Box-Verleih für entspannte Ausfahrten.", image: { src: `${IMG}/aktiv-radfahren.webp`, alt: "Radfahren mit Seeblick in der Region Kärnten" } },
      { title: "Motorrad & Biker", text: "Traumstraßen durch die Landschaften Kärntens — mit Bikerlounge und eigenen Stellplätzen für Motorradfahrer.", image: { src: `${IMG}/aktiv-motorrad.webp`, alt: "Motorradtour durch die Berglandschaft Kärntens" } },
      { title: "Pumptrack", text: "Der Pumptrack in Afritz am See ist der ultimative Ort für alle Fahrradbegeisterten, um ihre Fähigkeiten zu verbessern.", image: { src: `${IMG}/aktiv-pumptrack.webp`, alt: "Pumptrack in Afritz am See" } },
      { title: "Ausflugsziele", text: "Mit der Kärnten Card freier Eintritt in viele Urlaubsziele — von Wildparks und Schiffsfahrten bis zu Aussichtstürmen.", image: { src: `${IMG}/aktiv-ausflugsziele.webp`, alt: "Aussichtsturm und Ausflugsziele in der Region Kärnten" } },
    ],
  },

  anreise: {
    heading: "So finden Sie uns",
    modes: [
      { title: "Mit dem Auto", text: "Über die A10 Tauernautobahn bzw. via Villach ins Gegendtal nach Afritz am See — Seestraße 28, direkt am Afritzer See." },
      { title: "Mit dem Flugzeug", text: "Flughafen Klagenfurt (KLU) in rund einer Stunde Fahrt erreichbar." },
      { title: "Mit Bahn & Bus", text: "Bahnhof Villach Hauptbahnhof, weiter mit Bus oder Transfer nach Afritz am See." },
    ],
  },

  galerie: {
    heading: "Ein Platz am Wasser",
    headingEmphasis: "am Wasser",
    intro:
      "Sonnige Tage am Afritzer See, komfortable Unterkünfte und ein Hof zum Wohlfühlen — ein paar Eindrücke vom Fischerhof Glinzner.",
    tag: "Afritzer See · Kärnten",
    images: [
      { src: `${IMG}/galerie-terrasse-whirlpool.webp`, alt: "Überdachte Mobilheim-Terrasse mit Whirlpool und Blick auf den Afritzer See" },
      { src: `${IMG}/galerie-entspannen-see.webp`, alt: "Entspannen mit Blick auf den Afritzer See" },
      { src: `${IMG}/galerie-mobilheim-innen.webp`, alt: "Modern eingerichtetes Mobilheim mit Seeblick" },
      { src: `${IMG}/galerie-fischerhuette-mirnock.webp`, alt: "Gemütliche Fischerhütte mit Blick auf den Mirnock" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wählen Sie Zeitraum, Unterkunft und Personen — wir melden uns mit Ihrer persönlichen Verfügbarkeit. Mobile Homes werden über Gebetsroither gebucht.",
    pricesArePlaceholder: false,
    priceNote: "Richtpreise lt. glinzner.at · zzgl. Ortstaxe € 2,70/Person · Hund € 8/Tag · Endreinigung bei Lodge/Hütte",
    highlight: {
      title: "Direkt am Afritzer See",
      text: "Eigener Badestrand, Seezugang und Restaurant mit Seeterrasse — mitten in der Kärntner Natur.",
    },
    categories: [
      // Reale "ab"-Preise lt. glinzner.at: Camping Standard ab 13 €/Nacht,
      // Campingfass ab 90 €/Nacht, Seelodge ab 130 €/Nacht.
      { id: "stellplatz", label: "Stellplatz", perNight: 13, perExtraGuest: 0 },
      { id: "campingfass", label: "Campingfass", perNight: 90, perExtraGuest: 0 },
      { id: "seelodge", label: "Seelodge", perNight: 130, perExtraGuest: 0 },
    ],
  },

  kontakt: {
    coords: { lat: 46.737532, lng: 13.770367 },
    tel: "+43 4247 2133",
    telHref: "tel:+4342472133",
    mail: "info@glinzner.at",
    facebook: "https://www.facebook.com/FischerhofGlinznerDirektInAfritzAmSee/?locale=de_DE",
    adresse: "Seestraße 28 · 9542 Afritz am See · Kärnten",
    // Keine Koordinaten auf der Quelle/im Scrape → coords ausgelassen (Karte aus, Adresse sichtbar).
  },

  story: {
    kicker: "Der Fischerhof",
    heading: "Drei Generationen am Afritzer See",
    intro:
      "Vom Fangsport bis zur Küche — beim Fischerhof Glinzner wird Gastfreundschaft seit Generationen gelebt.",
    chapters: [
      { no: "01", kicker: "Die Tradition", title: "Seit drei Generationen am Wasser", text: "Seit drei Generationen pflegt die Familie Glinzner den Fangsport am Afritzer See — und gibt Tipps und Tricks an Profis wie Anfänger weiter." },
      { no: "02", kicker: "Die Lage", title: "Direkt am Afritzer See", text: "Hotel, Restaurant und ein weitläufiger Campingplatz liegen unmittelbar am naturbelassenen See mit Trinkwasserqualität — umrahmt von der Kärntner Bergwelt." },
      { no: "03", kicker: "Die Küche", title: "Vater und Sohn am Herd", text: "Wo früher Vater Gerald stand, zaubert heute Sohn Dorian gemeinsam mit ihm regionale Köstlichkeiten und fangfrischen Fisch — ausgezeichnet vom Restaurant Guru 2024." },
      { no: "04", kicker: "Das Erlebnis", title: "Sommer wie Winter", text: "Baden, Fischen und Wandern im Sommer, Eislaufen am See und Skifahren in der Nähe im Winter — am Fischerhof Glinzner erleben Sie Kärnten das ganze Jahr." },
    ],
  },

  languages: ["DE"],

  nav: [
    {
      label: "Hotel & Zimmer",
      href: "#mobilheime",
      children: [
        { label: "Komfortzimmer", href: "#mobilheime" },
        { label: "Familienzimmer", href: "#mobilheime" },
        { label: "Frühstück", href: "#mobilheime" },
      ],
    },
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Eigener Badestrand", href: "#camping" },
        { label: "Seezugang", href: "#camping" },
      ],
    },
    {
      label: "Unterkünfte",
      href: "#mobilheime",
      children: [
        { label: "Seelodgen", href: "#mobilheime" },
        { label: "Fischerhütten", href: "#mobilheime" },
        { label: "Campingfässer", href: "#mobilheime" },
        { label: "Mobile Homes", href: "#mobilheime" },
      ],
    },
    {
      label: "Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Fischen", href: "#aktivitaeten" },
        { label: "Tennis", href: "#aktivitaeten" },
        { label: "Radfahren & E-Bike", href: "#aktivitaeten" },
        { label: "Ausflugsziele", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default glinzner;
