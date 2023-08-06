import PathwayContent from '@/components/PathwayContent';
import Footer from '@/components/theme/Footer';
import Nav from '@/components/theme/Nav';
import config from 'config';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

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
            <div className='max-w-6xl p-8 mx-auto'>
                <Nav />

                <h1 className='text-4xl font-bold'>{title}</h1>

                <div className='divide-y-2 divide-gray-100 fade-in dark:divide-gray-800'>
                    <PathwayContent pathway={pathway} />
                </div>

                <Footer />
            </div>
        </>
    );
}