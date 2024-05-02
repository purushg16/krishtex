import { Flex, VStack } from "@chakra-ui/react";
import LabelInput from "../../Inputs/LabelInput";
import LabelRadio from "../../Inputs/LabelRadio";
import SpecificationsTable from "./SpecificationsTable";
import useAddProductStore from "../../../store/AddProductStore";

const AddProductDetailsHug = () => {
  const name = useAddProductStore((s) => s.name);
  const setName = useAddProductStore((s) => s.setName);
  const price = useAddProductStore((s) => s.price);
  const setPrice = useAddProductStore((s) => s.setPrice);
  const productType = useAddProductStore((s) => s.productType);
  const setProductType = useAddProductStore((s) => s.setProductType);

  return (
    <Flex gap={4} flexDir="column" mx="auto" w="100%">
      <VStack align="start" gap={12} w="100%">
        <LabelInput
          label="Product Name"
          value={name}
          setText={setName}
          color="black"
        />
        <LabelInput
          label="Price"
          value={price}
          setNumber={setPrice}
          number
          color="black"
        />
        <LabelRadio
          value={productType}
          onSelect={setProductType}
          label="Product Type"
          values={["Buyable", "Viewable"]}
          color="black"
        />
        <SpecificationsTable />
      </VStack>
    </Flex>
  );
};

export default AddProductDetailsHug;
