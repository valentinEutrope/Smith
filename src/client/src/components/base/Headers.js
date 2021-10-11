import styled, { css } from "styled-components";

import { th } from "../../config/theme/themeHelpers";

const baseStyle = () => css`
  color: ${th("colors.primary")};
  text-align: center;
`;

export const H1 = styled.h1`
  ${baseStyle()}
  font-size: ${th("fontSizes.header.big")};
`;

export const H2 = styled.h2`
  ${baseStyle()}
  font-size: ${th("fontSizes.header.medium")};
`;

export const H3 = styled.h3`
  ${baseStyle()}
  font-size: ${th("fontSizes.header.small")};
`;
