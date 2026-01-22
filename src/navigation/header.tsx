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
import AccountMenu from "./components/accountMenu";

const Header: React.FC = () => {
  const { user } = useAuth();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Logo onClick={() => navigate("/")}>MyApp</Logo>

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
    </HeaderWrapper>
  );
};

export default Header;
