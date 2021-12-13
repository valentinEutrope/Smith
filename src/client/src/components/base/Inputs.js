import styled from "styled-components";

import { th } from "@config/theme/themeHelpers";

export const Input = styled.input`
  width: 100%;
  padding: 0.4rem 0;
  border: none;
  border-bottom: solid 1px ${th("colors.grey")};
  color: ${th("colors.primary")};
  transition: 0.2s ease all;

  &:not([value=""]) {
    border-bottom: solid 1px ${th("colors.primary")};
  }

  &:focus {
    border-bottom: solid 1px ${th("colors.primary")};
    padding: 0.6rem 0;

    ::placeholder {
      opacity: 0;
    }
  }
`;
