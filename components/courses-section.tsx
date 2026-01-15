import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Palette, FileCode, Atom, Sparkles } from "lucide-react";

const courses = [
  {
    icon: Code,
    title: "HTML",
    description: "HTML tuzlishi va veb sahifalar poydevorini yarating",
    backgroundColor: "",
  },
  {
    icon: Palette,
    title: "CSS",
    description:
      "Flexbox va Grid kabi zamonaviy CSS texnikasi bilan chiroyli veb-saytlarni yarating",
  },
  {
    icon: FileCode,
    title: "JavaScript",
    description: "Yaratgan veb saytlaringizni jonlantiring",
  },
  {
    icon: Atom,
    title: "React",
    description: "Eng zamonavi veb sahifalarni ishlab chiqing",
  },
  {
    icon: Sparkles,
    title: "AI Skills",
    description:
      "Rivojlanib borayotgan va barcha bilishi kerak bo’lgan ChatGPT, MidJourney va boshqa sun’iy intellektlar bilan ishlang",
  },
];

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Bizning Kelajakka Safarimiz
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl ">
            Bizning platformamiz — shunchaki kurs emas, balki jonli yo‘l. Bu
            yo‘lda biz bolalar bilan birga ularning hayotini nol darajadan
            boshlab, to‘liq kasb va raqamli kelajak sari olib chiqamiz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {courses.map((course, index) => (
            <Card
              key={course.title}
              className="bg-card border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <course.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {course.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
