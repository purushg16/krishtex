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
import useImageStore from "../../../store/admin/imageStore";
import { FileWithPath } from "react-dropzone";

const ImageUploader = ({
  limit,
  title,
  small,
}: {
  limit: number;
  title: string;
  small?: boolean;
}) => {
  const images = useImageStore((s) => s.images);
  const setImages = useImageStore((s) => s.setImages);
  const clearImages = useImageStore((s) => s.clearImages);
  const deleteImage = useImageStore((s) => s.deleteImage);

  const handleImages = (files: FileWithPath[]) => {
    clearImages();
    setImages(files);
  };

  return (
    <VStack align="start" w="100%" h="100%">
      <FormLabel fontSize={small ? "xs" : "md"} color="black">
        <Highlight
          query={`(max. ${limit} image(s))`}
          styles={{ fontSize: "xs", fontStyle: "italic" }}
        >
          {`${title}(max. ${limit} image(s))`}
        </Highlight>
      </FormLabel>

      <Uploader
        isDisabled={images.length === limit}
        limit={limit}
        callback={handleImages}
      />

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
