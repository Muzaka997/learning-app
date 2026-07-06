import styled from "styled-components";

export const EBooksContainer = styled.div<{ $darkMode?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: ${(p) => p.theme.text};
  width: 100%;
  box-sizing: border-box;

  h1 {
    margin: 0;
    font-family: ${(p) => p.theme.headingFont};
    font-weight: 500;
    font-size: 44px;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.heading};
  }
`;

export const StyledBooksContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledSearchContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const StyledButton = styled.button<{ $darkMode?: boolean }>`
  height: 48px;
  padding: 0 26px;
  font-size: 15.5px;
  font-weight: 600;
  color: ${(p) => p.theme.buttonText};
  background: ${(p) => p.theme.accent};
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 8px 18px -8px ${(p) => p.theme.accent};
  transition: filter 0.16s ease;

  &:hover {
    filter: brightness(1.06);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const StyledTextField = styled.input<{ $darkMode?: boolean }>`
  flex: 0 1 460px;
  height: 48px;
  padding: 0 16px;
  font-size: 15.5px;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.inputBg};
  border: 1px solid ${(p) => p.theme.inputBorder};
  border-radius: 12px;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &::placeholder {
    color: ${(p) => p.theme.textSubtle};
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 16px;
  color: ${(p) => p.theme.textMuted};
  font-size: 14.5px;
`;

export const PageButton = styled.button`
  display: grid;
  place-items: center;
  min-width: 40px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid ${(p) => p.theme.inputBorder};
  border-radius: 10px;
  background: ${(p) => p.theme.cardBg};
  color: ${(p) => p.theme.navText};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.16s ease;

  &:hover:not(:disabled) {
    background: ${(p) => p.theme.hoverFill};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const PdfOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PdfCard = styled.div`
  width: 80vw;
  height: 90vh;
  background: #020617;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 12px 60px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
`;

export const PdfToolbar = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  z-index: 2;
`;

export const PdfTitle = styled.div`
  color: #e6eef8;
  font-weight: 600;
  margin-left: 6px;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ToolbarButton = styled.button`
  background: rgba(255, 255, 255, 0.05);
  color: #e6eef8;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition:
    background 120ms ease,
    transform 120ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }
`;

export const PdfFrameWrapper = styled.div`
  flex: 1;
  background: #ffffff;
  overflow: hidden;
`;

export const CloseButton = styled.button`
  margin-left: auto;
  background: #ef4444;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  z-index: 3;

  &:hover {
    background: #dc2626;
  }
`;
