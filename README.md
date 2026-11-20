# 📄 Samuel David Arenas Pareja — Senior Software Engineer CV & Portfolio

> Modern, high-performance portfolio and CV website built with **Next.js 16 (App Router, SSR)**, **Tailwind CSS**, and **next-intl**. Designed specifically for high-speed recruitment, ATS parsing, and discovery by modern AI search agents.

---

## 🚀 Key Highlights & Architectural Features

- **🌐 Internationalization (i18n):** Native support for English (`/en`) and Spanish (`/es`) via `next-intl` with automatic redirection and route localization.
- **🤖 AI Recruitment Optimization:**
  - Semantic HTML5 document structure with accessibility landmarks.
  - Rich **Schema.org JSON-LD** graph (`Person` + `ProfilePage`) for knowledge graph ingestion.
  - Dedicated `/llms.txt` file for rapid ingestion by LLM-powered hiring tools.
  - Clean Server-Side Rendering (SSR) ensuring text visibility to scrapers without client-side hydration delays.
- **🖨️ Print & PDF Ready:** Integrated clean printable stylesheet that removes web elements and formats cleanly to an ATS-ready document.
- **🛠️ Calibrated Skills Matrix:** Accurately categorized by production evidence, tenure, and verified Procore Hubs platform work.

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
│   ├── llms.txt               # LLM ingestion summary
│   └── robots.txt             # Search crawler instructions
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx     # Locale layout with Schema.org JSON-LD & OG tags
│   │   │   └── page.tsx       # Main CV page (Server Component)
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
│   │   ├── metadata.ts        # Open Graph & SEO metadata generator
│   │   └── schema.ts          # Schema.org structured data generator
│   └── messages/
│       ├── en.json            # English translations
│       └── es.json            # Spanish translations
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
