import { useAuth } from "../pages/auth/useAuth";
import { Sidebar, NavList, Item, Brand, Spacer, Label } from "./NavBar.styled";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmailIcon from "@mui/icons-material/Email";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export default function NavBar() {
  const { user } = useAuth();

  return (
    <Sidebar>
      {user && (
        <>
          <Brand>
            <AutoStoriesIcon /> Learning App
          </Brand>
          <NavList>
            <Item to="/home" end>
              <HomeIcon /> <Label>Home</Label>
            </Item>
            <Item to="/courses">
              <SchoolIcon /> <Label>Courses</Label>
            </Item>
            <Item to="/assessments">
              <AssignmentIcon /> <Label>Assessments</Label>
            </Item>
            <Item to="/e-books">
              <MenuBookIcon /> <Label>E-Books</Label>
            </Item>
            <Item to="/contactus">
              <EmailIcon /> <Label>Contact Us</Label>
            </Item>
          </NavList>
          <Spacer />
        </>
      )}
    </Sidebar>
  );
}
