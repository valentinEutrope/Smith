import React from "react";
import { Link } from "react-router-dom";

import { HeaderContent } from "./styled";

const Header = () => {
  return (
    <HeaderContent>
      <Link to="/">
        <img src="assets/logo.svg" alt="logo" />
      </Link>
    </HeaderContent>
  );
};

export default Header;
