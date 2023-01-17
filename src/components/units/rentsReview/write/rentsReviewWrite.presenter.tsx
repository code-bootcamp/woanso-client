import * as S from "./rentsReviewWrite.styles";
import React, { ChangeEvent, useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { useMutationCreateReview } from "../../../../commons/hooks/mutaions/useMutationCreateReview";
import { useQueryFetchUserLoggendIn } from "../../../../commons/hooks/queries/useQueryFetchUserLoggedIn";
import { FETCH_REVIEW } from "../../../../commons/hooks/queries/useQueryFetchReview";

export default function RentsCommentWriteUI({ comicId }: any) {
  const [contents, setContents] = useState("");
  const [value, setValue] = useState(5);
  const { data: user } = useQueryFetchUserLoggendIn();
  const [createReview] = useMutationCreateReview();

  const onChangeCentents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.currentTarget.value);
  };

  const onClickCreateReview = async () => {
    const createReveiwInPut = {
      comicId,
      userId: user.fetchUserLoggedIn?.id,
      content: contents,
      rating: value,
    };

    try {
      const result = await createReview({
        variables: {
          createReviewInput: {
            ...createReveiwInPut,
          },
        },
        refetchQueries: [{ query: FETCH_REVIEW, variables: { comicId } }],
      });

      Modal.success({ content: "리뷰를 등록했습니다." });
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
        <S.StarRate onChange={setValue} value={value} />
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
        <S.Button type="submit" onClick={onClickCreateReview}>
          등록하기
        </S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
