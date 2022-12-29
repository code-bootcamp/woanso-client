import styled from "@emotion/styled";
import {
  BellOutlined,
  ShoppingCartOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const OuterWrap = styled.div``;

export const InnerWrap = styled.div`
  position: relative;
`;

export const BtnsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
`;

export const MenuWrap2 = styled.div`
  padding: 50px 100px;
  position: relative;
  /* box-shadow: 0 4px 0 0 #dfe2e4, 0px 4px 8px rgb(90 0 0 / 20%); */
  background-image: url("/header_bg.jpeg");
  background-position: center;
  background-size: cover;
  height: 600px;
`;

export const Logo = styled.div`
  color: #fff;
  padding: 20px 10px;
  font-weight: bold;
  letter-spacing: 10px;
  color: #333;
  cursor: pointer;
`;

export const Btn = styled.div`
  color: #fff;
  padding: 20px 10px;
  color: #333;
  cursor: pointer;
`;

export const Btn2 = styled.div`
  color: #fff;
  padding: 0 10px;
  font-size: 20px;
  cursor: pointer;
`;

export const IconsWrap = styled.div``;

export const IconBell = styled(BellOutlined)`
  font-size: 60px;
  color: #f15046;
  margin-right: 50px;
`;

export const IconCart = styled(ShoppingCartOutlined)`
  font-size: 60px;
  color: #4399fa;
  margin-right: 50px;
`;

export const IconStar = styled(StarOutlined)`
  font-size: 60px;
  color: #f1c40f;
  margin-right: 50px;
`;

export const IconUser = styled(UserOutlined)`
  font-size: 60px;
  color: #23a674;
`;
