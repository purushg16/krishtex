import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Show,
  VStack,
} from "@chakra-ui/react";
import { ShieldCheck, Trophy, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Name, RText } from "../../utilities/Typography";
import NavbarLinkStack from "./NavbarLinkStack";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (elementRef.current) {
      const { top } = elementRef.current.getBoundingClientRect();
      setIsFixed(top <= 0 && window.scrollY > 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <VStack w="100%" align="start" gap={0}>
      <Flex
        pos="relative"
        w="100%"
        justify="space-between"
        py={4}
        px={{ base: 4, md: 8, lg: 12 }}
      >
        <HStack>
          <Image
            w={{ base: 120, md: 140 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKs9vN3B7883zkx8sHOrqHI8bwhdfHMi4pE99hthUZPfvMRDj08UpaBPOs5TmF3AmNXA&usqp=CAU"
            alt=""
          />
          <Show below="md">
            <Box pos="absolute" right={2}>
              <MobileMenu />
            </Box>
          </Show>
        </HStack>

        <Show above="md">
          <HStack gap={8}>
            <HStack>
              <Icon as={Trophy} boxSize={8} />
              <VStack align="start" gap={0}>
                <Name small weight="bolder" text="The Best Industrial" />
                <RText small text="Solution Provider" />
              </VStack>
            </HStack>
            <HStack>
              <Icon as={ShieldCheck} boxSize={8} />
              <VStack align="start" gap={0}>
                <Name small weight="bolder" text="Certified Company" />
                <RText small text="ISO 9001-2015" />
              </VStack>
            </HStack>
          </HStack>
        </Show>
      </Flex>

      <Flex
        ref={elementRef}
        px={{ base: 4, md: 8, lg: 12 }}
        py={4}
        justify="space-between"
        w="100%"
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="blackAlpha.200"
        position={isFixed ? "fixed" : "static"}
        top={isFixed ? 0 : "auto"}
        bg="white"
        zIndex={999}
      >
        <Show above="md">
          <NavbarLinkStack />
        </Show>
        <HStack maxW="100%" flexWrap="wrap">
          <Link to="/account">
            <Button
              colorScheme="primary"
              variant="outline"
              order={1}
              leftIcon={<Icon as={User} />}
            >
              Account
            </Button>
          </Link>
          <Link to="/register">
            <Button colorScheme="green" order={1} leftIcon={<BsWhatsapp />}>
              Whatsapp
            </Button>
          </Link>
          <Button
            colorScheme="secondary"
            order={1}
            leftIcon={<IoCallOutline />}
          >
            Schedule a call
          </Button>
        </HStack>
      </Flex>
    </VStack>
  );
};

export default Navbar;
