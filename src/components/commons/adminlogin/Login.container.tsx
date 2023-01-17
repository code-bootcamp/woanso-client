import { gql, useMutation } from "@apollo/client";
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
import { Input1, Input4 } from "../../../commons/styles/Input";
import ErrMessage from "../../../commons/styles/Error";
import {
  getAccessToken,
  RESTORE_ACCESS_TOKEN_FOR_ADMIN,
} from "../../../commons/libraries/getAccessToken";
import PageMoveBtn from "../../../commons/hoc/PageMoveBtn";

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
      getAccessToken(RESTORE_ACCESS_TOKEN_FOR_ADMIN);
      void router.push(`/adminpage`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickFind = () => {
    router.push("/adminIdpwFind");
  };

  return (
    <S.All>
      <LoginHeader />
      <S.Wrapper>
        <InnerWrap>
          <S.LoginWrapper>
            <form onSubmit={handleSubmit(onClickLogin)}>
              <S.ContentsWrapper>
                <div>
                  <Input1
                    type="text"
                    {...register("email")}
                    placeholder="이메일"
                  ></Input1>
                </div>
                <div>
                  <Input4
                    type="password"
                    {...register("password")}
                    placeholder="비밀번호"
                  ></Input4>
                  <S.Box onClick={onClickFind}>아이디 찾기</S.Box>
                  <ErrMessage text={errors.email?.message} />
                </div>
                <S.LoginButtonWrap>
                  <PageMoveBtn id="adminlogin" text="로그인" />
                  <PageMoveBtn id="adminsignup" text="회원가입" />
                </S.LoginButtonWrap>
              </S.ContentsWrapper>
            </form>
          </S.LoginWrapper>
        </InnerWrap>
      </S.Wrapper>
    </S.All>
  );
}
