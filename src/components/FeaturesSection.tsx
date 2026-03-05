import { Users, ClipboardCheck, Calendar, Shield, Bell, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Resident Management",
    description: "Complete resident profiles with medical history, care plans, and family contacts in one place.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Tracking",
    description: "Stay audit-ready with automated compliance checklists aligned to California Title 22 regulations.",
  },
  {
    icon: Calendar,
    title: "Staff Scheduling",
    description: "Smart scheduling that ensures proper staff-to-resident ratios and tracks certifications.",
  },
  {
    icon: Shield,
    title: "Incident Reporting",
    description: "Streamlined incident documentation with automated notifications to administrators and families.",
  },
  {
    icon: Bell,
    title: "Medication Reminders",
    description: "Automated medication tracking with eMAR integration and missed-dose alerts.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Real-time dashboards for occupancy, financials, and care quality metrics.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Everything you need to manage your RCFE
          </h2>
          <p className="text-muted-foreground text-lg">
            Purpose-built tools that simplify daily operations and keep you compliant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-card rounded-xl p-6 border border-border hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="h-11 w-11 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon size={22} className="text-accent-foreground group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
