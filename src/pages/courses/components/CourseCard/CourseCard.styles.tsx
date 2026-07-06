import styled from "styled-components";

export const StyledCourseCard = styled.div<{ $darkMode?: boolean }>`
  display: flex;
  flex-direction: column;
  background: ${(p) => p.theme.cardBg};
  border: 1px solid ${(p) => p.theme.cardBorder};
  border-radius: 18px;
  overflow: hidden;
  box-shadow: ${(p) => p.theme.cardShadow};
  transition:
    transform 0.25s cubic-bezier(0.2, 0.7, 0.3, 1),
    box-shadow 0.25s ease;

  h3 {
    margin: 0;
    font-family: ${(p) => p.theme.headingFont};
    font-weight: 600;
    font-size: 21px;
    line-height: 1.25;
    color: ${(p) => p.theme.heading};
  }

  p {
    margin: 0;
    font-size: 15.5px;
    line-height: 1.6;
    color: ${(p) => p.theme.textMuted};
  }

  /* text block padding */
  > h3,
  > p {
    padding: 0 24px;
  }
  > h3 {
    padding-top: 24px;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${(p) => p.theme.cardShadowHover};
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  display: block;
`;

export const StyledButton = styled.button`
  margin: 24px 24px 30px;
  padding: 12px 18px;
  border-radius: 10px;
  background: color-mix(in srgb, ${(p) => p.theme.accent} 10%, transparent);
  color: ${(p) => p.theme.accent};
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  transition: background 0.16s ease;

  &:hover {
    background: color-mix(in srgb, ${(p) => p.theme.accent} 18%, transparent);
  }
`;
