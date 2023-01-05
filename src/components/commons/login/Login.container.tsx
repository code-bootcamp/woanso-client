import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/libraries/store";
import { LoginInput } from "../../../commons/styles/Input";
import SignupBenefit from "../signupbenefit";
import { LOG_IN } from "./Login.queries";
import * as S from "./Login.styles";
import * as St from "../signup/Signup.styles";
import { ILoginFormData } from "./Login.types";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("이메일 아이디를 @까지 정확하게 입력해주세요.")
    .matches(
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "이메일 아이디를 @까지 정확하게 입력해주세요."
    )
    .required("이메일을 입력해주세요"),
  password: yup
    .string()
    .min(8, "영문+숫자 특수문자 조합 8~16자리를 입력해주세요.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
      "영문+숫자 특수문자 조합 8~16자리를 입력해주세요."
    )
    .required("비밀번호를 입력해주세요"),
});

export default function LoginUI() {
  const { register, handleSubmit, formState } = useForm<ILoginFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const router = useRouter();
  const Token = useRecoilState(accessTokenState);
  const [login] = useMutation(LOG_IN);

  const onClickLogin = async (data: ILoginFormData) => {
    console.log("로그인 되었습니다.");
    try {
      const result = await login({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.login.accessToken;
      if (!accessToken) {
        Modal.error({ content: "회원정보가 없습니다. 다시 확인해주세요" });
        return;
      }
      Token[1](accessToken);
      localStorage.setItem("accessToken", accessToken);
      void router.push(`/`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
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
        <form>
          <S.ContentsWrapper>
            <S.Label>이메일</S.Label>
            <div>
              <LoginInput type="text" {...register("email")}></LoginInput>
              <St.ErrMessage>{formState.errors.email?.message}</St.ErrMessage>
            </div>
            <S.Label>비밀번호</S.Label>
            <div>
              <LoginInput
                type="password"
                {...register("password")}
              ></LoginInput>
              <St.ErrMessage>
                {formState.errors.password?.message}
              </St.ErrMessage>
            </div>
            <S.LoginButtonWrap>
              <S.LoginButton type="button" onClick={handleSubmit(onClickLogin)}>
                로그인
              </S.LoginButton>
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
        </form>
        <SignupBenefit />
      </S.LoginWrapper>
    </S.Wrapper>
  );
}
