import styled, { css } from "styled-components";

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
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${(p) => p.theme.cardShadowHover};
    border-color: color-mix(in srgb, ${(p) => p.theme.accent} 30%, transparent);
  }
`;

export const Media = styled.div`
  position: relative;
`;

export const StyledImage = styled.img<{ $square?: boolean }>`
  width: 100%;
  aspect-ratio: ${(p) => (p.$square ? "1 / 1" : "4 / 3")};
  object-fit: cover;
  display: block;
`;

export const Placeholder = styled.div<{ $square?: boolean }>`
  width: 100%;
  aspect-ratio: ${(p) => (p.$square ? "1 / 1" : "4 / 3")};
  display: grid;
  place-items: center;
  color: ${(p) => p.theme.textSubtle};
  background: linear-gradient(
    150deg,
    ${(p) => p.theme.hoverFill},
    color-mix(in srgb, ${(p) => p.theme.accent} 8%, transparent)
  );

  svg {
    font-size: 40px !important;
    opacity: 0.55;
  }
`;

const skillColor = (level?: string) => {
  switch (level) {
    case "advanced":
      return "#e0605f";
    case "intermediate":
      return "#e0a94a";
    default:
      return "#5bbd8a"; // beginner / unknown
  }
};

export const SkillChip = styled.span<{ $level?: string }>`
  position: absolute;
  top: 14px;
  left: 14px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  color: ${(p) => skillColor(p.$level)};
  background: rgba(10, 15, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: currentColor;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 9px;
  padding: 20px 24px 24px;

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
    font-size: 15px;
    line-height: 1.6;
    color: ${(p) => p.theme.textMuted};

    /* clamp so cards stay even height */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 13px;
  font-weight: 500;
  color: ${(p) => p.theme.textSubtle};

  span {
    display: inline-flex;
    align-items: center;
  }

  svg {
    font-size: 16px !important;
    margin-right: 5px;
  }

  .dot {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: currentColor;
    opacity: 0.6;
  }
`;

export const StyledButton = styled.button<{ $primary?: boolean }>`
  margin-top: auto;
  width: 100%;
  padding: 13px 18px;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition:
    background 0.16s ease,
    filter 0.16s ease,
    transform 0.16s ease;

  ${(p) =>
    p.$primary
      ? css`
          background: ${p.theme.accent};
          color: #fff;
          box-shadow: 0 12px 30px -12px ${p.theme.accent};

          &:hover {
            filter: brightness(1.08);
            transform: translateY(-1px);
          }
        `
      : css`
          background: color-mix(in srgb, ${p.theme.accent} 10%, transparent);
          color: ${p.theme.accent};

          &:hover {
            background: color-mix(in srgb, ${p.theme.accent} 18%, transparent);
          }
        `}
`;
