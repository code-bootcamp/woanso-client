import { useRouter } from "next/router";
import { LoginInput } from "../../../commons/styles/Input";
import SignupBenefit from "../signupbenefit";
import * as S from "./Login.styles";

export default function LoginUI() {
  const router = useRouter();

  const onClickSubmit = () => {
    console.log("로그인 되었습니다.");
  };

  const onClickMoveToSingUp = () => {
    router.push("/join");
  };

  const onClickFind = () => {
    router.push("/idpwFind");
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
          <LoginInput type="text"></LoginInput>
          <S.Label>비밀번호</S.Label>
          <LoginInput type="password"></LoginInput>
          <S.LoginButtonWrap>
            <S.LoginButton onClick={onClickSubmit}>로그인</S.LoginButton>
          </S.LoginButtonWrap>
          <S.Footer>
            <S.Footer1 onClick={onClickMoveToSingUp}>회원가입</S.Footer1>
            <S.Footer1 onClick={onClickFind}>이메일/비밀번호 찾기</S.Footer1>
          </S.Footer>
          <S.SnsLoginWrap>
            <S.KakaoLogin>
              <S.IconImg src="/icon/login_kakao.png" />
            </S.KakaoLogin>
            <S.NaverLogin>
              <S.IconImg src="/icon/login_naver.png" />
            </S.NaverLogin>
            <S.GoogleLogin>
              <S.IconImg src="/icon/login_google.png" />
            </S.GoogleLogin>
          </S.SnsLoginWrap>
        </S.ContentsWrapper>
        {/* </form> */}
        <SignupBenefit />
      </S.LoginWrapper>
    </S.Wrapper>
  );
}
