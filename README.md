# Buddhi Rangana | Personal Portfolio v4.0

[![Next.js](https://img.shields.io/badge/Next.js-16.3.1-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)

A premium, ultra-high-performance multi-page personal portfolio and research hub built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**. Designed with a modern dark aesthetic (Solar Theme), fluid micro-animations, AI crawler specifications (`llms.txt`), and academic research integrations.

🌐 **Live Demo**: [https://buddhirangana.com](https://buddhirangana.com)


## 🌟 Key Features

- **Pure Multi-Page Architecture**: Clean, standalone Next.js App Router pages (`/about`, `/projects`, `/research`, `/experience`, `/education`, `/contact`) with active route navigation and breadcrumb banners (`PageHeader`).
- **Academic Research Hub**: Dedicated showcase for peer-reviewed research papers, DOIs, BibTeX citations, Google Scholar, ORCID iD, and ResearchGate profiles.
- **BNova AI Assistant**: Context-aware interactive assistant (`ChatBot`) answering inquiries about skills, projects, background, and contact options.
- **AI Model Standard (`llms.txt`)**: Full compliance with the `llms.txt` standard served at `/llms.txt` for AI agents, LLMs, and search crawlers.
- **100% Accessibility Compliant**: Discernible `aria-label` attributes on all icon links, mobile navigation toggles, and modal controls.
- **High-Performance & Web Caching**:
  - Native ES2022 output with zero legacy JS polyfill overhead.
  - Critical CSS inlining via `inlineCss: true`.
  - HTTP `Cache-Control` headers for static media (`31536000s immutable`).
  - Forced-reflow elimination with event delegation and layout caching.
  - Smooth scrolling powered by **Lenis**.
- **Secure Inquiries**: Integrated contact system protected by **Google reCAPTCHA v2** and **Formspree**.

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 16.3.1 (App Router & Turbopack) |
| **Frontend** | React 19, TypeScript 5 |
| **Styling** | Tailwind CSS 3.4, Vanilla CSS Design Tokens |
| **Animations** | Framer Motion, GSAP, Lenis Smooth Scroll |
| **Icons** | Lucide React, React Icons (Simple Icons, Tabler, FontAwesome) |
| **Security** | Google reCAPTCHA v2 |
| **Hosting & CDN** | Vercel |

## 📁 Directory Structure

```text
portfolio-v4/
├── public/                  # Static media, documents, og-images & llms.txt
│   ├── documents/           # CV and PDF documents
│   ├── images/              # Optimized WebP assets & photos
│   ├── llms.txt             # AI Crawler & LLM standard markdown file
│   └── og-image.png         # OpenGraph preview card
├── src/
│   ├── app/                 # Next.js App Router routes & endpoints
│   │   ├── about/           # About & Tech Stack page
│   │   ├── contact/         # Contact page
│   │   ├── education/       # Academic qualifications & certifications
│   │   ├── experience/      # Career timeline page
│   │   ├── projects/        # Featured projects showcase
│   │   ├── research/        # Academic publications page
│   │   ├── globals.css      # Design tokens & core CSS
│   │   ├── layout.tsx       # Root layout with head hints & analytics
│   │   ├── page.tsx         # Executive homepage
│   │   ├── robots.ts        # Dynamic robots.txt
│   │   └── sitemap.ts       # Dynamic XML sitemap
│   ├── components/
│   │   ├── layout/          # Navbar and Footer components
│   │   ├── providers/       # ThemeProvider & SmoothScrollProvider
│   │   ├── sections/        # Modular page sections
│   │   └── ui/              # PageHeader, ChatBot, CustomCursor, Particles
│   └── lib/                 # Empty polyfills & utility helpers
└── next.config.mjs          # Turbopack root, inlineCss & Cache-Control headers
```

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm** or **yarn**

### 2. Installation
```bash
git clone https://github.com/buddhirangana/portfolio-v4.git
cd portfolio-v4
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_v2_site_key
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
```

## 📄 License

This project is open source and available under the [Apache License 2.0](LICENSE).

Built with precision by [Buddhi Rangana](https://buddhirangana.com).
