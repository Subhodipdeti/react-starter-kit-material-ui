import StorageUtils from './storage';
/**
 * It takes a number and returns a string
 * @param {number} value - number - The value to convert to rems.
 * @returns A string
 */
function pxToRem(value: number): string {
  return `${value / 16}rem`;
}

/**
 * "If the value is undefined, throw an error, otherwise return the value."
 *
 * The above function is a good example of a function that is generic. The generic type parameter T is
 * used to indicate that the function can be used with any type
 * @param {T | undefined} value - T | undefined
 * @returns A function that takes a value of type T and returns a value of type T.
 */
function required<T>(value: T | undefined): T {
  if (!value) {
    throw new Error('value is required');
  }
  return value;
}

/**
 * The function `getAssetPath` asynchronously imports an image file from a specified path and returns
 * the default export of the imported module.
 * @param {string} imageName - The `imageName` parameter is a string that represents the name of the
 * image file that you want to retrieve the path for.
 * @returns The function `getAssetPath` returns the default export of the image file located at the
 * path `../assets/images/`.
 */
async function getAssetPath(imageName: string) {
  const imagePath = `../assets/images/${imageName}`;
  /* @vite-ignore */
  const localImage = await import(imagePath);
  return localImage.default;
}


export {
  pxToRem,
  required,
  getAssetPath,
  StorageUtils
}