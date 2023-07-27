import { GetStaticPaths, GetStaticProps } from 'next';

import ListDetail from '@/components/article/Details';
import { articleData } from '@/data/articles';
import lipsum from '@/data/lipsum';
import Layout from '@/layouts/Article';
import { Article } from '@/types/article';

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

    return (
        <Layout title={item ? item.title : 'Article Detail'}>
            <div className='py-16'>{item && <ListDetail item={item} />}</div>

            <div className='flex min-h-full min-w-0 flex-col items-center justify-center shadow-xl mt-4 overflow-hidden rounded-lg bg-gray-800 ring-1 ring-inset ring-white/5 lg:aspect-[2/1]'></div>

            <div className='flex gap-8 pt-16'>
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
