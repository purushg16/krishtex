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
import { useNavigate } from "react-router";
import useAddProductStore from "../../../store/AddProductStore";

const AddProductCancelButton = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const ref = useRef(null);
  const clear = useAddProductStore((s) => s.clearForm);
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={onOpen}>Cancel</Button>
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
          <AlertDialogHeader> Are you sure? </AlertDialogHeader>
          <AlertDialogBody>
            All entries you entered will be cleared.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
            <Button
              ml={4}
              colorScheme="red"
              onClick={() => {
                clear();
                navigate("/admin/products");
              }}
            >
              Cancel
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AddProductCancelButton;
