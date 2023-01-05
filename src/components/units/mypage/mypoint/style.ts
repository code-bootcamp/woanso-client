import styled from "@emotion/styled";

export const OuterWrap = styled.div``;

export const InnerWrap = styled.div`
  padding: 100px;
  display: flex;
`;

export const LeftWrap = styled.div`
  width: calc(37% - 10px);
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 50px 150px 50px;
  background-image: url("/blue_bg.jpg");
  background-size: cover;
`;

export const ImageWrap = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #eee;
`;
export const BookCoverImg = styled.img`
  width: calc(100% / 10 - 4px);
  margin: 2px;
`;

export const UserName = styled.p`
  margin-bottom: 10px;
`;
export const UserPoint = styled.div`
  width: 10%;
  height: 10px;
  background-color: grey;
  border: 4px solid black;
`;

export const ChargePointWrap = styled.div``;
export const ChageInput = styled.input``;
export const ChargeBtn = styled.button``;
export const OptionWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 50px;
`;
export const ChageOption = styled.div`
  width: calc(100% / 4 - 8px);
  margin: 4px;
  padding: 10px 0;
  background-color: rgba(0, 0, 0, 0.25);
  color: white;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
`;

export const UserWrap = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`;

export const PointWrapper = styled.div`
  width: 63%;
  padding: 70px 50px;
  background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PointMainList = styled.div`
  width: 100%;
  overflow: scroll;
`;

export const PointList = styled.div`
  /* width: 200px; */
  background-color: white;
  border: 1px solid grey;
`;

export const Status = styled.p`
  width: 180px;
  margin-right: 30px;
`;
export const Amount = styled.p`
  width: 200px;
  margin-left: 40px;
  margin-right: 20px;
`;
export const Balance = styled.p`
  width: 250px;
  /* margin-left: 100px; */
`;
