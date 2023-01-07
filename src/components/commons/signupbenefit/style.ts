import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 100%;
  padding: 50px;
  background-color: #f4efe4;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EventSubTitle = styled.p`
  color: #751312;
  font-size: 24px;
  padding-bottom: 20px;
`;

export const EventTitle = styled.h1`
  font-weight: 500;
  font-size: 2em;
  padding-bottom: 40px;
`;

export const EventBenefit = styled.p`
  font-size: 20px;
`;

export const Strong = styled.span`
  color: #ffffff;
  background-color: #751312;
  padding: 5px 15px;
  border-radius: 4px;
`;

export const PointBox = styled.div`
  margin-top: 70px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  background: linear-gradient(to left, #fbb034 20%, #f9d976 80%);
  width: 400px;
  height: 200px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PointText = styled.p`
  margin-bottom: 15px;
  font-size: 20px;
  font-family: "yang";
`;
export const PointAmount = styled.p`
  font-size: 50px;
  font-family: "yang";
  color: #000;
  letter-spacing: 1px;
`;
