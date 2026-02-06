import styled from "styled-components";

// export const AppWrapper = styled.div.withConfig({
//   shouldForwardProp: (prop) => prop !== "darkmode",
// })<{ darkmode?: boolean }>`
//   background: ${(p) => (p.darkmode ? "#000" : "#fff")};
//   color: ${(p) => (p.darkmode ? "#eee" : "#222")};
//   font-family: system-ui, sans-serif;
//   min-height: 100vh;
// `;

export const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 170vh;
  width: 164vh;
  padding: 24px;
  color: ${(p) => p.theme.text};
  background-color: ${(p) => p.theme.background};
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
`;

export const StyledContainer = styled.div`
  font-size: 1.2rem;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  text-align: justify;
  gap: 20px;
`;

// Horizontal one-line books row with smooth scroll
export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const BooksCarousel = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 8px 0 12px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  /* keep items in a single row */
  white-space: nowrap;

  /* hide default scrollbar (WebKit) */
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }

  /* ensure each card behaves as a snap point and doesn't shrink */
  & > * {
    flex: 0 0 auto;
    scroll-snap-align: start;
  }
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background 150ms ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  &.left {
    left: -12px;
  }
  &.right {
    right: -12px;
  }
`;
