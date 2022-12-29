import styled from "@emotion/styled";

export const OuterWrap = styled.div``;

export const InnerWrap = styled.div`
  padding: 150px 70px;
`;

export const ListWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SectionTitle = styled.h1``;

export const MenuListWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const MenuList = styled.div`
  font-size: 24px;
  margin-left: 4rem;
  padding-bottom: 8px;
  cursor: pointer;

  color: ${(props) => (props.isActive ? "#77170d" : "#000000")};
  border-bottom: ${(props) =>
    props.isActive ? "3px solid #77170d" : "3px solid #ffffff"};
`;

export const BooksListWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
  gap: 30px;
`;

export const BookList = styled.div``;
export const BookImgBox = styled.div``;
export const BookImg = styled.img`
  object-fit: cover;
  width: 400px;
  height: 480px;
`;
export const BookInfoWrap = styled.div`
  margin-top: 10px;
`;

export const BookName = styled.h3`
  margin-bottom: 10px;
`;

export const BookPrice = styled.div``;
