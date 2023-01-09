import { flatMap } from "lodash";
import { MouseEvent, useState } from "react";
import {
  SubmitButton3,
  SubmitButton2,
} from "../../../../commons/styles/Button";
import { OuterWrap, InnerWrap } from "../../../../commons/styles/Wrapper";
import * as S from "./style";

const MonthLists = [
  { id: "6", name: "6개월" },
  { id: "3", name: "3개월" },
  { id: "1", name: "1개월" },
];

export default function MyRentList() {
  const [isActive, setIsActive] = useState("1");

  const onClickList = (e: MouseEvent<HTMLParagraphElement>) => {
    setIsActive(e.currentTarget.id);
  };

  return (
    <S.MyRentListWrap>
      <S.Title>
        대여내역
        <span> 대여 내역 조회는 최근 6개월만 가능합니다.</span>
      </S.Title>

      <S.MonthWrap>
        {MonthLists.map((el) => (
          <S.Month
            key={el.id}
            id={el.id}
            onClick={onClickList}
            isActive={isActive === el.id ? "active" : ""}
          >
            {el.name}
          </S.Month>
        ))}
      </S.MonthWrap>

      <S.ListsWrap>
        {new Array(4).fill(1).map((_, index) => (
          <S.List key={index}>
            <S.BookImg src={`/item${index + 1}.png`} />
            <S.InfoWrap>
              <S.BookName>
                <h4>책제목</h4>
                <p>주문번호(123123123123123)</p>
              </S.BookName>
              <S.BookAuthor>작가 이름</S.BookAuthor>
              <S.BookRented>대여 일자</S.BookRented>
            </S.InfoWrap>
          </S.List>
        ))}
      </S.ListsWrap>
    </S.MyRentListWrap>
  );
}
