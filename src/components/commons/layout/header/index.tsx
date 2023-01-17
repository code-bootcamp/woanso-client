import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Logout } from "../../../../commons/hooks/mutaions/useMutaionLogout";
import { useQueryFetchComicsWithTitle } from "../../../../commons/hooks/queries/useQueryFetchComicsWithTitle";
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
  const [search, setSearch] = useState("");
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
          location.reload();
          router.push("/home");
        },
      });
    } catch (error) {
      Modal.error({ content: "로그아웃에 실패했습니다." });
    }
  };

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  const { data: resultSearch } = useQueryFetchComicsWithTitle(search);

  const onClickMoveToBook = () => {
    if (resultSearch?.fetchComicsWithTitle.length === 0) {
      Modal.error({ content: "검색결과를 찾을 수 없습니다." });
      return;
    } else {
      router.push(`/rents/${resultSearch?.fetchComicsWithTitle[0]?.comicId}`);
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
          <S.MenuWrap isScroll={isScroll}>
            <S.MenuListWrap>
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
                <S.Input
                  placeholder="만화책을 검색하세요"
                  type="text"
                  onChange={onChangeSearch}
                />
                <S.SearchIcon onClick={onClickMoveToBook} />
              </S.SearchWrap>
            </S.MenuListWrap>
          </S.MenuWrap>

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
