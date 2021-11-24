import styled, { css } from "styled-components";

import { th, space } from "../../config/theme/themeHelpers";

export const Flex = styled.div`
  display: flex;
`;

export const FlexCentered = styled(Flex)`
  justify-content: center;
  align-items: center;
`;
