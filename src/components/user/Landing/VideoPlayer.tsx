import { useState, useEffect } from "react";
import { Button, Divider, Flex, VStack } from "@chakra-ui/react";
import video from "../../../data/vid.mp4";
import { Name, RHeading } from "../../../utilities/Typography";
import { Link } from "react-router-dom";

const VideoPlayer = () => {
  const [preloaded, setPreloaded] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById(
      "background-video"
    ) as HTMLVideoElement;

    const handleTimeUpdate = () => {
      const bufferMargin = 2; // Buffer margin in seconds
      const bufferedEnd = videoElement?.buffered.end(0);

      // If buffered portion is close to current time, preload next portion
      if (
        bufferedEnd - videoElement?.currentTime < bufferMargin &&
        !preloaded
      ) {
        preloadNextPortion();
      }
    };

    const preloadNextPortion = () => {
      const nextPortionStart = 3;
      const nextPortionURL = `${video}#t=${nextPortionStart}`;

      // Load next portion
      videoElement.src = nextPortionURL;
      videoElement.load();
      setPreloaded(true);
    };

    videoElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [preloaded]);

  return (
    <Flex
      w="100%"
      flexDir="column"
      h={550}
      mb={8}
      pos="relative"
      align="center"
      justify="center"
      overflow="hidden"
    >
      <VStack>
        <RHeading
          big
          text="Krishtex Enterprises"
          color="white"
          align="center"
        />
        <Name text="Enter the world of quality" color="white" />
        <Divider my={4} />
        <Link to="/register">
          <Button
            colorScheme="primary"
            textTransform="uppercase"
            size="sm"
            px={8}
            py={6}
          >
            Get Started Now
          </Button>
        </Link>
      </VStack>

      <video
        id="background-video"
        autoPlay
        preload="auto"
        muted
        loop
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={video} type="video/mp4" />
      </video>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%)",
          pointerEvents: "none", // Ensure that clicks pass through the overlay
          zIndex: -1,
        }}
      />
    </Flex>
  );
};

export default VideoPlayer;
