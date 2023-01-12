import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Logout } from "../../../../commons/hooks/mutaions/useMutaionLogout";
import { accessTokenState } from "../../../../commons/libraries/store";
import { InnerWrap, OuterWrap } from "../../../../commons/styles/Wrapper";
import * as S from "./style";

// prettier-ignore
const MenuList = [
  { name: "대여", url: "/rents"},
  { name: "커뮤니티", url: "/community"},
  { name: "이벤트", url: "/event"},
];

function LayoutHeader() {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const [isScroll, setIsScroll] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [logout] = useMutation(Logout);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 0 ? setIsScroll(true) : setIsScroll(false);
    });
  }, [isScroll]);

  const onClickMenuToggle = () => {
    setIsMenu((prev) => !prev);
  };

  const onClickMoveToPage = (url: string) => () => {
    router.push(`${url}`);
    setIsMenu(false);
  };

  const onClickLogout = async () => {
    try {
      await logout();
      Modal.success({
        content: "로그아웃 되었습니다!",
        afterClose() {
          router.push("/home");
          location.reload();
        },
      });
    } catch (error) {
      Modal.error({ content: "로그아웃에 실패했습니다." });
    }
  };

  return (
    <OuterWrap>
      <InnerWrap>
        <S.Header>
          <S.UserMenuWrap isScroll={isScroll}>
            {!accessToken ? (
              <S.BtnsWrap>
                <S.Btn onClick={onClickMoveToPage("/join")}>회원가입</S.Btn>
                <S.Block>|</S.Block>
                <S.Btn onClick={onClickMoveToPage("/login")}>로그인</S.Btn>
              </S.BtnsWrap>
            ) : (
              <S.BtnsWrap>
                <S.Btn onClick={onClickMoveToPage("/mypage")}>마이페이지</S.Btn>
                <S.Block>|</S.Block>
                <S.Btn onClick={onClickLogout}>로그아웃</S.Btn>
              </S.BtnsWrap>
            )}
          </S.UserMenuWrap>
          <S.MenuListWrap isScroll={isScroll}>
            <S.Logo onClick={onClickMoveToPage("/home")}>Woanso</S.Logo>
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
          </S.MenuListWrap>

          {isMenu && (
            <S.MobileMenu>
              <S.MLogo>
                <span>WoanSo</span>
                <S.MCloseBtn onClick={onClickMenuToggle}>X</S.MCloseBtn>
              </S.MLogo>
              <S.MNavagation>
                <ul>
                  {MenuList.map((el) => {
                    return (
                      <li onClick={onClickMoveToPage(el.url)}>{el.name}</li>
                    );
                  })}
                </ul>
              </S.MNavagation>
            </S.MobileMenu>
          )}
        </S.Header>
      </InnerWrap>
    </OuterWrap>
  );
}

export default LayoutHeader;
