import styled from "@emotion/styled";

export const MyRentListWrap = styled.div`
  width: 100%;
  height: 620px;
  padding: 50px 40px;
`;

export const Title = styled.h3`
  font-weight: bold;
  color: #333333;
  font-size: 1rem;

  span {
    color: #cccccc;
    font-size: 0.75rem;
  }
`;

export const ListsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const List = styled.div`
  margin-top: 30px;
`;

export const ListTitle = styled.h5`
  font-weight: bold;
  font-size: 0.875rem;
  color: #333333;
  margin-bottom: 10px;
`;

export const TextWrap = styled.div`
  margin-bottom: 5px;
`;

export const TextWrap2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ListTitle2 = styled.h5`
  font-weight: bold;
  font-size: 0.875rem;
  color: #333333;
`;

export const Subject = styled.span`
  font-size: 0.75rem;
  color: #333333;
  width: 100px;
  display: inline-block;
  font-weight: 500;
`;

export const Content = styled.span`
  font-size: 0.75rem;
  color: #333333;

  span {
    color: #77170d;
    font-weight: 500;
  }
`;

export const ImageWrap = styled.div`
  display: flex;
`;

export const BookImg = styled.img`
  height: 68px;
  width: 68px;
  object-fit: cover;
  margin-right: 20px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 50px;
`;

export const BtnWhite = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 8px;
  line-height: 45px;
  border: 1px solid #d1d5d9;
  color: #738096;
  font-size: 1rem;
`;

export const BtnBrown = styled(BtnWhite)`
  background-color: #77170d;
  color: #ffffff;
`;
