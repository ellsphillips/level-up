import Overview from '@/components/pathway/Overview';
import Accordion from '@/components/theme/Accordion';
import Footer from '@/components/theme/Footer';
import Nav from '@/components/theme/Nav';
import config from 'config';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import roles from '@/data/roles.json';

const SLUG = 'software-developer-mindset';

export function getStaticProps() {
    let pathway = config.pathways.find(pathway => pathway.slug === SLUG);
    return { props: { pathway } };
}

export default function SoftwareDeveloperMindset(
    props: InferGetStaticPropsType<typeof getStaticProps>,
): React.ReactElement {
    const { pathway } = props;
    const { title, description } = pathway;

    const criteria = roles[SLUG];

    return (
        <>
            <Head>
                <title>LEVEL-UP! | {title}</title>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>
            <div className='flex flex-col max-w-6xl min-h-full p-8 mx-auto'>
                <Nav />

                <h1 className='text-4xl font-bold'>{title}</h1>

                <div className='pb-24 divide-y-2 divide-gray-100 fade-in dark:divide-gray-800'>
                    <Overview pathway={pathway} />
                </div>

                <h2 className='pb-8 text-2xl font-bold'>
                    Skills needed to be a Software Developer
                </h2>
                <Accordion items={criteria} />

                <Footer />
            </div>
        </>
    );
}
