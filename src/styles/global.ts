import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

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
     theme.colors[
       `athens-gray`
     ]} url('/logos/github.svg') fixed no-repeat 80% top;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
}

button {
  all: unset;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: currentColor;
}

.next-image {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &---contained {
      object-fit: contain;
    }
  }

:root {
  --toastify-color-progress-light:
    linear-gradient(135deg, #9580ff 0,#80ffea 100%)
  }
`;
