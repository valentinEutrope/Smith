import React from "react";
import { AddButton } from "@components/base/Buttons";

const IconButton = ({ title, icon, callback }) => (
  <AddButton onClick={callback}>
    <span>{title}</span>
    {icon}
  </AddButton>
);

export default IconButton;
