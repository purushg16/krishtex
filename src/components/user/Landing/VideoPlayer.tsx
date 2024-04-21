import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { RHeading, RText } from "../../../utilities/Typography";
import video from "../../../data/vid.mp4";

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
      flexDir="column"
      p={8}
      h={550}
      borderRadius={20}
      my={8}
      pos="relative"
      overflow="hidden"
    >
      <RText text="Welcome to Krishtex" />
      <RHeading
        color="red"
        small
        text="Krishtex Are Best Of The Rest In The Field"
      />
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
    </Flex>
  );
};

export default VideoPlayer;
