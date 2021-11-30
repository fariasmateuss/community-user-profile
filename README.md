<p align="center">
  <img src="./public/favicon.png" width="150" />
</p>

<p align="center">
  Profile page, but for developers.
</p>

## Screenshots

<p align="center">
  <img src="docs/resources/card.png" width="45%" />
  <img src="docs/resources/repositories.png" width="45%" />
</p>

## Technology stack

This project was developed using cutting edge front-end technologies.

<img src="docs/resources/tech-logos.png" alt="Technologies used">

- [TypeScript](https://github.com/microsoft/TypeScript) - TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
- [Next.js](https://nextjs.org/) - The Next.js is React Based framework with server side rendering capability.
- [Styled Components](https://styled-components.com/) - CSS-in-JS library built for React.
- [React Icons](https://react-icons.github.io/react-icons/) - SVG React icons of popular icon packs using ES6 imports.
- [Using GitHub REST API](https://docs.github.com/en/rest).

## Run Locally

Clone the project:

```bash
git clone https://github.com/fariasmateuss/community-user-profile.git
```

Go to the project directory:

```bash
cd community-user-profile
```

Install all dependencies:

```bash
yarn
```

Create a copy of the `.env.example` file called `.env.local`:

```bash
cp .env.example .env.local
```

Add your GitHub App's private key to the `.env.local` file.

> P.S.: The token is used as the HTTP username.

Start the server:

```bash
yarn dev
```

_or_

```bash
yarn next
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building the app

To prepare the build for production:

```bash
yarn build
```

And run it:

```bash
yarn start
```

## Contributing

You can send how many PR's do you want, I'll be glad to analyse and accept them! And if you have any question about the project...

Thank you!

## Contact me

Connect with me at [LinkedIn](https://www.linkedin.com/in/fariasmateuss/)

# License

This project is under the [MIT License](/LICENSE)

Made with ♥ by Mateus V. Farias
