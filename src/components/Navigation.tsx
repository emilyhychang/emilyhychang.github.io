import { useEffect, useRef, useState } from 'react'
import { links } from '../data/portfolio'
import { ResourceLink } from './Shared'

export function Navigation() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus() }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [open])
  return <header className="navigation"><div className="container nav-inner">
    <a className="identity" href="#top" onClick={() => setOpen(false)}>Emily Chang<span className="identity-dot">.</span></a>
    <button className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" ref={toggle} onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button>
    <nav id="main-navigation" aria-label="Main navigation" className={open ? 'nav-links is-open' : 'nav-links'}>
      <a href="#work" onClick={() => setOpen(false)}>Work</a><a href="#about" onClick={() => setOpen(false)}>About</a>
      <ResourceLink href={links.resume} placeholder="Add resume">Resume</ResourceLink>
    </nav>
  </div></header>
}
