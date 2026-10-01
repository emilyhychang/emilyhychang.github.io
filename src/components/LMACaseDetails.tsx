export function LMACaseVisual() {
  const src = `${import.meta.env.BASE_URL}images/lma/servicetitan-cleaner.png`;
  return (
    <figure className="behavioral-case-figure lma-case-figure">
      <a
        href={src}
        target="_blank"
        rel="noreferrer"
        aria-label="Open ServiceTitan File Cleaner screenshot at full size"
      >
        <img
          src={src}
          width="2814"
          height="1898"
          alt="ServiceTitan File Cleaner showing a privacy notice, required-file explanation, and three upload areas for an export, master dataset, and new-leads-only dataset."
          loading="lazy"
        />
      </a>
      <figcaption>
        ServiceTitan File Cleaner · Three CSV inputs, one repeatable workflow.{" "}
        <a href={src} target="_blank" rel="noreferrer">
          View full size ↗
        </a>
      </figcaption>
    </figure>
  );
}
export function LMAPreview() {
  return (
    <div className="lma-tool-preview">
      <img
        src={`${import.meta.env.BASE_URL}images/lma/servicetitan-cleaner.png`}
        width="2814"
        height="1898"
        alt="ServiceTitan File Cleaner upload interface."
        loading="lazy"
      />
    </div>
  );
}
