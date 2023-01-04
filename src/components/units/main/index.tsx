import BestBooks from "../../commons/bestbooks";
import BookSliderTop from "../../commons/carousel";
import FaqMini from "../../commons/faqmini";
import Picks from "../../commons/picks/style";
import Recommand from "../../commons/recommand";
import SideMenuBar from "../../commons/sidemenubar";
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
        <SideMenuBar />
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
