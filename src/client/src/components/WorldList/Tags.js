import React from "react";
import styled from "styled-components";
import { FlexCentered } from "@components/base/Flex";

import { th } from "@config/theme/themeHelpers";

const Tag = styled.span`
  color: ${th("colors.grey.700")};
  background-color: ${th("colors.grey.200")};
  border-radius: 2.5rem;
  padding: 0.25rem 1.25rem;
  font-size: 0.9rem;
`;

const Tags = ({ tags }) => {
  return (
    <FlexCentered>
      {tags.map((tag, key) => (
        <Tag key={`tag-${key}`}>{tag.dataValues.tag}</Tag>
      ))}
    </FlexCentered>
  );
};

export default Tags;
