import styled from "@emotion/styled";

export const RentsWrap = styled.div`
  width: 100%;
  padding: 0 16%;
`;

export const NavWrapper = styled.div`
  display: flex;
  padding-top: 180px;
  justify-content: center;
  margin-bottom: 25px;
`;

interface IsActiveProps {
  isActive: string;
}

export const Nav = styled.div`
  margin-right: 50px;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;

  color: ${(props: IsActiveProps) => (props.isActive ? "#77170d" : "#000000")};
`;

export const BookTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const BookTitle = styled.h3`
  font-size: 1.875rem; //30px
  font-weight: bolder;
  margin-bottom: 15px;

  span {
    color: #771700;
  }
`;

export const MoreBtn = styled.button`
  background: none;
`;

export const BookWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`;

export const BookListWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;
