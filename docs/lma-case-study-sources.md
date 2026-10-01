# LMA case study sources

User account, October 1, 2026: first meeting at LMA revealed manual dataset processing taking over an hour per dataset; Emily took the initiative to build automation. This is the source for the baseline and personal contribution, not an independently timed benchmark.

Repository: https://github.com/emilyhychang/LMA-data-automation
Reviewed commit: 785f4713ee66215db0d9c6711941db201ff9eff7
Inspected README.md, servicetitan_reports/app.py and src/servicetitan_reports/pipeline.py.

Describe the upload-based Streamlit workflow: three inputs, standardized required fields, configured record fingerprints, customers new to uploaded master, four CSV outputs, session-held results, no pipeline disk writes for uploads. The command-line pipeline has different persistence behavior; privacy copy is scoped to the upload workflow.

Period comparison new-customer values use new_customer_rows from the current import, not the complete historical leads file. Case study states this limitation. No runtime benchmark, deployment/adoption claim, hours saved, percentage improvement, or measured error reduction is asserted.

Screenshot supplied by Emily: Screenshot 2026-10-01 at 9.48.55 PM/AM attachment (9.48.55 AM filename). Copied unchanged to public/images/lma/servicetitan-cleaner.png. Shows upload UI without customer records.

Additional user context: no other team members knew Python or advanced coding; Emily needed to explain the workflow clearly and build an interface colleagues could use after her departure. Copy presents independent use after the internship as a design goal, not a verified post-departure outcome.
