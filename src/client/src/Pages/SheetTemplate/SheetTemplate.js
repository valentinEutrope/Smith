import React, { useState } from "react";
import { BsBoxArrowDown } from "react-icons/bs";

import SidebarCreation from "@components/SidebarCreation";
import IconButton from "@components/base/IconButton";
import { H3 } from "@components/base/Headers";
import Rows from "./Rows";
import { Sheet, MainContainer } from "./styled";

const SheetTemplate = () => {
  const [selectedElement, setSelectedElement] = useState("");
  const [templateData, setTemplateData] = useState({
    templateName: "Template fiche de personnage",
    fontFamily: "default",
    rows: [],
  });

  const addRow = (templateData) => {
    let newTemplateData = templateData;
    const newRow = {
      name: `R${templateData.rows.length + 1}`,
      height: null,
      blocks: [],
    };

    newTemplateData.rows.push(newRow);
    setTemplateData(newTemplateData);
  };

  return (
    <>
      <H3>{templateData.templateName}</H3>
      <MainContainer>
        <SidebarCreation
          templateData={templateData}
          setTemplateData={setTemplateData}
          selectedElement={selectedElement}
        />
        <Sheet>
          {templateData.rows && (
            <Rows
              rows={templateData.rows}
              setSelectedElement={setSelectedElement}
            />
          )}
          <IconButton
            title="Ajouter une ligne"
            icon={<BsBoxArrowDown />}
            callback={() => addRow(templateData)}
          />
        </Sheet>
      </MainContainer>
    </>
  );
};

export default SheetTemplate;
