import { NavBarWrapper, NavItem } from "../global-styles";

export default function NavBar() {
  return (
    <NavBarWrapper>
      <h1>📖</h1>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/courses">Courses</NavItem>
      <NavItem to="/assessments">Assessments</NavItem>
      <NavItem to="/e-books">E-Books</NavItem>
      <NavItem to="/contactus">Contact Us</NavItem>
    </NavBarWrapper>
  );
}
