import { Arrow } from './Shared'
export function Hero() {
  return <section className="hero container" aria-labelledby="hero-heading">
    <div className="hero-topline eyebrow"><span>A little curiosity. A lot of making.</span><span>Portfolio / 2026</span></div>
    <h1 id="hero-heading">Product thinker,<br />builder, and<br /><span className="hero-last">problem solver<span className="hero-period">.</span></span></h1>
    <div className="hero-bottom"><a className="selected-link" href="#work"><Arrow diagonal={false} /> Selected work</a><div className="hero-description"><p>I turn messy problems into thoughtful<br className="desktop-break" /> products, experiences, and decisions.</p><span className="education">UC San Diego · Cognitive Science + Business Economics</span></div></div>
  </section>
}
