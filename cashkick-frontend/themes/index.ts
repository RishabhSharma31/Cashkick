import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", 
    background: {
      default: "#19181C", 
      paper: "#201F24",
    },
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#6C5DD3",
    },
    text: {
      primary: "#ffffff", 
      secondary: "#b0b0b0",
    },
    common: {
      white: "#FFFFFF",
    }
  },
  typography: {
    fontFamily: "Gilroy",
    body1: {
      fontSize: "1rem",
    },
    h1: {
      fontSize: "2.5rem",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#FFFFFF",
    },
    h3: {
      color: "#A0A3BD",
      fontSize: "0.875rem",
      fontWeight: "500",
    },
    h4: {
      color: "#FFFFFF",
      fontSize: "0.875rem",
      fontWeight: "bold",
    },
  },
});

export default theme;
