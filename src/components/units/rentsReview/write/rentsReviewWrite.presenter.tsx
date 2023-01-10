import * as S from "./rentsReviewWrite.styles";
import React, { ChangeEvent, useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { useMutationCreateReview } from "../../../../commons/hooks/mutaions/useMutationCreateReview";
import { useRouter } from "next/router";
import { useQueryFetchUserLoggendIn } from "../../../../commons/hooks/queries/useQueryFetchUserLoggedIn";

export default function RentsCommentWriteUI() {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);
  const { data } = useQueryFetchUserLoggendIn();
  const [createReview] = useMutationCreateReview();

  const onChangeCentents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.currentTarget.value);
  };

  const onClickCreateReview = async () => {
    const createReveiwInPut = {
      comicId: router.query.boardId,
      userId: data.fetchUserLoggedIn.id,
      content: contents,
      rating: rating,
    };
    try {
      const result = await createReview({
        variables: {
          createReviewInput: {
            ...createReveiwInPut,
          },
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_REVIEWS,

        //   },
        // ],
      });
    } catch (error) {
      Modal.error({ content: "등록할 수 없습니다." });
      return;
    }
  };

  return (
    <S.Wrapper>
      <S.Title>100자평</S.Title>
      <S.RateBox>
        <p>이 만화를 평가해주세요!</p>
        <S.StarRate count={5} onChange={setRating} />
      </S.RateBox>
      <S.WriteWrapper>
        <S.Textarea
          onChange={onChangeCentents}
          placeholder={
            "리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."
          }
        />
      </S.WriteWrapper>
      <S.ButtonWrapper>
        <S.Button onClick={onClickCreateReview}>등록하기</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
