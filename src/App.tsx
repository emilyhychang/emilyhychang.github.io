import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { SelectedWork } from './components/SelectedWork'
import { About, Background } from './components/About'
import { Footer } from './components/Footer'

export default function App() {
  return <div id="top"><a className="skip-link" href="#main">Skip to content</a><Navigation/><main id="main"><Hero/><SelectedWork/><About/><Background/></main><Footer/></div>
}
