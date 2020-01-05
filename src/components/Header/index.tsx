import React, { FC } from "react";
import { HEADER } from "../../config/data";
import {
  HeaderBar,
  HeaderContainer,
  HeaderLogo,
  HeaderLogoImage
} from "./index.styled";

const Header: FC = () => {
  return (
    <HeaderBar id="header">
      <HeaderContainer className="container container__fluid">
        <HeaderLogo id="header__logo">
          <HeaderLogoImage src={HEADER.LOGO} alt="" />
        </HeaderLogo>
      </HeaderContainer>
    </HeaderBar>
  );
};

export default Header;
