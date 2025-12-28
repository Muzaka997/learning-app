import styled from "styled-components";

export const EBooksContainer = styled.div<{ $darkMode: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 200vh;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition: background-color 0.25s ease, color 0.25s ease;

  padding: 24px;
  width: 100%;
  height: 100%;
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
