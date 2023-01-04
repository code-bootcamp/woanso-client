import styled from "@emotion/styled";
import { PhoneOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";

export const OuterWrap = styled.div`
  position: fixed;
  top: 100px;
  right: 30px;
  z-index: 100;
`;

export const InnerWrap = styled.div``;

export const Box = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgba(119, 23, 13, 0.67);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const PhoneIcon = styled(PhoneOutlined)`
  color: #f9d976;
  font-size: 35px;
`;

interface StyleProps {
  open: boolean;
}

export const BoxLong = styled.div`
  width: 90px;
  border-radius: 90px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  background: ${(props: StyleProps) =>
    props.open ? "rgba(245, 239, 227, .68)" : "rgba(0,0,0,0)"};
`;

export const PlusIcon = styled(PlusOutlined)`
  color: #f9d976;
  font-size: 35px;
`;

export const MinusIcon = styled(MinusOutlined)`
  color: #f9d976;
  font-size: 35px;
`;

export const MenuLists = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0 0 50px 0;
`;

export const MenuList = styled.li`
  margin: 50px 0;
  cursor: pointer;
`;

export const Text = styled.p`
  font-size: 16px;
  :hover {
    color: #77170d;
  }
`;
