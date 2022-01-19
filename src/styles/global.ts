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
  --toastify-color-progress-light:
    linear-gradient(135deg, #9580ff 0,#80ffea 100%)
  }
`;
