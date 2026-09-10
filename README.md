# Black Cab Burger — új weboldal (Next.js)

Ez a Flutter-alapú `blackcabuj` weboldal marketing-fókuszú újraépítése
Next.js-ben. A teljes háttéranyagot, márkastratégiát és a technikai
döntések indoklását lásd a **`PROJECT_BRIEF.md`**-ben — azt olvasd be
először, ha AI-eszközzel (Antigravity, Claude Code, stb.) dolgozol tovább
a projekten.

## Fejlesztés

```bash
npm install
npm run dev
```

Nyisd meg: http://localhost:3000

## Build

```bash
npm run build
```

Az oldal minden útvonala statikusan előrenderelődik (`○ Static`) — ez adja
a gyors betöltést és a jó SEO-indexelhetőséget, amit a Flutter-verzió nem
tudott.

## Amit még pótolni kell nyitás/deploy előtt

- **Fotók:** minden `TODO` komment jelzi a kódban, hol vannak
  kitöltő-blokkok valódi fotók helyett (Hero, Menü, Galéria). Tedd a
  képeket a `public/images/` mappába, és cseréld le a placeholder
  `div`-eket `next/image` komponensre.
- **WhiskeyTown font:** jelenleg az "Anton" Google Font a helyettesítő a
  márka saját fejléc-fontjáért. Ha megvan a licencfájl, tedd a
  `public/fonts/` mappába, és kövesd a kommentet a
  `src/app/layout.tsx` tetején (`next/font/local`-ra váltás).
- **Nyitvatartás, telefonszám, fizetési módok:** a `src/lib/site-data.ts`
  fájl tetején lévő `TODO` kommentek jelzik, mit kell egyeztetni a
  tulajdonossal, mielőtt élesítjük.
- **Google Analytics / Meta Pixel:** még nincs bekötve — ha lesz fizetett
  hirdetés a stratégiából, ezt be kell illeszteni a `layout.tsx`-be.

## Deploy (Vercel)

1. Hozz létre egy **új** GitHub repót (pl. `blackcab-web`), toljad fel ezt
   a kódot.
2. Vercelen: "Add New Project" → importáld az új repót → a keretrendszert
   automatikusan felismeri (Next.js) → Deploy.
3. Állítsd be a saját domaint (`blackcabburger.hu`) a Vercel projekt
   Settings → Domains alatt.
