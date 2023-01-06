import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { LoginInput } from "../../../commons/styles/Input";
import SignupBenefit from "../signupbenefit";
import { LOG_IN } from "./Login.queries";
import * as S from "./Login.styles";
import * as St from "../signup/Signup.styles";
import { ILoginFormData } from "./Login.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IMutation,
  IMutationLoginArgs,
} from "../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  getUserEmail,
} from "../../../commons/libraries/store";
import { schema_login } from "../validation/login";

export default function LoginUI() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userEmail, setUserEmail] = useRecoilState(getUserEmail);
  const [login] = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(
    LOG_IN
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: yupResolver(schema_login),
    mode: "onChange",
  });

  const onClickLogin = async (data: ILoginFormData) => {
    try {
      const result = await login({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.login;
      if (accessToken === undefined || accessToken === null) {
        Modal.error({ content: "회원정보가 없습니다. 다시 확인해주세요" });
        return;
      }
      setAccessToken(accessToken);
      setUserEmail(data.email);
      void router.push(`/home`);
      console.log("유저 로그인", data);
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
        <form onSubmit={handleSubmit(onClickLogin)}>
          <S.ContentsWrapper>
            <S.Label>이메일</S.Label>
            <div>
              <LoginInput type="text" {...register("email")}></LoginInput>
              <St.ErrMessage>{errors.email?.message}</St.ErrMessage>
            </div>
            <S.Label>비밀번호</S.Label>
            <div>
              <LoginInput
                type="password"
                {...register("password")}
              ></LoginInput>
              <St.ErrMessage>{errors.password?.message}</St.ErrMessage>
            </div>
            <S.LoginButtonWrap>
              <S.LoginButton>로그인</S.LoginButton>
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
