import { useState } from "react";
import { useForm } from "react-hook-form";
import { OuterWrap, InnerWrap } from "../../../commons/styles/Wrapper";
import { IOrderFormType } from "../../../commons/types/formtypes/type";
import RentCheckModal from "../../commons/customModal/rentcheckModal";
import * as S from "./payment.styles";

export default function Payment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const { register, handleSubmit } = useForm<IOrderFormType>({
    mode: "onChange",
  });

  return (
   <OuterWrap>
    <InnerWrap>
      <S.Wrap>
        <S.TitleWrap>
          <S.Title style={{color: "#77170D"}}>대여</S.Title>
          <S.Title>주문서</S.Title>
        </S.TitleWrap>
        <S.SubWrap>
          <S.SubTitle>배송지 정보 입력</S.SubTitle>
        </S.SubWrap>
        <S.PaymentWrap>
          <S.UserWrap>
            <S.LeftUserWrap>
              <S.Label>주문인</S.Label>
              <S.Label>수령인</S.Label>
              <S.Label>주소</S.Label>
              <S.Label2>전화번호</S.Label2>
            </S.LeftUserWrap>
            <S.RightUserWrap>
              <S.InputMid></S.InputMid>
              <S.InputMid></S.InputMid>
              <S.AddressWrap>
                <S.InputSmall></S.InputSmall>
                <S.Button>우편번호 검색</S.Button>
              </S.AddressWrap>
              <S.InputLong></S.InputLong>
              <S.InputLong></S.InputLong>
              <S.InputMid></S.InputMid>
            </S.RightUserWrap>
          </S.UserWrap>
          <S.Line/>
          <S.PointWrap>
            <S.PointTitleWrap>
              <S.PointTitle>포인트 적용</S.PointTitle>
            </S.PointTitleWrap>
            <S.PointContentsWrap>
              <S.InputMid></S.InputMid>
              <S.Button>포인트 적용</S.Button>
            </S.PointContentsWrap>
            <S.PaymentWrapper>
              <S.Payment>잔여 포인트: 3,000 포인트</S.Payment>
            </S.PaymentWrapper>
          </S.PointWrap>
        </S.PaymentWrap>
        <S.ProductWrap>
          <S.ProductTitleWrap>
            <S.ProductTitle>대여 상품 정보</S.ProductTitle>
          </S.ProductTitleWrap>
          <S.ProductContentsWrap>
            <S.ProductLeftWrap>
              <S.ProductImgWrap>
                <S.ProductImg></S.ProductImg>
              </S.ProductImgWrap>
              <S.LeftWrap>
                <S.ProductLeftTitle>만화책 제목</S.ProductLeftTitle>
                <S.TotleBooks>전 12권</S.TotleBooks>
              </S.LeftWrap>
            </S.ProductLeftWrap>
            <S.ProductRightWrap>
              <S.Price>18,000원</S.Price>
            </S.ProductRightWrap>
          </S.ProductContentsWrap>
        </S.ProductWrap>
        <S.Line/>
        <S.PriceWrap>
          <S.PriceLeftWrap>
            <S.PriceLeft>상품가격</S.PriceLeft>
            <S.PriceLeft>배송비</S.PriceLeft>
            <S.PriceLeft>포인트</S.PriceLeft>
          </S.PriceLeftWrap>
          <S.PriceRightWrap>
            <S.PriceRight>18,000원</S.PriceRight>
            <S.PriceRight>+2,500원</S.PriceRight>
            <S.PriceRight>-1,000원</S.PriceRight>
          </S.PriceRightWrap>
        </S.PriceWrap>
        <S.Line/>
        <S.PriceWrap>
          <S.PriceLeftWrap>
            <S.PriceLeft>총 결제금액</S.PriceLeft>
          </S.PriceLeftWrap>
          <S.PriceRightWrap>
            <S.PriceRight>69,500원</S.PriceRight>
          </S.PriceRightWrap>
        </S.PriceWrap>
        <S.SubmitButtonWrap>
          <S.SubmitButton>결제하기</S.SubmitButton>
        </S.SubmitButtonWrap>
      </S.Wrap>
    </InnerWrap>
   </OuterWrap>
  );
}
