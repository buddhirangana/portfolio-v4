import React from "react";
import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact & Collaboration",
  description:
    "Get in touch with Buddhi Rangana for software development, project inquiries, remote collaboration, or consulting.",
  openGraph: {
    title: "Contact & Collaboration | Buddhi Rangana",
    description:
      "Get in touch with Buddhi Rangana for software development, project inquiries, remote collaboration, or consulting.",
    url: "https://buddhirangana.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
