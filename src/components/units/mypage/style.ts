import styled from "@emotion/styled";

export const MypageWrap = styled.div`
  width: 100%;
  padding: 180px 16%;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const SideWrap = styled.div`
  background-color: #ffffff;
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px; */
  border-right: 1px solid rgba(205, 205, 205, 0.7);
`;

export const SideWrapTop = styled.div`
  /* background-color: #cdcdcd; */
  width: 100%;
  height: 230px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgba(205, 205, 205, 0.7);
`;

export const AvatarWrap = styled.div`
  width: 90px;
  height: 90px;
  position: relative;
`;

export const AvatarImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AvatarImg2 = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: contain;
`;

export const EditIcon = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid #cdcdcd;
  position: absolute;
  bottom: -5px;
  right: -5px;
`;

export const EditIconImg = styled.img`
  object-fit: contain;
  width: 100%;
`;

export const UserName = styled.p`
  color: #333;
`;

export const SideWrapBottom = styled.div`
  height: calc(620px -230px);
  padding: 20px 0;
`;

interface IsActiveProps {
  isActive: string;
}

export const MenuLists = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MenuList = styled.li`
  padding: 20px 0;
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: #77170d;
  }
  color: ${(props: IsActiveProps) => (props.isActive ? "#77170d" : "#000000")};
`;

export const MenuName = styled.p``;

export const ContentsWrap = styled.div`
  width: calc(1000px - 230px);
  height: 620px;
  background: #ffffff;
`;
