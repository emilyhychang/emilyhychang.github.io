import type { CaseSection } from "./caseStudies";
export const lmaOverview = [
  { label: "Context", value: "LMA Marketing & Advertising · Internship" },
  {
    label: "Role",
    value: "Automation · Stakeholder Management · Data Analytics",
  },
  { label: "Tools", value: "Python · Streamlit · CSV processing" },
];
export const lmaSections: CaseSection[] = [
  {
    id: "problem",
    title: "What I noticed in my first meeting",
    paragraphs: [
      "During my first meeting at LMA Marketing & Advertising, I noticed a team member processing datasets manually. Each dataset took more than an hour to prepare. Before the team could use the data, someone had to work through repetitive cleanup and updates.",
      "I took the initiative to build a tool for that cleanup. I wanted the team to be able to upload their files and get updated datasets back without repeating the same manual steps.",
    ],
  },
  {
    id: "approach",
    title: "Working with the files the team already used",
    paragraphs: [
      "I built the ServiceTitan File Cleaner around three inputs: a new ServiceTitan export, the current master dataset, and the current new-leads-only dataset. The team could keep using its existing CSV files.",
      "The Python pipeline standardizes column names through configured aliases, trims inconsistent whitespace, normalizes recognizable dates and monetary amounts, and fills missing calendar fields. It removes blank, section-label, and incomplete rows by requiring Customer ID, Created Date, Invoice Business Unit, and Job Type.",
      "Cleaning rules live separately from the Streamlit interface, making the processing logic easier to inspect and maintain as export formats change.",
    ],
  },
  {
    id: "automation",
    title: "Checking duplicates and updating the files",
    paragraphs: [
      "After cleaning, the tool compares incoming records with the uploaded master using a fingerprint of configured fields. Matching records are skipped, while new records are appended. It also identifies customer IDs absent from the supplied master and adds their first encountered records to the new-leads dataset.",
      "The workflow produces four downloadable files: the cleaned export, updated master, updated new-leads-only dataset, and a period comparison. The comparison summarizes records, unique customers, and revenue for the current period, the preceding period of equal length, and the same period a year earlier.",
      "New-customer counts depend on the uploaded history. The comparison’s new-customer figures use customers identified during the current import, so they are not a complete historical acquisition comparison.",
    ],
  },
  {
    id: "interface",
    title: "Making it usable after my internship",
    paragraphs: [
      "No one else at the company worked with Python or advanced code, so the tool needed to be understandable and usable without me there to run it. I built a browser interface around the processing logic so the team could upload files, run the cleanup, and download the results without editing code or using a command line.",
      "I also needed to make the process easy to explain. I framed it around the team’s familiar files and tasks: which datasets to upload, what the tool changes, what to review, and which updated files to keep for the next run. The goal was for the team to continue using it independently after my internship ended.",
      "Each file has a labeled upload area. An expandable explanation describes the difference between the master history and the new-leads-only file, and processing becomes available once all three CSVs are uploaded.",
      "After processing, the app displays valid-record, added-record, skipped-duplicate, and new-customer counts alongside the downloads. This gives the person running the tool a summary to review before keeping the updated files.",
      "The upload-based workflow processes files in memory for the current session instead of writing customer datasets to the server’s disk. Users download their updated copies before leaving the page. The screenshot shows the initial upload screen, without customer records.",
    ],
  },
  {
    id: "result",
    title: "What I built",
    paragraphs: [
      "The working tool cleans the export, checks for duplicates, updates the datasets, and prepares comparison reports through the browser interface.",
      "The manual process took more than an hour per dataset. I still need a timed comparison to say how much time the tool saves, including the time spent reviewing and downloading its output.",
    ],
  },
  {
    id: "reflection",
    title: "What I’d check next",
    paragraphs: [
      "I would compare a representative set of outputs with manually reviewed files and time the full process. I would also show why each excluded row was removed, so the team could spot records that need attention.",
    ],
  },
];
