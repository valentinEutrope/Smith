import styled from "styled-components";

import { th, space } from "../../config/theme/themeHelpers";

export const Button = styled.button`
  padding: ${space(["xs", "md"])};
  font-size: 1.25rem;
  cursor: pointer;

  background-color: ${th("colors.white")};
  color: ${th("colors.black")};
`;

export const ButtonRounded = styled(Button)`
  border-radius: 6rem;
`;
