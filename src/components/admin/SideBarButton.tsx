import { HStack, Icon } from "@chakra-ui/react";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Label } from "../../utilities/Typography";

const SideBarButton = ({
  label,
  active,
  icon,
}: {
  label: string;
  active: boolean;
  icon: LucideIcon;
}) => {
  return (
    <Link to={label} style={{ width: "100%" }}>
      <HStack
        bg={active ? "primary.50" : "none"}
        p={2}
        px={4}
        borderRadius={10}
      >
        <Icon as={icon} color={active ? "black" : "gray"} />
        <Label
          text={label}
          textTransform="capitalize"
          color={active ? "black" : "gray"}
        />
      </HStack>
    </Link>
  );
};

export default SideBarButton;
