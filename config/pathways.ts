export type PathwayContent = {
    name: string;
    slug?: string;
    description?: string;
    content?: PathwayContent[];
};

export interface Pathway {
    title: string;
    slug: string;
    banner: string;
    description: string;
    content: PathwayContent[];
}

export const pathwaySlugMap = {
    'production-ready-python': 'Production-ready Python',
};

export const pathways: Pathway[] = [
    {
        title: 'Production-ready Python',
        slug: 'production-ready-python',
        banner: '/static/pathways/production-ready-python/banner.png',
        description:
            'Adopt a software developer mindset to build high-quality applications with maintainable code.',
        content: [
            {
                name: 'Getting Started',
                content: [
                    {
                        name: 'Production-ready Python',
                        slug: 'welcome',
                    },
                    {
                        name: "What's in store?",
                        slug: 'whats-in-store',
                    },
                ],
            },
            {
                name: 'Pathway content',
                content: [
                    {
                        name: 'Favour Composition Over Inheritance',
                        slug: 'favour-composition-over-inheritance',
                    },
                    {
                        name: 'High Cohesion',
                        slug: 'high-cohesion',
                    },
                    {
                        name: 'Low Coupling',
                        slug: 'low-coupling',
                    },
                    {
                        name: 'Start with the Data',
                        slug: 'start-with-the-data',
                    },
                    {
                        name: 'Depend on Abstractions',
                        slug: 'depend-on-abstractions',
                    },
                    {
                        name: 'Separate Creation from Use',
                        slug: 'separate-creation-from-use',
                    },
                    {
                        name: 'Keep Things Simple',
                        slug: 'keep-things-simple',
                    },
                ],
            },
            {
                name: 'Wrap Up',
                content: [],
            },
        ],
    },
];
