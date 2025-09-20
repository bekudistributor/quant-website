import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import { DashboardPreview } from '@/components/sections/dashboard-preview';
import TrustedCompanies from '@/components/sections/trusted-companies';
import HowItWorksSection from '@/components/sections/how-it-works';
import Testimonial1 from '@/components/sections/testimonial-1';
import { PricingSection } from '@/components/sections/pricing';
import { FaqSection } from '@/components/sections/faq';
import FinalCtaSection from '@/components/sections/final-cta';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="flex flex-col">
        <HeroSection />
        <DashboardPreview />
        
        <div className="flex justify-center">
          <TrustedCompanies />
        </div>
        
        <HowItWorksSection />
        
        <Testimonial1 />
        <PricingSection />
        <FaqSection />
        
        <FinalCtaSection />
        
        <Footer />
      </div>
    </main>
  );
}