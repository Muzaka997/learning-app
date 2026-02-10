import styled from "styled-components";

export const StyledBox = styled.div`
  width: 350px;
  max-width: 90%;
  padding: 35px 30px;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0.3, 0.3, 0.3, 0.3);
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* Center horizontally and vertically */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledWelcome = styled.h2`
  font-size: 20px;
  font-weight: 800;
`;

export const StyledH = styled.h4`
  font-size: 15px;
  font-weight: 600;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 12px 10px 40px; /* left padding for icon */
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &:focus {
    border-color: #0077ff;
    box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #888;
  pointer-events: none; /* allows clicking the input without blocking icon */
`;

export const IconLeft = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #888;
`;

export const IconRight = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: #888;
  cursor: pointer;
`;
