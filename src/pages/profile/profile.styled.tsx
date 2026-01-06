import styled from "styled-components";

export const StyledProfileContainer = styled.div<{ $darkMode: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 200vh;
  padding: 24px;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition: background-color 0.25s ease, color 0.25s ease;
`;

export const StyledName = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

export const StyledInfo = styled.p`
  font-size: 18px;
  margin: 8px 0;
`;
