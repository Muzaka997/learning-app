import styled from "styled-components";

// h3
export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.2px;
  margin: 0 0 8px 0;
  color: ${(p) => p.theme.text};
`;

// p
export const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 12px 0;
  color: ${(p) => p.theme.text};
  opacity: 0.9;
`;

// button
export const PrimaryButton = styled.button`
  background: ${(p) => p.theme.buttonBackground};
  color: ${(p) => p.theme.buttonText};
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px 14px;
  border-radius: 10px;
  font-weight: 700;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const AssessmentCardContainer = styled.div`
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 15px 0;
  transition: transform 0.2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
  }
`;
