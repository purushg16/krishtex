import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import { Name } from "../../utilities/Typography";

const CartPage = () => {
  return (
    <VStack gap={4} align="start">
      <Name text="Cart" color="black" />
      <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} spacing={4} w="100%">
        <Box w="100%" h={280} bg="gray.100" />
        <Box w="100%" h={280} bg="gray.100" />
        <Box w="100%" h={280} bg="gray.100" />
        <Box w="100%" h={280} bg="gray.100" />
        <Box w="100%" h={280} bg="gray.100" />
      </SimpleGrid>
    </VStack>
  );
};

export default CartPage;
