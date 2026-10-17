import CurrentFocus from "@/components/about/CurrentFocus";
import DevelopmentJourney from "@/components/about/DevelopmentJourney";
import EducationSection from "@/components/about/EducationSection";
import SkillsSection from "@/components/about/SkillsSection";
import WhatIDo from "@/components/about/WhatIDo";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Me | Sontosh Kumar Sarker",
  description:
    "Explore my development journey, technical skills, education, and current focus as an aspiring web developer.",
    alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Sontosh Kumar Sarker",
    description:
      "Explore my basic information.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>
      <DevelopmentJourney />
      <WhatIDo />
      <SkillsSection />
      <EducationSection />
      <CurrentFocus />
    </main>
  );
}
