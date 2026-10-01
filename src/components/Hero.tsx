import { motion, useReducedMotion } from "motion/react";
import { Arrow } from "./Shared";
export function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="hero container" aria-labelledby="hero-heading">
      <div className="hero-topline eyebrow">
        <span>Emily Chang / UC San Diego</span>
        <span>Portfolio / 2026</span>
      </div>
      <h1 id="hero-heading">
        {[
          "Always curious.",
          "Always learning.",
          "Always building something",
        ].map((line, index) => (
          <motion.span
            className="hero-line"
            key={line}
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: reduced ? 0 : index * 0.08 }}
          >
            {line}
            {index === 2 && <span className="hero-period">.</span>}
          </motion.span>
        ))}
      </h1>
      <div className="hero-bottom">
        <a className="selected-link" href="#work">
          <Arrow diagonal={false} /> Selected work
        </a>
        <div className="hero-description">
          <p>
            I build tools for everyday tasks and study
            <br className="desktop-break" /> how people use them.
          </p>
          <span className="education">
            UC San Diego · Cognitive Science + Business Economics
          </span>
        </div>
      </div>
    </section>
  );
}
