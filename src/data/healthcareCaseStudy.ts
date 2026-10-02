import type { CaseSection } from "./caseStudies";
export const healthcareOverview = [
  { label: "Scope", value: "OECD countries · 2000 to 2019" },
  { label: "Sources", value: "OECD · World Bank" },
  { label: "Tools", value: "Regression Modeling · Python · pandas · seaborn · SciPy · NumPy · matplotlib" },
];
export const healthcareSections: CaseSection[] = [
  {
    id: "problem",
    title: "What does more spending buy?",
    paragraphs: [
      "Healthcare spending is easy to compare as a single number. Quality is harder to define. I explored how spending related to four measures: avoidable mortality, average hospital stay, medical technology availability, and life expectancy at birth.",
      "My initial hypothesis was that higher expenditure would be associated with better outcomes. The analysis focused on 2000 to 2019, ending before the pandemic introduced major changes in health outcomes and spending.",
    ],
  },
  {
    id: "data",
    title: "Making separate datasets comparable",
    paragraphs: [
      "I combined OECD health indicators with World Bank spending-per-capita and life-expectancy data. The spending measures captured two perspectives: current US dollars per person and healthcare expenditure as a share of GDP.",
      "I wrote reusable cleaning functions to standardize column names, retain country codes and years, convert measures into comparable table structures, and restrict the time period. World Bank tables required reshaping from year columns into country-year rows.",
      "After merging, I checked coverage as well as empty values. A table can have no null entries and still omit entire country-years. The notebook removed countries missing more than nine years of coverage before the final analysis, whose ranking output contains 30 countries.",
    ],
  },
  {
    id: "approach",
    title: "Building a combined ranking",
    paragraphs: [
      "Exploratory plots compared spending with individual indicators before I constructed a combined ranking. I averaged the available observations by country, ranked each indicator, and assigned lower ranks to the study’s preferred direction: lower mortality and shorter stays, higher life expectancy and more available technology.",
      "The composite weighted indicator ranks using each indicator’s standard deviation relative to its mean, normalized across the four measures. This gave more weight to indicators that varied more across countries. The resulting ranking is specific to this project and is not an established clinical measure of quality.",
      "I then used linear regression modeling to compare the composite outcome ranking with healthcare expenditure, using scatterplots, fitted regression lines, and R² to examine the strength of each relationship.",
    ],
  },
  {
    id: "result",
    title: "The answer depended on the measure",
    paragraphs: [
      "The exploratory spending-versus-life-expectancy plot showed a positive association. The final composite comparisons were much weaker: the notebook reported R² values of approximately 0.09 for expenditure as a share of GDP and 0.05 for expenditure per capita.",
      "The low R² values mean the linear fits explain little of the variation in this composite ranking. They do not establish that healthcare spending has no effect, and R² alone does not establish statistical significance. The project is an observational comparison, so it cannot separate spending from factors such as wealth, population health, or how services are organized.",
    ],
  },
  {
    id: "limitations",
    title: "Limits of the ranking",
    paragraphs: [
      "Shorter hospital stays and greater technology availability are imperfect proxies for quality. A shorter stay can reflect different practices or patient needs, and equipment counts do not directly measure access or outcomes. Aggregating categories and averaging across years also hides differences that could matter.",
      "The notebook defines both equal and variability-based weights, but its saved comparison passes the variability-based weights into both calculations. I therefore treat the displayed results as one weighted analysis; they do not demonstrate robustness to equal weighting.",
      "The per-capita spending source uses current US dollars rather than a purchasing-power-adjusted measure. Country coverage, price differences, and the composite’s weighting choices all limit comparisons.",
    ],
  },
  {
    id: "reflection",
    title: "What I’d change in the analysis",
    paragraphs: [
      "Reusable cleaning functions made it easier to work across datasets. Checking country-year coverage and defining each indicator took more judgment: both affected which comparisons I could make.",
      "Next, I would correct and rerun the weighting comparison, audit category aggregation and country-year joins, and compare purchasing-power-adjusted spending. I would also examine outcomes separately and account for country and year differences before making stronger claims about spending and performance.",
    ],
  },
];
