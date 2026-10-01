export const lenses = [
  "All",
  "Product",
  "Engineering",
  "Data",
  "Marketing",
  "Research",
] as const;
export type Lens = (typeof lenses)[number];
export type ProjectId =
  | "watchtogether"
  | "f1"
  | "cornerstone"
  | "lma"
  | "healthcare"
  | "soft-drinks"
  | "pantrypal"
  | "smart-basket";
export interface Project {
  id: ProjectId;
  number: string;
  title: string;
  statement: string;
  tags: string[];
  lenses: Lens[];
}
export const projects: Project[] = [
  {
    id: "watchtogether",
    number: "01",
    title: "WatchTogether",
    statement: "A shared movie room for long-distance nights in.",
    tags: ["Product", "Engineering", "UX"],
    lenses: ["Product", "Engineering"],
  },
  {
    id: "f1",
    number: "02",
    title: "Formula 1 Explorer",
    statement: "Compare F1 races, lap times, and tire strategies.",
    tags: ["Engineering", "Data", "Product"],
    lenses: ["Engineering", "Data", "Product"],
  },
  {
    id: "cornerstone",
    number: "03",
    title: "Cornerstone",
    statement: "Redesigning a pottery studio’s website and booking flow.",
    tags: ["Strategy", "Analytics", "Client"],
    lenses: ["Product", "Data", "Research"],
  },
  {
    id: "lma",
    number: "04",
    title: "LMA Marketing & Advertising",
    statement: "Automating the CSV cleanup that took over an hour per dataset.",
    tags: ["Engineering", "Automation", "Data"],
    lenses: ["Marketing", "Data", "Engineering"],
  },
  {
    id: "healthcare",
    number: "05",
    title: "Healthcare Spending",
    statement:
      "Exploring how healthcare spending relates to outcomes across OECD countries.",
    tags: ["Data", "Research", "Analytics"],
    lenses: ["Data", "Research"],
  },
  {
    id: "soft-drinks",
    number: "06",
    title: "Soft Drinks & Behavior",
    statement: "Testing whether a popularity label changes what people choose.",
    tags: ["Research", "Behavior", "Data"],
    lenses: ["Research", "Data", "Marketing"],
  },
  {
    id: "pantrypal",
    number: "07",
    title: "PantryPal",
    statement: "Finding recipes that fit the ingredients you want to use.",
    tags: ["Product", "Engineering", "Data"],
    lenses: ["Product", "Engineering", "Data", "Research"],
  },
  {
    id: "smart-basket",
    number: "08",
    title: "Smart Basket",
    statement: "Turning EBT balances into grocery plans.",
    tags: ["Product", "UX", "Research"],
    lenses: ["Product", "Research"],
  },
];

// Editorial relevance order; revisit as project scope develops.
export const projectOrder: Record<Exclude<Lens, "All">, ProjectId[]> = {
  Product: [
    "smart-basket",
    "watchtogether",
    "pantrypal",
    "cornerstone",
    "f1",
    "soft-drinks",
    "lma",
    "healthcare",
  ],
  Engineering: [
    "f1",
    "pantrypal",
    "watchtogether",
    "lma",
    "healthcare",
    "cornerstone",
    "soft-drinks",
    "smart-basket",
  ],
  Data: [
    "healthcare",
    "f1",
    "pantrypal",
    "soft-drinks",
    "lma",
    "cornerstone",
    "watchtogether",
    "smart-basket",
  ],
  Marketing: [
    "lma",
    "soft-drinks",
    "cornerstone",
    "f1",
    "watchtogether",
    "healthcare",
    "pantrypal",
    "smart-basket",
  ],
  Research: [
    "smart-basket",
    "soft-drinks",
    "healthcare",
    "pantrypal",
    "cornerstone",
    "f1",
    "watchtogether",
    "lma",
  ],
};
export function projectsForLens(lens: Lens): Project[] {
  if (lens === "All") return projects;
  return [...projects].sort(
    (a, b) =>
      projectOrder[lens].indexOf(a.id) - projectOrder[lens].indexOf(b.id),
  );
}
// Replace null values with verified destinations; unavailable links are never fabricated.
export const links: Record<
  | "resume"
  | "email"
  | "linkedin"
  | "github"
  | "f1Live"
  | "f1Github"
  | "healthcareGithub"
  | "pantrypalGithub"
  | "pantrypalDemo"
  | "smartBasketCase"
  | "lmaGithub",
  string | null
> = {
  lmaGithub: "https://github.com/emilyhychang/LMA-data-automation",
  smartBasketCase:
    "https://recondite-asteroid-9e8.notion.site/Turning-EBT-Balances-Into-Grocery-Plans-918840d0da8582378b5701159c961423",
  resume: `${import.meta.env.BASE_URL}Emily_Chang_Resume.pdf`,
  email: "mailto:emilyhychang@gmail.com",
  linkedin: "https://www.linkedin.com/in/emilyhychang/",
  github: "https://github.com/emilyhychang",
  healthcareGithub:
    "https://github.com/emilyhychang/OECD_healthcare_spending_analysis",
  pantrypalGithub: "https://github.com/emilyhychang/PantryPal-Ai-m-Your-Chef",
  pantrypalDemo: "https://youtu.be/oykcuiW10n4",
  f1Live: "https://emilyhychang.github.io/f1-site/",
  f1Github: "https://github.com/emilyhychang/f1-site",
};
export const toolGroups = [
  { title: "Build", items: ["Python", "JavaScript", "React", "Git"] },
  { title: "Analyze", items: ["SQL", "Excel", "Tableau", "Power BI", "Google Analytics"] },
  { title: "Create", items: ["Figma", "Adobe", "Canva"] },
];
