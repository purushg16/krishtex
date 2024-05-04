import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Label } from "../../utilities/Typography";

const NavbarLinkStack = () => {
  return (
    <HStack gap={8}>
      <Link to="">
        <Label text="Home" textTransform="uppercase" small />
      </Link>
      <Link to="/about">
        <Label text="About Us" textTransform="uppercase" small />
      </Link>
      <Link to="/products">
        <Label text="Products" textTransform="uppercase" small />
      </Link>
      <Link to="">
        <Label text="Media" textTransform="uppercase" small />
      </Link>
      <Link to="/contact">
        <Label text="Contact" textTransform="uppercase" small />
      </Link>
    </HStack>
  );
};

export default NavbarLinkStack;
