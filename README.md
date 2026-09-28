# Emily Chang — Portfolio

An editorial portfolio built with React, TypeScript, Vite, Tailwind CSS v4, locally hosted Inter, and Motion. Static hosting requires no backend.

## Development

- `npm install`
- `npm run dev`
- `npm run build` — type-check and generate `dist/`
- `npm run lint`
- `npm run test:e2e` — browser regression tests; start the dev server on port 5173 first. Uses installed Google Chrome.
- `npm run format`
- `npm run preview` — review the production build

## Implemented

- Responsive homepage, four distinct project compositions, About, experience, tools, and current interests.
- Once-only entrance motion, staggered hero, reduced-motion support, shared lens indicator, relevant tag emphasis, desktop cursor and restrained magnetic controls.
- Near-full-screen case studies with shared title/visual transitions, native dialog semantics, explicit keyboard focus wrapping, Escape, restored focus/scroll, reading progress and desktop section navigation.
- Static-compatible project URLs: `#/work/watchtogether`, `#/work/f1`, `#/work/cornerstone`, `#/work/lma`. Direct entry, refresh, Back/Forward, and next-project navigation work without a server fallback.
- A twelve-second illustrative WatchTogether playback demo; pauses when offscreen or covered by a modal. No actual streaming or networking.
- F1 telemetry reveal, three-slide presentation preview with arrow/drag controls, once-only marketing workflow indicator, and expandable decision rows.
- Search via navigation icon, Cmd+K or Ctrl+K. Arrow keys/Enter/Escape supported, missing destinations disabled, and one subtle F1 animation per palette opening.
- GitHub Pages deployment workflow with build/lint checks. Select **GitHub Actions** as the Pages source in repository settings before the first deployment.

## Architecture

- `src/data/portfolio.ts`: centralized project metadata, relevance lenses, editable tools, and verified links.
- `src/data/caseStudies.ts`: distinct story outlines and explicit content placeholders.
- `src/components/`: focused homepage, preview, case-study, command-palette and motion components.
- `src/hooks/useProjectRoute.ts`: hash routing and browser history.
- `src/hooks/useModal.ts`: modal lifecycle, scroll locking and focus management.
- `src/components/motion-primitives/InView.tsx`: customized Motion Primitives InView; upstream MIT attribution is included beside it.
- Case studies and command palette load on demand.
- `tests/portfolio.spec.ts`: end-to-end history, focus, controls, responsive and reduced-motion checks.

## Replace before publishing as a finished portfolio

Search `src/` for `[Add` and `[Confirm`.

1. Add verified resume, email, GitHub, LinkedIn, and F1 destinations in `links`. Null destinations render unavailable rather than linking to fabricated addresses.
2. Replace concepts with application screenshots and sanitized presentation slides. Add meaningful alt text, image dimensions and lazy loading below the fold.
3. Write case-study narratives with actual roles, dates, tools, decisions, research and outcomes. No metrics or architecture are invented.
4. Add a portrait, optional personal sentence, verified experience, interests and location.
5. Confirm the example tools.

## Hosting

`base: './'` supports root domains and GitHub Pages repository subdirectories. The included workflow builds `dist/` and publishes it on pushes to `main`; no deployment has been triggered by local development. Hash-based case-study routes avoid GitHub Pages 404s. Regular `/work/...` paths are intentionally not used.

## Motion attribution

The customized InView component adapts [Motion Primitives](https://github.com/ibelick/motion-primitives), copyright 2024 ibelick, MIT licensed. The other interaction components are purpose-built with Motion and native browser semantics.
