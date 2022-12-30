import * as S from "./style";

export default function MyRentListUI() {
  return (
    <div>
      <h1>대여내역</h1>
      <S.RentDetailRow>
        <S.RentBook>
          <S.RentBookImg src="/action/01.jpeg" />
        </S.RentBook>
        <div>2022/12/29</div>
        <div>
          <div>
            <div>책제목</div>
            <div>10000 원</div>
          </div>
          <div>
            <div>결제방법</div>
            <div>결제상태</div>
          </div>
        </div>
      </S.RentDetailRow>
    </div>
  );
}
