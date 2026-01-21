import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AcademicsSection from "@/components/AcademicsSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

const Homepage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <AcademicsSection />
      <AdmissionsSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
};

export default Homepage;
