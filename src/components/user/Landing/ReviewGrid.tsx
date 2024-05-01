import { Box, Flex, HStack, IconButton, Stack, VStack } from "@chakra-ui/react";
import { Name } from "../../../utilities/Typography";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import ReviewCard from "./ReviewCard";

const ReviewGrid = () => {
  return (
    <VStack gap={8} align="start" px={{ base: 4, md: 8, lg: 12 }} w="100%">
      <Stack
        w="100%"
        direction={{ base: "row", md: "row", lg: "column" }}
        gap={4}
        justify={{ base: "space-between", md: "space-between", lg: "normal" }}
      >
        <Name text="Read what our client are saying " />
        <HStack gap={4}>
          <IconButton
            aria-label="back"
            icon={<ArrowUpLeft />}
            variant="outline"
          />
          <IconButton aria-label="back" icon={<ArrowUpRight />} />
        </HStack>
      </Stack>
      <Box w="100%" maxW="100%" overflowX="scroll">
        <Flex w="100%" gap={8}>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </Flex>
      </Box>
    </VStack>
  );
};

export default ReviewGrid;
