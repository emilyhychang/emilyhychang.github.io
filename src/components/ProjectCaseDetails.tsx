export function HealthcareChart() {
  const src = `${import.meta.env.BASE_URL}images/healthcare/life-expectancy.webp`;
  return (
    <figure className="behavioral-case-figure">
      <a
        href={src}
        target="_blank"
        rel="noreferrer"
        aria-label="Open healthcare spending chart at full size"
      >
        <img
          src={src}
          width="973"
          height="704"
          loading="lazy"
          alt="Original notebook scatterplot of healthcare expenditure per capita versus life expectancy, colored by country, with an upward-sloping fitted line."
        />
      </a>
      <figcaption>
        Original notebook output · 2000 to 2019. Spending is in current US
        dollars per person; life expectancy is in years. This association does
        not establish causation.{" "}
        <a href={src} target="_blank" rel="noreferrer">
          View full size ↗
        </a>
      </figcaption>
    </figure>
  );
}
export function PantryPalPipeline() {
  return (
    <div
      className="pantry-pipeline"
      aria-label="Implemented recipe selection flow"
    >
      {[
        ["01", "Set constraints", "Ingredients to include and exclude"],
        ["02", "Find matches", "Filter existing recipe ingredient text"],
        [
          "03",
          "Select & clean",
          "Choose a match and remove repeated sentences",
        ],
      ].map(([number, title, detail]) => (
        <div key={number}>
          <span className="eyebrow">{number}</span>
          <strong>{title}</strong>
          <p>{detail}</p>
        </div>
      ))}
    </div>
  );
}
export function PantryPalPreview() {
  return (
    <div className="pantry-visual research-visual">
      <div className="research-top eyebrow">
        <span>PantryPal</span>
        <span>AI’m your chef / 07</span>
      </div>
      <h4>
        Find a recipe
        <br />
        with what you have.
      </h4>
      <div className="pantry-ingredients">
        <div>
          <span className="eyebrow">Include</span>
          <strong>Chicken · Carrot</strong>
        </div>
        <div>
          <span className="eyebrow">Exclude</span>
          <strong>Broth · Onion</strong>
        </div>
      </div>
      <p className="pantry-output">Ingredients → Matching recipes</p>
      <span className="visual-caption">
        Illustrative workflow · Python command-line prototype
      </span>
    </div>
  );
}
