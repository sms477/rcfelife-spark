import { Check, X, ArrowRight, Shield, LogIn, FileText, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisonRows = [
  {
    feature: "Payroll & Tax",
    oldWay: "Gusto/ADP ($40–$100+/mo)",
    newWay: "Included (Pay stubs & tax forms)",
  },
  {
    feature: "Accounting",
    oldWay: "QuickBooks ($30–$90/mo)",
    newWay: "Included (Automated P&L & Billing)",
  },
  {
    feature: "Clinical / eMAR",
    oldWay: "Standalone eMAR ($100–$300/mo)",
    newWay: "Included (eMAR, ADL, Acuity reviews)",
  },
  {
    feature: "Ops & Logs",
    oldWay: "Paper / Spreadsheets (Manual)",
    newWay: "Included (Shift logs & Audit trails)",
  },
  {
    feature: "Data Flow",
    oldWay: "Manual entry in 3+ different apps",
    newWay: "Single source of truth",
  },
];

const benefits = [
  {
    icon: LogIn,
    title: "One Login",
    description: "Manage your residents, staff, and finances in one tab.",
  },
  {
    icon: Shield,
    title: "Audit-Ready Records",
    description: "Every ADL, medication pass, and shift note is timestamped and linked for Title 22 compliance.",
  },
  {
    icon: FileText,
    title: 'Zero "Double Entry"',
    description: "When you update a resident's acuity, your billing and care plans update automatically.",
  },
  {
    icon: Calculator,
    title: "Clean Financials",
    description: "No more exporting CSVs from three places to see if you're actually profitable this month.",
  },
];

interface ComparisonSectionProps {
  onTrialClick?: () => void;
}

const ComparisonSection = ({ onTrialClick }: ComparisonSectionProps) => {
  return (
    <section id="comparison" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-xs font-medium text-destructive mb-6">
            Stop overpaying for fragmented software
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            The Cost of "Fragmented" Software vs.{" "}
            <span className="text-primary">The EasyRCFE Way</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            RCFE owners are stuck overpaying—both in money and in manual data entry. See how much you could save.
          </p>
        </div>

        {/* Comparison Table — Desktop */}
        <div className="hidden md:block max-w-4xl mx-auto mb-16">
          <div className="rounded-2xl border border-border overflow-hidden shadow-[var(--shadow-soft)]">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-muted/50">
              <div className="p-5 font-medium text-sm text-muted-foreground">Feature</div>
              <div className="p-5 font-medium text-sm text-destructive text-center">
                The "Old" Way (Fragmented)
              </div>
              <div className="p-5 font-medium text-sm text-primary text-center bg-primary/5">
                The EasyRCFE Way (Unified)
              </div>
            </div>

            {/* Rows */}
            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 ${i < comparisonRows.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="p-5 font-medium text-foreground text-sm">{row.feature}</div>
                <div className="p-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <X size={16} className="text-destructive shrink-0" />
                  <span>{row.oldWay}</span>
                </div>
                <div className="p-5 flex items-center justify-center gap-2 text-sm text-foreground bg-primary/5">
                  <Check size={16} className="text-primary shrink-0" />
                  <span>{row.newWay}</span>
                </div>
              </div>
            ))}

            {/* Total Row */}
            <div className="grid grid-cols-3 border-t-2 border-border bg-muted/30">
              <div className="p-5 font-heading text-lg text-foreground">Total Monthly Cost</div>
              <div className="p-5 text-center">
                <span className="font-heading text-xl text-destructive line-through">$170–$500+</span>
                <span className="block text-xs text-muted-foreground mt-1">/month</span>
              </div>
              <div className="p-5 text-center bg-primary/5">
                <span className="font-heading text-2xl text-primary">$50</span>
                <span className="block text-xs text-muted-foreground mt-1">flat /month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Cards — Mobile */}
        <div className="md:hidden space-y-4 mb-16">
          {comparisonRows.map((row) => (
            <div key={row.feature} className="rounded-xl border border-border bg-card p-5 space-y-3">
              <h3 className="font-medium text-foreground text-sm">{row.feature}</h3>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <X size={16} className="text-destructive shrink-0 mt-0.5" />
                <span>{row.oldWay}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-primary">
                <Check size={16} className="shrink-0 mt-0.5" />
                <span>{row.newWay}</span>
              </div>
            </div>
          ))}
          <div className="rounded-xl border-2 border-primary bg-primary/5 p-5 text-center">
            <p className="text-sm text-muted-foreground mb-1">Save up to</p>
            <p className="font-heading text-3xl text-primary">$450+/mo</p>
            <p className="text-xs text-muted-foreground mt-1">
              From <span className="line-through text-destructive">$500+</span> → <span className="text-primary font-medium">$50 flat</span>
            </p>
          </div>
        </div>

        {/* Why All-in-One Matters */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4 text-center">
            Why "All-in-One" Matters for California RCFEs
          </h3>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Running a facility on 5 different platforms isn't just expensive—it's a compliance risk. When your payroll doesn't talk to your shift logs, things slip through the cracks.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 p-5 rounded-xl bg-card border border-border">
                <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <b.icon size={20} className="text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{b.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Migration CTA */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-12 text-center shadow-[var(--shadow-soft)]">
          <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-3">
            "But is it hard to switch?"
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
            We handle the heavy lifting. When you sign up for a trial, our team migrates your resident records, staff data, and billing history—<strong className="text-foreground">for free</strong>. Start fresh without the manual labor.
          </p>
          <Button size="lg" className="gap-2" onClick={onTrialClick}>
              Start Your Free Trial <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
