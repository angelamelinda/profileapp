import React, { FC } from "react";
import { FOOTER } from "../../config/data";
import {
  FooterBar,
  FooterContainer,
  FooterContent,
  FooterCopyright
} from "./index.styled";

const Footer: FC = () => {
  return (
    <FooterBar id="footer">
      <FooterContainer className="container">
        <FooterContent id="footer__content">
          <FooterCopyright id="footer__content">
            {FOOTER.COPYRIGHT}
          </FooterCopyright>
        </FooterContent>
      </FooterContainer>
    </FooterBar>
  );
};

export default Footer;
