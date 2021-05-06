// Import the wrapper component, and the the creator function
import { createGlobalStyle, DefaultTheme } from "styled-components";

export enum ColorsEnum {
  primary = "#FF5208",
  secondary = "#FFBAAB",
  success = "#85B899",
  error = "#F5734D",
  sunshine = "#FFDA00",
  tangerine = "#FF5208",
  tangerine0 = "#DA4606",
  tangerine1 = "#FF6A2B",
  tangerine2 = "#FF834E",
  tangerine3 = "#FF9C71",
  tangerine4 = "#FFB495",
  tangerine5 = "#FFCDB8",
  salmon = "#F5734D",
  blush = "#FFBAAB",
  bone = "#FFEDDE",
  bone1 = "#FFF6EE",
  lavender = "#A37DFC",
  amethyst = "#6100FA",
  field = "#85B899",
  mint = "#85E8AD",
  azure = "#DBFAFA",
  azure1 = "#EDFCFC",
  gunmetal = "#333333",
  warmgray1 = "#55524F",
  warmgray2 = "#77716C",
  warmgray3 = "#999088",
  warmgray4 = "#BBAFA5",
  warmgray5 = "#DDCEC1",
  coolgray1 = "#4F5454",
  coolgray2 = "#6B7575",
  coolgray3 = "#879696",
  coolgray4 = "#A3B7B7",
  white = "#FFFFFF",
  niceblue = "#41aae7",
}

export type ColorsType = keyof typeof ColorsEnum;

export const theme: DefaultTheme = {
  colors: ColorsEnum,
  font: {
    size: {
      xxs: "0.75rem",
      xs: "0.875rem",
      sm: "1rem",
      md: "1.5rem",
      lg: "3rem",
      xl: "6rem",
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
      black: 700, // Remove font weight 900 to reduce bundle size, To add later if required
    },
  },
  padding: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
  },
  margin: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
  },
  line: {
    height: {
      xs: "1rem",
      sm: "1.5rem",
      md: "1.75rem",
      lg: "3.5625rem",
      xl: "7.0625rem",
    },
  },
  zIndex: {
    modal: "10",
    navbar: "200",
    dropdown: "1050",
  },
  boxShadow: {
    one: "0 2px 4px 0 rgba(0, 0, 0, 0.16)",
    two:
      "0 -6px 16px -8px rgba(0, 0, 0, 0.08), 0 -9px 28px 0 rgba(0, 0, 0, 0.05)",
  },
  // TODO: Replace arbitrary numbers with actual values from Haiying
  mediaQuery: {
    mobile: {
      screenSize: "575px",
      fontSize: "4px",
    },
    tablet: {
      screenSize: "767px",
      fontSize: "6px",
    },
    laptop: {
      screenSize: "991px",
      fontSize: "7px",
    },
    desktop: {
      screenSize: "1199px",
      fontSize: "8.5px",
    },
    lgDesktop: {
      screenSize: "1599px",
      fontSize: "12px",
    },
    xlDesktop: {
      screenSize: "1600px", // Greater than 1600px
      fontSize: "15px",
    },
  },
};

// Create a new theme using Nunito Sans
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto'
  }
`;
