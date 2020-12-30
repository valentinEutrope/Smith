import styled from "styled-components";

import { th, space } from "../../config/theme/themeHelpers";

export const Button = styled.button`
  padding: ${space(["xs", "md"])};
  font-size: 1.25rem;
  cursor: pointer;

  border: 0;
  border-radius: ${(props) => props.radius || "0"}px;

  background-color: ${th("colors.white.500")};
  color: ${th("colors.black")};

  transition: background-color 350ms, border-radius 400ms;

  &:hover {
    background-color: ${th("colors.white.700")};
  }
`;

export const ButtonSuccess = styled(Button)`
  background-color: ${th("colors.success")};
  color: ${th("colors.white")};

  &:hover {
    background-color: ${th("colors.success.700")};
  }
`;

export const ButtonDanger = styled(Button)`
  background-color: ${th("colors.danger")};
  color: ${th("colors.white")};

  &:hover {
    background-color: ${th("colors.danger.700")};
  }
`;
