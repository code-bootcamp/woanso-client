import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 180px;
`;

export const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const TopContainer = styled.div`
  margin-bottom: 50px;
`;

export const h2 = styled.h2``;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  width: 120px;
  margin: 20px 0px 30px;
  span {
    font-size: 20px;
    font-weight: 400;
    color: #111;
  }
`;

export const Button = styled.button`
  width: 250px;
  height: 40px;
  background-color: #f4efe4;
  border: none;
  margin-right: 50px;
  cursor: pointer;
`;

export const Button2 = styled.button`
  width: 160px;
  height: 55px;
  border: none;
  margin: 50px 7px;
  background-color: #751312;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #bdbdbd;
  outline: none;
  margin: 0 2px;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  .quill {
    width: 100% !important;
  }
`;
export const Category2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Category3 = styled.div`
  width: 48%;
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const ImageButton = styled.label`
  display: inline-block;
  width: 150px;
  height: 150px;
  margin-right: 0.8rem;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  display: flex;
`;

export const BottomContainer = styled.div`
  width: 100%;
`;

// export const Form = styled.form``;

export const BtnInputContianer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const IsbnInputContainer = styled.div`
  width: 90%;
`;

export const PriceInputContainer = styled.div`
  width: 30%;
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 40px;
  cursor: pointer;
  `