import { useQuery } from "@apollo/client";
import { useState } from "react";
import { FETCH_COMICS } from "../../../commons/hooks/queries/useQueryFetchComics";
import SliderMultiple from "../../commons/sliderMultiple";
import School from "../section/school";
import Action from "../section/action";
import Mystery from "../section/mystery";
import Romance from "../section/romance";
import ListMap from "./map.index";
import * as S from "./style";
import Fantasy from "../section/fantasy";

const NavLists = [
  { id: "all", name: "전체" },
  { id: "romance", name: "로맨스" },
  { id: "school", name: "학원" },
  { id: "drama", name: "드라마/일상" },
  { id: "action", name: "액션" },
  { id: "fantasy", name: "판타지" },
  { id: "horror", name: "추리/공포" },
];

export default function Rents() {
  const [section, setSection] = useState<string>("all");
  const [isActive, setIsActive] = useState<string>("all");
  const { data } = useQuery(FETCH_COMICS);

  const copyData = data;
  const dataRomance = copyData?.fetchComics.filter(
    (el: any) => el.category === "romance"
  );
  const dataSchool = copyData?.fetchComics.filter(
    (el: any) => el.category === "school"
  );
  const dataDrama = copyData?.fetchComics.filter(
    (el: any) => el.category === "drama"
  );
  const dataAction = copyData?.fetchComics.filter(
    (el: any) => el.category === "action"
  );
  const dataFantasy = copyData?.fetchComics.filter(
    (el: any) => el.category === "fantasy"
  );
  const dataHorror = copyData?.fetchComics.filter(
    (el: any) => el.category === "horror"
  );

  const onClickMenu = (e: any) => {
    setSection(e.currentTarget?.id);
    setIsActive(e.currentTarget?.id);
  };

  return (
    <S.RentsWrap>
      <S.NavWrapper>
        {NavLists.map((el) => (
          <S.Nav
            id={el.id}
            onClick={onClickMenu}
            isActive={isActive === el.id ? "active" : ""}
          >
            {el.name}
          </S.Nav>
        ))}
      </S.NavWrapper>
      {section === "all" && (
        <>
          <SliderMultiple />
          <S.BookTitleWrap>
            <S.BookTitle>
              가슴 설레는 <span>로맨스</span>
            </S.BookTitle>
            <S.MoreBtn id="romance" onClick={onClickMenu}>
              더보기 &gt;
            </S.MoreBtn>
          </S.BookTitleWrap>
          <S.BookWrapper>
            <Romance />
          </S.BookWrapper>

          <S.BookTitleWrap>
            <S.BookTitle>
              하이틴 간접체험! <span>학원</span>
            </S.BookTitle>
            <S.MoreBtn id="school" onClick={onClickMenu}>
              더보기 &gt;
            </S.MoreBtn>
          </S.BookTitleWrap>
          <S.BookWrapper>
            <School />
          </S.BookWrapper>

          <S.BookTitleWrap>
            <S.BookTitle>
              13일의 금요일엔! <span>공포/추리</span>
            </S.BookTitle>
            <S.MoreBtn id="horror" onClick={onClickMenu}>
              더보기 &gt;
            </S.MoreBtn>
          </S.BookTitleWrap>
          <S.BookWrapper>
            <Mystery />
          </S.BookWrapper>

          <S.BookTitleWrap>
            <S.BookTitle>
              압도적인 몰입감, 화끈한 <span>액션</span>
            </S.BookTitle>
            <S.MoreBtn id="action" onClick={onClickMenu}>
              더보기 &gt;
            </S.MoreBtn>
          </S.BookTitleWrap>
          <S.BookWrapper>
            <Action />
          </S.BookWrapper>

          <S.BookTitleWrap>
            <S.BookTitle>
              환상속으로! <span>판타지</span>
            </S.BookTitle>
            <S.MoreBtn id="fantasy" onClick={onClickMenu}>
              더보기 &gt;
            </S.MoreBtn>
          </S.BookTitleWrap>
          <S.BookWrapper>
            <Fantasy />
          </S.BookWrapper>
        </>
      )}

      {section === "romance" && (
        <S.BookListWrapper>
          {dataRomance?.map((el: any, index: number) => (
            <div key={index}>
              <ListMap el={el} />
            </div>
          ))}
        </S.BookListWrapper>
      )}
      {section === "school" && (
        <S.BookListWrapper>
          {dataSchool?.map((el: any, index: number) => (
            <div key={index}>
              <ListMap el={el} />
            </div>
          ))}
        </S.BookListWrapper>
      )}
      {section === "drama" && (
        <S.BookListWrapper>
          {dataDrama?.map((el: any, index: number) => (
            <div key={index}>
              <ListMap el={el} />
            </div>
          ))}
        </S.BookListWrapper>
      )}
      {section === "action" && (
        <S.BookListWrapper>
          {dataAction?.map((el: any, index: number) => (
            <div key={index}>
              <ListMap el={el} />
            </div>
          ))}
        </S.BookListWrapper>
      )}
      {section === "fantasy" && (
        <S.BookListWrapper>
          {dataFantasy?.map((el: any, index: number) => (
            <div key={index}>
              <ListMap el={el} />
            </div>
          ))}
        </S.BookListWrapper>
      )}
      {section === "horror" && (
        <S.BookListWrapper>
          {dataHorror?.map((el: any, index: number) => (
            <div key={index}>
              <ListMap el={el} />
            </div>
          ))}
        </S.BookListWrapper>
      )}
    </S.RentsWrap>
  );
}
