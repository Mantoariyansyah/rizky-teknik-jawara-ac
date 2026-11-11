import { WorkGallery } from "@/components/BeforeAfter";
import { BookingSection } from "@/components/BookingSection";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { ServiceArea } from "@/components/ServiceArea";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-700">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Pricing />
        <HowItWorks />
        <BookingSection />
        <WorkGallery />
        <Testimonials />
        <ServiceArea />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
