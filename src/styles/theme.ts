import { createTheme } from "@mui/material/styles";

const themePage1 = createTheme({
  typography: {
    fontFamily: "monospace",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#673ab7",
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },
  },
});

export default themePage1;
