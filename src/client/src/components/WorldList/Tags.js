import React from "react";
import styled from "styled-components";

import { th } from "../../config/theme/themeHelpers";

const TagsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tag = styled.span`
  color: ${th("colors.grey.700")};
  background-color: ${th("colors.grey.200")};
  border-radius: 2.5rem;
  padding: 0.25rem 1.25rem;
  margin: 0 0.5rem;
  font-size: 0.9rem;
`;

const Tags = ({ tags }) => {
  return (
    <TagsList>
      {tags.map((tag, key) => (
        <Tag key={`tag-${key}`}>{tag}</Tag>
      ))}
    </TagsList>
  );
};

export default Tags;
