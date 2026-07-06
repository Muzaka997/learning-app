import styled from "styled-components";

export const ToggleButton = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 34px;
  border: 1px solid ${(p) => p.theme.inputBorder};
  border-radius: 10px;
  background: ${(p) => p.theme.hoverFill};
  color: ${(p) => p.theme.navText};
  font-size: 15px;
  line-height: 1;
  cursor: pointer;
  transition: background 0.16s ease;

  &:hover {
    background: color-mix(in srgb, ${(p) => p.theme.accent} 10%, transparent);
  }
`;
