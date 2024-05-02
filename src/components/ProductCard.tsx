import { Flex } from "@chakra-ui/react";
import Product from "../entities/Product";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Flex flexDir="column" p={4} bg="gray.50" minH={200} cursor="pointer">
      {product.name}
    </Flex>
  );
};

export default ProductCard;
