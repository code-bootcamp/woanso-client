import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./style";

const ResevationLists = [
  {
    number: "123453545",
    title: "명탐정 코난",
    price: "35000",
    due: "2022/12/25~12/31",
  },
  {
    number: "123453545",
    title: "명탐정 코난",
    price: "35000",
    due: "2022/12/25~12/31",
  },
  {
    number: "23456546",
    title: "명탐정 코난",
    price: "35000",
    due: "2022/12/25~12/31",
  },
  {
    number: "23456546",
    title: "명탐정 코난",
    price: "35000",
    due: "2022/12/25~12/31",
  },
];
export default function MyReservationListUI() {
  return (
    <S.ReservationBox>
      <S.ReservationList>
        <h1>예약내역</h1>
        <S.Wrap>
          {ResevationLists.map((el) => (
            <S.ReservationWrapper>
              <S.TopRowReservation>
                <S.Number>예약번호</S.Number>
                <span>상품명</span>
                <S.Price>상품가격</S.Price>
                <span>예약기간</span>
              </S.TopRowReservation>

              <S.ReservationDetail key={el.number}>
                <S.NumberAndTitle>
                  <S.ReservationNumber>{el.number}</S.ReservationNumber>
                  <S.ReservationBookTitle>{el.title}</S.ReservationBookTitle>
                </S.NumberAndTitle>
                <S.ReservationPrice> {el.price}</S.ReservationPrice>
                <S.ReservationPeriod>{el.due}</S.ReservationPeriod>
                <S.Cancel>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </S.Cancel>
              </S.ReservationDetail>
            </S.ReservationWrapper>
          ))}
        </S.Wrap>
      </S.ReservationList>
    </S.ReservationBox>
  );
}
