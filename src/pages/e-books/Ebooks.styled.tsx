import styled from "styled-components";

export const EBooksContainer = styled.div<{ $darkMode: boolean }>`
  height: 100vh;
  background-color: ${(props) => (props.$darkMode ? "#121212" : "#f5f5f5")};
`;
