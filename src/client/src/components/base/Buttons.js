import styled from "styled-components";

import { th, space } from "../../config/theme/themeHelpers";

const SIZES = {
  default: space(["xs", "md"]),
  mini: "0.5rem",
  small: space(["xs"]),
  large: space(["md", "lg"]),
};

export const Button = styled.button`
  padding: ${(props) => SIZES[props.size] || SIZES.default};
  font-size: 1.25rem;
  cursor: pointer;

  border: 0;
  border-radius: ${(props) => props.radius || "32"}px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);

  background-color: ${th("colors.white.500")};
  color: ${th("colors.black")};

  transition: background-color 350ms, border-radius 400ms, transform 350ms,
    box-shadow 350ms, color 350ms;

  &:hover {
    background-color: ${th("colors.white.700")};
  }
`;

export const ButtonPrimary = styled(Button)`
  background-color: ${th("colors.primary.200")};
  color: ${th("colors.white.500")};

  margin: ${space(["md", "none"])};

  &:hover {
    color: ${th("colors.white.200")};
    background-color: ${th("colors.primary.500")};
    transform: translateY(-5px);
    box-shadow: 0px 6px 10px ${th("colors.primary.200")};
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  background-color: ${th("colors.secondary.200")};

  &:hover {
    color: ${th("colors.white.200")};
    background-color: ${th("colors.secondary.500")};
    box-shadow: 0px 6px 10px ${th("colors.secondary.200")};
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
