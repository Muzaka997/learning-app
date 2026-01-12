import styled from "styled-components";

// export const AppWrapper = styled.div.withConfig({
//   shouldForwardProp: (prop) => prop !== "darkmode",
// })<{ darkmode?: boolean }>`
//   background: ${(p) => (p.darkmode ? "#000" : "#fff")};
//   color: ${(p) => (p.darkmode ? "#eee" : "#222")};
//   font-family: system-ui, sans-serif;
//   min-height: 100vh;
// `;

export const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 200vh;
  width: 100vh;
  padding: 24px;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition: background-color 0.25s ease, color 0.25s ease;
`;

export const StyledContainer = styled.div`
  font-size: 1.2rem;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  text-align: justify;
  gap: 20px;
`;
