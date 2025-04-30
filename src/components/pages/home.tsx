import BlogSection from "../block/blogSection";
import HeroSection from "../block/heroSection";
import ProjecctSection from "../block/projectSection";
import ServicesSection from "../block/servicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjecctSection />
      <BlogSection />
    </>
  );
}
