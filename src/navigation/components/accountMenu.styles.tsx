import styled from "styled-components";

export const MenuCard = styled.div`
  position: absolute;
  top: 110%;
  right: 0;

  width: 220px;
  background: #111827;
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

export const MenuItem = styled.div<{ danger?: boolean }>`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: ${({ danger }) => (danger ? "#f87171" : "#e5e7eb")};
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: ${({ danger }) =>
      danger ? "rgba(248, 113, 113, 0.15)" : "#1f2933"};
  }
`;
