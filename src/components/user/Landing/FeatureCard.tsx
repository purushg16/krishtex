import { Icon, VStack } from "@chakra-ui/react";
import { LucideIcon } from "lucide-react";
import { Label, RText } from "../../../utilities/Typography";

const FeatureCard = ({
  text,
  title,
  icon,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) => {
  return (
    <VStack align="start" w="100%" gap={2}>
      <Icon as={icon} boxSize={6} color="white" />
      <Label text={title} color="white" />
      <RText text={text} color="secondary.200" weight="normal" />
    </VStack>
  );
};

export default FeatureCard;
