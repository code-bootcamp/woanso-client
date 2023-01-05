import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faP } from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";
import { Thead } from "../../userBoard/style";

const Point = [
  {
    creatAt: "2022/12/31",
    status: "사용",
    amount: "-35000",
    usedItem: "상품 구매",
    balance: "3000",
  },
  {
    creatAt: "2022/11/29",
    status: "충전",
    amount: "+3000",
    usedItem: "이벤트 지급",
    balance: "38000",
  },
  {
    creatAt: "2022/10/13",
    status: "충전",
    amount: "+35000",
    usedItem: "포인트 충전",
    balance: "35000",
  },
];

export default function MyPointUI() {
  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.LeftWrap>
          <S.ImageWrap>
            <S.BookCoverImg src="/academy/01.jpeg" />
            <S.BookCoverImg src="/academy/02.jpeg" />
            <S.BookCoverImg src="/action/01.jpeg" />
            <S.BookCoverImg src="/action/02.jpeg" />
            <S.BookCoverImg src="/action/03.jpeg" />
            <S.BookCoverImg src="/mystery/01.jpeg" />
            <S.BookCoverImg src="/academy/01.jpeg" />
            <S.BookCoverImg src="/academy/02.jpeg" />
            <S.BookCoverImg src="/action/01.jpeg" />
            <S.BookCoverImg src="/action/02.jpeg" />
            <S.BookCoverImg src="/action/03.jpeg" />
            <S.BookCoverImg src="/mystery/01.jpeg" />
            <S.BookCoverImg src="/academy/01.jpeg" />
            <S.BookCoverImg src="/academy/02.jpeg" />
            <S.BookCoverImg src="/action/01.jpeg" />
            <S.BookCoverImg src="/action/02.jpeg" />
            <S.BookCoverImg src="/action/03.jpeg" />
            <S.BookCoverImg src="/mystery/01.jpeg" />
            <S.BookCoverImg src="/academy/01.jpeg" />
            <S.BookCoverImg src="/academy/02.jpeg" />
            <S.BookCoverImg src="/action/01.jpeg" />
            <S.BookCoverImg src="/action/02.jpeg" />
            <S.BookCoverImg src="/action/03.jpeg" />
            <S.BookCoverImg src="/mystery/01.jpeg" />
            <S.BookCoverImg src="/mystery/01.jpeg" />
            <S.BookCoverImg src="/academy/01.jpeg" />
            <S.BookCoverImg src="/academy/02.jpeg" />
            <S.BookCoverImg src="/action/01.jpeg" />
            <S.BookCoverImg src="/action/02.jpeg" />
            <S.BookCoverImg src="/action/03.jpeg" />
          </S.ImageWrap>
          <S.ChargePointWrap>
            <S.UserWrap>
              <S.UserPoint></S.UserPoint>
            </S.UserWrap>
            <S.OptionWrap>
              {[
                "5000냥",
                "10000냥",
                "15000냥",
                "20000냥",
                "30000냥",
                "40000냥",
                "50000냥",
                "기타",
              ].map((el) => (
                <S.ChageOption>{el}</S.ChageOption>
              ))}
            </S.OptionWrap>
          </S.ChargePointWrap>
        </S.LeftWrap>
        <S.PointWrapper>
          <h1>포인트내역</h1>
          <S.PointMainList>
            {Point.map((el) => (
              <S.PointList>
                <table>
                  <thead>
                    <tr>
                      <th colspan="3">완소 영수증 </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{el.creatAt}</td>

                      <td>{el.usedItem}</td>
                      <td>{el.amount}</td>
                    </tr>
                  </tbody>
                </table>
              </S.PointList>
            ))}
          </S.PointMainList>
        </S.PointWrapper>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
