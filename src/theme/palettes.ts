import { type PaletteOptions } from '@mui/material/styles';

/* Creating a palette for light colors. */
export const light: PaletteOptions = {
  mode: 'light',
  primary: {
    light: '#757ce8',
    main: '#3f50b5',
    dark: '#002884',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ff7961',
    main: '#f44336',
    dark: '#ba000d',
    contrastText: '#000',
  },
  background: {
    default: 'rgb(240,242,245)'
  },
  common: {
    white: '#fff',
    black: '#000'
  }
};

/* Creating a palette for dark colors. */
export const dark: PaletteOptions = {
  mode: 'dark',
  primary: {
    light: '#ff7961',
    main: '#f44336',
    dark: '#ba000d',
    contrastText: '#000',
  },
  secondary: {
    light: '#757ce8',
    main: '#3f50b5',
    dark: '#002884',
    contrastText: '#fff',
  },
  background: {
    default: 'rgb(24,25,26)'
  },
  common: {
    white: '#fff',
    black: '#000'
  }
};

export default { light, dark };