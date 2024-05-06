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
import useAddCategoryStore from "../../../store/admin/addCategoryStore";

const AddCategorySubmitButton = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const ref = useRef(null);

  const name = useAddCategoryStore((s) => s.name);
  const pId = useAddCategoryStore((s) => s.pId);
  const isParent = useAddCategoryStore((s) => s.isParent);
  const imageLink = useAddCategoryStore((s) => s.imageLink);

  return (
    <>
      <Button
        bg="green.100"
        _hover={{ bg: "green.200" }}
        _active={{ bg: "green.200" }}
        _focus={{ bg: "green.200" }}
        color="green.600"
        onClick={onOpen}
        ml={4}
        isDisabled={!name || !imageLink || (isParent && !pId)}
      >
        Create Category
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
        <AlertDialogContent borderRadius={0}>
          <AlertDialogHeader> Create Category </AlertDialogHeader>
          <AlertDialogBody>
            Make sure all the details are fine and Click 'Submit' to create a
            new category
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

export default AddCategorySubmitButton;
