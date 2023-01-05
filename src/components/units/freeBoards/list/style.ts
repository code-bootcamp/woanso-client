import { FrownOutlined, SmileOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Modal } from "antd";

export const InnerWrap = styled.div`
  display: flex;
`;

export const Contents = styled.div`
  /* height: 90%; */
  display: column;
  height: auto;
`;

export const BestWrapper = styled.div`
  /* margin-bottom: 20px;
  margin-right: 40px; */
  width: 240px;
  height: 200px;
  border: 1px solid #d3d3d3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 4px 4px 10px 0px #00000021;
`;

export const Wrapper = styled.div`
  margin-bottom: 20px;
  margin-right: 40px;
  width: 480px;
  border: 1px solid #d3d3d3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 4px 4px 10px 0px #00000021;
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
  /* height: 65%; */
  background-color: gray;
`;

export const Img = styled.img`
  width: 100%;
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

export const CusModal = styled(Modal)`
  .ant-modal-body {
    height: 700px;
    padding: 24px;
    padding-top: 40px;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
  }
  .ant-modal-footer {
    height: 0px;
    border: none;
  }
  .ant-btn {
    visibility: hidden;
  }
  .ant-modal-content {
    position: relative;
    background-clip: padding-box;
    border: 0;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
      0 9px 28px 8px rgb(0 0 0 / 5%);
    pointer-events: auto;
  }
  .ant-modal-body {
    height: 700px;
    padding: 24px;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
    background-color: white;
    opacity: 0.2;
  }
`;
