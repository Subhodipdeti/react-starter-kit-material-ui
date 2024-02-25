// Third party imports
import { createTheme, type PaletteMode } from '@mui/material';

// Local imports
import typography from './typography';
import palettes from './palettes';

/**
 * It takes a palette name and returns a theme
 * @param {PaletteMode} [name=light] - The name of the palette to use.
 * @returns A theme object
 */
export function useTheme(name: PaletteMode = 'light') {
  return createTheme({
    typography,
    palette: palettes[name],
  });
}

export default useTheme;
