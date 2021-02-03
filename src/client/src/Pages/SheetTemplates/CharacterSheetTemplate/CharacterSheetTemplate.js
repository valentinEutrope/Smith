import React, { useState } from "react";

import SidebarCreation from "../../../components/SidebarCreation";
import { TemplateContainer, MainContainer, Title } from "../styled";

const addElement = (setElements, elements, label) => {
  let el = {
    inputLabel: label,
    inputValue: "",
  };

  setElements([...elements, el]);
};

const CharacterSheetTemplate = () => {
  const [elements, setElements] = useState([]);

  return (
    <MainContainer>
      <SidebarCreation
        addElement={addElement}
        setElements={setElements}
        elements={elements}
      />
      <div>
        <TemplateContainer>
          <Title>Modèle de fiche personnage</Title>
          {elements &&
            elements.map((el, index) => (
              <div key={`input-text-${index}`}>
                <label>{el.inputLabel} </label>
                <input type="text" />
              </div>
            ))}
        </TemplateContainer>
      </div>
    </MainContainer>
  );
};

export default CharacterSheetTemplate;
