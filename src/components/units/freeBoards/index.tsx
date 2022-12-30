import * as S from "./style";

const FreeBoardsContents = [
  { nickName: "닉네임", time: "1시간", contents: "이거봄?" },
  { nickName: "ㄸㅜ", time: "3시간", contents: "오히려..." },
  { nickName: "해강", time: "6시간", contents: "음..." },
];
export default function FreeBoards() {
  return (
    <>
      <S.TalkBox>
        {FreeBoardsContents.map((el) => (
          <>
            <S.MainBox>
              <S.TalkContents>
                <S.ProfileImg src="/profile-freeboard.png" />
                <S.Contents>
                  <S.NameAndTime>
                    <span>{el.nickName}</span>
                    <span>{el.time}</span>
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
                <S.CommentAndLikeIcon src="/commentIcon.png" />
                <div>
                  <S.CommentAndLikeIcon src="/likeIcon.png" />
                  <S.LikeCount>112</S.LikeCount>
                </div>
              </S.UnderIcons>
            </S.MainBox>
          </>
        ))}
      </S.TalkBox>
    </>
  );
}
