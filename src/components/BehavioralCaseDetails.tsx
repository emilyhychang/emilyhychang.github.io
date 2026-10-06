const visuals = {
  materials: {
    file: "materials.webp",
    width: 2000,
    height: 1125,
    alt: "Original control and treatment survey screenshots. Both offer five beverages; the treatment adds a popularity statement to Coke. Beverage order differs between screenshots.",
    caption:
      "Original survey materials · Final presentation, slide 5. The screenshots show different beverage orders, a limitation discussed below.",
  },
  results: {
    file: "choice-results.webp",
    width: 1404,
    height: 1053,
    alt: "Coke choice rate chart from the final presentation: control 20.4%, treatment 31.7%, with standard-error bars. The reported difference was not statistically significant, p = 0.142.",
    caption:
      "Choice rates with standard-error bars · Chart excerpt from slide 8. Reported difference: +11.26 percentage points; p = 0.142.",
  },
};

export function BehavioralCaseVisual({ kind }: { kind: keyof typeof visuals }) {
  const visual = visuals[kind];
  const src = `${import.meta.env.BASE_URL}images/behavioral/${visual.file}`;
  return (
    <figure className="behavioral-case-figure">
      <a
        href={src}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${kind === "materials" ? "survey materials" : "choice results chart"} at full size`}
      >
        <img
          src={src}
          width={visual.width}
          height={visual.height}
          alt={visual.alt}
          loading="lazy"
        />
      </a>
      <figcaption>
        {visual.caption}{" "}
        <a href={src} target="_blank" rel="noreferrer">
          View full size &#8599;&#65038;;
        </a>
      </figcaption>
    </figure>
  );
}
