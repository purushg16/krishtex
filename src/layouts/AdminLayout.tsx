import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import AdminSideBar from "../components/admin/AdminSideBar";
import { Outlet } from "react-router";
import AdminAppBar from "../components/admin/AdminAppBar";

const AdminLayout = () => {
  return (
    <Flex
      // maxW={1300}
      mx="auto"
      justify="center"
      align="center"
      h="100svh"
      maxH="100svh"
      overflowY="clip"
      pos="relative"
      // bg={{ base: "blackAlpha.50", md: "none" }}
    >
      <Grid
        overflowY="scroll"
        overflow="clip"
        minH={400}
        h="100%"
        boxShadow="base"
        // bg={{ base: "none", md: "whiteAlpha.400" }}
        w="100%"
        templateAreas={{
          base: `"main"`,
          md: `"nav main"`,
        }}
        gridTemplateRows={`100%`}
        gridTemplateColumns={{
          base: "100%",
          md: "250px 1fr",
        }}
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <Show above="md">
          <GridItem
            area={"nav"}
            h="100%"
            borderRight="1px solid"
            borderColor="blackAlpha.200"
          >
            <AdminSideBar />
          </GridItem>
        </Show>
        <GridItem area={"main"} overflowY="clip">
          <Outlet />
        </GridItem>
        <Show below="md">
          <AdminAppBar />
        </Show>
      </Grid>
    </Flex>
  );
};

export default AdminLayout;
