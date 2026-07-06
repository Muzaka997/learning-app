import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  width: 100%;
  background: ${(p) => p.theme.headerBg};
  backdrop-filter: saturate(1.4) blur(12px);
  -webkit-backdrop-filter: saturate(1.4) blur(12px);
  border-bottom: 1px solid ${(p) => p.theme.headerBorder};
  transition: background-color 0.25s ease;
  box-sizing: border-box;
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
  width: 100%;
  padding: 14px 40px;
  box-sizing: border-box;

  @media (max-width: 900px) {
    gap: 16px;
    padding: 12px 20px;
    flex-wrap: wrap;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${(p) => p.theme.heading};

  /* gradient logo badge */
  .brand-badge {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 12px;
    color: #fff;
    background: linear-gradient(
      145deg,
      ${(p) => p.theme.accent},
      color-mix(in srgb, ${(p) => p.theme.accent} 65%, #12233f)
    );
    box-shadow: 0 8px 18px -8px ${(p) => p.theme.accent};
  }
  .brand-badge svg {
    font-size: 22px !important;
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
    font-size: 22px;
    letter-spacing: -0.01em;
    color: ${(p) => p.theme.heading};
  }
  .brand-tagline {
    font-family: ${(p) => p.theme.bodyFont};
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${(p) => p.theme.textSubtle};
  }
`;

export const NavList = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
`;

export const NavItem = styled(NavLink)`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 15px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 500;
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
    background: color-mix(in srgb, ${(p) => p.theme.accent} 15%, transparent);
    color: ${(p) => p.theme.accent};
    font-weight: 600;
  }
`;

export const NavButtons = styled.div`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 14px;
  padding-left: 22px;
  border-left: 1px solid ${(p) => p.theme.headerBorder};

  @media (max-width: 900px) {
    position: static;
    transform: none;
    padding-left: 0;
    border-left: none;
    width: 100%;
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
  gap: 10px;
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
`;

export const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  background: ${(p) => p.theme.hoverFill};
`;
