import { Box, Button, GridItem, SimpleGrid, VStack } from "@chakra-ui/react";
import { Name, RText } from "../../../utilities/Typography";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1593106410288-caf65eca7c9d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const FoundationGrid = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      if (index < images.length - 1) setIndex(index + 1);
      else setIndex(0);
    }, 5000);
  }, [index, setIndex]);

  return (
    <SimpleGrid
      px={{ base: 4, md: 8, lg: 12 }}
      columns={{ base: 1, md: 2 }}
      w="100%"
    >
      <GridItem p={8} bg="gray.50">
        <Box
          minH={280}
          h="100%"
          w="100%"
          bgImg={images[index]}
          bgPos="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          transition="all 0.7s"
        />
      </GridItem>
      <GridItem bg="gray.50" p={8}>
        <VStack align="start" gap={8}>
          <Name text="About Ourself" color="black" />
          <RText
            text={`Founded in 2005, KRISHTEX, set out itself to be a leading automative 
                    mould company in Injection mould design, manufacturing, plastic moulding 
                    and so on. Our objective, commitment to the highest quality products and 
                    customer service. The client satisfaction is our main focus, reached through 
                    innovative and cost-effective services.`}
          />
          <Link to="/about" style={{ alignSelf: "end" }}>
            <Button colorScheme="primary" mt={12}>
              Know More
            </Button>
          </Link>
        </VStack>
      </GridItem>
    </SimpleGrid>
  );
};

export default FoundationGrid;
