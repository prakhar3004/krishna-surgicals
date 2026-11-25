# Krishna Surgicals — Kakadeo, Kanpur

Responsive, bilingual (English / हिन्दी) medical and home-care supplies showcase built with Next.js App Router, TypeScript, Tailwind CSS, Lucide icons, and Motion (`motion/react`).

## Key Editable Files

- `src/config/business.ts` — Verified store identity, Kakadeo Kanpur address, WhatsApp/phone contact, brand list, and verification flags (`openingHours.verified`, `reviews.verified`, `address.postalCodeVerified`).
- `src/data/catalog.ts` — Categories and editable product catalogue with confirmed brands/models and factual descriptions.
- `src/data/translations.ts` — English and Hindi UI copy.

## Development

```bash
npm install
npm run dev
```

## Production Build & Checks

```bash
npx tsc --noEmit
npm run lint
npm run build
```
