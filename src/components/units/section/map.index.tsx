import * as S from "./map.style";

export default function ListMap(props: any) {
  return (
    <S.BookList key={props.index}>
      <S.BookImgBox>
        <S.BookImg src={props.el.imgUrl} />
      </S.BookImgBox>
      <S.BookInfoWrap>
        <S.BookName>{props.el.name}</S.BookName>
        <S.BookPrice>{props.el.price}</S.BookPrice>
      </S.BookInfoWrap>
    </S.BookList>
  );
}
