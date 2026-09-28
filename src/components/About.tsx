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
        <div
          className="portrait-placeholder"
          role="img"
          aria-label="Portrait placeholder: add a photo of Emily"
        >
          <span className="portrait-corner">FIG. 01 / EMILY</span>
          <span className="portrait-monogram" aria-hidden="true">
            ec.
          </span>
          <span className="portrait-caption">[Add portrait]</span>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            I’m Emily, a Cognitive Science and Business Economics student at UC
            San Diego.
          </p>
          <p>
            I’m interested in what happens when technology, people, and business
            collide — whether that means building a product, digging through
            data, or figuring out why something isn’t working.
          </p>
          <p>I tend to learn by making things.</p>
          <p className="placeholder">[Add a personal sentence]</p>
          <span className="about-signoff">Always a work in progress.</span>
        </div>
      </div>
    </section>
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
      <p className="placeholder experience-note">[Add verified experience]</p>
      <div className="experience-row">
        <span>[Add period]</span>
        <h3>[Add company]</h3>
        <span>[Add role]</span>
        <span className="experience-description">
          [Add one-line description]
        </span>
      </div>
    </section>
  );
}
function ToolsGrid() {
  return (
    <section className="tools-section" aria-labelledby="tools-heading">
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
      <p className="placeholder tools-note">[Confirm tools]</p>
    </section>
  );
}
function Currently() {
  return (
    <section className="currently-section" aria-labelledby="currently-heading">
      <h2 id="currently-heading" className="eyebrow">
        Currently
      </h2>
      <dl>
        <div>
          <dt>Building</dt>
          <dd>
            <i className="status-dot" />
            WatchTogether
          </dd>
        </div>
        <div>
          <dt>Learning</dt>
          <dd className="placeholder">[Add current interest]</dd>
        </div>
        <div>
          <dt>Watching</dt>
          <dd className="placeholder">[Add current watch]</dd>
        </div>
        <div>
          <dt>Based</dt>
          <dd className="placeholder">[Add location]</dd>
        </div>
      </dl>
    </section>
  );
}
export function Background() {
  return (
    <div className="container background-section">
      <ExperienceList />
      <div className="background-grid">
        <ToolsGrid />
        <Currently />
      </div>
    </div>
  );
}
