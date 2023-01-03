import styled from "@emotion/styled";

export const OuterWrap = styled.div``;
export const InnerWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 100px 50px;
`;

export const SideWrap = styled.div`
  width: 24%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const MainWrap = styled.div`
  width: 75.4%;
`;

export const UserInfoWrap = styled.div`
  text-align: center;
`;

export const UserAvatar = styled.div`
  margin: 50px 0 20px 0;
  border: 1px solid #ddd;
  border-radius: 50%;
`;

export const AvatarImg = styled.img`
  width: 120px;
  height: 120px;
  background: grey;
  border-radius: 50%;
`;

export const MenuBarWrap = styled.div`
  margin-top: 50px;
`;

export const MenuLists = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MenuList = styled.li`
  padding: 20px 0;
  font-weight: 500;
  cursor: pointer;
  :hover {
    color: #77170d;
  }
`;

export const MenuName = styled.p``;

export const SectionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const LeftWrap = styled.div`
  width: 40%;
  min-width: 240px;
  background-color: #ffff;

  padding: 50px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const RigthWrap = styled.div`
  text-align: center;
  padding: 50px;
  width: 59%;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const MiniWrap = styled.div`
  text-align: right;
  margin-bottom: 50px;
`;

export const BoxTitle = styled.div`
  font-weight: 500;
  width: 100%;
  color: #ffffff;
  background-color: #7a3831eb;
  padding: 5px 30px;
  border-radius: 4px;
  text-align: left;
`;

export const BoxSearch = styled.input`
  width: 100%;
  color: #000;
  background-color: #f4efe4;
  padding: 5px 30px;
  margin: 10px 0;
  border: none;
`;

export const ContentBox = styled.div`
  padding: 15px 30px;
  width: 100%;
  background-color: #f4efe4;
  color: #000;
  display: inline-block;
  margin-top: 10px;
  border-radius: 4px;
`;

export const ItemsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ItemWrap = styled.div`
  padding: 7px;
  display: inline-block;
`;
export const ItemName = styled.p``;
export const ItemImg = styled.img`
  width: 100px;
  height: 130px;
  object-fit: cover;
`;

export const SectionWrap2 = styled.div`
  padding: 50px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;
