import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../pages/auth/useAuth";
import {
  AccountBox,
  HeaderWrapper,
  Logo,
  NavButton,
  NavButtons,
} from "./styledHeader";
// import ThemeButtzon from "../components/ThemeButton";
import { Avatar } from "@mui/material";

import ThemeButton from "../components/ThemeButton";

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Logo onClick={() => navigate("/")}>MyApp</Logo>

      <NavButtons>
        {user ? (
          <>
            <AccountBox onClick={() => navigate("/profile")}>
              <Avatar
                src={
                  user.profilePhoto
                    ? `http://localhost:5001${user.profilePhoto}`
                    : "/default-avatar.png"
                }
              />
              <span>My Account</span>
            </AccountBox>

            <NavButton onClick={logout}>Logout</NavButton>
          </>
        ) : (
          <>
            <NavButton onClick={() => navigate("/login")}>Login</NavButton>
            <NavButton onClick={() => navigate("/register")}>
              Register
            </NavButton>
          </>
        )}

        <ThemeButton />
      </NavButtons>
    </HeaderWrapper>
  );
};

export default Header;
