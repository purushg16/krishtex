import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import LabelInput from "../../components/Inputs/LabelInput";
import ImageUploader from "../../components/admin/AddProduct/ImageUploader";
import AddCategorySubmitButton from "../../components/admin/Category/AddCategorySubmitButton";
import SelectCategoryModal from "../../components/admin/Category/SelectCategoryModal";
import useAddCategoryStore from "../../store/admin/addCategoryStore";
import { Label, Name } from "../../utilities/Typography";

const AddCategoryModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const name = useAddCategoryStore((s) => s.name);
  const setName = useAddCategoryStore((s) => s.setName);
  const isParent = useAddCategoryStore((s) => s.isParent);
  const setIsParent = useAddCategoryStore((s) => s.setIsParent);

  return (
    <>
      <Button onClick={onOpen} colorScheme="primary" size="sm">
        New Category
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ base: "full", md: "xl" }}
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent borderRadius={0} maxH={700} overflowY="scroll">
          <ModalHeader px={4}>
            <Name text="New Category" small />
          </ModalHeader>
          <ModalBody p={4}>
            <VStack gap={8} w="100%">
              <VStack gap={2} w="100%" align="start">
                <LabelInput
                  label="Name"
                  value={name}
                  setText={setName}
                  smallLabel
                />
                <Checkbox
                  size="sm"
                  defaultChecked
                  isChecked={isParent}
                  onChange={() => setIsParent(!isParent)}
                  colorScheme="primary"
                >
                  Is this a Parent category?
                </Checkbox>
              </VStack>

              <VStack
                align="start"
                w="100%"
                opacity={!isParent ? 1 : 0.5}
                pointerEvents={!isParent ? "all" : "none"}
                cursor={!isParent ? "auto" : "not-allowed"}
              >
                <Label text="Category" color="gray" small />
                <SelectCategoryModal />
              </VStack>

              <VStack align="start" w="100%">
                <ImageUploader limit={1} title="Upload category image" />
              </VStack>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              onClick={() => {
                setName("");
                onClose();
              }}
            >
              Cancel
            </Button>
            <AddCategorySubmitButton />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddCategoryModal;
