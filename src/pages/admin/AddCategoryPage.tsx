import { Divider, HStack, VStack } from "@chakra-ui/react";
import AddCategorySubmitButton from "../../components/admin/Category/AddCategorySubmitButton";
import AddCategoryCancelButton from "../../components/admin/Category/AddCategoryCancelButton";
import { Name } from "../../utilities/Typography";

const AddCategoryPage = () => {
  return (
    <VStack w="100%" p={4}>
      <HStack justify="space-between" w="100%">
        <VStack align="start" w="100%">
          <Name text="Add New Category" color="black" small />
        </VStack>
        <HStack gap={4}>
          <AddCategoryCancelButton />
          <AddCategorySubmitButton />
        </HStack>
      </HStack>
      <Divider mt={2} mb={8} />
    </VStack>
  );
};

export default AddCategoryPage;
