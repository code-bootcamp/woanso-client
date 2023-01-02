import * as S from "./style";
import {
  faThumbsDown,
  faThumbsUp,
  faCommentDots,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
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
                <S.CommentsLikeDisLikeButton>
                  <FontAwesomeIcon icon={faCommentDots} />
                </S.CommentsLikeDisLikeButton>
                <S.LikeDisLike>
                  <div>
                    <S.CommentsLikeDisLikeButton>
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </S.CommentsLikeDisLikeButton>
                    <S.LikeCount>112</S.LikeCount>
                  </div>
                  <div>
                    <S.CommentsLikeDisLikeButton>
                      <FontAwesomeIcon icon={faThumbsDown} />
                    </S.CommentsLikeDisLikeButton>
                    <S.DisLikeCount>12</S.DisLikeCount>
                  </div>
                </S.LikeDisLike>
              </S.UnderIcons>
            </S.MainBox>
          </>
        ))}
      </S.TalkBox>
    </>
  );
}
