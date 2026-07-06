import {
  StyledContent,
  StyledOutletContainer,
  StyledWrapper,
} from "./Layout.styled";
import { Outlet } from "react-router-dom";
import Header from "../../navigation/header";

const Layout = () => {
  return (
    <>
      <Header />
      <StyledWrapper>
        <StyledContent>
          <StyledOutletContainer>
            <Outlet />
          </StyledOutletContainer>
        </StyledContent>
      </StyledWrapper>
    </>
  );
};

export default Layout;
