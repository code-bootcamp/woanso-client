import styled from "@emotion/styled";

export const OuterWrap = styled.div`
  border-top: 2px dashed #77170d;
`;

export const InnerWrap = styled.div`
  padding: 100px 50px;
`;

export const Title = styled.h1`
  padding-bottom: 20px;
`;

export const ListWrap = styled.ul`
  padding: 20px 0;
`;

export const List = styled.li`
  list-style: none;
  padding: 20px 0;
`;

export const Qustion = styled.div`
  font-size: 24px;
  padding: 30px 20px;
  cursor: pointer;
  color: #000;
  border-bottom: 1px solid #77170d;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.p`
  color: #000;
  display: flex;
`;

export const Qmark = styled.div`
  color: #fff;
  background-color: #77170d;
  padding: 0 5px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const Answer = styled.div`
  font-size: 20px;
  line-height: 40px;
  padding: 20px 0 0 65px;
`;
