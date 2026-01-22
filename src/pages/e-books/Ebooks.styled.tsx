import styled from "styled-components";

export const EBooksContainer = styled.div<{ $darkMode: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 130vh;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition: background-color 0.25s ease, color 0.25s ease;

  padding: 24px;
  width: 150vh;
`;

export const StyledBooksContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const StyledSearchContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledButton = styled.button<{ $darkMode: boolean }>`
  width: 100px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition: background-color 0.25s ease, color 0.25s ease;
  border: 1px solid ${(p) => p.theme.text};
  border-radius: 4px;
  cursor: pointer;
`;

export const StyledTextField = styled.input<{ $darkMode: boolean }>`
  width: 220px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition: background-color 0.25s ease, color 0.25s ease;
  border: 1px solid ${(p) => p.theme.text};
  border-radius: 4px;
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
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.9);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: #1e293b;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background: #334155;
  }
`;
