import SignupBenefit from "../signupbenefit";
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
      <S.LoginWrapper>
        <S.TitleWrapper>
          <S.TitleMain>Login</S.TitleMain>
        </S.TitleWrapper>
        {/* <form onSubmit={handleSubmit(onClickSubmit)}> */}
        <S.ContentsWrapper>
          <S.Label>이메일</S.Label>
          <S.Input type="text"></S.Input>
          <S.Label>비밀번호</S.Label>
          <S.Input type="password"></S.Input>
          <S.LoginButton>로그인</S.LoginButton>
          <S.Footer>
            <S.Footer1>회원가입</S.Footer1>
            <S.Footer1>이메일/비밀번호 찾기</S.Footer1>
          </S.Footer>
        </S.ContentsWrapper>
        {/* </form> */}
        <SignupBenefit />
      </S.LoginWrapper>
    </S.Wrapper>
  );
}
