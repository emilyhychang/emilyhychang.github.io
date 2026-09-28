export function HealthcarePreview() {
  return (
    <div className="healthcare-visual research-visual">
      <div className="research-top eyebrow">
        <span>Healthcare spending</span>
        <span>Analysis / 05</span>
      </div>
      <h4>
        Understanding
        <br />
        the cost of care.
      </h4>
      <div className="research-table">
        <div className="eyebrow">
          <span>Measure</span>
          <span>Comparison</span>
        </div>
        {[
          "[Add spending measure]",
          "[Add population]",
          "[Add time period]",
        ].map((label) => (
          <div key={label}>
            <span>{label}</span>
            <span>—</span>
          </div>
        ))}
      </div>
      <span className="visual-caption">
        Study preview · [Add data visualization]
      </span>
    </div>
  );
}
export function BehavioralPreview() {
  return (
    <div className="behavioral-visual research-visual">
      <div className="research-top eyebrow">
        <span>Behavioral research</span>
        <span>Study / 06</span>
      </div>
      <h4>
        Soft drinks.
        <br />A closer look.
      </h4>
      <div className="study-outline">
        {[
          ["01", "Question", "[Add hypothesis]"],
          ["02", "Method", "[Add study design]"],
          ["03", "Evidence", "[Add findings]"],
        ].map(([number, title, detail]) => (
          <div key={number}>
            <span>{number}</span>
            <div>
              <strong>{title}</strong>
              <p>{detail}</p>
            </div>
          </div>
        ))}
      </div>
      <span className="visual-caption">
        Study preview · [Add research materials]
      </span>
    </div>
  );
}
