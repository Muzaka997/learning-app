import styled from "styled-components";

export const ToggleButton = styled.button<{ $muted?: boolean }>`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${(p) => p.theme.inputBorder};
  border-radius: 11px;
  background: ${(p) => p.theme.hoverFill};
  color: ${(p) => (p.$muted ? p.theme.textMuted : "#e0a94a")};
  cursor: pointer;
  transition:
    background 0.16s ease,
    border-color 0.16s ease;

  svg {
    font-size: 20px !important;
  }

  &:hover {
    background: color-mix(in srgb, ${(p) => p.theme.accent} 10%, transparent);
  }
`;
