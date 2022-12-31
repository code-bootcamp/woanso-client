import styled from "@emotion/styled";

export const RentList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
export const RentMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RentTitle = styled.h1`
  margin-bottom: 20px;
`;
export const TopRow = styled.div`
  display: flex;
  width: 1300px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  align-items: center;
`;
export const DateList = styled.span`
  width: 80px;

  margin-left: 180px;
  margin-right: 60px;
`;
export const RentSerachMonth = styled.div`
  display: flex;
  gap: 50px;
`;
export const ChoiceMonth = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 4px;
  font-size: 20px;
  :hover {
    cursor: pointer;
  }
`;
export const RentSearchButton = styled.button`
  margin-left: 360px;
  background-color: #751312;
  width: 100px;
  height: 40px;
  border-radius: 4px;
  color: #ffffff;
  :hover {
    cursor: pointer;
  }
  font-size: 20px;
`;
export const RentDetailRow = styled.div`
  display: flex;
  width: 1300px;
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
  margin-right: 840px;
  color: #000000 60%;
  padding: 15px;
  font-size: 25px;
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
