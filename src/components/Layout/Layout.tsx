import {
  StyledContent,
  StyledOutletContainer,
  StyledWrapper,
} from "./Layout.styled";
import { Outlet } from "react-router-dom";
import Header from "../../navigation/header";
import BottomTabs from "../../navigation/BottomTabs";

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
      <BottomTabs />
    </>
  );
};

export default Layout;
