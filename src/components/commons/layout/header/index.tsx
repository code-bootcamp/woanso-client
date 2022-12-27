import * as S from "./style";

export default function LayoutHeader() {
  const onClickMoveToLogin = () => {
    console.log("라우터로 로그인페이지 연동하기");
  };

  const onClickMoveToJoin = () => {
    console.log("라우터로 회원가입페이지 연동하기");
  };

  return (
    <>
      <S.OuterWrap>
        <S.InnerWrap>
          <S.UserBtnsWrap>
            <S.UserLogin onClick={onClickMoveToLogin}>로그인</S.UserLogin>
            <S.UserJoin onClick={onClickMoveToJoin}>회원가입</S.UserJoin>
          </S.UserBtnsWrap>

          <S.FlexWrap>
            <S.LogoWrap>
              <S.LogoImg src="/logo_pink.png" />
            </S.LogoWrap>

            <S.IconsWrap>
              <S.IconBell />
              <S.IconCart />
              <S.IconStar />
              <S.IconUser />
            </S.IconsWrap>
          </S.FlexWrap>
        </S.InnerWrap>
      </S.OuterWrap>
    </>
  );
}
