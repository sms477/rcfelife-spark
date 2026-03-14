import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { Lock, Loader2, Download } from "lucide-react";

interface Lead {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  facility_name: string | null;
  created_at: string;
}

const Admin = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error: fnError } = await supabase.functions.invoke("get-leads", {
      headers: { "x-admin-password": password },
    });

    setLoading(false);

    if (fnError || (data && data.error)) {
      setError("Invalid password");
      return;
    }

    setAuthenticated(true);
    setLeads(data as Lead[]);
  };

  const exportCSV = () => {
    const headers = ["Name", "Email", "Phone", "Facility", "Date"];
    const rows = leads.map((l) => [
      l.full_name,
      l.email,
      l.phone || "",
      l.facility_name || "",
      new Date(l.created_at).toLocaleDateString(),
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "easyrcfe-leads.csv";
    a.click();
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
          <div className="flex items-center gap-2 justify-center text-foreground mb-2">
            <Lock size={20} />
            <h1 className="font-heading text-2xl">Admin Access</h1>
          </div>
          <Input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-sm text-destructive text-center">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" size={16} /> : "View Leads"}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-heading text-3xl text-foreground">Leads ({leads.length})</h1>
          <Button variant="outline" className="gap-2" onClick={exportCSV}>
            <Download size={16} /> Export CSV
          </Button>
        </div>

        {leads.length === 0 ? (
          <p className="text-muted-foreground text-center py-12">No leads yet. They'll appear here when someone signs up for a trial.</p>
        ) : (
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Facility</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell className="font-medium">{lead.full_name}</TableCell>
                    <TableCell>{lead.email}</TableCell>
                    <TableCell>{lead.phone || "—"}</TableCell>
                    <TableCell>{lead.facility_name || "—"}</TableCell>
                    <TableCell>{new Date(lead.created_at).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
