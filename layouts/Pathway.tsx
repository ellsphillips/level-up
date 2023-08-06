import Link from '@/components/Link';
import SeriesTOC from '@/components/article/SeriesTOC';
import Counter from '@/components/demo/Counter';
import NextPeviousPage from '@/components/pathway/NextPeviousPage';
import Footer from '@/components/theme/Footer';
import Nav from '@/components/theme/Nav';
import Section from '@/components/theme/Section';
import { Article, FrontMatter } from '@/types/article';
import Head from 'next/head';
import { ReactNode, useState } from 'react';
import { BsDot } from 'react-icons/bs';

interface Props {
    frontMatter: FrontMatter;
    next?: { slug: string; title: string };
    prev?: { slug: string; title: string };
    children: ReactNode;
}

export default function PathwayLayout({
    frontMatter,
    next,
    prev,
    children,
}: Props) {
    const { slug, summary, title, readingTime, images } = frontMatter;

    const [pathwaySlug] = slug.split('/');
    const banner = images?.[0];

    const [articlesInSeries, setArticlesInSeries] = useState<Article[]>([]);

    return (
        <>
            <Head>
                <title>LEVEL-UP | {title}</title>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>

            <div className='absolute w-full -z-10'>
                <Section cta className='my-[36rem]' />
            </div>

            <main className='max-w-6xl p-8 mx-auto'>
                <Nav />

                <header className='py-12'>
                    <div className='flex flex-col gap-4'>
                        <span className='text-sm font-semibold tracking-wider text-gray-400 uppercase'>
                            {`Pathways / ${pathwaySlug} /`}
                        </span>
                        <h1 className='text-4xl font-bold'>{title}</h1>
                        <p className='text-gray-300'>{summary}</p>
                        <div className='flex items-center pt-8 text-sm text-gray-500 align-baseline dark:text-gray-400 xl:pt-8'>
                            <Link
                                href={`/pathways/${pathwaySlug}`}
                                className='hover:text-lu-grey-200 dark:hover:text-primary-400'
                            >
                                &larr; Back to pathway
                            </Link>
                            <BsDot className='text-4xl' />
                            <p>{readingTime.text}</p>
                        </div>
                    </div>
                </header>

                <div className='flex min-h-full min-w-0 flex-col items-center justify-center shadow-xl mt-4 overflow-hidden rounded-lg bg-gray-800 ring-1 ring-inset ring-white/5 aspect-[2/1]'>
                    {banner ? (
                        <img
                            src={banner}
                            className='object-cover object-center'
                            alt=''
                        />
                    ) : (
                        <Counter />
                    )}
                </div>

                <div className='flex flex-col gap-8 pt-16 md:flex-row'>
                    <SeriesTOC
                        series={articlesInSeries}
                        className='w-full md:w-1/3'
                    />
                    <article className='flex-1 prose fade-in max-w-none dark:prose-dark'>
                        {children}

                        <div className='pt-8 xl:divide-y xl:divide-gray-100 xl:dark:divide-gray-800'>
                            <div
                                className='pb-8 divide-y divide-gray-100 dark:divide-gray-800 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0'
                                style={{ gridTemplateRows: 'auto 1fr' }}
                            >
                                <div>
                                    <div className='xl:sticky xl:top-32'>
                                        <div className='text-sm font-medium leading-5 divide-gray-100 dark:divide-gray-800 xl:col-start-1 xl:row-start-2 xl:divide-y'>
                                            {(next || prev) &&
                                                NextPeviousPage({ next, prev })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <Footer />
            </main>
        </>
    );
}
