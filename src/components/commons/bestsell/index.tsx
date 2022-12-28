import * as S from "./style";

export default function BestSellingBooks() {
  return (
    <>
      <S.OuterWrap>
        <S.InnerWrap>
          <S.ListWrap>
            <S.SectionTitle>가장 핫한 중고 만화</S.SectionTitle>
            <S.MenuListWrap>
              <S.MenuList>로맨스</S.MenuList>
              <S.MenuList>액션</S.MenuList>
              <S.MenuList>학원</S.MenuList>
              <S.MenuList>추리</S.MenuList>
              <S.MenuList>공포</S.MenuList>
            </S.MenuListWrap>
          </S.ListWrap>
          <S.BooksListWrap>
            <S.BookList>
              <S.BookImgBox>
                <S.BookImg src="/item4.png" />
              </S.BookImgBox>
              <S.BookInfoWrap>
                <S.BookName>히로 서클</S.BookName>
                <S.BookPrice>15,550원</S.BookPrice>
              </S.BookInfoWrap>
            </S.BookList>

            <S.BookList>
              <S.BookImgBox>
                <S.BookImg src="/item1.png" />
              </S.BookImgBox>
              <S.BookInfoWrap>
                <S.BookName>순정만화</S.BookName>
                <S.BookPrice>15,550원</S.BookPrice>
              </S.BookInfoWrap>
            </S.BookList>

            <S.BookList>
              <S.BookImgBox>
                <S.BookImg src="/item2.png" />
              </S.BookImgBox>
              <S.BookInfoWrap>
                <S.BookName>어쩌고 저쩌고</S.BookName>
                <S.BookPrice>15,550원</S.BookPrice>
              </S.BookInfoWrap>
            </S.BookList>

            <S.BookList>
              <S.BookImgBox>
                <S.BookImg src="/item3.png" />
              </S.BookImgBox>
              <S.BookInfoWrap>
                <S.BookName>건방진 그녀석</S.BookName>
                <S.BookPrice>15,550원</S.BookPrice>
              </S.BookInfoWrap>
            </S.BookList>
          </S.BooksListWrap>
        </S.InnerWrap>
      </S.OuterWrap>
    </>
  );
}
