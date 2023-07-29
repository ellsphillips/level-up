import { slug } from 'github-slugger';

const slugify = (str: string) => slug(str);

export default slugify;
