import {
  Button,
  FormLabel,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";

interface Props {
  label: string;
  values: string[];
  onSelect: (value: string) => void;
}

const LabelSelect = ({ label, values, onSelect }: Props) => {
  return (
    <VStack align="start" gap={0}>
      <FormLabel fontSize="sm" textTransform="capitalize">
        {label}
      </FormLabel>
      <Menu>
        <MenuButton as={Button}> Select </MenuButton>
        <MenuList>
          {values.map((val) => (
            <MenuItem key={val} onClick={() => onSelect(val)}>
              {val}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </VStack>
  );
};

export default LabelSelect;
