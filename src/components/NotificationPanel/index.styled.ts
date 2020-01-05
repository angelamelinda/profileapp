import styled from "styled-components";
import { COLOR, MEDIA_SCREEN } from "../../constants";

export const NotificationPanelWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  z-index: 100;
  width: 100%;
  background: ${COLOR.WHITE};
  transition: all 0.5s ease;
  position: sticky;
  top: 0;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);

  &.notification--not-active {
    display: none;
  }
`;

export const NotificationPanelContainer = styled.div``;

export const NotificationPanelContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${MEDIA_SCREEN.SMALL}px) {
    flex-wrap: wrap;
  }
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
  margin-left: 10px;

  @media (max-width: ${MEDIA_SCREEN.SMALL}px) {
    margin-left: 0;
    margin-top: 10px;
  }
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
