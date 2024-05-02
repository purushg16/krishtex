import { Box, Flex, HStack, Icon, SimpleGrid } from "@chakra-ui/react";
import { BoxIcon, Factory, ScrollText, SquareLibrary } from "lucide-react";
import { useLocation } from "react-router";
import { Label } from "../../utilities/Typography";
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
        <Box
          p={2}
          bg="primary.300"
          borderRadius={10}
          border="1px solid"
          borderColor="primary.600"
          lineHeight="normal"
        >
          <Icon as={Factory} color="black" boxSize={4} />
          <Label color="black" text="Krishtex" />
        </Box>
        <SimpleGrid columns={3} spacing={0} w="max-content">
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
