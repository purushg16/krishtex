import { Divider, SimpleGrid, VStack, Box } from "@chakra-ui/react";
import { Name, RText } from "../../../utilities/Typography";
import FeatureCard from "./FeatureCard";
import {
  BadgeCheck,
  HandshakeIcon,
  SplineIcon,
  TrendingUp,
} from "lucide-react";

const AboutGrid = () => {
  return (
    <SimpleGrid
      bg="secondary.500"
      w="100%"
      columns={{ base: 1, md: 1, lg: 2 }}
      spacing={8}
      py={20}
      px={{ base: 4, md: 8, lg: 12 }}
    >
      <VStack w="100%" gap={4} align="start">
        <Name text="What we are excellent in providing!" color="white" />
        <RText
          color="secondary.100"
          small
          text={`In KRISHTEX, we design 2D and 3D mould flow analysis and manufacture 
                  Runner moulds, Multi-cavity moulds, High volume moulds, Inserting 
                  moulds, etc., We have a dynamic workforce of 50 employees and our 
                  professionals have more than 20 years of hands on experience in the industry`}
        />
        <Divider my={4} />
        <SimpleGrid columns={2} spacing={8}>
          <FeatureCard
            icon={TrendingUp}
            title="High Quality"
            text="Provide high quality, affordable injection moulding services."
          />
          <FeatureCard
            icon={BadgeCheck}
            title="Extremely Truthful"
            text="Create and cultivate long-term relationship with clients."
          />
          <FeatureCard
            icon={SplineIcon}
            title="Flexible"
            text="Respond immediately to the changing needs of our clients."
          />
          <FeatureCard
            icon={HandshakeIcon}
            title="Customer Friendly"
            text="Achieve complete customer satisfaction & Improve our services continuously according to that."
          />
        </SimpleGrid>
      </VStack>
      <Box
        w="100%"
        minH={280}
        h="100%"
        bg="gray.100"
        display={{ base: "none", md: "none", lg: "block" }}
      />
    </SimpleGrid>
  );
};

export default AboutGrid;
