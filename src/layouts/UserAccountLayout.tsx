import { Grid, GridItem } from "@chakra-ui/react";
import AccountLinkStack from "../components/user/account/AccountLinkStack";
import { Outlet } from "react-router";

const UserAccountLayout = () => {
  return (
    <Grid
      p={12}
      templateAreas={{
        base: `"main"`,
        md: `"nav main"`,
      }}
      gridTemplateColumns={{
        base: "100%",
        md: "max-content 1fr",
      }}
      color="blackAlpha.700"
      fontWeight="bold"
      w="100%"
      gap={12}
    >
      <GridItem area={"nav"}>
        <AccountLinkStack />
      </GridItem>
      <GridItem area={"main"}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default UserAccountLayout;
