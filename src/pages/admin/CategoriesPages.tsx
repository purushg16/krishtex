import { Box, Stack, VStack } from "@chakra-ui/react";
import CategoriesGrid from "../../components/admin/Category/CategoriesGrid";
import { Name } from "../../utilities/Typography";
import AddCategoryModal from "./AddCategoryModal";

const CategoriesPages = () => {
  return (
    <Stack p={4} h="100%">
      <VStack align="start" gap={4}>
        <Name text="Categories" color="black" />
        <AddCategoryModal />
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
        <CategoriesGrid size={{ base: 2, md: 3, lg: 4 }} />
      </Box>
    </Stack>
  );
};

export default CategoriesPages;
