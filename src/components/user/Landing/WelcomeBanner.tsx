import { Box, Button, SimpleGrid, VStack } from "@chakra-ui/react";
import { RText } from "../../../utilities/Typography";
import VideoPlayer from "./VideoPlayer";

const WelcomeBanner = () => {
  return (
    <VStack align="start" gap={0}>
      <Box w="100%">
        <VideoPlayer />
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        w="100%"
        spacingY={4}
        px={{ base: 4, md: 8, lg: 12 }}
      >
        <RText
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          quod error perspiciatis neque ex et nulla maxime, ab esse quia eveniet
          laborum iure aperiam ratione dolorum. Consectetur quos rem natus."
        />
        <Box textAlign={{ base: "start", md: "end" }}>
          <Button
            colorScheme="secondary"
            textTransform="uppercase"
            size="sm"
            px={8}
            py={6}
          >
            Explore More
          </Button>
        </Box>
      </SimpleGrid>
    </VStack>
  );
};

export default WelcomeBanner;
