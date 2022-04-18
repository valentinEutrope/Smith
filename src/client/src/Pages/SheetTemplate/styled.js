import styled from "styled-components";
import { th, space } from "@config/theme/themeHelpers";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 25rem) auto;
  grid-template-rows: 297mm;
  grid-gap: 1rem;
`;

export const Sheet = styled.div`
  padding: ${space(["xs"])};
  border: solid 1px ${th("colors.grey.200")};
  box-shadow: inset 0 0 8px ${th("colors.grey.600")};
  border-radius: 2px;
  width: 210mm;
  justify-self: center;
`;

export const Row = styled.div`
  border: solid 1px ${th("colors.grey.700")};
  padding: ${space(["xs"])};
`;

export const BlockContainer = styled.div`
  padding: ${space(["sm"])};
  border: solid 1px ${th("colors.primary.500")};
`;

export const Title = styled.h3`
  text-align: center;
  font-size: ${th("fontSizes.header.small")};
`;
