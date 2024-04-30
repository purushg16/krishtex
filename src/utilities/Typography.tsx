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

const RHeading = ({ text, big = false, small, color }: Props) => {
  const fontSize = big
    ? { base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }
    : small
    ? { base: "lg", sm: "xl", md: "3xl", lg: "3xl" }
    : { base: "lg", sm: "2xl", md: "3xl", lg: "4xl" };

  return (
    <Heading fontSize={fontSize} color={color}>
      {text}
    </Heading>
  );
};

const RText = ({
  text,
  small = false,
  weight = "normal",
  color,
  align = "left",
}: Props) => {
  const fontSize = small
    ? { base: "xs", sm: "xs", md: "sm", lg: "sm" }
    : { base: "xs", sm: "sm", md: "md", lg: "lg" };

  return (
    <Text
      textAlign={align}
      fontSize={fontSize}
      fontWeight={weight}
      m={0}
      p={0}
      color={color}
    >
      {text}
    </Text>
  );
};

const Label = ({
  text,
  color,
  weight = "bold",
  nowrap = false,
  textTransform,
}: Props) => (
  <Text
    fontSize={{ base: "sm", md: "md" }}
    fontWeight={weight}
    color={color}
    m={0}
    p={0}
    whiteSpace={nowrap ? "nowrap" : "normal"}
    textTransform={textTransform}
  >
    {text}
  </Text>
);

export { RHeading, RText, Label };
