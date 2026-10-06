import { LMAPreview } from "./LMACaseDetails";
import { SmartBasketPreview } from "./SmartBasketDetails";
import { PantryPalPreview } from "./ProjectCaseDetails";
import { HealthcarePreview, BehavioralPreview } from "./ResearchPreviews";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import type { ProjectId } from "../data/portfolio";

function WatchTogetherPreview({ active = true }: { active?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const ref = useRef(null);
  const visible = useInView(ref);
  const finished = elapsed >= 12;
  useEffect(() => {
    if (!playing || !active || !visible || finished) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setElapsed((value) => Math.min(value + 1, 12));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [playing, active, visible, finished]);
  const running = playing && elapsed < 12 && active && visible;
  function toggle() {
    if (elapsed >= 12) setElapsed(0);
    setPlaying(!running);
  }

  return (
    <div className="watch-visual" ref={ref}>
      <div className="watch-app">
        <div className="watch-top">
          <strong>
            <span className="watch-mark" aria-hidden="true">
              ▰
            </span>{" "}
            watchtogether
          </strong>
          <span>
            <i /> Shared room
          </span>
        </div>
        <div className="watch-screen">
          <div className="orbital-art" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="planet" />
            <span className="star star-one" />
            <span className="star star-two" />
            <span className="star star-three" />
          </div>
          <span className="screen-caption">Movie night, wherever you are.</span>
          {elapsed > 2 && (
            <span className="demo-reaction" role="status">
              B: This is the good part.
            </span>
          )}
          <div className="movie-caption">
            <span className="eyebrow">Tonight’s feature</span>
            <strong>Playback demo</strong>
          </div>
        </div>
        <div className="watch-controls">
          <button
            className="play-toggle"
            aria-label={running ? "Pause demo" : "Play demo"}
            onClick={toggle}
          >
            {running ? "Ⅱ" : "▷"}
          </button>
          <span
            className="timeline"
            role="progressbar"
            aria-label="Demo playback"
            aria-valuenow={elapsed}
            aria-valuemin={0}
            aria-valuemax={12}
          >
            <i style={{ width: `${(elapsed / 12) * 100}%` }} />
          </span>
          <span className="time-code">
            00:{String(elapsed).padStart(2, "0")} / 00:12
          </span>
          <span aria-hidden="true">&#8599;</span>
        </div>
        <div className="watch-bottom">
          <span>
            <span className="avatar">A</span>
            <span className="avatar second">B</span>{" "}
            <span className="watch-ready">A ready · B ready</span>
          </span>
          <span className="sync-state">
            <i /> {running ? "Playing in sync" : "Ready together"}
          </span>
        </div>
      </div>
      <span className="visual-caption">Shared movie-room concept</span>
    </div>
  );
}
function F1Telemetry() {
  return (
    <div className="f1-visual">
      <div className="f1-top">
        <span>F1 / EXPLORER</span>
        <span>RACE ANALYSIS</span>
      </div>
      <div className="track-label">
        <span className="eyebrow">Lap times and tire strategy</span>
        <strong>
          Compare drivers
          <br />
          across a race.
        </strong>
      </div>
      <svg
        className="race-track"
        viewBox="0 0 560 240"
        role="img"
        aria-label="Illustrative circuit outline, not actual race data"
      >
        <path
          className="track-outline"
          d="M70 165 L142 76 Q148 67 168 71 L246 92 Q257 96 265 88 L308 45 Q320 34 329 50 L357 98 Q365 111 383 112 L466 110 Q500 109 488 136 L461 191 Q454 205 433 198 L351 164 Q340 159 331 172 L307 202 Q293 221 275 206 L208 156 Q198 147 188 158 L151 198 Q139 209 126 200 Z"
        />
        <path
          className="track-line"
          d="M70 165 L142 76 Q148 67 168 71 L246 92 Q257 96 265 88 L308 45 Q320 34 329 50 L357 98 Q365 111 383 112 L466 110 Q500 109 488 136 L461 191 Q454 205 433 198 L351 164 Q340 159 331 172 L307 202 Q293 221 275 206 L208 156 Q198 147 188 158 L151 198 Q139 209 126 200 Z"
        />
        <circle cx="246" cy="92" r="6" fill="#a1453c" />
      </svg>
      <div className="telemetry">
        <span>
          LAP <b>— / —</b>
        </span>
        <span>
          POSITION <b>—</b>
        </span>
        <span>
          GAP <b>—</b>
        </span>
      </div>
      <span className="visual-caption">Illustrative circuit preview</span>
    </div>
  );
}
function CornerstoneDeck() {
  const [slide, setSlide] = useState(0);
  const reduced = useReducedMotion();
  const slides = [
    {
      title: "Finding the right pottery class.",
      label: "Mud Lily Clay website redesign",
      footer: "Research → Strategy",
    },
    {
      title: "One-time visitors and returning learners.",
      label: "Two customer groups",
      footer: "Research → Analysis",
    },
    {
      title: "A shorter path from classes to booking.",
      label: "Revised navigation",
      footer: "Recommendation → Presentation",
    },
  ];
  const advance = (direction: number) =>
    setSlide((value) => (value + direction + slides.length) % slides.length);
  return (
    <div className="cornerstone-visual">
      <div className="deck-back" />
      <button
        className="deck-mid"
        aria-label="Show next presentation slide"
        onClick={() => advance(1)}
      />
      <motion.div
        className="deck-front"
        key={slide}
        drag={reduced ? false : "x"}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.12}
        onDragEnd={(_, info) => {
          if (Math.abs(info.offset.x) > 35) advance(info.offset.x < 0 ? 1 : -1);
        }}
        initial={reduced ? false : { opacity: 0.4, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="deck-heading">
          <span>CORNERSTONE</span>
          <span>0{slide + 1} / 03</span>
        </div>
        <div aria-live="polite">
          <span className="eyebrow">{slides[slide].label}</span>
          <h4>{slides[slide].title}</h4>
        </div>
        <div className="deck-footer">
          <span>{slides[slide].footer}</span>
          <span>&#8599;</span>
        </div>
      </motion.div>
      <div className="deck-controls">
        <button
          aria-label="Previous presentation slide"
          onClick={() => advance(-1)}
        >
          ←
        </button>
        <span>{slide + 1} / 3</span>
        <button aria-label="Next presentation slide" onClick={() => advance(1)}>
          →
        </button>
      </div>
      <span className="visual-caption">
        Project summary · Presentation concept
      </span>
    </div>
  );
}
const visuals = {
  watchtogether: WatchTogetherPreview,
  f1: F1Telemetry,
  cornerstone: CornerstoneDeck,
  lma: LMAPreview,
  healthcare: HealthcarePreview,
  pantrypal: PantryPalPreview,
  "smart-basket": SmartBasketPreview,
  "soft-drinks": BehavioralPreview,
};
export function ProjectVisual({
  id,
  active = true,
}: {
  id: ProjectId;
  active?: boolean;
}) {
  const Visual = visuals[id];
  return <Visual active={active} />;
}
