import { Icon, VStack } from "@chakra-ui/react";
import { CoinsIcon } from "lucide-react";
import { Label } from "../../../utilities/Typography";

const FeatureCard = () => {
  return (
    <VStack align="start" w="100%" gap={2}>
      <Icon as={CoinsIcon} />
      <Label weight="bold" text="Affordable Price" />
      <Label
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quibusdam!"
        color="gray"
      />
    </VStack>
  );
};

export default FeatureCard;
