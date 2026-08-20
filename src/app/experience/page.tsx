import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ExperienceSection from "@/components/sections/ExperienceSection";

export const metadata: Metadata = {
  title: "Work Experience",
  description:
    "Explore Buddhi Rangana's professional work experience, leadership roles, and software engineering career milestones.",
  openGraph: {
    title: "Work Experience | Buddhi Rangana",
    description:
      "Explore Buddhi Rangana's professional work experience, leadership roles, and software engineering career milestones.",
    url: "https://buddhirangana.com/experience",
  },
};

export default function ExperiencePage() {
  return (
    <div>
      <PageHeader
        title="Work"
        highlightedText="Experience"
        subtitle="Professional software engineering career milestones, leadership, and digital transformations."
        tag="CAREER HISTORY"
        decal="CAREER"
        breadcrumbCurrent="Experience"
      />
      <ExperienceSection hideHeader={true} />
    </div>
  );
}
