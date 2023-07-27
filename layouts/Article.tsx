import Footer from '@/components/theme/Footer';
import Nav from '@/components/theme/Nav';
import Head from 'next/head';
import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = 'LEVEL-UP!' }: Props) => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta
                name='viewport'
                content='initial-scale=1.0, width=device-width'
            />
        </Head>
        <div className='absolute w-full h-96 -z-10 bg-cyan-950/25'></div>
        <div className='max-w-5xl p-8 mx-auto'>
            <Nav />
            {children}
            <Footer />
        </div>
    </>
);

export default Layout;
