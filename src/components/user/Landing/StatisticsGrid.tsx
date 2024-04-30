import { SimpleGrid } from "@chakra-ui/react";
import StatisticCard from "./StatisticCard";

const StatisticsGrid = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 1, lg: 3 }}
      spacing={4}
      w="100%"
      px={{ base: 4, md: 8, lg: 12 }}
    >
      <StatisticCard />
      <StatisticCard />
      <StatisticCard />
    </SimpleGrid>
  );
};

export default StatisticsGrid;
