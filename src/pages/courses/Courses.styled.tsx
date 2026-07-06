import styled from "styled-components";

export const StyledContainer = styled.div<{ $darkMode?: boolean }>`
  display: flex;
  flex-direction: column;
  color: ${(p) => p.theme.text};

  h1 {
    margin: 0 0 8px;
    font-family: ${(p) => p.theme.headingFont};
    font-weight: 500;
    font-size: 34px;
    letter-spacing: -0.015em;
    color: ${(p) => p.theme.heading};
  }
`;

export const StyledCoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
