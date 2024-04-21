import { VStack } from "@chakra-ui/react";
import { RHeading, RText } from "../../../utilities/Typography";

const StatisticCard = () => {
  return (
    <VStack gap={4}>
      <RHeading text="950+" big />
      <RText
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        align="center"
        small
      />
    </VStack>
  );
};

export default StatisticCard;
