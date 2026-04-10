# Buddhi Rangana | Portfolio v4.0

A premium, high-performance personal portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. This project features a state-of-the-art dark aesthetic (Solar Theme), fluid animations, and an integrated AI assistant.

## 🚀 Key Features

- **Premium Aesthetics**: Curated hybrid dark mode with glassmorphism and custom technical decals.
- **BNova AI Assistant**: An interactive chatbot built with React and Framer Motion to provide context-aware information about Buddhi's background and skills.
- **Secure Communication**: Secure "Contact" form integrated with **Formspree** and protected by **Google reCAPTCHA v2**.
- **Performance Optimized**: 
  - Smooth scrolling using **Lenis**.
  - Optimized font loading via `next/font`.
  - Static Generation for ultra-fast load times.
- **Dynamic Content**: Feature-rich gallery with progressive loading and interactive career timelines.
- **SEO Ready**: Full dynamic sitemap, robots.txt, and optimized OpenGraph/Twitter meta tags.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Security**: [Google reCAPTCHA](https://www.google.com/recaptcha/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Getting Started

### 1. Prerequisites
- Node.js (v18 or later)
- npm or yarn

### 2. Installation
```bash
git clone https://github.com/buddhirangana/portfolio-v4.git
cd portfolio-v4
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory and add your keys:
```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the project.

## 🚢 Deployment

1. Push your code to a GitHub repository.
2. Import the project into **Vercel**.
3. Add the `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` environment variable in the Vercel Dashboard.
4. Ensure your **Formspree** form ID is configured in `ContactSection.tsx` and your **Secret Key** is linked in the Formspree project settings.

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [Buddhi Rangana](https://buddhirangana.com)

