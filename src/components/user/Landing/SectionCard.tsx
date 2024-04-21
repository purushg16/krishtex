import { VStack } from "@chakra-ui/react";
import { RHeading, RText } from "../../../utilities/Typography";

const SectionCard = () => {
  return (
    <VStack
      w="100%"
      aspectRatio="5/3"
      bg="gray.50"
      borderRadius={10}
      boxShadow="base"
      cursor="pointer"
      align="start"
      justify="end"
      p={4}
      gap={4}
    >
      <RHeading small text="Lorem Ipsum" />
      <RText
        small
        color="gray"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti at suscipit eius ipsum, illum quae obcaecati rerum rem excepturi aliquid!"
      />
    </VStack>
  );
};

export default SectionCard;
