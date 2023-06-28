import { createTheme } from '@mui/material/styles';
import { teal, red } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
      primary: {
        main: teal[700],
        light: teal[100],
        dark: teal[900]
      },
      secondary: {
        main: red[700],
        light: red[100],
        dark: red[900]
      }
    },
});