export interface ModuleMeta {
  slug: string;
  title: string;
  description: string;
  content?: React.ReactNode;
  hasComprehensiveContent?: boolean;
}

export const modules: ModuleMeta[] = [
  {
    slug: "pre-filing",
    title: "Pre-Filing Considerations", 
    description:
      "Decide if legal action is right for you and gather essential documents.",
    hasComprehensiveContent: true,
  },
  {
    slug: "starting-case",
    title: "Starting Your Case / Initial Pleadings",
    description: "Find the correct court, complete initial forms, and file them.",
  },
  {
    slug: "responding",
    title: "Responding to Pleadings",
    description: "Understand served documents and file your timely response.",
  },
  {
    slug: "first-appearance",
    title: "First Court Appearances / Next Steps",
    description: "Know what to expect at initial hearings and case conferences.",
  },
  {
    slug: "disclosures",
    title: "Initial Disclosures & Basic Discovery",
    description: "Exchange required information and documents effectively.",
  },
  {
    slug: "temporary-orders",
    title: "Temporary Orders",
    description:
      "Seek interim custody, support, or property arrangements while the case proceeds.",
  },
  {
    slug: "mediation",
    title: "Mediation & Alternative Dispute Resolution (ADR)",
    description: "Explore collaborative options to resolve disputes without trial.",
  },
  {
    slug: "trial-prep",
    title: "Preparing for Hearings & Trial",
    description: "Organize evidence, witnesses, and present your strongest case.",
  },
  {
    slug: "modifications",
    title: "Post-Decree Modifications",
    description: "Learn when and how to modify existing court orders.",
  },
  {
    slug: "enforcement-appeals",
    title: "Enforcement & Appeals",
    description: "Ensure compliance with orders and challenge unfavorable rulings.",
  },
]; 