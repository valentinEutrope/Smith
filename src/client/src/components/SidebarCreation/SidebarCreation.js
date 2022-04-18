import React from "react";
import PropTypes from "prop-types";

import { SidebarContainer } from "./styled";

const SidebarCreation = ({ selectedElement }) => {
  return <SidebarContainer>Sidebar</SidebarContainer>;
};

SidebarCreation.propTypes = {
  selectedElement: PropTypes.string.isRequired,
};

export default SidebarCreation;
