import { Button, FormLabel, HStack, Icon, VStack } from "@chakra-ui/react";
import { PlusCircle } from "lucide-react";
import useAddProductStore from "../../../store/AddProductStore";
import SpecificationsField from "./SpecificationsField";

const SpecificationsTable = () => {
  const addSpecifications = useAddProductStore((s) => s.addSpecifications);

  return (
    <VStack gap={2} align="start" w="100%">
      <HStack justify="space-between" w="100%">
        <FormLabel fontSize="md" color="black" fontWeight={700}>
          Specifications
        </FormLabel>
        <Button
          variant="outline"
          size="xs"
          leftIcon={<Icon as={PlusCircle} />}
          onClick={addSpecifications}
        >
          Add New Specification
        </Button>
      </HStack>

      <SpecificationsField />
    </VStack>
  );
};

export default SpecificationsTable;
