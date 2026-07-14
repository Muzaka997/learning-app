import styled from "styled-components";

export const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(p) => p.theme.text};
`;

/* ---------------- Hero ---------------- */
export const Hero = styled.section`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 56px;
  align-items: center;
  padding: 12px 0 40px;

  @media (max-width: 1000px) {
    gap: 36px;
  }
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 0 0 8px;
  }
`;

export const HeroCopy = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Kicker = styled.p`
  margin: 0 0 20px;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${(p) => p.theme.accent};
`;

export const HeroTitle = styled.h1`
  margin: 0 0 26px;
  font-family: ${(p) => p.theme.headingFont};
  font-weight: 600;
  font-size: 66px;
  line-height: 1.02;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.heading};

  @media (max-width: 1000px) {
    font-size: 52px;
  }
  @media (max-width: 760px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 56ch;
  margin-bottom: 34px;

  p {
    margin: 0;
    color: ${(p) => p.theme.textMuted};
    font-size: 17px;
    line-height: 1.72;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;

export const BtnPrimary = styled.button`
  padding: 15px 28px;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
  background: ${(p) => p.theme.accent};
  box-shadow: 0 12px 30px -12px ${(p) => p.theme.accent};
  transition:
    filter 0.16s ease,
    transform 0.16s ease;

  &:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }
`;

export const BtnOutline = styled.button`
  padding: 15px 28px;
  border-radius: 12px;
  border: 1px solid ${(p) => p.theme.inputBorder};
  background: transparent;
  color: ${(p) => p.theme.heading};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.16s ease,
    border-color 0.16s ease;

  &:hover {
    background: color-mix(in srgb, ${(p) => p.theme.accent} 8%, transparent);
    border-color: color-mix(in srgb, ${(p) => p.theme.accent} 35%, transparent);
  }
`;

/* ---------------- Continue-learning card ---------------- */
export const ContinueCard = styled.aside`
  padding: 10px;
  border-radius: 22px;
  border: 1px solid ${(p) => p.theme.cardBorder};
  background: linear-gradient(
    180deg,
    ${(p) => p.theme.cardBg},
    color-mix(in srgb, ${(p) => p.theme.cardBg} 82%, ${(p) => p.theme.accent})
  );
  box-shadow: ${(p) => p.theme.cardShadow};
`;

export const ContinueMedia = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 16 / 12;
`;

export const ContinueImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const ContinuePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: ${(p) => p.theme.hoverFill};
`;

export const Veil = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(6, 10, 20, 0.9));
  pointer-events: none;
`;

export const ContinueCap = styled.div`
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 18px;
  pointer-events: none;

  .eyebrow {
    font-size: 11px;
    letter-spacing: 0.18em;
    font-weight: 600;
    color: #c9d4e8;
    margin-bottom: 6px;
  }
  .title {
    font-family: ${(p) => p.theme.headingFont};
    font-size: 23px;
    font-weight: 600;
    line-height: 1.2;
    color: #fff;
  }
`;

export const ContinueBody = styled.div`
  padding: 18px 16px 12px;
`;

export const ProgressRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: ${(p) => p.theme.textMuted};
  margin-bottom: 9px;

  strong {
    color: ${(p) => p.theme.heading};
    font-weight: 600;
  }
`;

export const ProgressTrack = styled.div`
  height: 8px;
  border-radius: 6px;
  background: ${(p) => p.theme.hoverFill};
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  border-radius: 6px;
  background: linear-gradient(
    90deg,
    ${(p) => p.theme.accent},
    color-mix(in srgb, ${(p) => p.theme.accent} 55%, #ffffff)
  );
`;

export const BtnGhost = styled.button`
  width: 100%;
  margin-top: 16px;
  padding: 13px;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  background: color-mix(in srgb, ${(p) => p.theme.accent} 12%, transparent);
  color: ${(p) => p.theme.accent};
  transition: background 0.16s ease;

  &:hover {
    background: color-mix(in srgb, ${(p) => p.theme.accent} 20%, transparent);
  }
`;
