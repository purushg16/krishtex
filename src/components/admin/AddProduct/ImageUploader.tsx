import {
  Divider,
  FormLabel,
  Highlight,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Label } from "../../../utilities/Typography";
import Uploader from "../../Upload/Uploader";
import ImagePreview from "./ImagePreview";

const ImageUploader = () => {
  return (
    <VStack align="start" w="100%" h="100%">
      <FormLabel size="md" color="black">
        <Highlight
          query="(max. 5 images)"
          styles={{ fontSize: "xs", fontStyle: "italic" }}
        >
          Upload Product Images (max. 5 images)
        </Highlight>
      </FormLabel>
      <Uploader />
      <VStack
        align="start"
        p={4}
        w="100%"
        borderRadius={10}
        bg="gray.50"
        border="1px solid"
        borderColor="gray.100"
        maxH="100%"
      >
        <Label text="Uploaded Images" />
        <Divider borderColor="gray.200" mb={4} />
        <SimpleGrid
          columns={2}
          spacing={4}
          w="100%"
          maxH="100%"
          overflowY="scroll"
        >
          <ImagePreview />
          <ImagePreview />
          <ImagePreview />
          <ImagePreview />
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};

export default ImageUploader;
