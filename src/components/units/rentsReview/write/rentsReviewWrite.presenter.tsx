import * as S from "./rentsReviewWrite.styles";
import React, { ChangeEvent, useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { useMutationCreateReview } from "../../../../commons/hooks/mutaions/useMutationCreateReview";
import { useRouter } from "next/router";
import { useQueryFetchUserLoggendIn } from "../../../../commons/hooks/queries/useQueryFetchUserLoggedIn";
import { FETCH_REVIEWS } from "../../../../commons/hooks/queries/useQueryFetchReviews";

export default function RentsCommentWriteUI(props: any) {
  const [contents, setContents] = useState("");
  const [like, setLike] = useState();
  const { data: user } = useQueryFetchUserLoggendIn();
  const [createReview] = useMutationCreateReview();

  const onChangeCentents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.currentTarget.value);
  };
  console.log(props);

  const onClickCreateReview = async () => {
    const createReveiwInPut = {
      comicId: props.comicId,
      userId: user.fetchUserLoggedIn.id,
      content: contents,
      rating: Number(like),
    };
    try {
      const result = await createReview({
        variables: {
          createReviewInput: {
            ...createReveiwInPut,
          },
        },
        refetchQueries: [
          {
            query: FETCH_REVIEWS,
          },
        ],
      });
      console.log(result);
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
        <S.StarRate onChange={setLike} value={like} />
      </S.RateBox>
      <S.WriteWrapper>
        <S.Textarea
          maxLength={100}
          placeholder={
            "리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."
          }
          onChange={onChangeCentents}
        />
      </S.WriteWrapper>
      <S.ButtonWrapper>
        <S.Button onClick={onClickCreateReview}>등록하기</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
