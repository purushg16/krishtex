import { Heading, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  big?: boolean;
  small?: boolean;
  weight?: "normal" | "semibold" | "bold" | "bolder";
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
    ? { base: "42px", md: "64px" }
    : small
    ? { base: "36px", md: "42px" }
    : { base: "36px", md: "48px" };

  return (
    <Heading fontSize={fontSize} color={color} fontWeight={weight}>
      {text}
    </Heading>
  );
};

const Name = ({ text, color, textTransform, small }: Props) => {
  const fontSize = small
    ? { base: "16px", md: "20px" }
    : { base: "20px", md: "28px" };

  return (
    <Heading
      fontSize={fontSize}
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
      fontSize={{ base: "14px", md: "16px" }}
      color={color}
      fontWeight={400}
    >
      {text}
    </Text>
  );
};

const Label = ({
  text,
  color,
  textTransform,
  small,
  weight = "semibold",
}: Props) => (
  <Text
    fontSize={small ? "12px" : "16px"}
    fontWeight={weight}
    color={color}
    whiteSpace={"nowrap"}
    textTransform={textTransform}
  >
    {text}
  </Text>
);

export { Title as RHeading, Paragraph as RText, Label, Name };
