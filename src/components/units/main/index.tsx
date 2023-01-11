import BestBooks from "../../commons/bestbooks";
import CommunityNewList from "../community/newlist";
import FaqMini from "../../commons/faqmini";
import Picks from "../../commons/picks";
import Recommand from "../../commons/recommand";
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
        <CommunityNewList />
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
