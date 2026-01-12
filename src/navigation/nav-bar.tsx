import { NavBarWrapper, NavItem } from "../global-styles";
import { useAuth } from "../pages/auth/useAuth";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmailIcon from "@mui/icons-material/Email";

import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

export default function NavBar() {
  const { user, logout } = useAuth();

  return (
    <NavBarWrapper>
      {/* 🔐 Auth section */}
      {user && (
        <>
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
          <NavItem to="/profile">
            <PersonIcon /> {user.name}
          </NavItem>
          <NavItem to="/login" onClick={logout}>
            <LogoutIcon /> Logout
          </NavItem>
        </>
      )}
    </NavBarWrapper>
  );
}
