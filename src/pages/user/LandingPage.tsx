import { Flex, VStack } from "@chakra-ui/react";
import Navbar from "../../components/user/Navbar";
import WelcomeBanner from "../../components/user/Landing/WelcomeBanner";
import StatisticsGrid from "../../components/user/Landing/StatisticsGrid";
import AboutGrid from "../../components/user/Landing/AboutGrid";
import SectionsGrid from "../../components/user/Landing/SectionsGrid";
import ReviewGrid from "../../components/user/Landing/ReviewGrid";
import Footer from "../../components/user/Footer";

const LandingPage = () => {
  return (
    <Flex flexDir="column" w="100%">
      <Navbar />
      <VStack align="start" gap={{ base: 24, md: 32 }}>
        <WelcomeBanner />
        <StatisticsGrid />
        <AboutGrid />
        <SectionsGrid />
        <ReviewGrid />
      </VStack>
      <Footer />
    </Flex>
  );
};

export default LandingPage;
