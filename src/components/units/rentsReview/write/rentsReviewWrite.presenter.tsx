import * as S from "./rentsReviewWrite.styles";
import React from "react";
import { Rate } from "antd";
import "antd/dist/antd.css";

export default function RentsCommentWriteUI() {
  return (
    <S.Wrapper>
      <S.Title>100자평</S.Title>
      <S.RateBox>
        <p>이 만화를 평가해주세요!</p>
        <Rate />
      </S.RateBox>
      <S.WriteWrapper>
        <S.Textarea
          placeholder={
            "리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."
          }
        />
      </S.WriteWrapper>
      <S.ButtonWrapper>
        <S.Button>등록하기</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
