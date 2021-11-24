import React from "react";
import { Link, useLocation } from "react-router-dom";

import { ButtonSecondary } from "../base/Buttons";
import { HeaderContent } from "./styled";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <HeaderContent>
      <Link to="/">
        <img src="assets/logo.svg" alt="logo" />
      </Link>
      {isHome && (
        <ButtonSecondary
          radius="0"
          size="small"
          onClick={() => console.log("TODO: IMPORT")}
        >
          Importer des mondes
        </ButtonSecondary>
      )}
    </HeaderContent>
  );
};

export default Header;
