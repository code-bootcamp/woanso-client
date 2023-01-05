import * as S from "./style";
import { useState } from "react";
import ReviewCommentWrite from "../ReviewComment/reviewComment.container";

export default function PhotoReviewCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClickMore = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <S.InnerWrap>
        <S.BestWrapper>
          <S.Name>실시간 Best 게시글</S.Name>
          <ul>
            <li>1. 오또케오또케</li>
            <li>2. 오이시쿠나레 오이시쿠나레</li>
            <li>3. 지명 받았스므이다</li>
            <li>4. 다나카상 사랑해</li>
          </ul>
        </S.BestWrapper>

        <S.Wrapper>
          <S.Contents>
            <S.HeaderWrap>
              <S.UserInfoWrap>
                <S.AvatarWrap>
                  <S.AvatarImg src="/userAvatar.jpeg" />
                </S.AvatarWrap>
                <S.Name>도깨비</S.Name>
              </S.UserInfoWrap>
              <S.CreatedAt></S.CreatedAt>
            </S.HeaderWrap>
            <S.ImgBox>
              <S.Img src="/userAvatar.jpeg" />
            </S.ImgBox>

            <S.RemarkWrap>
              <S.Remark>다나카는 일보느 망가가 재미가 있으므이다</S.Remark>

              <S.MoreWrap>
                {/* <S.Remark onClick={onClickMore}>더 보기</S.Remark> */}
              </S.MoreWrap>

              {/* <S.CreatedAt>1분전</S.CreatedAt> */}
            </S.RemarkWrap>
            <S.IconWrap>
              {/* <S.Good /> */}
              😄
              <S.HeartCount>10</S.HeartCount>
              {/* <S.Bad /> */}
              🙁
              <S.HeartCount>2</S.HeartCount>
            </S.IconWrap>
          </S.Contents>
          <ReviewCommentWrite />
        </S.Wrapper>
      </S.InnerWrap>
    </>
  );
}
