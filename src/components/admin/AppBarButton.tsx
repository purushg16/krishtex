import { VStack, Box, Icon } from "@chakra-ui/react";
import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { Label } from "../../utilities/Typography";

interface Props {
  active: boolean;
  icon: LucideIcon;
  route: string;
}

const AppBarButton = ({ active, route, icon }: Props) => {
  const navigate = useNavigate();

  return (
    <VStack
      onClick={() => navigate(route)}
      p={2}
      //   bg={active ? "primary.300" : "none"}
      borderRadius={10}
      color={active ? "black" : "blackAlpha.700"}
      transition="all 0.7s"
    >
      <Box
        lineHeight="normal"
        bg={active ? "primary.500" : "whiteAlpha.700"}
        p={2}
        borderRadius={10}
      >
        <Icon as={icon} />
      </Box>
      <Label text={route} textTransform="capitalize" small />
    </VStack>
  );
};

export default AppBarButton;
