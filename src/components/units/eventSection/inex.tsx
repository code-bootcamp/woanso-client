import * as S from "./style";

export default function EventSection() {
  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.EventsWrap>
          <S.EventCard>
            <S.EventCardInnerWrap>
              <S.EventImgBox>
                <S.EventImg src="/event/001.png" />
              </S.EventImgBox>
            </S.EventCardInnerWrap>
          </S.EventCard>

          <S.EventCard>
            <S.EventCardInnerWrap>
              <S.EventImgBox>
                <S.EventImg src="/event/002.png" />
              </S.EventImgBox>
            </S.EventCardInnerWrap>
          </S.EventCard>

          <S.EventCard>
            <S.EventCardInnerWrap>
              <S.EventImgBox>
                <S.EventImg src="/event/003.png" />
              </S.EventImgBox>
            </S.EventCardInnerWrap>
          </S.EventCard>
        </S.EventsWrap>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
