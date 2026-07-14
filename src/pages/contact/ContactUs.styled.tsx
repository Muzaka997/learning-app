import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 0 0 10px;
  font-family: ${(p) => p.theme.headingFont};
  font-weight: 500;
  font-size: 44px;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.heading};

  @media (max-width: 760px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  margin: 0 0 40px;
  font-size: 17px;
  color: ${(p) => p.theme.textMuted};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 38px;
  background: ${(p) => p.theme.cardBg};
  border: 1px solid ${(p) => p.theme.cardBorder};
  border-radius: 20px;
  box-shadow: ${(p) => p.theme.cardShadow};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${(p) => p.theme.heading};
`;

const baseInput = css`
  width: 100%;
  padding: 13px 15px;
  border-radius: 11px;
  border: 1px solid ${(p) => p.theme.inputBorder};
  background: ${(p) => p.theme.inputBg};
  color: ${(p) => p.theme.text};
  font-size: 15.5px;
  outline: none;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &::placeholder {
    color: ${(p) => p.theme.textSubtle};
  }

  &:disabled {
    opacity: 0.7;
  }
`;

export const Input = styled.input`
  ${baseInput}
`;

export const TextArea = styled.textarea`
  ${baseInput}
  resize: vertical;
  min-height: 130px;
`;

export const Submit = styled.button`
  align-self: flex-start;
  margin-top: 4px;
  padding: 13px 30px;
  background: ${(p) => p.theme.accent};
  color: #fff;
  border: 0;
  border-radius: 12px;
  font-size: 15.5px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 22px -10px ${(p) => p.theme.accent};
  transition: filter 0.16s ease;

  &:hover:not(:disabled) {
    filter: brightness(1.06);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const Success = styled.p`
  margin-bottom: 8px;
  color: #16a34a;
  font-weight: 600;
`;
