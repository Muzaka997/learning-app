import styled from "styled-components";

export const AppWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "darkmode",
})<{ darkmode?: boolean }>`
  background: ${(p) => (p.darkmode ? "#000" : "#fff")};
  color: ${(p) => (p.darkmode ? "#eee" : "#222")};
  font-family: system-ui, sans-serif;
  min-height: 100vh;
`;

export const Header = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== "darkmode",
})<{ darkmode?: boolean }>`
  background: ${(p) => (p.darkmode ? "#111" : "#fff")};
  color: ${(p) => (p.darkmode ? "#fff" : "#111")};
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-bottom: 1px solid ${(p) => (p.darkmode ? "#333" : "#eee")};
`;

export const Logo = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const NavLink = styled.a.withConfig({
  shouldForwardProp: (prop) => prop !== "darkmode", // prevent darkmode from reaching <a>
})<{ darkmode?: boolean }>`
  color: ${(p) => (p.darkmode ? "#fff" : "#333")};
  text-decoration: none;
  padding: 0.5rem 1rem;

  &:hover {
    color: ${(p) => (p.darkmode ? "#ddd" : "#000")};
  }
`;

export const Hero = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "darkmode",
})<{ darkmode?: boolean }>`
  text-align: center;
  padding: 4rem 1rem;
  background: ${(p) => (p.darkmode ? "#111" : "#f7f7f7")};
  color: ${(p) => (p.darkmode ? "#eee" : "#222")};

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const CTAButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "darkmode",
})<{ darkmode?: boolean }>`
  margin-top: 1.5rem;
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: ${(p) => (p.darkmode ? "#444" : "#333")};
  color: white;
  transition: 0.2s;

  &:hover {
    background: ${(p) => (p.darkmode ? "#222" : "#000")};
  }
`;

export const Features = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== "darkmode",
})<{ darkmode?: boolean }>`
  background: ${(p) => (p.darkmode ? "#222" : "#333")};
  color: ${(p) => (p.darkmode ? "#ddd" : "white")};
  padding: 3rem 2rem;
  max-width: 800px;
  margin: 2rem auto;
  border-radius: 12px;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    line-height: 2;
  }
`;

export const Footer = styled.footer.withConfig({
  shouldForwardProp: (prop) => prop !== "darkmode",
})<{ darkmode?: boolean }>`
  text-align: center;
  padding: 2rem;
  margin-top: 3rem;
  border-top: 1px solid ${(p) => (p.darkmode ? "#333" : "#eee")};
  font-size: 0.9rem;
  color: ${(p) => (p.darkmode ? "#aaa" : "#666")};
`;
