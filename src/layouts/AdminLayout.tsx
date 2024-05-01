import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
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
      h="100vh"
      overflowY="scroll"
    >
      <Grid
        overflowY="scroll"
        h={{ base: "100%", md: "max-content" }}
        maxH={{ base: "100%", md: "max-content" }}
        borderRadius={10}
        overflow="clip"
        minH={400}
        boxShadow="base"
        bg="blackAlpha.50"
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
        <GridItem area={"main"} overflowY="scroll">
          <Outlet />
        </GridItem>
        <Show below="md">
          <Box my={160} />
          <AdminAppBar />
        </Show>
      </Grid>
    </Flex>
  );
};

export default AdminLayout;
