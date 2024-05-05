import { Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import AccountLinkStack from "../components/user/account/AccountLinkStack";
import { Outlet, useLocation } from "react-router";
import { Name } from "../utilities/Typography";
import AccountMenuModal from "../components/user/account/AccountMenuModal";

const UserAccountLayout = () => {
  const location = useLocation().pathname.split("/")[2];

  const title = !location ? "cart" : location.replace("-", " ");

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
        <VStack gap={4} w="100%" align="start">
          <HStack w="100%" justify="space-between">
            <Name text={title} textTransform="capitalize" color="black" />
            <Show below="md">
              <AccountMenuModal />
            </Show>
          </HStack>
          <Outlet />
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default UserAccountLayout;
