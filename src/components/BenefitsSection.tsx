import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Reduce admin time by 60% with automated workflows",
  "Stay compliant with California Title 22 & CCL requirements",
  "Improve family satisfaction with real-time care updates",
  "Eliminate paper-based processes and reduce errors",
  "Scale from a single home to multi-facility operations",
  "24/7 support from a team that understands RCFE operations",
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Why operators choose EasyRCFE
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We built EasyRCFE alongside RCFE operators in California to solve real problems — not just digitize paperwork.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 md:p-10 shadow-[var(--shadow-soft)]">
            <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
              "EasyRCFE transformed how we run our facility. What used to take hours of paperwork now happens automatically. Our staff can focus on residents instead of spreadsheets."
            </blockquote>
            <div>
              <p className="font-medium text-foreground">Maria Gonzalez</p>
              <p className="text-sm text-muted-foreground">Administrator, Sunrise RCFE, Los Angeles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
