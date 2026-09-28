export function F1CaseVisual() {
  return (
    <figure className="f1-case-figure">
      <img
        src={`${import.meta.env.BASE_URL}images/f1-analysis.png`}
        width="1440"
        height="1000"
        alt="SCUDERIA 16 analysis page with a race selector, fastest-lap leaderboard, and race analysis charts."
      />
      <figcaption>SCUDERIA 16 · Analysis page · Live-site capture</figcaption>
    </figure>
  );
}
export function F1Architecture() {
  const steps = [
    [
      "Collect",
      "FastF1 + Formula 1 profile",
      "Schedules, sessions, telemetry, career statistics",
    ],
    [
      "Prepare",
      "Python + pandas",
      "Clean lap data, group stints, build forecast",
    ],
    ["Validate", "GitHub Actions", "Check generated records before committing"],
    [
      "Explore",
      "GitHub Pages + JavaScript",
      "Fetch static JSON and render interactive views",
    ],
  ];
  return (
    <figure className="f1-architecture">
      <figcaption className="eyebrow">From source to screen</figcaption>
      <ol>
        {steps.map(([label, title, detail], index) => (
          <li key={label}>
            <span className="eyebrow">
              0{index + 1} / {label}
            </span>
            <strong>{title}</strong>
            <p>{detail}</p>
            {index < steps.length - 1 && (
              <span className="pipeline-arrow" aria-hidden="true">
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>
      <p className="architecture-note">
        Scheduled processing → versioned JSON → browser interaction
      </p>
    </figure>
  );
}
