import styled from "styled-components";

import { th } from "@config/theme/themeHelpers";

export const Worlds = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const World = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #ccc;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  padding: 1rem 4rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
  }
`;

export const WorldName = styled.h3`
  font-size: ${th("fontSizes.header.small")};
`;

export const WorldImage = styled.img`
  width: 8rem;
  height: 8rem;
`;

export const NoWorldMessage = styled.div`
  text-align: center;
`;
