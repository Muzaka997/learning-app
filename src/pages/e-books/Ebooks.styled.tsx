import styled from "styled-components";

export const EBooksContainer = styled.div<{ $darkMode: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
  padding: 24px;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledBooksContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledSearchContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StyledButton = styled.button<{ $darkMode: boolean }>`
  height: 40px;
  padding: 8px 12px;
  font-size: 14px;
  color: ${(p) => p.theme.text};

  transition:
    background-color 0.25s ease,
    color 0.25s ease;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StyledTextField = styled.input<{ $darkMode: boolean }>`
  width: 320px;
  height: 40px;
  padding: 8px 12px;
  font-size: 14px;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
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
  border-radius: 12px;
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
  padding: 10px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent);
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
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
  background: rgba(255, 255, 255, 0.03);
  color: #e6eef8;
  border: 1px solid rgba(255, 255, 255, 0.04);
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition:
    background 120ms ease,
    transform 120ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
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
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  z-index: 3;

  &:hover {
    background: #dc2626;
  }
`;
