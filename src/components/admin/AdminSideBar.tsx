import { Divider, HStack, Icon, Stack, Box, Button } from "@chakra-ui/react";
import { Label } from "../../utilities/Typography";
import { Link, useLocation } from "react-router-dom";
import {
  BoxIcon,
  Factory,
  Power,
  ScrollText,
  SquareLibrary,
} from "lucide-react";

const AdminSideBar = () => {
  const location = useLocation().pathname.split("/")[2];

  return (
    <Stack
      gap={8}
      align="start"
      p={4}
      bg="#ffffff"
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
          <Link to="products" style={{ width: "100%" }}>
            <HStack
              bg={location === "products" ? "primary.50" : "none"}
              p={2}
              px={4}
              borderRadius={10}
            >
              <Icon
                as={BoxIcon}
                color={location === "products" ? "black" : "gray"}
              />
              <Label
                text="Products"
                color={location === "products" ? "black" : "gray"}
              />
            </HStack>
          </Link>
          <Link to="categories" style={{ width: "100%" }}>
            <HStack
              bg={location === "categories" ? "primary.50" : "none"}
              p={2}
              px={4}
              borderRadius={10}
            >
              <Icon
                as={SquareLibrary}
                color={location === "categories" ? "black" : "gray"}
              />
              <Label
                text="Categories"
                color={location === "categories" ? "black" : "gray"}
              />
            </HStack>
          </Link>
          <Link to="orders" style={{ width: "100%" }}>
            <HStack
              bg={location === "orders" ? "primary.50" : "none"}
              p={2}
              px={4}
              borderRadius={10}
            >
              <Icon
                as={ScrollText}
                color={location === "orders" ? "black" : "gray"}
              />
              <Label
                text="Orders"
                color={location === "orders" ? "black" : "gray"}
              />
            </HStack>
          </Link>
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
