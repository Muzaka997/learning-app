import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

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
      margin: 0;
      min-height: 100vh;
      font-family: ${(p) => p.theme.bodyFont};
      font-size: 16px;
      line-height: 1.6;
      font-weight: 400;

      color: ${(p) => p.theme.text};
      background-color: ${(p) => p.theme.background};
      transition: background-color 0.25s ease, color 0.25s ease;

      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: ${(p) => p.theme.headingFont};
      color: ${(p) => p.theme.heading};
      font-weight: 500;
      letter-spacing: -0.015em;
      line-height: 1.15;
    }

    ul, li {
      list-style: none;
    }

    a {
      color: ${(p) => p.theme.link};
      text-decoration: none;
      transition: color 0.15s ease;
    }
    a:hover {
      color: ${(p) => p.theme.linkHover};
    }

    ::selection {
      background: color-mix(in srgb, ${(p) => p.theme.accent} 22%, transparent);
    }

    /* Neutral base button — specific CTAs opt into the accent style themselves */
    button {
      font-family: inherit;
      font-size: 1em;
      cursor: pointer;
      border: none;
      background: none;
      color: inherit;
    }
    button:focus-visible {
      outline: 2px solid ${(p) => p.theme.accent};
      outline-offset: 2px;
    }

    input, textarea, select {
      font-family: inherit;
    }
    input:focus, textarea:focus {
      outline: none;
      border-color: ${(p) => p.theme.accent} !important;
      box-shadow: 0 0 0 3px color-mix(in srgb, ${(p) =>
        p.theme.accent} 16%, transparent);
    }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px 30px;
  max-width: 700px;
`;

// Add theme typings for styled-components
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bodyFont: string;
    headingFont: string;

    background: string;
    cardBg: string;
    cardBorder: string;
    cardShadow: string;
    cardShadowHover: string;

    text: string;
    heading: string;
    textMuted: string;
    textSubtle: string;
    navText: string;

    accent: string;
    link: string;
    linkHover: string;
    buttonBackground: string;
    buttonText: string;

    headerBg: string;
    headerBorder: string;

    inputBg: string;
    inputBorder: string;

    hoverFill: string;

    sidebarBackground?: string;
    sidebarText?: string;
    sidebarHover?: string;
    sidebarActive?: string;
  }
}
