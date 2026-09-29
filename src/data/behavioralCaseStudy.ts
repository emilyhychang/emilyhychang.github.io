import type { CaseSection } from "./caseStudies";

export const behavioralOverview = [
  { label: "Context", value: "UC San Diego · MGT 160" },
  { label: "Study", value: "108 participants · One week" },
  {
    label: "Methods",
    value: "Qualtrics · Random assignment · Two-sample t-tests",
  },
];

export const behavioralSections: CaseSection[] = [
  {
    id: "problem",
    title: "Does popularity change a preference?",
    paragraphs: [
      "A ‘Most Popular’ label is a small piece of an interface, but it asks people to consider what others choose. I explored whether that cue could influence a familiar decision: which soft drink to select.",
      "For my MGT 160 research project at UC San Diego, I tested whether adding a popularity statement to Coke increased its selection in an online survey. The primary hypothesis was that participants who saw the statement would choose Coke more often than participants who saw an unlabeled list.",
    ],
  },
  {
    id: "research",
    title: "Two versions of the same choice",
    paragraphs: [
      "The study used a between-subjects design: each participant saw one survey condition. Qualtrics randomly assigned participants with a 50/50 allocation probability. The final presentation reports 108 participants, with 50 assigned to control and 58 to treatment, over one week.",
      "Both conditions offered five beverages. The treatment added a statement describing Coke as the most popular option among Americans and referring to media sources. The control presented the beverages without a popularity statement. Participants selected the beverage they would be most likely to consume; this measured stated choice, not an actual purchase.",
    ],
  },
  {
    id: "approach",
    title: "Measuring choice and survey duration",
    paragraphs: [
      "The primary outcome coded Coke selection as 1 and any other beverage as 0. I compared the average selection rate across conditions using a two-sample t-test.",
      "For the engagement analysis, survey durations above 120 seconds were excluded. The available measure covered the entire survey, so it could not isolate time spent deciding on a beverage. No personal identifiers, baseline characteristics, or subgroup variables were collected.",
    ],
  },
  {
    id: "result",
    title: "A higher selection rate, with uncertainty",
    paragraphs: [
      "The final analysis reports Coke selection rates of 20.4% in control and 31.7% in treatment, a reported difference of 11.26 percentage points. The direction matched the primary hypothesis, but the two-sample t-test was not statistically significant (t = 1.48, p = 0.142). This study did not establish a reliable effect of the popularity statement.",
      "Average survey duration was 41.78 seconds in control and 40.24 seconds in treatment. That 1.54-second difference was also not statistically significant (t = 0.384, p = 0.702). The data did not provide evidence of a change in engagement time.",
      "These figures are reported from the final presentation. Its rounded choice rates do not map exactly to whole-person counts using the listed group sizes; the underlying response data would be needed to reconcile the analysis denominators.",
    ],
  },
  {
    id: "limitations",
    title: "What the experiment could tell me",
    paragraphs: [
      "Participants were students in one UCSD course, which limits how broadly the findings can be applied. Familiarity with behavioral economics or awareness of the class project may also have influenced responses. I reached out to professors to recruit from other classes, but did not receive responses.",
      "Although the intended design held the choice list constant, the presentation’s survey screenshots show different beverage orders. The treatment also combined a popularity claim with references to sources. Those details complicate attributing any difference solely to a popularity label.",
      "Without baseline measures, I could not check balance in existing brand preferences or explore differences across participant groups. The sample also left considerable uncertainty around the observed effect.",
    ],
  },
  {
    id: "reflection",
    title: "Designing a stronger next test",
    paragraphs: [
      "This project made the difference between an observed pattern and a supported conclusion concrete. A higher treatment average can motivate another experiment, but it is not enough to recommend a label as a proven way to increase selection.",
      "For a follow-up, I would recruit a broader sample, plan sample size around a meaningful effect, and keep beverage order consistent or explicitly randomize and record it. I would separate the popularity statement from the source references and capture question-level timing. That would make the next test more useful for evaluating how a specific interface cue affects choice.",
    ],
  },
];
