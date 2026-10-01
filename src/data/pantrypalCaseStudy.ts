import type { CaseSection } from "./caseStudies";
export const pantrypalOverview = [
  { label: "Context", value: "UC San Diego · COGS 188: AI Algorithms" },
  { label: "Collaboration", value: "I worked with a team" },
  { label: "Tools", value: "Python · pandas · NLTK · scikit-learn" },
];
export const pantrypalSections: CaseSection[] = [
  {
    id: "problem",
    title: "Start with what is in the kitchen",
    paragraphs: [
      "PantryPal helps people find recipes using ingredients they want to include and avoiding ones they do not want.",
      "I worked with a team in COGS 188 to build a Python command-line prototype. The program filters recipes by ingredients and removes repeated instructions. We also explored patterns in cooking methods.",
    ],
  },
  {
    id: "data",
    title: "Working with real recipe text",
    paragraphs: [
      "We used the Epicurious JSON file from the Eight Portions recipe dataset, loading recipe titles, ingredient lists, and instructions into a pandas DataFrame. Inconsistent ingredient wording and repeated instructions made text processing a central part of the work.",
      "The implementation compares lowercase ingredient text against the user’s inclusion and exclusion terms. It keeps recipes containing every requested term and removes recipes containing any excluded term. The matching rules are easy to check, but they do not resolve synonyms or ambiguous ingredient names.",
    ],
  },
  {
    id: "approach",
    title: "Selecting and cleaning a recipe",
    paragraphs: [
      "The command-line menu lets users browse matching recipes or request one selection. The selection function filters the dataset, randomly chooses a matching recipe, removes duplicate instruction sentences, and formats the title, ingredients, and directions. When no recipe matches, it returns an explicit no-results message.",
      "The final prototype retrieves existing recipes rather than composing new ones with a language model. Its cooking-method analysis runs alongside this selection flow; the clusters do not rank the recipes returned to users.",
    ],
  },
  {
    id: "methods",
    title: "Finding patterns in cooking methods",
    paragraphs: [
      "We used NLTK to tokenize instructions, identify verbs through part-of-speech tags, and reduce those verbs to their base forms. TF-IDF converted the resulting cooking-action text into numeric features, and K-Means grouped it into 15 clusters.",
      "The script displays representative words for each cluster and includes learning and validation curves based on inertia. These were tools for exploring the representation and cluster count, not measures of whether people found the recommended meals useful.",
    ],
  },
  {
    id: "result",
    title: "What the prototype returned",
    paragraphs: [
      "The final report documents a demonstration returning 47 recipes for the example constraints: include chicken and carrot, exclude broth and onion. It also describes a selected recipe, Asian Chicken and Cabbage Salad, with cleaned instructions. We did not measure an overall accuracy rate beyond this example.",
      "The report records an average BLEU score of 0.3743 over 10 sampled recipes for the deduplication evaluation. The implementation compares sequences of sentences before and after cleaning. That score measures overlap under the chosen setup; it does not establish readability, preserved meaning, or cooking quality.",
      "The deliverable was a command-line program and research report. A graphical interface, personalization, and additional constraints such as cooking time remained future work.",
    ],
  },
  {
    id: "reflection",
    title: "Improving ingredient matching",
    paragraphs: [
      "Ingredient matching is the clearest next improvement. Substring matching can miss synonyms or match unintended terms, and ingredient exclusion alone is not a validated allergy filter. A stronger version would normalize ingredients, explain why a recipe matches, and handle substitutions explicitly.",
      "I would pair that work with a simple interface and user evaluation: can people find an appropriate recipe, understand the instructions, and recover when nothing matches? That would help us evaluate whether the recipes are useful to people, which the text-overlap and clustering metrics cannot tell us.",
    ],
  },
];
