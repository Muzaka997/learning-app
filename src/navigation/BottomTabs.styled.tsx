import styled from "styled-components";
import { NavLink } from "react-router-dom";

/* Fixed mobile tab bar — visible once the top nav collapses (<=1080px). */
export const BottomTabsBar = styled.nav`
  display: none;

  @media (max-width: 1080px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 45;
    padding: 8px 4px calc(8px + env(safe-area-inset-bottom));
    background: ${(p) => p.theme.headerBg};
    backdrop-filter: saturate(1.4) blur(16px);
    -webkit-backdrop-filter: saturate(1.4) blur(16px);
    border-top: 1px solid ${(p) => p.theme.headerBorder};
  }
`;

export const Tab = styled(NavLink)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 6px 2px;
  font-size: 10.5px;
  font-weight: 600;
  color: ${(p) => p.theme.textMuted};
  text-decoration: none;
  transition: color 0.16s ease;

  svg {
    font-size: 22px !important;
  }

  &.active {
    color: ${(p) => p.theme.accent};
  }
`;
