import styled from "styled-components";

import { th, space } from "../../config/theme/themeHelpers";

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${space(["lg"])};
  padding: 0 ${space(["md"])};
  margin-bottom: ${space(["md"])};
  box-shadow: 4px 0 6px rgba(0, 0, 0, 0.4);
`;
