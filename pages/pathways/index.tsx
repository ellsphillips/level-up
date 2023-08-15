import Footer from '@/components/theme/Footer';
import Nav from '@/components/theme/Nav';
import Head from 'next/head';

import Card from '@/components/pathway/Card';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { FrontMatter } from '@/types/article';
import config from 'config';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

// @ts-ignore
export const getStaticProps: GetStaticProps<{
    allFrontMatter: FrontMatter[];
}> = async () => {
    const allFrontMatter = await getAllFilesFrontMatter('pathways');

    return {
        props: {
            allFrontMatter,
        },
    };
};

export default function Pathway({
    allFrontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { pathways } = config;

    const pathwayInfo = pathways.map(pathway => ({
        title: pathway.title,
        slug: pathway.slug,
        articles: allFrontMatter.filter(fm => fm.slug.includes(pathway.slug)),
    }));

    return (
        <>
            <Head>
                <title>LEVEL-UP! | Pathways</title>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>

            <div className='max-w-6xl p-8 mx-auto'>
                <Nav />

                <h1 className='py-8 text-4xl font-bold'>Pathways</h1>

                <div className='divide-y-2 divide-slate-700/25'>
                    {pathwayInfo.map(pathway => (
                        <section className='py-16 mx-auto space-y-8 max-w-7xl'>
                            <h2 className='text-2xl font-bold text-slate-800 dark:text-slate-100'>
                                {pathway.title}
                            </h2>
                            <div className='grid gap-8 lg:grid-cols-3'>
                                {pathway.articles.map((article, i) => (
                                    <Card
                                        id={i + 1}
                                        title={article.title}
                                        readingTime={article.readingTime}
                                        thumbnail={`pathways/${article.slug}`}
                                        description={article.summary}
                                        slug={article.slug}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <Footer />
            </div>
        </>
    );
}
