import * as S from "./styles";

export default function Recommand() {
  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.TitleWrapper>
          <S.Title>장르별</S.Title>
          <S.SubTitle>추천</S.SubTitle>
        </S.TitleWrapper>
        <S.NavWrapper>
          <S.Nav style={{ color: "#77170d" }}>순정</S.Nav>
          <S.Nav>판타지</S.Nav>
          <S.Nav>무협</S.Nav>
          <S.Nav>코믹</S.Nav>
          <S.Nav>추리</S.Nav>
        </S.NavWrapper>
        <S.Line />
        <S.BookWrapper>
          <S.BookSubWrapper>
            <S.BookImg src="/item1.png"></S.BookImg>
            <S.BookTitle>우리가 명함이 없지 일을 안 했냐</S.BookTitle>
            <S.BookPrice>13,500원</S.BookPrice>
          </S.BookSubWrapper>
          <S.BookSubWrapper>
            <S.BookImg src="/item2.png"></S.BookImg>
            <S.BookTitle>너를 빛나게 할 일들이 기다리고 있어</S.BookTitle>
            <S.BookPrice>15,200원</S.BookPrice>
          </S.BookSubWrapper>
          <S.BookSubWrapper>
            <S.BookImg src="/item3.png"></S.BookImg>
            <S.BookTitle>쿼런틴</S.BookTitle>
            <S.BookPrice>14,400원</S.BookPrice>
          </S.BookSubWrapper>
          <S.BookSubWrapper>
            <S.BookImg src="/item4.png"></S.BookImg>
            <S.BookTitle>어른들의 거짓된 삶</S.BookTitle>
            <S.BookPrice>15,300원</S.BookPrice>
          </S.BookSubWrapper>
          <S.BookSubWrapper>
            <S.BookImg src="/item5.png"></S.BookImg>
            <S.BookTitle>크리스마스 인터내셔널</S.BookTitle>
            <S.BookPrice>18,900원</S.BookPrice>
          </S.BookSubWrapper>
          <S.BookSubWrapper>
            <S.BookImg src="/item6.png"></S.BookImg>
            <S.BookTitle>안젤리크</S.BookTitle>
            <S.BookPrice>16,200원</S.BookPrice>
          </S.BookSubWrapper>
        </S.BookWrapper>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
