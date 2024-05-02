import { Button, Stack, VStack, Box } from "@chakra-ui/react";
import { Name } from "../../utilities/Typography";
import SkeletonGrid from "../../components/SkeletonGrid";

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
        maxH="100%"
        overflowY="scroll"
        my={4}
        borderTop="1px solid"
        borderColor="blackAlpha.300"
        pt={4}
        pb={28}
      >
        <SkeletonGrid />
      </Box>
    </Stack>
  );
};

export default ProductPage;
