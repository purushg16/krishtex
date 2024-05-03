import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex w="100%" h="100vh" align="center" justify="center">
      {children}
    </Flex>
  );
};

export default AuthLayout;
