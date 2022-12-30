import styled from "@emotion/styled";

export const RentList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;
export const RentMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RentTitle = styled.h1`
  margin-bottom: 20px;
`;
export const RentDetailRow = styled.div`
  display: flex;
  width: 1350px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 30px 15px;

  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;
export const RentBook = styled.div`
  width: 226px;
  height: 162px;
  background-color: #ffffff;
`;
export const RentBookImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const Detail = styled.div`
  display: flex;
  /* gap: 250px; */
  margin-left: 100px;
`;
export const Rents = styled.div`
  display: flex;
`;
export const TitlePrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const PaymentStatus = styled.div`
  display: flex;
`;
export const Date = styled.div`
  margin-right: 120px;
`;
export const BookTitle = styled.div`
  width: 200px;

  margin-right: 200px;
`;
export const Way = styled.div`
  margin-right: 100px;

  width: 150px;
`;
export const Status = styled.div`
  width: 150px;
`;
