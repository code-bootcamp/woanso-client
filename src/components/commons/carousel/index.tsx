import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderImg } from "./style";

export class BookSliderTop extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div>
        <Slider {...settings}>
          {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
            .fill(0)
            .map((el, index) => (
              <div key={el.index}>
                <SliderImg src={`item${index + 1}.png`} />
              </div>
            ))}
        </Slider>
      </div>
    );
  }
}

export class BookSliderBottom extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      // centerMode: true,
      // centerPadding: "40px",
    };

    return (
      <div style={{ paddingLeft: "70px" }}>
        <Slider {...settings}>
          {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
            .fill(0)
            .map((el, index) => (
              <div key={el.index}>
                <SliderImg src={`item${index + 1}.png`} />
              </div>
            ))}
        </Slider>
      </div>
    );
  }
}
