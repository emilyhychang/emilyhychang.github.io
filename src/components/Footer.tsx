import { Magnetic } from "./MotionDetails";
import { links } from "../data/portfolio";
import { ResourceLink } from "./Shared";
export function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="section-header">
          <span>Good things start with a conversation</span>
          <a href="#top">Back to top ↑</a>
        </div>
        <div className="footer-main">
          <h2>
            Have a problem
            <br />
            worth solving?
          </h2>
          <div className="footer-cta">
            <Magnetic>
              <ResourceLink href={links.email} placeholder="Add email">
                Let’s talk.
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
          <span className="footer-note">Thoughtfully put together.</span>
        </div>
      </div>
    </footer>
  );
}
