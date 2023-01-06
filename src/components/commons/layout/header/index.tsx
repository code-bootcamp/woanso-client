import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { Fragment, MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { Logout } from "../../../../commons/hooks/mutaions/useMutaionLogout";
import { accessTokenState } from "../../../../commons/libraries/store";
import MainBanner from "../../mainbanner";
import SliderBanner from "../../sliderBanner";
import * as S from "./style";

// prettier-ignore
const SHOW_LAYOUT = [
    "/rents",
    "/event"
  ];
export default function LayoutHeader() {
  const [accessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [logout] = useMutation(Logout);
  const isShowLayout = SHOW_LAYOUT.includes(router.asPath);

  const onClickMoveToHome = () => {
    router.push("/");
  };
  const onClickMoveToPage = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/${e.currentTarget.id}`);
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
  const UserList = [
    { name: "로그인", id: "login" },
    { name: "회원가입", id: "join" },
  ];
  const MenuList = [
    { name: "♡", id: "mypick" },
    { name: "장바구니", id: "mycart" },
    { name: "마이페이지", id: "mypage" },
  ];
  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.MenuWrap>
          <S.Logo onClick={onClickMoveToHome}>완소만화방</S.Logo>

          {!accessToken ? (
            <S.BtnsWrap>
              {UserList.map((el) => (
                <Fragment key={el.id}>
                  <S.Btn id={el.id} onClick={onClickMoveToPage}>
                    {el.name}
                  </S.Btn>
                </Fragment>
              ))}
            </S.BtnsWrap>
          ) : (
            <S.Btn onClick={onClickLogout}>로그아웃</S.Btn>
          )}
          {accessToken ? (
            <S.BtnsWrap>
              {MenuList.map((el) => (
                <S.Btn2 id={el.id} onClick={onClickMoveToPage}>
                  {el.name}
                </S.Btn2>
              ))}
            </S.BtnsWrap>
          ) : (
            <></>
          )}
        </S.MenuWrap>

        {router.asPath === "/home" && <MainBanner />}
        {isShowLayout && <SliderBanner />}
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
