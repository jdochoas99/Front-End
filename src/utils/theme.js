import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    initialColorMode: "dark",
    colors: {
        global: {
            bg: "#F2F7FC",
            color: "#6E6E6E",
        },
        primary: {
            light: "#3f7352",
            main: "#0F5027",
            dark: "#0a381b",
            contrastText: "#fff",
        },
        secondary: {
            light: "#a8c47a",
            main: "#93B659",
            dark: "#667f3e",
            contrastText: "#6E6E6E",
        },
        error: {
            main: "#c53030",
        },
        spotlight: {
            main: '#FBE170'
        }
    },
    fonts: {
        body: ["Roboto", '"Segoe UI"', "sans-serif"].join(","),
    },
    fontWeights: {
        normal: 400,
        medium: 600,
        bold: 700,
        xBold: 900,
    },
});

export default theme;

/**
 *
 *   palette: {

    background: {
      default: '#F2F7FC',
      paper: '#ffff'
    }
  },
  typography: {
    fontFamily: ["Roboto", '"Segoe UI"', "sans-serif"].join(","),
  },
 *
 */
