import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
      primary: {
        light: '#43616b',
        main: '#143a47',
        dark: '#0e2831',
        contrastText: '#fff',
      },
      secondary: {
        light: '#f7f7f7',
        main: '#f6f6f6',
        dark: '#acacac',
        contrastText: '#000',
      },
      action: {
        disabled: '#143a47'
      }
    }
});