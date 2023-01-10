import * as S from "./rentsReviewList.styles";
import React from "react";
import { Modal, Rate } from "antd";
import { useMutationDeleteReview } from "../../../../commons/hooks/mutaions/useMutationDeleteReview";

export default function RentsReviewListUI() {
  const [deleteReview] = useMutationDeleteReview();

  const onClickDelete = () => {
    try {
      deleteReview({
        variables: {
          reviewId: "",
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_REVIEWS,

        //   },
        // ],
      });
      Modal.success({ content: "리뷰를 삭제했습니다." });
    } catch (error) {
      Modal.error({ content: "삭제할 수 없습니다." });
      return;
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.LeftContainer>
          <S.StarBox>
            <Rate />
          </S.StarBox>
          <S.ReviewInfo>
            <S.Reviewer>쩨리</S.Reviewer>
            <S.CreatedAt>2022-12-30</S.CreatedAt>
          </S.ReviewInfo>
        </S.LeftContainer>
        <S.RightContainer>
          <S.ReviewContent>재밌어요 추천!</S.ReviewContent>
        </S.RightContainer>

        <S.BtnWrapper>
          <S.Button onClick={onClickDelete}>
            <img src="/icon/delete_icon.png" />
          </S.Button>
        </S.BtnWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
