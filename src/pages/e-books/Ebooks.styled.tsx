import styled from "styled-components";

export const EBooksContainer = styled.div<{ $darkMode: boolean }>`
  height: 200vh;
  background-color: ${(props) => (props.$darkMode ? "#121212" : "#f5f5f5")};

  img {
    display: block;
    margin-bottom: 0.5rem;
    border-radius: 8px;
    width: 150px;
  }
`;
