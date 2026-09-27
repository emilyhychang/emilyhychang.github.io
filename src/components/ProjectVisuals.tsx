import type { ProjectId } from '../data/portfolio'

function WatchTogetherPreview() {
  return <div className="watch-visual"><div className="watch-app">
    <div className="watch-top"><strong><span className="watch-mark" aria-hidden="true">▰</span> watchtogether</strong><span><i /> Shared room</span></div>
    <div className="watch-screen"><div className="orbital-art" aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="planet"/><span className="star star-one"/><span className="star star-two"/><span className="star star-three"/></div><span className="screen-caption">A little closer, even from here.</span><div className="movie-caption"><span className="eyebrow">Tonight’s feature</span><strong>[Add movie title]</strong></div></div>
    <div className="watch-controls"><span aria-hidden="true">Ⅱ</span><span className="timeline"><i /></span><span className="time-code">00:00 / 00:00</span><span aria-hidden="true">↗</span></div>
    <div className="watch-bottom"><span><span className="avatar">A</span><span className="avatar second">B</span> <span className="watch-ready">Two people. One movie night.</span></span><span className="sync-state"><i /> In sync</span></div>
  </div><span className="visual-caption">Concept preview · [Add application screenshot]</span></div>
}
function F1Telemetry() {
  return <div className="f1-visual"><div className="f1-top"><span>F1 / EXPLORER</span><span>RACE INTELLIGENCE</span></div><div className="track-label"><span className="eyebrow">The data behind the drive.</span><strong>Every lap.<br />A different story.</strong></div>
    <svg className="race-track" viewBox="0 0 560 240" role="img" aria-label="Illustrative circuit outline, not actual race data"><path className="track-outline" d="M70 165 L142 76 Q148 67 168 71 L246 92 Q257 96 265 88 L308 45 Q320 34 329 50 L357 98 Q365 111 383 112 L466 110 Q500 109 488 136 L461 191 Q454 205 433 198 L351 164 Q340 159 331 172 L307 202 Q293 221 275 206 L208 156 Q198 147 188 158 L151 198 Q139 209 126 200 Z"/><path className="track-line" d="M70 165 L142 76 Q148 67 168 71 L246 92 Q257 96 265 88 L308 45 Q320 34 329 50 L357 98 Q365 111 383 112 L466 110 Q500 109 488 136 L461 191 Q454 205 433 198 L351 164 Q340 159 331 172 L307 202 Q293 221 275 206 L208 156 Q198 147 188 158 L151 198 Q139 209 126 200 Z"/><circle cx="246" cy="92" r="6" fill="#a1453c"/></svg>
    <div className="telemetry"><span>LAP <b>— / —</b></span><span>POSITION <b>—</b></span><span>GAP <b>—</b></span></div><span className="visual-caption">Illustrative preview · [Add race data]</span></div>
}
function CornerstoneDeck() {
  return <div className="cornerstone-visual"><div className="deck-back"/><div className="deck-mid"/><div className="deck-front"><div className="deck-heading"><span>CORNERSTONE</span><span>01 / 04</span></div><div><span className="eyebrow">From question to direction</span><h4>Making sense<br />of what’s next.</h4></div><div className="deck-footer"><span>Research → Strategy</span><span>↗</span></div></div><span className="visual-caption">Presentation concept · [Add sanitized slides]</span></div>
}
function LMAWorkflow() {
  return <div className="lma-visual"><div className="lma-top"><span>THE MARKETING SYSTEM</span><span>↗</span></div><div className="workflow"><div className="workflow-node">01 <strong>Content</strong><span>↓</span></div><div className="workflow-branch"><div className="workflow-node">02 <strong>SEO</strong></div><span>→</span><span className="workflow-side">Website</span></div><span className="workflow-down">↓</span><div className="workflow-node">03 <strong>Analytics</strong><span>↓</span></div><div className="workflow-branch"><div className="workflow-node">04 <strong>Insight</strong></div><span>→</span><span className="workflow-side">Next campaign</span></div></div><span className="visual-caption">Illustrative workflow · [Add project details]</span></div>
}
const visuals = { watchtogether: WatchTogetherPreview, f1: F1Telemetry, cornerstone: CornerstoneDeck, lma: LMAWorkflow }
export function ProjectVisual({ id }: { id: ProjectId }) { const Visual = visuals[id]; return <Visual /> }
