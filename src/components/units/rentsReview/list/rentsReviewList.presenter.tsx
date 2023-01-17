import * as S from "./rentsReviewList.styles";
import React, { MouseEvent } from "react";
import { Modal, Rate } from "antd";
import { useMutationDeleteReview } from "../../../../commons/hooks/mutaions/useMutationDeleteReview";
import { FETCH_REVIEW } from "../../../../commons/hooks/queries/useQueryFetchReview";
import { useMutionLikeReviewBoard } from "../../../../commons/hooks/mutaions/useMutationLikeReviewBoard";
import { getDays } from "../../../../commons/libraries/getTimes";

export default function RentsReviewListUI({ el }: any) {
  const [deleteReview] = useMutationDeleteReview();
  const [likeReviewBoard] = useMutionLikeReviewBoard();

  const onClickDelete = (e: MouseEvent<HTMLDivElement>) => {
    try {
      deleteReview({
        variables: {
          reviewId: e.currentTarget.id,
        },
        refetchQueries: [
          { query: FETCH_REVIEW, variables: { comicId: el.comic.comicId } },
        ],
      });
      Modal.success({ content: "리뷰를 삭제했습니다." });
    } catch (error) {
      Modal.error({ content: "삭제할 수 없습니다." });
      return;
    }
  };

  const onClickLike = (e: MouseEvent<HTMLDivElement>) => {
    try {
      likeReviewBoard({
        variables: {
          reviewId: e.currentTarget.id,
        },
        refetchQueries: [
          { query: FETCH_REVIEW, variables: { comicId: el.comic.comicId } },
        ],
      });
    } catch (error) {
      Modal.error({ content: "로그인 후 이용가능합니다." });
      return;
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.ContainerTop>
          <S.LeftContainer>
            <S.StarBox>
              <Rate defaultValue={el.rating} />
            </S.StarBox>
            <S.ReviewInfo>
              <S.Reviewer>{el.user.nickname}</S.Reviewer>
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
        </S.ContainerTop>
        <S.ContainerSub>
          <S.CreatedAt>{getDays(el.createdAt)}</S.CreatedAt>
          <S.LikeWrap>
            <div id={el.reviewId} onClick={onClickLike}>
              <S.Heart />
            </div>{" "}
            {el.like}
          </S.LikeWrap>
        </S.ContainerSub>
      </S.Container>
    </S.Wrapper>
  );
}
