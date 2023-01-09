import * as S from "./map.style";

export default function ListMap({ el }: any) {
  return (
    // <S.BookWrapper>
    <S.BookSubWrapper>
      <S.BookImg src="/"></S.BookImg>
      <S.BookInfo>
        <S.BookTitle>{el.titke}</S.BookTitle>
        <S.BookInfoSub>
          <S.BookAuthor>{el.author}</S.BookAuthor>
          <S.BookPrice>{el.rentalFee}원</S.BookPrice>
        </S.BookInfoSub>
      </S.BookInfo>
    </S.BookSubWrapper>
    // </S.BookWrapper>
  );
}
