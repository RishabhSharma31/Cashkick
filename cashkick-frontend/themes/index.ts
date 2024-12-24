import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Switches to dark mode (optional, enhances consistency with a black background)
    background: {
      default: "#19181C", // Black background for the app
      paper: "#19181C", // Black background for components like Card
    },
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    text: {
      primary: "#ffffff", // Ensures text is readable on black
      secondary: "#b0b0b0",
    },
  },
  typography: {
    fontFamily: "Gilroy",
    body1: {
      fontSize: "1rem",
    },
    h1: {
      fontSize: "2.5rem",
    },
  },
});

export default theme;
