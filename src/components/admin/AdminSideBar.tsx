import { Box, Button, Divider, HStack, Icon, Stack } from "@chakra-ui/react";
import {
  BoxIcon,
  Factory,
  MessageSquareQuote,
  Power,
  ScrollText,
  SquareLibrary,
  SquarePen,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { Label } from "../../utilities/Typography";
import SideBarButton from "./SideBarButton";

const AdminSideBar = () => {
  const location = useLocation().pathname.split("/")[2];

  return (
    <Stack
      gap={8}
      align="start"
      p={4}
      bg="gray.50"
      h="100%"
      justify="space-between"
    >
      <Stack w="100%" gap={4}>
        <HStack gap={4}>
          <Box
            p={2}
            bg="blackAlpha.50"
            border="1px solid"
            borderRadius={10}
            borderColor="blackAlpha.100"
            lineHeight="normal"
          >
            <Icon as={Factory} color="black" />
          </Box>
          <Label text="Krishtex" color="black" />
        </HStack>
        <Divider />
        <Stack align="start">
          <SideBarButton
            icon={BoxIcon}
            label="products"
            active={location === "products"}
          />
          <SideBarButton
            icon={SquareLibrary}
            label="categories"
            active={location === "categories"}
          />
          <SideBarButton
            icon={ScrollText}
            label="orders"
            active={location === "orders"}
          />
          <SideBarButton
            icon={SquarePen}
            label="reviews"
            active={location === "reviews"}
          />
          <SideBarButton
            icon={MessageSquareQuote}
            label="blogs"
            active={location === "blogs"}
          />
        </Stack>
      </Stack>
      <Stack w="100%">
        <Divider my={4} />
        <HStack>
          <Button
            size="xs"
            bg="red.100"
            _hover={{ bg: "red.100" }}
            color="red"
            leftIcon={<Icon as={Power} />}
          >
            Logout
          </Button>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default AdminSideBar;
