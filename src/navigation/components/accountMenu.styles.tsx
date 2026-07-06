import styled from "styled-components";

export const MenuCard = styled.div`
  position: absolute;
  top: 120%;
  right: 0;

  width: 220px;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.cardBg};
  border: 1px solid ${(p) => p.theme.cardBorder};
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
  border-radius: 14px;
  padding: 0.5rem;
  box-shadow: ${(p) => p.theme.cardShadow};
  z-index: 100;
`;

export const MenuItem = styled.div`
  padding: 0.7rem 0.9rem;
  border-radius: 10px;
  color: ${(p) => p.theme.navText};
  cursor: pointer;
  font-size: 0.95rem;
  transition: background 0.16s ease;

  &:hover {
    background: ${(p) => p.theme.hoverFill};
  }
`;
