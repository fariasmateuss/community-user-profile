/* eslint-disable import/no-anonymous-default-export */
const title = `Mateus V. Farias (@fariasmateuss) — Find me on web!`;
const description = `My name is Mateus V. Farias. I'm Software engineer based in Brazil.`;
const url = `https://fariasmateuss.dev`;

export default {
  title,
  description,
  canonical: url,
  openGraph: {
    url: url,
    type: `website`,
    title,
    locale: `en-US`,
    description,
    images: [
      {
        url: `${url}/static/images/banner.png`,
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    site: `@fariasmateuss`,
    handle: `@fariasmateuss`,
    cardType: `summary_large_image`,
  },
};
