import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 200vh;
  padding: 24px;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition: background-color 0.25s ease, color 0.25s ease;
`;

export const StyledHeader = styled.h1`
  height: 70px;
  font-size: 40px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  padding-top: 20px;
`;

export const StyledP = styled.p`
  height: 30px;
  font-size: 20px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;

export const WeekDetails = styled.details`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  background: #fff;
  transition: box-shadow 0.2s ease;

  &[open] {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  }
`;

export const WeekSummary = styled.summary`
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Remove default arrow */
  &::-webkit-details-marker {
    display: none;
  }
`;

export const WeekTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`;

export const StyledContentTitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
`;

export const ContentBlock = styled.div`
  margin-top: 1rem;
  padding-left: 0.5rem;
`;

export const VideoBlock = styled.div`
  margin-bottom: 1.25rem;
`;

export const HomeworkBlock = styled.div`
  background: #f9fafb;
  padding: 0.75rem 1rem;
  border-radius: 8px;
`;

export const Iframe = styled.iframe`
  margin-top: 0.5rem;
  border-radius: 10px;
  border: none;
  max-width: 100%;
`;
