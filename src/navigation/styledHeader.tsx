import styled from "styled-components";
import { NavLink } from "react-router-dom";

/* Breakpoints:
   - > 1240px : full header (brand + tagline, centred nav, rule, avatar + "My Account", theme)
   - 1080–1240: nav still shown, but tagline + account label hidden so it fits
   - <= 1080px: nav collapses into the fixed bottom tab bar (compact header) */

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  width: 100%;
  background: ${(p) => p.theme.headerBg};
  backdrop-filter: saturate(1.4) blur(14px);
  -webkit-backdrop-filter: saturate(1.4) blur(14px);
  border-bottom: 1px solid ${(p) => p.theme.headerBorder};
  transition: background-color 0.25s ease;
  box-sizing: border-box;
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  width: 100%;
  padding: 16px 40px;
  box-sizing: border-box;
  flex-wrap: wrap;

  @media (max-width: 1080px) {
    gap: 12px;
    padding: 12px 16px;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  flex-shrink: 0;
  color: ${(p) => p.theme.heading};

  /* gradient logo badge */
  .brand-badge {
    display: grid;
    place-items: center;
    width: 46px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 13px;
    color: #fff;
    background: linear-gradient(150deg, #5b8def, #3f63c4);
    box-shadow: 0 8px 20px -8px rgba(91, 141, 239, 0.7);
  }
  .brand-badge svg {
    font-size: 24px !important;
    color: #fff;
  }

  .brand-text {
    display: flex;
    flex-direction: column;
    line-height: 1.05;
  }
  .brand-name {
    font-family: ${(p) => p.theme.headingFont};
    font-weight: 600;
    font-size: 21px;
    letter-spacing: -0.01em;
    white-space: nowrap;
    color: ${(p) => p.theme.heading};
  }
  .brand-tagline {
    font-family: ${(p) => p.theme.bodyFont};
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    white-space: nowrap;
    color: ${(p) => p.theme.textSubtle};
  }

  /* hide the tagline once space gets tight, so the nav still fits */
  @media (max-width: 1240px) {
    .brand-tagline {
      display: none;
    }
  }
`;

export const NavList = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: nowrap;

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 10px 16px;
  border-radius: 11px; /* rounded rectangle, matching the mockup (not a pill) */
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  color: ${(p) => p.theme.navText};
  text-decoration: none;
  transition:
    background 0.16s ease,
    color 0.16s ease;

  svg {
    font-size: 18px !important;
  }

  &:hover {
    background: ${(p) => p.theme.hoverFill};
    color: ${(p) => p.theme.navText};
  }

  &.active {
    background: color-mix(in srgb, ${(p) => p.theme.accent} 16%, transparent);
    color: ${(p) => p.theme.accent};
  }
`;

/* short vertical divider between nav and account, like the mockup's .vrule */
export const Vrule = styled.span`
  width: 1px;
  height: 34px;
  flex-shrink: 0;
  background: ${(p) => p.theme.headerBorder};

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;

  @media (max-width: 1080px) {
    margin-left: auto;
    justify-content: flex-end;
  }
`;

export const NavButton = styled.button`
  padding: 9px 16px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  color: ${(p) => p.theme.accent};
  background: color-mix(in srgb, ${(p) => p.theme.accent} 10%, transparent);
  transition: background 0.16s ease;

  &:hover {
    background: color-mix(in srgb, ${(p) => p.theme.accent} 18%, transparent);
  }
`;

export const AccountBox = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 999px;
  transition: background 0.16s ease;

  span {
    font-size: 15px;
    font-weight: 500;
    color: ${(p) => p.theme.navText};
    white-space: nowrap;
  }

  &:hover {
    background: ${(p) => p.theme.hoverFill};
  }

  /* avatar only once space gets tight */
  @media (max-width: 1240px) {
    span {
      display: none;
    }
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${(p) => p.theme.inputBorder};
  background: ${(p) => p.theme.hoverFill};
`;
