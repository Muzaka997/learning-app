import React from "react";
import { StyledOutletContainer, StyledWrapper } from "./Layout.styled";
import NavBar from "../../navigation/nav-bar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <StyledWrapper>
      <NavBar />
      <StyledOutletContainer>
        <Outlet />
      </StyledOutletContainer>
    </StyledWrapper>
  );
};

export default Layout;
