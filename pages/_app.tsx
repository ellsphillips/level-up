import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

import '@/styles/global.css';
import '@/styles/prism.css';
import '@/styles/tailwind.css';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider attribute='class'>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default App;
