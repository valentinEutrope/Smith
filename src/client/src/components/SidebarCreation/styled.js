import styled from "styled-components";

import { th, space } from "../../config/theme/themeHelpers";

export const SidebarContainer = styled.div`
  padding: ${space(["xs"])};
  heigth: 100%;

  border-rigth: solid 1px ${th("colors.grey.200")};
  box-shadow: 2px 0 2px ${th("colors.grey.600")};
`;
