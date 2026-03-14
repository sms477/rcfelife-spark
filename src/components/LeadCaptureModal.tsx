import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Loader2 } from "lucide-react";

interface LeadCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadCaptureModal = ({ open, onOpenChange }: LeadCaptureModalProps) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [facilityName, setFacilityName] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("leads" as any).insert({
      full_name: fullName,
      email,
      phone: phone || null,
      facility_name: facilityName || null,
    } as any);

    setLoading(false);

    if (error) {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
      return;
    }

    toast({ title: "You're in!", description: "Redirecting you to start your free trial..." });
    onOpenChange(false);
    setTimeout(() => {
      window.location.href = "https://easyrcfe.lovable.app";
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">Start Your Free Trial</DialogTitle>
          <DialogDescription>
            Enter your details and we'll get you set up in under 2 minutes.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input id="fullName" required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Jane Smith" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@facility.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 123-4567" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="facility">Facility Name</Label>
            <Input id="facility" value={facilityName} onChange={(e) => setFacilityName(e.target.value)} placeholder="Sunrise Care Home" />
          </div>
          <Button type="submit" className="w-full gap-2" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" size={16} /> : <ArrowRight size={16} />}
            {loading ? "Setting up..." : "Start Free Trial"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">No credit card required. 14-day free trial.</p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;
