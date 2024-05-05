import {
  Menu,
  Button,
  Icon,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { CircleUser, Key, Power } from "lucide-react";
import { Label } from "../../utilities/Typography";
import { useNavigate } from "react-router-dom";

const AdminAccountMenu = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Menu size="xs" autoSelect={false}>
      <MenuButton
        as={Button}
        bg="none"
        _hover={{ bg: "none" }}
        _active={{ bg: "none" }}
        _focus={{ bg: "none" }}
      >
        <Button
          w="100%"
          size="sm"
          bg="secondary.900"
          _hover={{ bg: "red.100" }}
          color="white"
          leftIcon={<Icon as={CircleUser} />}
        >
          Account
        </Button>
      </MenuButton>
      <MenuList borderRadius={0}>
        <MenuItem gap={2} onClick={() => navigate("/admin/changePassword")}>
          <Icon as={Key} color="black" />
          <Label text="Change Password" color="black" />
        </MenuItem>
        <MenuItem gap={2} onClick={logout}>
          <Icon as={Power} color="red" />
          <Label text="Logout" color="red" />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AdminAccountMenu;
