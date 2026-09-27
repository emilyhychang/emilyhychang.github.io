import { useState } from 'react'
import { lenses, links, projects, type Lens, type Project } from '../data/portfolio'
import { ProjectVisual } from './ProjectVisuals'
import { ResourceLink, SectionHeader } from './Shared'

function ProjectSection({ project, lens }: { project: Project; lens: Lens }) {
  return <article id={project.id} className={`project project-${project.id}${lens !== 'All' && !project.lenses.includes(lens) ? ' is-dimmed' : ''}`} aria-labelledby={`${project.id}-title`}>
    <div className="project-copy"><div className="project-number eyebrow"><span>{project.number}</span><span>{project.id === 'watchtogether' ? 'Featured project' : project.tags.slice(0, 2).join(' / ')}</span></div><h3 id={`${project.id}-title`}>{project.title}</h3><p className="project-statement">{project.statement}</p><ul className="project-tags" aria-label="Project disciplines">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>{project.id === 'f1' && <div className="project-links"><ResourceLink href={links.f1Live} placeholder="Add URL">Live site</ResourceLink><ResourceLink href={links.f1Github} placeholder="Add URL">GitHub</ResourceLink></div>}{project.id === 'cornerstone' && <p className="process-line">Research <span>→</span> Analysis <span>→</span><br /> Recommendation <span>→</span> Presentation</p>}</div>
    <div className="project-art"><ProjectVisual id={project.id} /></div>
    <div className="project-foot"><span>[Add {project.id === 'cornerstone' ? 'client-approved outcome' : 'project detail'}]</span><span>Case study forthcoming <span aria-hidden="true">↗</span></span></div>
  </article>
}
export function SelectedWork() {
  const [lens, setLens] = useState<Lens>('All')
  return <section id="work" className="container work-section" aria-labelledby="work-heading"><SectionHeader aside="01—04">Selected work</SectionHeader><div className="work-intro"><h2 id="work-heading">A few things I’ve built,<br />analyzed, and figured out.</h2><span className="work-note">Different questions.<br />The same curiosity.</span></div><div className="lens-row"><div className="lens-selector" role="group" aria-label="View work by discipline">{lenses.map(item => <button key={item} aria-pressed={lens === item} onClick={() => setLens(item)}>{item}</button>)}</div><span className="eyebrow lens-label">A different lens on the same work</span></div><div className="projects">{projects.map(project => <ProjectSection key={project.id} project={project} lens={lens} />)}</div></section>
}
