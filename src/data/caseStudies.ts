import type { ProjectId } from "./portfolio";
export interface CaseSection {
  id: string;
  title: string;
  prompt: string;
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
  f1: [
    {
      id: "problem",
      title: "The problem",
      prompt: "[Add the audience, problem, and intended experience.]",
    },
    {
      id: "data",
      title: "The data",
      prompt:
        "[Add actual data sources, transformations, limitations, and freshness.]",
    },
    {
      id: "approach",
      title: "Architecture & features",
      prompt:
        "[Add the implemented architecture, features, and a technical diagram.]",
    },
    {
      id: "decisions",
      title: "Technical challenges & decisions",
      prompt:
        "[Add a specific implementation challenge, alternatives, and the chosen tradeoff.]",
    },
    {
      id: "result",
      title: "The result",
      prompt: "[Add verified results and screenshots.]",
    },
    {
      id: "reflection",
      title: "What I’d improve",
      prompt: "[Add technical lessons and future improvements.]",
    },
  ],
  cornerstone: [
    {
      id: "problem",
      title: "The question & context",
      prompt: "[Add a sanitized client question and business context.]",
    },
    {
      id: "research",
      title: "Research",
      prompt: "[Add research methods, sources, and scope.]",
    },
    {
      id: "approach",
      title: "Analysis → insight",
      prompt: "[Add analysis, supporting evidence, and the resulting insight.]",
    },
    {
      id: "decisions",
      title: "The recommendation",
      prompt: "[Add the recommendation, alternatives, and business rationale.]",
    },
    {
      id: "presentation",
      title: "The client presentation",
      prompt: "[Add sanitized presentation slides approved for sharing.]",
    },
    {
      id: "result",
      title: "Outcome & reflection",
      prompt: "[Add a client-approved outcome and personal reflection.]",
    },
  ],
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
