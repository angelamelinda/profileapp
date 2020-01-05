import React, { FC } from "react";
import {
  HeroWrapper,
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubTitle,
  HeroSubTitleItem,
  HeroButtonWrapper,
  HeroButton,
  HeroHeadline
} from "./index.styled";
import { HERO, PROFILE_INFORMATION } from "../../config/data";

const Hero: FC = () => {
  return (
    <HeroWrapper id="hero">
      <HeroContainer className="container">
        <HeroContent id="hero__content">
          <HeroHeadline id="hero__headline">{HERO.HEADLINE}</HeroHeadline>

          <HeroTitle id="hero__title">{PROFILE_INFORMATION.JOB}</HeroTitle>

          <HeroSubTitle id="hero__subtitle">
            <HeroSubTitleItem className="hero__subtitle__line">
              {HERO.SUBTITLE.LINE_1}
            </HeroSubTitleItem>
            <HeroSubTitleItem className="hero__subtitle__line">
              {HERO.SUBTITLE.LINE_2}
            </HeroSubTitleItem>
          </HeroSubTitle>

          <HeroButtonWrapper id="hero__cta">
            <HeroButton id="hero__button" className="button">
              {HERO.BUTTON}
            </HeroButton>
          </HeroButtonWrapper>
        </HeroContent>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
