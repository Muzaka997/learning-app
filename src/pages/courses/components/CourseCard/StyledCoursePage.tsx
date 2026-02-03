import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px 80px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
`;

export const StyledHeader = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
`;

export const StyledP = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  opacity: 0.85;
  margin: 0;
`;

export const ContentBlock = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const WeekDetails = styled.details`
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 16px 20px;
  background: #ffffff;
  transition: all 0.25s ease;
  overflow: hidden;

  &[open] {
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
    border-color: #d1d5db;
  }
`;

export const WeekSummary = styled.summary`
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1.1rem;

  &::-webkit-details-marker {
    display: none;
  }

  &:after {
    content: "▾";
    font-size: 0.9rem;
    transition: transform 0.25s ease;
  }

  details[open] &::after {
    transform: rotate(180deg);
  }
`;

export const WeekTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
`;

export const VideoBlock = styled.div`
  margin-top: 14px;
  padding: 14px;
  border-radius: 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
`;

export const StyledContentTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #334155;
`;

export const Iframe = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  border: none;
`;

export const HomeworkBlock = styled.div`
  margin-top: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  background: #fff7ed;
  border: 1px solid #fed7aa;
  font-size: 0.95rem;
  line-height: 1.5;

  h4 {
    margin: 0 0 6px 0;
    font-size: 0.95rem;
  }
`;
