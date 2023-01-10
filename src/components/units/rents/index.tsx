import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useQueryFetchBoards } from "../../../commons/hooks/queries/useQueryFetchBoards";
import { FETCH_COMICS } from "../../../commons/hooks/queries/useQueryFetchComics";
import SliderMultiple from "../../commons/sliderMultiple";
import Academy from "../section/academy";
import Action from "../section/action";
import { data } from "../section/detas";
import Horror from "../section/horror";
import Mystery from "../section/mystery";
import Romance from "../section/romance";
import ListMap from "./map.index";
import * as S from "./style";

const NavLists = [
  { id: "all", name: "전체" },
  { id: "romance", name: "로맨스" },
  { id: "academy", name: "학원" },
  { id: "drama", name: "드라마/일상" },
  { id: "action", name: "액션" },
  { id: "mystery", name: "판타지" },
  { id: "horror", name: "추리/공포" },
];

export default function Rents() {
  const [section, setSection] = useState<string>("all");
  const [isActive, setIsActive] = useState<string>("all");
  const { data } = useQuery(FETCH_COMICS);
  console.log(data);

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
            <S.MoreBtn>더보기 &gt;</S.MoreBtn>
          </S.BookTitleWrap>
          <S.BookWrapper>
            <Romance />
          </S.BookWrapper>

          <S.BookTitleWrap>
            <S.BookTitle>
              하이틴 간접체험! <span>학원</span>
            </S.BookTitle>
            <S.MoreBtn>더보기 &gt;</S.MoreBtn>
          </S.BookTitleWrap>
          <S.BookWrapper>
            <Academy />
          </S.BookWrapper>

          <S.BookTitleWrap>
            <S.BookTitle>
              13일의 금요일엔! <span>공포/추리</span>
            </S.BookTitle>
            <S.MoreBtn>더보기 &gt;</S.MoreBtn>
          </S.BookTitleWrap>
          <S.BookWrapper>
            <Mystery />
          </S.BookWrapper>

          <S.BookTitleWrap>
            <S.BookTitle>
              압도적인 몰입감, 화끈한 <span>액션</span>
            </S.BookTitle>
            <S.MoreBtn>더보기 &gt;</S.MoreBtn>
          </S.BookTitleWrap>
          <S.BookWrapper>
            <Action />
          </S.BookWrapper>

          <S.BookTitleWrap>
            <S.BookTitle>
              환상속으로! <span>판타지</span>
            </S.BookTitle>
            <S.MoreBtn>더보기 &gt;</S.MoreBtn>
          </S.BookTitleWrap>
          <S.BookWrapper>
            <Horror />
          </S.BookWrapper>
        </>
      )}

      {section !== "all" && (
        <S.BookListWrapper>
          {data.fetchComics.map((el: any, index: number) => (
            <div key={index}>
              <ListMap el={el} />
            </div>
          ))}
        </S.BookListWrapper>
      )}
    </S.RentsWrap>
  );
}
