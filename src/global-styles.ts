import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      overflow-x: hidden;
      scroll-behavior: smooth;
    }

    body {
      font-size: 14px;
      line-height: 24px;
      font-family: 'Open Sans', sans-serif;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      text-size-adjust: 100%;
    }
    ul,
    li,
    p,
    img,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    input,
    button,
    nav,
    a {
      padding: 0;
      margin: 0;
      list-style: none;
      font-weight: normal;
      text-decoration: none;
    }
    input,
    textarea {
      outline: none;
      box-shadow: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    button {
      border: none;
      background: none;
      cursor: pointer;
      outline: none;
    }

  :root {
    --sidebar-width: 240px;

    color: ${(p) => p.theme.text};
    background-color: ${(p) => p.theme.background};
    transition: background-color 0.25s ease, color 0.25s ease;

    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* The body now behaves like a normal page */
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    width: 100%;
  }

  /* Content container */


  a {
    color: ${(p) => p.theme.link};
    text-decoration: none;
  }

  a:hover {
    color: ${(p) => p.theme.linkHover};
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    background-color: ${(p) => p.theme.buttonBackground};
    color: ${(p) => p.theme.buttonText};
    transition: border-color 0.2s ease, background-color 0.2s ease;
    cursor: pointer;
  }

  button:hover {
    border-color: ${(p) => p.theme.link};
  }

  button:focus {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px 30px;
  max-width: 700px;
`;

export const NavBarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 1rem;

  background: ${(p) => p.theme.background};
  color: ${(p) => p.theme.text};

  border-right: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);

  position: fixed;
  height: 100vh;
  width: 230px;
  top: 0;
  left: 0;

  box-sizing: border-box;
`;

export const NavItem = styled(Link)`
  padding: 0.9rem 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${(p) => p.theme.sidebarText || "#eee"};
  text-decoration: none;

  border-radius: 8px;
  margin: 0 0.7rem;
  transition: background 0.25s ease, color 0.25s ease, transform 0.15s ease;

  &:hover {
    background: ${(p) => p.theme.sidebarHover || "rgba(255,255,255,0.08)"};
    color: ${(p) => p.theme.text};
    transform: translateX(4px);
  }

  &.active {
    background: ${(p) => p.theme.sidebarActive || "rgba(255,255,255,0.18)"};
    color: ${(p) => p.theme.text};
    font-weight: 600;
  }
`;

// Add theme typings for styled-components
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    background: string;
    sidebarBackground?: string;
    sidebarText?: string;
    sidebarHover?: string;
    sidebarActive?: string;

    link: string;
    linkHover: string;
    buttonText: string;
    buttonBackground: string;
  }
}
