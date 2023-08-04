export enum Series {
    ProductionReadyPython = 'Production-ready Python',
    VisualisingMaps = 'Visualising Maps',
}

export type Article = {
    id: number;
    date: string;
    title: string;
    description: string;
    series?: Series;
    tags: string[];
    thumbnail?: string;
};

export interface Tag {
    name: string;
    count: number;
}

export type FrontMatter = {
    layout?: string;
    title: string;
    summary: string;
    date: string;
    tags: string[];
    series?: string;
    slug: string;
    images?: string[];
    readingTime: any;
    fileName: string;
};

export type Author = {
    name: string;
    avatar: string;
    role: string;
};
