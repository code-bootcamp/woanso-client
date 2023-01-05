import { FrownOutlined, SmileOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Modal } from "antd";

export const InnerWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 50px;
  /* background-image: url("/rainbow_bg.jpg");
  background-size: cover; */
  background-color: #f4ffe499;
`;

export const Contents = styled.div`
  display: column;
  height: auto;
`;

export const TalkWrap = styled.div`
  width: 100%;
  height: 40%;
  background-color: lightblue;
  padding: 10px 4px;
`;

export const Line = styled.div`
  text-align: right;
  padding-bottom: 16px;
`;

export const Line2 = styled.div`
  text-align: left;
  padding-bottom: 16px;
`;

export const UserTalk = styled.span`
  padding: 5px 10px;
  background-color: white;
  border-radius: 20px;
`;

export const AdminTalk = styled.span`
  padding: 5px 10px;
  background-color: yellow;
  border-radius: 20px;
`;

export const BestTitle = styled.div`
  padding: 10px;
  border-bottom: 1px solid #00000021;
`;

export const BestWrapper = styled.div`
  width: calc(20% - 10px);
  height: 100%;
  margin-right: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  box-shadow: 4px 4px 10px 0px #00000021;
  background-color: white;
`;

export const BestListItem = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  box-shadow: 2px 2px 2px -1px #00000021;
  cursor: pointer;

  &:hover {
    background-color: #f4ffe499;
  }
`;

export const BestImg = styled.img`
  height: 50px;
  width: 50px;
`;

export const BestText = styled.p`
  font-size: 0.8rem;
  padding-left: 10px;
  width: calc(100% - 60px);
`;
export const ContentsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 80%;
  overflow: scroll;
`;
export const ContentWrapper = styled.div`
  width: calc(100% / 3 - 10px);
  height: 80%;
  margin-bottom: 20px;
  margin-right: 10px;
  border: 1px solid #d3d3d3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 4px 4px 10px 0px #00000021;
  background-color: white;
`;

export const HeaderWrap = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfoWrap = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
`;

export const AvatarWrap = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  display: flex;
`;

export const AvatarImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.div`
  font-size: 16px;
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 250px;
  /* height: 65%; */
  background-color: gray;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const IconWrap = styled.div`
  padding-left: 10px;
  margin-bottom: 10px;
  align-items: center;
  height: 6%;
  display: flex;
`;

export const Good = styled(SmileOutlined)`
  font-size: 15px;
  :hover {
    cursor: pointer;
    transition: 0.2s linear;
    color: #ec0e2a;
  }
`;

export const Bad = styled(FrownOutlined)`
  font-size: 15px;
  :hover {
    cursor: pointer;
    transition: 0.2s linear;
    color: #ec0e2a;
  }
`;

export const HeartCount = styled.div`
  margin: 0 10px;
`;

export const RemarkWrap = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

export const Remark = styled.div`
  height: 5%;
`;

export const MoreWrap = styled.div`
  padding-left: 10px;
  color: #bbbbbb;
  cursor: pointer;
`;

export const CreatedAt = styled.div``;

export const LiveTalkWrap = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 2px -1px #00000021;
`;

export const TalkText = styled.div``;
