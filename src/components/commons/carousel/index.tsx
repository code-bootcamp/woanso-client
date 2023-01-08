import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./style";
import { useRouter } from "next/router";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

export default function BookSliderTop() {
  const router = useRouter();
  const onClickMoveToRents = () => {
    router.push("/rents");
  };

  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.TextWrap>
          <S.Text>
            {/* 너와 함께했던 모든 시간이 그리웠어 */}
            그때 그 시절 만화책 다시보고 싶나요?
            <br />
            완소와 함께해요
            <br />
            \(^0^)/
          </S.Text>
        </S.TextWrap>
        <div>
          <Slider {...settings}>
            {new Array(10).fill(0).map((el, index) => (
              <div key={index}>
                <S.SliderImg src={`item${index + 1}.png`} />
              </div>
            ))}
          </Slider>
        </div>
        <S.AddmoreBtnWrap>
          <S.AddMoreBtn onClick={onClickMoveToRents}>더 보기</S.AddMoreBtn>
        </S.AddmoreBtnWrap>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
