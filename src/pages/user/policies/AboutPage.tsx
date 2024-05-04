import { HStack, Icon, VStack } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import PolicyLayout from "../../../layouts/PolicyLayout";
import { Label, RHeading, RText } from "../../../utilities/Typography";

const AboutPage = () => {
  return (
    <PolicyLayout>
      <RHeading text="About Us" />
      <RText
        text={`Founded in 2005, KRISHTEX, set out itself to be a leading automative 
mould company in Injection mould design, manufacturing, plastic moulding 
and so on. Our objective, commitment to the highest quality products and 
customer service. The client satisfaction is our main focus, reached through 
innovative and cost-effective services.`}
      />
      <RText
        text={`In KRISHTEX, we design 2D and 3D mould flow analysis and manufacture 
        Runner moulds, Multi-cavity moulds, High volume moulds, Inserting 
        moulds, etc., We have a dynamic workforce of 50 employees and our 
        professionals have more than 20 years of hands on experience in the 
        industry.`}
      />
      <VStack my={8}>
        <HStack gap={4} w="100%" justify="center">
          <Link to="/products">
            <Label text="Our Products" />
          </Link>
          <Icon as={BsDot} />
          <Link to="/contact">
            <Label text="Contact Us" />
          </Link>

          <Icon as={BsDot} />
          <Link to="/contact">
            <Label text="Terms & Conditions" />
          </Link>
        </HStack>
        <HStack gap={4} w="100%" justify="center">
          <Link to="/CancellationAndRefundPolicy">
            <Label text="Cancellation and Refund" />
          </Link>
          <Icon as={BsDot} />
          <Link to="/ShippingAndDeliveryPolicy">
            <Label text="Shipping & Delivery policy" />
          </Link>
        </HStack>
      </VStack>
    </PolicyLayout>
  );
};

export default AboutPage;
