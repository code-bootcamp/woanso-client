import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.03);
`;

export const TalkBox = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
`;
export const TalkContents = styled.div`
  display: flex;
  margin: 15px 55px;
`;
export const ProfileImg = styled.img`
  width: 100px;
  height: 110px;
`;

export const NameAndTime = styled.div`
  width: 60%;
  display: flex;
  gap: 10px;

  .name {
    font-weight: 600;
  }
  .time {
    color: gray;
  }
`;
export const MainBox = styled.div`
  width: 750px;
  /* border: 1px solid black; */
  height: auto;
  border: 1px solid rgba(0, 0, 0, 0.03);
  :hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const ImageBox = styled.img`
  width: 450px;
  height: 600px;
  border-radius: 30px;
  margin-top: 25px;
`;

export const UnderIcons = styled.div`
  margin-bottom: 8%;
  display: flex;
  justify-content: center;

  gap: 80px;
`;

export const CommentAndLikeIcon = styled.img`
  width: 15px;
  height: 15px;
  :hover {
    cursor: pointer;
  }
`;
export const LikeDisLike = styled.div`
  gap: 60px;
  display: flex;
`;

export const CommentsLikeDisLikeButton = styled.button`
  all: unset;
  width: 20px;
  :hover {
    cursor: pointer;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;
export const LikeCount = styled.span`
  font-size: 10px;
  margin-left: 5px;
`;
