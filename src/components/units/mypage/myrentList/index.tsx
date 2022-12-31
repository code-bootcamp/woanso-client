import * as S from "./style";

const RentList = [
  {
    rentDate: "2022/12/29",
    bookTitle: "제목",
    price: "12000",
    paymentWay: "포인트결제",
    paymentStatus: "결제완료",
  },
  {
    rentDate: "2022/12/29",
    bookTitle: "제목1",
    price: "10000",
    paymentWay: "카드결제",
    paymentStatus: "결제완료",
  },
  {
    rentDate: "2022/11/29",
    bookTitle: "제목2",
    price: "가격",
    paymentWay: "카드결제",
    paymentStatus: "결제완료",
  },
  {
    rentDate: "2022/10/23",
    bookTitle: "제목3fasdfsadfasgdga",
    price: "가격",
    paymentWay: "포인트결제",
    paymentStatus: "결제완료",
  },
];
export default function MyRentListUI() {
  return (
    <S.RentList>
      <S.RentMain>
        <S.RentTitle>대여내역</S.RentTitle>
        <S.TopRow>
          <S.DateList>조회기간</S.DateList>
          <S.RentSerachMonth>
            <S.ChoiceMonth>1개월</S.ChoiceMonth>
            <S.ChoiceMonth>3개월</S.ChoiceMonth>
            <S.ChoiceMonth>6개월</S.ChoiceMonth>
            <S.RentSearchButton>조회</S.RentSearchButton>
          </S.RentSerachMonth>
        </S.TopRow>
        {RentList.map((el) => (
          <>
            <S.Date>{el.rentDate} 주문내역</S.Date>
            <S.RentDetailRow>
              <S.RentBook>
                <S.RentBookImg src="/action/01.jpeg" />
              </S.RentBook>
              <S.Detail>
                <S.Rents>
                  <S.TitlePrice>
                    <S.BookTitle>{el.bookTitle}</S.BookTitle>
                    <div>{el.price} 원</div>
                  </S.TitlePrice>
                  <S.PaymentStatus>
                    <S.Way>{el.paymentWay}</S.Way>
                    <div>{el.paymentStatus}</div>
                  </S.PaymentStatus>
                </S.Rents>
              </S.Detail>
            </S.RentDetailRow>
          </>
        ))}
      </S.RentMain>
    </S.RentList>
  );
}
