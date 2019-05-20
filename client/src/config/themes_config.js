import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    Libuyu: {
      main: "#fafafa"
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#fafafa"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#fafafa",
      main: "#fafafa",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#fafafa"
    }
    // error: will use the default color
  }
});
export default theme;

//module.export = theme;
