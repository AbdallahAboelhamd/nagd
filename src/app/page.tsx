import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";
import Hero from "@/components/home/Hero";
import BrandStatement from "@/components/home/BrandStatement";
import CollectionExplorer from "@/components/home/CollectionExplorer";
import SignaturePieces from "@/components/home/SignaturePieces";
import CustomFurniture from "@/components/home/CustomFurniture";
import InspirationUpload from "@/components/home/InspirationUpload";
import Projects from "@/components/home/Projects";
import Process from "@/components/home/Process";
import WhyNamarg from "@/components/home/WhyNamarg";
import Showroom from "@/components/home/Showroom";
import SocialWorld from "@/components/home/SocialWorld";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandStatement />
        <CollectionExplorer />
        <SignaturePieces />
        <CustomFurniture />
        <InspirationUpload />
        <Projects />
        <Process />
        <WhyNamarg />
        <Showroom />
        <SocialWorld />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}
