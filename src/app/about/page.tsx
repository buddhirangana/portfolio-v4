import React from "react";
import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
import ToolsSection from "@/components/sections/ToolsSection";

export const metadata: Metadata = {
  title: "About & Tech Stack",
  description:
    "Learn more about Buddhi Rangana - Entrepreneur, Full-Stack Developer, and founder of DigiFox Technologies & TEC ROOM.",
  openGraph: {
    title: "About & Tech Stack | Buddhi Rangana",
    description:
      "Learn more about Buddhi Rangana - Entrepreneur, Full-Stack Developer, and founder of DigiFox Technologies & TEC ROOM.",
    url: "https://buddhirangana.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
      <ToolsSection />
    </div>
  );
}
