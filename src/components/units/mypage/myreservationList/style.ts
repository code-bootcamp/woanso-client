import { EllipsisOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const ReservationBox = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 100px;
`;
export const ReservationList = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopRowReservation = styled.div`
  display: flex;
  justify-content: center;

  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  gap: 260px;
  font-size: 25px;
  padding: 15px 0;
`;
export const Number = styled.span`
  width: 120px;
  margin-left: 50px;
`;
export const Price = styled.span`
  width: 180px;
  padding-left: 80px;
`;
export const Icon = styled(EllipsisOutlined)`
  width: 40px;
  padding-left: 120px;
  * {
    font-size: 25px;
  }
`;
export const ReservationDetail = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  padding: 20px 0px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const ReservationNumber = styled.span`
  width: 150px;
  font-size: 20px;
  margin-left: 95px;
`;
export const ReservationBookTitle = styled.span`
  width: 150px;

  margin-left: 120px;
  font-size: 20px;
`;
export const NumberAndTitle = styled.div`
  display: flex;
  gap: 120px;
`;
export const ReservationPrice = styled.span`
  width: 150px;
  margin-left: 180px;
  font-size: 20px;
`;
export const ReservationPeriod = styled.span`
  width: 250px;

  margin-left: 100px;
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
