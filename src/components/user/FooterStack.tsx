import { Button, HStack, Icon, SimpleGrid, VStack } from "@chakra-ui/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { RText } from "../../utilities/Typography";

const FooterStack = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={12} w="100%">
      <VStack align="start" gap={0}>
        <RText weight="bold" text="Krishtex" />
        <RText
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ullam."
          small
        />
        <VStack align="start" mt={8}>
          <Button size="xs" variant="text" leftIcon={<Icon as={Phone} />} p={0}>
            +91 998877665544
          </Button>
          <Button size="xs" variant="text" leftIcon={<Icon as={Mail} />} p={0}>
            something@gmail.com
          </Button>
          <Button
            size="xs"
            variant="text"
            leftIcon={<Icon as={MapPin} />}
            p={0}
          >
            Ganapathi, Coimbatore, Tamil Nadu
          </Button>
        </VStack>
      </VStack>

      <HStack gap={8} align="start">
        <VStack align="start">
          <RText small weight="bold" text="Lorem Ipsum" />
          <RText small text="Lorem Ipsum" />
          <RText small text="Lorem Ipsum" />
          <RText small text="Lorem Ipsum" />
        </VStack>
        <VStack align="start">
          <RText small weight="bold" text="Lorem Ipsum" />
          <RText small text="Lorem Ipsum" />
          <RText small text="Lorem Ipsum" />
          <RText small text="Lorem Ipsum" />
        </VStack>
        <VStack align="start">
          <RText small weight="bold" text="Lorem Ipsum" />
          <RText small text="Lorem Ipsum" />
          <RText small text="Lorem Ipsum" />
          <RText small text="Lorem Ipsum" />
        </VStack>
      </HStack>
    </SimpleGrid>
  );
};

export default FooterStack;
