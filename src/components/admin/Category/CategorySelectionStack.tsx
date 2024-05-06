import { HStack, VStack } from "@chakra-ui/react";
import { Label } from "../../../utilities/Typography";
import Category from "../../../entities/Category";

const CategorySelectionStack = ({
  categories,
  callback,
}: {
  categories: Category[];
  callback: (name: Category) => void;
}) => {
  return (
    <VStack w="100%">
      {categories.length === 0 && (
        <Label
          color="gray"
          nowrap={false}
          text="There is no parent categories. You can only create a new Parent category as of now."
        />
      )}

      {categories.length > 0 &&
        (categories.filter((cat) => cat.parent === true).length > 0 ? (
          categories
            .filter((cat) => cat.parent === true)
            .map((cat) => (
              <HStack
                w="100%"
                justify="space-between"
                key={cat.name}
                p={4}
                border="1px solid"
                bg={"blue.50"}
                borderColor={"blue.100"}
                onClick={() => callback(cat)}
              >
                <Label text={cat.name} />
              </HStack>
            ))
        ) : (
          <Label text="Select this category" />
        ))}
    </VStack>
  );
};

export default CategorySelectionStack;
