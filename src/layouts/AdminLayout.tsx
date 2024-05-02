import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import AdminSideBar from "../components/admin/AdminSideBar";
import { Outlet } from "react-router";
import AdminAppBar from "../components/admin/AdminAppBar";

const AdminLayout = () => {
  return (
    <Flex
      maxW={1300}
      mx="auto"
      justify="center"
      align="center"
      h="100svh"
      maxH="100svh"
      overflowY="clip"
      pos="relative"
      bg={{ base: "blackAlpha.50", md: "none" }}
    >
      <Grid
        h={{ base: "100%", md: "max-content" }}
        maxH={{ base: "100%", md: "max-content" }}
        overflowY="scroll"
        borderRadius={10}
        overflow="clip"
        minH={400}
        boxShadow="base"
        bg={{ base: "none", md: "blackAlpha.50" }}
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
          <GridItem area={"nav"} h="100%">
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
