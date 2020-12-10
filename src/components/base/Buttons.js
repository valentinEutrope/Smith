import styled from "styled-components";

import { th, space } from "../../config/theme/themeHelpers";

export const Button = styled.button`
  padding: ${space(["xs", "md"])};
  font-size: 1.25rem;
  cursor: pointer;

  border: 0;
  border-radius: ${(props) => props.radius || "0"}px;

  background-color: ${th("colors.white")};
  color: ${th("colors.black")};
`;

export const ButtonSuccess = styled(Button)`
  background-color: ${th("colors.success")};
  color: ${th("colors.white")};
  transition: background-color 300ms, border-radius 400ms;

  &:hover {
    background-color: ${th("colors.success.700")};
    border-radius: calc(${(props) => props.radius || "0"}px + 4px);
  }
`;

export const ButtonDanger = styled(Button)`
  background-color: ${th("colors.danger")};
  color: ${th("colors.white")};
  transition: background-color 300ms, border-radius 400ms;

  &:hover {
    background-color: ${th("colors.danger.700")};
    border-radius: calc(${(props) => props.radius || "0"}px + 4px);
  }
`;
