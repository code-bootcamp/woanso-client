import * as S from "./map.style";

export default function ListMap(props: any) {
  return (
    <S.BookList key={props.index}>
      <S.BookImgBox>
        <S.BookImg src={props.el.imgUrl} />
        <S.BookInfoWrap>
          <S.BookName>{props.el.name}</S.BookName>
        </S.BookInfoWrap>
      </S.BookImgBox>
    </S.BookList>
  );
}
