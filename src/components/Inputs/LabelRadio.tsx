import { FormLabel, Radio, RadioGroup, Stack, VStack } from "@chakra-ui/react";

interface Props {
  label: string;
  value: string;
  values: string[];
  onSelect: (value: string) => void;
  color?: "black" | "gray";
}

const LabelRadio = ({
  label,
  value,
  values,
  onSelect,
  color = "gray",
}: Props) => {
  return (
    <VStack gap={0} align="start">
      <FormLabel fontSize="md" textTransform="capitalize" color={color}>
        {label}
      </FormLabel>
      <RadioGroup onChange={onSelect} value={value}>
        <Stack direction="row" gap={4}>
          {values.map((val) => (
            <Radio value={val} key={val} colorScheme="primary">
              {val}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </VStack>
  );
};

export default LabelRadio;
