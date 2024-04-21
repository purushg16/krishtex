import { Button, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { RHeading } from "../../../utilities/Typography";
import SectionCard from "./SectionCard";

const SectionsGrid = () => {
  return (
    <VStack w="100%" align="start" gap={8}>
      <HStack w="100%" justify="space-between">
        <RHeading text="Explore all our sections" />
        <Button variant="outline"> Pick your need </Button>
      </HStack>
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={8} w="100%">
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
      </SimpleGrid>
    </VStack>
  );
};

export default SectionsGrid;
