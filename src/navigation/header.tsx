import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../pages/auth/useAuth";
import {
  AccountBox,
  Brand,
  HeaderInner,
  HeaderWrapper,
  NavButton,
  NavButtons,
  NavList,
  NavItem,
} from "./styledHeader";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmailIcon from "@mui/icons-material/Email";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Avatar } from "@mui/material";

import ThemeButton from "../theme/ThemeButton";
import AccountMenu from "./components/accountMenu";

const Header: React.FC = () => {
  const { user } = useAuth();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Brand onClick={() => navigate(user ? "/home" : "/login")}>
          <span className="brand-badge">
            <AutoStoriesIcon />
          </span>
          <span className="brand-text">
            <span className="brand-name">Learning App</span>
            <span className="brand-tagline">Read. Learn. Reflect.</span>
          </span>
        </Brand>

        {user && (
          <NavList>
            <NavItem to="/home" end>
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
          </NavList>
        )}

        <NavButtons>
          {user ? (
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <AccountBox onClick={() => setOpen(!open)}>
                <Avatar
                  src={user.profilePhoto || "/default-avatar.png"}
                  alt="Profile"
                />
                <span>My Account</span>
              </AccountBox>

              {open && <AccountMenu close={() => setOpen(false)} />}
              <ThemeButton />
            </div>
          ) : (
            <>
              <NavButton onClick={() => navigate("/login")}>Login</NavButton>
              <NavButton onClick={() => navigate("/register")}>
                Register
              </NavButton>
              <ThemeButton />
            </>
          )}
        </NavButtons>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
