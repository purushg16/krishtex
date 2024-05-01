import {
  Box,
  Divider,
  HStack,
  Highlight,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import FooterStack from "./FooterStack";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <VStack
      align="start"
      gap={4}
      w="100%"
      px={{ base: 4, md: 8, lg: 12 }}
      py={20}
      mt={32}
      bg="primary.600"
      color="white"
    >
      <FooterStack />
      <Divider my={12} />
      <Box w="100%" textAlign="center" gap={4}>
        <Text fontSize={{ base: "sm", md: "md" }} fontWeight={400}>
          <Highlight
            query={`Krishtex`}
            styles={{
              color: "secondary.500",
              fontWeight: 600,
            }}
            children="&copy; 2024 Krishtex - All rights reserved"
          />
        </Text>
        <HStack w="100%" justify="center" gap={8} pt={4}>
          <Icon as={Facebook} boxSize={6} />
          <Icon as={Instagram} boxSize={6} />
          <Icon as={Twitter} boxSize={6} />
          <Icon as={Youtube} boxSize={6} />
        </HStack>
      </Box>
    </VStack>
  );
};

export default Footer;
