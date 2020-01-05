import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  HightlightsItemColumn,
  HightlightsItemWrapper,
  HightlightsItemTop,
  HightlightsItemTitle,
  HightlightsItemIcon,
  HightlightsItemBottom,
  HightlightsItemDescription
} from "./index.styled";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IHightlightsItem {
  title: string;
  icon: string;
  description: string;
}

const HighlightsItem: FC<IHightlightsItem> = ({ title, icon, description }) => {
  return (
    <HightlightsItemColumn className="column hightlight__column">
      <HightlightsItemWrapper className="hightlight__wrapper">
        <HightlightsItemTop>
          <HightlightsItemTitle className="hightlight__title">
            {title}
          </HightlightsItemTitle>
          <HightlightsItemIcon className="hightlight__icon">
            <FontAwesomeIcon
              icon={icon as IconProp}
              className="highlight__icon-svg"
            />
          </HightlightsItemIcon>
        </HightlightsItemTop>
        <HightlightsItemBottom>
          <HightlightsItemDescription className="hightlight__description">
            {description}
          </HightlightsItemDescription>
        </HightlightsItemBottom>
      </HightlightsItemWrapper>
    </HightlightsItemColumn>
  );
};

export default HighlightsItem;
