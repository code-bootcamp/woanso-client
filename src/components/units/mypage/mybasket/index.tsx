export default function MyBasketUI() {
  return (
    <div>
      <h1>장바구니</h1>
      <div>
        <input type="checkbox" />
        <div>구매 / 삭제</div>
      </div>
      <div>
        <input type="checkbox" />
        <img />
        <div>
          <div>출판사명</div>
          <div>상품이름</div>
          <div>가격</div>
        </div>
        <button>구매</button>
        <button>삭제</button>
      </div>
      <div>
        <input type="checkbox" />
        <img />
        <div>
          <div>출판사명</div>
          <div>상품이름</div>
          <div>대여 불가능</div>
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
    </div>
  );
}
