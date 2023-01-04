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

interface IsActiveProps {
  isActive: string;
}

export const MenuList = styled.div`
  font-size: 24px;
  margin-left: 4rem;
  padding-bottom: 8px;
  cursor: pointer;

  color: ${(props: IsActiveProps) => (props.isActive ? "#77170d" : "#000000")};
  border-bottom: ${(props: IsActiveProps) =>
    props.isActive ? "3px solid #77170d" : "3px solid #ffffff"};
`;

export const BooksListWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

export const BookList = styled.div``;
export const BookImgBox = styled.div`
  width: 100%;
`;
export const BookImg = styled.img`
  max-width: 100%;
  height: 100px;
`;
export const BookInfoWrap = styled.div`
  margin-top: 10px;
`;

export const BookName = styled.h3`
  margin-bottom: 10px;
`;
