import * as S from "./style";
const FreeBoardsContents = [
  { nickName: "닉네임", time: "· 1시간", contents: "이거봄?" },
  { nickName: "ㄸㅜ", time: "· 3시간", contents: "오히려..." },
  { nickName: "해강", time: "· 6시간", contents: "음..." },
];

export default function FreeBoards() {
  return (
    <S.Wrapper>
      <S.TalkBox>
        {/* <FreeBoardsWrite /> */}
        {FreeBoardsContents.map((el) => (
          <>
            <S.MainBox>
              <S.TalkContents>
                <S.ProfileImg src="/profile-freeboard.png" />
                <S.Contents>
                  <S.NameAndTime>
                    <span className="name">{el.nickName}</span>
                    <span className="time">{el.time}</span>
                  </S.NameAndTime>
                  <div>
                    <div>{el.contents}</div>
                    <div>내용내용내용내용</div>
                    <div>내용내용내용내용</div>
                  </div>
                  <S.ImageBox src="/test_img.png" />
                </S.Contents>
              </S.TalkContents>
              <S.UnderIcons>
                <S.CommentsLikeDisLikeButton>
                  <img src="/icon/speech-bubble.png" />
                </S.CommentsLikeDisLikeButton>
                <S.LikeDisLike>
                  <div>
                    <S.CommentsLikeDisLikeButton>
                      <img src="/icon/thumbs-up.png" />
                    </S.CommentsLikeDisLikeButton>
                    <S.LikeCount>112</S.LikeCount>
                  </div>
                  <div>
                    <S.CommentsLikeDisLikeButton>
                      <img src="/icon/thumbs-down.png" />
                    </S.CommentsLikeDisLikeButton>
                    <S.LikeCount>12</S.LikeCount>
                  </div>
                </S.LikeDisLike>
              </S.UnderIcons>
            </S.MainBox>
          </>
        ))}
      </S.TalkBox>
    </S.Wrapper>
  );
}
