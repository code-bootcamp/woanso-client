import styled from "@emotion/styled";

export const OuterWrap = styled.div``;

export const InnerWrap = styled.div`
  padding: 100px;
`;

export const ListWrap = styled.div`
  padding: 20px 0 20px 20px;
  display: flex;
  border-top: 1px solid #dddddd;
`;

export const BookImgBox = styled.div``;

export const BookImg = styled.img`
  width: 240px;
  height: 300px;
  background-color: aqua;
`;

export const BookInfoWrap = styled.div`
  padding: 10px 50px;
  width: 500px;
  height: 100%;
`;

export const MiddleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
`;

export const BookStory = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const BookBtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const BtnCart = styled.button`
  width: 100%;
  height: 50px;
  background-color: #f5efe3;
  color: #77170d;
  font-weight: 700;
  margin: 20px 0;
  border-radius: 45px;
`;
export const BtnRent = styled.button`
  width: 100%;
  height: 50px;
  background-color: #f5efe3;
  color: #77170d;
  font-weight: 700;
  border-radius: 45px;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const Info = styled.h5`
  margin-bottom: 50px;
`;

export const BookIsRent = styled.div`
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
`;

export const TextCircle = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  border: 3px solid #77170d;
  color: #77170d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* transition: all 0.2s ease-in-out;
  cursor: pointer;
   :hover {
    transform: rotateY(360deg);
    border: none;
    background: #77170d;
    color: #ffffff;
  }  */
`;

export const Open = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  font-family: "yang";
`;

export const TextCircle2 = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  border: 3px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Close = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  color: #ddd;
  font-family: "yang";
`;
