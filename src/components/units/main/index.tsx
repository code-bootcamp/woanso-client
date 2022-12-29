import BestBooks from "../../commons/bestbooks";
import { BookSliderTop } from "../../commons/carousel";
import FaqMini from "../../commons/faqmini";
import KakaoAsk from "../../commons/kakaoask";
import Picks from "../../commons/picks/style";
import Recommand from "../../commons/recommand";
import SignupBenefit from "../../commons/signupbenefit";

import * as S from "./style";

export default function Main() {
  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <BookSliderTop />
        <Recommand />
        <Picks />
        <BestBooks />
        <FaqMini />
        <SignupBenefit />
        <KakaoAsk />
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
