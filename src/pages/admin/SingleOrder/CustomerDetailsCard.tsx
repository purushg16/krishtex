import { Divider, HStack, Icon, VStack } from "@chakra-ui/react";
import { Label } from "../../../utilities/Typography";
import { Mail, Phone, User } from "lucide-react";

const CustomerDetailsCard = () => {
  return (
    <VStack w="100%" p={4} bg="gray.50" align="start">
      <Label color="black" text="Customer Details" />
      <VStack align="start">
        <HStack mt={2}>
          <Icon as={User} />
          <Label text="Dayalan S" weight="normal" color="black" small />
        </HStack>
        <HStack>
          <Icon as={Mail} />
          <Label
            text="macdasys@gmail.com"
            weight="normal"
            color="black"
            small
          />
        </HStack>
        <HStack>
          <Icon as={Phone} />
          <Label text="9943980321" weight="normal" color="black" small />
        </HStack>
      </VStack>
      <Divider my={4} />
      <Label color="black" text="Fraud Analysis" />
      <HStack mt={2}>
        <Label text="Location:" weight="normal" small />
        <Label text="Salem, India" weight="normal" color="black" small />
      </HStack>
      <HStack>
        <Label text="IP Address:" weight="normal" small />
        <Label text="42.104.129.163" weight="normal" color="black" small />
      </HStack>
    </VStack>
  );
};

export default CustomerDetailsCard;
