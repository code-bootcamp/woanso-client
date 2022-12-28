import BestSellingBooks from "../../commons/bestsell";
import { BookSliderTop } from "../../commons/carousel";
import FaqMini from "../../commons/faqmini";
import Picks from "../../commons/picks/style";
import Recommand from "../../commons/recommand";

import * as S from "./style";

export default function Main() {
  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <BookSliderTop />
        <Recommand />
        <Picks />
        <BestSellingBooks />
        <FaqMini />
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
