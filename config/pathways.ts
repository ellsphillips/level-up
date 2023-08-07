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
    'software-developer-mindset': 'Software Developer Mindset',
    'production-ready-python': 'Production-ready Python',
};

export const pathways: Pathway[] = [
    {
        title: 'Software Developer Mindset',
        slug: 'software-developer-mindset',
        banner: '/static/pathways/software-developer-mindset/banner.png',
        description:
            'Adopt a software developer mindset to build high-quality applications with maintainable code.',
        content: [
            {
                name: 'Getting Started',
                content: [
                    {
                        name: 'Software Developer Mindset',
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
                        name: 'Data-Driven Design',
                        slug: 'data-driven-design',
                    },
                    {
                        name: 'Favour Composition Over Inheritance',
                        slug: 'favour-composition-over-inheritance',
                    },
                    {
                        name: 'Optimise Cohesion and Coupling',
                        slug: 'optimise-cohesion-and-coupling',
                    },
                    {
                        name: 'Depend on Abstractions',
                        slug: 'depend-on-abstractions',
                    },
                    {
                        name: 'Separate Creation from Use',
                        slug: 'separate-creation-from-use',
                    },
                ],
            },
            {
                name: 'Wrap Up',
                content: [
                    {
                        name: 'Pathway resources',
                        slug: 'resources',
                    },
                ],
            },
        ],
    },
    {
        title: 'Data Engineer Toolkit',
        slug: 'data-engineer-toolkit',
        banner: '/static/pathways/data-engineer-toolkit/banner.png',
        description:
            'Learn the tools of the trade to build robust data products for business.',
        content: [
            {
                name: 'Getting Started',
                content: [
                    {
                        name: 'Data Engineer Toolkit',
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
                        name: 'Modern Environment',
                        slug: 'modern-environment',
                    },
                ],
            },
            {
                name: 'Wrap Up',
                content: [
                    {
                        name: 'Pathway resources',
                        slug: 'resources',
                    },
                ],
            },
        ],
    },
];
