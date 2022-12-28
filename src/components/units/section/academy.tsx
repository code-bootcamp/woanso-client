import * as S from "./map.style";
import { academyDatas } from "./detas";

export default function Academy() {
  return (
    <>
      {academyDatas.map((el, index) => (
        <S.BookList key={index}>
          <S.BookImgBox>
            <S.BookImg src={el.imgUrl} />
          </S.BookImgBox>
          <S.BookInfoWrap>
            <S.BookName>{el.name}</S.BookName>
            <S.BookPrice>{el.price}</S.BookPrice>
          </S.BookInfoWrap>
        </S.BookList>
      ))}
    </>
  );
}
