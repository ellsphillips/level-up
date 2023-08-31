import getAllFilesRecursively from '@/lib/utils/files';
import { FrontMatter } from '@/types/article';
import fs from 'fs';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import path from 'path';
import readingTime from 'reading-time';
// Remark packages
import remarkCodeTitles from '@/lib/remark/code-title';
import remarkExtractFrontmatter from '@/lib/remark/extract-frontmatter';
import remarkImgToJsx from '@/lib/remark/img-to-jsx';
import remarkFootnotes from 'remark-footnotes';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
// Rehype packages
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCitation from 'rehype-citation';
import rehypeKatex from 'rehype-katex';
import rehypePresetMinify from 'rehype-preset-minify';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import darkTheme from '../styles/dark-plus.json';
// import lightTheme from '../styles/light-plus.json';

const root = process.cwd();

export function getFiles(type: 'pathways' | 'recipes') {
    const prefixPaths = path.join(root, 'data', type);
    const files = getAllFilesRecursively(prefixPaths);
    // Only want to return pathways/path and ignore root, replace is needed to work on Windows
    return files.map(file =>
        file.slice(prefixPaths.length + 1).replace(/\\/g, '/'),
    );
}

export function formatSlug(slug: string) {
    return slug.replace(/\.(mdx|md)/, '');
}

export function dateSortDesc(a: string, b: string) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
}

export async function getFileBySlug<T>(
    type: 'pathways' | 'recipes',
    slug: string | string[],
) {
    const mdxPath = path.join(root, 'data', type, `${slug}.mdx`);
    const mdPath = path.join(root, 'data', type, `${slug}.md`);
    const source = fs.existsSync(mdxPath)
        ? fs.readFileSync(mdxPath, 'utf8')
        : fs.readFileSync(mdPath, 'utf8');

    // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
    if (process.platform === 'win32') {
        process.env.ESBUILD_BINARY_PATH = path.join(
            root,
            'node_modules',
            'esbuild',
            'esbuild.exe',
        );
    } else {
        process.env.ESBUILD_BINARY_PATH = path.join(
            root,
            'node_modules',
            'esbuild',
            'bin',
            'esbuild',
        );
    }

    const { code, frontmatter } = await bundleMDX({
        source,
        // mdx imports can be automatically source from the components directory
        cwd: path.join(root, 'components'),
        xdmOptions(options, frontmatter) {
            // this is the recommended way to add custom remark/rehype plugins:
            // The syntax might look weird, but it protects you in case we add/remove
            // plugins in the future.
            options.remarkPlugins = [
                ...(options.remarkPlugins ?? []),
                remarkExtractFrontmatter,
                remarkGfm,
                remarkCodeTitles,
                [remarkFootnotes, { inlineNotes: true }],
                remarkMath,
                remarkImgToJsx,
            ];
            options.rehypePlugins = [
                ...(options.rehypePlugins ?? []),
                rehypeSlug,
                rehypeAutolinkHeadings,
                rehypeKatex,
                [rehypeCitation, { path: path.join(root, 'data') }],
                [rehypePrettyCode, { theme: darkTheme }],
                rehypePresetMinify,
            ];
            return options;
        },
        esbuildOptions: options => {
            options.loader = {
                ...options.loader,
                '.js': 'jsx',
            };
            return options;
        },
    });

    return {
        mdxSource: code,
        frontMatter: {
            readingTime: readingTime(code),
            slug: slug || null,
            fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
            ...frontmatter,
            date: frontmatter.date
                ? new Date(frontmatter.date).toISOString()
                : null,
        },
    };
}

export async function getAllFilesFrontMatter(folder: 'pathways' | 'recipes') {
    const prefixPaths = path.join(root, 'data', folder);

    const files = getAllFilesRecursively(prefixPaths);

    const allFrontMatter: FrontMatter[] = [];

    files.forEach((file: string) => {
        // Replace is needed to work on Windows
        const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/');
        // Remove Unexpected File
        if (
            path.extname(fileName) !== '.md' &&
            path.extname(fileName) !== '.mdx'
        ) {
            return;
        }
        const source = fs.readFileSync(file, 'utf8');
        const matterFile = matter(source);
        const frontmatter = matterFile.data as FrontMatter;
        if ('draft' in frontmatter && frontmatter.draft !== true) {
            allFrontMatter.push({
                ...frontmatter,
                slug: formatSlug(fileName),
                date: frontmatter.date
                    ? new Date(frontmatter.date).toISOString()
                    : null,
            });
        }
    });

    return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date));
}
