import type { CampsiteConfig } from "../types";

const IMG = "/campsites/glinzner";

const glinzner: CampsiteConfig = {
  name: "Fischerhof Glinzner",
  shortName: "Glinzner",
  slug: "glinzner",
  ort: "Afritz am See",
  region: "Kärnten",
  brandKind: "Hotel & Camping",
  see: "Afritzer See",
  regionLong: "Afritzer See · Kärnten · Österreich",

  heroVariant: "center",

  claim: "Dein Sommer direkt am Afritzer See",
  claimEmphasis: "am Afritzer See",
  emailDetail: "eure Lage direkt am Ufer des Afritzer Sees",
  intro:
    "Stellplätze am Wasser, Campingfässer aus Fichtenholz und Seelodgen mit eigener Terrasse — beim Fischerhof Glinzner campst du direkt am Ufer des Afritzer Sees, mit fangfrischem Fisch aus der eigenen Küche.",

  logo: { src: `${IMG}/logo-0f2070b460.png`, alt: "Fischerhof Glinzner Logo" },

  statement: {
    text: "Hier beginnt der Afritzer See gleich hinter deinem Stellplatz.",
    emphasis: "hinter deinem Stellplatz",
  },

  pillars: [
    {
      title: "Mitten am Afritzer See",
      text: "Der Platz liegt direkt am Ufer — mit eigenem Badestrand und freiem Zugang zum klaren, als Trinkwasser eingestuften Afritzer See.",
      image: { src: `${IMG}/hero-27d906d39d.webp`, alt: "Luftaufnahme des Campingplatzes am Fischerhof Glinzner am Afritzer See" },
    },
    {
      title: "Schlafen im Fichtenholz-Fass",
      text: "Minimalistisch, urig und reizend: Übernachte in einem aus Fichtenholz gezimmerten Campingfass am Ufer — das Raumklima wirst du lieben.",
      image: { src: `${IMG}/gallery-f83356fd0d.webp`, alt: "Campingfass aus Fichtenholz am Fischerhof Glinzner" },
    },
    {
      title: "Fangfrische Küche am See",
      text: "Im Restaurant mit Seeterrasse und Bikerlounge kommen regionale Kärntner Köstlichkeiten und fangfrischer Fisch auf den Teller.",
      image: { src: `${IMG}/gallery-05f625bbd8.webp`, alt: "Seeterrasse des Restaurants im Fischerhof Glinzner" },
    },
  ],

  usps: [
    "Direkt am Afritzer See",
    "Eigener Badestrand",
    "Campingfässer & Seelodgen",
    "Restaurant mit Seeterrasse",
    "Angeln am See",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Warum du am Afritzer See bleibst",
    headingEmphasis: "am Afritzer See",
    intro:
      "Familiär geführt, mitten in der Kärntner Berg- und Seenlandschaft: Der eigene Badestrand reicht bis vor den Stellplatz, das Restaurant kocht mit Fisch aus der Region, und Wandern, Biken und Baden liegen direkt vor der Tür.",
  },

  awards: [{ label: "Restaurant Guru 2024" }],

  hero: {
    aerial: { src: `${IMG}/gallery-6b2c85aa1a.webp`, alt: "Luftaufnahme: Fischerhof Glinzner direkt am Afritzer See" },
  },

  camping: {
    heading: "Camping am Afritzer See",
    intro:
      "Vom Stellplatz für Zelt und Wohnwagen bis zur Liegewiese am Wasser — hier ist der See immer nur ein paar Schritte entfernt.",
    features: [
      {
        title: "Stellplätze direkt am Ufer",
        text: "Naturbelassene Stellplätze für Zelt und Wohnwagen, dazu moderne, behindertengerechte Sanitäranlagen, kostenloses WLAN und Warmwasserduschen.",
        image: { src: `${IMG}/gallery-8e407ce2c3.webp`, alt: "Stellplatz mit Wohnwagen am Ufer des Afritzer Sees" },
      },
      {
        title: "Eigener Seezugang & Liegewiese",
        text: "Freie Strandbenützung inklusive: Die Liegewiese reicht bis ans Wasser, Schwimmen, Surfen und Bootfahren starten direkt am Platz.",
        image: { src: `${IMG}/gallery-8eb8ea1e63.webp`, alt: "Luftaufnahme der grünen Liegewiese am Seeufer des Fischerhof Glinzner" },
      },
      {
        title: "Angeln am Hausgewässer",
        text: "Der Afritzer See ist ein artenreiches Landschaftsschutzgebiet mit 15 Fischarten — perfekt, um die Angel direkt vom Platz auszuwerfen.",
        image: { src: `${IMG}/gallery-df204798f9.webp`, alt: "Angler am Ufer des Afritzer Sees" },
      },
      {
        title: "Einfach ankommen & durchatmen",
        text: "Ein Platz im Liegestuhl, der Blick übers Wasser zu den Bergen — mehr braucht ein guter Campingtag am Afritzer See nicht.",
        image: { src: `${IMG}/gallery-2b6248d7eb.webp`, alt: "Gast entspannt mit Seeblick am Fischerhof Glinzner" },
      },
      {
        title: "Familien willkommen",
        text: "Flacher Seezugang, viel Wiese zum Spielen und Grillen mit Genehmigung machen den Platz zum entspannten Ziel für den Familienurlaub.",
        image: { src: `${IMG}/kids-4dc2754e9d.webp`, alt: "Familie am Campingplatz am Afritzer See" },
      },
      {
        title: "Seeblick, wohin du schaust",
        text: "Ob von der Terrasse, vom Stellplatz oder vom Steg — der Afritzer See und die Mirnock-Bergkulisse sind immer im Bild.",
        image: { src: `${IMG}/gallery-ce49d5bcd3.webp`, alt: "Blick auf den Afritzer See von der Terrasse" },
      },
    ],
  },

  mobilheime: {
    heading: "Komfort-Unterkünfte am See",
    intro:
      "Kein eigenes Zelt? Kein Problem. Seelodgen, Mobilheime, Fischerhütten und Campingfässer bieten dir das Camping-Gefühl mit festem Dach über dem Kopf.",
    items: [
      {
        name: "Seelodgen",
        kind: "Direkt am See · bis 4 Personen",
        text: "Drei modern eingerichtete Lodges direkt am Ufer, mit Küchenblock, eigener Terrasse und zwei Schlafzimmern für bis zu vier Personen. Bettwäsche und Handtücher inklusive.",
        image: { src: `${IMG}/gallery-f14829316d.webp`, alt: "Wohnraum einer Seelodge am Fischerhof Glinzner" },
        priceFrom: 130,
        features: ["ca. 20 m²", "2 Schlafzimmer", "Küche & SAT-TV", "Eigene Terrasse", "Heizung"],
      },
      {
        name: "Mobile Homes",
        kind: "Ferienhaus · mit Terrasse",
        text: "Ein kleines Ferienhäuschen mit voll ausgestatteter Küche, eigenem Bad und überdachter Terrasse — teils sogar mit eigenem Whirlpool und Blick auf See und Berge.",
        image: { src: `${IMG}/gallery-4b5f5598a0.webp`, alt: "Mobile Home mit überdachter Terrasse und Whirlpool mit Seeblick" },
        priceFrom: 130,
        features: ["Mehrere Schlafzimmer", "Küche mit Geschirrspüler", "Eigenes Bad & WC", "Überdachte Terrasse"],
      },
      {
        name: "Fischerhütte Seeblick",
        kind: "Rustikal · bis 4 Personen",
        text: "Rustikaler Charme mit großzügiger Seeterrasse: Die Fischerhütte bietet Platz für bis zu vier Personen und den Blick auf den Mirnock — ideal für Angler, Biker und Familien.",
        image: { src: `${IMG}/gallery-ed3cf7c2bc.webp`, alt: "Gemütliche Fischerhütte mit Stockbetten am Fischerhof Glinzner" },
        priceFrom: 100,
        features: ["Bis 4 Personen", "Großzügige Seeterrasse", "Sitzecke & Kühlschrank", "Heizung", "Bettwäsche inkl."],
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Afritz",
    modes: [
      { title: "Mit dem Auto", text: "Über die A10 Tauernautobahn bis Villach, dann Richtung Afritz am See — der Fischerhof liegt an der Seestraße direkt am Ufer." },
      { title: "Mit der Bahn", text: "Nächster Fernverkehrsknoten ist der Bahnhof Villach, von dort weiter mit Bus oder Taxi nach Afritz am See." },
      { title: "Mit dem Flugzeug", text: "Der Flughafen Klagenfurt ist rund 45 Minuten entfernt; auch Salzburg ist über die Tauernautobahn gut erreichbar." },
    ],
  },

  galerie: {
    heading: "Sommertage am Afritzer See",
    headingEmphasis: "Afritzer See",
    intro: "Holz, Wasser und Bergblick — ein paar Eindrücke von Unterkünften und Plätzen am Fischerhof.",
    tag: "Afritz am See · Kärnten",
    moreCount: 20,
    images: [
      { src: `${IMG}/gallery-73560bb9e7.webp`, alt: "Modernes Mobile Home mit überdachter Terrasse" },
      { src: `${IMG}/gallery-50bda305e0.webp`, alt: "Wohn- und Küchenbereich eines Mobile Homes" },
      { src: `${IMG}/gallery-13e0090c86.webp`, alt: "Rustikale Fischerhütte mit Stockbetten" },
      { src: `${IMG}/gallery-0f6da3d0fe.webp`, alt: "Fischerhof Glinzner mit österreichischer und Kärntner Fahne am See" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Ufer",
    headingEmphasis: "am Ufer",
    intro:
      "Wähle Unterkunft, Zeitraum und Personenzahl — die Familie Glinzner meldet sich persönlich mit deiner Verfügbarkeit. Mobile Homes werden über Gebetsroither gebucht.",
    pricesArePlaceholder: false,
    priceNote: "ab-Preise pro Nacht · zzgl. Ortstaxe € 2,70 p. P. · Hund € 8 / Tag · Preisänderungen vorbehalten",
    highlight: { title: "Direkt am Ufer", text: "Vom Stellplatz sind es nur wenige Schritte bis ins Wasser." },
    categories: [
      { id: "stellplatz", label: "Stellplatz (Camping Standard)", perNight: 13 },
      { id: "campingfass", label: "Campingfass", perNight: 90 },
      { id: "fischerhuette", label: "Fischerhütte", perNight: 100 },
      { id: "seelodge", label: "Seelodge", perNight: 130 },
      { id: "mobilheim", label: "Mobile Home", perNight: 130 },
    ],
  },

  kontakt: {
    coords: { lat: 46.737532, lng: 13.770367 },
    tel: "+43 4247 2133",
    telHref: "tel:+4342472133",
    mail: "info@glinzner.at",
    facebook: "https://www.facebook.com/FischerhofGlinznerDirektInAfritzAmSee",
    adresse: "Seestraße 28 · 9542 Afritz am See · Kärnten",
  },

  languages: ["DE", "EN", "NL", "IT"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Am See", href: "#camping" },
    ]},
    { label: "Unterkünfte", href: "#mobilheime" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default glinzner;
