import styled from "styled-components";

export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.12);
  }

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  p {
    color: #555;
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.6rem 1.2rem;
    background: #0070f3;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
