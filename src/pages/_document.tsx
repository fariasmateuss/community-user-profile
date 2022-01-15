import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="application-name" content="&nbsp;" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />

          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Cutive+Mono&family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <link
            rel="shortcut icon"
            href="/assets/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            sizes="16x16 32x32 64x64 96x96"
            href="/assets/favicon.ico"
          />
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="16x16"
            href="/assets/favicon-16x16.png"
          />
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="32x32"
            href="/assets/favicon-32x32.png"
          />
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="64x64"
            href="/assets/favicon-64x64.png"
          />
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="96x96"
            href="/assets/favicon-96x96.png"
          />
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="128x128"
            href="/assets/favicon-128x128.png"
          />
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="256x256"
            href="/assets/favicon-256x256.png"
          />
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="512x512"
            href="/assets/favicon-512x512.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="152x152"
            href="/assets/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="167x167"
            href="/assets/apple-touch-icon-167x167.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="180x180"
            href="/assets/apple-touch-icon-180x180.png"
          />

          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
