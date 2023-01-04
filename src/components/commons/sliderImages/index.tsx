import * as S from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderImages() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
  };

  const settings2 = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    rtl: true,
  };

  return (
    <S.InnerWrap>
      <S.SliderWrap>
        <Slider {...settings}>
          <S.ImageWrap>
            <S.Image src="/sliderImages/01.jpeg" />
          </S.ImageWrap>
          <S.ImageWrap>
            <S.Image src="/sliderImages/02.jpeg" />
          </S.ImageWrap>
          <S.ImageWrap>
            <S.Image src="/sliderImages/03.jpeg" />
          </S.ImageWrap>
          <S.ImageWrap>
            <S.Image src="/sliderImages/04.jpeg" />
          </S.ImageWrap>
        </Slider>
      </S.SliderWrap>
      <S.SliderWrap>
        <Slider {...settings2}>
          <S.ImageWrap>
            <S.Image src="/sliderImages/05.jpeg" />
          </S.ImageWrap>
          <S.ImageWrap>
            <S.Image src="/sliderImages/06.jpeg" />
          </S.ImageWrap>
          <S.ImageWrap>
            <S.Image src="/sliderImages/07.jpeg" />
          </S.ImageWrap>
          <S.ImageWrap>
            <S.Image src="/sliderImages/08.jpeg" />
          </S.ImageWrap>
        </Slider>
      </S.SliderWrap>
      <S.SliderWrap>
        <Slider {...settings}>
          <S.ImageWrap>
            <S.Image src="/sliderImages/09.jpeg" />
          </S.ImageWrap>
          <S.ImageWrap>
            <S.Image src="/sliderImages/10.jpeg" />
          </S.ImageWrap>
          <S.ImageWrap>
            <S.Image src="/sliderImages/11.jpeg" />
          </S.ImageWrap>
          <S.ImageWrap>
            <S.Image src="/sliderImages/12.jpeg" />
          </S.ImageWrap>
        </Slider>
      </S.SliderWrap>
    </S.InnerWrap>
  );
}
