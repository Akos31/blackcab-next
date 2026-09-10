# Black Cab Burger — weboldal projekt brief

> Ez a fájl a projekt "közös memóriája". Bármelyik AI-eszközben dolgozol
> (Antigravity, Claude Code, Cursor, vagy simán ez a Claude-beszélgetés),
> ezt a fájlt olvasd be először — ez adja meg a teljes kontextust, hogy
> ne kelljen semmit újra elmagyarázni.

## 1. Mi ez az üzlet

Black Cab Burger — 15+ éve működő burgerező Budapesten, Ferencvárosban
(Mester u. 46). Az alapító, Tóth József Angliában dolgozott a
vendéglátásban, és Londonban figyelte meg, hogy a taxisok mindig ugyanahhoz
a sarki burgereshez járnak enni. Innen jött a név és a koncepció.

**Kategória:** megfizethető minőségi burger — a multi gyorséttermek felett,
a prémium kézműves helyek (Tuning Burger, wagyu stb.) alatt. Ár: kb.
1700–4600 Ft/burger.

**Differenciálók:**
- Az eredeti, 15+ éves szereplő, jóval a smash-burger hullám előttről.
- Testreszabható burger: 4+1 méret (Normál/Nagy/Normál Dupla/Nagy Dupla),
  szabadon választható feltétek.
- Krumpli nyersen érkezik, helyben szeletelik, kétszer sütik, malátaecettel
  is kérhető (angol chippy-stílus).
- A "Giga Double Decker" (~1 kg) az evőverseny-közösség kedvence.
- Time Out Budapest 2026-os burgerlista 3. helyezettje.

## 2. Márkastratégia (lásd a korábbi beszélgetést a teljes anyagért)

**Központi gondolat:** "A taxisok tudják." (EN: "Ask a cabbie.")

**Öt márkapillér:**
1. Az eredeti (15+ év, a smash-hullám előtt)
2. Taxis-tanúsítvány (a történet mint bizonyíték)
3. "A te fuvarod" (testreszabhatóság)
4. Chippy krumpli (kétszer sütve, malátaecet)
5. A Giga (a legenda)

**Hangnem:** száraz angol humor + pesti lazaság. A meglévő falfelirat
("Nice to meat you") már bizonyítottan működik — ezt a digitális oldalon
is tovább kell vinni, nem csak a helyszínen.

**Vizuális rendszer (megtartandó a Flutter-verzióból):**
- Színek: piros `#AD0F0F` (vagy közeli), fekete `#1A1A1A`, krém háttér
  `#F8F5F0`, fehér.
- Fejléc-betűtípus: "WhiskeyTown" (poszterszerű, kondenzált) — ezt meg kell
  tartani, ez adja a karaktert.
- Body: jelenleg Google Fonts "Outfit" — érdemes önhosztolni
  (`next/font/local` vagy `next/font/google` build-time betöltéssel, NEM
  runtime CDN-hívással, adatvédelmi és sebességi okból).
- Filmkocka-motívum (fekete négyzetek sora) a hero alatt/felett —
  megtartható, jó egyedi elem.

**Amit KERÜLNI kell (lásd frontend-design skill):**
- Ne legyen "AI-generált" sablon-érzet: kerülni az összes fade-in-slide-up
  animációt minden szekción, kerülni az ALL-CAPS eyebrow labeleket
  mindenhol, kerülni a generikus SaaS-card kit érzést (egyforma
  border-radius + szürke shadow minden kártyán).
- A meglévő Flutter-oldal `FadeInReveal` mintáját NE vigyük át 1:1-ben —
  válasszunk egy-két tudatos animációs pillanatot, nem mindenhol ugyanazt.

## 3. Technikai döntések

- **Stack:** Next.js (App Router), TypeScript, Tailwind CSS.
- **Hosting:** Vercel (ugyanaz, mint eddig).
- **Repo:** ÚJ GitHub repo, nem a régi `blackcabuj` (Flutter) átalakítása.
- **Miért nem Flutter web:** rossz SEO-indexelhetőség (CSR, nincs SSR),
  nincsenek külön URL-ek az aloldalakhoz, lassú kezdeti betöltés mobilon,
  social-media linkmegosztásnál (FB/Messenger/WhatsApp) üres előnézet,
  nincs schema.org jelölés, Google Fonts futásidőben töltődik be.
- **Cél ezzel a projekttel:**
  - Valódi, kereshető aloldal-URL-ek (`/menu`, `/rolunk`, `/helyszin`,
    `/galeria`).
  - Szerveroldali renderelés → gyors első betöltés, működő OG-előnézetek.
  - Valódi Google Térkép beágyazás (iframe embed, API-kulcs nélkül is
    működik: `https://www.google.com/maps?q=CÍM&output=embed`).
  - schema.org `Restaurant` JSON-LD (cím, nyitvatartás, árkategória).
  - Sitemap.xml + robots.txt.
  - Dinamikus nyitva/zárva jelző (valós idő alapján számolva, NEM
    hardcode-olva).
  - Fizetési módok jelzése (ikonokkal) — FONTOS, mert évek óta visszatérő
    panasz volt a kártyás fizetés hiánya. Ha ez megoldódott, hangsúlyosan
    kommunikálni kell.

## 4. Oldaltérkép (tartalmi vázlat)

- `/` — Hero (Nice to Meat You + a taxis sztori egy mondatban) → About →
  Menü kiemelt tételek → Helyszín → Galéria-előnézet → Footer
- `/menu` — teljes étlap, fülekkel (Smash / Klasszikus / Specialitások /
  Finomságok / Italok), méret-legendával
- `/rolunk` — a teljes alapítói sztori, a taxis koncepció kifejtve
- `/helyszin` — valódi térkép, nyitvatartás, elérhetőség, fizetési módok
- `/galeria` — bővíthető fotógaléria (a tulajdonos saját fotózásából
  frissül majd rendszeresen)

## 5. Ismert korábbi tartalmi problémák, amiket az új oldalon javítani kell

- "20+ kézműves burger variáció" állítás ne legyen több, mint amennyi
  tényleg látható a menüben — vagy pontosítani, vagy hozzáigazítani a
  valós tételszámhoz.
- A galéria jelenleg csak 3 kép — bővítendő.
- A footerben hiányzik a TikTok — pedig ez a legaktívabb csatorna (lásd
  korábbi közösségimédia-audit).
- A taxis/London-sztori jelenleg csak az About szekcióban bújik meg
  idézetként — a Hero-ban is meg kell jelennie.

## 6. Kontaktinfó / alapadatok (a jelenlegi oldalról)

- Cím: Budapest, Mester u. 46, 1095
- E-mail: info@blackcabburger.hu
- Nyitvatartás (a jelenlegi oldal szerint): Hétfő–Vasárnap 11:30–22:00 —
  ELLENŐRIZENDŐ, mert korábban több forrás ellentmondó adatot mutatott
  (pl. Wolt 21:30 zárás, Waze éjfél). A tulajdonossal egyeztetve a valós,
  jelenlegi nyitvatartást kell rögzíteni egyetlen forrásból.
- Rendelés: Wolt, Foodora (linkek a meglévő kódból átvehetők)
