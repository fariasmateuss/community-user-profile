import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { DefaultSeo } from 'next-seo';
import NextNProgress from 'nextjs-progressbar';

import { theme } from '@styles/theme';
import GlobalStyle from '@styles/global';

import SEO from '../../next-seo.config';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
        <NextNProgress
          color="#4facfe"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
      </ThemeProvider>
    </>
  );
}
