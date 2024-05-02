import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductsGrid = () => {
  return (
    <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} spacing={4} w="100%">
      {products.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductsGrid;
