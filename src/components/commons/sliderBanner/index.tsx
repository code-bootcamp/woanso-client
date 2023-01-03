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
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.SliderWrap {...settings}>
          {/* {new Array(3).fill(1).map((_, index) => {
            <S.SliderWrap key={index + 1}>
              <S.SliderImg src={`/sliderBanner/0${index + 1}.jpg`} />
            </S.SliderWrap>;
          })} */}
          <S.SliderImgWrap>
            <S.SliderImg src={`/sliderBanner/01.jpg`} />
          </S.SliderImgWrap>
          <S.SliderImgWrap>
            <S.SliderImg src="/sliderBanner/02.jpg" />
          </S.SliderImgWrap>
          <S.SliderImgWrap>
            <S.SliderImg src="/sliderBanner/03.jpg" />
          </S.SliderImgWrap>
        </S.SliderWrap>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
