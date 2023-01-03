import { EllipsisOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const ReservationBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
export const ReservationList = styled.div`
  width: 1800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ReservationWrapper = styled.div`
  width: 850px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 5px 5px 15px 8px rgba(0, 0, 0, 0.3);
  padding: 0 25px 0 20px;
  margin: 0 40px 40px 0;
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 80px;
`;
export const TopRowReservation = styled.div`
  display: flex;
  justify-content: center;

  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  /* gap: 200px; */
  font-size: 25px;
  padding: 15px 0;
`;
export const Number = styled.span`
  width: 180px;
  /* margin-left: 100px; */
  /* margin-right: 100px; */
`;
export const Price = styled.span`
  width: 200px;
  margin-left: 100px;
`;
export const Icon = styled(EllipsisOutlined)`
  width: 30px;
  /* padding-left: 5px; */
  * {
    font-size: 25px;
  }
`;
export const ReservationDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding: 20px 0;
  text-align: center;
`;

export const ReservationNumber = styled.span`
  width: 150px;
  font-size: 20px;
  margin-left: 20px;
`;
export const ReservationBookTitle = styled.span`
  width: 100px;

  margin-left: 30px;
  font-size: 20px;
`;
export const NumberAndTitle = styled.div`
  display: flex;
`;
export const ReservationPrice = styled.span`
  width: 150px;
  margin-left: 50px;
  font-size: 20px;
`;
export const ReservationPeriod = styled.span`
  width: 250px;

  /* margin-left: 10px; */
`;
export const Cancel = styled.button`
  width: 130px;
  height: 40px;
  background-color: #c41210;
  color: #ffffff;
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
`;
