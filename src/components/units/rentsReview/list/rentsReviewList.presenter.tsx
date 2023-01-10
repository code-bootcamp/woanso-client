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
          <S.ReviewInfo>
            <S.Reviewer>쩨리</S.Reviewer>
            <S.CreatedAt>2022-12-30</S.CreatedAt>
          </S.ReviewInfo>
        </S.LeftContainer>
        <S.RightContainer>
          <S.ReviewContent>재밌어요 추천!</S.ReviewContent>
        </S.RightContainer>

        <S.BtnWrapper>
          <S.Button>
            <img src="/icon/edit_icon.png" />
          </S.Button>
          <S.Button>
            <img src="/icon/delete_icon.png" />
          </S.Button>
        </S.BtnWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
