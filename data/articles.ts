import { Article, Series } from "@/types/article";

export const articleData: Article[] = [
  {
    id: 1,
    date: "2023-05-01",
    title: "Modern Python development",
    description:
      "A guide on how to setup a modern Python development environment.",
    series: Series.ProductionReadyPython,
    tags: ["python", "poetry"],
  },
  {
    id: 2,
    date: "2023-05-01",
    title: "Dataclasses are awesome",
    description: "A guide on how to use dataclasses in Python.",
    tags: ["python"],
  },
  {
    id: 3,
    date: "2023-05-01",
    title: "Depend on abstraction",
    description: "A guide on how to use abstraction in Python.",
    series: Series.ProductionReadyPython,
    tags: ["python"],
  },
  {
    id: 4,
    date: "2023-05-01",
    title: "Sveltekit starter pack",

    description: "A guide on how to use Sveltekit.",
    tags: ["svelte", "tailwind", "typescript", "vite"],
  },
  {
    id: 5,
    date: "2023-05-01",
    title: "Tips for Better Code Review",
    description: "A guide on how to do code reviews.",
    tags: ["git"],
  },
  {
    id: 6,
    date: "2023-05-01",
    title: "7 design principles for modern developers",
    description: "A guide on how to design software.",
    series: Series.ProductionReadyPython,
    tags: ["productivity"],
  },
  {
    id: 7,
    date: "2023-05-01",
    title: "Build interactive maps with Mapbox",
    description: "A guide on how to use Mapbox.",
    series: Series.VisualisingMaps,
    tags: ["mapbox", "typescript"],
  },
  {
    id: 8,
    date: "2023-05-01",
    title: "Understanding UK Geography",
    description: "Visualise data across the UK at different levels.",
    tags: ["svelte"],
  },
  {
    id: 9,
    date: "2023-05-01",
    title: "Loading data with Sveltekit",
    description: "A guide on how to load data with Sveltekit.",
    tags: ["svelte"],
  },
];
