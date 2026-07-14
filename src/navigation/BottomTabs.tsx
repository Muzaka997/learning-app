import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmailIcon from "@mui/icons-material/Email";
import { BottomTabsBar, Tab } from "./BottomTabs.styled";

/* Mobile-only bottom navigation. Hidden at >760px via styled rules. */
const BottomTabs: React.FC = () => {
  return (
    <BottomTabsBar>
      <Tab to="/home" end>
        <HomeIcon /> Home
      </Tab>
      <Tab to="/courses">
        <SchoolIcon /> Courses
      </Tab>
      <Tab to="/assessments">
        <AssignmentIcon /> Tests
      </Tab>
      <Tab to="/e-books">
        <MenuBookIcon /> E-Books
      </Tab>
      <Tab to="/contactus">
        <EmailIcon /> Contact
      </Tab>
    </BottomTabsBar>
  );
};

export default BottomTabs;
