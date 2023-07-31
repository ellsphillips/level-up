import { GetStaticPaths, GetStaticProps } from 'next';

import ListDetail from '@/components/article/Details';
import SeriesTOC from '@/components/article/SeriesTOC';
import { articleData } from '@/data/articles';
import lipsum from '@/data/lipsum';
import Layout from '@/layouts/Article';
import { Article, Series } from '@/types/article';
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
            <div className='py-12'>{item && <ListDetail item={item} />}</div>

            <div className='flex min-h-full min-w-0 flex-col items-center justify-center shadow-xl mt-4 overflow-hidden rounded-lg bg-gray-800 ring-1 ring-inset ring-white/5 aspect-[2/1]'></div>

            <div className='flex flex-col gap-8 pt-16 md:flex-row'>
                <SeriesTOC
                    series={articlesInSeries}
                    className='w-full md:w-1/3'
                />
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
