import styled from "@emotion/styled";
import {
  HeartOutlined,
  HeartFilled,
  StarOutlined,
  StarFilled,
} from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 180px;
`;

export const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

export const DetailWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 80px;
`;

export const ImageWrap = styled.div`
  width: 600px;
  height: 330px;
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  position: relative;

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
  }
`;

export const Img = styled.img`
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

export const InfoWrap = styled.div`
  width: 360px;
  height: 330px;
  background-color: #fffbf2;
  padding: 40px 30px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoFlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const BookName = styled.h3`
  font-weight: bold;
  font-size: 1.25rem;
  text-align: left;
`;

export const HearIcon = styled(HeartOutlined)`
  color: rgba(0, 0, 0, 0.5);
  font-size: 1.25rem;
`;

export const HearIconClicked = styled(HeartFilled)`
  color: orangered;
  font-size: 1.25rem;
`;

export const Star = styled(StarOutlined)`
  font-size: 0.625rem;
  color: #ffd600;
`;

export const fillStar = styled(StarFilled)`
  font-size: 0.625rem;
  color: #ffd600;
`;

export const BookScore = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  p {
    color: #333333;
    font-size: 0.625rem;
    padding-left: 10px;
  }
`;

export const BookAuthor = styled.p`
  color: #77170d;
  font-size: 0.875rem;
  font-weight: bold;
`;

export const BookDetail = styled.p`
  font-size: 0.875rem;
  height: 100px;
  margin-bottom: 8px;
`;

export const Price = styled.p`
  color: #77170d;
  font-weight: bold;
  line-height: 40px;
`;

export const RentBtn = styled.button`
  width: 120px;
  height: 40px;
  background-color: #77170d;
  color: #ffffff;
  border-radius: 8px;
  font-weight: bold;
`;

export const ReviewListBox = styled.div`
  width: 100%;
  padding: 30px 0;
  margin-top: 15px;
`;
