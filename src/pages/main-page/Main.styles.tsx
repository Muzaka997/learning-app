import styled from "styled-components";

export const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(p) => p.theme.text};

  h1 {
    margin: 0 0 26px;
    font-family: ${(p) => p.theme.headingFont};
    font-weight: 500;
    font-size: 52px;
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: ${(p) => p.theme.heading};
  }

  h2 {
    margin: 64px 0 28px;
    font-family: ${(p) => p.theme.headingFont};
    font-weight: 500;
    font-size: 34px;
    letter-spacing: -0.015em;
    color: ${(p) => p.theme.heading};
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 38px;
    }
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 14px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${(p) => p.theme.accent};
`;

export const StyledContainer = styled.div`
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 18px;
  line-height: 1.72;
  color: ${(p) => p.theme.textMuted};

  p {
    margin: 0;
  }
`;

// Horizontal one-line books row with smooth scroll
export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const BooksCarousel = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 8px 4px 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(p) => p.theme.cardBorder};
    border-radius: 8px;
  }

  & > * {
    flex: 0 0 auto;
    scroll-snap-align: start;
  }
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  z-index: 2;
  background: ${(p) => p.theme.cardBg};
  color: ${(p) => p.theme.navText};
  border: 1px solid ${(p) => p.theme.cardBorder};
  box-shadow: ${(p) => p.theme.cardShadow};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 22px;
  cursor: pointer;
  transition:
    background 150ms ease,
    transform 150ms ease;

  &:hover {
    background: color-mix(in srgb, ${(p) => p.theme.accent} 10%, transparent);
  }

  &.left {
    left: -14px;
  }
  &.right {
    right: -14px;
  }
`;
