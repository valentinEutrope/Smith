import { scaleFontSize } from "./variables";

const regular = 1.6;

//decreasing sizes
const small = regular / scaleFontSize;
const extraSmall = small / scaleFontSize;
const tiny = extraSmall / scaleFontSize;

//crescent sizes
const medium = regular * scaleFontSize;
const large = medium * scaleFontSize;
const veryLarge = large * scaleFontSize;
const extraLarge = veryLarge * scaleFontSize;
const giant = extraLarge * scaleFontSize;

export const fontSizes = {
  tiny,
  extraSmall,
  small,
  regular,
  medium,
  large,
  veryLarge,
  extraLarge,
  giant,
};
