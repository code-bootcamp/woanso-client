import * as S from "./style";
import ReviewCommentWrite from "../ReviewComment/reviewComment.container";

export default function PhotoReviewCard() {
  return (
    <>
      <S.InnerWrap>
        <S.BestWrapper>
          <S.BestTitle>인기 게시글</S.BestTitle>
          <S.BestListItem>
            <S.BestImg src="/userAvatar.jpeg" />
            <S.BestText>다나카 지명 부타케~~</S.BestText>
          </S.BestListItem>
          <S.BestListItem>
            <S.BestImg src="/userAvatar.jpeg" />
            <S.BestText>오이시쿠나레 오이시쿠나레 모에모에 꿍~💛</S.BestText>
          </S.BestListItem>
          <S.BestListItem>
            <S.BestImg src="/userAvatar.jpeg" />
            <S.BestText>지명 받았스므이다</S.BestText>
          </S.BestListItem>

          <S.BestTitle>실시간 소통하기</S.BestTitle>

          <S.TalkWrap>
            <S.Line2>
              <S.AdminTalk>환영합니다!</S.AdminTalk>
            </S.Line2>
            <S.Line>
              <S.UserTalk>안녕</S.UserTalk>
            </S.Line>
            <S.Line>
              <S.UserTalk>나왔다간다</S.UserTalk>
            </S.Line>
            <S.Line>
              <S.UserTalk>ㅋㅋㅋㅋㅋ</S.UserTalk>
            </S.Line>
            <S.Line>
              <S.UserTalk>여기 모하는 곳이에요?</S.UserTalk>
            </S.Line>
            <S.Line2>
              <S.AdminTalk>qqq</S.AdminTalk>
            </S.Line2>
          </S.TalkWrap>
        </S.BestWrapper>

        <S.ContentsWrapper>
          <S.ContentWrapper>
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
                <S.Img src="/item1.png" />
              </S.ImgBox>

              <S.RemarkWrap>
                <S.Remark>다나카는 일보느 망가가 재미가 있으므이다</S.Remark>
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
          </S.ContentWrapper>
          <S.ContentWrapper>
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
                <S.Img src="/item2.png" />
              </S.ImgBox>

              <S.RemarkWrap>
                <S.Remark>다나카는 일보느 망가가 재미가 있으므이다</S.Remark>
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
          </S.ContentWrapper>
          <S.ContentWrapper>
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
                <S.Img src="/item3.png" />
              </S.ImgBox>

              <S.RemarkWrap>
                <S.Remark>다나카는 일보느 망가가 재미가 있으므이다</S.Remark>
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
          </S.ContentWrapper>
          <S.ContentWrapper>
            <S.Contents>
              <S.HeaderWrap>
                <S.UserInfoWrap>
                  <S.AvatarWrap>
                    <S.AvatarImg src="/userAvatar.jpeg" />
                  </S.AvatarWrap>
                  <S.Name>꽃츠미남</S.Name>
                </S.UserInfoWrap>
                <S.CreatedAt>1분전</S.CreatedAt>
              </S.HeaderWrap>
              <S.ImgBox>
                <S.Img src="/item4.png" />
              </S.ImgBox>

              <S.RemarkWrap>
                <S.Remark>다나카는 일보느 망가가 재미가 있으므이다</S.Remark>
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
          </S.ContentWrapper>
          <S.ContentWrapper>
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
          </S.ContentWrapper>
          <S.ContentWrapper>
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
          </S.ContentWrapper>
        </S.ContentsWrapper>

        {/* <S.LiveTalkWrap></S.LiveTalkWrap> */}
      </S.InnerWrap>
    </>
  );
}
