import styled from "styled-components";
import { HERO } from "../../config/data";
import { COLOR, FONT_WEIGHT, MEDIA_SCREEN } from "../../constants";

export const HeroWrapper = styled.div`
  background-image: url(${HERO.IMAGE});
  background-size: cover;
	background-position: center center;
	color: ${COLOR.WHITE}
  position: relative;

  :after {
    content: "";
    position: absolute;
    background-color: ${COLOR.DARK_BLUE};
    opacity: 0.65;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;

export const HeroContainer = styled.div``;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding-top: 195px;
  padding-bottom: 165px;

  @media (max-width: ${MEDIA_SCREEN.SMALL}px) {
    padding-top: 145px;
    padding-bottom: 100px;
  }
`;

export const HeroHeadline = styled.h1`
  font-size: calc(32 / 16 * 1rem);
  margin-bottom: 10px;
  font-weight: ${FONT_WEIGHT.REGULAR};
`;

export const HeroTitle = styled.h2`
  font-size: calc(26 / 16 * 1rem);
  margin-bottom: 15px;
  font-weight: ${FONT_WEIGHT.BOLD};
`;

export const HeroSubTitle = styled.div`
  font-size: calc(18 / 16 * 1rem);
`;

export const HeroSubTitleItem = styled.p`
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

export const HeroButtonWrapper = styled.div`
  margin-top: 32px;
`;

export const HeroButton = styled.button`
  background: transparent;
  border: 1px solid ${COLOR.WHITE};
  border-radius: 4px;
  cursor: pointer;
  color: ${COLOR.WHITE};
  margin-left: auto;
  margin-right: auto;
  height: 56px;
  width: 100%;
  max-width: 226px;
  text-transform: uppercase;
  font-weight: ${FONT_WEIGHT.BOLD};
  font-size: calc(16 / 16 * 1rem);
  letter-spacing: -0.8px;
  line-height: 54px;
  transition: all 0.5s ease;

  &:hover {
    background: ${COLOR.WHITE};
    color: ${COLOR.DARK_BLUE};
  }
`;
