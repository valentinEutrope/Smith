import React from "react";

import { Row } from "./styled";

const Rows = ({ rows, setSelectedElement }) => {
  return (
    <>
      {rows.map((row) => (
        <Row
          key={`row-${row.name}`}
          onClick={() => setSelectedElement(row.name)}
        >
          {row.name}
        </Row>
      ))}
    </>
  );
};

export default Rows;
