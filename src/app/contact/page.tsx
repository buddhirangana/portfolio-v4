import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Buddhi Rangana for software development, project inquiries, remote collaboration, or consulting.",
  openGraph: {
    title: "Contact | Buddhi Rangana",
    description:
      "Get in touch with Buddhi Rangana for software development, project inquiries, remote collaboration, or consulting.",
    url: "https://buddhirangana.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact &"
        highlightedText="Collaboration"
        subtitle="Available for remote software engineering, web development projects, and research inquiries."
        tag="GET IN TOUCH"
        decal="CONTACT"
        breadcrumbCurrent="Contact"
      />
      <ContactSection hideHeader={true} />
    </div>
  );
}
