import styled from "styled-components";
import { COLOR, FONT_WEIGHT, MEDIA_SCREEN } from "../../constants";

export const HightlightsItemColumn = styled.div`
  margin-bottom: 35px;
  flex: 0 0 33.33%;
  max-width: 33.33%;

  @media (min-width: ${MEDIA_SCREEN.SMALL + 1}px) {
    &:nth-last-child(-n + 2) {
      margin-bottom: 0;
    }
  }

  @media (min-width: ${MEDIA_SCREEN.LARGE + 1}px) {
    &:nth-last-child(-n + 3) {
      margin-bottom: 0;
    }
  }

  @media (max-width: ${MEDIA_SCREEN.LARGE}px) {
    margin-bottom: 35px;
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (max-width: ${MEDIA_SCREEN.SMALL}px) {
    flex: 0 0 100%;
    max-width: 100%;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const HightlightsItemWrapper = styled.div`
  padding: 16px;
  border: 1px solid ${COLOR.SILVER_CHALICE};
  height: 100%;
`;

export const HightlightsItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const HightlightsItemTitle = styled.h4`
  font-size: calc(24 / 16 * 1rem);
  font-weight: ${FONT_WEIGHT.REGULAR};
`;

export const HightlightsItemIcon = styled.div`
  .highlight__icon-svg {
    font-size: calc(28 / 16 * 1rem);
    color: ${COLOR.SILVER_CHALICE};
  }
`;

export const HightlightsItemBottom = styled.div``;

export const HightlightsItemDescription = styled.p`
  line-height: 1.5;
`;
