import styled from "@emotion/styled";

export const OuterWrap = styled.div``;
export const InnerWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding: 100px 50px;
`;

export const SideWrap = styled.div`
  width: 25%;
`;

export const MainWrap = styled.div`
  width: 75%;
`;

export const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const UserAvatar = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
`;

export const AvatarImg = styled.img`
  width: 150px;
  height: 150px;
  background: grey;
  border-radius: 50%;
`;

export const UserName = styled.p`
  width: 150px;
  text-align: center;
`;

export const MenuBarWrap = styled.div`
  margin-top: 80px;
`;

export const MenuLists = styled.ul`
  list-style: none;
  padding: 0;
  padding-left: 50px;
`;

export const MenuList = styled.li`
  padding: 20px 0;
`;

export const MenuName = styled.p`
  :hover {
    color: #751312;
  }
  cursor: pointer;
`;

export const TopMenusWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
`;
export const ButtomMenusWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BoxBig = styled.div`
  text-align: center;
  padding: 50px;
  width: 30.5%;
  min-width: 300px;
  height: 250px;
  background-color: #d9d9d9;
  border-radius: 7px;
`;

export const BoxSmall = styled.div`
  text-align: right;
  width: 22%;
  min-width: 240px;
  height: 200px;
  background-color: #f4efe4;
  border-radius: 7px;
  padding: 50px;
`;

export const BoxTitle = styled.p`
  padding: 15px 0;
`;

export const MyGrade = styled.span`
  padding: 15px 30px;
  background-color: #751312;
  color: #ffffff;
  display: inline-block;
  margin-top: 10px;
  border-radius: 7px;
`;
