# 📄 Samuel David Arenas Pareja — Senior Software Engineer CV & Portfolio

> Modern, high-performance portfolio and CV website built with **Next.js 16 (App Router, SSR)**, **Tailwind CSS**, and **next-intl**. Designed specifically for high-speed recruitment, ATS parsing, and discovery by modern AI search agents.

---

## 🚀 Key Highlights & Architectural Features

- **🌐 Internationalization (i18n):** Native support for English (`/en`) and Spanish (`/es`) via `next-intl` with automatic redirection and route localization.
- **🤖 AI Recruitment Optimization:**
  - Semantic HTML5 document structure with accessibility landmarks.
  - Rich **Schema.org JSON-LD** graph (`Person` + `ProfilePage`) for knowledge graph ingestion.
  - Dedicated `/llms.txt` route, generated from `cv-data.ts`, for rapid ingestion by LLM-powered hiring tools.
  - Clean Server-Side Rendering (SSR) ensuring text visibility to scrapers without client-side hydration delays.
- **🖨️ Print & PDF Ready:** Integrated clean printable stylesheet that removes web elements and formats cleanly to an ATS-ready document.
- **🛠️ Evidence-based Skills:** Two groups, current and earlier, with no year badges; every current skill appears in an experience bullet.

---

## 💻 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Server Components, SSR)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **i18n:** [next-intl](https://next-intl-docs.vercel.app/)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Repository Structure

```
samuel-arenas-cv/
├── public/
│   ├── Samuel_Arenas_CV_EN.pdf  # Printed from /en (regenerate after any copy change)
│   ├── Samuel_Arenas_CV_ES.pdf  # Printed from /es (regenerate after any copy change)
│   └── robots.txt             # Search crawler instructions
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx     # Locale layout with Schema.org JSON-LD & OG tags
│   │   │   └── page.tsx       # Main CV page (Server Component)
│   │   ├── llms.txt/route.ts  # /llms.txt generated from cv-data.ts
│   │   ├── sitemap.ts         # /sitemap.xml (en and es, with hreflang alternates)
│   │   ├── globals.css        # Tailwind CSS and print stylesheet
│   │   ├── layout.tsx         # Root pass-through layout
│   │   └── page.tsx           # Default redirect to /en
│   ├── components/
│   │   ├── cv/                # Domain CV components (Header, Experience, Skills...)
│   │   ├── layout/            # Navbar with language toggle, Footer
│   │   └── ui/                # Reusable UI primitives (Section, Badge)
│   ├── data/
│   │   ├── cv-data.ts         # Single source of truth for CV data
│   │   └── types.ts           # TypeScript interfaces
│   ├── i18n/
│   │   ├── routing.ts         # Supported locales (en, es)
│   │   ├── navigation.ts      # Localized navigation primitives
│   │   └── request.ts         # Server-side request locale loader
│   ├── lib/
│   │   ├── format-date.ts     # ISO year-month to localized "Apr 2024" / "abr de 2024"
│   │   ├── metadata.ts        # Open Graph & SEO metadata generator
│   │   └── schema.ts          # Schema.org structured data generator
│   └── messages/
│       ├── en.json            # English translations
│       └── es.json            # Spanish translations
├── .github/workflows/ci.yml   # Lint, typecheck, test and build on PRs and master
├── vitest.config.mts          # Vitest config (Node by default, jsdom per file)
├── scripts/
│   └── generate-pdfs.mjs      # `pnpm pdf`: prints both PDFs (Windows, macOS, Linux)
├── middleware.ts              # Locale detection and routing
├── next.config.ts             # Next.js & next-intl configuration
└── tsconfig.json              # TypeScript configuration
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js >= 20.9.0
- pnpm >= 9.0.0

### Installation

```bash
# Clone the repository
git clone https://github.com/samsax/samuel-arenas-cv.git
cd samuel-arenas-cv

# Install dependencies
pnpm install
```

### Running Locally

```bash
# Start development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

```bash
pnpm build
pnpm start
```

---

## 📄 License

MIT © [Samuel David Arenas Pareja](https://github.com/samsax)

---

## ✅ Tests and CI

```bash
pnpm test         # run all unit tests once (Vitest)
pnpm test:watch   # re-run on change
pnpm lint
pnpm typecheck
```

- **What is covered:** the CV data, messages, JSON-LD, metadata, sitemap, `/llms.txt`, the locale layout (404 for unknown locales) and the CV components in both languages.
- **Guards:** tests fail if the public copy names the client or its internal products, shows exact work hours or the professional GitHub account, has English and Spanish out of sync, uses a non-ISO date, or lists a current skill that no experience bullet mentions. When a failure is intended, for example a deliberate content change, update the test in the same commit.
- **Conventions:** tests sit next to the code they cover as `*.test.ts(x)`. Data, lib and route tests run in Node; component tests start with `// @vitest-environment jsdom`.
- **Not covered by unit tests:** async Server Components cannot be rendered by Vitest, so `Header` is tested with `next-intl/server` mocked. The end-to-end suite covers the full page instead.
- **CI:** `.github/workflows/ci.yml` runs lint, typecheck, build, unit tests and end-to-end tests on every pull request and on pushes to `master`, using Node 24 and the pnpm version from `package.json`. On failure it uploads the Playwright report.

### End-to-end tests (Playwright)

```bash
pnpm e2e          # build the site, then run every e2e test (desktop and mobile Chromium)
pnpm e2e:ui       # the same, in Playwright's interactive UI
pnpm exec playwright test e2e/accessibility.spec.ts   # one file
```

- **How it runs:** `playwright.config.ts` starts `pnpm start` on port 3460 against the production build, so `pnpm build` must have run first (`pnpm e2e` does this). Set `E2E_BASE_URL` to test a deployed site instead, for example a Vercel preview.
- **What is covered:** the English and Spanish pages (headings, summary, employers, certificates, interests, language switch, links), the PDF downloads (served as real PDFs), JSON-LD, print layout, `robots.txt`, `sitemap.xml`, `llms.txt`, unknown paths returning 404, and the root redirect.
- **Accessibility:** axe-core checks WCAG 2.1 A and AA on both pages and fails on serious or critical violations. A keyboard test confirms the language switch is reached within 10 Tab presses, and another confirms the PDF link can receive focus. Both pages also have exactly one `h1` and the nav, main and footer landmarks.
- **Layout:** the mobile project runs the same tests on a Pixel 7 viewport, and one test checks for horizontal scrolling.
- **Reports:** failures keep a trace (`trace: retain-on-failure`). Output goes to `playwright-report/` and `test-results/`, both git-ignored.

---

## 📄 Regenerating the PDFs

The download button serves the two PDFs in `public/`. They are printed from the built site, so reprint both after any change to `src/data/cv-data.ts`:

```bash
pnpm pdf
```

The script builds the site, serves it on port 3457, prints `/en` and `/es` with headless Chrome or Edge, and stops the server. It runs the same way on Windows (PowerShell), macOS and Linux and uses only Node built-ins.

- **Browser:** it looks for Chrome, then Edge, in the standard install locations. Set `CHROME_PATH` to the executable to use a different one, for example in PowerShell: `$env:CHROME_PATH = "C:\Program Files\Google\Chrome\Application\chrome.exe"; pnpm pdf`.
- **Port:** set `PORT` if 3457 is taken.
- **Check:** open both PDFs and confirm they are two pages. The navbar, footer and buttons are hidden in print.
