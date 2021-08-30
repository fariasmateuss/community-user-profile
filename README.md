<p align="center">
  <img src="./public/favicon.png" width="150" />
</p>

<p align="center">
  Profile page, but for developers.
</p>

## Screenshots

<p float="center">
  <img src="docs/resources/card.png" width="49%" />
  <img src="docs/resources/repositories.png" width="49%" />
</p>

## Tech

<img src="docs/resources/tech-logos.png" alt="Technologies used">
<br />

This project was developed using cutting edge front-end technologies.

- [TypeScript](https://github.com/microsoft/TypeScript) - TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
- [Next.js](https://nextjs.org/) - The Next.js is React Based framework with server side rendering capability.

## Run Locally

Clone the project

```bash
git clone https://github.com/fariasmateuss/community-user-profile.git
```

Go to the project directory

```bash
cd community-user-profile
```

Install dependencies

> To run this project in the development mode, you'll need to have a basic environment with NodeJs and Yarn installed.

```bash
yarn
```

Start the server

```bash
yarn dev
```

_or_

```bash
yarn next
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

To deploy this project run

```bash
yarn build
```

## Usage

Getting started add your username in the [USERNAME_KEY](https://github.com/fariasmateuss/community-user-profile/blob/fdeb1264e3f21ffe96c2e45c8ca105200c6c853a/src/constants/params.ts#L1) variable.

| key          | description                     | default         |
| ------------ | ------------------------------- | --------------- |
| USERNAME_KEY | Username used in REST Endpoints | `fariasmateuss` |

In this project, there are requests for the following [GitHub](https://docs.github.com/en/rest) REST endpoints.

## Contributing

You can send how many PR's do you want, I'll be glad to analyse and accept them! And if you have any question about the project...

Connect with me at [LinkedIn](https://www.linkedin.com/in/fariasmateuss/)

Thank you!

# License

Made with ♥ by Mateus V. Farias

This project is under the [MIT License](/LICENSE)
