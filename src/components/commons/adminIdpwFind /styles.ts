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
  change?: boolean;
}

export const Nav = styled.div`
  font-size: 20px;
  color: ${(props: StyleProps) => (props.change ? "black" : "#77170D")};
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
  color: ${(props: StyleProps) => (props.change ? "#77170D" : "black")};
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
  padding: 40px;
  display: flex;
  flex-direction: column;
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
  height: 28px;
  border-radius: 8px;
  padding: 6px 16px;
  background-color: #77170d;
  color: #ffffff;
  font-size: 12px;
  margin-top: 30px;
  cursor: pointer;

  position: absolute;
  right: 20px;
  top: -20px;
`;

export const DisabledBtn = styled(FindBtn)`
  background-color: #efe7d7;
  color: #ffffff;
  cursor: default;
`;
