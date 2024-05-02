import { Skeleton } from "@chakra-ui/react";

const SkeletonCard = () => {
  return (
    <Skeleton
      w="100"
      aspectRatio="3/2"
      bg="secondary.50"
      startColor="blackAlpha.50"
      endColor="blackAlpha.300"
    />
  );
};

export default SkeletonCard;
