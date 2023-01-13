import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ADMIN_LOGIN } from "./Login.queries";
import * as S from "./Login.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IMutation,
  IMutationAdminLoginArgs,
} from "../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/libraries/store";
import { ILoginFormType } from "../../../commons/types/formtypes/type";
import { InnerWrap } from "../../../commons/styles/Wrapper";
import LoginHeader from "../layout/loginHeader";
import { schema_login } from "../validation/schema";
import { Input3 } from "../../../commons/styles/Input";
import ErrMessage from "../../../commons/styles/Error";

export default function AdminLoginUI() {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [adminLogin] = useMutation<
    Pick<IMutation, "adminLogin">,
    IMutationAdminLoginArgs
  >(ADMIN_LOGIN);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormType>({
    resolver: yupResolver(schema_login),
    mode: "onChange",
  });

  const onClickLogin = async (data: ILoginFormType) => {
    try {
      const result = await adminLogin({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.adminLogin;
      if (accessToken === undefined || accessToken === null) {
        Modal.error({ content: "회원정보가 없습니다. 다시 확인해주세요" });
        return;
      }
      setAccessToken(accessToken);

      void router.push(`/adminpage`);
      console.log("어드민 로그인", data);
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
    <S.All>
      <LoginHeader />
      <S.Wrapper>
        <InnerWrap>
          <S.LoginWrapper>
            {/* <S.TitleWrapper> */}
            {/* <S.TitleMain>Login</S.TitleMain> */}
            {/* </S.TitleWrapper> */}
            <form onSubmit={handleSubmit(onClickLogin)}>
              <S.ContentsWrapper>
                {/* <S.Label>이메일</S.Label> */}
                <div>
                  <Input3
                    type="text"
                    {...register("email")}
                    placeholder="이메일"
                  ></Input3>
                  {/* <St.ErrMessage>{errors.email?.message}</St.ErrMessage> */}
                </div>
                {/* <S.Label>비밀번호</S.Label> */}
                <div>
                  <S.Input1
                    type="password"
                    {...register("password")}
                    placeholder="비밀번호"
                  ></S.Input1>
                  <S.Box>아이디 찾기/비밀번호 재설정</S.Box>
                  <ErrMessage text={errors.password?.message} />
                </div>
                <S.LoginButtonWrap>
                  <S.LoginButton>로그인</S.LoginButton>
                  {/* <S.SignupButton>회원가입</S.SignupButton> */}
                </S.LoginButtonWrap>
                {/* <S.Footer>
              <S.Footer1 onClick={onClickMoveToSingUp}>회원가입</S.Footer1>
              <S.Footer1 onClick={onClickFind}>이메일/비밀번호 찾기</S.Footer1>
            </S.Footer> */}
                {/* <S.SnsLoginWrap>
              <S.KakaoLogin>
                <S.IconImg src="/icon/login_kakao.png" />
              </S.KakaoLogin>
              <S.NaverLogin>
                <S.IconImg src="/icon/login_naver.png" />
              </S.NaverLogin>
              <S.GoogleLogin>
                <S.IconImg src="/icon/login_google.png" />
              </S.GoogleLogin>
            </S.SnsLoginWrap> */}
              </S.ContentsWrapper>
            </form>
            {/* <SignupBenefit /> */}
          </S.LoginWrapper>
        </InnerWrap>
      </S.Wrapper>
    </S.All>
  );
}
