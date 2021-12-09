import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  -webkit-font-smoothing: antialiased;
   background: ${({ theme }) =>
     theme.colors[`athens-gray`]} url('bg.svg') fixed no-repeat 80% top;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
}

button, a {
  cursor: pointer;
  all: unset;
}

a {
  text-decoration: none;
  color: currentColor;
}

#__next {
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
}

:root {
  --typescript: #2b7489;
  --javascript: #f1e05a;
  --shell: #89e051;
  --css: #563d7c;
  --dart: #00b4ab;
  --scss: #c6538c;
  --dockerfile: #384d54;
  --html: #e34c26;
  --rust: #dea584;
  --clojure: #db5855;
  --c: #555555;
  --swift: #ffac45;
  --vue: #2c3e50;
  --java: #b07219;
  --php: #4F5D95;
  --go: #375eab;
  --ruby: #701516;
  --objective-c: #438eff;
  --kotlin: #F18E33;
  --elixir: #6e4a7e;
  --python: #3572A5;
  --haskell: #29b544;
  --arduino: #bd79d1;
  --other: #9e9e9e;

  --toastify-color-progress-light:
    linear-gradient(135deg, #9580ff 0,#80ffea 100%)
  }
`;
