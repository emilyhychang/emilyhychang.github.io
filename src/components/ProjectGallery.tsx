import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { projects, type ProjectId } from "../data/portfolio";
import { projectCovers } from "../data/projectCovers";

export function ProjectGallery({
  onOpen,
}: {
  onOpen: (id: ProjectId) => void;
}) {
  const rail = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [position, setPosition] = useState({
    index: 0,
    start: true,
    end: false,
  });
  useEffect(() => {
    const element = rail.current!;
    const update = () => {
      const first = element.querySelector<HTMLElement>(".gallery-card");
      const step = first ? first.offsetWidth + 24 : element.clientWidth;
      setPosition({
        index: Math.min(
          projects.length - 1,
          Math.round(element.scrollLeft / step),
        ),
        start: element.scrollLeft <= 2,
        end:
          element.scrollLeft >= element.scrollWidth - element.clientWidth - 2,
      });
    };
    const wheel = (event: WheelEvent) => {
      // Native horizontal trackpad gestures retain browser momentum. Translate
      // vertical wheel input only while there is room; release at either edge.
      if (event.ctrlKey || Math.abs(event.deltaX) >= Math.abs(event.deltaY))
        return;
      const delta =
        event.deltaY *
        (event.deltaMode === 1
          ? 16
          : event.deltaMode === 2
            ? element.clientWidth
            : 1);
      const max = element.scrollWidth - element.clientWidth;
      if (
        (delta > 0 && element.scrollLeft < max - 1) ||
        (delta < 0 && element.scrollLeft > 1)
      ) {
        event.preventDefault();
        element.scrollLeft += delta;
      }
    };
    element.addEventListener("wheel", wheel, { passive: false });
    element.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    update();
    return () => {
      element.removeEventListener("wheel", wheel);
      element.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);
  const move = (direction: number) => {
    const element = rail.current!;
    const card = element.querySelector<HTMLElement>(".gallery-card")!;
    element.scrollBy({
      left: direction * (card.offsetWidth + 24),
      behavior: reduced ? "instant" : "smooth",
    });
  };
  return (
    <section
      id="work"
      className="home-gallery"
      aria-labelledby="gallery-heading"
    >
      <span className="projects-watermark" aria-hidden="true">
        PROJECTS
      </span>
      <div className="container gallery-heading">
        <div>
          <p className="eyebrow">Things I Built</p>
          <h2 id="gallery-heading">
            Ideas into
            <br />
            <em>real things.</em>
          </h2>
        </div>
        <a className="all-projects-link" href="#/projects">
          View all projects <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div
        className="project-gallery-rail"
        ref={rail}
        tabIndex={0}
        role="region"
        aria-label="Project previews"
        aria-describedby="gallery-instructions"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            move(event.key === "ArrowRight" ? 1 : -1);
          }
          if (
            event.target === event.currentTarget &&
            (event.key === "Home" || event.key === "End")
          ) {
            event.preventDefault();
            rail.current!.scrollTo({
              left: event.key === "Home" ? 0 : rail.current!.scrollWidth,
              behavior: reduced ? "instant" : "smooth",
            });
          }
        }}
      >
        {projects.map((project) => {
          const cover = projectCovers[project.id];
          return (
            <button
              className={`gallery-card gallery-${project.id}`}
              key={project.id}
              onClick={() => onOpen(project.id)}
              aria-label={`View ${project.title} case study`}
            >
              <div className="gallery-cover">
                <img
                  src={`${import.meta.env.BASE_URL}images/${cover.src}`}
                  alt={cover.alt}
                  loading="lazy"
                  draggable={false}
                />
                <span className="gallery-cover-label">{cover.label}</span>
                <span className="gallery-open" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="gallery-card-meta">
                <span className="eyebrow">
                  {project.number} / {project.tags.join(" · ")}
                </span>
                <h3>{project.title}</h3>
                <p>{project.statement}</p>
              </div>
            </button>
          );
        })}
      </div>
      <div className="container gallery-footer">
        <p id="gallery-instructions">
          Scroll to explore <span aria-hidden="true">↔</span>
          <span className="sr-only">
            . Swipe, use your trackpad, or use the arrow keys and buttons.
          </span>
        </p>
        <div className="gallery-controls">
          <span className="eyebrow">
            {String(position.index + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
          <button
            aria-label="Previous project preview"
            disabled={position.start}
            onClick={() => move(-1)}
          >
            ←
          </button>
          <button
            aria-label="Next project preview"
            disabled={position.end}
            onClick={() => move(1)}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
