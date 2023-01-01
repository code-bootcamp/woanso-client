import styled from "@emotion/styled";

export const OuterWrap = styled.div``;

export const InnerWrap = styled.div`
  display: flex;
  margin: 50px 50px;
  justify-content: space-between;
`;

export const LeftContainer = styled.div``;

export const LeftTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
`;

export const LeftNavWrap = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  gap: 30px;
  margin: 15px 0;
`;

export const LeftNav = styled.div`
  cursor: pointer;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0 50px;
`;

export const LeftInfo = styled.div``;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 20px 0;
`;

export const InfoName = styled.div`
  font-weight: 600;
`;

export const InfoContent = styled.div``;

export const LeftWrap = styled.div`
  display: flex;
  margin: 10px 5px;
  gap: 20px;
  font-size: 14px;
  span {
    color: grey;
    margin-top: 50px;
    font-size: 14px;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const Icon = styled.div`
  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
