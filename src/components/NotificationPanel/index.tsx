import React, { FC } from "react";
import {
  NotificationPanelWrapper,
  NotificationPanelContainer,
  NotificationPanelContent,
  NotificationPanelButtonWrapper,
  NotificationPanelButton,
  NotificationPanelText
} from "./index.styled";
import { NOTIFICATION_PANEL } from "../../config/data";

interface INotificationPanel {
  isLeaving: boolean;
  isActive: boolean;
  handleClickNotification: () => void;
}

const NotificationPanel: FC<INotificationPanel> = ({
  handleClickNotification,
  isLeaving,
  isActive
}) => {
  return (
    <NotificationPanelWrapper
      id="notification-panel"
      className={`${isLeaving ? "slideInUp animated" : ""} 
			 ${isActive ? "notification--active" : "notification--not-active"} `}>
      <NotificationPanelContainer
        id="notification-panel__container"
        className="container">
        <NotificationPanelContent id="notification-panel__content">
          <NotificationPanelText id="notification-panel__text">
            By accessing and using this website, you acknowledge that you have
            read and understand our{" "}
            <a href="http://google.com">Cookie Policy</a>,{" "}
            <a href="http://google.com">Privacy Policy</a>, and our{" "}
            <a href="http://google.com">Terms of Service</a>.
          </NotificationPanelText>
          <NotificationPanelButtonWrapper>
            <NotificationPanelButton
              className="button"
              onClick={handleClickNotification}>
              {NOTIFICATION_PANEL.BUTTON}
            </NotificationPanelButton>
          </NotificationPanelButtonWrapper>
        </NotificationPanelContent>
      </NotificationPanelContainer>
    </NotificationPanelWrapper>
  );
};

export default NotificationPanel;
