import RentsReviewWrite from "../../rentsReview/write/rentsReviewWrite.container";
import * as S from "./rentDetail.styles";
import React, { useState } from "react";
import RentsReviewList from "../../rentsReview/list/rentsReviewList.container";
import { useRouter } from "next/router";
import { useQueryFetchComic } from "../../../../commons/hooks/queries/useQueryFetchComic";
import { Rate } from "antd";
import { useMutationCreateWishList } from "../../../../commons/hooks/mutaions/useMutationCreateWishlist";
import { useQueryFetchUserLoggendIn } from "../../../../commons/hooks/queries/useQueryFetchUserLoggedIn";

export default function RentDetailUI() {
  const router = useRouter();
  const [toggleIcon, setToggleIcon] = useState(false);
  const [createWishlist] = useMutationCreateWishList();
  const { data: user } = useQueryFetchUserLoggendIn();
  const { data } = useQueryFetchComic(router.query.boardId);
  console.log(data);

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

  const count = data?.fetchComic.comicRating.comicRating;

  return (
    <>
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
                <S.RentBtn>
                  {data?.fetchComic.isAvailable ? "대여" : "대여불가"}
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
