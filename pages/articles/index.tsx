import { GetStaticProps } from 'next';
import Link from 'next/link';

import Card from '@/components/article/Card';
import { articleData } from '@/data/articles';
import Layout from '@/layouts/App';
import slugify from '@/lib/utils/slugify';
import { Article } from '@/types/article';

type Props = {
    items: Article[];
};

const ArticlePage = ({ items }: Props) => (
    <Layout title='LEVEL-UP! - Articles'>
        <h1 className='pb-8 text-5xl font-bold'>Articles</h1>
        <div className='space-y-8'>
            {items.map(data => (
                <Link
                    href='/articles/[slug]'
                    as={`/articles/${slugify(data.title)}`}
                >
                    <Card {...data} />
                </Link>
            ))}
        </div>
    </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
    const items: Article[] = articleData;
    return { props: { items } };
};

export default ArticlePage;
