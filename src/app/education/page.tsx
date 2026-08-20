import React from "react";
import type { Metadata } from "next";
import EducationSection from "@/components/sections/EducationSection";
import CertificationsSection from "@/components/sections/CertificationsSection";

export const metadata: Metadata = {
  title: "Education & Certifications",
  description:
    "View academic qualifications, degree programs, professional certifications, and credentials achieved by Buddhi Rangana.",
  openGraph: {
    title: "Education & Certifications | Buddhi Rangana",
    description:
      "View academic qualifications, degree programs, professional certifications, and credentials achieved by Buddhi Rangana.",
    url: "https://buddhirangana.com/education",
  },
};

export default function EducationPage() {
  return (
    <div className="pt-20">
      <EducationSection />
      <CertificationsSection />
    </div>
  );
}
