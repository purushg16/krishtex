import { Box, Button, Flex, Icon, SimpleGrid, VStack } from "@chakra-ui/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Name, RText } from "../../utilities/Typography";

const FooterStack = () => {
  return (
    <Flex
      gap={12}
      w="100%"
      flexDir={{ base: "column", md: "column", lg: "row" }}
    >
      <VStack align="start" gap={0} w={{ base: "100%", md: "100%", lg: 400 }}>
        <VStack align="start" gap={4}>
          <Name weight="bold" text="Krishtex" />
          <RText
            text={`Over 26 year experience and knowledge international standards technologicaly 
                  changes our industrial systems, we are dedicated to provides the best solutions 
                  to our valued customers.`}
          />
          <Button colorScheme="secondary" mt={4}>
            Product Enquiry
          </Button>
        </VStack>
      </VStack>

      <SimpleGrid
        w="100%"
        columns={{ base: 1, md: 1, lg: 3 }}
        spacingX={8}
        spacingY={16}
      >
        <VStack align="start">
          <Name small weight="bold" text="Useful Links" />
          <Box my={2} />

          <RText small text="About" />
          <RText small text="Certificate" />
          <RText small text="Contact us" />
          <RText small text="Terms" />
        </VStack>
        <VStack align="start">
          <Name small weight="bold" text="Our Products" />
          <Box my={2} />
          <RText small text="Single Phase Borewell Compressor Pumpsets" />
          <RText small text="Single Phase Centrifugal Jet Pumpsets" />
          <RText small text="Single Phase Centrifugal Monoblock Pumpsets" />
          <RText small text="Submersible Pumpsetsets" />
          <RText
            small
            text="Single Phase Centrifugal Regenerative Pumpsets Single Phase Openwell"
          />
        </VStack>
        <VStack align="start">
          <Name small weight="bold" text="Contact Us" />
          <Box my={2} />

          <Button
            textAlign="left"
            textOverflow="ellipsis"
            whiteSpace="balance"
            size="xs"
            variant="text"
            leftIcon={<Icon as={MapPin} />}
            p={0}
            mb={2}
          >
            S.F no :255, Naalu Kavalai Thottam, Maniyakarampalayam,
          </Button>
          <Button size="xs" variant="text" leftIcon={<Icon as={Phone} />} p={0}>
            (+91) 73733 11722, 86670 96788
          </Button>
          <Button size="xs" variant="text" leftIcon={<Icon as={Mail} />} p={0}>
            something@gmail.com
          </Button>
        </VStack>
      </SimpleGrid>
    </Flex>
  );
};

export default FooterStack;
