import { Heading, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  big?: boolean;
  small?: boolean;
  weight?: "normal" | "semibold" | "bold" | "bolder";
  color?: "white" | "gray" | string;
  nowrap?: boolean;
  align?: AlignSetting;
  border?: boolean;
  textTransform?:
    | "capitalize"
    | "full-size-kana"
    | "full-width"
    | "lowercase"
    | "none"
    | "uppercase";
}

const Title = ({ text, big = false, small, color, weight, align }: Props) => {
  const fontSize = big
    ? { base: "42px", md: "84px" }
    : small
    ? { base: "36px", md: "42px" }
    : { base: "36px", md: "48px" };

  return (
    <Heading
      fontSize={fontSize}
      color={color}
      fontWeight={weight}
      textAlign={align}
    >
      {text}
    </Heading>
  );
};

const Name = ({ text, color, textTransform, small, border }: Props) => {
  const fontSize = small
    ? { base: "16px", md: "20px" }
    : { base: "28px", md: "36px" };

  return (
    <Heading
      fontSize={fontSize}
      fontWeight="semibold"
      color={color}
      textTransform={textTransform}
      position="relative"
    >
      {text}
      {border && (
        <span
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            top: 25,
            width: "100%",
            height: "3px",
            backgroundColor: "darkslateblue",
          }}
        />
      )}
    </Heading>
  );
};

const Paragraph = ({ text, color, align = "left", border }: Props) => {
  return (
    <Text
      textAlign={align}
      fontSize="16px"
      color={color}
      fontWeight={500}
      pos="relative"
    >
      {text}
      {border && (
        <span
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "3px",
            backgroundColor: "black",
          }}
        />
      )}
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
