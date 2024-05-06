import { Tag } from "@chakra-ui/react";
import useAddCategoryStore from "../../../store/admin/addCategoryStore";

const CategorySelectButton = ({ pId }: { pId: string }) => {
  const setPid = useAddCategoryStore((s) => s.setPId);

  return (
    <Tag
      colorScheme="green"
      ml={2}
      cursor="pointer"
      onClick={() => setPid(pId)}
    >
      Select
    </Tag>
  );
};

export default CategorySelectButton;
