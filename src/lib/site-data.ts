/**
 * Egyetlen adatforrás a teljes oldalhoz.
 *
 * FONTOS: a menü tételei és árai a jelenlegi weboldal képernyőképeiből,
 * illetve nyilvános forrásokból (Wolt, Foodora, Street Kitchen cikk,
 * 2026 szeptemberi állapot) lettek összeállítva. Nyitás előtt egyeztesd
 * a tulajdonossal a pontos, aktuális étlapot és árakat — ez itt egy jó
 * kiindulási alap, nem végleges forrás.
 */

export const siteConfig = {
  name: "Black Cab Burger",
  tagline: "Nice to meat you!",
  shortDescription:
    "Londoni minőség és sebesség Ferencváros szívében. Szaftos marhahús, egyedi kiegészítők és barátságos környezet vár rád.",
  url: "https://blackcabburger.hu",
  locale: "hu_HU",
};

export const contact = {
  address: {
    street: "Mester utca 46",
    postalCode: "1095",
    city: "Budapest",
    country: "HU",
    full: "Budapest, Mester u. 46, 1095",
  },
  email: "info@blackcabburger.hu",
  geo: {
    lat: 47.4785,
    lng: 19.0739,
  },
};

// Nyitvatartás — 0 = vasárnap ... 6 = szombat (JS Date.getDay() konvenció)
// Formátum: [nyitás óra, nyitás perc, zárás óra, zárás perc]
export const openingHours: Record<number, [number, number, number, number] | null> = {
  0: [11, 30, 22, 0], // vasárnap
  1: [11, 30, 22, 0], // hétfő
  2: [11, 30, 22, 0], // kedd
  3: [11, 30, 22, 0], // szerda
  4: [11, 30, 22, 0], // csütörtök
  5: [11, 30, 22, 0], // péntek
  6: [11, 30, 22, 0], // szombat
};

export const openingHoursDisplay = "Hétfő – Vasárnap: 11:30 – 22:00";

export const orderLinks = {
  wolt: "https://wolt.com/hu/hun/budapest/restaurant/black-cab-burger-i-mester",
  foodora: "https://www.foodora.hu/restaurant/g0ye/black-cab-burger-mester-utca",
};

export const socialLinks = {
  facebook: "https://www.facebook.com/blackcabburger",
  instagram: "https://www.instagram.com/blackcabburger/",
  tiktok: "https://www.tiktok.com/@black_cab_burger",
};

// Fizetési módok — TODO: egyeztetni a tulajdonossal, hogy jelenleg pontosan
// mely fizetési módok elérhetők (korábban visszatérő panasz volt a kártyás
// fizetés hiánya). Amint tisztázva van, ezt a listát frissíteni kell, és
// hangsúlyosan meg kell jeleníteni a Helyszín oldalon.
export const paymentMethods = [
  { id: "cash", label: "Készpénz" },
  { id: "card", label: "Bankkártya" },
] as const;

export const brandStory = {
  eyebrow: "A történetünk",
  title: "A taxisok tudják.",
  paragraphs: [
    "Tóth József több angolszász országban is megvetette a lábát, főként Angliában dolgozott a vendéglátásban. Londonban figyelte meg, hogy a helyi taxisok mindig ugyanahhoz a sarki burgereshez járnak enni — a taxisok pedig tudják, hol van a jó kaja.",
    "Innen jött az ötlet: ha egyszer hazahozza az angolszász hambikultúrát, a hely neve Black Cab lesz. Az elképzelésből vízió lett, majd valóság — 2011 óta állunk a Mester utcában, jóval a smash burger hullám előttről.",
    "Itt a konzisztencia, a minőség és az egyszerűség a lényeg, de az nagyon.",
  ],
  quote: {
    text: "Az étterem gyors, ez tény, de emellett minden frissen, az orrunk előtt készül. A húsokat több méretben is kérhetjük, alá és fölé akár mi magunk is kiválaszthatjuk a feltéteket.",
    source: "We Love Budapest",
  },
  stats: [
    { value: "15+", label: "év a gasztronómiában" },
    { value: "4+1", label: "választható burgerméret" },
    { value: "100%", label: "helyben, frissen sütött hús" },
  ],
};

export const pillars = [
  {
    title: "Az eredeti",
    description:
      "15+ éve a Mester utcában, jóval azelőttről, hogy a smash burger trenddé vált volna Budapesten.",
  },
  {
    title: "Taxis-tanúsítvány",
    description:
      "A név nem marketingfogás: valódi londoni taxisok kedvenc sarki burgereséből ered az ötlet.",
  },
  {
    title: "Gyorsétterem-áron",
    description:
      "Annyiba kerül, mint egy gyorséttermi menü, de kézzel, frissen készül a szemed előtt.",
  },
  {
    title: "Chippy krumpli",
    description:
      "Nyersen érkezik, helyben szeletelik, kétszer sütik — igazi angol fish & chips stílusban.",
  },
];

export type MenuSize = {
  label: string;
  priceHuf?: number;
};

export type MenuItem = {
  name: string;
  description: string;
  priceHuf: number;
  sizes?: string[];
  tag?: "smash" | "klasszikus" | "specialitas" | "finomsag" | "ital";
};

export type MenuCategory = {
  id: "smash" | "klasszikus" | "specialitas" | "finomsag" | "ital";
  label: string;
  items: MenuItem[];
};

export const sizeGuide =
  "Normál: 100g hús, 10cm zsemle · Nagy: 150g hús, 12.5cm zsemle · Normál dupla: 200g hús, 10cm zsemle · Nagy dupla: 300g hús, 12.5cm zsemle";

export const menu: MenuCategory[] = [
  {
    id: "smash",
    label: "Smash",
    items: [
      {
        name: "Black Smash",
        description: "100% marhahús smash pogácsa, angol cheddar, csemegeuborka, ketchup, mustár, pirított zsemlében.",
        priceHuf: 1600,
        sizes: ["1 hús / 1 sajt", "2 hús / 2 sajt — 2350 Ft", "3 hús / 3 sajt — 3100 Ft"],
      },
      {
        name: "Soho Smash",
        description: "100% marhahús smash pogácsa, angol cheddar, Black Cab szósz, csemegeuborka, pirított zsemlében.",
        priceHuf: 1600,
        sizes: ["1 hús / 1 sajt", "2 hús / 2 sajt — 2350 Ft", "3 hús / 3 sajt — 3100 Ft"],
      },
      {
        name: "Oklahoma Black Smash",
        description: "100% marhahús smash pogácsa hagymával, angol cheddar, csemegeuborka, ketchup, mustár, pirított zsemlében.",
        priceHuf: 1600,
        sizes: ["1 hús / 1 sajt", "2 hús / 2 sajt — 2350 Ft", "3 hús / 3 sajt — 3100 Ft"],
      },
      {
        name: "Oklahoma Soho Smash",
        description: "100% marhahús smash pogácsa hagymával, angol cheddar, Black Cab szósz, csemegeuborka, pirított zsemlében.",
        priceHuf: 1600,
        sizes: ["1 hús / 1 sajt", "2 hús / 2 sajt — 2350 Ft", "3 hús / 3 sajt — 3100 Ft"],
      },
    ],
  },
  {
    id: "klasszikus",
    label: "Klasszikus",
    items: [
      {
        name: "Marhahúsos Burger",
        description:
          "100% marhahús, pirított zsemle, csemegeuborka, fehér hagyma, jalapeno paprika, aprított jégsaláta, paradicsom, ketchup, mustár, majonéz, BBQ szósz.",
        priceHuf: 1700,
        sizes: ["Normál", "Nagy - 2500 Ft", "Normál Dupla - 3100 Ft", "Nagy Dupla - 4000 Ft"],
      },
      {
        name: "Citromos-zöldfűszeres csirkemell",
        description:
          "Roston sült citromos-zöldfűszeres 100% csirkemell, zsemle, csemegeuborka, fehér hagyma, jalapeno paprika, jégsaláta, paradicsom, ketchup, mustár, majonéz, BBQ szósz.",
        priceHuf: 1700,
        sizes: ["Normál", "Nagy - 2500 Ft"],
      },
      {
        name: "Black Cab BBQ csirkemell",
        description:
          "Roston sült 100% csirkemell, zsemle, csemegeuborka, fehér hagyma, jalapeno paprika, jégsaláta, paradicsom, ketchup, mustár, majonéz, BBQ szósz.",
        priceHuf: 1700,
        sizes: ["Normál", "Nagy - 2500 Ft"],
      },
      {
        name: "Házi sültkrumpli",
        description:
          "Helyben szeletelt, mogyoróolajban ropogósra sütött burgonya. Tartalmaz mogyorót/földimogyoró-eredetű olajat — allergiásoknak jelezzük.",
        priceHuf: 600,
        sizes: ["Kicsi", "Normál - 900 Ft", "Nagy - 1200 Ft"],
      },
    ],
  },
  {
    id: "specialitas",
    label: "Specialitások",
    items: [
      {
        name: "Cabbie Burger",
        description:
          "100% marhahús, pirított zsemle, csemegeuborka, fehér hagyma, cheddar sajt, pirított bacon, jalapeno paprika, aprított jégsaláta, paradicsom, ketchup, mustár, majonéz, BBQ szósz.",
        priceHuf: 2300,
        sizes: ["Normál", "Nagy - 3100 Ft", "Normál Dupla - 3700 Ft", "Nagy Dupla - 4600 Ft"],
      },
      {
        name: "Smoky Burger",
        description: "100% marhahús, pirított zsemle, angol cheddar sajt, pirított bacon, majonéz, csemegeuborka, pirított hagyma, BBQ szósz, aprított jégsaláta, paradicsomkarika, fehér hagyma, jalapeno paprika.",
        priceHuf: 2300,
        sizes: ["Normál", "Nagy - 3100 Ft", "Normál Dupla - 3700 Ft", "Nagy Dupla - 4600 Ft"],
      },
      {
        name: "Cheesy Soho Burger",
        description: "100% marhahús, pirított zsemle, dupla adag cheddar sajt, csemegeuborka, fehér hagyma, Black Cab szósz, aprított jégsaláta.",
        priceHuf: 2300,
        sizes: ["Normál", "Nagy - 3100 Ft", "Normál Dupla - 3700 Ft", "Nagy Dupla - 4600 Ft"],
      },
      {
        name: "Lazac burger",
        description: "100% norvég lazachús, jégsaláta, remulád mártás, paradicsom, pirított zsemle.",
        priceHuf: 3000,
        sizes: ["Normál", "Nagy - 3600 Ft"]
      },
      {
        name: "Cab Dog",
        description:
          "Fehér grillkolbász, hot dog kifli, mustár, pirított hagyma, majonéz, BBQ szósz.",
        priceHuf: 1800,
      },
      {
        name: "Brixton Dog",
        description:
          "Sajtos-jalapenos grillkolbász, ketchup, mustár, pirított hagyma, jalapeno paprika, reszelt angol cheddar sajt.",
        priceHuf: 1900,
      },
      {
        name: "Giga Double Decker",
        description:
          "Közel egykilós legenda: 600g marhahús, 100g grillezett bacon, 100g angol cheddar, pirított zsemle, zöldségek és szószok. Az evőverseny-kihívók állandó célpontja.",
        priceHuf: 7100,
      },
    ],
  },
  {
    id: "finomsag",
    label: "Finomságok",
    items: [
      {
        name: "Frankfurti virslis hot-dog",
        description: "Frankfurti virsli, prémium hot dog kifli pirított hagymával, mustárral, majonézzel és BBQ szósszal.",
        priceHuf: 1600,
      },
      {
        name: "Grillkolbászos hot-dog",
        description: "Grillkolbász, prémium hot dog kifli pirított hagymával, mustárral, majonézzel és BBQ szósszal.",
        priceHuf: 1900,
      },
      {
        name: "Meal Deal 1",
        description: "Kis sültkrumpli + Coca-Cola (bármely burger mellé kérhető)",
        priceHuf: 1000,
      },
      {
        name: "Meal Deal 2",
        description: "Kis sültkrumpli + Rostos vagy angol üdítő (bármely burger mellé kérhető)",
        priceHuf: 1200,
      },
      {
        name: "Black Cab Saláta",
        description: "Ropogós friss salátaágy, paradicsom, uborka. Választható feltéttel és öntettel (Csirkével +1200 Ft).",
        priceHuf: 2000,
      },
      {
        name: "Kéksajtos Saláta",
        description: "Ropogós friss salátaágy, paradicsom, uborka. Választható feltéttel és öntettel (Csirkével +1200 Ft).",
        priceHuf: 2200,
      },
      {
        name: "Lazacos saláta",
        description: "Ropogós friss salátaágy, paradicsom, uborka. Választható feltéttel és öntettel (Csirkével +1200 Ft).",
        priceHuf: 3800,
      },

    ],
  },
  {
    id: "ital",
    label: "Italok",
    items: [
      {
        name: "Coca-Cola",
        description: "Klasszikus szénsavas üdítőital (0.33l).",
        priceHuf: 600,
      },
      {
        name: "Angol Üdítők",
        description: "Különleges angol szénsavas üdítőital különlegességek (0.33l).",
        priceHuf: 800,
      },
      {
        name: "Cappy Gyümölcslevek",
        description: "Rostos és szűrt gyümölcslevek (0.25l).",
        priceHuf: 800,
      },
      {
        name: "Ásványvíz",
        description: "Naturaqua szénsavas / szénsavmentes ásványvíz (0.5l).",
        priceHuf: 500,
      },
      {
        name: "Sörök",
        description: "Minőségi dobozos és üveges sörök.",
        priceHuf: 1200,
        sizes: ["0.33l", "0.5l — 1900 Ft"],
      },
      {
        name: "Ciderek",
        description: "Prémium cider különlegességek (0.5l).",
        priceHuf: 1900,
      },
    ],
  },
];

export const galleryPlaceholders = [
  { id: 1, src: "/images/gallery_1.jpg", caption: "Klasszikus Black Cab Burger & krumpli" },
  { id: 2, src: "/images/gallery_2.jpg", caption: "Prémium kéksajtos burger baconnel és ketchup-pal" },
  { id: 3, src: "/images/gallery_3.jpg", caption: "Legendás, extra erős kézműves chiliszószok" },
];


export const googleRating = {
  value: 4.5,
  count: 4000,
  updatedAt: "2026-09",
  url: "https://www.google.com/maps/place/?q=place_id:ChIJdwnjnv7cQUcR_g_j_kC1uac",
};

export const timeOutBadge = {
  label: "Time Out Budapest — Top 3 burger 2026",
  url: "https://www.timeout.com/budapest/restaurants/best-burger-places-budapest",
};

export type Review = {
  name: string;
  quote: string;
  source: "google" | "facebook";
};

export const reviews: Review[] = [
  {
    name: "Eszter",
    quote:
      "Nagyon kedves volt a kiszolgálás, és ahhoz képest, hogy mennyire volt ízletes és méretes, nem volt drága egyáltalán.",
    source: "google",
  },
  {
    name: "Andor",
    quote: "Nagy tapasztalattal mondhatom, hogy az egyik legjobb a városban.",
    source: "google",
  },
  {
    name: "Kriszta",
    quote: "A nyitás óta egyik kedvenc hamburgerezőnk :)",
    source: "facebook",
  },
];