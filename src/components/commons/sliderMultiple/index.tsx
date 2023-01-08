import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image, Wrapper } from "./style";

export default function SliderMultiple() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <Image src="/sliderMultiple/01.jpg" />
        </div>
        <div>
          <Image src="/sliderMultiple/02.jpg" />
        </div>
        <div>
          <Image src="/sliderMultiple/03.jpg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
