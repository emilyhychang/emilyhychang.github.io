import { lmaSections } from "./lmaCaseStudy";
import { smartBasketSections } from "./smartBasketCaseStudy";
import { healthcareSections } from "./healthcareCaseStudy";
import { pantrypalSections } from "./pantrypalCaseStudy";
import { behavioralSections } from "./behavioralCaseStudy";
import type { ProjectId } from "./portfolio";
import { f1Sections } from "./f1CaseStudy";
import { cornerstoneSections } from "./cornerstoneCaseStudy";
export interface CaseSection {
  id: string;
  title: string;
  prompt?: string;
  paragraphs?: string[];
}
export const caseStudies: Record<ProjectId, CaseSection[]> = {
  watchtogether: [
    {
      id: "progress",
      title: "Case study coming soon",
      paragraphs: [
        "I’m still building WatchTogether. This preview shows the shared movie-room concept; I’ll add the build process and results when the case study is ready.",
      ],
    },
  ],
  healthcare: healthcareSections,
  pantrypal: pantrypalSections,
  "smart-basket": smartBasketSections,
  "soft-drinks": behavioralSections,
  f1: f1Sections,
  cornerstone: cornerstoneSections,
  lma: lmaSections,
};
