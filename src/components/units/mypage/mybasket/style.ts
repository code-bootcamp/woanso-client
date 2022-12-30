import styled from "@emotion/styled";

export const MyBasket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BasketList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 120px;
`;
export const TopRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 1200px;
  margin: 0 15px;
  padding: 0 105px 15px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
`;
export const ListRow = styled.div`
  display: flex;
  padding-top: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  width: 1200px;
  :hover {
    cursor: pointer;
    background-color: #cccac67f;
  }
`;

export const List = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;
export const ListContents = styled.div`
  display: flex;
  gap: 100px;
  padding-bottom: 15px;
  margin-left: 120px;
`;

export const ProductImgBox = styled.div`
  width: 177px;
  height: 150px;
  border: 1px solid #bbbbbb;
  border-radius: 10px;
  margin-right: 20px;
`;
export const ProductImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const PriceOrNot = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 10px;
  margin-left: 200px;
`;
export const BuyButton = styled.button`
  background-color: #751312;
  color: #ffffff;
  width: 80px;
  height: 30px;
  font-size: 15px;
`;
export const DeleteButton = styled.button`
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 0.5);
  color: #d1c9c17f;
  width: 80px;
  height: 30px;
  font-size: 15px;
`;
// export const AllPrice = styled.div`
//   display: flex;
//   gap: 725px;
//   font-size: 30px;
//   font-weight: 600;
//   margin-left: 20px;
//   padding: 20px;
// `;
// export const Price = styled.div`
//   display: flex;
//   flex-direction: column;

//   align-items: flex-end;
// `;
