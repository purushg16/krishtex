import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router";

const AddOrEditLayout = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      pb={{ base: "100px", md: "20px" }}
    >
      <Box
        w={{ base: "100%", md: "100%" }}
        h="100%"
        maxH="100%"
        overflowY="scroll"
      >
        <Outlet />
      </Box>
    </Flex>
  );
};

export default AddOrEditLayout;
