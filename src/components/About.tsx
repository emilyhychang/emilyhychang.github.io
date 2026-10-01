import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { links, toolGroups } from "../data/portfolio";
import { ResourceLink, SectionHeader } from "./Shared";

export function About() {
  return (
    <section
      id="about"
      className="container about-section"
      aria-labelledby="about-heading"
    >
      <SectionHeader aside="A little about me">Beyond the work</SectionHeader>
      <h2 id="about-heading">
        I like problems that
        <br />
        don’t come with
        <br />
        <span className="muted">instructions.</span>
      </h2>
      <div className="about-grid">
        <div className="about-photo-column">
          <div className="about-portrait">
            <img
              src={`${import.meta.env.BASE_URL}images/about/emily.jpg`}
              alt="Emily sitting at a café, resting her chin on her hand."
              width="768"
              height="1024"
              loading="lazy"
            />
          </div>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            I’m Emily, a Cognitive Science and Business Economics student at UC
            San Diego.
          </p>
          <p>
            My projects often start with something I notice. At LMA, it was a
            teammate spending over an hour cleaning a dataset. That became a
            tool the team could use without knowing Python.
          </p>
          <p>I tend to learn by making things.</p>
          <Currently />
          <InterestsBubble />
        </div>
      </div>
    </section>
  );
}
const interests = [
  "golf",
  "tennis",
  "reading",
  "finding new places on Yelp",
  "trying new restaurants",
  "traveling",
  "chasing sunsets",
  "birdwatching",
  "my dog, Kody - try to find him on this site :)",
];
function InterestsBubble() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (paused || reduced) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((value) => (value + 1) % interests.length);
    }, 2350);
    return () => window.clearInterval(timer);
  }, [paused, reduced]);
  return (
    <button
      className="interests-bubble"
      onClick={() => setIndex((value) => (value + 1) % interests.length)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-label={`In my free time: ${interests[index]}. Show next interest`}
    >
      <span className="interests-label">in my free time:</span>
      <span className="interests-window">
        <AnimatePresence initial={false}>
          <motion.span
            className="interests-value"
            key={index}
            initial={{ y: reduced ? 0 : "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: reduced ? 0 : "-100%", opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.35, ease: "easeInOut" }}
          >
            {interests[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  );
}
function ExperienceList() {
  return (
    <section
      className="experience-section"
      aria-labelledby="experience-heading"
    >
      <div className="detail-heading">
        <h2 id="experience-heading">Along the way</h2>
        <ResourceLink href={links.resume} placeholder="Add resume">
          View full resume
        </ResourceLink>
      </div>
      <div className="experience-row">
        <span>August to December 2026</span>
        <h3>LMA Marketing &amp; Advertising</h3>
        <span>Marketing &amp; Project Management Intern</span>
        <span className="experience-description">
          Supporting marketing projects and building a tool to automate the
          team’s data cleanup.
        </span>
      </div>
    </section>
  );
}
export function ToolsGrid() {
  return (
    <section
      className="container tools-section"
      aria-labelledby="tools-heading"
    >
      <h2 id="tools-heading" className="eyebrow">
        Tools I work with
      </h2>
      <div className="tools-grid">
        {toolGroups.map((group) => (
          <div key={group.title}>
            <h3 className="eyebrow">{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
function Currently() {
  return (
    <section className="currently-section" aria-labelledby="currently-heading">
      <h2 id="currently-heading">Currently</h2>
      <dl>
        <div>
          <dt>Building</dt>
          <dd>
            <i className="status-dot" />
            WatchTogether
          </dd>
        </div>
        <div>
          <dt>Reading</dt>
          <dd>
            How to Start{" "}
            <span className="currently-author">by Jodi Kantor</span>
          </dd>
        </div>
        <div>
          <dt>Watching</dt>
          <dd>A Knight of the Seven Kingdoms</dd>
        </div>
      </dl>
    </section>
  );
}
export function Background() {
  return (
    <div className="container background-section">
      <ExperienceList />
    </div>
  );
}
