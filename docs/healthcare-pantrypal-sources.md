# Healthcare and PantryPal source notes

## Healthcare Spending
Repository: https://github.com/emilyhychang/OECD_healthcare_spending_analysis
Reviewed commit: e1335b0ee61bbf27cd9623a32f1873d69841b176

Sources: README.md, finalproject.ipynb, processes/tidy.py, included cleaned datasets.
- Notebook documents World Bank current-US-dollar spending and life expectancy, OECD indicators, 2000–2019, coverage exclusion, and 30-country ranking output.
- Cell 57 saved plot is exported unmodified to public/images/healthcare/life-expectancy.webp. Units clarified in caption.
- Cells 69–99 document coefficient-of-variation weights and approximate R² = .09 / .05. Do not claim causal effects or statistical nonsignificance based on R².
- Cell 84 calls calculate_results(weighted_multipliers) for both outputs. Site explicitly discloses that no independent equal-weight robustness comparison was demonstrated.
- Avoid presenting the composite as an authoritative ranking of national healthcare quality.
- Review of existing analysis only; source notebook was not modified or rerun.

## PantryPal
Repository: https://github.com/emilyhychang/PantryPal-Ai-m-Your-Chef
Reviewed commit: 7d3e0fad37f565783f8af30364c9530aa558e4e5

Sources: working code/pantrypal.py, working code/pantrypals.py, README.md, FinalProject_PantryPal report.
- Team project; individual task ownership is unspecified. Use “I worked with a team.”
- Actual flow uses substring filtering, random retrieval, and repeated-sentence removal. No LLM generation or cluster-based recommendation ranking in final working code.
- NLTK verb extraction, TF-IDF, 15 K-Means clusters; inertia curves are exploratory diagnostics.
- Report pages 5–7: demonstration of 47 matches and average BLEU .3743 over 10 samples. Treat as reported examples, not independently reproduced performance or evidence of semantic preservation.
- No claimed web application, personalization, validated allergy filtering, time constraints, measured usability, or food-waste reduction.
- Demo URL is the replacement supplied in README; video itself was not used as additional evidence.
- Portfolio preview and pipeline are labeled illustrations of the implemented workflow, not application screenshots.
