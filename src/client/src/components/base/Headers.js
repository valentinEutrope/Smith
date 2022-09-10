import styled, { css } from "styled-components";

import { th, space } from "@config/theme/themeHelpers";

const baseStyle = () => css`
  color: ${th("colors.primary")};
  padding: ${space(["xs", "none"])};
  text-align: center;
`;

export const H1 = styled.h1`
  ${baseStyle()}
  font-size: ${th("fontSizes.extraLarge")};
`;

export const H2 = styled.h2`
  ${baseStyle()}
  font-size: ${th("fontSizes.veryLarge")};
`;

export const H3 = styled.h3`
  ${baseStyle()}
  font-size: ${th("fontSizes.large")};
`;

export const H4 = styled.h4`
  ${baseStyle()}
  font-size: ${th("fontSizes.medium")};
`;
