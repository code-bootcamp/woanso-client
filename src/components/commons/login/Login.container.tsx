import * as S from "./Login.styles";

export default function LoginUI() {
  const onClickSubmit = () => {
    console.log("로그인 되었습니다.");
  };

  const onClickMoveToSingUp = () => {
    console.log("회원가입 되었습니다.");
  };

  return (
    <S.Wrapper>
      <S.BackgroundImage />
      <S.LoginWrapper>
        <S.TitleWrapper>
          <S.TitleMain>Login</S.TitleMain>
        </S.TitleWrapper>
        {/* <form onSubmit={handleSubmit(onClickSubmit)}> */}
        <S.ContentsWrapper>
          <S.ID type="text"></S.ID>
          <S.Password type="password"></S.Password>
          <S.LoginButton>로그인</S.LoginButton>
          <S.Footer>
            <S.Footer1>아직 계정이 없으신가요?</S.Footer1>
            <S.Footer2 onClick={onClickMoveToSingUp}>회원가입</S.Footer2>
          </S.Footer>
        </S.ContentsWrapper>
        {/* </form> */}
      </S.LoginWrapper>
    </S.Wrapper>
  );
}
