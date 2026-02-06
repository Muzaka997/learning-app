import { useNavigate } from "react-router-dom";
import { MenuCard } from "./accountMenu.styles";
import { MenuItem } from "@mui/material";
import { useAuth } from "../../pages/auth/useAuth";

interface AccountMenuProps {
  close: () => void;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ close }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
    close();
  };

  return (
    <MenuCard>
      <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>

      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </MenuCard>
  );
};

export default AccountMenu;
