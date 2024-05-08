import { MEDIA_QUERIES, colorScheme } from "../../helpers/constants";
import styled from "styled-components";

type ArrowBtnProps = {
  prevSlide: () => void;
  nextSlide: () => void;
};

const ArrowBtns = (props: ArrowBtnProps) => {
  return (
    <ArrowBtnWrapper>
      <ArrowButton onClick={props.prevSlide}>
        <img src="/images/icon-angle-left.svg" alt="chevron-left" />
      </ArrowButton>
      <ArrowButton onClick={props.nextSlide}>
        <img src="/images/icon-angle-right.svg" alt="chevron-right" />
      </ArrowButton>
    </ArrowBtnWrapper>
  );
};

const ArrowBtnWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${MEDIA_QUERIES.MOBILE} {
    & {
      right: 0;
      left: auto;
      bottom: 0.5px;
    }
  }
  ${MEDIA_QUERIES.TABLET} {
    & {
      right: 0;
      left: auto;
      bottom: 0.5px;
    }
  }
`;

const ArrowButton = styled.button`
  background-color: ${colorScheme.black};
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;

  & img {
    opacity: 0.7;
  }

  &:hover {
    background-color: ${colorScheme.veryDarkGrey};
  }

  ${MEDIA_QUERIES.MOBILE} {
    & {
      width: 56px;
      height: 56px;
    }

    & img {
      width: 8.4px;
      height: 16.8px;
    }
  }
  ${MEDIA_QUERIES.TABLET} {
    & {
      width: 56px;
      height: 56px;
    }

    & img {
      width: 8.4px;
      height: 16.8px;
    }
  }
`;

export default ArrowBtns;
