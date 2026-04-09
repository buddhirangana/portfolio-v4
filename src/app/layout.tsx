import React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ChatBot from "@/components/ui/ChatBot";

// Load Inter and Poppins from Google Fonts with CSS variable exposure
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buddhirangana.com"),
  title: {
    default: "Buddhi Rangana | Entrepreneur & Aspiring Full-Stack Developer",
    template: "%s | Buddhi Rangana",
  },
  description:
    "Buddhi Rangana is a multi-talented entrepreneur, web developer, tech blogger and founder of DigiFox Technologies & TEC ROOM.",
  keywords: [
    "Buddhi Rangana",
    "Web Developer",
    "Aspiring Full-Stack Developer",
    "AI/ML Enthusiast",
    "Full Stack Developer",
    "WordPress Expert",
    "PHP Developer",
    "Entrepreneur",
    "Founder of DigiFox Technologies",
    "Founder of TEC ROOM",
    "DigiFox",
    "DigiFox Technologies",
    "DigiFox Technologies Founder",
    "TEC ROOM",
    "TEC ROOM Founder",
    "Sri Lanka",
    "WordPress Developer",
    "Digital Marketing",
  ],
  authors: [{ name: "Buddhi Rangana", url: "https://buddhirangana.com" }],
  creator: "Buddhi Rangana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buddhirangana.com",
    siteName: "Buddhi Rangana Portfolio",
    title: "Buddhi Rangana | Entrepreneur & Aspiring Full-Stack Developer",
    description: "Buddhi Rangana is a multi-talented entrepreneur, web developer, tech blogger and founder of DigiFox Technologies & TEC ROOM.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Buddhi Rangana - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buddhi Rangana | Entrepreneur & Aspiring Full-Stack Developer",
    description: "Buddhi Rangana is a multi-talented entrepreneur, web developer, tech blogger and founder of DigiFox Technologies & TEC ROOM.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://buddhirangana.com" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-dark-400 text-white overflow-x-hidden noise-overlay`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <LoadingScreen />
            <CustomCursor />
            <Navbar />
            <main id="main-content" className="relative">{children}</main>
            <Footer />
            <ChatBot />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
