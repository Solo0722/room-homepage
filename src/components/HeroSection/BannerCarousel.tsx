import React from "react";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../../helpers/constants";
import ArrowBtns from "./ArrowBtns";

const BannerCarousel = () => {
  const [slides] = React.useState([
    {
      id: 1,
      title: "Discover innovative ways to decorate",
      description:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      image: "/images/desktop-image-hero-1.jpg",
      mobileImage: "/images/mobile-image-hero-1.jpg",
    },
    {
      id: 2,
      title: "We are available all across the globe",
      description:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      image: "/images/desktop-image-hero-2.jpg",
      mobileImage: "/images/mobile-image-hero-2.jpg",
    },
    {
      id: 3,
      title: "Manufactured with the best materials",
      description:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      image: "/images/desktop-image-hero-3.jpg",
      mobileImage: "/images/mobile-image-hero-3.jpg",
    },
  ]);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const prevSlide = () => {
    setCurrentSlide((sl) => (sl === 0 ? slides.length - 1 : sl - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((sl) => (sl === slides.length - 1 ? 0 : sl + 1));
  };

  return (
    <CarouselWrapper>
      <BannerImageWrapper>
        <picture>
          <source
            media="(min-width: 487px)"
            srcSet={slides[currentSlide].image}
          />
          <source
            media="(max-width: 486px)"
            srcSet={slides[currentSlide].mobileImage}
          />
          <img src={slides[currentSlide].image} alt="hero" />
        </picture>
        <div className="arrow-btn-1">
          <ArrowBtns prevSlide={prevSlide} nextSlide={nextSlide} />
        </div>
      </BannerImageWrapper>
      <BannerInfoWrapper>
        <div className="info-wrapper">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].description}</p>
          <button className="shop-btn">
            <span>Shop now</span>
            <img src="/images/icon-arrow.svg" alt="arrow" />
          </button>
        </div>
        <div className="arrow-btn-2">
          <ArrowBtns prevSlide={prevSlide} nextSlide={nextSlide} />
        </div>
      </BannerInfoWrapper>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.section`
  width: 100%;
  height: 66.75vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* position: relative; */

  & .arrow-btn-1 {
    display: none;
  }

  ${MEDIA_QUERIES.MOBILE} {
    & {
      flex-direction: column;
      height: 100%;
    }

    & .arrow-btn-1 {
      display: inline-block;
    }
    & .arrow-btn-2 {
      display: none;
    }
  }
  ${MEDIA_QUERIES.TABLET} {
    & {
      flex-direction: column;
      height: 100%;
    }
    & .arrow-btn-1 {
      display: inline-block;
    }
    & .arrow-btn-2 {
      display: none;
    }
  }
`;

const BannerImageWrapper = styled.div`
  display: flex;
  flex: 7;
  width: 100%;
  height: 100%;
  position: relative;

  & picture {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  & img,
  source {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${MEDIA_QUERIES.MOBILE} {
    & img,
    source {
      height: 360px;
    }
  }
  ${MEDIA_QUERIES.TABLET} {
    & source,
    img {
      height: 360px;
    }
  }
`;
const BannerInfoWrapper = styled.div`
  display: flex;
  flex: 5;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  position: relative;

  & .info-wrapper {
    margin: 56px 100px;
  }

  & h1 {
    font-size: 48px;
    font-weight: bold;
    line-height: auto;
    letter-spacing: -2px;
    text-align: left;
    margin-bottom: 18px;
  }

  & p {
    font-size: 16px;
    font-weight: normal;
    line-height: 22px;
    letter-spacing: -0.33px;
    color: #a0a0a0;
    margin-bottom: 26px;
    text-align: left;
  }

  & .shop-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    outline: none;
  }

  & .shop-btn span {
    text-transform: uppercase;
    font-size: 15px;
    line-height: 16px;
    letter-spacing: 12.5px;
    font-weight: normal;
  }

  & .info-wrapper img {
    margin-left: 30px;
  }

  & .shop-btn:hover {
    cursor: pointer;
    color: #a0a0a0;

    & img {
      opacity: 0.4;
    }
  }

  ${MEDIA_QUERIES.MOBILE} {
    & .info-wrapper {
      margin: 56px 32px;
      height: 100%;
    }

    & h1 {
      font-size: 40px;
      letter-spacing: -1.67px;
    }
  }

  ${MEDIA_QUERIES.TABLET} {
    & .info-wrapper {
      margin: 56px 46px;
    }
  }
`;

export default BannerCarousel;
