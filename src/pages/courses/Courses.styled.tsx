import styled from "styled-components";

export const StyledContainer = styled.div<{ $darkMode: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 200vh;
  padding-top: 24px;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition: background-color 0.25s ease, color 0.25s ease;
`;

export const StyledCoursesContainer = styled.div`
  width: 450vw;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
