import { Magnetic } from "./MotionDetails";
import { links } from "../data/portfolio";
import { ResourceLink } from "./Shared";
export function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="section-header">
          <span>Get in touch</span>
          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? "instant"
                  : "smooth",
              });
            }}
          >
            Back to top ↑
          </a>
        </div>
        <div className="footer-main">
          <h2>
            Have a problem
            <br />
            I can solve?
          </h2>
          <div className="footer-cta">
            <Magnetic>
              <ResourceLink href={links.email} placeholder="Add email">
                Email me.
              </ResourceLink>
            </Magnetic>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Emily Chang</span>
          <div className="footer-links">
            <ResourceLink href={links.email} placeholder="Add email">
              Email
            </ResourceLink>
            <ResourceLink href={links.linkedin} placeholder="Add URL">
              LinkedIn
            </ResourceLink>
            <ResourceLink href={links.github} placeholder="Add URL">
              GitHub
            </ResourceLink>
            <ResourceLink href={links.resume} placeholder="Add resume">
              Resume
            </ResourceLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
