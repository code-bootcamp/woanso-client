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
      url: "/",
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

  const onClickMoveToPage = (url: string) => () => {
    router.push(`${url}`);
  };

  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.Navigation>
          <ul>
            {MenuList.map((el) => {
              return <li onClick={onClickMoveToPage(el.url)}>{el.name}</li>;
            })}
          </ul>
          <S.SearchWrap>
            <S.Input placeholder="만화책을 검색하세요" />
            <S.SearchIcon>검색</S.SearchIcon>
          </S.SearchWrap>
        </S.Navigation>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
