import styled from "styled-components";
import { th } from "@config/theme/themeHelpers";

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  width: 80rem;
  padding: 1rem;
`;

export const DashboardItem = styled.div`
  display: flex;
  justify-content: center;
  //   align-items: center;
  position: relative;
  z-index: 1;
  padding: 1rem;
  height: 18rem;
  border: solid 1px ${th("colors.grey.800")};
  border-radius: 0.25rem 0.25rem 0.75rem 0.25rem;
  cursor: pointer;
  background: no-repeat url(${(props) => props.backgroundUrl});
  background-size: cover;
  color: ${th("colors.grey.100")};
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: ${th("colors.tertiary.700")};
    border-radius: 0.25rem 0.25rem 0.75rem 0.75rem;
    box-shadow: ${th("boxShadows.300")};
    color: ${th("colors.tertiary.700")};
  }
`;

export const DashboardItemOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  z-index: 2;
  border-radius: 0.25rem 0.25rem 0.75rem 0.25rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 0.25rem 0.25rem 0.75rem 0.75rem;
  }
`;

export const DashboardItemTitle = styled.div`
  text-align: center;
  font-size: 1.7rem;
  font-weight: 700;
  pointer-events: none;
  text-shadow: 1px 1px 2px black;
  z-index: 3;
`;
