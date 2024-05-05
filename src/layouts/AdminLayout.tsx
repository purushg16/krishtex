import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import AdminSideBar from "../components/admin/AdminSideBar";
import { Navigate, Outlet } from "react-router";
import AdminAppBar from "../components/admin/AdminAppBar";

const AdminLayout = () => {
  if (!localStorage.getItem("token")) return <Navigate to="/adminLogin" />;
  return (
    <Flex
      mx="auto"
      justify="center"
      align="center"
      h="100svh"
      maxH="100svh"
      overflowY="clip"
      pos="relative"
    >
      <Grid
        overflowY="scroll"
        overflow="clip"
        minH={400}
        h="100%"
        boxShadow="base"
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
        <GridItem area={"main"} overflowY="clip" overflowX="scroll">
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
