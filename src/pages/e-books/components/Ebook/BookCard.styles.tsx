import styled from "styled-components";

export const BookCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 440px;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 12px;
  gap: 4px;
`;

export const StyledButton = styled.button`
  width: 100%;
  margin-top: auto;
  padding: 10px;
  text-align: center;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 280px;
`;
