import Hero from '@/components/Hero';
import Layout from '@/layouts/App';

import Card from '@/components/pathway/Card';
import { articleData } from '@/data/articles';

const IndexPage = () => (
    <Layout title='LEVEL-UP! - Home'>
        <Hero />

        <section className='py-8 space-y-8'>
            <h2 className='text-2xl font-bold'>Career pathways</h2>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {articleData.map((article, i) => (
                    <Card key={i} {...article} />
                ))}
            </div>
        </section>
    </Layout>
);

export default IndexPage;
