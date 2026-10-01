import type { CaseSection } from "./caseStudies";
export const lmaOverview = [
  { label: "Context", value: "LMA Marketing & Advertising · Internship" },
  {
    label: "Contribution",
    value: "Identified the problem and built the automation tool",
  },
  { label: "Tools", value: "Python · Streamlit · CSV processing" },
];
export const lmaSections: CaseSection[] = [
  {
    id: "problem",
    title: "An opportunity in my first meeting",
    paragraphs: [
      "During my first meeting at LMA Marketing & Advertising, I noticed a team member processing datasets manually. Each dataset took more than an hour to prepare. Before the team could use the data, someone had to work through repetitive cleanup and updates.",
      "I saw an opportunity to make that recurring work easier and took the initiative to build a data automation tool. The goal was to turn a manual preparation process into a repeatable workflow the team could run through a simple interface.",
    ],
  },
  {
    id: "approach",
    title: "Working with the files the team already used",
    paragraphs: [
      "I built the ServiceTitan File Cleaner around three inputs: a new ServiceTitan export, the current master dataset, and the current new-leads-only dataset. This kept the workflow connected to the team’s existing CSV files.",
      "The Python pipeline standardizes column names through configured aliases, trims inconsistent whitespace, normalizes recognizable dates and monetary amounts, and fills missing calendar fields. It removes blank, section-label, and incomplete rows by requiring Customer ID, Created Date, Invoice Business Unit, and Job Type.",
      "Cleaning rules live separately from the Streamlit interface, making the processing logic easier to inspect and maintain as export formats change.",
    ],
  },
  {
    id: "automation",
    title: "Clean once, update consistently",
    paragraphs: [
      "After cleaning, the tool compares incoming records with the uploaded master using a fingerprint of configured fields. Matching records are skipped, while new records are appended. It also identifies customer IDs absent from the supplied master and adds their first encountered records to the new-leads dataset.",
      "The workflow produces four downloadable files: the cleaned export, updated master, updated new-leads-only dataset, and a period comparison. The comparison summarizes records, unique customers, and revenue for the current period, the preceding period of equal length, and the same period a year earlier.",
      "New-customer counts depend on the uploaded history. The comparison’s new-customer figures use customers identified during the current import, so they are not a complete historical acquisition comparison.",
    ],
  },
  {
    id: "interface",
    title: "Built for the people who would keep using it",
    paragraphs: [
      "No one else at the company worked with Python or advanced code, so the tool needed to be understandable and usable without me there to run it. I built a browser interface around the processing logic so the team could upload files, run the cleanup, and download the results without editing code or using a command line.",
      "I also needed to make the process easy to explain. I framed it around the team’s familiar files and tasks: which datasets to upload, what the tool changes, what to review, and which updated files to keep for the next run. The goal was for the team to continue using it independently after my internship ended.",
      "The interface makes the required inputs explicit. Each file has its own labeled upload area, and an expandable explanation distinguishes the master history from the new-leads-only file. Processing becomes available once all three CSVs are supplied.",
      "After processing, the app displays valid-record, added-record, skipped-duplicate, and new-customer counts alongside the downloads. This gives the person running the tool a summary to review before keeping the updated files.",
      "The upload-based workflow processes files in memory for the current session instead of writing customer datasets to the server’s disk. Users download their updated copies before leaving the page. The screenshot shows the initial upload screen, without customer records.",
    ],
  },
  {
    id: "result",
    title: "From repetitive preparation to a reusable tool",
    paragraphs: [
      "The deliverable is a working automation tool that combines data cleaning, duplicate checks, dataset updates, and reporting outputs in one upload-and-download flow. It addresses the repeated preparation steps I first noticed in the meeting.",
      "The original manual process took more than an hour per dataset. A timed comparison of the automated workflow has not been documented here, so I have not assigned a percentage reduction or claimed a specific amount of time saved.",
    ],
  },
  {
    id: "reflection",
    title: "Initiative starts with noticing the work",
    paragraphs: [
      "This project began by paying attention to how work was actually getting done. A recurring operational task became an opportunity to build something useful without waiting for a formal project brief.",
      "Building for a nontechnical team made usability and handoff part of the engineering problem. The automation needed a clear, repeatable process that colleagues could understand and use without relying on its developer for every dataset.",
      "My next step would be to compare representative outputs against manually reviewed files and measure end-to-end processing time, including review and download. I would also surface excluded-row reasons so the team could distinguish intentional filtering from records that need attention.",
    ],
  },
];
