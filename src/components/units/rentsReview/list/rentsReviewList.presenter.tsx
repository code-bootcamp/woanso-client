import * as S from "./rentsReviewList.styles";
import React from "react";
import { Rate } from "antd";

export default function RentsReviewListUI() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.LeftContainer>
          <S.StarBox>
            <Rate />
          </S.StarBox>
        </S.LeftContainer>
        <S.RightContainer>
          <S.ReviewContent>재밌어요 추천!</S.ReviewContent>
          <S.ReviewInfo>
            <S.Reviewer>쩨리</S.Reviewer>
            <S.CreatedAt>2022-12-30</S.CreatedAt>
          </S.ReviewInfo>
          <S.BtnWrapper>
            <S.Button>수정</S.Button>
            <S.Button>삭제</S.Button>
          </S.BtnWrapper>
        </S.RightContainer>
      </S.Container>
    </S.Wrapper>
  );
}
