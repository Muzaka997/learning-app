import styled from "styled-components";

export const StyledContainer = styled.div<{ $darkMode?: boolean }>`
  display: flex;
  flex-direction: column;
  color: ${(p) => p.theme.text};
`;

/* Full Courses page heading */
export const PageTitle = styled.h1`
  margin: 0 0 10px;
  font-family: ${(p) => p.theme.headingFont};
  font-weight: 600;
  font-size: 48px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.heading};

  @media (max-width: 760px) {
    font-size: 34px;
  }
`;

export const Subtitle = styled.p`
  margin: 0 0 40px;
  font-size: 17px;
  color: ${(p) => p.theme.textMuted};
`;

/* Home "My Courses" section header with a View all link */
export const SectionHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin: 8px 0 26px;

  h2 {
    margin: 0;
    font-family: ${(p) => p.theme.headingFont};
    font-weight: 600;
    font-size: 38px;
    letter-spacing: -0.01em;
    color: ${(p) => p.theme.heading};
  }

  @media (max-width: 760px) {
    h2 {
      font-size: 28px;
    }
  }
`;

export const ViewAll = styled.button`
  flex-shrink: 0;
  background: none;
  border: none;
  color: ${(p) => p.theme.accent};
  font-weight: 600;
  font-size: 14.5px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const StyledCoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;

  /* tablet: two columns before collapsing at the mobile breakpoint */
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;
