import React, { useState } from "react";
import PropTypes from "prop-types";

import { Input } from "@components/base/Inputs";
import { ButtonSuccess } from "@components/base/Buttons";
import { SidebarContainer } from "./styled";

const SidebarCreation = ({
  templateData,
  setTemplateData,
  selectedElement,
}) => {
  const [templateName, setTemplateName] = useState(templateData.templateName);
  const elementData = templateData.rows.find(
    (row) => row.name === selectedElement
  );

  console.log({ elementData });

  const handleChangeTemplateName = () => {
    let newTemplateData = templateData;

    newTemplateData.templateName = templateName;
    setTemplateData(newTemplateData);
  };

  return (
    <SidebarContainer>
      <label>
        <b>Nom du template</b>
      </label>
      <Input
        value={templateName}
        onChange={(e) => setTemplateName(e.target.value)}
      />
      <ButtonSuccess name="save" onClick={() => handleChangeTemplateName()}>
        Sauvegarder
      </ButtonSuccess>
      {elementData && (
        <>
          <div>{elementData.name}</div>
        </>
      )}
    </SidebarContainer>
  );
};

SidebarCreation.propTypes = {
  selectedElement: PropTypes.string.isRequired,
};

export default SidebarCreation;
