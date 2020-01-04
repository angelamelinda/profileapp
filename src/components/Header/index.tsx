import React, { FC } from "react";
import { HEADER } from "../../config/data";

const Header: FC = () => {
  return (
    <div id="header">
      <div className="container-fluid">
        <div id="header__logo">
          <img src={HEADER.LOGO} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
