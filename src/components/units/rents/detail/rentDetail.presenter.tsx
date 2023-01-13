import RentsReviewWrite from "../../rentsReview/write/rentsReviewWrite.container";
import * as S from "./rentDetail.styles";
import React, { useState } from "react";
import RentsReviewList from "../../rentsReview/list/rentsReviewList.container";
import { useRouter } from "next/router";
import { useQueryFetchComic } from "../../../../commons/hooks/queries/useQueryFetchComic";
import { Rate } from "antd";
import { useMutationCreateWishList } from "../../../../commons/hooks/mutaions/useMutationCreateWishlist";
import { useQueryFetchUserLoggendIn } from "../../../../commons/hooks/queries/useQueryFetchUserLoggedIn";
import { useMutationcreatePointTransaction } from "../../../../commons/hooks/mutaions/useCreatePointTransaction";
import { useQuery } from "@apollo/client";
import { FETCH_USER } from "../../../../commons/hooks/queries/useQueryFetchUser";
import { IQuery, IQueryFetchUserArgs } from "../../../../commons/types/generated/types";
import Head from "next/head";
import Payment from "../../payment/payment.container";

export default function RentDetailUI() {
  const router = useRouter();
  const [toggleIcon, setToggleIcon] = useState(false);
  const [createWishlist] = useMutationCreateWishList();
  const [createPointTransaction] = useMutationcreatePointTransaction();
  const { data: user } = useQueryFetchUserLoggendIn();
  const { data } = useQueryFetchComic(router.query.boardId);
  const [payment, setPayment] = useState(false);
  console.log(data);

  const { data: user2  } = useQuery<
  Pick<IQuery,"fetchUser">,
  IQueryFetchUserArgs>
  (FETCH_USER, {
    variables: {
      email: user?.fetchUserLoggedIn.email
    }
  })

  const onClickToggle = async () => {
    setToggleIcon((prev) => !prev);
    const result = await createWishlist({
      variables: {
        createWishInput: {
          comicId: router.query.boardId,
          userId: user.fetchUserLoggedIn.id,
        },
      },
    });
    console.log(result);
  };

  const onClickPayment = () => {
    router.push(`/payment/${router.query.boardId}`)
  }

  // const onClickPayment = async () => {
  //   await createPointTransaction({
  //     variables: {
  //       impUid: String(user2?.fetchUser.pointTransaction.impUid),
  //       comicId: String(data?.fetchComic.comicId),
  //       amount: Number(data?.fetchComic.rentalFee)
  //     },
  //   });
  //   alert("구매가 완료되었습니다.");
  //   router.push("/rents/");
  // };

  // const onClickPayment = () => {
  //   const amount = data.fetchComic.deliveryFee + data.fetchComic.rentalFee

  //   const IMP = window.IMP; 
  //   IMP.init("imp87181188"); 

  //   IMP.request_pay(
  //     {
  //       pg: "nice",
  //       pay_method: "card", 
  //       name: data.fetchComic.title,
  //       amount: amount,
  //       buyer_email: user2?.fetchUser.email,
  //       buyer_name: user2?.fetchUser.nickname,
  //       buyer_tel: user2?.fetchUser.phone,
  //       // buyer_addr: "서울특별시 강남구 신사동",
  //       buyer_postcode: "01181",
  //       m_redirect_url: "http://localhost:3000/28-01-payment", 
  //     },
  //     (rsp: any) => {
  //       if (rsp.success) {
  //         console.log(rsp);
  //         // createPointTransactionOfLoading
  //       } else {
  //         // alert("결제에 실패했습니다! 다시 시도해 주세요!");
  //       }
  //     }
  //   );
  // };




  const count = data?.fetchComic.comicRating.comicRating;

  console.log(data)
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
      <S.Wrapper>
        <S.Container>
          <S.DetailWrap>
            <S.ImageWrap
              style={{
                backgroundImage: `url(https://storage.googleapis.com/${data?.fetchComic.ISBN})`,
              }}
            >
              <S.Img
                src={`https://storage.googleapis.com/${data?.fetchComic.ISBN}`}
              />
            </S.ImageWrap>
            <S.InfoWrap>
              <S.InfoFlexWrap>
                <S.BookName>{data?.fetchComic.title}</S.BookName>
                <div onClick={onClickToggle}>
                  {toggleIcon ? <S.HearIconClicked /> : <S.HearIcon />}
                </div>
              </S.InfoFlexWrap>
              <S.BookScore>
                <div>
                  <Rate value={count} />
                </div>
                <p>{count}점</p>
              </S.BookScore>
              <S.BookAuthor>{data?.fetchComic.author}</S.BookAuthor>
              <S.BookDetail>{data?.fetchComic.description}</S.BookDetail>
              <S.InfoFlexWrap>
                <S.Price>{data?.fetchComic.rentalFee}원</S.Price>
                <S.RentBtn onClick={onClickPayment}>
                  {/* {data?.fetchComic.isAvailable ? "대여" : "대여불가"} */}
                  대여
                </S.RentBtn>
              </S.InfoFlexWrap>
            </S.InfoWrap>
          </S.DetailWrap>
          <RentsReviewWrite comicId={router.query.boardId} />
          <S.ReviewListBox>
            <RentsReviewList />
          </S.ReviewListBox>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
