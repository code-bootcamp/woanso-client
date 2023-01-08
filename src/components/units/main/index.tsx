import BestBooks from "../../commons/bestbooks";
import FaqMini from "../../commons/faqmini";
import Picks from "../../commons/picks/style";
import Recommand from "../../commons/recommand";
import SideMenuBar from "../../commons/sidemenubar";
import SignupBenefit from "../../commons/signupbenefit";
import SliderBanner from "../../commons/sliderBanner";
import * as S from "./style";

export default function Main() {
  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <SliderBanner />
        <Recommand />
        <Picks />
        <BestBooks />
        <FaqMini />
        <SignupBenefit />
        {/* <SideMenuBar /> */}
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
