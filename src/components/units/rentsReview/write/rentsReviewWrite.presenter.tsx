import * as S from "./rentsReviewWrite.styles";
import React from "react";
import { Rate } from "antd";
import "antd/dist/antd.css";

export default function RentsCommentWriteUI() {
  return (
    <S.Wrapper>
      <S.Title>100자평</S.Title>
      <S.RateBox>
        <Rate />
      </S.RateBox>
      <S.WriteWrapper>
        <S.InputWrapper>
          <S.Textarea
            placeholder={
              "배송 문의나 욕설 및 인신공격성 글은 상품 페이지에서 노출 제외처리됩니다."
            }
          />
        </S.InputWrapper>
        <S.Button>등록</S.Button>
      </S.WriteWrapper>
      <S.ContentsWrapper>
        <S.Contents />
        <S.BottomWrapper>
          <S.ContentsLength>1/100</S.ContentsLength>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
