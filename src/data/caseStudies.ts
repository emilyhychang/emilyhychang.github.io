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
      id: "problem",
      title: "The problem",
      prompt:
        "[Add the user problem, supporting evidence, and the context of long-distance movie nights.]",
    },
    {
      id: "approach",
      title: "From idea to shared experience",
      prompt:
        "[Add the product insight, MVP scope, implementation, and iteration process.]",
    },
    {
      id: "decisions",
      title: "Decisions & tradeoffs",
      prompt: "[Add verified decisions from the project.]",
    },
    {
      id: "result",
      title: "The result",
      prompt: "[Add outcome and supporting evidence.]",
    },
    {
      id: "reflection",
      title: "What I’d do next",
      prompt: "[Add lessons, open questions, and the next experiment.]",
    },
  ],
  healthcare: healthcareSections,
  pantrypal: pantrypalSections,
  "smart-basket": smartBasketSections,
  "soft-drinks": behavioralSections,
  f1: f1Sections,
  cornerstone: cornerstoneSections,
  lma: [
    {
      id: "problem",
      title: "Business context & problem",
      prompt: "[Add the business need, constraints, and baseline.]",
    },
    {
      id: "analysis",
      title: "What I analyzed",
      prompt: "[Add data sources, questions, and findings.]",
    },
    {
      id: "approach",
      title: "What I changed / built",
      prompt: "[Add verified changes to content, systems, or processes.]",
    },
    {
      id: "automation",
      title: "Automation",
      prompt: "[Add the actual workflow, tools, and time-saving evidence.]",
    },
    {
      id: "decisions",
      title: "Content & SEO",
      prompt: "[Add content decisions, SEO experiments, and rationale.]",
    },
    {
      id: "result",
      title: "Measurement & results",
      prompt: "[Add measurement approach and verified metrics.]",
    },
    {
      id: "reflection",
      title: "Learnings",
      prompt: "[Add what worked, what did not, and the next experiment.]",
    },
  ],
};
export const decisionQuestions = [
  "Why synchronized playback first?",
  "What belongs in the MVP?",
  "What did I deliberately leave out?",
];
