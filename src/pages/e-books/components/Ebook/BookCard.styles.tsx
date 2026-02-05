import styled from "styled-components";

export const BookCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 540px;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 16px;
  gap: 12px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* Optional: Add hover effect */
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
    transition:
      box-shadow 0.2s,
      transform 0.2s;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  background-color: ${(p) => p.theme.background};
  color: ${(p) => p.theme.buttonText};
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.2s,
    transform 0.2s;

  &:hover {
    background-color: ${(p) => p.theme.background};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: transform 0.2s;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Info = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1; /* take remaining space so cards align */
`;

export const Title = styled.strong`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: ${(p) => p.theme.text};
`;

export const Author = styled.small`
  color: ${(p) => p.theme.text};
`;

export const Description = styled.p`
  margin-top: 8px;
  font-size: 13px;
  color: ${(p) => p.theme.text};
  line-height: 1.3;
  margin-bottom: 0;
  /* clamp to 3 lines for consistent card heights */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
