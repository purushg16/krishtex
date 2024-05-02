import { VStack, HStack, IconButton, Icon } from "@chakra-ui/react";
import { MinusCircle } from "lucide-react";
import LabelInput from "../../Inputs/LabelInput";
import useAddProductStore from "../../../store/AddProductStore";

const SpecificationsField = () => {
  const specifications = useAddProductStore((s) => s.specifications);
  const setSpecifications = useAddProductStore((s) => s.setSpecifications);
  const removeSpecifications = useAddProductStore(
    (s) => s.removeSpecifications
  );

  return (
    <VStack w="100%" gap={4}>
      {specifications.map((specification, i) => (
        <HStack key={i} gap={4} w="100%" align="end">
          <LabelInput
            smallLabel
            value={specification.key}
            setText={(value) =>
              setSpecifications(specification.id, value, specification.value)
            }
            label="Key"
          />
          <LabelInput
            smallLabel
            value={specification.value}
            setText={(value) =>
              setSpecifications(specification.id, specification.key, value)
            }
            label="Value"
          />
          <IconButton
            mb={1}
            aria-label="remove-spec"
            icon={<Icon as={MinusCircle} />}
            size="sm"
            onClick={() => {
              removeSpecifications(specification.id);
            }}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default SpecificationsField;
