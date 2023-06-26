import { createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
export const theme = createTheme({
    palette: {
      primary: {
        main: teal[700],
        light: teal[100],
        dark: teal[900]
      },
    },
});