import BlogSection from "../blocks/blogSection";
import HeroSection from "../blocks/heroSection";
import ProjectSection from "../blocks/projectSection";
import QuestionSection from "../blocks/questionSection";
import ServicesSection from "../blocks/servicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectSection />
      <BlogSection />
      <QuestionSection />
    </>
  );
}
