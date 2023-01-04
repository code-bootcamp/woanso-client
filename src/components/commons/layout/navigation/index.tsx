import { useRouter } from "next/router";
import { useState } from "react";
import Searchbar from "../../searchbar";
import * as S from "./styles";

export default function LayoutNavigation() {
  const router = useRouter();

  const MenuList = [
    {
      name: "홈",
      //   id: "home",
      url: "/home",
    },
    {
      name: "대여",
      //   id: "rents",
      url: "/rents",
    },
    {
      name: "커뮤니티",
      //   id: "freeboards",
      url: "/freeboards",
    },
    {
      name: "이벤트",
      //   id: "event",
      url: "/event",
    },
    {
      name: "마이페이지",
      //   id: "mypage",
      url: "/mypage",
    },
  ];

  const [isMenu, setIsMenu] = useState(false);

  const onClickMenuToggle = () => {
    setIsMenu((prev) => !prev);
  };

  const onClickMoveToPage = (url: string) => () => {
    router.push(`${url}`);
    setIsMenu(false);
  };

  return (
    <>
      <S.OuterWrap>
        <S.InnerWrap>
          <S.Navigation>
            <ul>
              {MenuList.map((el) => {
                return <li onClick={onClickMoveToPage(el.url)}>{el.name}</li>;
              })}
            </ul>
            <S.MobileMenuBtn onClick={onClickMenuToggle}>
              <img src="/icon/menu.png" alt="" />
            </S.MobileMenuBtn>
            <S.SearchWrap>
              <S.Input placeholder="만화책을 검색하세요" />
              <S.SearchIcon>검색</S.SearchIcon>
            </S.SearchWrap>
          </S.Navigation>
        </S.InnerWrap>
      </S.OuterWrap>
      {isMenu && (
        <S.MobileMenu>
          <S.MLogo>
            <span>완소만화방</span>{" "}
            <S.MCloseBtn onClick={onClickMenuToggle}>X</S.MCloseBtn>
          </S.MLogo>
          <S.MNavagation>
            <ul>
              {MenuList.map((el) => {
                return <li onClick={onClickMoveToPage(el.url)}>{el.name}</li>;
              })}
            </ul>
          </S.MNavagation>
        </S.MobileMenu>
      )}
    </>
  );
}
