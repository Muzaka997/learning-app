import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 1.875rem; /* 30px */
  line-height: 2.25rem; /* 36px */
  font-weight: 700;
  color: ${(p) => p.theme.text};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-weight: 600;
  color: ${(p) => p.theme.text};
`;

const baseInput = css`
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: ${(p) => p.theme.background};
  color: ${(p) => p.theme.text};
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: ${(p) => p.theme.text}99;
  }

  &:focus {
    border-color: ${(p) => p.theme.link};
    box-shadow: 0 0 0 3px rgba(100, 108, 255, 0.25);
  }
`;

export const Input = styled.input`
  ${baseInput}
`;

export const TextArea = styled.textarea`
  ${baseInput}
  resize: vertical;
  min-height: 120px;
`;

export const Submit = styled.button`
  align-self: flex-start;
  padding: 10px 20px;
  background: ${(p) => p.theme.buttonBackground};
  color: ${(p) => p.theme.buttonText};
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.05s ease;

  &:hover {
    border-color: ${(p) => p.theme.link};
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const Success = styled.p`
  color: #16a34a; /* green-600 */
  font-weight: 600;
`;
