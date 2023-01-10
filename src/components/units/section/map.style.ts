import styled from "@emotion/styled";

export const BookSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const BookImg = styled.img`
  width: 184px;
  height: 250px;
  margin-bottom: 10px;
`;

export const BookInfo = styled.div`
  padding: 8px;
`;
export const BookInfoSub = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BookTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const BookAuthor = styled.p`
  font-size: 0.875rem;
  font-weight: bold;
  color: #cccccc;
`;

export const BookPrice = styled.p`
  font-size: 0.875rem;
  font-weight: bold;
  color: #dc3232;
`;
