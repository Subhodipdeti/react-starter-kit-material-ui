import { TypographyVariantsOptions } from '@mui/material/styles';
import { pxToRem } from '../utils';

/* Defining the typography for the app. */
const typography: TypographyVariantsOptions = {
  fontFamily: 'Poppins, sans-serif', // Set the default font family
  h1: {
    fontSize: pxToRem(32),
  },
  h2: {
    fontSize: pxToRem(24),
  },
  h3: {
    fontSize: pxToRem(20),
  },
  h4: {
    fontSize: pxToRem(16),
  },
  h5: {
    fontSize: pxToRem(12),
  },
  h6: {
    fontSize: pxToRem(10),
  },
  button: { textTransform: 'none' },
};

export default typography;
