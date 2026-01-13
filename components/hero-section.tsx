import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/kids-learning-coding-programming-computers-educati.jpg"
        >
          <source src="/kids-learning-it-skills-video.jpg" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight text-balance">
          NAVI
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-8 font-medium text-pretty max-w-3xl mx-auto">
          Biz faqat foydalalnuvchilarni emas, yangi loyhalar yaratuvchi yosh
          avlodni tarbiyalaymiz
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          10-17 yoshdagi bolalarni qiziqarli talim orqali kelajakka tayorlash
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact-1">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-secondary text-lg px-8 py-6 font-bold"
            >
              bog'lanish
            </Button>
          </a>
          <Button
            variant="outline"
            size="lg"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 bg-transparent"
          >
            <Play className="mr-2" size={20} />
            Video
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
