import * as S from "./style";

export default function MyReservationList() {
  return (
    <S.MyRentListWrap>
      <S.Title>
        예약내역
        <span> 예약 취소는 3일 전까지 가능합니다.</span>
      </S.Title>

      <S.ListsWrap>
        {new Array(3).fill(1).map((_, index) => (
          <S.List key={index}>
            <S.BookImg src={`/item${index + 1}.png`} />
            <S.InfoWrap>
              <S.BookName>
                <h4>책제목</h4>
              </S.BookName>
              <S.BookAuthor>작가 이름</S.BookAuthor>
              <S.BookRented>대여 일자</S.BookRented>
            </S.InfoWrap>
            <S.Btn>취소</S.Btn>
          </S.List>
        ))}
        <S.List>
          <S.BookImg src={`/item4.png`} />
          <S.InfoWrap>
            <S.BookName>
              <h4>책제목</h4>
            </S.BookName>
            <S.BookAuthor>작가 이름</S.BookAuthor>
            <S.BookRented>대여 일자</S.BookRented>
          </S.InfoWrap>
          <S.Btn2>취소불가</S.Btn2>
        </S.List>
      </S.ListsWrap>
    </S.MyRentListWrap>
  );
}
