import { VStack } from "@chakra-ui/react";
import { Label } from "../../../utilities/Typography";
import { ReactNode } from "react";

const AccountLinkHolder = ({ children }: { children: ReactNode }) => {
  return (
    <VStack w="100%" align="start">
      <Label text="Orders" color="gray" />
      <VStack w="100%" align="start" my={0}>
        {children}
      </VStack>
    </VStack>
  );
};

export default AccountLinkHolder;
