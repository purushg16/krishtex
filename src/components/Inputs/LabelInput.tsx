import { FormLabel, Input, VStack } from "@chakra-ui/react";

interface Props {
  label: string;
  value: string | number;
  setText?: (value: string) => void;
  setNumber?: (value: number) => void;
  number?: boolean;
  smallLabel?: boolean;
  color?: "black" | "gray";
}

const LabelInput = ({
  label,
  value,
  setText,
  setNumber,
  number,
  color = "gray",
  smallLabel,
}: Props) => {
  return (
    <VStack align="start" gap={0} w="100%">
      <FormLabel
        fontSize={smallLabel ? "xs" : "md"}
        color={color}
        fontWeight={700}
      >
        {label}
      </FormLabel>
      <Input
        color="black"
        _placeholder={{ textTransform: "capitalize" }}
        placeholder={label}
        variant="outline"
        value={value}
        type={number ? "number" : "text"}
        onChange={(e) => {
          number
            ? setNumber && setNumber(parseInt(e.target.value || ""))
            : setText && setText(e.target.value);
        }}
      />
    </VStack>
  );
};

export default LabelInput;
