import { Flex, VStack } from "@chakra-ui/react";
import Navbar from "../components/user/Navbar";
import { Outlet } from "react-router";

const UserLayout = () => {
  return (
    <Flex flexDir="column" w="100%">
      <Navbar />
      <VStack align="start" gap={{ base: 24, md: 32 }}>
        <Outlet />
      </VStack>
    </Flex>
  );
};

export default UserLayout;
