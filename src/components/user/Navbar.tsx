import { Flex, HStack, Spacer } from "@chakra-ui/react";
import { Label, RHeading } from "../../utilities/Typography";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex w="100%" px={{ base: 4, md: 8, lg: 12 }} py={4}>
      <RHeading text="Krishtex" small />
      <Spacer />
      <HStack>
        <Link to="">
          <Label text="About Us" />
        </Link>
        <Link to="">
          <Label text="Contact" />
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
