import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 240px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  /* Glass effect */
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: saturate(150%) blur(16px);
  -webkit-backdrop-filter: saturate(150%) blur(16px);
  border-right: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 2px 0 30px rgba(0, 0, 0, 0.12);

  color: ${(p) => p.theme.text};

  @media (max-width: 900px) {
    height: 70px;
    width: 100%;
    bottom: 0;
    top: auto;
    left: 0;
    flex-direction: row;
    align-items: center;
    padding: 8px 10px;
    gap: 0;
    border-right: none;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px 16px 12px;
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 0.3px;
  color: ${(p) => p.theme.text};
  opacity: 0.95;

  svg {
    color: #18a6ff;
    filter: drop-shadow(0 4px 16px rgba(24, 166, 255, 0.35));
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 900px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    gap: 0;
  }
`;

export const Item = styled(NavLink)`
  display: grid;
  grid-template-columns: 28px 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  margin: 0 6px;
  color: ${(p) => p.theme.sidebarText || p.theme.text};
  border-radius: 10px;
  position: relative;
  transition:
    transform 120ms ease,
    background 160ms ease,
    color 160ms ease;

  svg {
    font-size: 22px !important;
    opacity: 0.95;
  }

  span {
    font-weight: 600;
    letter-spacing: 0.2px;
  }

  &:hover {
    transform: translateX(4px);
    background: ${(p) => p.theme.sidebarHover || "rgba(255,255,255,0.08)"};
  }

  &.active {
    color: ${(p) => p.theme.text};
    background: linear-gradient(
      90deg,
      rgba(79, 70, 229, 0.24),
      rgba(24, 166, 255, 0.24)
    );
    box-shadow: 0 8px 24px rgba(24, 166, 255, 0.18);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    padding: 8px 10px;
    margin: 0;
    border-radius: 8px;
    transform: none !important;
    background: transparent !important;

    &.active {
      color: ${(p) => p.theme.text};
      background: transparent !important;
    }

    span {
      font-size: 11px;
      opacity: 0.9;
    }
  }
`;

export const Label = styled.span`
  @media (max-width: 900px) {
    display: block;
    text-align: center;
  }
`;

export const Spacer = styled.div`
  flex: 1 1 auto;
  @media (max-width: 900px) {
    display: none;
  }
`;
