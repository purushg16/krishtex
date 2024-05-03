import { VStack, HStack, Icon, Divider, Tag, Box } from "@chakra-ui/react";
import { LucideIcon } from "lucide-react";
import { Label } from "../../../utilities/Typography";

const OrderStatusCard = ({
  label,
  icon,
  status,
  color,
}: {
  label: string;
  icon: LucideIcon;
  status: string;
  color: string;
}) => {
  return (
    <VStack
      gap={0}
      align="start"
      borderRadius={4}
      background="linear-gradient(252deg, rgb(202 235 253) 0%, rgb(248 190 190) 100%)"
      border="1px solid"
      borderColor="blue.100"
      overflow="clip"
    >
      <HStack color="black" p={4}>
        <Icon as={icon} strokeWidth={2} boxSize={6} />
        <Label text={label} />
        <Divider />
      </HStack>
      <Box w="100%" bg="white" px={4} py={4}>
        <Tag colorScheme={color} textTransform="capitalize">
          {status}
        </Tag>
      </Box>
    </VStack>
  );
};

export default OrderStatusCard;
