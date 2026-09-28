import { useState } from "react";
import { cornerstoneExcerpts } from "../data/cornerstoneCaseStudy";

export function CornerstoneCaseVisual() {
  return (
    <figure className="cornerstone-case-figure">
      <img
        src={`${import.meta.env.BASE_URL}images/cornerstone/implementation.png`}
        width="1053"
        height="687"
        alt="Mud Lily Clay homepage implementation shown in the final presentation, with pottery offerings in the navigation and a studio photograph."
      />
      <figcaption>
        Mud Lily Clay · Squarespace implementation · Final presentation, slide
        23
      </figcaption>
    </figure>
  );
}
export function CornerstonePresentation() {
  const [index, setIndex] = useState(0);
  const slide = cornerstoneExcerpts[index];
  return (
    <div
      className="cornerstone-excerpts"
      role="region"
      aria-label="Selected presentation visuals"
    >
      <div className="excerpt-toolbar">
        <span className="eyebrow">Selected presentation visuals</span>
        <div>
          <button
            aria-label="Previous case-study visual"
            onClick={() =>
              setIndex(
                (value) =>
                  (value + cornerstoneExcerpts.length - 1) %
                  cornerstoneExcerpts.length,
              )
            }
          >
            ←
          </button>
          <span>
            {index + 1} / {cornerstoneExcerpts.length}
          </span>
          <button
            aria-label="Next case-study visual"
            onClick={() =>
              setIndex((value) => (value + 1) % cornerstoneExcerpts.length)
            }
          >
            →
          </button>
        </div>
      </div>
      <figure>
        <div className="excerpt-image">
          <img
            src={`${import.meta.env.BASE_URL}images/cornerstone/${slide.file}`}
            alt={slide.alt}
            width={slide.width}
            height={slide.height}
            loading="lazy"
          />
        </div>
        <figcaption aria-live="polite">
          <strong>{slide.title}</strong>
          <span>{slide.source}</span>
        </figcaption>
      </figure>
      <p className="excerpt-note">
        Design excerpts from the final deck. The implemented site includes
        adaptations for Squarespace.
      </p>
    </div>
  );
}
