import * as S from "./map.style";

export default function ListMap(props: any) {
  return (
    <S.BookList key={props.index}>
      <S.BookImgBox>
        <S.BookInfoWrap>
          <S.BookName>{props.index + 1}</S.BookName>
        </S.BookInfoWrap>
        <S.BookImg src={props.el.imgUrl} />
      </S.BookImgBox>
    </S.BookList>
  );
}
