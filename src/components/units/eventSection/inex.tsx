import { useRouter } from "next/router";
import * as S from "./style";

export default function EventSection() {
  const router = useRouter();

  const onCLickEvent = () => {
    void router.push('/event/event1')
  }

  const onCLickEvent2 = () => {
    void router.push('/event/event2')
  }

  const onCLickEvent3 = () => {
    void router.push('/event/event3')
  }

  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.EventsWrap>
          <S.EventCard onClick={onCLickEvent}>
            <S.EventCardInnerWrap>
              <S.EventImgBox>
                <S.EventImg src="/event/001.png" />
              </S.EventImgBox>
            </S.EventCardInnerWrap>
          </S.EventCard>

          <S.EventCard onClick={onCLickEvent2}>
            <S.EventCardInnerWrap>
              <S.EventImgBox>
                <S.EventImg src="/event/002.png" />
              </S.EventImgBox>
            </S.EventCardInnerWrap>
          </S.EventCard>

          <S.EventCard onClick={onCLickEvent3}>
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
