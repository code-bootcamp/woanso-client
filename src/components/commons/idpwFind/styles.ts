import styled from "@emotion/styled";

export const OutWrapper = styled.div`
  background: #fffbf2;
  height: 1176px;
`;

export const InnerWrapper = styled.div`
  margin: 100px 0px;
  text-align: center;
`;

export const IdpwFindWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

interface StyleProps {
  qqq?: boolean;
  ccc?: boolean;
  bbb?: boolean;
}

export const Nav = styled.div`
  font-size: 20px;
  color: ${(props: StyleProps) => (props.qqq ? "#77170D" : "black")};
  padding: 7px 20px;
  height: 44px;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  cursor: pointer;
`;

export const Nav2 = styled.div`
  font-size: 20px;
  color: ${(props: StyleProps) => (props.ccc ? "#77170D" : "black")};
  border-radius: 8px 8px 0 0;
  padding: 7px 20px;
  height: 44px;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 450px;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 340px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #d1d5d9;
  border-radius: 8px;
  margin-bottom: 10px;
  position: relative;

  input {
    width: 100%;
    padding: 20px;
    border: none;
    border-radius: 8px;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const FindBtn = styled.button`
  width: 50px;
  height: 28px;
  padding: 6px;
  background-color: #f5efe3;
  font-size: 12px;
  margin-top: 30px;
  cursor: pointer;
  :hover {
    color: #77170d;
  }
  position: absolute;
  right: 20px;
  top: -20px;
`;
