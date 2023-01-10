import { useState } from "react";
import { useForm } from "react-hook-form";
import { InnerWrap, OuterWrap } from "../../../commons/styles/Wrapper";
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
          <S.UserWrap>
            <S.UserTitleWrap>
              <S.UserTitle>배송지 정보 입력</S.UserTitle>
            </S.UserTitleWrap>
            <S.UserNameWrap>
              <S.Label>주문인</S.Label>
              <S.UserName></S.UserName>
            </S.UserNameWrap>
            <S.UserNameWrap2>
              <S.Label>수령인</S.Label>
              <S.UserName2></S.UserName2>
            </S.UserNameWrap2>
            <S.AddressWrap>
              <S.Label>주소</S.Label>
              <S.AddressNumber></S.AddressNumber>
              <S.AddressSerch>우편번호 검색</S.AddressSerch>
            </S.AddressWrap>
            <S.AddressWrap>
              <S.Address></S.Address>
            </S.AddressWrap>
            <S.AddressWrap>
              <S.AddressDetail></S.AddressDetail>
            </S.AddressWrap>
            <S.NumberWrap>
              <S.Label>전화번호</S.Label>
              <S.Number></S.Number>
            </S.NumberWrap>
          </S.UserWrap>
        </S.Wrap>
      </InnerWrap>
    </OuterWrap>
  );
}
