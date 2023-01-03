import styled from "@emotion/styled";

export const PointWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
export const PointMainList = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-top: 80px;
  margin-bottom: 100px;
`;
// export const TopRow = styled.div`
//   display: flex;
//   justify-content: center;
//   /* border-top: 2px solid rgba(0, 0, 0, 0.3); */
//   /* border-bottom: 1px solid rgba(0, 0, 0, 0.3); */
//   padding: 15px;
//   padding-left: 160px;
//   font-size: 25px;
//   background-color: rgba(242, 229, 200, 0.6);
// `;
export const PointList = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  justify-content: center;
  padding: 15px;
  padding-left: 120px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(244, 239, 228, 0.6);
  border-radius: 4px;
  width: 850px;
  height: 60px;
  margin: 0 25px 25px 0;
`;

export const Status = styled.div`
  width: 180px;
  margin-right: 30px;
`;
export const Amount = styled.div`
  width: 200px;
  margin-left: 40px;
  margin-right: 20px;
`;
export const Balance = styled.div`
  width: 250px;
  /* margin-left: 100px; */
`;
