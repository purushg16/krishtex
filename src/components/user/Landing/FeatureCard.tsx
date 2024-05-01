import { Icon, VStack } from "@chakra-ui/react";
import { CoinsIcon } from "lucide-react";
import { Label, RText } from "../../../utilities/Typography";

const FeatureCard = () => {
  return (
    <VStack align="start" w="100%" gap={2}>
      <Icon as={CoinsIcon} />
      <Label text="Affordable Price" />
      <RText
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quibusdam!"
        color="gray"
        weight="normal"
      />
    </VStack>
  );
};

export default FeatureCard;
