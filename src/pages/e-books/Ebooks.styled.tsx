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
