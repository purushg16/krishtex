import { Flex, HStack, SimpleGrid, Tag, VStack } from "@chakra-ui/react";
import { BoxIcon, ScrollText, SquareLibrary } from "lucide-react";
import { useLocation } from "react-router";
import { Name } from "../../utilities/Typography";
import AppBarButton from "./AppBarButton";

const AdminAppBar = () => {
  const location = useLocation().pathname.split("/")[2];

  return (
    <Flex
      zIndex={999}
      pos="absolute"
      bottom={0}
      justify="center"
      w="100%"
      align="center"
      py={2}
      bg="primary.100"
    >
      <HStack w="100%" justify="space-between" px={4}>
        <VStack align="start">
          <Tag size="sm" colorScheme="green">
            Admin
          </Tag>
          <Name color="black" text="Krishtex" />
        </VStack>
        <SimpleGrid columns={3} spacing={4}>
          <AppBarButton
            route="products"
            active={location === "products"}
            icon={BoxIcon}
          />
          <AppBarButton
            route="categories"
            active={location === "categories"}
            icon={SquareLibrary}
          />
          <AppBarButton
            route="orders"
            active={location === "orders"}
            icon={ScrollText}
          />
        </SimpleGrid>
      </HStack>
    </Flex>
  );
};

export default AdminAppBar;
