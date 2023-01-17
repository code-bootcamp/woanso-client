import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { SubmitButton3 } from "../../../../../commons/styles/Button";
import { OrderList } from "../detas";
import * as S from "./style";

export default function MyRentDetail({ clickedId }: any) {
  const router = useRouter();
  const Detail = OrderList?.filter((el: any) => el.orderNumber === clickedId);

  const TotalPrice = Number(Detail[0]?.rentalFee) + 8000 + 50000;
  const TP = TotalPrice.toString().replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    ","
  );
  const RP = (Detail[0]?.rentalFee)
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      <S.Title>
        대여내역상세
        <span> 주문번호({Detail[0]?.orderNumber})</span>
      </S.Title>

      <S.ListsWrap>
        <S.List>
          <S.ListTitle>배송 정보</S.ListTitle>
          <S.TextWrap>
            <S.Subject>주문일(결제일)</S.Subject>
            <S.Content>{Detail[0]?.rentDay}</S.Content>
          </S.TextWrap>
          <S.TextWrap>
            <S.Subject>대여기간</S.Subject>
            <S.Content>{Detail[0]?.rentWithin}</S.Content>
          </S.TextWrap>
          <S.TextWrap>
            <S.Subject>배송주소</S.Subject>
            <S.Content>{Detail[0]?.adress}</S.Content>
          </S.TextWrap>
          <S.TextWrap>
            <S.Subject>전화번호</S.Subject>
            <S.Content>{Detail[0]?.phone}</S.Content>
          </S.TextWrap>
        </S.List>

        <S.List>
          <S.ListTitle>대여 상품 정보</S.ListTitle>
          <S.ImageWrap>
            <S.BookImg
              src={`https://storage.googleapis.com/${Detail[0]?.imgUrl}`}
            />
            <S.TextWrap2>
              <S.ListTitle2>{Detail[0]?.name}</S.ListTitle2>
              <S.ListTitle2>전 {Detail[0]?.totalBooks}</S.ListTitle2>
            </S.TextWrap2>
          </S.ImageWrap>
        </S.List>

        <S.List>
          <S.ListTitle>결제 정보</S.ListTitle>
          <S.TextWrap>
            <S.Subject>총 주문 금액</S.Subject>
            <S.Content>
              {TP}원 (상품가격 {RP}원 + 배송료 + 8,000원 + 보증금 50,000원)
            </S.Content>
          </S.TextWrap>
          <S.TextWrap>
            <S.Subject>실 결제 금액</S.Subject>
            <S.Content>
              <span>{TP}</span>원
            </S.Content>
          </S.TextWrap>
        </S.List>

        <S.ButtonWrap>
          <S.BtnWhite
            onClick={() => {
              router.push(`/payment/${Detail[0]?.comicId}`);
            }}
          >
            재대여
          </S.BtnWhite>
          <S.BtnBrown
            onClick={() => {
              router.push(`/rents/${Detail[0]?.comicId}`);
            }}
          >
            리뷰쓰기
          </S.BtnBrown>
        </S.ButtonWrap>
      </S.ListsWrap>
    </>
  );
}
