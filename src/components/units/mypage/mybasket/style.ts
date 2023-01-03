import { CloseOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const MyBasket = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const BasketList = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  padding: 20px;
  margin-top: 80px;
`;
// export const TopRow = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   width: 1200px;
//   margin: 0 15px;
//   padding: 0 105px 15px;
//   border-bottom: 2px solid rgba(0, 0, 0, 0.3);
// `;
export const ListRow = styled.div`
  width: 820px;
  height: 200px;

  display: flex;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  padding-top: 30px;
  /* border: 1px solid rgba(0, 0, 0, 0.3); */
  border-radius: 4px;
  margin: 0 20px 40px 20px;

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
  gap: 80px;
  padding-bottom: 15px;
  margin-left: 50px;
  /* width: 850px;
  height: 200px; */
`;

export const ProductImgBox = styled.div`
  width: 177px;
  height: 150px;
  border: 1px solid #bbbbbb;
  border-radius: 10px;
  margin-right: 5px;
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
export const RentError = styled(CloseOutlined)`
  color: red;
  margin-left: 20px;
  * {
    font-size: 30px;
  }
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 10px;
  /* margin-right: 1000px; */
`;
export const RentButton = styled.button`
  background-color: #751312;
  color: #ffffff;
  width: 80px;
  height: 30px;
  font-size: 15px;
  :hover {
    cursor: pointer;
  }
`;
export const RentButton2 = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  color: #d1c9c17f;
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
  :hover {
    cursor: pointer;
  }
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
