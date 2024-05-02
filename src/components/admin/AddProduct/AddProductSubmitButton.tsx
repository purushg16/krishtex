import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

const AddProductSubmitButton = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const ref = useRef(null);

  return (
    <>
      <Button
        bg="green.100"
        _hover={{ bg: "green.200" }}
        _active={{ bg: "green.200" }}
        _focus={{ bg: "green.200" }}
        color="green.600"
        onClick={onOpen}
      >
        Create Product
      </Button>
      <AlertDialog
        isCentered
        leastDestructiveRef={ref}
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        closeOnEsc={false}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader> Create Product </AlertDialogHeader>
          <AlertDialogBody>
            Make sure all the details are fine and Click 'Submit' to create
            product
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button
              ml={4}
              bg="green.100"
              _hover={{ bg: "green.200" }}
              _active={{ bg: "green.200" }}
              _focus={{ bg: "green.200" }}
              color="green.600"
            >
              Submit
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AddProductSubmitButton;
