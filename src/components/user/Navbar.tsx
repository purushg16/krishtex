import { Button, Flex, HStack, Icon, Show, VStack } from "@chakra-ui/react";
import { ShieldCheck, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { RHeading, RText } from "../../utilities/Typography";
import NavbarLinkStack from "./NavbarLinkStack";

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
    <VStack w="100%" align="start">
      <Flex
        w="100%"
        justify="space-between"
        py={4}
        px={{ base: 4, md: 8, lg: 12 }}
      >
        <VStack align="start">
          <VStack align="start" gap={0}>
            <RHeading text="Krishtex" />
            <RText weight="bold" text="Enterprises" />
          </VStack>
        </VStack>
        <Show above="md">
          <HStack gap={8}>
            <HStack>
              <Icon as={Trophy} boxSize={12} />
              <VStack align="start" gap={0}>
                <RText big weight="bolder" text="The Best Industrial" />
                <RText small text="Solution Provider" />
              </VStack>
            </HStack>
            <HStack>
              <Icon as={ShieldCheck} boxSize={12} />
              <VStack align="start" gap={0}>
                <RText big weight="bolder" text="Certified Company" />
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
        borderColor="blackAlpha.200"
        position={isFixed ? "fixed" : "static"}
        top={isFixed ? 0 : "auto"}
        bg="white"
        zIndex={999}
      >
        <NavbarLinkStack />
        <Button colorScheme="primary" order={1}>
          {" "}
          Schedule a call{" "}
        </Button>
      </Flex>
    </VStack>
  );
};

export default Navbar;
