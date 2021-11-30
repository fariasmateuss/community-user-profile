import styled, { css } from 'styled-components';
import { HiOutlineMail } from 'react-icons/hi';

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const CardCover = styled.div`
  position: relative;
  width: 400px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 5px 15px 1px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 270px;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      to top,
      ${({ theme }) => theme.colors.cyan},
      ${({ theme }) => theme.colors[`dodger-blue`]}
    );
    clip-path: circle(400px at 50% -48.5%);

    @media screen and (max-width: 370px) {
      clip-path: circle(400px at 50% -74.5%);
      height: 230px;
    }
  }
`;

export const CardStrip = styled.div`
  position: relative;
  height: 265px;

  @media screen and (max-width: 370px) {
    height: 230px;
  }
`;

const contentCSS = css`
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 1px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const HamburgerMenu = styled.span`
  position: absolute;
  width: 21px;
  height: 16px;
  top: 1.4rem;
  left: 1.9rem;
  z-index: 3;
  transition: 0.3s;
  opacity: 0.8;
  cursor: pointer;

  @media screen and (max-width: 370px) {
    width: 16px;
    height: 12px;
    top: 1.1rem;
    left: 1.5rem;
  }

  &:hover {
    opacity: 1;
  }

  &::before {
    top: 0;
    ${contentCSS}
  }

  &::after {
    bottom: 0;
    ${contentCSS}
  }

  div {
    position: absolute;
    height: 2px;
    width: 70%;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 1px;
  }
`;

export const Mail = styled.a`
  position: absolute;
  top: 1rem;
  right: 2rem;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
  transition: 0.3s;
  z-index: 3;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }
`;

export const OutlineMail = styled(HiOutlineMail)`
  width: 28px;
  height: auto;
`;

export const Main = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    position: relative;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.colors.aqua};
    margin-bottom: 2px;
    overflow: hidden;

    @media screen and (max-width: 370px) {
      width: 90px;
      height: 90px;
      border-width: 3px;
    }

    img {
      height: auto;
      max-width: 100%;
    }
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1;
    margin: 5px 0;
    color: ${({ theme }) => theme.colors.white};
  }

  h3 {
    font-family: 'Cutive Mono', monospace;
    font-size: 1.2rem;
    opacity: 0.8;
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (max-width: 370px) {
    h3,
    h2 {
      font-size: 1rem;
    }
  }
`;

export const CardBody = styled.div`
  display: flex;
  padding: 1.7rem 2.5rem 2.6rem 2.5rem;

  @media screen and (max-width: 410px) {
    flex-direction: column;
  }

  @media screen and (max-width: 370px) {
    padding: 1.2rem 1.8rem 1.8rem 1.8rem;
  }
`;

export const AboutColumn = styled.div`
  h3 {
    position: relative;
    color: ${({ theme }) => theme.colors.emperor};
    font-weight: 500;
    font-size: 1.1rem;
    padding: 0 0 3px;
    margin-bottom: 0.9rem;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      height: 3px;
      width: 50%;
      background-color: ${({ theme }) => theme.colors.emperor};
      bottom: 0;
      left: 0;
    }
  }

  p {
    color: ${({ theme }) => theme.colors[`dove-gray`]};
    font-weight: 300;
    line-height: 1.7;
  }

  @media screen and (max-width: 370px) {
    h3 {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 5px;

  button {
    flex: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-decoration: none;
    text-align: center;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.5s;

    &:hover {
      flex: 5;
    }

    &:first-child {
      padding: 9.6px 0;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors[`dodger-blue`]} 0%,
        ${({ theme }) => theme.colors.cyan} 140%
      );
      color: ${({ theme }) => theme.colors.white};
      border-radius: 18.1px;
      margin-right: 3px;

      @media screen and (max-width: 370px) {
        padding: 7.6px 0;
        border-radius: 14.6px;
        font-size: 0.6rem;
      }
    }

    &:last-child {
      padding: 7.6px 0;
      border: 2px solid ${({ theme }) => theme.colors[`dodger-blue`]};
      color: ${({ theme }) => theme.colors[`dodger-blue`]};
      border-radius: 18.1px;
      margin-left: 3px;

      @media screen and (max-width: 370px) {
        padding: 5.6px 0;
        border-radius: 14.6px;
        font-size: 0.6rem;
      }
    }
  }
`;

export const AsideColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 1.5rem;
  margin-left: 1.6rem;

  h2 {
    font-size: 2.1rem;
    font-weight: 200;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors[`mine-shaft`]};
  }

  h3 {
    font-size: 0.55rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors[`dove-gray`]};
  }

  @media screen and (max-width: 410px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin: 0;
  }

  @media screen and (max-width: 370px) {
    padding-top: 1rem;

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 0.4rem;
    }
  }
`;
