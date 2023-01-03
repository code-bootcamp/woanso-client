import { useState } from "react";
import RentCheckModal from "../../commons/customModal/rentcheckModal";
import * as S from "./payment.styles";

export default function Payment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <S.OutWrapper>
      <RentCheckModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      <S.InnerWrapper>
        <S.TitleWrapper>
          <S.Title>결제하기</S.Title>
        </S.TitleWrapper>
        <S.ContentsWrapper>
          <S.ContentsTitle>주문/배송 정보</S.ContentsTitle>
          <S.Label>주문자</S.Label>
          <S.SubWrapper>
            <S.Input placeholder="이름"></S.Input>
            <S.Input placeholder="전화번호"></S.Input>
          </S.SubWrapper>
          <S.Input2 placeholder="이메일"></S.Input2>
        </S.ContentsWrapper>
        <S.ContentsWrapper>
          <S.Label>배송지 정보</S.Label>
          <S.SubWrapper>
            <S.Input placeholder="이름"></S.Input>
            <S.Input placeholder="전화번호"></S.Input>
          </S.SubWrapper>
          <S.Input2 placeholder="주소"></S.Input2>
          <S.Input2 placeholder="상세주소"></S.Input2>
        </S.ContentsWrapper>
        <S.ContentsWrapper>
          <S.Label>쿠폰</S.Label>
          <S.SubWrapper>
            <S.CouponPrice>원</S.CouponPrice>
            <S.Coupon>쿠폰적용</S.Coupon>
          </S.SubWrapper>
        </S.ContentsWrapper>
        <S.ContentsWrapper>
          <S.Label>주문 상품 정보</S.Label>
          <S.SubWrapper>
            <S.SubWrapper>
              <S.Input5></S.Input5>
            </S.SubWrapper>
            <S.SubWrapper3>
              <S.Label>만화책 제목</S.Label>
              <S.Label>총 1개</S.Label>
            </S.SubWrapper3>
            <S.SubWrapper4>
              <S.Label>18,000원</S.Label>
            </S.SubWrapper4>
          </S.SubWrapper>
          <S.Line></S.Line>
        </S.ContentsWrapper>
        <S.ContentsWrapper2>
          <S.SubWrapper>
            <S.Label>상품가격</S.Label>
            <S.Label2>18,000원</S.Label2>
          </S.SubWrapper>
          <S.SubWrapper>
            <S.Label>배송비</S.Label>
            <S.Label2>+2,500원</S.Label2>
          </S.SubWrapper>
          <S.SubWrapper>
            <S.Label>쿠폰 사용</S.Label>
            <S.Label2>-1,000원</S.Label2>
          </S.SubWrapper>
          <S.SubWrapper>
            <S.Label>보증금</S.Label>
            <S.Label2>50,000원</S.Label2>
          </S.SubWrapper>
        </S.ContentsWrapper2>
        <S.Line></S.Line>
        <S.ContentsWrapper2>
          <S.SubWrapper>
            <S.Label>총 결제금액</S.Label>
            <S.Label2>69,500원</S.Label2>
          </S.SubWrapper>
        </S.ContentsWrapper2>
        <S.Button onClick={showModal}>결제하기</S.Button>
      </S.InnerWrapper>
    </S.OutWrapper>
  );
}
