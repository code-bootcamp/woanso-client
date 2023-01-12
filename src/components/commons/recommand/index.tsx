import { useState } from "react";
import Action from "../../units/section/action";
import Horror from "../../units/section/horror";
import Romance from "../../units/section/romance";
import * as S from "./styles";
import { FETCH_COMICS } from "../../../commons/hooks/queries/useQueryFetchComics";
import { useQuery } from "@apollo/client";
import Fantasy from "../../units/section/fantasy";
import School from "../../units/section/school";
import Darama from "../../units/section/drama";

const NavLists = [
  { id: "romance", name: "로맨스" },
  { id: "school", name: "학원" },
  { id: "drama", name: "드라마/일상" },
  { id: "action", name: "액션" },
  { id: "fantasy", name: "판타지" },
  { id: "horror", name: "추리/공포" },
];

export default function Recommand() {
  const [section, setSection] = useState<string>("romance");
  const [isActive, setIsActive] = useState<string>("romance");
  const { data } = useQuery(FETCH_COMICS);

  const copyData = data;

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
    <S.OuterWrap>
      <S.InnerWrap>
        <S.TitleWrapper>
          <h3>
            장르별 <span>추천</span>
          </h3>
        </S.TitleWrapper>
        <S.NavWrapper>
          {NavLists.map((el) => (
            <S.Nav
              key={el.id}
              id={el.id}
              onClick={onClickMenu}
              isActive={isActive === el.id ? "active" : ""}
            >
              {el.name}
            </S.Nav>
          ))}
        </S.NavWrapper>
        <S.Line />
        <S.BookWrapper>
          {section === "romance" && <Romance />}
          {section === "drama" && <Darama />}
          {section === "action" && <Action dataAction={dataAction} />}
          {section === "school" && <School />}
          {section === "fantasy" && <Fantasy dataFantasy={dataFantasy} />}
          {section === "horror" && <Horror dataHorror={dataHorror} />}
        </S.BookWrapper>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
