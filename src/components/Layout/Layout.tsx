import { StyledOutletContainer, StyledWrapper } from "./Layout.styled";
import NavBar from "../../navigation/nav-bar";
import { Outlet } from "react-router-dom";
import Header from "../../navigation/header";

const Layout = () => {
  return (
    <>
      <Header />
      <StyledWrapper>
        <NavBar />
        <StyledOutletContainer>
          <Outlet />
        </StyledOutletContainer>
      </StyledWrapper>
    </>
  );
};

export default Layout;
