import { GetStaticPaths, GetStaticProps } from 'next';

import ListDetail from '@/components/article/Details';
import { articleData } from '@/data/articles';
import lipsum from '@/data/lipsum';
import Layout from '@/layouts/Article';
import { Article, Series } from '@/types/article';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Props = {
    item?: Article;
    errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
    if (errors) {
        return (
            <Layout title='LEVEL-UP! - Error'>
                <p>
                    <span style={{ color: 'red' }}>Error:</span> {errors}
                </p>
            </Layout>
        );
    }

    const [articlesInSeries, setArticlesInSeries] = useState<Article[]>([]);

    useEffect(() => {
        setArticlesInSeries(
            articleData.filter(
                article => article.series === Series.ProductionReadyPython,
            ),
        );
    }, [item]);

    return (
        <Layout title={item ? item.title : 'Article Detail'}>
            <div className='py-16'>{item && <ListDetail item={item} />}</div>

            <div className='flex min-h-full min-w-0 flex-col items-center justify-center shadow-xl mt-4 overflow-hidden rounded-lg bg-gray-800 ring-1 ring-inset ring-white/5 aspect-[2/1]'></div>

            <div className='flex gap-8 pt-16'>
                <aside className='w-1/3'>
                    <a className='text-xl font-medium text-white sm:font-semibold'>
                        {item?.series}
                    </a>
                    <p className='mt-1 text-sm text-gray-500 sm:text-base'>
                        {articlesInSeries.length} lessons · 24 minute read
                    </p>
                    <div className='mt-4 space-y-1'>
                        {articlesInSeries.map((article, i) => {
                            return (
                                <Link
                                    href='/articles/[id]'
                                    as={`/articles/${article.id}`}
                                    className='flex items-center justify-between'
                                >
                                    <div
                                        className={`flex items-center w-full px-4 py-2 text-sm rounded hover:bg-slate-900 hover:cursor-pointer ${
                                            item.id === article.id &&
                                            'bg-slate-800'
                                        }`}
                                    >
                                        <span className='text-gray-500'>
                                            {i + 1}
                                        </span>
                                        <p className='flex-1 ml-4 text-white truncate'>
                                            {article.title}
                                        </p>
                                        <span className='ml-2 text-gray-500'>
                                            8 mins
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </aside>
                <article className='flex-1'>{lipsum}</article>
            </div>
        </Layout>
    );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = articleData.map(article => ({
        params: { id: article.id.toString() },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const id = params?.id;
        const item = articleData.find(data => data.id === Number(id));
        return { props: { item } };
    } catch (err: any) {
        return { props: { errors: err.message } };
    }
};
