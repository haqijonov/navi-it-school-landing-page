import { HeroSection } from "@/components/hero-section";
import { CoursesSection } from "@/components/courses-section";
import { ContactSection } from "@/components/contact-section";
import { GamifiedPlatformSection } from "@/components/gamified-platform-section";
import { WhyNaviSection } from "@/components/why-navi-section";
import { FAQSection } from "@/components/faq-section";
import { TeachersSection } from "@/components/teachers-section";
import { FounderSection } from "@/components/founder-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CoursesSection />
      {/* <ContactSection id="contact-1" /> */}
      {/* <GamifiedPlatformSection /> */}
      <WhyNaviSection />
      <FAQSection />
      <ContactSection id="contact-2" />
      <TeachersSection />
      <FounderSection />
      {/* <ContactSection id="contact-3" /> */}
      <Footer />
    </main>
  );
}
