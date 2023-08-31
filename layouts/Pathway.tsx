import Link from '@/components/Link';
import NewsletterSignup from '@/components/NewsletterSignup';
import Counter from '@/components/demo/Counter';
import NextPeviousPage from '@/components/pathway/NextPeviousPage';
import PathwayTOC from '@/components/pathway/PathwayTOC';
import Footer from '@/components/theme/Footer';
import Nav from '@/components/theme/Nav';
import Section from '@/components/theme/Section';
import { FrontMatter } from '@/types/article';
import config from 'config';
import { pathways } from 'config/pathways';
import Head from 'next/head';
import { ReactNode } from 'react';
import { BsDot, BsDownload, BsGithub } from 'react-icons/bs';

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

    const articlesInPathway = pathways
        .filter(p => p.slug === pathwaySlug)[0]
        .content.filter(c => c.name === 'Pathway content')[0].content;

    return (
        <>
            <Head>
                <title>{`LEVEL-UP | ${title}`}</title>
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
                    <section className='flex flex-col gap-4'>
                        <span className='text-sm font-semibold tracking-wider uppercase text-slate-700 dark:text-gray-400'>
                            {`Pathways / ${pathwaySlug} /`}
                        </span>
                        <h1 className='text-4xl font-bold dark:text-gray-100'>
                            {title}
                        </h1>
                        <p className='font-semibold text-slate-800 dark:text-gray-300'>
                            {summary}
                        </p>
                        <div className='flex items-center pt-8 text-sm align-baseline text-slate-800 dark:text-gray-400 xl:pt-8'>
                            <span className='mr-2'>&larr;</span>
                            <Link
                                href={`/pathways/${pathwaySlug}`}
                                className='hyperlink hover:text-slate-700 dark:hover:text-primary-400'
                            >
                                Back to pathway
                            </Link>
                            <BsDot className='text-4xl' />
                            <p>{readingTime.text}</p>
                        </div>
                    </section>
                </header>

                <section className='flex min-h-full min-w-0 flex-col items-center justify-center shadow-xl mt-4 overflow-hidden rounded-lg dark:bg-gray-800 bg-slate-200 ring-1 ring-inset ring-white/5 aspect-[2/1]'>
                    {banner ? (
                        <img
                            src={banner}
                            className='object-cover object-center'
                            alt=''
                        />
                    ) : (
                        <Counter />
                    )}
                </section>

                <section className='flex flex-col gap-8 pt-16 font-semibold lg:flex-row'>
                    <aside className='top-0 w-full pt-8 space-y-16 lg:sticky h-min lg:w-[40%] grow'>
                        <PathwayTOC
                            slug={pathwaySlug}
                            pathway={pathwaySlug
                                .split('-')
                                .map(
                                    word =>
                                        word.charAt(0).toUpperCase() +
                                        word.substring(1),
                                )
                                .join(' ')}
                            series={articlesInPathway}
                        />

                        <div className='space-y-4 transition-all'>
                            <Link
                                href={config.repo}
                                className='flex items-center space-x-2 cursor-pointer max-w-fit text-neutral-700 hover:text-primary-500 dark:text-neutral-400'
                            >
                                <BsGithub className='transition-colors' />
                                <span className='text-sm'>View source</span>
                            </Link>
                            <Link
                                href={config.repo}
                                className='flex items-center space-x-2 cursor-pointer max-w-fit text-neutral-700 hover:text-primary-500 dark:text-neutral-400'
                            >
                                <BsDownload strokeWidth={1} />
                                <span className='text-sm'>Download</span>
                            </Link>
                        </div>

                        <div className='hidden w-full space-y-4 lg:block'>
                            <h3 className='text-neutral-700'>
                                Subscribe to our newsletter to stay updated
                            </h3>
                            <NewsletterSignup />
                        </div>
                    </aside>
                    <article className='flex-1 w-full pt-8 prose text-black max-w-none lg:max-w-prose grow dark:text-slate-100 fade-in dark:prose-dark'>
                        {children}

                        <div className='py-8 divide-y divide-gray-100 dark:divide-gray-800 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0'>
                            <div className='text-sm font-medium leading-5 dark:divide-gray-800'>
                                {(next || prev) &&
                                    NextPeviousPage({ next, prev })}
                            </div>
                        </div>
                    </article>

                    <div className='w-full space-y-4 lg:hidden'>
                        <h3 className='text-neutral-700'>
                            Subscribe to our newsletter to stay updated
                        </h3>
                        <NewsletterSignup />
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}
