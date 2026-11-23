import { createTheme } from "@shopify/restyle";

const palette = {
  white: "#FFFFFF",
  gray: "#434343",
  pastelYellow: "#FAEBCD",
  lightYellow: "#FFDD67",
  darkYellow: "#F7C873",
  red: "#FF383C",
};

const theme = createTheme({
  colors: {
    background: palette.white,
    text: palette.gray,
    yellow1: palette.lightYellow,
    yellow2: palette.pastelYellow,
    yellow3: palette.darkYellow,
    error: palette.red,
    ...palette,
  },
  spacing: {
    s2: 2,
    s4: 4,
    s6: 6,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s18: 18,
    s20: 20,
    s22: 22,
    s24: 24,
    s26: 26,
    s28: 28,
    s30: 30,
    s32: 32,
    s34: 34,
    s36: 36,
    s38: 38,
    s40: 40,
    s65: 65,
  },
  textVariants: {
    defaults: {
      color: "text",
      fontFamily: "SpaceGroteskMedium",
    },
    title40: {
      fontSize: 40,
    },
    title30: {
      fontSize: 30,
      color: "background",
      letterSpacing: 0,
    },
    title20: {
      fontSize: 20,
      letterSpacing: 1,
    },
    label: {
      fontSize: 20,
      fontFamily: "SpaceGroteskBold",
      letterSpacing: 1,
    },
    placeholder: {
      fontSize: 16,
      letterSpacing: 1,
    },
    pill: {
      fontSize: 10,
    },
    text16: {
      fontSize: 16,
      fontFamily: "SpaceGroteskRegular",
      letterSpacing: 0,
    },
  },
  borderRadii: {
    b5: 5,
    b10: 10,
    b25: 25,
    rounded: 500,
  },
  opacity: {
    inputBorder: "rgba(67, 67, 67, 0.1)",
    placeholder: "rgba(67, 67, 67, 0.5)",
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme["colors"];
export default theme;
