import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex w="100%" align="center" justify="center" flexDir="column" my={12}>
      {children}
    </Flex>
  );
};

export default AuthLayout;
