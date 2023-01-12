import * as S from "./rentsReviewList.styles";
import React, { MouseEvent } from "react";
import { Modal, Rate } from "antd";
import { useMutationDeleteReview } from "../../../../commons/hooks/mutaions/useMutationDeleteReview";
import { FETCH_REVIEWS } from "../../../../commons/hooks/queries/useQueryFetchReviews";

export default function RentsReviewListUI({ el }: any) {
  const [deleteReview] = useMutationDeleteReview();

  const onClickDelete = (e: MouseEvent<HTMLDivElement>) => {
    try {
      deleteReview({
        variables: {
          reviewId: e.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_REVIEWS,
          },
        ],
      });
      Modal.success({ content: "리뷰를 삭제했습니다." });
    } catch (error) {
      Modal.error({ content: "삭제할 수 없습니다." });
      return;
    }
  };

  const count = el.comicRating?.comicRating;
  console.log(count);

  return (
    <S.Wrapper>
      <S.Container>
        <S.LeftContainer>
          <S.StarBox>
            <Rate value={count} />
          </S.StarBox>
          <S.ReviewInfo>
            <S.Reviewer>{el.user.nickname}</S.Reviewer>
            {/* <S.CreatedAt>2022-12-30</S.CreatedAt> */}
          </S.ReviewInfo>
        </S.LeftContainer>
        <S.RightContainer>
          <S.ReviewContent>{el.content}</S.ReviewContent>
        </S.RightContainer>

        <S.BtnWrapper>
          <S.Button id={el.reviewId} onClick={onClickDelete}>
            <img src="/icon/delete_icon.png" />
          </S.Button>
        </S.BtnWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
