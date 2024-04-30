import { VStack } from "@chakra-ui/react";
import { RHeading, RText } from "../../../utilities/Typography";

const StatisticCard = () => {
  return (
    <VStack
      p={8}
      border="1px solid"
      borderColor="secondary.50"
      borderRadius={20}
      boxShadow="md"
    >
      <RHeading text="905" big />
      <RText
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        align="center"
        small
      />
    </VStack>
  );
};

export default StatisticCard;
