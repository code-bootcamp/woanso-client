import * as S from "./styles";

export default function Picks() {
  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <S.LeftTitle>Picks</S.LeftTitle>
        <S.LeftContents>
          <S.ContentsTitle>발견의 기쁨을 선물합니다.</S.ContentsTitle>
          <S.ContentsSubTitle>
            취향을 분석해 꼭 맞는 책을 추천해드릴게요!
          </S.ContentsSubTitle>
        </S.LeftContents>
        <S.LeftButton>로그인하고 더 많은 추천 받기</S.LeftButton>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.RightContents>
          <S.RightCard>
            <S.CardImage src="/test1.png"></S.CardImage>
            <S.CardTitle>종합추천</S.CardTitle>
            <S.CardContents>
              고객님의 취향을 분석해 이틀밤낮 고민하여 고른 책을 확인하세요.
            </S.CardContents>
          </S.RightCard>
          <S.RightCard>
            <S.CardImage src="/test2.png"></S.CardImage>
            <S.CardTitle>작가 Picks</S.CardTitle>
            <S.CardContents>
              픽스를 통해 고객님의 선호 작가와 비슷한 새로운 작가를 만나보세요!
            </S.CardContents>
          </S.RightCard>
          <S.RightCard>
            <S.CardImage src="/test3.png"></S.CardImage>
            <S.CardTitle>내 마음대로 Picks</S.CardTitle>
            <S.CardContents>
              오늘은 내 맘대로 이 책 한 권 어때요?
            </S.CardContents>
          </S.RightCard>
          <S.RightCard>
            <S.CardImage src="/test4.png"></S.CardImage>
            <S.CardTitle>소울메이트 Picks</S.CardTitle>
            <S.CardContents>
              고객님과 취향이 비슷한 소울메이트들은 어떤 책을 읽고 있을까요?
            </S.CardContents>
          </S.RightCard>
        </S.RightContents>
      </S.RightWrapper>
    </S.Wrapper>
  );
}
