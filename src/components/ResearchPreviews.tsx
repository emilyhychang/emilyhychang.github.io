export function HealthcarePreview() {
  return (
    <div className="healthcare-visual research-visual">
      <div className="research-top eyebrow">
        <span>Healthcare spending</span>
        <span>Analysis / 05</span>
      </div>
      <h4>
        More spending.
        <br />
        Better outcomes?
      </h4>
      <div className="research-table">
        <div className="eyebrow">
          <span>Measure</span>
          <span>Comparison</span>
        </div>
        {[
          ["Period", "2000–2019"],
          ["Indicators", "Four quality proxies"],
          ["Sources", "OECD / World Bank"],
        ].map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
      <span className="visual-caption">Cross-country analysis · Python</span>
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
        The power
        <br />
        of popularity.
      </h4>
      <div className="study-outline">
        {[
          ["01", "Question", "Can a label change a choice?"],
          ["02", "Method", "108 participants · Two conditions"],
          ["03", "Finding", "Higher Coke selection; inconclusive evidence"],
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
        Qualtrics experiment · UC San Diego
      </span>
    </div>
  );
}
