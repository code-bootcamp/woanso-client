import styled from "@emotion/styled";
import {
  BellOutlined,
  ShoppingCartOutlined,
  BookOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const OuterWrap = styled.div``;

export const InnerWrap = styled.div`
  padding: 50px 100px;
  position: relative;
  box-shadow: 0 4px 0 0 #dfe2e4, 0px 4px 8px rgb(90 0 0 / 20%);
`;

export const UserBtnsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const UserLogin = styled.div`
  margin-right: 30px;
`;

export const UserJoin = styled.div``;

export const FlexWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LogoWrap = styled.div``;

export const LogoImg = styled.img`
  width: 250px;
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
