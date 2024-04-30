import {
  useDisclosure,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  HStack,
  IconButton,
  VStack,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { Label } from "../../utilities/Typography";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <IconButton
        order={2}
        ref={btnRef}
        onClick={onOpen}
        aria-label="menu-btn"
        icon={<Icon as={MenuIcon} />}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <HStack w="100%" justify="space-between" align="center">
            <DrawerHeader fontSize="2xl" textTransform="uppercase">
              Menu
            </DrawerHeader>
            <IconButton
              onClick={onClose}
              aria-label="menu-cls"
              icon={<Icon as={XIcon} />}
            />
          </HStack>
          <Divider />

          <DrawerBody>
            <VStack align="start" gap={8}>
              <Link to="">
                <Label text="Home" textTransform="uppercase" />
              </Link>
              <Link to="">
                <Label text="About Us" textTransform="uppercase" />
              </Link>
              <Link to="">
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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
