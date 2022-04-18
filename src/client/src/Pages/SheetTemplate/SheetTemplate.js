import React, { useState } from "react";
import { BsBoxArrowDown } from "react-icons/bs";

import SidebarCreation from "@components/SidebarCreation";
import IconButton from "@components/base/IconButton";
import { Sheet, MainContainer, Row } from "./styled";

const SheetTemplate = () => {
  const [selectedElement, setSelectedElement] = useState("r1");
  const [templateData, setTemplateData] = useState({
    name: "My beautiful template",
    rows: [],
  });

  const addRow = () => {
    let newTemplateData = templateData;
    const newRow = {
      name: `r${templateData.rows.length + 1}`,
      height: null,
      containers: [],
    };

    newTemplateData.rows.push(newRow);
    setTemplateData(newTemplateData);
  };

  return (
    <div>
      <div>{templateData.name}</div>
      <MainContainer>
        <SidebarCreation selectedElement={selectedElement} />
        <Sheet>
          {templateData.rows.map((row) => (
            <Row
              key={`row-${row.name}`}
              onClick={() => setSelectedElement(row.name)}
            >
              {row.name}
            </Row>
          ))}
          <IconButton
            title="Ajouter une ligne"
            icon={<BsBoxArrowDown />}
            callback={() => addRow()}
          />
        </Sheet>
      </MainContainer>
    </div>
  );
};

export default SheetTemplate;
