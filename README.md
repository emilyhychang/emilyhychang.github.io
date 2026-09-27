# Emily Chang — Portfolio

A responsive, static React + TypeScript portfolio. Phase 1 and Phase 2 establish the design system and complete homepage. Built with Vite, Tailwind CSS v4, and locally hosted Inter.

## Development

- `npm install`
- `npm run dev`
- `npm run build` — type-check and generate `dist/`
- `npm run lint`
- `npm run preview` — review the production build

## Structure

- `src/data/portfolio.ts`: project metadata, lens relevance, verified link destinations, editable tools.
- `src/components/Navigation.tsx`: sticky navigation and accessible mobile disclosure.
- `src/components/Hero.tsx`: editorial introduction.
- `src/components/SelectedWork.tsx`: project layouts and basic lens selection; projects remain visible.
- `src/components/ProjectVisuals.tsx`: replaceable, lightweight concept visuals built with HTML/CSS/SVG.
- `src/components/About.tsx`: About, experience, tools, and current interests.
- `src/components/Footer.tsx`: contact and resource destinations.
- `src/components/Shared.tsx`: typography metadata and resource-link primitives.
- `src/index.css`: responsive tokens, compositions, focus states, and reduced-motion handling.

## Content to replace

Search `src/` for `[Add` and `[Confirm`.

1. Supply resume, email, GitHub, LinkedIn, and F1 links in `links`. Null links render clearly unavailable rather than navigating to fabricated destinations.
2. Replace the four concept visuals with verified screenshots or sanitized presentation slides. Add descriptive alt text to future images; provide dimensions and lazy loading below the fold.
3. Add project details and verified outcomes, with no invented metrics.
4. Add a portrait and optional personal sentence.
5. Replace the experience row with verified company, role, period, and description.
6. Confirm the example tools and current interests/location.

## Static hosting

`base: './'` makes the production assets work under a GitHub Pages repository subdirectory. Upload the contents of `dist/` using a Pages build/deployment workflow. No backend or remote font request is required.

This phase uses section anchors only. Before adding project dialogs, use hash routes such as `#/work/watchtogether` for static-compatible deep links, with history/back/forward handling. Do not add ordinary `/work/...` routes without a static fallback.

## Next phases

Add a small selection of customized Motion Primitives with Motion, shared-element case-study dialogs, keyboard focus management, URL state, then project-specific interactions. Playback, deck controls, case-study links, a command palette, and cursor/magnetic effects are deliberately deferred until those phases. Current visuals are explicitly labeled concepts, not interactive product demos.
