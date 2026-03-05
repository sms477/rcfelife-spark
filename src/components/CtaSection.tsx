import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center"
          style={{ background: "var(--gradient-hero)" }}
        >
          <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-4">
            Ready to modernize your RCFE?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Join hundreds of California RCFE operators who trust EasyRCFE to run their facilities. Start your free trial today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              Start Free Trial <ArrowRight size={16} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
