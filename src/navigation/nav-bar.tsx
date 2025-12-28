import { NavBarWrapper, NavItem } from "../global-styles";

import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmailIcon from "@mui/icons-material/Email";

export default function NavBar() {
  return (
    <NavBarWrapper>
      <NavItem to="/">
        <MenuBookIcon />
      </NavItem>

      <NavItem to="/">
        <HomeIcon /> Home
      </NavItem>

      <NavItem to="/courses">
        <SchoolIcon /> Courses
      </NavItem>

      <NavItem to="/assessments">
        <AssignmentIcon /> Assessments
      </NavItem>

      <NavItem to="/e-books">
        <MenuBookIcon /> E-Books
      </NavItem>

      <NavItem to="/contactus">
        <EmailIcon /> Contact Us
      </NavItem>
    </NavBarWrapper>
  );
}
