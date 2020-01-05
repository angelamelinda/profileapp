import React, { FC } from "react";
import {
  HightlightsPanelWrapper,
  HightlightsPanelTopContainer,
  HightlightsPanelTitle,
  HightlightsPanelContent,
  HightlightsPanelBottomContainer,
  HightlightsPanelRow
} from "./index.styled";
import { HIGHLIGHTS_PANEL } from "../../config/data";
import HighlightsItem from "../HighlightsItem";

const HighlightsPanel: FC = () => {
  return (
    <HightlightsPanelWrapper id="hightlight-panel">
      <HightlightsPanelTopContainer
        id="hightlight-panel__top-container"
        className="container">
        <HightlightsPanelTitle id="hightlight-panel__title">
          {HIGHLIGHTS_PANEL.TITLE}
        </HightlightsPanelTitle>
        <HightlightsPanelContent id="hightlight-panel__content">
          {HIGHLIGHTS_PANEL.SUBTITLE}
        </HightlightsPanelContent>
      </HightlightsPanelTopContainer>
      <HightlightsPanelBottomContainer
        id="hightlight-panel__bottom-container"
        className="container container__fluid">
        <HightlightsPanelRow id="highlight-panel__row" className="row">
          {HIGHLIGHTS_PANEL.JOB_DESCRIPTION.map((desc, idx) => (
            <HighlightsItem
              key={idx}
              title={desc.TITLE}
              icon={desc.ICON}
              description={desc.CONTENT}
            />
          ))}
        </HightlightsPanelRow>
      </HightlightsPanelBottomContainer>
    </HightlightsPanelWrapper>
  );
};

export default HighlightsPanel;
