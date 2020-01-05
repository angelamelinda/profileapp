import styled from "styled-components";
import { COLOR } from "../../constants";

export const NotificationPanelWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  z-index: 100;
  width: 100%;
  background: ${COLOR.WHITE};
  transition: all 0.5s ease;
  position: sticky;
  top: 0;

  &.notification--not-active {
    display: none;
  }
`;

export const NotificationPanelContainer = styled.div``;

export const NotificationPanelContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NotificationPanelText = styled.div`
  a {
		color: ${COLOR.BLUE}
		text-decoration: none;
		transition: all .5s ease;
		
		&:hover {
			color: ${COLOR.ORANGE}
		}
  }
`;

export const NotificationPanelButtonWrapper = styled.div`
  width: 100%;
  max-width: 80px;
`;

export const NotificationPanelButton = styled.button`
  background-color: ${COLOR.BLUE};
  color: ${COLOR.WHITE};
  height: 40px;
  line-height: 40px;
  border: 0;

  &:hover {
    background-color: ${COLOR.ORANGE};
  }
`;
