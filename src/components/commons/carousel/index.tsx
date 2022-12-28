import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./style";

export class BookSliderTop extends Component {
  render() {
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
    return (
      <S.OuterWrap>
        <S.InnerWrap>
          <S.AddmoreBtnWrap>
            <S.AddMoreBtn>더 보기</S.AddMoreBtn>
          </S.AddmoreBtnWrap>
          <div>
            <Slider {...settings}>
              {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
                .fill(0)
                .map((el, index) => (
                  <div key={el.index}>
                    <S.SliderImg src={`item${index + 1}.png`} />
                  </div>
                ))}
            </Slider>
          </div>
        </S.InnerWrap>
      </S.OuterWrap>
    );
  }
}

// export class BookSliderBottom extends Component {
//   render() {
//     const settings = {
//       dots: false,
//       infinite: true,
//       slidesToShow: 6,
//       slidesToScroll: 1,
//       autoplay: true,
//       speed: 2000,
//       autoplaySpeed: 2000,
//       cssEase: "linear",
//       // centerMode: true,
//       // centerPadding: "40px",
//     };

//     return (
//       <div style={{ paddingLeft: "70px" }}>
//         <Slider {...settings}>
//           {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
//             .fill(0)
//             .map((el, index) => (
//               <div key={el.index}>
//                 <S.SliderImg src={`item${index + 1}.png`} />
//               </div>
//             ))}
//         </Slider>
//       </div>
//     );
//   }
// }
