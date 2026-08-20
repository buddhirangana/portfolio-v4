import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import AboutSection from "@/components/sections/AboutSection";
import ToolsSection from "@/components/sections/ToolsSection";
import GallerySection from "@/components/sections/GallerySection";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Buddhi Rangana - Entrepreneur, Full-Stack Developer, and founder of DigiFox Technologies & TEC ROOM.",
  openGraph: {
    title: "About Me | Buddhi Rangana",
    description:
      "Learn more about Buddhi Rangana - Entrepreneur, Full-Stack Developer, and founder of DigiFox Technologies & TEC ROOM.",
    url: "https://buddhirangana.com/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About &"
        highlightedText="Tech Stack"
        subtitle="Entrepreneur, Full-Stack Developer, and Founder of DigiFox Technologies & TEC ROOM."
        tag="BIOGRAPHY"
        decal="BIOGRAPHY"
        breadcrumbCurrent="About"
      />
      <AboutSection hideHeader={true} />
      <ToolsSection />
      <GallerySection />
    </div>
  );
}
