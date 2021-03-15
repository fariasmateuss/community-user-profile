import styled, { css } from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

export const LinkToRepository = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

export const TopSide = styled.div`
  > p {
    margin: 0.5rem 0 1rem;
    font-size: 0.8rem;
    color: ${props => props.theme.colors['shuttle-gray']};
    letter-spacing: 0.1px;
  }

  header {
    display: flex;
    align-items: center;

    > p {
      margin-left: 0.5rem;
      font-size: 0.9rem;
      font-weight: 600;
      color: ${props => props.theme.colors.link};
      text-decoration: none;
    }
  }
`;

const IconCSS = css`
  fill: ${props => props.theme.colors['pale-sky']};
  flex-shrink: 0;
`;

export const BookMarkLine = styled(RiBookMarkLine)`
  ${IconCSS}
`;

export const StarLine = styled(RiStarLine)`
  ${IconCSS}
`;

export const OutlineFork = styled(AiOutlineFork)`
  ${IconCSS}
`;

export const BottomSide = styled.div`
  ul {
    display: flex;
    align-items: center;

    li {
      display: flex;
      align-items: center;
      margin-right: 1rem;

      p {
        margin-left: 0.3rem;
        font-size: 0.8rem;
        color: ${props => props.theme.colors['shuttle-gray']};
      }

      .language {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .language.typescript {
        background-color: var(--typescript);
      }

      .language.javascript {
        background-color: var(--javascript);
      }

      .language.shell {
        background-color: var(--shell);
      }

      .language.css {
        background-color: var(--css);
      }

      .language.scss {
        background-color: var(--scss);
      }

      .language.dart {
        background-color: var(--dart);
      }

      .language.dockerfile {
        background-color: var(--dockerfile);
      }

      .language.html {
        background-color: var(--html);
      }

      .language.rust {
        background-color: var(--rust);
      }

      .language.clojure {
        background-color: var(--clojure);
      }

      .language.c {
        background-color: var(--c);
      }

      .language.swift {
        background-color: var(--swift);
      }

      .language.vue {
        background-color: var(--vue);
      }

      .language.java {
        background-color: var(--java);
      }

      .language.php {
        background-color: var(--php);
      }

      .language.go {
        background-color: var(--go);
      }

      .language.ruby {
        background-color: var(--ruby);
      }

      .language.objective-c {
        background-color: var(--objective-c);
      }

      .language.kotlin {
        background-color: var(--kotlin);
      }

      .language.elixir {
        background-color: var(--elixir);
      }

      .language.python {
        background-color: var(--python);
      }

      .language.haskell {
        background-color: var(--haskell);
      }

      .language.arduino {
        background-color: var(--arduino);
      }

      .language.other {
        background-color: var(--other);
      }
    }
  }
`;
