import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { Label, Name } from "../../utilities/Typography";
import LabelInput from "../../components/Inputs/LabelInput";
import AddCategorySubmitButton from "../../components/admin/Category/AddCategorySubmitButton";
import useAddCategoryStore from "../../store/admin/addCategoryStore";
import ImageUploader from "../../components/admin/AddProduct/ImageUploader";
import CategoriesGrid from "../../components/admin/Category/CategoriesGrid";

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

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
        <ModalOverlay />
        <ModalContent borderRadius={0}>
          <ModalHeader px={4}>
            <Name text="New Category" small />
          </ModalHeader>
          <ModalBody mb={12} p={4}>
            <SimpleGrid w="100%" columns={{ base: 1, md: 2 }} spacing={12}>
              <VStack gap={8} w="100%">
                <LabelInput
                  label="Name"
                  value={name}
                  setText={setName}
                  smallLabel
                />

                <VStack align="start" w="100%">
                  <Label text="Is this a parent category?" color="gray" small />

                  <Checkbox
                    defaultChecked
                    isChecked={isParent}
                    onChange={() => setIsParent(!isParent)}
                    colorScheme="primary"
                  >
                    Is Parent
                  </Checkbox>
                </VStack>

                <VStack
                  align="start"
                  w="100%"
                  opacity={isParent ? 1 : 0.5}
                  pointerEvents={isParent ? "all" : "none"}
                  cursor={isParent ? "auto" : "not-allowed"}
                >
                  <Label text="Category" color="gray" small />
                  <CategoriesGrid size={{ base: 1, md: 2, lg: 3 }} />
                </VStack>
              </VStack>
              <VStack align="start" w="100%">
                <Label text="Image" color="gray" small />
                <ImageUploader limit={1} title="Upload category image" small />
              </VStack>
            </SimpleGrid>
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
