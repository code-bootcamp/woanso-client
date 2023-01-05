import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { JoinInput } from "../../../commons/styles/Input";
import {
  IMutation,
  IMutationSignUpArgs,
} from "../../../commons/types/generated/types";
import { SIGN_UP } from "./Signup.queries";
import * as S from "./Signup.styles";
import { ISignUpFormData } from "./Signup.types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ChangeEvent, useState } from "react";

export const schema = yup.object({
  email: yup
    .string()
    .email("이메일 아이디를 @까지 정확하게 입력해주세요.")
    .matches(
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "이메일 아이디를 @까지 정확하게 입력해주세요."
    )
    .required("필수 형식입니다"),
  nickname: yup.string().required("필수 형식입니다"),
  password: yup
    .string()
    .min(8, "영문+숫자 특수문자 조합 8~16자리를 입력해주세요.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
      "영문+숫자 특수문자 조합 8~16자리를 입력해주세요."
    )
    .required("필수 형식입니다"),
  phone: yup
    .string()
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, "전화번호 형식에 맞지 않습니다.")
    .required("필수 형식입니다"),
  interest: yup.string().required("필수 형식입니다"),
});

export default function SignupUI() {
  const [interest, setInterest] = useState("");

  const { register, handleSubmit, formState } = useForm<ISignUpFormData>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const router = useRouter();
  const [signUp] = useMutation<Pick<IMutation, "signUp">>(SIGN_UP);

  const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setInterest(event.target.value);
  };
  console.log(interest);
  const onClickSignUp = async (data: ISignUpFormData) => {
    try {
      await signUp({
        variables: {
          email: data.email,
          password: data.password,
          nickname: data.nickname,
          interest: interest,
          phone: data.phone,
        },
      });
      console.log(data.email);
      Modal.success({ content: "회원가입을 축하합니다!!" });
      void router.push(`/login`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickCancel = () => {
    router.push(`/`);
  };
  return (
    <S.OuterWrap>
      <S.InnerWrap>
        <S.Wrapper>
          <S.TitleWrapper>
            <S.TitleMain>회원가입</S.TitleMain>
            <S.TitleSub>Sign up</S.TitleSub>
          </S.TitleWrapper>
          <form>
            <S.ContentsWrapper>
              <S.SubWrapper>
                <S.Label>닉네임</S.Label>
                <div>
                  <JoinInput
                    placeholder="사용할 닉네임을 입력해주세요."
                    type="text"
                    {...register("nickname")}
                  ></JoinInput>
                  <S.ErrMessage>
                    {formState.errors.nickname?.message}
                  </S.ErrMessage>
                </div>
              </S.SubWrapper>
              <S.SubWrapper>
                <S.Label>이메일</S.Label>
                <div>
                  <JoinInput
                    placeholder="이메일 아이디를 @까지 정확하게 입력해주세요."
                    type="text"
                    {...register("email")}
                  ></JoinInput>
                  <S.ErrMessage>{formState.errors.email?.message}</S.ErrMessage>
                </div>
              </S.SubWrapper>
              <S.SubWrapper>
                <S.Label>비밀번호</S.Label>
                <div>
                  <JoinInput
                    placeholder="영문+숫자 특수문자 조합 8~16자리를 입력해주세요."
                    type="password"
                    {...register("password")}
                  ></JoinInput>
                  <S.ErrMessage>
                    {formState.errors.password?.message}
                  </S.ErrMessage>
                </div>
              </S.SubWrapper>
              <S.SubWrapper>
                <S.Label>비밀번호 확인</S.Label>
                <div>
                  <JoinInput
                    placeholder="영문+숫자 특수문자 조합 8~16자리를 한번 더 입력해주세요."
                    type="password"
                    {...register("password")}
                  ></JoinInput>
                  <S.ErrMessage>
                    {formState.errors.password?.message}
                  </S.ErrMessage>
                </div>
              </S.SubWrapper>
              <S.SubWrapper>
                <S.Label>전화번호</S.Label>
                <div>
                  <JoinInput
                    placeholder="010-1234-5678"
                    type="text"
                    {...register("phone")}
                  ></JoinInput>
                  <S.ErrMessage>{formState.errors.phone?.message}</S.ErrMessage>
                </div>
              </S.SubWrapper>
              <S.SubWrapper>
                <S.Label>장르 선택</S.Label>
                <S.CheckBox
                  type="radio"
                  name="장르"
                  value="로맨스"
                  onChange={onChangeCheckbox}
                />
                로맨스
                <S.CheckBox
                  type="radio"
                  name="장르"
                  value="드라마/일상"
                  onChange={onChangeCheckbox}
                />
                드라마/일상
                <S.CheckBox
                  type="radio"
                  name="장르"
                  value="판타지"
                  onChange={onChangeCheckbox}
                />
                판타지
                <S.CheckBox
                  type="radio"
                  name="장르"
                  value="액션"
                  onChange={onChangeCheckbox}
                />
                액션
                <S.CheckBox
                  type="radio"
                  name="장르"
                  value="학원"
                  onChange={onChangeCheckbox}
                />
                학원
                <S.CheckBox
                  type="radio"
                  name="장르"
                  value="추리/공포"
                  onChange={onChangeCheckbox}
                />
                추리/공포
              </S.SubWrapper>
            </S.ContentsWrapper>
            <S.ButtonWrapper>
              {/* <S.SignupButton>회원가입하기</S.SignupButton> */}
              <S.SignupButton
                type="button"
                onClick={handleSubmit(onClickSignUp)}
              >
                회원가입
              </S.SignupButton>
              <S.BackButton type="button" onClick={onClickCancel}>
                취소
              </S.BackButton>
            </S.ButtonWrapper>
            <S.Footer>
              <S.Footer1>이미 아이디가 있으신가요?</S.Footer1>
              <S.Footer2>로그인</S.Footer2>
            </S.Footer>
          </form>
        </S.Wrapper>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
