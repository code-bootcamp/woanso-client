import styled from "@emotion/styled";
import { SmileOutlined } from "@ant-design/icons";
export const OuterWrap = styled.div``;

export const InnerWrap = styled.div`
  margin: 100px 0;
`;

export const ListWrap = styled.div`
  padding: 20px;
  display: flex;
  border-top: 1px solid #dddddd;
`;

export const BookImgBox = styled.div``;

export const BookImg = styled.img`
  width: 240px;
  height: 300px;
  background-color: aqua;
`;

export const BookInfoWrap = styled.div`
  padding: 10px 50px;
  width: 300px;
  height: 100%;
`;

export const BookStory = styled.div`
  padding: 10px 50px;
  width: 50%;
  height: 100%;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Info = styled.h3`
  margin-bottom: 50px;
`;

export const BookIsRent = styled.div`
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
`;

export const BookBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 300px;
`;
export const Like = styled(SmileOutlined)`
  font-size: 40px;
  color: #77170d;
`;
export const LikeCount = styled.div`
  font-size: 20px;
  margin-right: 12px;
  margin-bottom: 50px;
  color: #77170d;
`;
export const BtnCart = styled.button`
  width: 200px;
  height: 50px;
  background-color: #f5efe3;
  color: #77170d;
  font-weight: 700;
  margin: 20px 0;
  border-radius: 4px;
`;
export const BtnRent = styled.button`
  width: 200px;
  height: 50px;
  background-color: #f5efe3;
  color: #77170d;
  font-weight: 700;
  border-radius: 4px;
`;
