import styled from "styled-components";

export const MenuCard = styled.div`
  position: absolute;
  top: 110%;
  right: 0;

  width: 220px;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition:
    background-color 0.5s ease,
    color 0.5s ease;
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

export const MenuItem = styled.div`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: #e5e7eb;
  cursor: pointer;
  font-size: 0.9rem;
  transition: none;

  &:hover {
    /* Keep appearance unchanged on hover */
    background: transparent !important;
    /* color: #e5e7eb !important; */
    filter: none;
    opacity: 1;
  }
`;
