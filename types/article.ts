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
