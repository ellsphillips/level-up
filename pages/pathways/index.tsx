import Footer from '@/components/theme/Footer';
import Nav from '@/components/theme/Nav';
import Head from 'next/head';

export default function Pathways() {
    return (
        <>
            <Head>
                <title>LEVEL-UP! | Pathways</title>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>
            <div className='max-w-6xl p-8 mx-auto'>
                <Nav />

                <h1 className='text-4xl font-bold'>Pathways</h1>

                <Footer />
            </div>
        </>
    );
}
