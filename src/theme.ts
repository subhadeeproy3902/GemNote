import { ThemeConfig, extendTheme, useColorModeValue } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: useColorModeValue("gray.100", "gray.900"),
      },
    }),
  },
  config,
  colors: {
    primary: {
      50: "rgb(237 233 254)",
      100: "rgb(233 213 255)",
      200: "rgb(216 180 254)",
      300: "rgb(192 132 252)",
      400: "rgb(168 85 247)",
      500: "rgb(147 51 234)",
      600: "rgb(126 34 206)",
      700: "rgb(107 33 168)",
      800: "rgb(88 28 135)",
      900: "rgb(59 7 100)",
    },
    grey: {
      50: "rgb(241 245 249)",
      100: "rgb(226 232 240)",
      200: "rgb(203 213 225)",
      300: "rgb(148 163 184)",
      400: "rgb(100 116 139)",
      500: "rgb(71 85 105)",
      600: "rgb(51 65 85)",
      700: "rgb(30 41 59)",
      800: "rgb(15 23 42)",
      900: "rgb(2 6 23)",
    },
    brand: {
      50: "rgb(237 233 254)",
      100: "rgb(233 213 255)",
      200: "rgb(216 180 254)",
      300: "rgb(192 132 252)",
      400: "rgb(168 85 247)",
      500: "rgb(147 51 234)",
      600: "rgb(126 34 206)",
      700: "rgb(107 33 168)",
      800: "rgb(88 28 135)",
      900: "rgb(59 7 100)",
    },
  },
});

export default theme;
