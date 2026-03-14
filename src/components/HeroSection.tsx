import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

interface HeroSectionProps {
  onTrialClick?: () => void;
}

const HeroSection = ({ onTrialClick }: HeroSectionProps) => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/50 via-background to-background -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground mb-6 animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Built for California RCFE operators
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Run your care facility with{" "}
              <span className="text-primary">confidence</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              EasyRCFE streamlines resident management, compliance tracking, payroll, and staff coordination — so you can focus on what matters most: quality care.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="gap-2" onClick={onTrialClick}>
                Start Free Trial <ArrowRight size={16} />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play size={16} /> Watch Demo
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <span>✓ No credit card required</span>
              <span>✓ 14-day free trial</span>
            </div>
          </div>
          
          <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="rounded-xl overflow-hidden shadow-[var(--shadow-elevated)] border border-border">
              <img src={heroImage} alt="EasyRCFE management dashboard" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
