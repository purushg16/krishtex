import { SimpleGrid } from "@chakra-ui/react";
import SkeletonCard from "./SkeletonCard";

const SkeletonGrid = () => {
  return (
    <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </SimpleGrid>
  );
};

export default SkeletonGrid;
