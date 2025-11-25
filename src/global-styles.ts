import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    max-width: 40vw;
    margin-right: auto;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: ${(p) => p.theme.text};
    background-color: ${(p) => p.theme.background};
    transition: background-color 0.3s, color 0.3s;

    padding-left: 230px;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }

  a:hover {
    color: #535bf2;
  }

  body {
  margin: 0;
  
  padding: 20px;
}




  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }

  button:hover {
    border-color: #646cff;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }
`;

export const NavBarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.1rem;
  padding: 0;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  border: 2px solid #444;

  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 250px;

  box-sizing: border-box;
  overflow: hidden;
`;

export const NavItem = styled(Link)`
  color: ${(p) => p.theme.sidebarText || "white"};
  text-decoration: none;

  display: block;
  width: 100%;
  text-align: left;
  border: 1px solid #444;

  padding: 15px 3px;
  font-size: 1.2rem;
  font-weight: 500;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  transition: background 0.3s;

  &:hover {
    background: ${(p) => p.theme.sidebarHover || "#444"};
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
  }
}
