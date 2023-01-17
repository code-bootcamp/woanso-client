import RentsReviewWrite from "../../rentsReview/write/rentsReviewWrite.container";
import * as S from "./rentDetail.styles";
import React, { useState } from "react";
import RentsReviewList from "../../rentsReview/list/rentsReviewList.container";
import { useRouter } from "next/router";
import { useQueryFetchComic } from "../../../../commons/hooks/queries/useQueryFetchComic";
import { Modal, Rate } from "antd";
import { useMutationCreateWishList } from "../../../../commons/hooks/mutaions/useMutationCreateWishlist";
import { useQueryFetchUserLoggendIn } from "../../../../commons/hooks/queries/useQueryFetchUserLoggedIn";
import { useMutationcreatePointTransaction } from "../../../../commons/hooks/mutaions/useCreatePointTransaction";
import Head from "next/head";

export default function RentDetailUI() {
  const router = useRouter();
  const [toggleIcon, setToggleIcon] = useState(false);
  const [createWishlist] = useMutationCreateWishList();
  const [createPointTransaction] = useMutationcreatePointTransaction();
  const { data: user } = useQueryFetchUserLoggendIn();
  const { data } = useQueryFetchComic(String(router.query.boardId));
  const onClickToggle = async () => {
    setToggleIcon((prev) => !prev);
    await createWishlist({
      variables: {
        createWishInput: {
          comicId: router.query.boardId,
          userId: user.fetchUserLoggedIn.id,
        },
      },
    });
  };

  const onClickPayment = () => {
    router.push(`/payment/${router.query.boardId}`);
  };

  const onClickCantrent = () => {
    Modal.error({ content: "현재 대여가 불가한 상품입니다." });
  };
  const count = data?.fetchComic.comicRating.comicRating;

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
                <S.RentBtn
                  onClick={
                    data?.fetchComic.isAvailable
                      ? onClickPayment
                      : onClickCantrent
                  }
                >
                  {data?.fetchComic.isAvailable ? "대여" : "대여불가"}
                </S.RentBtn>
              </S.InfoFlexWrap>
            </S.InfoWrap>
          </S.DetailWrap>
          <RentsReviewWrite comicId={router.query.boardId} />
          <S.ReviewListBox>
            <RentsReviewList comicId={router.query.boardId} />
          </S.ReviewListBox>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
