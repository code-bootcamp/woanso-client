import * as S from "./map.style";

export default function ListMap(props: any) {
  return (
    // <S.BookWrapper>
    <S.BookSubWrapper key={props.index}>
      <S.BookImg src={props.el.imgUrl}></S.BookImg>
      <S.BookInfo>
        <S.BookTitle>우리가 명함이 없지 일을 </S.BookTitle>
        <S.BookInfoSub>
          <S.BookAuthor>작가이름</S.BookAuthor>
          <S.BookPrice>13,500원</S.BookPrice>
        </S.BookInfoSub>
      </S.BookInfo>
    </S.BookSubWrapper>
    // </S.BookWrapper>
  );
}
