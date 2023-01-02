import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";

const MyBaskets = [
  {
    market: "출판사명",
    productName: "상품명",
    status: "대여가능",
    price: "가격",
  },
  {
    market: "출판사명",
    productName: "상품명",
    status: "대여가능",
    price: "가격",
  },
  {
    market: "출판사명",
    productName: "명탐정 코난코난",
    status: "대여가능",
    price: "가격",
  },
];
export default function MyBasketUI() {
  return (
    <S.MyBasket>
      <h1>
        <FontAwesomeIcon icon={faCartShopping} /> 장바구니
      </h1>
      <S.BasketList>
        {MyBaskets.map((el) => (
          <S.ListRow>
            <S.ListContents>
              <S.ProductImgBox>
                <S.ProductImg src="/action/02.jpeg" />
              </S.ProductImgBox>
              <S.List>
                <div>{el.market}</div>
                <div>{el.productName}</div>
                <div>{el.price}</div>
                <S.PriceOrNot>{el.status}</S.PriceOrNot>
              </S.List>
              <S.Buttons>
                <S.RentButton>대여</S.RentButton>
                <S.DeleteButton>삭제</S.DeleteButton>
              </S.Buttons>
            </S.ListContents>
          </S.ListRow>
        ))}
        <S.ListRow>
          <S.ListContents>
            <S.ProductImgBox>
              <S.ProductImg src="/action/02.jpeg" />
            </S.ProductImgBox>
            <S.List>
              <div>출판사명</div>
              <div>상품이름</div>
              <div>가격</div>
              <S.PriceOrNot>
                대여 불가
                <S.RentError />
              </S.PriceOrNot>
            </S.List>
            <S.Buttons>
              <S.RentButton2>대여</S.RentButton2>
              <S.DeleteButton>삭제</S.DeleteButton>
            </S.Buttons>
          </S.ListContents>
        </S.ListRow>

        {/* <S.AllPrice>
          <div>
            <div>상품가격</div>
            <div>배송비</div>
            <div>총 결제금액</div>
          </div>
          <S.Price>
            <div>10000 원</div>
            <div>3000 원</div>
            <div>13000 원</div>
          </S.Price>
        </S.AllPrice> */}
      </S.BasketList>
    </S.MyBasket>
  );
}
