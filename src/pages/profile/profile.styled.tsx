import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 44px;
  border-radius: 24px;
  color: ${(p) => p.theme.text};
  background: ${(p) => p.theme.cardBg};
  border: 1px solid ${(p) => p.theme.cardBorder};
  box-shadow: ${(p) => p.theme.cardShadow};

  @media (max-width: 760px) {
    padding: 28px 20px;
    border-radius: 20px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 30px;
  font-family: ${(p) => p.theme.headingFont};
  font-weight: 600;
  font-size: 40px;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${(p) => p.theme.heading};

  @media (max-width: 760px) {
    font-size: 30px;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 28px;
`;

export const Avatar = styled.img`
  width: 132px;
  height: 132px;
  border-radius: 50%;
  object-fit: cover;
  background: ${(p) => p.theme.hoverFill};
  border: 3px solid ${(p) => p.theme.cardBg};
  box-shadow:
    0 0 0 3px color-mix(in srgb, ${(p) => p.theme.accent} 45%, transparent),
    ${(p) => p.theme.cardShadow};
`;

export const AvatarFallback = styled.div`
  width: 132px;
  height: 132px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-family: ${(p) => p.theme.headingFont};
  font-weight: 600;
  font-size: 52px;
  color: #fff;
  background: linear-gradient(150deg, #5b8def, #3f63c4);
  border: 3px solid ${(p) => p.theme.cardBg};
  box-shadow:
    0 0 0 3px color-mix(in srgb, ${(p) => p.theme.accent} 45%, transparent),
    ${(p) => p.theme.cardShadow};
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding: 16px 20px;
  border-radius: 14px;
  background: ${(p) => p.theme.hoverFill};
  border: 1px solid ${(p) => p.theme.cardBorder};

  .label {
    font-size: 13.5px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: ${(p) => p.theme.textMuted};
  }
  .value {
    font-size: 15px;
    font-weight: 500;
    color: ${(p) => p.theme.heading};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const UploadSection = styled.div`
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid ${(p) => p.theme.cardBorder};

  .upload-heading {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${(p) => p.theme.textSubtle};
    text-align: center;
    margin: 0 0 16px;
  }
`;
