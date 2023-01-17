import { Modal } from "antd";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./Signup.styles";
import { useMutationSignUp } from "../../../commons/hooks/mutaions/useMutationSignUP";
import { schema_join } from "../validation/schema";
import { useForm } from "react-hook-form";
import { Input1, Input2, Input3 } from "../../../commons/styles/Input";
import { ChangeEvent, useState } from "react";
import { IUserFormType } from "../../../commons/types/formtypes/type";
import LoginHeader from "../layout/loginHeader";
import { SubmitButton } from "../../../commons/styles/Button";
import ErrMessage from "../../../commons/styles/Error";

export default function SignupUI() {
  const router = useRouter();
  const [interest, setInterest] = useState("");
  const [signUp] = useMutationSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserFormType>({
    resolver: yupResolver(schema_join),
    mode: "onChange",
  });

  const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setInterest(event.target.value);
  };

  const onClickSignUp = async (data: IUserFormType) => {
    if (data.password !== data.password2) {
      Modal.error({ content: "비밀번호가 다릅니다." });
      return;
    }
    if (interest === "") {
      Modal.error({ content: "장르를 선택해주세요." });
      return;
    }
    const phone = "0" + String(data.phone);
    try {
      await signUp({
        variables: {
          email: data.email,
          password: data.password,
          nickname: data.nickname,
          phone,
          interest: String(interest),
        },
      });
      Modal.success({ content: "회원가입을 축하합니다!!" });
      void router.push(`/login`);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "이미 존재하는 email입니다." });
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
              <S.SubWrapper>
                <S.Label>장르 선택</S.Label>
                <S.CheckBoxWrap>
                  <S.CheckBox
                    type="radio"
                    name="장르"
                    value="romance"
                    id="romance"
                    onChange={onChangeCheckbox}
                  />
                  <S.CheckBoxLavel htmlFor="romance"></S.CheckBoxLavel>
                  <S.CheckBoxTitle>로맨스</S.CheckBoxTitle>
                  <S.CheckBox
                    type="radio"
                    name="장르"
                    value="school"
                    id="school"
                    onChange={onChangeCheckbox}
                  />
                  <S.CheckBoxLavel htmlFor="school"></S.CheckBoxLavel>
                  <S.CheckBoxTitle>학원</S.CheckBoxTitle>
                  <S.CheckBox
                    type="radio"
                    name="장르"
                    value="drama"
                    id="drama"
                    onChange={onChangeCheckbox}
                  />
                  <S.CheckBoxLavel htmlFor="drama"></S.CheckBoxLavel>
                  <S.CheckBoxTitle>드라마/일상</S.CheckBoxTitle>
                  <S.CheckBox
                    type="radio"
                    name="장르"
                    value="fantasy"
                    id="fantasy"
                    onChange={onChangeCheckbox}
                  />
                  <S.CheckBoxLavel htmlFor="fantasy"></S.CheckBoxLavel>
                  <S.CheckBoxTitle>판타지</S.CheckBoxTitle>

                  <S.CheckBox
                    type="radio"
                    name="장르"
                    id="action"
                    value="action"
                    onChange={onChangeCheckbox}
                  />
                  <S.CheckBoxLavel htmlFor="action"></S.CheckBoxLavel>
                  <S.CheckBoxTitle>액션</S.CheckBoxTitle>

                  <S.CheckBox
                    type="radio"
                    name="장르"
                    value="horror"
                    id="horror"
                    onChange={onChangeCheckbox}
                  />
                  <S.CheckBoxLavel htmlFor="horror"></S.CheckBoxLavel>
                  <S.CheckBoxTitle>추리/공포</S.CheckBoxTitle>
                </S.CheckBoxWrap>
              </S.SubWrapper>
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
