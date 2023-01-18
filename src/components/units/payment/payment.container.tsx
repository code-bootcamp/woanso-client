import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { Address } from "react-daum-postcode";
import { useForm } from "react-hook-form";
import { useQueryFetchComic } from "../../../commons/hooks/queries/useQueryFetchComic";
import { OuterWrap, InnerWrap } from "../../../commons/styles/Wrapper";
import { IOrderFormType } from "../../../commons/types/formtypes/type";
import { IMutation, IMutationCreatePointTransactionArgs } from "../../../commons/types/generated/types";
import { CREATE_POINT_TRANSACTION } from "./payment.queries";
import * as S from "./payment.styles";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function Payment(props: any) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useQueryFetchComic(String(router.query.comicId));
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [createPointTransaction] = useMutation<
  Pick<IMutation, "createPointTransaction">,
  IMutationCreatePointTransactionArgs
>(CREATE_POINT_TRANSACTION);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const { register, handleSubmit } = useForm<IOrderFormType>({
    mode: "onChange",
  });

  const amount =
    props.data?.fetchComic.deliveryFee + props.data?.fetchComic.rentalFee;

  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp87181188");

    IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        name: account.order,
        amount: amount,
        buyer_name: account.order,
        buyer_tel: account.number,
        buyer_addr: address,
        buyer_postcode: zipcode,
        m_redirect_url: "http://localhost:3000/28-01-payment",
      },
      (rsp: any) => {
        if (rsp.success) {
          Modal.success({content: "결제에 성공했습니다!"})
          void router.push(`/rents`)
          const impUid = rsp.imp_uid
          const result = createPointTransaction({
            variables: {
              impUid: impUid,
              comicId: props.data.fetchComic.comicId,
              amount,
              address
            }
            
          })
          
        } else {
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
        }
      }
    );
  };

  const [account, setAccount] = useState({
    order: "",
    recipient: "",
    number: "",
  });

  const onChangeAccount = (e: any) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onClickAddressSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (address: Address) => {
    setAddress(address.address);
    setZipcode(address.zonecode);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      {isOpen && (
        <S.AddressModal visible={true}>
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <OuterWrap>
        <InnerWrap>
          <S.Wrap>
            <S.TitleWrap>
              <S.Title style={{ color: "#77170D" }}>대여</S.Title>
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
                  <S.InputMid
                    id="order"
                    name="order"
                    onChange={onChangeAccount}
                  />
                  <S.InputMid
                    id="recipient"
                    name="recipient"
                    onChange={onChangeAccount}
                  />
                  {/* <S.InputMid/>
              <S.InputMid/> */}
                  <S.AddressWrap>
                    <S.InputSmall value={zipcode}></S.InputSmall>
                    <S.Button onClick={onClickAddressSearch}>
                      우편번호 검색
                    </S.Button>
                  </S.AddressWrap>
                  <S.InputLong value={address} />
                  <S.InputLong
                    value={addressDetail}
                    onChange={onChangeAddressDetail}
                  />
                  <S.InputMid
                    id="number"
                    name="number"
                    onChange={onChangeAccount}
                  />
                </S.RightUserWrap>
              </S.UserWrap>
              <S.Line />
            </S.PaymentWrap>
            <S.ProductWrap>
              <S.ProductTitleWrap>
                <S.ProductTitle>대여 상품 정보</S.ProductTitle>
              </S.ProductTitleWrap>
              <S.ProductContentsWrap>
                <S.ProductLeftWrap>
                  <S.ProductImgWrap>
                    <S.ProductImg
                      src={`https://storage.googleapis.com/${props.data?.fetchComic.ISBN}`}
                    />
                  </S.ProductImgWrap>
                  <S.LeftWrap>
                    <S.ProductLeftTitle>
                      {props.data?.fetchComic.title}
                    </S.ProductLeftTitle>
                    <S.TotleBooks>
                      전 {props.data?.fetchComic.totalBooks}권
                    </S.TotleBooks>
                  </S.LeftWrap>
                </S.ProductLeftWrap>
                <S.ProductRightWrap>
                  <S.Price>{props.data?.fetchComic.rentalFee}원</S.Price>
                </S.ProductRightWrap>
              </S.ProductContentsWrap>
            </S.ProductWrap>
            <S.Line />
            <S.PriceWrap>
              <S.PriceLeftWrap>
                <S.PriceLeft>상품가격</S.PriceLeft>
                <S.PriceLeft>배송비</S.PriceLeft>
              </S.PriceLeftWrap>
              <S.PriceRightWrap>
                <S.PriceRight>
                  {props.data?.fetchComic.rentalFee}원
                </S.PriceRight>
                <S.PriceRight>
                  {props.data?.fetchComic.deliveryFee}원
                </S.PriceRight>
              </S.PriceRightWrap>
            </S.PriceWrap>
            <S.Line />
            <S.PriceWrap>
              <S.PriceLeftWrap>
                <S.PriceLeft>총 결제금액</S.PriceLeft>
              </S.PriceLeftWrap>
              <S.PriceRightWrap>
                <S.PriceRight>{amount}원</S.PriceRight>
              </S.PriceRightWrap>
            </S.PriceWrap>
            <S.SubmitButtonWrap>
              <S.SubmitButton onClick={onClickPayment}>결제하기</S.SubmitButton>
            </S.SubmitButtonWrap>
          </S.Wrap>
        </InnerWrap>
      </OuterWrap>
    </>
  );
}
