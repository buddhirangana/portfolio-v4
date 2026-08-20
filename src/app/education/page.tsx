import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import EducationSection from "@/components/sections/EducationSection";
import CertificationsSection from "@/components/sections/CertificationsSection";

export const metadata: Metadata = {
  title: "Education",
  description:
    "View academic qualifications, degree programs, professional certifications, and credentials achieved by Buddhi Rangana.",
  openGraph: {
    title: "Education | Buddhi Rangana",
    description:
      "View academic qualifications, degree programs, professional certifications, and credentials achieved by Buddhi Rangana.",
    url: "https://buddhirangana.com/education",
  },
};

export default function EducationPage() {
  return (
    <div>
      <PageHeader
        title="Education &"
        highlightedText="Certifications"
        subtitle="Academic degree programs, university qualifications, and verified technical credentials."
        tag="ACADEMICS & CREDENTIALS"
        decal="EDUCATION"
        breadcrumbCurrent="Education"
      />
      <EducationSection hideHeader={true} />
      <CertificationsSection />
    </div>
  );
}
