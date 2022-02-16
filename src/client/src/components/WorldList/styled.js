import styled from "styled-components";

import { th } from "@config/theme/themeHelpers";

export const World = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #ccc;
  box-shadow: ${th("boxShadows.100")};
  padding: 1rem 4rem;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: ${th("boxShadows.300")};
  }
`;

export const WorldName = styled.h3`
  font-size: ${th("fontSizes.header.small")};
  color: ${th("colors.secondary.700")};
`;

export const WorldImage = styled.img`
  width: 8rem;
  height: 8rem;
`;
