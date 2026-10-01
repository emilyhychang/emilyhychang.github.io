import type { CaseSection } from "./caseStudies";

export const f1Overview = [
  { label: "Project", value: "SCUDERIA 16 · F1 dashboard" },
  { label: "Scope", value: "Frontend, data pipeline, forecasting" },
  { label: "Tools", value: "JavaScript · Python · pandas · FastF1 · Chart.js" },
];

export const f1Sections: CaseSection[] = [
  {
    id: "problem",
    title: "Looking beyond the finishing order",
    paragraphs: [
      "I built SCUDERIA 16 to compare lap times, tire choices, and telemetry alongside race results. The dashboard focuses on Ferrari and Charles Leclerc, with season information for context.",
      "I split the site into pages so fans could start with the season overview in Race Control, then open the calendar, results, analysis, or predictor as needed.",
    ],
  },
  {
    id: "data",
    title: "Preparing the race data",
    paragraphs: [
      "A Python pipeline uses FastF1 to retrieve schedules, race results, lap data, and telemetry. pandas converts lap times to seconds and groups tire stints into compound and lap-range records. The outputs are JSON files that the browser can request independently.",
      "The analysis export includes a fastest-lap leaderboard and speed, throttle, brake, and gear data for selected drivers. Telemetry is sampled at every third row, keeping the exported dataset smaller while giving up some detail. Driver career statistics are fetched separately from the official Formula 1 profile.",
      "Updates are scheduled daily, with six-hour intervals on Saturdays, Sundays, and Mondays. Race-result requests wait until six hours after the scheduled start. The site refreshes on this schedule; it does not provide live timing.",
    ],
  },
  {
    id: "approach",
    title: "Processing data before publishing",
    paragraphs: [
      "The site separates data preparation from the visitor experience. GitHub Actions runs the Python pipeline, builds the next-race forecast, and validates generated files before committing changes. GitHub Pages serves the HTML, CSS, JavaScript, and JSON; there is no application server handling each visit.",
      "On the analysis page, a race selector connects fastest laps, lap-time charts, tire strategy, and telemetry comparisons. Chart.js renders the charts, while page-specific JavaScript loads the relevant files. The frontend is plain JavaScript, without a React application layer.",
      "The predictor lets visitors build a fantasy team: select up to five drivers and two constructors, choose a boosted driver, and see projected points alongside the remaining budget. A custom budget is saved locally, so visitors can keep using the same budget.",
    ],
  },
  {
    id: "decisions",
    title: "How the forecast works",
    paragraphs: [
      "The forecast is a weighted heuristic. Recent form contributes 45% of the base score, season form 20%, constructor form 20%, and previous-season results at the same circuit 15%, with an additional reliability penalty. Sprint and qualifying results adjust the score when available. Missing circuit history falls back to recent form.",
      "The formula is visible in the code, but I chose the weights and confidence score manually. The confidence score is not a calibrated probability, and I have not measured forecast accuracy. Fantasy projections also use assumptions and manually maintained price tables.",
      "Static JSON keeps deployment straightforward and removes upstream API calls from the page-load path. In exchange, freshness depends on the update workflow. Validation catches missing fields, insufficient driver or team records, duplicate predicted finishes, and a forecast assigned to the wrong round. These checks can block a bad update, though they do not catch every missing race or incorrect value.",
    ],
  },
  {
    id: "result",
    title: "The finished site",
    paragraphs: [
      "Visitors can open a historical race result, compare drivers on the analysis page, or plan a fantasy team within a budget. The season overview connects these pages.",
      "The site is deployed on GitHub Pages. Its data updates automatically, and the repository includes the forecast inputs.",
    ],
  },
  {
    id: "reflection",
    title: "What I’d improve next",
    paragraphs: [
      "The next evaluation would backtest forecasts one race at a time, using only information available before each prediction, and compare them with simple baselines such as recent finishing order. That comparison would show whether the forecast improves on a simple baseline.",
      "I would add timestamps for each dataset and clearer messages when chart data is missing or fails to load. Validation also needs to check race coverage. To test the interface, I would ask fans to find a tire-strategy difference or build a team within budget and watch where they get stuck.",
    ],
  },
];
