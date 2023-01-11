import styled from "@emotion/styled";
import Slider from "react-slick";

export const OuterWrap = styled.div``;

export const InnerWrap = styled.div`
  padding-top: 80px;
`;

export const SliderImgWrap = styled.div`
  width: 100%;
`;

export const SliderImg = styled.img`
  width: 100%;
`;

export const SliderWrap = styled(Slider)`
  .slick-initialized {
    position: relative;
  }

  .slick-prev:before,
  .slick-next:before {
    color: white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .slick-prev {
    z-index: 10;
  }
  .slick-prev:before {
    left: 50px;
  }

  .slick-next:before {
    right: 50px;
  }
`;
