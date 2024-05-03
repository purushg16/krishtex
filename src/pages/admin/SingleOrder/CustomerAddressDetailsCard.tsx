import { VStack } from "@chakra-ui/react";
import { Label } from "../../../utilities/Typography";

const CustomerAddressDetailsCard = ({ title }: { title: string }) => {
  return (
    <VStack align="start" bg="gray.50" w="100%" p={4}>
      <Label text={title} color="black" />
      <VStack align="start" mt={4}>
        <Label weight="normal" text="dayalan s," textTransform="capitalize" />
        <Label weight="normal" text="Line 1," textTransform="capitalize" />
        <Label weight="normal" text="Trichy," textTransform="capitalize" />
        <Label
          weight="normal"
          text="Tamil Nadu - 621005, "
          textTransform="capitalize"
        />
        <Label weight="normal" text="India." textTransform="capitalize" />
        <Label weight="normal" text="9943980321" textTransform="capitalize" />
      </VStack>
    </VStack>
  );
};

export default CustomerAddressDetailsCard;
