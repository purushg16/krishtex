import { Button, SimpleGrid, Stack, VStack, Box } from "@chakra-ui/react";
import { Name } from "../../utilities/Typography";

const ProductPage = () => {
  return (
    <Stack p={4} h="100%">
      <VStack align="start" gap={4}>
        <Name text="Products" color="black" />
        <Button size="xs" colorScheme="primary">
          Add New Product
        </Button>
      </VStack>
      <Box
        w="100%"
        maxH={{ base: "100%", md: 500 }}
        overflowY="scroll"
        my={4}
        borderTop="1px solid"
        borderColor="blackAlpha.300"
        pt={4}
        pb={28}
      >
        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
          <Box w="100" aspectRatio="3/2" bg="secondary.50" />
          <Box w="100" aspectRatio="3/2" bg="secondary.50" />
          <Box w="100" aspectRatio="3/2" bg="secondary.50" />
          <Box w="100" aspectRatio="3/2" bg="secondary.50" />
          <Box w="100" aspectRatio="3/2" bg="secondary.50" />
          <Box w="100" aspectRatio="3/2" bg="secondary.50" />
          <Box w="100" aspectRatio="3/2" bg="secondary.50" />
          <Box w="100" aspectRatio="3/2" bg="secondary.50" />
        </SimpleGrid>
      </Box>
    </Stack>
  );
};

export default ProductPage;
