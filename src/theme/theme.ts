import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import grayColor from "./grayColor";
import primaryColor from "./primaryColor";
import darkBlue from "./darkBlue";
import ButtonStyle from "./buttonStyle";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  colors: {
    primary: primaryColor,
    gray: grayColor,
    secondary: darkBlue,
  },
  components: {
    Button: ButtonStyle,
  },
});

export default theme;
