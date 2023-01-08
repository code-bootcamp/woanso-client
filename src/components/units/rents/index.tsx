import { useQuery } from "@apollo/client";
import { FETCH_COMICS } from "../../../commons/hooks/queries/useQueryFetchComics";
import { IQuery, IQueryFetchComicArgs } from "../../../commons/types/generated/types";
import * as S from "./style";

const MenuList = ["순정", "판타지", "무협", "코믹", "추리"];

export default function Rents() {

  const { data } = useQuery<
  Pick<IQuery, "fetchComics">,
  IQueryFetchComicArgs
  >(FETCH_COMICS);


  return (
    // <OuterWrap>
    <S.InnerWrap>
      <S.BooksSection>
        <S.MenusWrap>
          <S.MenuList>순정</S.MenuList>
          <S.MenuList>판타지</S.MenuList>
          <S.MenuList>무협</S.MenuList>
          <S.MenuList>코믹</S.MenuList>
          <S.MenuList>추리</S.MenuList>
        </S.MenusWrap>
      </S.BooksSection>
      <S.AllListWrap>
        {data?.fetchComics.map((el, index) => (
          <S.ListWrap key={el.comicId}>
          <S.BookImgBox>
            <S.BookSection>{el.category}</S.BookSection>
            <S.BookImg src="/item1.png" />
            <S.BookHoverWrap>
              <S.BookStory>
                중학교 때의 첫사랑이 썸으로 발전하기도 전에 전학을 갔는데,
                고등학교 때 다시 돌아와서 드디어 썸타는데...
              </S.BookStory>
              <S.BookGrade>★★★✩✩</S.BookGrade>
            </S.BookHoverWrap>
          </S.BookImgBox>

          <S.BookInfoWrap>
            <S.BookTitle>{el.title}</S.BookTitle>
            <S.BookInfo>{el.author}</S.BookInfo>
          </S.BookInfoWrap>
        </S.ListWrap>
         ))} 
        

        <S.ListWrap>
          <S.BookImgBox>
            <S.BookSection>로맨스</S.BookSection>
            <S.BookImg src="/item2.png" />
            <S.BookHoverWrap>
              <S.BookStory>
                중학교 때의 첫사랑이 썸으로 발전하기도 전에 전학을 갔는데,
                고등학교 때 다시 돌아와서 드디어 썸타는데...
              </S.BookStory>
              <S.BookGrade>★★★✩✩</S.BookGrade>
            </S.BookHoverWrap>
          </S.BookImgBox>

          <S.BookInfoWrap>
            <S.BookTitle>순정만화 전권</S.BookTitle>
            <S.BookInfo>정명희님/이유진님</S.BookInfo>
          </S.BookInfoWrap>
        </S.ListWrap>

        <S.ListWrap>
          <S.BookImgBox>
            <S.BookSection>로맨스</S.BookSection>
            <S.BookImg src="/item3.png" />
            <S.BookHoverWrap>
              <S.BookStory>
                중학교 때의 첫사랑이 썸으로 발전하기도 전에 전학을 갔는데,
                고등학교 때 다시 돌아와서 드디어 썸타는데...
              </S.BookStory>
              <S.BookGrade>★★★✩✩</S.BookGrade>
            </S.BookHoverWrap>
          </S.BookImgBox>

          <S.BookInfoWrap>
            <S.BookTitle>순정만화 전권</S.BookTitle>
            <S.BookInfo>정명희님/이유진님</S.BookInfo>
          </S.BookInfoWrap>
        </S.ListWrap>

        <S.ListWrap>
          <S.BookImgBox>
            <S.BookSection>로맨스</S.BookSection>
            <S.BookImg src="/item4.png" />
            <S.BookHoverWrap>
              <S.BookStory>
                중학교 때의 첫사랑이 썸으로 발전하기도 전에 전학을 갔는데,
                고등학교 때 다시 돌아와서 드디어 썸타는데...
              </S.BookStory>
              <S.BookGrade>★★★✩✩</S.BookGrade>
            </S.BookHoverWrap>
          </S.BookImgBox>

          <S.BookInfoWrap>
            <S.BookTitle>순정만화 전권</S.BookTitle>
            <S.BookInfo>정명희님/이유진님</S.BookInfo>
          </S.BookInfoWrap>
        </S.ListWrap>

        <S.ListWrap>
          <S.BookImgBox>
            <S.BookSection>로맨스</S.BookSection>
            <S.BookImg src="/item5.png" />
            <S.BookHoverWrap>
              <S.BookStory>
                중학교 때의 첫사랑이 썸으로 발전하기도 전에 전학을 갔는데,
                고등학교 때 다시 돌아와서 드디어 썸타는데...
              </S.BookStory>
              <S.BookGrade>★★★✩✩</S.BookGrade>
            </S.BookHoverWrap>
          </S.BookImgBox>

          <S.BookInfoWrap>
            <S.BookTitle>순정만화 전권</S.BookTitle>
            <S.BookInfo>정명희님/이유진님</S.BookInfo>
          </S.BookInfoWrap>
        </S.ListWrap>

        <S.ListWrap>
          <S.BookImgBox>
            <S.BookSection>로맨스</S.BookSection>
            <S.BookImg src="/item5.png" />
            <S.BookHoverWrap>
              <S.BookStory>
                중학교 때의 첫사랑이 썸으로 발전하기도 전에 전학을 갔는데,
                고등학교 때 다시 돌아와서 드디어 썸타는데...
              </S.BookStory>
              <S.BookGrade>★★★✩✩</S.BookGrade>
            </S.BookHoverWrap>
          </S.BookImgBox>

          <S.BookInfoWrap>
            <S.BookTitle>순정만화 전권</S.BookTitle>
            <S.BookInfo>정명희님/이유진님</S.BookInfo>
          </S.BookInfoWrap>
        </S.ListWrap>
      </S.AllListWrap>
    </S.InnerWrap>
    // </OuterWrap>
  );
}
