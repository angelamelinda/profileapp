import styled from "styled-components";
import { CONTAINERS, COLOR, FONT_WEIGHT } from "../../constants";

export const NewsletterPanelWrapper = styled.div`
  padding: 50px 30px 30px;
  max-width: ${CONTAINERS.PANEL_SIZE}px;
  background-color: ${COLOR.BLUE + "e6"};
  color: ${COLOR.WHITE};
  position: fixed;
  bottom: 0;
  z-index: 99;

  &.newsletter--not-active {
    display: none;
  }
`;

export const NewsletterPanelCloseButton = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: calc(14 / 16 * 1rem);
  cursor: pointer;
`;

export const NewsletterPanelTitle = styled.div`
  font-size: calc(24 / 16 * 1rem);
  margin-bottom: 10px;
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const NewsletterPanelText = styled.p`
  line-height: 1.5;
  margin-bottom: 25px;
`;

export const NewsletterPanelForm = styled.div`
  display: flex;
`;

export const NewsletterPanelFormInput = styled.input`
  width: 100%;
`;

export const NewsletterPanelFormButtonWrapper = styled.div`
  width: 100%;
  max-width: 115px;
  margin-left: 10px;
`;

export const NewsletterPanelFormButton = styled.button`
  height: 30px;
  background-color: ${COLOR.ORANGE};
  color: ${COLOR.WHITE};
  border: 0;
  font-weight: ${FONT_WEIGHT.BOLD};
  font-size: calc(14 / 16 * 1rem);

  &:hover {
    background-color: ${COLOR.DARK_ORANGE};
  }
`;
