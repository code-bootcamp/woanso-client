import styled from "@emotion/styled";

export const OuterWrap = styled.div``;
export const InnerWrap = styled.div`
  width: 1000px;
  margin: 80px auto;
`;

export const Line = styled.div`
  width: 1000px;
  height: 1px;
  background-color: black;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 1.875rem;

  h3 {
    margin-right: 15px;
    font-weight: bolder;

    span {
      color: #77170d;
    }
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
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

export const BookWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
