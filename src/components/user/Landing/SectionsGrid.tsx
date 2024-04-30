import { Button, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { RHeading } from "../../../utilities/Typography";
import SectionCard from "./SectionCard";

const SectionsGrid = () => {
  return (
    <VStack w="100%" align="start" gap={8} px={{ base: 4, md: 8, lg: 12 }}>
      <HStack w="100%" justify="space-between">
        <RHeading text="Top categories" />
        <Button variant="outline" colorScheme="primary">
          View All
        </Button>
      </HStack>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={8} w="100%">
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
      </SimpleGrid>
    </VStack>
  );
};

export default SectionsGrid;
