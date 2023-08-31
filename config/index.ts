import { Pathway, pathways } from './pathways';

interface Config {
    pathways: Pathway[];
    repo: string;
}

const config: Config = {
    pathways,
    repo: 'https://www.github.com/ellsphillips/level-up',
};

export const POSTS_PER_PAGE = 10;

export default config;
