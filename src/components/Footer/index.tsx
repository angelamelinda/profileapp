import React, { FC } from "react";
import { FOOTER } from "../../config/data";

const Footer: FC = () => {
  return (
    <div id="footer">
      <div className="container">
        <div id="footer__copyright">
          <p>{FOOTER.COPYRIGHT}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
