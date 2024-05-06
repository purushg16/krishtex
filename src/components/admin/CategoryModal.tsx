import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  SimpleGrid,
  ModalCloseButton,
} from "@chakra-ui/react";
import Category from "../../entities/Category";
import CategoryCard from "./CategoryCard";

const CategoryModal = ({
  category,
  isOpen,
  onClose,
}: {
  category: Category;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>{category.name}</ModalHeader>
        <ModalBody py={4} borderTop="1px solid" borderColor="gray.100">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} w="100%">
            {category.children.map((category) => (
              <CategoryCard category={category} />
            ))}
          </SimpleGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CategoryModal;
