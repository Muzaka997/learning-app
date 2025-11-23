import styled from "styled-components";
import "styled-components";

export const AppWrapper = styled.div`
  color: #222;
  font-family: system-ui, sans-serif;
  margin: 0;
  padding: 0;
`;

export const Header = styled.header`
  color: white;
  background: #222;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-bottom: 1px solid #eee;
`;

export const Logo = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: 0.2s;

  &:hover {
    color: #000;
  }
`;

export const Hero = styled.section`
  text-align: center;
  padding: 4rem 1rem;
  background: #f7f7f7;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const CTAButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #333;
  color: white;
  transition: 0.2s;

  &:hover {
    background: #000;
  }
`;

export const Features = styled.section`
  color: white;
  background: #333;
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

export const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  margin-top: 3rem;
  border-top: 1px solid #eee;
  font-size: 0.9rem;
  color: #666;
`;
