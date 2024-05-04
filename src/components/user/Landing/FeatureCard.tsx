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
      <Icon as={icon} boxSize={6} />
      <Label text={title} />
      <RText text={text} color="gray" weight="normal" />
    </VStack>
  );
};

export default FeatureCard;
