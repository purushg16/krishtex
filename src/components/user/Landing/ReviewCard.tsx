import { Avatar, Box, Flex, VStack } from "@chakra-ui/react";
import { Label, RText } from "../../../utilities/Typography";

const ReviewCard = () => {
  return (
    <VStack
      w="100%"
      aspectRatio="4/3"
      bg="gray.50"
      borderRadius={10}
      boxShadow="base"
      cursor="pointer"
      align="start"
      justify="space-between"
      p={4}
      gap={4}
    >
      <RText
        small
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti at suscipit eius ipsum, illum quae obcaecati rerum rem excepturi aliquid!"
      />

      <Flex gap={4}>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          <Box>
            <Label text="Segun Adebayo" weight="bold" />
            <Label text="Creator, Chakra UI" />
          </Box>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default ReviewCard;
