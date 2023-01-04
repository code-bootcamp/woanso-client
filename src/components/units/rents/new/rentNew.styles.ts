import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const TopContainer = styled.div`
  margin: 50px 0 80px;
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Title = styled.p`
  font-size: 50px;
`;

export const Title2 = styled.p`
  font-size: 32px;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  width: 120px;
  margin: 20px 30px 30px 0px;

  span {
    font-size: 24px;
    font-weight: 400;
    color: #111;
  }
`;

export const Button = styled.button`
  width: 250px;
  height: 70px;
  background-color: #f4efe4;
  font-size: 20px;
  border: none;
  border-radius: 15px;
  margin-right: 50px;
  cursor: pointer;
`;

export const Button2 = styled.button`
  width: 330px;
  height: 70px;
  border: none;
  border-radius: 20px;
  margin: 50px 7px;
  background-color: #77170d;
  color: white;
  font-size: 20px;
  /* font-family: "Noto Sans KR", "sans-serif", "roundGothicBold"; */
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 64px;
  border: 3px solid #f5efe3;
  border-radius: 20px;
  outline: none;
  margin: 10px 2px;
  padding: 40px;
  font-size: 24px;
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
  gap: 24px;
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
  border-radius: 15px;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const BottomContainer = styled.div`
  width: 100%;
`;

// export const Form = styled.form``;

export const BtnInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IsbnInputContainer = styled.div`
  width: 90%;
`;

export const PriceInputContainer = styled.div`
  width: 50%;
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 20px;
`;
