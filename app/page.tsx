import { HeroSection } from "@/components/hero-section";
import { ParentConcernsSection } from "@/components/parent-concerns-section";
import { CoursesSection } from "@/components/courses-section";
import { OutcomeSection } from "@/components/outcome-section";
import { ContactSection } from "@/components/contact-section";
import { GamifiedPlatformSection } from "@/components/gamified-platform-section";
import { WhyNaviSection } from "@/components/why-navi-section";
import { FAQSection } from "@/components/faq-section";
import { TeachersSection } from "@/components/teachers-section";
import { FounderSection } from "@/components/founder-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import AmoForm from "@/components/formAmo";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ParentConcernsSection />
      <CoursesSection />
      <OutcomeSection />
      {/* <ContactSection id="contact-1" /> */}
      {/* <GamifiedPlatformSection /> */}

      <WhyNaviSection />
      <Contact />
      <FAQSection />
      {/* <ContactSection id="contact" /> */}
      <TeachersSection />
      <FounderSection />
      {/* <ContactSection id="contact-3" /> */}
      <Footer />
    </main>
  );
}
