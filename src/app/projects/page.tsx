import React from "react";
import type { Metadata } from "next";
import ProjectsSection from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Featured Projects",
  description:
    "Explore web applications, Android mobile apps, machine learning classifiers, and software projects developed by Buddhi Rangana.",
  openGraph: {
    title: "Featured Projects | Buddhi Rangana",
    description:
      "Explore web applications, Android mobile apps, machine learning classifiers, and software projects developed by Buddhi Rangana.",
    url: "https://buddhirangana.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <ProjectsSection />
    </div>
  );
}
