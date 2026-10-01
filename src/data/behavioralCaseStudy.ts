import type { CaseSection } from "./caseStudies";

export const behavioralOverview = [
  { label: "Context", value: "UC San Diego · MGT 160" },
  { label: "Study", value: "108 participants · One week" },
  {
    label: "Methods",
    value: "A/B Testing · Random assignment · Two-sample t-tests",
  },
];

export const behavioralSections: CaseSection[] = [
  {
    id: "problem",
    title: "Does popularity change a preference?",
    paragraphs: [
      "I wanted to know whether calling a soft drink ‘Most Popular’ would make people more likely to choose it.",
      "For my MGT 160 research project at UC San Diego, I tested whether adding a popularity statement to Coke increased its selection in an online survey. The primary hypothesis was that participants who saw the statement would choose Coke more often than participants who saw an unlabeled list.",
    ],
  },
  {
    id: "research",
    title: "A/B Testing the popularity effect",
    paragraphs: [
      "The study used a between-subjects design: each participant saw one survey condition. Qualtrics randomly assigned participants with a 50/50 allocation probability. Over one week, the study had 108 participants: 50 in control and 58 in treatment, as reported in the final presentation.",
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
    title: "More Coke selections, but no significant result",
    paragraphs: [
      "The final analysis reports Coke selection rates of 20.4% in control and 31.7% in treatment, a reported difference of 11.26 percentage points. The direction matched the primary hypothesis, but the two-sample t-test was not statistically significant (t = 1.48, p = 0.142). This study did not establish a reliable effect of the popularity statement.",
      "Average survey duration was 41.78 seconds in control and 40.24 seconds in treatment. That 1.54-second difference was also not statistically significant (t = 0.384, p = 0.702). The data did not provide evidence of a change in engagement time.",
      "These figures come from my final presentation. The rounded choice rates do not match whole-person counts for the listed group sizes. I would need to check the original responses to resolve that discrepancy.",
    ],
  },
  {
    id: "limitations",
    title: "Limits of the study",
    paragraphs: [
      "Participants were students in one UCSD course, which limits how broadly the findings can be applied. Familiarity with behavioral economics or awareness of the class project may also have influenced responses. I reached out to professors to recruit from other classes, but did not receive responses.",
      "Although the intended design held the choice list constant, the presentation’s survey screenshots show different beverage orders. The treatment also combined a popularity claim with references to sources. Both the beverage order and the source references could have affected responses, making it harder to isolate the label’s effect.",
      "Without baseline measures, I could not check balance in existing brand preferences or explore differences across participant groups. The sample also left considerable uncertainty around the observed effect.",
    ],
  },
  {
    id: "reflection",
    title: "Designing a stronger next test",
    paragraphs: [
      "The higher selection rate gives me a reason to test the label again. With this sample and these design limitations, I cannot recommend it as a proven way to change people’s choices.",
      "For a follow-up, I would recruit a broader sample, plan sample size around a meaningful effect, and keep beverage order consistent or explicitly randomize and record it. I would separate the popularity statement from the source references and capture question-level timing. These changes would help isolate the label’s effect.",
    ],
  },
];
