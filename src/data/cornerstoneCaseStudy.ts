import type { CaseSection } from "./caseStudies";

export const cornerstoneOverview = [
  { label: "Client", value: "Mud Lily Clay · San Diego" },
  { label: "Collaboration", value: "I worked with a team" },
  {
    label: "Focus",
    value: "Website redesign · Analytics · Squarespace / Acuity",
  },
];

export const cornerstoneSections: CaseSection[] = [
  {
    id: "problem",
    title: "Helping customers choose the right pottery experience",
    paragraphs: [
      "Mud Lily Clay offers one-time pottery experiences, multi-week classes, studio access, memberships, and private events. That range gives customers several ways to participate, but it also asks them to understand the differences before booking.",
      "The existing Squarespace site was difficult to update, and the transition into Acuity Scheduling created friction. The team framed the redesign around a practical question: how could the website help visitors confidently find and book the offering that fit their needs?",
      "The wider engagement included analytics, email automation, and operational streamlining. This case focuses on the website redesign and analytics work documented in the final technical presentation.",
    ],
  },
  {
    id: "research",
    title: "Two different reasons to visit the studio",
    paragraphs: [
      "A stakeholder interview established the client’s priorities and described two main customer groups. One-time visitors wanted a creative experience or a way to unwind. Structured learners wanted a clear course progression, reliable studio access, and a sense of community.",
      "Those needs suggested different routes through the site. A first-time visitor needs to understand what an experience includes and how to book it. A returning learner needs to find courses or studio time without repeatedly working through introductory information.",
      "The interview also identified Google Search as an important discovery channel and a desire to make the website more useful to recurring customers. These were stakeholder insights, which the team considered alongside the site’s analytics and later usability feedback.",
    ],
  },
  {
    id: "approach",
    title: "Pageviews helped prioritize the structure",
    paragraphs: [
      "The analytics review compared popular pages with rarely viewed content. In the April 15–May 14, 2026 snapshot, Home, One-Visit Pottery, and Multi-Week Classes led the pageview report. That pattern supported giving the core offerings clear, direct routes from the homepage.",
      "Traffic-source reports added context to the stakeholder interview: direct traffic was the largest source in the presented reports, with search and social also contributing. The analysis treated discovery channels and on-site navigation as related parts of the customer journey.",
      "The team consolidated similar pages and grouped offerings into relevant navigation categories. The proposed sitemap centered the route from Home to class type to booking, while retaining information that mattered for search visibility.",
    ],
  },
  {
    id: "decisions",
    title: "Clarity within the client’s existing tools",
    paragraphs: [
      "Acuity remained the booking platform, which limited how much the team could restructure scheduling inside Squarespace. The redesign therefore focused on clearer entry points, booking-page formatting, and the presentation of different session types.",
      "The client also wanted to preserve keyword-rich content. Consolidating pages meant reorganizing information and shortening repetitive copy while keeping useful detail available. The design work paired those structural changes with more consistent typography, spacing, buttons, and page layouts.",
      "The client preferred Squarespace for future maintenance. Implementation included an update to version 7.1 and adaptations to the platform’s layout constraints. The final presentation shows differences between the original design and the implemented site, including the challenge of shared desktop and mobile design settings.",
    ],
  },
  {
    id: "iteration",
    title: "Usability feedback became specific revisions",
    paragraphs: [
      "The presentation documents a progression through low- and mid-fidelity work, a prototype, a style guide, and high-fidelity designs. User testing then led to concrete revisions: more consistent header capitalization and hierarchy, larger mobile buttons and text, and shorter repetitive copy.",
      "These changes addressed how the interface reads and behaves at the point of use. They also made mobile legibility an explicit part of the redesign rather than a final resizing exercise.",
    ],
  },
  {
    id: "presentation",
    title: "The client presentation",
    paragraphs: [
      "The final technical presentation connected the research and analytics to the sitemap, design decisions, usability iterations, and Squarespace implementation. The selected visuals below show the information architecture and booking treatment from that presentation.",
    ],
  },
  {
    id: "result",
    title: "An implemented redesign and a plan to evaluate it",
    paragraphs: [
      "The documented deliverable is a redesigned website implemented in Squarespace, supported by a revised sitemap, a consistent visual system, and usability-driven refinements. The work balanced clearer customer journeys with the tools and content the client needed to maintain.",
      "The presentation’s next steps were to spot-check the live site, test the booking experience, and monitor SEO and traffic after the update. Its analytics snapshots describe the site during the review period; they do not establish a post-redesign lift in bookings or revenue.",
    ],
  },
];

export const cornerstoneExcerpts = [
  {
    file: "sitemap.png",
    width: 1644,
    height: 310,
    title: "A clearer information architecture",
    source: "Final presentation · Slide 8",
    alt: "Proposed sitemap grouping classes, studio time, private events, shop, about, FAQs, account access, and scheduling.",
  },
  {
    file: "booking.png",
    width: 994,
    height: 517,
    title: "Distinct routes into studio time",
    source: "Final presentation · Slide 16",
    alt: "Booking design showing separate Acuity listings for independent studio time and guided practice.",
  },
];
