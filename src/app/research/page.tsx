import React from "react";
import type { Metadata } from "next";
import ResearchSection from "@/components/sections/ResearchSection";

export const metadata: Metadata = {
  title: "Research & Publications",
  description:
    "Peer-reviewed academic research papers, empirical studies, and publications by Buddhi Rangana on AI, LLMs, and Software Engineering.",
  openGraph: {
    title: "Research & Publications | Buddhi Rangana",
    description:
      "Peer-reviewed academic research papers, empirical studies, and publications by Buddhi Rangana on AI, LLMs, and Software Engineering.",
    url: "https://buddhirangana.com/research",
  },
};

export default function ResearchPage() {
  return (
    <div className="pt-20">
      <ResearchSection />
    </div>
  );
}
