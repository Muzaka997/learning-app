import { NavBarWrapper, NavItem } from "../global-styles";
import { useAuth } from "../pages/auth/useAuth";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmailIcon from "@mui/icons-material/Email";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

export default function NavBar() {
  const { user, logout } = useAuth();

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

      {/* 🔒 Only show if logged in */}
      {user && (
        <>
          <NavItem to="/e-books">
            <MenuBookIcon /> E-Books
          </NavItem>
          <NavItem to="/contactus">
            <EmailIcon /> Contact Us
          </NavItem>
        </>
      )}

      {/* 🔐 Auth section */}
      {user ? (
        <>
          <NavItem to="/profile">
            <PersonIcon /> {user.name}
          </NavItem>

          <NavItem to="/" onClick={logout}>
            <LogoutIcon /> Logout
          </NavItem>
        </>
      ) : (
        <>
          <NavItem to="/register">
            <PersonIcon /> Register
          </NavItem>
          <NavItem to="/login">
            <LoginIcon /> Login
          </NavItem>
        </>
      )}
    </NavBarWrapper>
  );
}
