import styled from "@emotion/styled";

export const MypageWrap = styled.div`
  width: 100%;
  padding: 100px 16%;
`;

export const SideWrap = styled.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const SideWrapTop = styled.div`
  background-color: #cdcdcd;
  width: 100%;
  height: 230px;
`;

export const SideWrapBottom = styled.div``;

export const UserInfoWrap = styled.div`
  text-align: center;
`;
export const UserAvatar = styled.div`
  margin: 50px 0 20px 0;
  border: 1px solid #ddd;
  border-radius: 50%;
  cursor: pointer;
`;

export const AvatarImg = styled.img`
  width: 120px;
  height: 120px;
  background: grey;
  border-radius: 50%;
`;
export const UserGrade = styled.span`
  background-color: #ddd;
  border-radius: 4px;
  color: white;
  font-size: 0.8rem;
  padding: 0.2rem 0.4rem;
  margin-right: 4px;
`;

export const MenuBarWrap = styled.div`
  margin-top: 20px;
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
  margin-bottom: 50px;
`;

export const BoxTitle = styled.div`
  font-weight: 500;
  width: 100%;
  color: #ffffff;
  background-color: #7a3831eb;
  padding: 5px 30px;
  border-radius: 4px;
  margin-bottom: 10px;
  text-align: center;
`;

export const ContentBox = styled.div`
  padding: 4px 8px;
  width: 100%;
  color: #000;
  border: 1px solid #ddd;
  margin-bottom: 2px;
  cursor: pointer;
  &:hover {
    background-color: #f4ffe499;
  }
`;

export const ItemsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
export const ItemWrap = styled.div`
  margin: 7px;
  width: calc(100% / 4 - 14px);
  display: inline-block;
  border: 1px solid #ddd;
`;
export const ItemName = styled.p``;
export const ItemImg = styled.img`
  width: 100px;
  height: 130px;
  object-fit: cover;
`;
export const NoItemImg = styled.img`
  width: 100px;
  height: 130px;
  object-fit: contain;
`;

export const SectionWrap2 = styled.div`
  padding: 50px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;
