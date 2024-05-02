import { Box, Icon, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "lucide-react";

const ImagePreview = () => {
  return (
    <Box w="100%" minH={150} pos="relative" bg="gray.100" borderRadius={10}>
      <IconButton
        size="sm"
        borderRadius={10}
        aria-label="del-img"
        icon={<Icon as={DeleteIcon} />}
        pos="absolute"
        right={2}
        top={2}
        bg="red.200"
        _hover={{ bg: "red.300" }}
      />
    </Box>
  );
};

export default ImagePreview;
