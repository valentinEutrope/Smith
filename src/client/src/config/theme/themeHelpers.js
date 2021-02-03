import _get from "lodash.get";

export const fontFamily = (key) => ({ theme }) =>
  `font-family: ${theme.typography.families[key]};`;

export const color = (key) => ({ theme }) => theme.colors[key];

export const space = (sizes) => ({ theme }) =>
  sizes
    .map((size) => `${theme.spaces[size]}${size === "none" ? "" : "rem"}`)
    .join(" ");

export const breakpoint = (breakpoint) => ({ theme }) =>
  theme.breakpoints[breakpoint];

export const th = (key, unit = "rem") => ({ theme }) => {
  let data = _get(theme, key);

  if (key && (key.includes("spaces") || key.includes("sizes"))) {
    data = String(data).concat(unit);
  }

  if (key && key.includes("colors")) {
    let hasLevelColor = key.split(".").length > 2;
    let defaultLevel = "500";

    data = _get(theme, hasLevelColor ? key : `${key}.${defaultLevel}`);
  }

  return data;
};

export default {
  th,
  fontFamily,
  color,
  space,
  breakpoint,
};
