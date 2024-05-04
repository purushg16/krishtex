import { SimpleGrid, VStack } from "@chakra-ui/react";
import { Name } from "../../utilities/Typography";
import ProductCard from "../../components/ProductCard";
import products from "../../data/products";

const ProductsPage = () => {
  return (
    <VStack px={{ base: 4, md: 8, lg: 12 }} w="100%" align="start" py={4}>
      <Name text="Products" />
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={4}
        w="100%"
        py={8}
      >
        {products.map((product, i) => (
          <ProductCard product={product} key={i} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default ProductsPage;
