import { Modal } from "antd";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./styles";
import { schema_join } from "../validation/schema";
import { useForm } from "react-hook-form";
import { Input1, Input2, Input3 } from "../../../commons/styles/Input";
import { IAdminFormType } from "../../../commons/types/formtypes/type";
import LoginHeader from "../layout/loginHeader";
import { SubmitButton } from "../../../commons/styles/Button";
import ErrMessage from "../../../commons/styles/Error";
import { useMutationSignUpForAdmin } from "../../../commons/hooks/mutaions/useMutationSignupForAdmin";

export default function AdminSignupUI() {
  const router = useRouter();
  const [signUpForAdmin] = useMutationSignUpForAdmin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAdminFormType>({
    resolver: yupResolver(schema_join),
    mode: "onChange",
  });

  const onClickSignUp = async (data: IAdminFormType) => {
    if (data.password !== data.password2) {
      Modal.error({ content: "비밀번호가 다릅니다." });
      return;
    }
    const phone = "0" + String(data.phone);
    try {
      await signUpForAdmin({
        variables: {
          email: data.email,
          password: data.password,
          phone,
          nickname: data.nickname,
        },
      });
      Modal.success({ content: "회원가입을 축하합니다!!" });
      void router.push(`/adminlogin`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <LoginHeader />
        <S.Wrapper>
          <form onSubmit={handleSubmit(onClickSignUp)}>
            <S.ContentsWrapper>
              <S.SubWrapper>
                <Input3
                  placeholder="이메일 주소"
                  type="text"
                  id="email"
                  {...register("email")}
                />
              </S.SubWrapper>
              <ErrMessage text={errors.email?.message} />
              <S.SubWrapper>
                <Input1
                  placeholder="비밀번호"
                  type="password"
                  id="password1"
                  min={8}
                  max={16}
                  {...register("password")}
                />
              </S.SubWrapper>
              <S.SubWrapper>
                <Input2
                  placeholder="비밀번호 확인"
                  type="password"
                  id="password2"
                  min={8}
                  max={16}
                  {...register("password2")}
                />
              </S.SubWrapper>
              <ErrMessage text={errors.password?.message} />
              <S.SubWrapper>
                <Input3
                  placeholder="닉네임"
                  type="text"
                  id="nickname"
                  {...register("nickname")}
                />
              </S.SubWrapper>
              <ErrMessage text={errors.nickname?.message} />
              <S.SubWrapper>
                <Input3
                  placeholder="전화번호를 입력해주세요."
                  type="number"
                  id="phone"
                  {...register("phone")}
                />
              </S.SubWrapper>
              <ErrMessage text={errors.phone?.message} />
            </S.ContentsWrapper>
            <S.ButtonWrapper>
              <SubmitButton>회원가입 완료</SubmitButton>
            </S.ButtonWrapper>
          </form>
        </S.Wrapper>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
