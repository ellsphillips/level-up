import Draft from '@/components/Draft';
import { MDXLayoutRenderer } from '@/components/MDX/MDXComponents';
import {
    formatSlug,
    getAllFilesFrontMatter,
    getFileBySlug,
    getFiles,
} from '@/lib/mdx';
import { FrontMatter } from '@/types/article';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

const DEFAULT_LAYOUT = 'Pathway';

export async function getStaticPaths() {
    const pathways = getFiles('pathways');

    return {
        paths: pathways.map(pathway => ({
            params: {
                slug: formatSlug(pathway).split('/'),
            },
        })),
        fallback: false,
    };
}

// @ts-ignore
export const getStaticProps: GetStaticProps<{
    pathway: { mdxSource: string; frontMatter: FrontMatter };
    prev?: { slug: string; title: string };
    next?: { slug: string; title: string };
}> = async ({ params }) => {
    const slug = (params.slug as string[]).join('/');
    const allPathways = await getAllFilesFrontMatter('pathways');

    const pathwayIndex = allPathways.findIndex(
        pathway => formatSlug(pathway.slug) === slug,
    );
    let prev: { slug: string; title: string } =
        allPathways[pathwayIndex + 1] || null;
    let next: { slug: string; title: string } =
        allPathways[pathwayIndex - 1] || null;
    const pathway = await getFileBySlug<FrontMatter>('pathways', slug);
    if (prev && prev.slug.includes('references')) {
        prev = null;
    }

    if (next && next.slug.includes('welcome-to-the-pathway')) {
        next = null;
    }

    return {
        props: {
            pathway,
            prev,
            next,
        },
    };
};

export default function Pathway({
    pathway,
    prev,
    next,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { mdxSource, frontMatter } = pathway;

    return (
        <>
            {'draft' in frontMatter && frontMatter.draft !== true ? (
                <MDXLayoutRenderer
                    layout={frontMatter.layout || DEFAULT_LAYOUT}
                    mdxSource={mdxSource}
                    frontMatter={frontMatter}
                    prev={prev}
                    next={next}
                />
            ) : (
                <Draft />
            )}
        </>
    );
}
