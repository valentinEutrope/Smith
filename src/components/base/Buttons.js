import styled from "styled-components";

import { th, space } from "../../config/theme/themeHelpers";

export const Button = styled.button`
  padding: ${space(["xs", "md"])};
  font-size: 1.25rem;
  cursor: pointer;

  border: 0;

  background-color: ${th("colors.white")};
  color: ${th("colors.black")};
`;

export const ButtonRounded = styled(Button)`
  border-radius: 6rem;
`;

export const ButtonSuccess = styled(Button)`
  background-color: ${th("colors.success")};
  border-radius: ${(props) => props.radius || "0"};
  transition: background-color 300ms;

  &:hover {
    background-color: ${th("colors.success.700")};
  }
`;

export const ButtonDanger = styled(Button)`
  background-color: ${th("colors.danger")};
  border-radius: ${(props) => props.radius || "0"};
  transition: background-color 300ms;

  &:hover {
    background-color: ${th("colors.danger.700")};
  }
`;
