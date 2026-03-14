
CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  facility_name text,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON public.leads FOR INSERT
  WITH CHECK (true);

CREATE POLICY "No public read"
  ON public.leads FOR SELECT
  USING (false);
