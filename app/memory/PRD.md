# Ziyma Systems — PRD

## Original Problem Statement
User's startup site (Ziyma Systems — Next.js, teal+orange on cream) was "overtexted", fonts weak, needed premium feel, mobile optimization, SEO, and a portfolio section that can grow. Provided a detailed "Axion Studio" styling prompt (React + Tailwind, `shaders` package hero, pill navbar, text-roll hover animations, expanding hover circles on work cards) — styling/animations only, not content.

## User Choices (June 2026)
- Portfolio: static section, user sends new samples for updates (edit `/app/frontend/src/lib/content.js` → `portfolio` array)
- Colors: keep teal (#135C50) + orange (#E2603B) on cream, with Axion styling
- Structure: single premium scrolling landing page
- Contact: form saved to MongoDB + WhatsApp/call/email links (+91 81042 05598)
- Theme: single light theme

## Architecture
- Frontend: React (CRA/craco) + Tailwind, `shaders` package (Shader/Swirl/ChromaFlow/FlutedGlass/FilmGrain as siblings inside `<Shader>`), framer-motion, sonner, lucide-react
- Fonts: Bricolage Grotesque (display) + Instrument Sans (body), Google Fonts
- Backend: FastAPI, `POST /api/contact` + `GET /api/contact` → Mongo `contact_inquiries`
- SEO: title/meta/OG/Twitter/canonical + JSON-LD ProfessionalService in `public/index.html`
- Key files: `src/lib/content.js` (all copy + portfolio data), `src/components/site/*` (Hero, Navbar, Studio, Services, Work, Contact, Footer, RollButton, SectionBadge, StarburstIcon)

## Implemented (2026-06)
- Hero: full-viewport shader background (fluted glass over swirl + chroma flow, film grain), pill navbar with live Mumbai clock, text-roll CTA, mobile bottom-sheet menu
- Studio section (Axion Section-2 layout: 26/1fr/48 grid, generated 3D imagery)
- Services: 3 cards (Website Systems, Data Auditing, AI Automation) + industries strip
- Work: 4 static portfolio cards (generated mockup images), expanding hover buttons
- Contact: dark teal section, form → MongoDB, WhatsApp/call/email links, process steps
- Testing: iteration_1 — backend 8/8, frontend 100% pass

## Backlog
- P1: real portfolio samples as user ships client work (replace generated mockups)
- P1: email notification on new contact inquiry (Resend/SendGrid)
- P2: admin page to view inquiries (currently GET /api/contact only)
- P2: contact inquiry admin auth if admin page added
- P2: OG image for social sharing

## Notes
- Portfolio images are AI-generated placeholders labelled as preview builds
- `GET /api/contact` is unauthenticated (no sensitive data beyond inquiries) — lock down if admin UI is added
