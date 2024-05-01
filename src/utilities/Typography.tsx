import { Heading, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  big?: boolean;
  small?: boolean;
  weight?: "normal" | "bold" | "bolder";
  color?: "white" | "gray" | string;
  nowrap?: boolean;
  align?: AlignSetting;
  textTransform?:
    | "capitalize"
    | "full-size-kana"
    | "full-width"
    | "lowercase"
    | "none"
    | "uppercase";
}

const Title = ({ text, big = false, small, color, weight }: Props) => {
  const fontSize = big
    ? { base: "32px", md: "52px" }
    : small
    ? { base: "32px", md: "42px" }
    : { base: "32px", md: "48px" };

  return (
    <Heading fontSize={fontSize} color={color} fontWeight={weight}>
      {text}
    </Heading>
  );
};

const Name = ({ text, color, textTransform }: Props) => {
  return (
    <Heading
      fontSize={{ base: "20px", md: "28px" }}
      fontWeight="semibold"
      color={color}
      textTransform={textTransform}
    >
      {text}
    </Heading>
  );
};

const Paragraph = ({ text, color, align = "left" }: Props) => {
  return (
    <Text
      textAlign={align}
      fontSize={{ base: "12px", md: "16px" }}
      color={color}
    >
      {text}
    </Text>
  );
};

const Label = ({ text, color, textTransform }: Props) => (
  <Text
    fontSize={"16px"}
    fontWeight={"semibold"}
    color={color}
    whiteSpace={"nowrap"}
    textTransform={textTransform}
  >
    {text}
  </Text>
);

export { Title as RHeading, Paragraph as RText, Label, Name };
