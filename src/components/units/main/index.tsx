import BestSellingBooks from "../../commons/bestsell";
import { BookSliderTop, BookSliderBottom } from "../../commons/carousel";
import Picks from "../../commons/picks/style";
import Recommand from "../../commons/recommand";

import * as S from "./style";

export default function Main() {
  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <BookSliderTop />
        <BestSellingBooks />
        <Picks />
        <Recommand />

        {/* <S.Title>Weekly Hot Pick</S.Title> */}
        {/* <S.WeeklyHotPicksWrap>
          {Array.from([1, 2, 3, 4, 5, 6, 7])
            .fill("채우기")
            .map((el, index) => (
              <S.ItemWrap key={el.index}>
                <S.SpecialLabel>순정</S.SpecialLabel>
                <S.ItemImg src="item6.png" />
                <S.ItemTextsWrap>
                  <S.ItemName>만화제목입니다</S.ItemName>
                  <S.ItemPrice>50,000원</S.ItemPrice>
                </S.ItemTextsWrap>
              </S.ItemWrap>
            ))}
        </S.WeeklyHotPicksWrap> */}
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
