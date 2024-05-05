import { VStack, Box } from "@chakra-ui/react";
import {
  ShoppingCart,
  MessageSquareX,
  KeyIcon,
  Power,
  BoxIcon,
  Navigation,
} from "lucide-react";
import { Label } from "../../../utilities/Typography";
import AccountLinkBtn from "./AccountLinkBtn";
import AccountLinkHolder from "./AccountLinkHolder";
import { useLocation } from "react-router";

const AccountLinkStack = () => {
  const location = useLocation().pathname.split("/")[2];

  return (
    <VStack w="max-content" align="start" gap={12}>
      <AccountLinkHolder>
        <AccountLinkBtn
          label="Cart"
          icon={ShoppingCart}
          route="cart"
          active={!location}
        />
        <AccountLinkBtn
          label="My Orders"
          icon={BoxIcon}
          route="orders"
          active={location == "orders"}
        />
        <AccountLinkBtn
          label="Track Order"
          icon={Navigation}
          route="track-order"
          active={location == "track-order"}
        />
        <AccountLinkBtn
          route="request-for-cancel"
          label="Request for Refund / Cancel"
          active={location == "request-for-cancel"}
          icon={MessageSquareX}
        />
      </AccountLinkHolder>

      <VStack w="100%" align="start">
        <Label text="Accounts" color="gray" />
        <VStack w="100%" align="start" my={0}>
          <AccountLinkBtn
            route="change-password"
            label="Change Password"
            icon={KeyIcon}
            colorScheme="blue"
            active={location == "change-password"}
          />
          <Box w="100%" onClick={() => localStorage.clear()}>
            <AccountLinkBtn label="Logout" icon={Power} colorScheme="red" />
          </Box>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default AccountLinkStack;
