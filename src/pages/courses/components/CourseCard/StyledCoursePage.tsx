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
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
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
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
  border: 1px solid #fed7aa;
  font-size: 0.95rem;
  line-height: 1.5;

  h4 {
    margin: 0 0 6px 0;
    font-size: 0.95rem;
  }
`;

export const EssayWrap = styled.div`
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 10px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
`;

export const EssayLabel = styled.label`
  display: block;
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 8px;
  color: #334155;
`;

export const EssayArea = styled.textarea`
  width: 100%;
  min-height: 140px;
  resize: vertical;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: ${(p) => p.theme.text};
  outline: none;
  font-size: 0.95rem;
  line-height: 1.5;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.25);
  }
`;

export const EssayActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

export const EssayButton = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-weight: 600;
  background: linear-gradient(90deg, #4f46e5, #18a6ff);
  color: #fff;
  box-shadow: 0 8px 20px rgba(24, 166, 255, 0.18);
  transition:
    transform 120ms ease,
    opacity 120ms ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.98;
  }
`;

export const SaveNote = styled.span`
  font-size: 0.85rem;
  color: #059669;
  opacity: 0.9;
`;
