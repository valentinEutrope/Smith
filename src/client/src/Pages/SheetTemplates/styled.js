import styled from "styled-components";
import { th, space } from "../../config/theme/themeHelpers";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 18rem auto;
  grid-template-rows: 100vh;
`;

export const TemplateContainer = styled.div`
  padding: ${space(["xs"])};
  margin: ${space(["sm", "xs"])};

  border: solid 1px ${th("colors.grey.200")};
  box-shadow: inset 0 0 8px ${th("colors.grey.600")};
  border-radius: 10px;
`;

export const BlockContainer = styled.div`
  padding: ${space(["sm"])};
  border: solid 1px ${th("colors.primary.500")};
`;

export const Title = styled.h3`
  text-align: center;
  font-size: ${th("fontSizes.header.small")};
`;
