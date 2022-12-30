import * as S from "./style";

export default function MyBasketUI() {
  return (
    <S.MyBasket>
      <S.BasketList>
        <h1>장바구니</h1>
        <S.TopRow>
          <input type="checkbox" />
          <div>구매 / 삭제</div>
        </S.TopRow>
        <S.ListRow>
          <input type="checkbox" />
          <S.ListContents>
            <div>
              <img src="/action/02.jpeg" />
            </div>
            <S.List>
              <div>출판사명</div>
              <div>상품이름</div>
              <div>가격</div>
            </S.List>
            <div>
              <button>구매</button>
              <button>삭제</button>
            </div>
          </S.ListContents>
        </S.ListRow>
        <div>
          <input type="checkbox" />
          <div>
            <div>
              <img src="/action/02.jpeg" />
            </div>
            <div>
              <div>출판사명</div>
              <div>상품이름</div>
              <div>가격</div>
            </div>
          </div>
          <button>구매</button>
          <button>삭제</button>
        </div>
        <div>
          <div>
            <div>상품가격</div>
            <div>10000원</div>
          </div>
          <div>
            <div>배송비</div>
            <div>3000원</div>
          </div>
          <div>
            <div>총 결제금액</div>
            <div>13000원</div>
          </div>
        </div>
      </S.BasketList>
    </S.MyBasket>
  );
}
