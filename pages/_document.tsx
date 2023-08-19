import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';

class LUDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: <>{initialProps.styles}</>,
        };
    }

    render() {
        return (
            <Html lang='en' className='scroll-smooth'>
                <Head>
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='32x32'
                        href='/static/favicons/favicon-32x32.png'
                    />
                    <link
                        rel='alternate'
                        type='application/rss+xml'
                        href='/feed.xml'
                    />
                </Head>
                <body className='antialiased text-black bg-white dark:bg-slate-900 dark:text-white'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default LUDocument;
