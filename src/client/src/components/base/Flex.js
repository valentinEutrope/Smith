import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "initial"};
  align-items: ${(props) => props.alignItems || "initial"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "1rem"};
`;

export const FlexCentered = styled(Flex)`
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
`;
