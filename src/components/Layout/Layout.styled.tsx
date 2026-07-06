import styled from "styled-components";

export const StyledWrapper = styled.div`
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition:
    background-color 0.25s ease,
    color 0.25s ease;

  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 71px);
`;

export const StyledContent = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 60px 40px 90px;
  box-sizing: border-box;

  @media (max-width: 640px) {
    padding: 36px 20px 64px;
  }
`;

export const StyledOutletContainer = styled.div`
  width: 100%;
`;
