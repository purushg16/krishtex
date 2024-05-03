import { Box, Button, SimpleGrid, Stack, VStack } from "@chakra-ui/react";
import CategoryCard from "../../components/admin/CategoryCard";
import categories from "../../data/categories";
import { Name } from "../../utilities/Typography";

const CategoriesPages = () => {
  return (
    <Stack p={4} h="100%">
      <VStack align="start" gap={4}>
        <Name text="Categories" color="black" />
        <Button size="xs" colorScheme="primary">
          Add New Category
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
        {/* <SkeletonGrid /> */}
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
          {categories.map((category, i) => (
            <CategoryCard category={category} key={i} />
          ))}
        </SimpleGrid>
      </Box>
    </Stack>
  );
};

export default CategoriesPages;
