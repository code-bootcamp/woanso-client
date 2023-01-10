import styled from "@emotion/styled";

export const MyRentListWrap = styled.div`
  width: 100%;
  height: 620px;
  padding: 50px 40px;
`;

export const Title = styled.h3`
  font-weight: bold;
  color: #333333;
  font-size: 1rem;
  margin-bottom: 30px;

  span {
    color: #cccccc;
    font-size: 0.75rem;
  }
`;

export const ListsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const List = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid rgba(205, 205, 205, 0.7);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BookImg = styled.img`
  width: 170px;
  height: 100%;
  object-fit: cover;
`;

export const InfoWrap = styled.div`
  padding: 20px;
  width: 100%;
`;

export const BookName = styled.div`
  h4 {
    font-weight: bold;
  }
  margin-bottom: 8px;
`;

export const BookAuthor = styled.p`
  font-size: 0.875rem;
  color: #cccccc;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const BookRented = styled.p`
  font-size: 0.875rem;
  color: #cccccc;
`;

export const Btn = styled.div`
  width: 67px;
  height: 40px;
  border-radius: 8px;
  margin-right: 20px;
  background-color: #77170d;
  color: #ffffff;
  font-size: 0.75rem;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
`;

export const Btn2 = styled(Btn)`
  width: 90px;
  background-color: #ffffff;
  color: #738096;
  border: 1px solid #d1d5d9;
`;
