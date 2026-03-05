import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-heading text-2xl text-primary">EasyRCFE</a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Benefits</a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <Button size="sm" asChild><a href="https://easyrcfe.lovable.app">Get Started</a></Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 py-4 flex flex-col gap-3">
          <a href="#features" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Features</a>
          <a href="#benefits" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Benefits</a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Pricing</a>
          <Button size="sm" className="w-fit" asChild><a href="https://easyrcfe.lovable.app">Get Started</a></Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
