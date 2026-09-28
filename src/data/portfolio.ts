export const lenses = [
  "All",
  "Product",
  "Engineering",
  "Data",
  "Marketing",
] as const;
export type Lens = (typeof lenses)[number];
export type ProjectId = "watchtogether" | "f1" | "cornerstone" | "lma";
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
    statement: "Making long-distance movie nights actually feel together.",
    tags: ["Product", "Engineering", "UX"],
    lenses: ["Product", "Engineering"],
  },
  {
    id: "f1",
    number: "02",
    title: "Formula 1 Explorer",
    statement: "Turning race data into an interactive experience.",
    tags: ["Engineering", "Data", "Product"],
    lenses: ["Engineering", "Data", "Product"],
  },
  {
    id: "cornerstone",
    number: "03",
    title: "Cornerstone",
    statement: "Turning ambiguity into strategy.",
    tags: ["Strategy", "Analytics", "Client"],
    lenses: ["Product", "Data"],
  },
  {
    id: "lma",
    number: "04",
    title: "LMA Marketing & Advertising",
    statement:
      "Using data, content, and automation to make marketing work smarter.",
    tags: ["Marketing", "Automation", "Analytics"],
    lenses: ["Marketing", "Data"],
  },
];
// Replace null values with verified destinations; unavailable links are never fabricated.
export const links: Record<
  "resume" | "email" | "linkedin" | "github" | "f1Live" | "f1Github",
  string | null
> = {
  resume: `${import.meta.env.BASE_URL}Emily_Chang_Resume.pdf`,
  email: "mailto:emilyhychang@gmail.com",
  linkedin: "https://www.linkedin.com/in/emilyhychang/",
  github: "https://github.com/emilyhychang",
  f1Live: "https://emilyhychang.github.io/f1-site/",
  f1Github: "https://github.com/emilyhychang/f1-site",
};
export const toolGroups = [
  { title: "Build", items: ["Python", "JavaScript", "React", "Git"] },
  { title: "Analyze", items: ["SQL", "Excel", "Tableau", "Google Analytics"] },
  { title: "Create", items: ["Figma", "Adobe", "Canva"] },
];
