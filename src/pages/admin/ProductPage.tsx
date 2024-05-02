import { Button, Stack, VStack, Box } from "@chakra-ui/react";
import { Name } from "../../utilities/Typography";
import ProductsGrid from "../../components/ProductsGrid";
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <Stack p={4} h="100%">
      <VStack align="start" gap={4}>
        <Name text="Products" color="black" />
        <Link to="add">
          <Button size="sm" colorScheme="primary">
            Add New Product
          </Button>
        </Link>
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
        {/* <SkeletonGrid /> */}
        <ProductsGrid />
      </Box>
    </Stack>
  );
};

export default ProductPage;
