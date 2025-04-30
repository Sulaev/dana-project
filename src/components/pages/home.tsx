import BlogSection from "../block/blogSection";
import HeroSection from "../block/heroSection";
import ProjectSection from "../block/projectSection";
import QuestionSection from "../block/questionSection";
import ServicesSection from "../block/servicesSection";

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
