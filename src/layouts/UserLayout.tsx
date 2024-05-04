import { Flex, VStack } from "@chakra-ui/react";
import Navbar from "../components/user/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/user/Footer";
import { ScrollRestoration } from "react-router-dom";

const UserLayout = () => {
  return (
    <Flex flexDir="column" w="100%">
      <Navbar />
      <VStack align="start" gap={{ base: 24, md: 32 }}>
        <Outlet />
      </VStack>
      <Footer />
      <ScrollRestoration />
    </Flex>
  );
};

export default UserLayout;
