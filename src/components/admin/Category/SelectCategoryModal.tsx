import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import CategorySelectionStack from "./CategorySelectionStack";
// import categories from "../../../data/categories";
import { useState } from "react";
import Category from "../../../entities/Category";
import useAddCategoryStore from "../../../store/admin/addCategoryStore";
import { useGetAllCategories } from "../../../hooks/admin/useCategory";

const SelectCategoryModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pId = useAddCategoryStore((s) => s.pId);
  const setPId = useAddCategoryStore((s) => s.setPId);
  const { data: categories, isLoading } = useGetAllCategories();

  const [selectedCategory, setCategory] = useState<Category | undefined>();

  const selectCategory = (category: Category) => {
    setPId(category._id!);
    setCategory(category);
  };

  const clearFilters = () => {
    setPId("");
    setCategory(undefined);
  };

  return (
    <>
      <Button onClick={onOpen} isLoading={isLoading}>
        {selectedCategory?.name || "Select"}
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          clearFilters();
        }}
        isCentered
      >
        <ModalOverlay />
        <ModalContent borderRadius={0}>
          <ModalHeader>
            {selectedCategory?.name || "Select Category"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody my={4}>
            <CategorySelectionStack
              categories={selectedCategory?.children || categories!}
              callback={selectCategory}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="yellow"
              variant="outline"
              onClick={clearFilters}
              isDisabled={!selectedCategory}
            >
              To Top
            </Button>
            <Button
              colorScheme="blue"
              ml={4}
              onClick={onClose}
              isDisabled={!pId}
            >
              Select
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SelectCategoryModal;
