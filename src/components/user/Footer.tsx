import { Box, VStack } from "@chakra-ui/react";
import { Label } from "../../utilities/Typography";
import FooterStack from "./FooterStack";

const Footer = () => {
  return (
    <VStack
      align="start"
      gap={4}
      w="100%"
      px={{ base: 4, md: 8, lg: 12 }}
      py={12}
      mt={12}
      bg="secondary.50"
    >
      <FooterStack />
      <Box
        w="100%"
        pt={8}
        borderTop="1px solid"
        borderColor="gray.200"
        textAlign="center"
        gap={4}
      >
        <Label text="&copy; 2024 Krishtex - All rights reserved" />
      </Box>
    </VStack>
  );
};

export default Footer;
