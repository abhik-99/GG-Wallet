import { ThemeOptions, createTheme } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    
    mode: 'dark',
    primary: {
      main: '#231aef',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#000000',
      paper: '#0a0a0a',
    },
  },
};

export const theme = createTheme(themeOptions);