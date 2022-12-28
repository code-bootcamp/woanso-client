import styled from "@emotion/styled";

export const OuterWrap = styled.div``;

export const InnerWrap = styled.div``;

export const Title = styled.h1`
  margin: 100px 0 50px 0;
`;

export const WeeklyHotPicksWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const ItemsWrap = styled.div`
  /* display: inline-block; */
`;

export const ItemWrap = styled.div`
  border: 1px solid #555;
  position: relative;
`;

export const SpecialLabel = styled.div`
  padding: 10px 15px;
  color: #fff;
  background-color: #4399fa;
  position: absolute;
  right: 0;
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const ItemImg = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
`;

export const ItemTextsWrap = styled.div`
  padding: 20px;
`;

export const ItemName = styled.h5`
  margin-bottom: 5px;
`;

export const ItemPrice = styled.h5``;
