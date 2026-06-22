# Mayi Digital Creative — Website

## Getting Started

Node.js is required to run this project. If you don't have it installed:

1. Download and install Node.js from https://nodejs.org (choose the LTS version)
2. Restart your terminal after installation

### Install & Run

```bash
# Navigate to the project folder
cd /Users/macaylachung/mayidigitalcreative

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open http://localhost:3000 in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
mayidigitalcreative/
├── app/                    # All pages (Next.js App Router)
│   ├── page.tsx            # Homepage
│   ├── about/              # About, Team, Careers
│   ├── services/           # All service pages (10 categories, 42+ pages)
│   ├── industries/         # 14 industry pages
│   ├── work/               # Case studies
│   ├── blog/               # Blog hub + categories
│   ├── pricing/            # Pricing page
│   ├── contact/            # Contact page
│   ├── resources/          # Resources hub
│   ├── faq/                # FAQ page
│   ├── sitemap.ts          # Auto-generated XML sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ServicePageTemplate.tsx
│   └── home/               # Homepage section components
└── public/                 # Static assets (add logo here)
```

## Adding Your Logo

Place your logo files in `/public/`:
- `logo.png` — full logo (for footer/about)
- `logo-icon.png` — M icon only (optional)

Then update `Navbar.tsx` and `Footer.tsx` to use `<Image>` from `next/image`.

## Customisation

- **Colours**: Edit `tailwind.config.ts` and `app/globals.css`
- **Fonts**: Edit `app/layout.tsx` (currently Syne + Inter from Google Fonts)
- **Content**: All page content is in the respective `app/*/page.tsx` files
- **Contact form**: Update `app/contact/page.tsx` to connect to your preferred form handler (Formspree, Netlify Forms, etc.)

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (ready to use)
- Lucide React (icons)
- Google Fonts (Syne + Inter)
