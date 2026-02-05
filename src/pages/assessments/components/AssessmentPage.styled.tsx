import styled from "styled-components";

export const QuizContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 32px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
`;

export const QuizHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    color: #666;
  }
`;

export const QuestionCard = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 10px;
  background: #f8f9fc;
  border: 1px solid #e2e6f0;
`;

export const QuestionTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 15px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledOption = styled.label<{
  selected: boolean;
  correct?: boolean;
  wrong?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid
    ${({ correct, wrong, selected }) =>
      correct
        ? "#16a34a"
        : wrong
          ? "#dc2626"
          : selected
            ? "#4f46e5"
            : "#e5e7eb"};

  background: ${({ correct, wrong, selected }) =>
    correct ? "#dcfce7" : wrong ? "#fee2e2" : selected ? "#eef2ff" : "#ffffff"};

  transition: 0.2s ease;

  &:hover {
    border-color: ${({ correct, wrong }) =>
      correct ? "#16a34a" : wrong ? "#dc2626" : "#4f46e5"};
  }

  input {
    accent-color: ${({ correct, wrong }) =>
      correct ? "#16a34a" : wrong ? "#dc2626" : "#4f46e5"};
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  font-size: 1rem;
  font-weight: 600;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: #4338ca;
  }
`;
export const ResultContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ResultActions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
export const PrimaryButton = styled.button`
  padding: 10px 14px;
  background: linear-gradient(90deg, #4f46e5, #18a6ff);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(24, 166, 255, 0.12);
  transition:
    transform 120ms ease,
    opacity 120ms ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.98;
  }
`;

export const ResultTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  color: #111827;
`;

export const ResultSubtitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: #374151;
  font-weight: 600;
`;
