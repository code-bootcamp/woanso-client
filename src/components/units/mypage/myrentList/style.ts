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

  span {
    color: #cccccc;
    font-size: 0.75rem;
  }
`;

interface IsActiveProps {
  isActive: string;
}

export const MonthWrap = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Month = styled.p`
  padding-left: 10px;
  font-size: 0.75rem;
  color: ${(props: IsActiveProps) => (props.isActive ? "#333333" : "#cccccc")};
  font-weight: ${(props: IsActiveProps) => (props.isActive ? "bold" : "nomal")};
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
  cursor: pointer;
`;

export const BookImg = styled.img`
  width: 150px;
  object-fit: cover;
`;

export const InfoWrap = styled.div`
  padding: 20px;
  width: 100%;
`;

export const BookName = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;

  h4 {
    font-weight: bold;
  }

  p {
    font-size: 0.75rem;
  }
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
