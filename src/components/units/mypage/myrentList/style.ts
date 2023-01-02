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
  width: 1800px;
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
  margin-left: 800px;
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

export const RentBook = styled.div`
  width: 180px;
  height: 180px;
  margin-left: 40px;
  margin-top: 10px;
`;
export const RentBookImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const Detail = styled.div`
  display: flex;

  width: 850px;
  padding-left: 60px;
  border-top: 1px solid #f5c4c354;
`;
export const Rents = styled.div`
  display: flex;
  padding: 40px 50px;
`;
export const TitlePrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const CardList = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const CardBox = styled.div`
  margin: 0 40px 40px 0;
  width: 850px;
  height: 500px;
  box-shadow: 5px 5px 15px 8px rgba(0, 0, 0, 0.3);
  margin-left: 20px;
  border-radius: 10px;
`;
export const Date = styled.div`
  margin-left: 20px;
  color: #000000 60%;
  padding: 15px;
  font-size: 25px;
`;
export const RentDetailRow = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #f5c4c354;
  align-items: flex-start;
  font-size: 20px;
  padding: 25px 0;
  gap: 50px;
`;
export const BookTitle = styled.div`
  width: 200px;
  margin-right: 100px;
`;
export const PaymentStatus = styled.div`
  display: flex;
`;
export const Way = styled.div`
  margin-right: 80px;
  margin-left: 20px;
  width: 150px;
`;
export const Status = styled.div`
  width: 150px;
`;
