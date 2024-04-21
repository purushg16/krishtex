import { Divider, HStack, SimpleGrid, VStack, Box } from "@chakra-ui/react";
import { RHeading, RText } from "../../../utilities/Typography";
import FeatureCard from "./FeatureCard";

const AboutGrid = () => {
  return (
    <SimpleGrid w="100%" columns={{ base: 1, md: 1, lg: 2 }} spacing={8}>
      <VStack w="100%" gap={4} align="start">
        <RHeading text="Benefits you get when you use our products!" />
        <RText
          small
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis quasi, neque illum numquam minus perspiciatis culpa, doloribus tenetur doloremque aliquam fuga nostrum reiciendis mollitia, nam debitis quis nisi est!"
        />
        <Divider my={4} />
        <HStack w="100%" gap={8}>
          <FeatureCard />
          <FeatureCard />
        </HStack>
      </VStack>
      <Box w="100%" minH={280} h="100%" borderRadius={20} bg="gray.100" />
    </SimpleGrid>
  );
};

export default AboutGrid;
