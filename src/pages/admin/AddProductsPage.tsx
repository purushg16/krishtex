import { Divider, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import AddProductDetailsHug from "../../components/admin/AddProduct/AddProductDetailsHug";
import ImageUploader from "../../components/admin/AddProduct/ImageUploader";
import { Name } from "../../utilities/Typography";
import AddProductSubmitButton from "../../components/admin/AddProduct/AddProductSubmitButton";

const AddProductsPage = () => {
  return (
    <VStack w="100%">
      <HStack justify="space-between" w="100%">
        <VStack align="start" w="100%">
          <Name text="Add New Product" color="black" />
        </VStack>
        <AddProductSubmitButton />
      </HStack>
      <Divider mt={2} mb={8} />

      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 2 }}
        w="100%"
        h="100%"
        spacing={8}
        spacingY={12}
      >
        <AddProductDetailsHug />
        <ImageUploader />
      </SimpleGrid>
    </VStack>
  );
};

export default AddProductsPage;
