import { useRouter } from "next/router";
import { Fragment } from "react";
import * as S from "./style";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickMoveToHome = () => {
    router.push("/");
  };

  const onClickMoveToPage = (e) => {
    router.push(`/${e.currentTarget.id}`);
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
          <S.Logo ocClick={onClickMoveToHome}>WoanSo</S.Logo>
          <S.BtnsWrap>
            {UserList.map((el) => (
              <Fragment key={el.id}>
                <S.Btn id={el.id} onClick={onClickMoveToPage}>
                  {el.name}
                </S.Btn>
              </Fragment>
            ))}
          </S.BtnsWrap>
        </S.MenuWrap>

        <S.MenuWrap2>
          <S.BtnsWrap>
            {MenuList.map((el) => (
              <S.Btn2 id={el.id} onClick={onClickMoveToPage}>
                {el.name}
              </S.Btn2>
            ))}
          </S.BtnsWrap>
        </S.MenuWrap2>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
