import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CustomCarousel, Img } from "./style";

const settings = {
  autoPlay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  centerMode: true,
};

export default function HomeCarousel() {
  return (
    <CustomCarousel {...settings}>
      <div>
        <Img src="banner.jpg" />
      </div>
      <div>
        <Img src="banner2.jpg" />
      </div>
    </CustomCarousel>
  );
}
