import { useState } from "react";
import Academy from "../../units/section/academy";
import Action from "../../units/section/action";
import Horror from "../../units/section/horror";
import Mystery from "../../units/section/mystery";
import Romance from "../../units/section/romance";
import * as S from "./styles";

const NavLists = [
  { id: "romance", name: "로맨스" },
  { id: "academy", name: "학원" },
  { id: "drama", name: "드라마/일상" },
  { id: "action", name: "액션" },
  { id: "mystery", name: "판타지" },
  { id: "horror", name: "추리/공포" },
];

export default function Recommand() {
  const [section, setSection] = useState<string>("romance");
  const [isActive, setIsActive] = useState<string>("romance");

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
          {section === "drama" && <Romance />}
          {section === "action" && <Action />}
          {section === "academy" && <Academy />}
          {section === "mystery" && <Mystery />}
          {section === "horror" && <Horror />}
        </S.BookWrapper>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
