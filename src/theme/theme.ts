/** @format */

import { extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    frenchBlue: "#0072B5",
    greenAsh: "#A0DAA9",
    raspberry: "#D2386C",
    coconut: "#F0EDE5",
  },
  components: {
    Input: {
      baseStyle: {
        _focus: {
          _android: {
            selectionColor: "frenchBlue",
          },
          borderColor: "frenchBlue",
          selectionColor: "frenchBlue",
          backgroundColor: "transparent",
        },
        borderRadius: 8,
        borderColor: "frenchBlue",
        selectionColor: "frenchBlue",
        color: "black",
      },
      defaultProps: {
        fontSize: "14",
      },
    },
    Pressable: {
      baseStyle: {
        _pressed: {
          opacity: 0.8,
        },
      },
    },
  },
});

type CustomTheme = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends CustomTheme {}
}

export default theme;
