import styled from "styled-components";

export const StyledWrapper = styled.div`
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition: background-color 0.25s ease, color 0.25s ease;

  display: flex;
  gap: 12px;
  padding-left: 250px;
  height: 100vh;
  width: 100vw;
`;

export const StyledOutletContainer = styled.div`
  max-width: calc(100vw - 250px);
  width: 100%;
  overflow-y: auto;
`;
