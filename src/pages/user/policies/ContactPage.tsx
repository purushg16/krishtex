import { Divider, HStack, Icon, VStack } from "@chakra-ui/react";
import PolicyLayout from "../../../layouts/PolicyLayout";
import { Label, RHeading } from "../../../utilities/Typography";
import { Mail, MapPin, PhoneCall } from "lucide-react";

const ContactPage = () => {
  return (
    <PolicyLayout>
      <RHeading text="Contact Us" />
      <Divider border="2px" borderColor="primary.400" mb={8} />
      <VStack align="start" gap={8} mt={4}>
        <HStack gap={4}>
          <Icon as={MapPin} boxSize={6}></Icon>
          <Label text="S.F no :255, Naalu Kavalai Thottam, Maniyakarampalayam, Ganapathy, Coimbatore - 641006." />
        </HStack>
        <HStack gap={4}>
          <Icon as={PhoneCall} boxSize={6}></Icon>
          <Label text="73733 11722, 86670 96788" />
        </HStack>
        <HStack gap={4}>
          <Icon as={Mail} boxSize={6}></Icon>
          <Label text="something@gmail.com" />
        </HStack>
      </VStack>
    </PolicyLayout>
  );
};

export default ContactPage;
