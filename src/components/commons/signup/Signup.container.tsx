import { Modal } from "antd";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./Signup.styles";
import { useMutationSignUp } from "../../../commons/hooks/mutaions/useMutationSignUP";
import { schema_join } from "../validation/join";
import { useForm } from "react-hook-form";
import { JoinInput } from "../../../commons/styles/Input";
import { ChangeEvent, useState } from "react";
import { IUserFormType } from "../../../commons/types/formtypes/type";
import LoginHeader from "../layout/loginHeader";

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
    console.log(interest);
    if (data.password !== data.password2) {
      Modal.error({ content: "비밀번호가 다릅니다." });
      return;
    }
    if (interest === "") return;
    try {
      const result = await signUp({
        variables: {
          email: data.email,
          password: data.password,
          phone: String(data.phone),
          nickname: data.nickname,
          interest,
        },
      });
      console.log(result);
      Modal.success({ content: "회원가입을 축하합니다!!" });
      void router.push(`/login`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickCancel = () => {
    router.push(`/home`);
  };

  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <LoginHeader />
        <S.Wrapper>
          <form onSubmit={handleSubmit(onClickSignUp)}>
            <S.ContentsWrapper>
              <S.SubWrapper>
                <JoinInput
                  placeholder="이메일 주소"
                  type="text"
                  id="email"
                  {...register("email")}
                />
              </S.SubWrapper>
              <S.ErrMessage2>{errors.email?.message}</S.ErrMessage2>
              <S.SubWrapper>
                <S.Input2
                  placeholder="비밀번호"
                  type="password"
                  id="password1"
                  min={8}
                  max={16}
                  {...register("password")}
                />
              </S.SubWrapper>
              {/* <S.ErrMessage2>{errors.password?.message}</S.ErrMessage2> */}
              <S.SubWrapper>
                <S.Input3
                  placeholder="비밀번호 확인"
                  type="password"
                  id="password2"
                  min={8}
                  max={16}
                  {...register("password2")}
                />
              </S.SubWrapper>
              <S.ErrMessage2>{errors.password?.message}</S.ErrMessage2>
              <S.SubWrapper>
                <JoinInput
                  placeholder="닉네임"
                  type="text"
                  id="nickname"
                  {...register("nickname")}
                />
              </S.SubWrapper>
              <S.ErrMessage2>{errors.nickname?.message}</S.ErrMessage2>
              <S.SubWrapper>
                <JoinInput
                  placeholder="전화번호를 입력해주세요."
                  type="number"
                  id="phone"
                  {...register("phone")}
                />
              </S.SubWrapper>
              <S.ErrMessage2>{errors.phone?.message}</S.ErrMessage2>
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
              {/* {interest === "" && (
                <S.ErrMessage2>장르를 선택해주세요.</S.ErrMessage2>
              )} */}
            </S.ContentsWrapper>
            <S.ButtonWrapper>
              <S.SignupButton>회원가입 완료</S.SignupButton>
            </S.ButtonWrapper>
          </form>
        </S.Wrapper>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
