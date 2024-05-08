import React from "react";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../helpers/constants";

const BottomSection = () => {
  return (
    <BottomSectionWrapper>
      <HeroBanner>
        <img src="/images/image-about-dark.jpg" alt="hero-banner" />
      </HeroBanner>
      <InfoSection>
        <div>
          <h1>ABOUT OUR FURNITURE</h1>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
      </InfoSection>
      <HeroBanner2>
        <img src="/images/image-about-light.jpg" alt="hero-banner" />
      </HeroBanner2>
    </BottomSectionWrapper>
  );
};

const BottomSectionWrapper = styled.section`
  width: 100%;
  height: 33.25vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      flex-direction: column;
      height: auto;
    }
  }
  ${MEDIA_QUERIES.TABLET} {
    & {
      flex-direction: column;
      height: auto;
    }
  }
`;

const HeroBanner = styled.div`
  display: flex;
  flex: 21;
  width: 100%;
  height: 100%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex: 29;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;

  & div {
    margin: 23px 48px;
  }

  & h1 {
    font-size: 16px;
    font-weight: bold;
    line-height: 22px;
    letter-spacing: 6.67px;
    margin-bottom: 16px;
  }

  & p {
    font-size: 16px;
    font-weight: normal;
    line-height: 22px;
    letter-spacing: -0.33px;
    margin-top: 16px;
    color: #a0a0a0;
    text-align: left;
  }

  ${MEDIA_QUERIES.MOBILE} {
    & div {
      margin: 56px 32px;
    }

    & h1 {
      font-size: 14px;
      letter-spacing: 5.83px;
    }
  }

  ${MEDIA_QUERIES.TABLET} {
    & div {
      margin: 56px 32px;
    }
  }
`;

const HeroBanner2 = styled(HeroBanner)`
  flex: 22;
`;
export default BottomSection;
