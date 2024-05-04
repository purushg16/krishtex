import { VStack } from "@chakra-ui/react";
import VideoPlayer from "./VideoPlayer";

const WelcomeBanner = () => {
  return (
    <VStack align="start" gap={0} w="100%">
      <VideoPlayer />
    </VStack>
  );
};

export default WelcomeBanner;
