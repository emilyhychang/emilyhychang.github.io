import type { CaseSection } from "./caseStudies";
export const smartBasketOverview = [
  { label: "Role", value: "UI/UX Designer · User Researcher" },
  { label: "Context", value: "Team project · Spring 2026" },
  { label: "Tools", value: "Figma · Interviews · Usability testing" },
];
export const smartBasketSections: CaseSection[] = [
  {
    id: "problem",
    title: "A balance is only the starting point",
    paragraphs: [
      "Knowing an EBT balance does not answer the next question: what can I buy, and how can I make this last through the month? Our research found that participants filled that gap with mental math, phone calculators, notes, and memory.",
      "I worked with a team to design Smart Basket, a proposed extension of ebtEDGE. As a UI/UX designer and user researcher, I explored how budgeting tools could connect a remaining balance to a practical grocery plan. The deliverable was a high-fidelity prototype.",
    ],
  },
  {
    id: "research",
    title: "Understanding the work around the app",
    paragraphs: [
      "We conducted semi-structured interviews with three active EBT users, ages 19–21, about budgeting, grocery trips, in-store spending decisions, checkout, and their experience with ebtEDGE. To prioritize comfort around a sensitive financial topic, one team member led each conversation while another took notes instead of recording.",
      "Participants described approximate budgets and frequent adjustments while shopping. Use of ebtEDGE was limited: one participant did not know about it, another had deleted it after login frustrations, and another checked it only monthly. Checking a balance was separate from the everyday work of deciding what to buy.",
      "Sales and remaining funds shaped in-store choices, while payment rules and inconsistent checkout experiences added uncertainty. These interviews pointed us toward planning support that was quick to understand and flexible enough for changing grocery decisions.",
    ],
  },
  {
    id: "approach",
    title: "Three ways to turn a balance into a plan",
    paragraphs: [
      "Smart Basket combined a Balance Predictor, Budget Calendar, and Suggested Grocery List. The predictor explored how a planned purchase would change the remaining balance. The calendar supported weekly targets and adjustable spending categories. The grocery list organized items and estimated prices within a weekly budget.",
      "The account dashboard became the entry point for each tool. We replaced a single ‘Manage my budget’ button with dedicated feature buttons so users could move directly to the task they needed. The design also explored visual distinctions between predicted and actual balances to help keep those amounts clear.",
    ],
  },
  {
    id: "testing",
    title: "Less entry, more understanding",
    paragraphs: [
      "During prototype walkthroughs, we asked participants what they noticed first, how they interpreted each screen, and which labels or actions felt unclear. Comparing milestone versions helped us examine scanning, navigation, and budgeting support.",
      "Participants responded to balance cards, weekly spending targets, progress bars, and the Budget Calendar. These visual summaries aligned with how they wanted to plan across the week. Item-by-item price entry was less appealing during an actual shopping trip, even when the calculator’s purpose was useful.",
      "Feedback also highlighted vague language such as ‘Dynamic’ and ‘More,’ as well as gray controls and warning-like colors that could feel unwelcoming. We used these observations to simplify language, strengthen hierarchy, and make the budgeting screens more approachable.",
    ],
  },
  {
    id: "iteration",
    title: "Small changes at the point of confusion",
    paragraphs: [
      "The weekly budget treatment adopted the light blue used elsewhere in the design. A scrolling category list replaced the ‘More’ dropdown, bringing options into view, while clearer price formatting made totals easier to scan.",
      "The calculator’s action became ‘Add Item & Price’ to explain the expected input. An ‘x’ beside planned purchases let users remove items without restarting. For the Suggested Grocery List, larger category headings and category-specific ‘Add Item’ labels clarified where new entries would appear.",
      "The workflow below captures the team’s prototype and milestone iterations, from account access to the three budgeting tools.",
    ],
  },
  {
    id: "reflection",
    title: "What the prototype established",
    paragraphs: [
      "The project produced a high-fidelity mobile prototype shaped by interviews and qualitative usability feedback. The clearest direction was simpler, more visual planning with direct access to tools and less ambiguity around balances, categories, and inputs.",
      "The initial interviews covered only three young adults, so their experiences do not represent all EBT users. The project did not measure changes in spending, food waste, or benefits lasting longer. Those remain outcomes to evaluate beyond the prototype.",
      "For a next iteration, I would test with a broader range of households and focus on whether people can distinguish predicted balances from actual funds, adjust a weekly plan, and use the tools with minimal effort during a grocery trip.",
    ],
  },
];
