import { SimpleGrid, Spinner } from "@chakra-ui/react";
import CategoryCard from "../CategoryCard";
import { useGetAllCategories } from "../../../hooks/admin/useCategory";

const CategoriesGrid = ({
  size,
}: {
  size: { base: number; md: number; lg: number };
}) => {
  const { data: categories, isLoading } = useGetAllCategories();

  return (
    <SimpleGrid columns={size} spacing={4} w="100%">
      {isLoading && <Spinner />}
      {categories &&
        categories.map((category, i) => (
          <CategoryCard category={category} key={i} />
        ))}
    </SimpleGrid>
  );
};

export default CategoriesGrid;
