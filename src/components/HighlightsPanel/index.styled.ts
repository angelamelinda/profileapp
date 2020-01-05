import styled from "styled-components";
import { COLOR, FONT_WEIGHT } from "../../constants";

export const HightlightsPanelWrapper = styled.div`
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: ${COLOR.SMOKE_GREY};
`;

export const HightlightsPanelTopContainer = styled.div`
  text-align: center;
`;

export const HightlightsPanelTitle = styled.h2`
  font-size: calc(32 / 16 * 1rem);
  font-weight: ${FONT_WEIGHT.REGULAR};
  margin-bottom: 18px;
`;

export const HightlightsPanelContent = styled.p`
  line-height: 1.5;
`;

export const HightlightsPanelBottomContainer = styled.div`
  margin-top: 60px;
`;

export const HightlightsPanelRow = styled.div``;
