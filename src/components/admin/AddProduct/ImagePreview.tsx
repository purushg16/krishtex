import { Box, Icon, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "lucide-react";
import { UploadedImage } from "../../../store/imageStore";

interface Props {
  img: UploadedImage;
  onDelete: (id: string) => void;
}

const ImagePreview = ({ img, onDelete }: Props) => {
  const imgUrl = URL.createObjectURL(img.image);

  return (
    <Box
      w="100%"
      minH={150}
      pos="relative"
      bg="gray.100"
      borderRadius={10}
      bgImg={imgUrl}
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      overflow="clip"
    >
      <IconButton
        onClick={() => onDelete(img.id)}
        size="sm"
        borderRadius={10}
        aria-label="del-img"
        icon={<Icon as={DeleteIcon} />}
        pos="absolute"
        right={2}
        top={2}
        bg="red.400"
        _hover={{ bg: "red.300" }}
        boxShadow="8px -2px 20px 15px #3e3e3e3b"
      />
    </Box>
  );
};

export default ImagePreview;
