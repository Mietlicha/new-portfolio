import { createMuiTheme } from '@material-ui/core/styles';
import { theme } from './theme';

export const materialTheme = createMuiTheme({
  palette: {
    common: {
      black: theme.black,
      white: theme.white,
    },
    primary: {
      light: theme.greyLight,
      main: theme.grey,
    },
    secondary: {
      light: theme.greyLight,
      main: theme.grey,
    },
    info: {
      light: theme.greyLight,
      main: theme.grey,
    },
  },
  typography: {
    fontFamily: theme.josefin,
  },
});
