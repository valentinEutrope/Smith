import React, { useState } from "react";
import PropTypes from "prop-types";

import { SidebarContainer } from "./styled";
import { Button } from "../base/Buttons";

const SidebarCreation = ({ addElement, setElements, elements }) => {
  const [label, setLabel] = useState("");

  return (
    <SidebarContainer>
      <h3>Outils de créations</h3>
      <Button onClick={() => addElement(setElements, elements, label)}>
        Ajouter élément
      </Button>
      <input
        type="text"
        placeholder="label"
        onChange={(e) => setLabel(e.target.value)}
        value={label}
      />
    </SidebarContainer>
  );
};

SidebarCreation.propTypes = {
  addElement: PropTypes.func.isRequired,
};

export default SidebarCreation;
