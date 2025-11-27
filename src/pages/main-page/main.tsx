import { useThemeContext } from "../../theme/useThemeContext";
import {
  AppWrapper,
  Header,
  Logo,
  Nav,
  NavLink,
  Hero,
  CTAButton,
  Features,
  Footer,
} from "./Main.styles";

function MainPage() {
  const { darkmode } = useThemeContext();

  return (
    <AppWrapper darkmode={darkmode}>
      <Header darkmode={darkmode}>
        <Logo>MyApp</Logo>
        <Nav>
          <NavLink darkmode={darkmode} href="#">
            Home
          </NavLink>
          <NavLink darkmode={darkmode} href="#">
            Features
          </NavLink>
          <NavLink darkmode={darkmode} href="#">
            Contact
          </NavLink>
        </Nav>
      </Header>

      <Hero darkmode={darkmode}>
        <h2>Welcome to MyApp</h2>
        <p>A modern React + TypeScript application template.</p>
        <CTAButton darkmode={darkmode}>Get Started</CTAButton>
      </Hero>

      <Features darkmode={darkmode}>
        <h3>Features</h3>
        <ul>
          <li>⚡ Fast & lightweight</li>
          <li>🔒 Type-safe with TypeScript</li>
          <li>🎨 Clean, modern UI</li>
          <li>🚀 Ready for real projects</li>
        </ul>
      </Features>

      <Footer darkmode={darkmode}>
        <p>© {new Date().getFullYear()} MyApp — All rights reserved.</p>
      </Footer>
    </AppWrapper>
  );
}

export default MainPage;
