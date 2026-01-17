import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Mission } from "@/components/sections/Mission";
import { Features } from "@/components/sections/Features";
import { Teams } from "@/components/sections/Teams";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Coaches } from "@/components/sections/Coaches";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Mission />
        <Features />
        <Teams />
        <HowItWorks />
        <Coaches />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
