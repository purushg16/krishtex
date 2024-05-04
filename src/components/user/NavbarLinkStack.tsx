import { HStack, Show } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Label } from "../../utilities/Typography";
import MobileMenu from "./MobileMenu";

const NavbarLinkStack = () => {
  return (
    <>
      <Show below="lg">
        <MobileMenu />
      </Show>
      <Show above="lg">
        <HStack gap={8}>
          <Link to="">
            <Label text="Home" textTransform="uppercase" />
          </Link>
          <Link to="">
            <Label text="About Us" textTransform="uppercase" />
          </Link>
          <Link to="/products">
            <Label text="Products" textTransform="uppercase" />
          </Link>
          <Link to="">
            <Label text="Certificate" textTransform="uppercase" />
          </Link>
          <Link to="">
            <Label text="Brand" textTransform="uppercase" />
          </Link>
          <Link to="">
            <Label text="Media" textTransform="uppercase" />
          </Link>
          <Link to="">
            <Label text="Contact" textTransform="uppercase" />
          </Link>
        </HStack>
      </Show>
    </>
  );
};

export default NavbarLinkStack;
