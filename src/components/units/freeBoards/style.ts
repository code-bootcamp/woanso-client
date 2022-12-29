import styled from "@emotion/styled";

export const TalkBox = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;
export const TalkContents = styled.div`
  display: flex;
  margin: 75px 60px;
`;
export const ProfileImg = styled.img`
  width: 120px;
  height: 130px;
`;
export const Profile = styled.div``;
export const NameAndTime = styled.div`
  display: flex;
  gap: 10px;
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
  object-fit: cover;
`;

export const UnderIcons = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

  gap: 150px;
`;

export const CommentAndLikeIcon = styled.img`
  width: 15px;
  height: 15px;
  :hover {
    cursor: pointer;
  }
`;
export const LikeCount = styled.span`
  font-size: 10px;
`;
