import { HStack, IconButton, SimpleGrid, Stack } from "@chakra-ui/react";
import { RHeading } from "../../../utilities/Typography";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import ReviewCard from "./ReviewCard";

const ReviewGrid = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} w="100%">
      <Stack
        w="100%"
        direction={{ base: "row", md: "row", lg: "column" }}
        gap={4}
        justify={{ base: "space-between", md: "space-between", lg: "normal" }}
      >
        <RHeading text="Read what our client are saying " />
        <HStack gap={4}>
          <IconButton
            aria-label="back"
            icon={<ArrowUpLeft />}
            variant="outline"
          />
          <IconButton aria-label="back" icon={<ArrowUpRight />} />
        </HStack>
      </Stack>
      <SimpleGrid w="100%" columns={{ base: 3, md: 3, lg: 2 }} spacing={4}>
        <ReviewCard />
        <ReviewCard />
      </SimpleGrid>
    </SimpleGrid>
  );
};

export default ReviewGrid;
