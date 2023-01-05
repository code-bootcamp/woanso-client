import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { JoinInput } from "../../../commons/styles/Input";
import {
  IMutation,
  IMutationSignUpArgs,
} from "../../../commons/types/generated/types";

import * as S from "./Signup.styles";
import { ChangeEvent, useState } from "react";
import { useMutationSignUp } from "../../../commons/hooks/mutaions/UseMutationSignUP";

export default function SignupUI() {
  const [interest, setInterest] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  // const [inputs, setInputs] = useState({
  //   email: "",
  //   password: "",
  //   nickname: "",
  //   phone: "",
  //   interest: "",
  // });
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const [signUp] = useMutationSignUp();

  const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setInterest(event.target.value);
  };
  const onChangeNickname = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };
  const onChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const onClickSignUp = async () => {
    if (exptext.test(email) == false) {
      Modal.error({ content: "이메일형식이 올바르지 않습니다." });
      return;
    }
    if (password.length < 8) {
      Modal.info({ content: "비밀번호는 최소 8자 이상 16자리 이하입니다" });
      return;
    }
    if (!nickname || !interest || !phone) {
      Modal.info({ content: "필수 형식입니다" });
      return;
    }
    try {
      await signUp({
        variables: {
          email,
          password,
          phone,
          nickname,
          interest,
        },
      });
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
          {/* <form onSubmit={handleSubmit(onClickSubmit)}> */}
          <S.ContentsWrapper>
            <S.SubWrapper>
              <S.Label>닉네임</S.Label>
              <JoinInput
                placeholder="사용할 닉네임을 입력해주세요."
                type="text"
                id="nickname"
                onChange={onChangeNickname}
                required
              ></JoinInput>
            </S.SubWrapper>
            <S.SubWrapper>
              <S.Label>이메일</S.Label>
              <JoinInput
                placeholder="이메일 아이디를 @까지 정확하게 입력해주세요."
                type="text"
                id="email"
                onChange={onChangeEmail}
                required
              ></JoinInput>
            </S.SubWrapper>
            <S.SubWrapper>
              <S.Label>비밀번호</S.Label>
              <JoinInput
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                type="password"
                id="password1"
                min={8}
                max={16}
                onChange={onChangePassword}
                required
              ></JoinInput>
            </S.SubWrapper>
            <S.SubWrapper>
              <S.Label>비밀번호 확인</S.Label>
              <JoinInput
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                type="password"
                id="password2"
                min={8}
                max={16}
                onChange={onChangePassword}
                required
              ></JoinInput>
            </S.SubWrapper>
            <S.SubWrapper>
              <S.Label>전화번호</S.Label>
              <JoinInput
                placeholder="전화번호를 입력해주세요."
                type="text"
                id="phone"
                onChange={onChangePhone}
                required
              ></JoinInput>
            </S.SubWrapper>
            <S.SubWrapper>
              <S.Label>장르 선택</S.Label>
              <S.CheckBox
                type="radio"
                name="장르"
                value="로맨스"
                id="romance"
                onChange={onChangeCheckbox}
              />
              로맨스
              <S.CheckBox
                type="radio"
                name="장르"
                value="드라마/일상"
                id="drama"
                onChange={onChangeCheckbox}
              />
              드라마/일상
              <S.CheckBox
                type="radio"
                name="장르"
                value="판타지"
                id="fantasy"
                onChange={onChangeCheckbox}
              />
              판타지
              <S.CheckBox
                type="radio"
                name="장르"
                id="action"
                onChange={onChangeCheckbox}
              />
              액션
              <S.CheckBox
                type="radio"
                name="장르"
                value="학원"
                id="school"
                onChange={onChangeCheckbox}
              />
              학원
              <S.CheckBox
                type="radio"
                name="장르"
                value="추리/공포"
                id="horror"
                onChange={onChangeCheckbox}
              />
              추리/공포
            </S.SubWrapper>
          </S.ContentsWrapper>
          <S.ButtonWrapper>
            {/* <S.SignupButton>회원가입하기</S.SignupButton> */}
            <S.SignupButton onClick={onClickSignUp}>회원가입</S.SignupButton>
            <S.BackButton onClick={onClickCancel}>취소</S.BackButton>
          </S.ButtonWrapper>
          <S.Footer>
            <S.Footer1>이미 아이디가 있으신가요?</S.Footer1>
            <S.Footer2>로그인</S.Footer2>
          </S.Footer>
          {/* </form> */}
        </S.Wrapper>
      </S.InnerWrap>
    </S.OuterWrap>
  );
}
