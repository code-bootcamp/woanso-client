import * as S from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderBanner() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.SliderWrap {...settings}>
          <S.SliderImgWrap>
            <S.SliderImg src="/mainBanner/001.png" />
          </S.SliderImgWrap>
          <S.SliderImgWrap>
            <S.SliderImg src="/mainBanner/002.png" />
          </S.SliderImgWrap>
        </S.SliderWrap>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
