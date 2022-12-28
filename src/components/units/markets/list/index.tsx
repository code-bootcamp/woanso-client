import * as S from "./style";

const BookDatas = [
  {
    name: "토끼와 흑표범의 공생관계 1",
    detail: "초판 상태 매우좋음",
    price: "14,400 원",
  },
  { name: "이번 생도 잘 부탁해 세트", detail: "매우 새거", price: "14,400원" },
  { name: "도라에몽", detail: "매우 새거", price: "14,400원" },
  { name: "슬램덩크 8권", detail: "상태아쉽", price: "14,400원" },
  { name: "세일러분", detail: "전권 판매", price: "140,000원" },
  {
    name: "토끼와 흑표범의 공생관계 1",
    detail: "초판 상태 매우좋음",
    price: "14,400 원",
  },
  { name: "이번 생도 잘 부탁해 세트", detail: "매우 새거", price: "14,400원" },
  { name: "도라에몽", detail: "매우 새거", price: "14,400원" },
  { name: "슬램덩크 8권", detail: "상태아쉽", price: "14,400원" },
  { name: "세일러분", detail: "전권 판매", price: "140,000원" },
  {
    name: "토끼와 흑표범의 공생관계 1",
    detail: "초판 상태 매우좋음",
    price: "14,400 원",
  },
  { name: "이번 생도 잘 부탁해 세트", detail: "매우 새거", price: "14,400원" },
  { name: "도라에몽", detail: "매우 새거", price: "14,400원" },
  { name: "슬램덩크 8권", detail: "상태아쉽", price: "14,400원" },
  { name: "세일러분", detail: "전권 판매", price: "140,000원" },
  {
    name: "토끼와 흑표범의 공생관계 1",
    detail: "초판 상태 매우좋음",
    price: "14,400 원",
  },
  { name: "이번 생도 잘 부탁해 세트", detail: "매우 새거", price: "14,400원" },
  { name: "도라에몽", detail: "매우 새거", price: "14,400원" },
  { name: "슬램덩크 8권", detail: "상태아쉽", price: "14,400원" },
  { name: "세일러분", detail: "전권 판매", price: "140,000원" },
  {
    name: "토끼와 흑표범의 공생관계 1",
    detail: "초판 상태 매우좋음",
    price: "14,400 원",
  },
  { name: "이번 생도 잘 부탁해 세트", detail: "매우 새거", price: "14,400원" },
  { name: "도라에몽", detail: "매우 새거", price: "14,400원" },
  { name: "슬램덩크 8권", detail: "상태아쉽", price: "14,400원" },
  { name: "세일러분", detail: "전권 판매", price: "140,000원" },
];

export default function MaketsList() {
  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.BookListsWrap>
          {BookDatas.map((el, index) => (
            <>
              <S.BookWrap key={el.index}>
                <S.BookImgWrap>
                  <S.BookImg />
                </S.BookImgWrap>
                <S.BookInfoWrap>
                  <S.BookName>{el.name}</S.BookName>
                  <S.BookDetail>{el.detail}</S.BookDetail>
                  <S.BookPrice>{el.price}</S.BookPrice>
                </S.BookInfoWrap>
              </S.BookWrap>
            </>
          ))}
        </S.BookListsWrap>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
