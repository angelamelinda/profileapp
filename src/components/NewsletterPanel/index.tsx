import React, { FC } from "react";
import {
  NewsletterPanelWrapper,
  NewsletterPanelTitle,
  NewsletterPanelText,
  NewsletterPanelForm,
  NewsletterPanelFormInput,
  NewsletterPanelFormButtonWrapper,
  NewsletterPanelFormButton,
  NewsletterPanelCloseButton
} from "./index.styled";
import { NEWSLETTER_PANEL } from "../../config/data";

interface INewsletterPanel {
  handleCloseNewsletter: () => void;
  isActive: boolean;
  isLeaving: boolean;
  isComing: boolean;
}

const NewsletterPanel: FC<INewsletterPanel> = ({
  handleCloseNewsletter,
  isLeaving,
  isActive,
  isComing
}) => {
  return (
    <NewsletterPanelWrapper
      id="newsletter-panel"
      className={`${isLeaving ? "slide__down--disappear animated" : ""} ${
        isComing ? " slide__down--appear animated" : ""
      } ${isActive ? "newsletter--active" : "newsletter--not-active"}`}>
      <NewsletterPanelTitle id="newsletter-panel__title">
        {NEWSLETTER_PANEL.TITLE}
        <NewsletterPanelCloseButton
          id="newsletter-panel__icon"
          onClick={handleCloseNewsletter}>
          x
        </NewsletterPanelCloseButton>
      </NewsletterPanelTitle>
      <NewsletterPanelText id="newsletter-panel__text">
        {NEWSLETTER_PANEL.SUBTITLE}
      </NewsletterPanelText>
      <NewsletterPanelForm id="newsletter-panel__form">
        <NewsletterPanelFormInput id="newsletter-panel__input" />
        <NewsletterPanelFormButtonWrapper>
          <NewsletterPanelFormButton
            id="newsletter-panel__button"
            className="button">
            {NEWSLETTER_PANEL.FORM_CONTACT.BUTTON}
          </NewsletterPanelFormButton>
        </NewsletterPanelFormButtonWrapper>
      </NewsletterPanelForm>
    </NewsletterPanelWrapper>
  );
};

export default NewsletterPanel;
