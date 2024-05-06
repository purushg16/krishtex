import { SimpleGrid } from "@chakra-ui/react";
import categories from "../../../data/categories";
import CategoryCard from "../CategoryCard";

const CategoriesGrid = ({
  size,
}: {
  size: { base: number; md: number; lg: number };
}) => {
  return (
    <SimpleGrid columns={size} spacing={4} w="100%">
      {categories.map((category, i) => (
        <CategoryCard category={category} key={i} />
      ))}
    </SimpleGrid>
  );
};

export default CategoriesGrid;
