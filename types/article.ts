export enum Pathway {
    SoftwareDeveloperMindset = 'Software Developer Mindset',
    DataEnginerToolkit = 'Data Engineer Toolkit',
    DataScientistLab = 'Data Scientist Lab',
}

export type Article = {
    id: number;
    date: string;
    title: string;
    description: string;
    pathway?: Pathway;
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
    pathway?: string;
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
