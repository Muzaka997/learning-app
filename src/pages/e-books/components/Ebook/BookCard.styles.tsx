import styled from "styled-components";

export const BookCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  background: ${(p) => p.theme.cardBg};
  border: 1px solid ${(p) => p.theme.cardBorder};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${(p) => p.theme.cardShadow};
  transition:
    transform 0.25s cubic-bezier(0.2, 0.7, 0.3, 1),
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${(p) => p.theme.cardShadowHover};
  }
`;

export const StyledImage = styled.img`
  display: block;
  width: calc(100% - 36px);
  margin: 18px 18px 0;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 10px 22px -12px rgba(22, 35, 58, 0.5);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 18px 18px 0;
  flex: 1;
`;

export const Title = styled.strong`
  display: block;
  font-family: ${(p) => p.theme.headingFont};
  font-size: 19px;
  font-weight: 600;
  line-height: 1.25;
  color: ${(p) => p.theme.heading};
`;

export const Author = styled.small`
  font-size: 13.5px;
  font-style: italic;
  color: ${(p) => p.theme.accent};
`;

export const Description = styled.p`
  margin: 4px 0 0;
  font-size: 14.5px;
  line-height: 1.55;
  color: ${(p) => p.theme.textMuted};

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin: 18px;
  padding: 11px;
  border-radius: 10px;
  background: color-mix(in srgb, ${(p) => p.theme.accent} 10%, transparent);
  color: ${(p) => p.theme.accent};
  font-size: 15px;
  font-weight: 600;
  transition: background 0.16s ease;

  &:hover {
    background: color-mix(in srgb, ${(p) => p.theme.accent} 18%, transparent);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
