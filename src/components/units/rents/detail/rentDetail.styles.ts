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
  background-color: #d9d9d9;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoWrap = styled.div`
  width: 360px;
  height: 330px;
  background-color: #fffbf2;
  padding: 40px 30px;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InfoFlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const BookName = styled.h3`
  font-weight: bold;
  font-size: 1.25rem;
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
  margin-bottom: 7px;

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
  margin-top: 15px;
  height: 100px;
`;

export const Price = styled.p`
  color: #77170d;
  font-weight: bold;
  line-height: 47px;
`;

export const RentBtn = styled.button`
  width: 136px;
  height: 47px;
  background-color: #77170d;
  color: #ffffff;
`;

export const ReviewListBox = styled.div`
  width: 100%;
  padding: 30px 0;
  margin-top: 15px;
`;
