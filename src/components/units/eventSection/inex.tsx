import * as S from "./style";

export default function EventSection() {
  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.PageTitle>
          Special<S.Point> Event</S.Point>
        </S.PageTitle>

        <S.EventsWrap>
          <S.EventCard>
            <S.EventCardInnerWrap>
              <S.EventTitle>
                1월 말까지! 5만원 이상 대여시 선물 증정
              </S.EventTitle>

              <S.EventImgBox>
                <S.EventImg src="/event/event01.jpg" />
              </S.EventImgBox>

              <S.EventBtn>대여하러 가기</S.EventBtn>
            </S.EventCardInnerWrap>
          </S.EventCard>

          <S.EventCard>
            <S.EventCardInnerWrap>
              <S.EventTitle>친구 추전하고 2000 포인트 받기!</S.EventTitle>

              <S.EventImgBox>
                <S.EventImg src="/event/event04.jpg" />
              </S.EventImgBox>

              <S.EventBtn>친구 추천하기</S.EventBtn>
            </S.EventCardInnerWrap>
          </S.EventCard>

          <S.EventCard>
            <S.EventCardInnerWrap>
              <S.EventTitle>후기 남기면 1000 포인트 증정</S.EventTitle>

              <S.EventImgBox>
                <S.EventImg src="/event/event02.jpg" />
              </S.EventImgBox>

              <S.EventBtn>후기 남기러 가기</S.EventBtn>
            </S.EventCardInnerWrap>
          </S.EventCard>

          <S.EventCard>
            <S.EventCardInnerWrap>
              <S.EventTitle>
                오픈 이벤트! 신규 회원가입시 3000 포인트 증정
              </S.EventTitle>

              <S.EventImgBox>
                <S.EventImg src="/event/event03.jpg" />
              </S.EventImgBox>

              <S.EventBtn>회원 가입하러 가기</S.EventBtn>
            </S.EventCardInnerWrap>
          </S.EventCard>
        </S.EventsWrap>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
