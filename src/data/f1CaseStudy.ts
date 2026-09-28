import type { CaseSection } from "./caseStudies";

export const f1Overview = [
  { label: "Project", value: "SCUDERIA 16 · F1 dashboard" },
  { label: "Scope", value: "Frontend, data pipeline, forecasting" },
  { label: "Tools", value: "JavaScript · Python · pandas · FastF1 · Chart.js" },
];

export const f1Sections: CaseSection[] = [
  {
    id: "problem",
    title: "A finishing position is only the start",
    paragraphs: [
      "Race results tell you who finished where. Understanding how a race unfolded means looking across lap times, tire choices, telemetry, and the wider season. SCUDERIA 16 brings those views together in a Ferrari-focused dashboard, with Charles Leclerc as its editorial center.",
      "The design challenge is to give a fan a useful starting point without putting every dataset on one screen. Race Control establishes the season context; dedicated calendar, results, analysis, and predictor pages let visitors choose how far to dig.",
    ],
  },
  {
    id: "data",
    title: "From race sessions to usable data",
    paragraphs: [
      "A Python pipeline uses FastF1 to retrieve schedules, race results, lap data, and telemetry. pandas converts lap times to seconds and groups tire stints into compound and lap-range records. The outputs are JSON files that the browser can request independently.",
      "The analysis export includes a fastest-lap leaderboard and speed, throttle, brake, and gear data for selected drivers. Telemetry is sampled at every third row, keeping the exported dataset smaller while giving up some detail. Driver career statistics are fetched separately from the official Formula 1 profile.",
      "Updates are scheduled daily, with six-hour intervals on Saturdays, Sundays, and Mondays. Race-result requests wait until six hours after the scheduled start. This is periodically refreshed data, rather than a live timing feed.",
    ],
  },
  {
    id: "approach",
    title: "Do the heavy work before the page loads",
    paragraphs: [
      "The site separates data preparation from the visitor experience. GitHub Actions runs the Python pipeline, builds the next-race forecast, and validates generated files before committing changes. GitHub Pages serves the HTML, CSS, JavaScript, and JSON; there is no application server handling each visit.",
      "On the analysis page, a race selector connects fastest laps, lap-time charts, tire strategy, and telemetry comparisons. Chart.js renders the charts, while page-specific JavaScript loads the relevant files. The frontend is plain JavaScript, without a React application layer.",
      "The predictor turns forecasts into a constrained team-building interaction: select up to five drivers and two constructors, choose a boosted driver, and see projected points alongside the remaining budget. A custom budget is saved locally, so visitors can return to the same spending constraint.",
    ],
  },
  {
    id: "decisions",
    title: "Simple enough to inspect. Useful enough to explore.",
    paragraphs: [
      "The forecast is a weighted heuristic. Recent form contributes 45% of the base score, season form 20%, constructor form 20%, and previous-season results at the same circuit 15%, with an additional reliability penalty. Sprint and qualifying results adjust the score when available. Missing circuit history falls back to recent form.",
      "Keeping the formula explicit makes its behavior inspectable. The tradeoff is that these weights and the displayed confidence score are hand-defined; they should not be read as calibrated probabilities or evidence of predictive accuracy. Fantasy projections also use assumptions and manually maintained price tables.",
      "Static JSON keeps deployment straightforward and removes upstream API calls from the page-load path. In exchange, freshness depends on the update workflow. Validation catches missing fields, insufficient driver or team records, duplicate predicted finishes, and a forecast assigned to the wrong round. Those checks provide a publishing gate, but do not prove every race is complete or every value is correct.",
    ],
  },
  {
    id: "result",
    title: "One site, several ways into a race",
    paragraphs: [
      "The deployed site connects season context, historical results, race analysis, and fantasy planning in one experience. Visitors can move from a race result into its analysis, compare performance visually, and explore the budget consequences of a team selection.",
      "The concrete outcome is a working static application with an automated data-refresh workflow and a forecast whose inputs are visible in the repository.",
    ],
  },
  {
    id: "reflection",
    title: "What I’d improve next",
    paragraphs: [
      "The next evaluation would backtest forecasts one race at a time, using only information available before each prediction, and compare them with simple baselines such as recent finishing order. That would help distinguish useful signals from assumptions that merely look plausible.",
      "I would also add visible timestamps and per-dataset freshness states, broaden validation to check race coverage, and make failed or missing chart data more explicit. Finally, testing concrete tasks—finding a tire-strategy difference or building a team within budget—would show where the interface supports understanding and where it still asks too much of the visitor.",
    ],
  },
];
