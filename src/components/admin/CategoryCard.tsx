import { Flex, HStack, Tag, useDisclosure } from "@chakra-ui/react";
import { Label } from "../../utilities/Typography";
import Category from "../../entities/Category";
import CategoryModal from "./CategoryModal";

const CategoryCard = ({ category }: { category: Category }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Flex
        w="100%"
        onClick={() => category.parent && onOpen()}
        minH={130}
        justify="space-between"
        flexDir="column"
        borderRadius={10}
        bg={category.parent ? "blue.50" : "gray.50"}
        border="1px solid"
        borderColor={category.parent ? "blue.100" : "gray.100"}
        p={4}
        color="black"
        pos="relative"
      >
        <Label text={category.name} />
        <HStack maxW="100%" flexWrap="wrap">
          <Tag colorScheme={!category.parent ? "gray" : "green"}>
            {category.parent ? "Parent" : "Non-Parent"}
          </Tag>
          {category.parent && (
            <Tag colorScheme="yellow" whiteSpace="nowrap">
              {`Inner Categories: ${category.children.length}`}
            </Tag>
          )}
        </HStack>
      </Flex>
      {isOpen && category.parent && (
        <CategoryModal isOpen={isOpen} onClose={onClose} category={category} />
      )}
    </>
  );
};

export default CategoryCard;
