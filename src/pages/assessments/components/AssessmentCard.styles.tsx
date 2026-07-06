import styled from "styled-components";

export const AssessmentCardContainer = styled.div`
  width: 380px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  padding: 40px 34px;
  background: ${(p) => p.theme.cardBg};
  border: 1px solid ${(p) => p.theme.cardBorder};
  border-radius: 20px;
  box-shadow: ${(p) => p.theme.cardShadow};
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${(p) => p.theme.cardShadowHover};
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-family: ${(p) => p.theme.headingFont};
  font-weight: 600;
  font-size: 25px;
  line-height: 1.25;
  color: ${(p) => p.theme.heading};
`;

export const Description = styled.p`
  margin: 0;
  font-size: 15px;
  color: ${(p) => p.theme.textMuted};
`;

export const ScoreRing = styled.div`
  position: relative;
  width: 128px;
  height: 128px;
  display: grid;
  place-items: center;
  margin: 4px 0;

  svg {
    position: absolute;
    inset: 0;
    transform: rotate(-90deg);
  }

  .score-value {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1;
  }
  .score-number {
    font-family: ${(p) => p.theme.headingFont};
    font-weight: 600;
    font-size: 34px;
    color: ${(p) => p.theme.heading};
  }
  .score-label {
    margin-top: 5px;
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${(p) => p.theme.textSubtle};
  }
`;

export const PrimaryButton = styled.button`
  margin-top: 8px;
  padding: 11px 26px;
  border: 0;
  border-radius: 999px;
  background: ${(p) => p.theme.accent};
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 18px -8px ${(p) => p.theme.accent};
  transition: filter 0.16s ease;

  &:hover {
    filter: brightness(1.06);
  }
`;
