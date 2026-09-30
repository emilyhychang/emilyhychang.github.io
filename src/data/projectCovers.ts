import type { ProjectId } from "./portfolio";
export const projectCovers: Record<
  ProjectId,
  { src: string; alt: string; label: string }
> = {
  watchtogether: {
    src: "covers/watchtogether.png",
    alt: "WatchTogether shared movie-room concept with synchronized playback controls.",
    label: "Product concept",
  },
  f1: {
    src: "f1-analysis.png",
    alt: "Formula 1 Explorer race analysis dashboard.",
    label: "Live application",
  },
  cornerstone: {
    src: "cornerstone/implementation.png",
    alt: "Mud Lily Clay website redesign with pottery offerings and studio photography.",
    label: "Client website",
  },
  lma: {
    src: "covers/lma.png",
    alt: "Marketing workflow connecting content, SEO, analytics, and insight.",
    label: "Illustrative workflow",
  },
  healthcare: {
    src: "healthcare/life-expectancy.webp",
    alt: "Healthcare expenditure and life expectancy scatterplot from the analysis notebook.",
    label: "Data analysis",
  },
  "soft-drinks": {
    src: "behavioral/materials.webp",
    alt: "Control and treatment survey designs for the soft-drink popularity experiment.",
    label: "Research materials",
  },
  pantrypal: {
    src: "covers/pantrypal.png",
    alt: "PantryPal ingredient inclusion and exclusion workflow preview.",
    label: "Prototype concept",
  },
  "smart-basket": {
    src: "smart-basket/before-after-balance-predictor.png",
    alt: "Smart Basket Balance Predictor mobile screens before and after usability revisions.",
    label: "UX prototype",
  },
};
