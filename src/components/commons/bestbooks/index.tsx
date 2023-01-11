import * as S from "./style";
import { MouseEvent, useState } from "react";
import Action from "../../units/section/action";
import Romance from "../../units/section/romance";
import Mystery from "../../units/section/mystery";
import Horror from "../../units/section/horror";
import Academy from "../../units/section/school";
import All from "../../units/section/drama";

const MenuLists = [
  { id: "all", name: "전체" },
  { id: "romance", name: "로맨스" },
  { id: "action", name: "액션" },
  { id: "academy", name: "학원" },
  { id: "mystery", name: "추리" },
  { id: "horror", name: "공포" },
];

export default function BestBooks() {
  const [section, setSection] = useState<string>("all");
  const [isActive, setIsActive] = useState<string>("all");

  const onClickMenu = (e: any) => {
    setSection(e.currentTarget?.id);
    setIsActive(e.currentTarget?.id);
  };

  return (
    <>
      <S.OuterWrap>
        <S.InnerWrap>
          <S.ListWrap>
            <S.SectionTitle>가장 핫한 대여 만화</S.SectionTitle>
            <S.MenuListWrap>
              {MenuLists.map((el) => (
                <S.MenuList
                  id={el.id}
                  onClick={onClickMenu}
                  isActive={isActive === el.id ? "active" : ""}
                >
                  {el.name}
                </S.MenuList>
              ))}
            </S.MenuListWrap>
          </S.ListWrap>

          <S.BooksListWrap>
            {section === "all" && <All />}
            {section === "romance" && <Romance />}
            {section === "action" && <Action />}
            {section === "academy" && <Academy />}
            {section === "mystery" && <Mystery />}
            {section === "horror" && <Horror />}
          </S.BooksListWrap>
        </S.InnerWrap>
      </S.OuterWrap>
    </>
  );
}
