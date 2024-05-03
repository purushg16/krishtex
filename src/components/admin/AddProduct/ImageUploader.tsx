import {
  Box,
  Divider,
  FormLabel,
  Highlight,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Label } from "../../../utilities/Typography";
import Uploader from "../../Upload/Uploader";
import ImagePreview from "./ImagePreview";
import useImageStore from "../../../store/imageStore";

const ImageUploader = () => {
  const images = useImageStore((s) => s.images);
  const setImages = useImageStore((s) => s.setImages);
  const deleteImage = useImageStore((s) => s.deleteImage);

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

      <Uploader isDisabled={images.length === 5} callback={setImages} />

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
        {images.length > 0 ? (
          <SimpleGrid
            columns={2}
            spacing={4}
            w="100%"
            maxH="100%"
            overflowY="scroll"
          >
            {images.map((img) => (
              <ImagePreview img={img} key={img.id} onDelete={deleteImage} />
            ))}
          </SimpleGrid>
        ) : (
          <Box w="100%" textAlign="center">
            <Label
              text="No images uploaded"
              textTransform="uppercase"
              small
              color="gray.500"
            />
          </Box>
        )}
      </VStack>
    </VStack>
  );
};

export default ImageUploader;
