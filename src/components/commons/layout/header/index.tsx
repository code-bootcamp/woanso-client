import { useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { Fragment, MouseEvent } from "react";
import { useRecoilState } from "recoil";
import {
  FETCH_USER,
  useQueryFetchUser,
} from "../../../../commons/hooks/queries/useQueryFetchUser";
import {
  accessTokenState,
  getUserEmail,
} from "../../../../commons/libraries/store";
import MainBanner from "../../mainbanner";
import SliderBanner from "../../sliderBanner";
import * as S from "./style";

// prettier-ignore
const SHOW_LAYOUT = [
    "/rents",
    "/event"
  ];

export default function LayoutHeader() {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const [email] = useRecoilState(getUserEmail);
  const isShowLayout = SHOW_LAYOUT.includes(router.asPath);
  // const { data } = useQueryFetchUser(email);
  const { data } = useQuery(FETCH_USER, {
    variables: { email: String(email) },
  });

  const onClickMoveToHome = () => {
    router.push("/");
  };
  const onClickMoveToPage = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/${e.currentTarget.id}`);
  };
  const onClickLogout = () => {
    Modal.success({
      content: "로그아웃 되었습니다!",
      afterClose() {
        router.push("/");
      },
    });
  };
  const LoginBeforeMenuList = [
    { name: "로그인", id: "login" },
    { name: "회원가입", id: "join" },
  ];

  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.MenuWrap>
          <S.Logo onClick={onClickMoveToHome}>완소만화방</S.Logo>

          {!accessToken ? (
            <S.BtnsWrap>
              {LoginBeforeMenuList.map((el) => (
                <Fragment key={el.id}>
                  <S.Btn id={el.id} onClick={onClickMoveToPage}>
                    {el.name}
                  </S.Btn>
                </Fragment>
              ))}
            </S.BtnsWrap>
          ) : (
            <S.BtnsWrap>
              <S.UserName>{data?.fetchUser.nickname}님</S.UserName>
              <S.UserPoint>{data?.fetchUser.balance}P</S.UserPoint>
              <S.Btn onClick={onClickLogout}>로그아웃</S.Btn>
            </S.BtnsWrap>
          )}
        </S.MenuWrap>

        {router.asPath === "/home" && <MainBanner />}
        {isShowLayout && <SliderBanner />}
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
