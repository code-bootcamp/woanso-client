import styled from "@emotion/styled";

export const OuterWrap = styled.div``;
export const InnerWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding: 100px 50px;
`;

export const SideWrap = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const ActiveWrap = styled.div`
  width: 100%;
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

export const SectionsWrap = styled.div``;

export const SectionWrap = styled.div`
  padding: 50px 40px;
  width: 760px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const MiniWrap = styled.div`
  display: flex;
  text-align: right;
  gap: 10px;
  margin-bottom: 10px;
`;

export const BoxTitle = styled.div`
  font-weight: bold;
  width: 100%;
  color: #ffffff;
  background-color: #7a3831eb;
  padding: 8px 15px;
  border-radius: 4px;
`;

export const BoxSearch = styled.input`
  width: 100%;
  color: #000;
  background-color: #f4efe4;
  padding: 5px 15px;
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

  span {
    font-weight: bold;
    margin-left: 3px;
  }
`;

export const ItemsWrap = styled.div`
  height: 170px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  gap: 6px;
`;

export const ItemWrap = styled.div`
  width: calc(100% / 6 - 5px);
  height: 160px;
  display: inline-block;
  margin-bottom: 10px;
`;

export const ItemName = styled.p``;

export const ItemImg = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
`;
