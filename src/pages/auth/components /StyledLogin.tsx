import styled, { css, keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: none; }
`;

/* Full-screen auth backdrop, matching the app-root radial gradient. */
export const AuthScreen = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 48px 24px;
  color: ${(p) => p.theme.text};
  background:
    radial-gradient(
      1200px 600px at 78% -8%,
      color-mix(in srgb, ${(p) => p.theme.accent} 12%, transparent),
      transparent 60%
    ),
    ${(p) => p.theme.background};
  transition:
    background 0.25s ease,
    color 0.25s ease;
`;

/* Two-column card: brand panel + form. Collapses to one column on mobile. */
export const AuthCard = styled.div`
  width: 100%;
  max-width: 960px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: ${(p) => p.theme.cardBg};
  border: 1px solid ${(p) => p.theme.cardBorder};
  border-radius: 26px;
  overflow: hidden;
  box-shadow: ${(p) => p.theme.cardShadow};
  animation: ${fadeUp} 0.4s ease;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    max-width: 440px;
    border-radius: 20px;
  }
`;

/* Left brand panel — always a rich navy gradient (like the mockup). */
export const AuthBrand = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  min-height: 520px;
  padding: 44px 40px;
  color: ${(p) => p.theme.text};
  background: linear-gradient(
    160deg,
    ${(p) => p.theme.cardBg},
    color-mix(in srgb, ${(p) => p.theme.cardBg} 82%, ${(p) => p.theme.accent})
  );

  @media (max-width: 760px) {
    min-height: 0;
    padding: 30px 28px;
    gap: 18px;
  }
`;

export const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

export const BrandMark = styled.span`
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 13px;
  color: #fff;
  background: linear-gradient(150deg, #5b8def, #3f63c4);
  box-shadow: 0 8px 20px -8px rgba(91, 141, 239, 0.7);

  svg {
    font-size: 23px !important;
    color: #fff;
  }
`;

export const BrandText = styled.span`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
`;

export const BrandName = styled.span`
  font-family: ${(p) => p.theme.headingFont};
  font-weight: 600;
  font-size: 19px;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.heading};
`;

export const BrandTagline = styled.span`
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${(p) => p.theme.textMuted};
`;

export const Quote = styled.div`
  p {
    margin: 0;
  }
  .quote {
    font-family: ${(p) => p.theme.headingFont};
    font-style: italic;
    font-size: 26px;
    line-height: 1.4;
    color: ${(p) => p.theme.heading};
    margin-bottom: 18px;
  }
  .cite {
    font-size: 13px;
    letter-spacing: 0.14em;
    font-weight: 600;
    color: ${(p) => p.theme.textMuted};
  }

  @media (max-width: 760px) {
    /* keep the panel compact on mobile */
    .quote {
      display: none;
    }
    .cite {
      display: none;
    }
  }
`;

/* Right side — the actual form. */
export const AuthForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 44px;

  @media (max-width: 760px) {
    padding: 34px 26px;
  }
`;

export const FormEyebrow = styled.div`
  color: ${(p) => p.theme.textMuted};
  font-size: 15px;
  margin-bottom: 6px;
`;

export const FormTitle = styled.h1`
  margin: 0 0 30px;
  font-family: ${(p) => p.theme.headingFont};
  font-weight: 600;
  font-size: 30px;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.heading};
`;

export const BackLink = styled.button`
  align-self: flex-start;
  margin-bottom: 18px;
  padding: 0;
  background: none;
  border: none;
  color: ${(p) => p.theme.accent};
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  font-size: 13.5px;
  margin-bottom: 8px;
  color: ${(p) => p.theme.heading};
`;

export const FieldWrap = styled.div`
  position: relative;
  margin-bottom: 20px;

  /* leading icon */
  > svg {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: ${(p) => p.theme.textSubtle};
    font-size: 20px !important;
    pointer-events: none;
  }
`;

export const Field = styled.input`
  width: 100%;
  padding: 14px 15px 14px 44px;
  border-radius: 12px;
  border: 1px solid ${(p) => p.theme.inputBorder};
  background: ${(p) => p.theme.inputBg};
  color: ${(p) => p.theme.text};
  font-size: 15px;
  outline: none;
  transition:
    border-color 0.16s ease,
    box-shadow 0.16s ease;

  &::placeholder {
    color: ${(p) => p.theme.textSubtle};
  }
`;

export const EyeButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: none;
  background: none;
  color: ${(p) => p.theme.textMuted};
  cursor: pointer;

  svg {
    font-size: 21px !important;
  }
`;

const buttonBase = css`
  width: 100%;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition:
    filter 0.16s ease,
    background 0.16s ease,
    transform 0.16s ease;
`;

export const PrimaryButton = styled.button`
  ${buttonBase}
  margin-top: 10px;
  padding: 15px;
  color: #fff;
  background: ${(p) => p.theme.accent};
  box-shadow: 0 12px 30px -12px ${(p) => p.theme.accent};

  &:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
`;

export const SecondaryButton = styled.button`
  ${buttonBase}
  margin-top: 12px;
  padding: 14px;
  background: transparent;
  color: ${(p) => p.theme.accent};
  border: 1px solid ${(p) => p.theme.inputBorder};

  &:hover {
    background: color-mix(in srgb, ${(p) => p.theme.accent} 8%, transparent);
  }
`;

export const ErrorText = styled.p`
  margin: 4px 0 0;
  color: #e0605f;
  font-size: 14px;
  font-weight: 500;
`;

/* Fixed theme toggle in the top-right corner, like the mockup. */
export const ThemeFixed = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 5;
`;
