import styled from "@emotion/styled";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

export const OuterWrap = styled.div``;

export const InnerWrap = styled.div`
  padding: 50px 40px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-weight: bold;

  span {
    font-size: 0.875rem;
    color: #77170d;
  }
`;

export const ListWrap = styled.ul``;

export const List = styled.li`
  list-style: none;
  margin-bottom: 10px;
`;

export const Qustion = styled.span`
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: #fdfdfd;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 0 20px;
`;

export const Text = styled.p`
  color: #333333;
  display: flex;
  font-size: 1rem;
`;

export const Qmark = styled.div`
  color: #77170d;
  padding-right: 10px;
  font-size: 1.125rem;
`;

export const Up = styled(UpOutlined)`
  color: #333333;
  font-size: 0.75rem;
`;
export const Down = styled(DownOutlined)`
  color: #333333;
  font-size: 0.75rem;
`;

export const Answer = styled.div`
  color: #333333;
  background-color: #f8f8f8;
  padding: 20px 30px;
  line-height: 20px;
`;
