import { Button, Icon } from "@chakra-ui/react";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";

const AccountLinkBtn = ({
  icon,
  route,
  label,
  colorScheme,
  active,
}: {
  route?: string;
  label: string;
  icon: LucideIcon | IconType;
  active?: boolean;
  colorScheme?: "blue" | "red";
}) => {
  const navigate = useNavigate();

  return (
    <Button
      px={2}
      variant={active ? "solid" : "ghost"}
      leftIcon={<Icon as={icon} />}
      w="100%"
      justifyContent="start"
      colorScheme={colorScheme || "gray"}
      onClick={() => route && navigate(`/account/${route}`)}
    >
      {label}
    </Button>
  );
};

export default AccountLinkBtn;
