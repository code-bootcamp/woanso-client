import CommunityNewList from "../community/newlist";
import Picks from "../../commons/picks";
import Recommand from "../../commons/recommand";
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
