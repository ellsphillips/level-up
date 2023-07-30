import { Article, Series } from '@/types/article';

export const articleData: Article[] = [
    {
        id: 1,
        date: '2023-05-01',
        title: 'Modern Python development',
        description: 'Setting up a modern Python development environment.',
        series: Series.ProductionReadyPython,
        tags: ['python', 'poetry'],
        thumbnail: 'example',
    },
    {
        id: 2,
        date: '2023-05-01',
        title: 'Dataclasses are awesome',
        description: 'Use dataclasses to model data-driven structures.',
        tags: ['python'],
    },
    {
        id: 3,
        date: '2023-05-01',
        title: 'Depend on abstraction',
        description: "Leverage Python's type system to decouple code.",
        series: Series.ProductionReadyPython,
        tags: ['python'],
    },
    {
        id: 4,
        date: '2023-05-01',
        title: 'Sveltekit starter pack',

        description: 'Quick start guide to initialising a Sveltekit project.',
        tags: ['svelte', 'tailwind', 'typescript', 'vite'],
    },
    {
        id: 5,
        date: '2023-05-01',
        title: 'Tips for Better Code Review',
        description: "Code reviews are important, let's do them right.",
        tags: ['git'],
    },
    {
        id: 6,
        date: '2023-05-01',
        title: '7 design principles for modern developers',
        description: 'Adopt a modern software development mindset.',
        series: Series.ProductionReadyPython,
        tags: ['productivity'],
    },
    {
        id: 7,
        date: '2023-05-01',
        title: 'Build interactive maps with Mapbox',
        description: 'Unlock the power of map visualisation with Mapbox.',
        series: Series.VisualisingMaps,
        tags: ['mapbox', 'typescript'],
    },
    {
        id: 8,
        date: '2023-05-01',
        title: 'Understanding UK Geography',
        description: 'Visualise data across the UK at different levels.',
        tags: ['svelte'],
    },
    {
        id: 9,
        date: '2023-05-01',
        title: 'Loading data with Sveltekit',
        description: "Learn to load data rapidly with Svelte's load API.",
        tags: ['svelte'],
    },
];
