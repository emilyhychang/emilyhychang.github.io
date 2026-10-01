import type { CaseSection } from "./caseStudies";
export const smartBasketOverview = [
  { label: "Role", value: "UI/UX Designer · User Researcher" },
  { label: "Context", value: "Team project · Spring 2026" },
  { label: "Methods", value: "User Interviews · Usability Testing · Prototyping · Iterative Design (Figma)", },];
export const smartBasketSections: CaseSection[] = [
  {
    id: "problem",
    title: "Planning groceries with an EBT balance",
    paragraphs: [
      "The EBT users we interviewed relied on mental math, phone calculators, notes, and memory to plan groceries. Knowing their balance still left them to work out what they could buy and how to make the money last through the month.",
      "I worked with a team to design Smart Basket, a proposed extension of ebtEDGE. As a UI/UX designer and user researcher, I explored how budgeting tools could connect a remaining balance to a practical grocery plan. The deliverable was a high-fidelity prototype.",
    ],
  },
  {
    id: "research",
    title: "User research: how participants planned spending",
    paragraphs: [
      "We conducted semi-structured interviews with three active EBT users, ages 19 to 21, about budgeting, grocery trips, in-store spending decisions, checkout, and their experience with ebtEDGE. Because we were discussing personal finances, we chose not to record the interviews. One team member led the conversation while another took notes.",
      "Participants described approximate budgets and frequent adjustments while shopping. Use of ebtEDGE was limited: one participant did not know about it, another had deleted it after login frustrations, and another checked it only monthly. Checking a balance was separate from the everyday work of deciding what to buy.",
      "Sales and remaining funds shaped in-store choices, while payment rules and inconsistent checkout experiences added uncertainty. We wanted the tools to accommodate these changes during a grocery trip.",
    ],
  },
  {
    id: "approach",
    title: "The budgeting tools",
    paragraphs: [
      "Smart Basket combined a Balance Predictor, Budget Calendar, and Suggested Grocery List. The predictor explored how a planned purchase would change the remaining balance. The calendar supported weekly targets and adjustable spending categories. The grocery list organized items and estimated prices within a weekly budget.",
      "The account dashboard became the entry point for each tool. We replaced a single ‘Manage my budget’ button with dedicated feature buttons so users could move directly to the task they needed. The design also explored visual distinctions between predicted and actual balances to help keep those amounts clear.",
    ],
  },
  {
    id: "testing",
    title: "What we heard in walkthroughs",
    paragraphs: [
      "During prototype walkthroughs, we asked participants what they noticed first, how they interpreted each screen, and which labels or actions felt unclear. Comparing milestone versions helped us examine scanning, navigation, and budgeting support.",
      "Participants responded to balance cards, weekly spending targets, progress bars, and the Budget Calendar. They preferred these visual ways to plan across the week. Item-by-item price entry was less appealing during an actual shopping trip, even when the calculator’s purpose was useful.",
      "Participants also pointed out vague language such as ‘Dynamic’ and ‘More,’ as well as gray controls and warning-like colors that could feel unwelcoming. We revised the labels and colors and made important information easier to find.",
    ],
  },
  {
    id: "iteration",
    title: "Revising the screens",
    paragraphs: [
      "The weekly budget treatment adopted the light blue used elsewhere in the design. A scrolling category list replaced the ‘More’ dropdown, bringing options into view, while clearer price formatting made totals easier to scan.",
      "The calculator’s action became ‘Add Item & Price’ to explain the expected input. An ‘x’ beside planned purchases let users remove items without restarting. For the Suggested Grocery List, larger category headings and category-specific ‘Add Item’ labels clarified where new entries would appear.",
      "The workflow below captures the team’s prototype and milestone iterations, from account access to the three budgeting tools.",
    ],
  },
  {
    id: "reflection",
    title: "What we learned and still need to test",
    paragraphs: [
      "We finished a high-fidelity mobile prototype based on the interviews and usability feedback. Participants’ responses led us toward visual planning tools, direct access from the dashboard, and clearer labels for balances and inputs.",
      "The initial interviews covered only three young adults, so their experiences do not represent all EBT users. The project did not measure changes in spending, food waste, or benefits lasting longer. Those remain outcomes to evaluate beyond the prototype.",
      "For a next iteration, I would test with a broader range of households and focus on whether people can distinguish predicted balances from actual funds, adjust a weekly plan, and use the tools with minimal effort during a grocery trip.",
    ],
  },
];
