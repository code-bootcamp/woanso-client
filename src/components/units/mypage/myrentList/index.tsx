import * as S from "./style";
import { MouseEvent, useState } from "react";
import { OrderList } from "./detas";
import MyRentDetail from "./detail";

const MonthLists = [
  { id: "6", name: "6개월" },
  { id: "3", name: "3개월" },
  { id: "1", name: "1개월" },
];

export default function MyRentList() {
  const [isActive, setIsActive] = useState("1");
  const [isShow, setIsShow] = useState(false);
  const [clickedId, setClickedId] = useState("");

  const onClickList = (e: MouseEvent<HTMLParagraphElement>) => {
    setIsActive(e.currentTarget.id);
  };

  const onClickShowRentDetail = (e: MouseEvent<HTMLDivElement>) => {
    setIsShow(true);
    setClickedId(e.currentTarget.id);
  };

  return (
    <S.MyRentListWrap>
      {isShow ? (
        <MyRentDetail clickedId={clickedId} />
      ) : (
        <>
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
            {/* {OrderList.map((el: any) => (
              <S.List
                key={el.orderNumber}
                id={el.orderNumber}
                onClick={onClickShowRentDetail}
              >
                <S.BookImg
                  src={`https://storage.googleapis.com/${el.imgUrl}`}
                />
                <S.InfoWrap>
                  <S.BookName>
                    <h4>{el.name}</h4>
                    <p>주문번호({el.orderNumber})</p>
                  </S.BookName>
                  <S.BookAuthor>{el.author}</S.BookAuthor>
                  <S.BookRented>{el.rentDay}</S.BookRented>
                </S.InfoWrap>
              </S.List>
            ))} */}
          </S.ListsWrap>
        </>
      )}
    </S.MyRentListWrap>
  );
}
