import Footer from '@/components/theme/Footer';
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
        <div className='mx-auto'>
            {children}
            <Footer />
        </div>
    </>
);

export default Layout;
