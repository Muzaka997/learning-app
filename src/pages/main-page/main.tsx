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
  return (
    <AppWrapper>
      <Header>
        <Logo>MyApp</Logo>
        <Nav>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Features</NavLink>
          <NavLink href="#">Contact</NavLink>
        </Nav>
      </Header>

      <Hero>
        <h2>Welcome to MyApp</h2>
        <p>A modern React + TypeScript application template.</p>
        <CTAButton>Get Started</CTAButton>
      </Hero>

      <Features>
        <h3>Features</h3>
        <ul>
          <li>⚡ Fast & lightweight</li>
          <li>🔒 Type-safe with TypeScript</li>
          <li>🎨 Clean, modern UI</li>
          <li>🚀 Ready for real projects</li>
        </ul>
      </Features>

      <Footer>
        <p>© {new Date().getFullYear()} MyApp — All rights reserved.</p>
      </Footer>
    </AppWrapper>
  );
}

export default MainPage;
