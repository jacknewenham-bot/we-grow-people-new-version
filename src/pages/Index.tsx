import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Features } from "@/components/sections/Features";
import { Teams } from "@/components/sections/Teams";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CoachesImageCarousel } from "@/components/sections/CoachesImageCarousel";
import { OpenLetter } from "@/components/sections/OpenLetter";
import { Testimonials } from "@/components/sections/Testimonials";
import { Stakeholders } from "@/components/sections/Stakeholders";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Teams />
        <Stakeholders />
        <HowItWorks />
        <CoachesImageCarousel sectionClassName="py-12 md:py-32 bg-background" showSubtitle={true} showCta={true} />
        <OpenLetter />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
