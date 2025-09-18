import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import DemoComparison from '@/components/sections/demo-comparison';
import TrustedCompanies from '@/components/sections/trusted-companies';
import HowItWorksSection from '@/components/sections/how-it-works';
import Testimonial1 from '@/components/sections/testimonial-1';
import PlatformSupport from '@/components/sections/platform-support';
import CustomizableTemplates from '@/components/sections/customizable-templates';
import AiCapabilities from '@/components/sections/ai-capabilities';
import Testimonial2 from '@/components/sections/testimonial-2';
import SharingCapabilities from '@/components/sections/sharing-capabilities';
import TwitterTestimonials from '@/components/sections/twitter-testimonials';
import FinalCtaSection from '@/components/sections/final-cta';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="flex flex-col">
        <HeroSection />
        
        <div className="flex justify-center">
          <DemoComparison />
        </div>
        
        <div className="flex justify-center">
          <TrustedCompanies />
        </div>
        
        <HowItWorksSection />
        
        <Testimonial1 />
        
        <PlatformSupport />
        
        <CustomizableTemplates />
        
        <AiCapabilities />
        
        <Testimonial2 />
        
        <SharingCapabilities />
        
        <TwitterTestimonials />
        
        <FinalCtaSection />
        
        <Footer />
      </div>
    </main>
  );
}