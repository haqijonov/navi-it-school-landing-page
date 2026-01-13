import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function FounderSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            NAVI Asoschisi
          </h2>
        </div>

        <Card className="max-w-4xl mx-auto bg-card border-border overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              {/* Photo */}
              <div className="relative aspect-square md:aspect-auto">
                <img
                  src="/atham.JPG"
                  alt="NAVI Founder"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bio */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <Quote className="w-10 h-10 text-accent mb-6" />
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Assalomu alaykum! Mening orzuim — bolalar va yoshlar uchun
                  faqat o‘qish emas, balki yaratishni o‘rgatadigan platformani
                  yaratish. NAVI orqali biz kelajak mutaxassislarini
                  tarbiyalaymiz, ular o‘z g‘oyalarini amalga oshiradi va dunyoga
                  o‘z hissasini qo‘shadi. Biz bilan birga bolalar nafaqat bilim
                  oladi, balki o‘z salohiyatini ochadi va yangi imkoniyatlarni
                  kashf etadi.”
                </p>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-1">
                    Atham Azam
                  </h3>
                  <p className="text-accent font-medium mb-3">Founder & CEO</p>
                  <ul className="text-sm text-muted-foreground list-disc ml-3.5">
                    <li>MARS IT Asoschisi</li>
                    <li>Get Coffee Asoschisi</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
