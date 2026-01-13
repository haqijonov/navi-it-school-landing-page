import { Card, CardContent } from "@/components/ui/card";
import { Coins, Trophy, Gamepad2, Star, Target, Zap } from "lucide-react";

const features = [
  { icon: Coins, label: "Tangachalar to'plang" },
  { icon: Trophy, label: "Bedjiklar oling" },
  { icon: Star, label: "Reytiningizni ko'taring" },
  { icon: Target, label: "Muamolarni hal qiling" },
];

export function GamifiedPlatformSection() {
  return (
    <section id="platform" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <div className="flex items-center gap-3 mb-6">
              <Gamepad2 className="w-10 h-10" />
              <Zap className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Har bir o'quvchining shaxsiy o'quv platformasi
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Bizning o‘quv platformamizda har bir bajarilgan vazifa coinlar
              bilan baholanadi. Ushbu coinlar orqali o‘zingning qahramoningni
              turli xil skinlar bilan bezat! O‘yin va ta’lim uyg‘unlashgan bu
              platforma bolalarni o‘rganishga qiziqtiradi va har bir yutuqni
              haqiqiy mukofotga aylantiradi.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 bg-primary-foreground/10 rounded-xl p-4"
                >
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                  <span className="font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Mockup */}
          <div className="relative">
            <Card className="bg-background border-none shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-secondary p-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-chart-4" />
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                </div>
                <div className="p-6">
                  {/* User Stats */}
                  <div className="flex items-center gap-4 mb-6 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">
                        M
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-card-foreground">
                        Mavlon Haqijonov
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Level 12 Dasturchi
                      </p>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                      <Coins className="w-5 h-5 text-chart-4" />
                      <span className="font-bold text-card-foreground">
                        2,450
                      </span>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-card-foreground font-medium">
                          Html
                        </span>
                        <span className="text-muted-foreground">75%</span>
                      </div>
                      <div className="h-3 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-accent w-3/4 rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-card-foreground font-medium">
                          Css
                        </span>
                        <span className="text-muted-foreground">40%</span>
                      </div>
                      <div className="h-3 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-2/5 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex gap-2">
                    {[Trophy, Star, Zap].map((Icon, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center"
                      >
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                    ))}
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-muted-foreground text-sm font-medium">
                        +5
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-foreground/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
