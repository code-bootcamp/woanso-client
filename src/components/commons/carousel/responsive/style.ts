import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

export const CustomCarousel = styled(Carousel)`
  .thumbs {
    display: none;
  }
  .control-arrow {
    opacity: 0;
  }
`;

export const Img = styled.img`
  object-fit: cover;
`;
