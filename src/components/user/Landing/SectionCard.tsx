import { Box, VStack } from "@chakra-ui/react";
import { Label } from "../../../utilities/Typography";

const SectionCard = () => {
  return (
    <VStack
      w="100%"
      aspectRatio="5/3"
      cursor="pointer"
      align="start"
      justify="end"
      p={4}
      gap={4}
    >
      <Box w="100%" aspectRatio="3/2" bg="gray.100" />
      <VStack
        gap={0}
        align="start"
        borderLeft="4px solid"
        borderColor="primary.500"
        pl={2}
      >
        <Label text="Lorem Ipsum" />
      </VStack>
    </VStack>
  );
};

export default SectionCard;
