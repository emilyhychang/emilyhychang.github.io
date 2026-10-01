import type { CaseSection } from "./caseStudies";

export const cornerstoneOverview = [
  { label: "Client", value: "Mud Lily Clay · San Diego" },
  { label: "Collaboration", value: "I worked with a team" },
  { label: "Focus", value: "User Research · Stakeholder Management · Analytics · UX Design",  },
];

export const cornerstoneSections: CaseSection[] = [
  {
    id: "problem",
    title: "Helping customers choose the right pottery experience",
    paragraphs: [
      "Mud Lily Clay offers one-time pottery experiences, multi-week classes, studio access, memberships, and private events. Customers need to understand the differences before booking.",
      "The Squarespace site was difficult to update, and moving from the site into Acuity Scheduling made booking harder. I worked with a team to help visitors find a suitable class and book it.",
      "The wider project also covered email automation and improvements to studio operations. Here, I focus on the website redesign and analytics.",
    ],
  },
  {
    id: "research",
    title: "User research revealed two customer needs",
    paragraphs: [
      "I began the user research with a stakeholder interview, translating the client's business goals and customer observations into two primary user groups and their needs. In a stakeholder interview, the client described two main customer groups and their priorities. ",
      "One-time visitors wanted a creative experience or a way to unwind. Structured learners wanted a clear course progression, reliable studio access, and a sense of community.",
      "Those needs suggested different routes through the site. A first-time visitor needs to understand what an experience includes and how to book it. A returning learner needs to find courses or studio time without repeatedly working through introductory information.",
      "The interview also identified Google Search as an important discovery channel and a desire to make the website more useful to recurring customers. We compared that account with site analytics and later usability feedback.",
    ],
  },
  {
    id: "approach",
    title: "Pageviews helped prioritize the structure",
    paragraphs: [
      "The analytics review compared popular pages with rarely viewed content. In the April 15 to May 14, 2026 snapshot, Home, One-Visit Pottery, and Multi-Week Classes led the pageview report. That pattern supported giving the core offerings clear, direct routes from the homepage.",
      "Direct traffic was the largest source in the reports, followed by contributions from search and social. We used these reports alongside the interview to consider how people arrived at the site and where they went next.",
      "We combined similar pages and grouped the offerings in the navigation. The proposed sitemap led from Home to a class type to booking, while keeping information needed for search visibility.",
    ],
  },
  {
    id: "decisions",
    title: "Designing within Squarespace and Acuity",
    paragraphs: [
      "Acuity remained the booking platform, which limited how much the team could restructure scheduling inside Squarespace. The redesign therefore focused on clearer entry points, booking-page formatting, and the presentation of different session types.",
      "The client also wanted to preserve keyword-rich content. Consolidating pages meant reorganizing information and shortening repetitive copy while keeping useful detail available. The design work paired those structural changes with more consistent typography, spacing, buttons, and page layouts.",
      "The client preferred Squarespace for future maintenance. Implementation included an update to version 7.1 and adaptations to the platform’s layout constraints. Some designs needed adjustments because Squarespace shares settings between desktop and mobile layouts. The final presentation compares the designs with the implementation.",
    ],
  },
  {
    id: "iteration",
    title: "Changes after user testing",
    paragraphs: [
      "We developed low- and mid-fidelity layouts, a prototype, a style guide, and high-fidelity designs. After user testing, we standardized header capitalization and hierarchy, enlarged mobile buttons and text, and cut repetitive copy.",
    ],
  },
  {
    id: "presentation",
    title: "The client presentation",
    paragraphs: [
      "We presented our research, analytics, and design recommendations to the client, incorporating stakeholder priorities and platform constraints into the final implementation.",
    ],
  },
  {
    id: "result",
    title: "The redesign and follow-up checks",
    paragraphs: [
      "We implemented the redesign in Squarespace with the revised sitemap and changes from user testing. The site used consistent layouts and kept the content and tools the client needed to maintain it.",
      "Our next steps were to check the live pages and booking flow, then monitor SEO and traffic. The analytics cover the review period, so we cannot yet report whether the redesign increased bookings or revenue.",
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
