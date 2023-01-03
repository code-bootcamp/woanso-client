import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faP } from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";

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
    <S.PointWrapper>
      <h1>포인트내역</h1>
      <S.PointMainList>
        {/* <S.TopRow>
          <S.Status>생성일</S.Status>
          <S.Status>상태(충전/사용)</S.Status>
          <S.Amount>금액(p)</S.Amount>
          <S.Status>사용내역</S.Status>
          <S.Balance>잔액(p)</S.Balance>
        </S.TopRow> */}
        {Point.map((el) => (
          <S.PointList>
            <S.Status>{el.creatAt}</S.Status>
            <S.Status>{el.status}</S.Status>
            <S.Amount>
              {el.amount} <FontAwesomeIcon icon={faP} />
            </S.Amount>
            <S.Status>{el.usedItem}</S.Status>
            <S.Balance>
              {el.balance} <FontAwesomeIcon icon={faP} />
            </S.Balance>
          </S.PointList>
        ))}
      </S.PointMainList>
    </S.PointWrapper>
  );
}
