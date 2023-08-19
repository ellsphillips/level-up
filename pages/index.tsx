import Card from '@/components/pathway/Card';
import Section from '@/components/theme/Section';
import { articleData } from '@/data/articles';

import Footer from '@/components/theme/Footer';
import Nav from '@/components/theme/Nav';

const Home = () => (
    <>
        <main>
            <Section cta fade>
                <Nav />

                <div className='mt-64 mb-12 md:mt-28 lg:my-48'>
                    <h1 className='pb-12 text-5xl font-bold'>
                        Level-up your
                        <br />
                        developer toolkit
                        <br />
                        and mindset
                    </h1>
                    <p className='text-lg'>
                        Accelerate your learning in software development and
                        bridge <br />
                        the gap between junior and senior roles
                    </p>
                </div>
            </Section>

            <Section className='py-8 space-y-8 lg:-top-16'>
                <h2 className='text-2xl font-bold'>Career pathways</h2>

                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                    {articleData.map((article, i) => (
                        <Card key={i} {...article} />
                    ))}
                </div>
            </Section>
        </main>
        <Section>
            <Footer />
        </Section>
    </>
);

export default Home;
