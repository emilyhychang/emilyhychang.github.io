# Formula 1 case-study evidence

Reviewed repository commit `f6410eac34b0ad969ec366a78924bd947a62d58a` on 2026-09-27.

- Repository: https://github.com/emilyhychang/f1-site
- Live application: https://emilyhychang.github.io/f1-site/
- Pipeline: `data_pipeline/fetch_data.py` — FastF1 ingestion, pandas transforms, refresh delays, telemetry sampling, official driver profile source.
- Forecast: `data_pipeline/build_predictions.py` — explicit weighted formula, missing circuit fallback, sprint/qualifying context, heuristic confidence.
- Publishing checks: `data_pipeline/validate_data.py` — minimum record counts, required fields, unique predicted finishes, round match. These do NOT guarantee complete race coverage.
- Automation: `.github/workflows/update-race-data.yml` — daily Tue–Fri and six-hour Sat–Mon runs; validate before commit.
- Analysis: `docs/analysis.html`, `docs/js/analysis.js` — Chart.js views, race selector and static JSON requests.
- Fantasy: `docs/fantasy.html`, `docs/js/predictor.js` — five drivers, two constructors, boost, editable budget, local budget persistence, hardcoded prices and scoring assumptions.
- Interface structure: `docs/index.html`, `docs/results.html`, `docs/schedule.html`.

Copy describes implemented behavior, not unverified development history. No claims are made about user research, solo ownership, project dates, adoption, measured usability or prediction accuracy. The reflection is a proposed next evaluation, not completed work. The public-facing project name remains Formula 1 Explorer; SCUDERIA 16 identifies the deployed application. Architecture is plain HTML/CSS/JavaScript plus Python, not React.
