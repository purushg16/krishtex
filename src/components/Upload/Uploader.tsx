import { useDropzone } from "react-dropzone";
import { acceptStyle, focusedStyle, rejectStyle } from "./UploadStyle";
import { useMemo } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Label } from "../../utilities/Typography";

const Uploader = () => {
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    maxFiles: 5,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
  });

  const style = useMemo(
    () => ({
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <Box className="container" w="100%">
      <Flex
        p={4}
        w="100%"
        bg="gray.50"
        align="center"
        justify="center"
        borderRadius={10}
        border="1px dashed"
        borderColor="gray.200"
        {...getRootProps({ style: style as React.CSSProperties })}
      >
        <input {...getInputProps()} />
        {isDragAccept && <p>All files will be accepted</p>}
        {isDragReject && <p>Some files will be rejected</p>}
        {!isDragActive && <Label text="Tap or Drag and drop images here" />}
      </Flex>
    </Box>
  );
};

export default Uploader;
