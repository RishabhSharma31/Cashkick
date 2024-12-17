import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Switches to dark mode (optional, enhances consistency with a black background)
    background: {
      default: "#000000", // Black background for the app
      paper: "#000000", // Black background for components like Card
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
    fontFamily: "Roboto, Arial, sans-serif",
    body1: {
      fontSize: "1rem",
    },
    h1: {
      fontSize: "2.5rem",
    },
  },
});

export default theme;
