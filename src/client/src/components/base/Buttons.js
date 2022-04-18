import styled from "styled-components";

import { th, space } from "@config/theme/themeHelpers";

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
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
  background-color: ${th("colors.white.500")};
  color: ${th("colors.black")};
  transition: background-color 350ms, border-radius 400ms, transform 350ms,
    box-shadow 350ms, color 350ms;

  &:hover {
    background-color: ${th("colors.white.700")};
  }
`;

export const RoundButton = styled(Button)`
  border-radius: ${(props) => props.radius || "100"}%;
`;

export const ButtonPrimary = styled(Button)`
  background-color: ${th("colors.primary.500")};
  color: ${th("colors.white.500")};
  margin: ${space(["md", "none"])};

  &:hover {
    color: ${th("colors.white.700")};
    background-color: ${th("colors.primary.700")};
    transform: translateY(-5px);
    box-shadow: 0px 4px 6px ${th("colors.primary.500")};
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  background-color: ${th("colors.secondary.500")};

  &:hover {
    color: ${th("colors.white.500")};
    background-color: ${th("colors.secondary.700")};
    box-shadow: 0px 4px 6px ${th("colors.secondary.500")};
  }
`;

export const ButtonTertiary = styled(ButtonPrimary)`
  background-color: ${th("colors.tertiary.500")};

  &:hover {
    color: ${th("colors.white.500")};
    background-color: ${th("colors.tertiary.700")};
    box-shadow: 0px 4px 6px ${th("colors.tertiary.500")};
  }
`;

export const AddButton = styled(ButtonPrimary)`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  transition: background-color 200ms, box-shadow 200ms, color 200ms;

  span {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: ${th("colors.tertiary.700")};
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    transform: none;
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
