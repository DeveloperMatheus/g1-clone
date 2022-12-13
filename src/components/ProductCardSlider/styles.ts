import styled from 'styled-components'

export const Wrapper = styled.section`
  .slick-track,
  .slick-list {
    display: flex;
  }
  .slick-slide {
    margin: 0 -25px 0px 75px;
  }

  @media screen and (max-width: 420px) {
    .slick-slide {
      margin: 15px -25px 15px 30px;
    }
  }
  .slick-slide > div {
    margin: 0;
    flex: 1 0 auto;
    height: 100%;
  }
  .slick-list {
    margin: 30px 0 0 0;
  }

  .slick-prev,
  .slick-next {
    display: block;
    color: black;
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: 1.8rem;
    height: 1.8rem;
    padding: 0;
    transform: translate(0, -50%);
    z-index: 10;
  }
  .slick-prev {
    left: 0px;
  }
  .slick-next {
    right: 0px;
  }

  .slick-dots {
    list-style: none;
    margin-top: 15px;
    display: flex !important;
    flex-direction: row !important;
    justify-content: center !important;
  }

  .slick-dots li {
    cursor: pointer;
  }

  .slick-dots .slick-active div {
    background-color: #006132;
  }

  @media screen and (min-width: 1920px) {
    .slick-prev {
      left: -55px;
    }
    .slick-next {
      right: -55px;
    }
  }
  .slick-prev.slick-disabled,
  .slick-next.slick-disabled {
    visibility: hidden;
  }
`
