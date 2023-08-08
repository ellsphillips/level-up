import { Pathway, pathways } from './pathways';

interface Config {
    pathways: Pathway[];
}

const config: Config = {
    pathways,
};

export const POSTS_PER_PAGE = 10;

export default config;
