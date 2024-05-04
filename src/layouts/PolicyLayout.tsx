import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const PolicyLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex flexDir="column" w="100%" gap={4} maxW={800} mx="auto" mt={12} p={4}>
      {children}
    </Flex>
  );
};

export default PolicyLayout;
