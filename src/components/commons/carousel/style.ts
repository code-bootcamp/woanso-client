import styled from "@emotion/styled";

export const OuterWrap = styled.div``;

export const InnerWrap = styled.div`
  padding: 50px 100px 120px 50px;

  border-bottom: 2px dashed #77170d;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`;

export const Text = styled.p`
  margin: 30px 0;
  font-size: 24px;
  text-align: center;
`;

export const MovingBooksWrap = styled.div`
  margin-bottom: 50px;
`;

export const Book = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
`;

export const SliderImg = styled.img`
  width: 200px;
  height: 250px;
`;

export const AddmoreBtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 50px;
`;

export const AddMoreBtn = styled.button`
  background-color: #77170d;
  padding: 10px 30px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;
