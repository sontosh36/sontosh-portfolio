import ShortAbout from "../components/home/ShortAbout";
import Hero from "../components/home/Hero";
import FeaturedProjects from "../components/home/FeaturedProjects";
import SkillPreview from "@/components/home/SkillPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
    <Hero/>
    <ShortAbout/>
    <SkillPreview/>
    <FeaturedProjects/>
    <ContactCTA/>
    </>
  );
}
