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
import cloudinaryUpload from "../../../functions/cloudinaryUpload";
import { useAddCategory } from "../../../hooks/admin/useCategory";
import useAddCategoryStore from "../../../store/admin/addCategoryStore";
import useImageStore from "../../../store/admin/imageStore";

const AddCategorySubmitButton = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const ref = useRef(null);

  const name = useAddCategoryStore((s) => s.name);
  const pId = useAddCategoryStore((s) => s.pId);
  const isParent = useAddCategoryStore((s) => s.isParent);
  const images = useImageStore((s) => s.images);

  const { mutate, isPending } = useAddCategory(onClose);

  const handleSumbit = () => {
    cloudinaryUpload(images.map((i) => i.image)).then((res) => {
      if (isParent)
        mutate({ name, imageLink: res.map((r) => r?.secure_url)[0]! });
      else mutate({ name, pId, imageLink: res.map((r) => r?.secure_url)[0]! });
    });
  };

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
        isDisabled={!name || (!isParent && !pId) || images.length !== 1}
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
            new category.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button
              isLoading={isPending}
              onClick={handleSumbit}
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
