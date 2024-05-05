import { FormLabel, Input, VStack } from "@chakra-ui/react";

interface Props {
  label: string;
  value: string | number;
  setText?: (value: string) => void;
  setNumber?: (value: number) => void;
  number?: boolean;
  smallLabel?: boolean;
  password?: boolean;
  color?: "black" | "gray";
  inFlex?: boolean;
}

const LabelInput = ({
  password,
  label,
  value,
  setText,
  setNumber,
  number,
  color = "gray",
  smallLabel,
  inFlex,
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
        borderRadius={0}
        minW={inFlex ? 0 : 300}
        color="black"
        _placeholder={{ textTransform: "capitalize" }}
        placeholder={label}
        variant="outline"
        value={value}
        type={number ? "number" : password ? "password" : "text"}
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
