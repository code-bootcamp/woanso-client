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
        <S.Wrapper>
          <S.TitleWrapper>
            <S.TitleMain>회원가입</S.TitleMain>
            <S.TitleSub>Sign up</S.TitleSub>
          </S.TitleWrapper>
          <form onSubmit={handleSubmit(onClickSignUp)}>
            <S.ContentsWrapper>
              <S.SubWrapper>
                <S.Label>닉네임</S.Label>
                <JoinInput
                  placeholder="사용할 닉네임을 입력해주세요."
                  type="text"
                  id="nickname"
                  {...register("nickname")}
                />
              </S.SubWrapper>
              <S.ErrMessage2>{errors.nickname?.message}</S.ErrMessage2>
              <S.SubWrapper>
                <S.Label>이메일</S.Label>
                <JoinInput
                  placeholder="이메일 아이디를 @까지 정확하게 입력해주세요."
                  type="text"
                  id="email"
                  {...register("email")}
                />
              </S.SubWrapper>
              <S.ErrMessage2>{errors.email?.message}</S.ErrMessage2>
              <S.SubWrapper>
                <S.Label>비밀번호</S.Label>
                <JoinInput
                  placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                  type="password"
                  id="password1"
                  min={8}
                  max={16}
                  {...register("password")}
                />
              </S.SubWrapper>
              <S.ErrMessage2>{errors.password?.message}</S.ErrMessage2>
              <S.SubWrapper>
                <S.Label>비밀번호 확인</S.Label>
                <JoinInput
                  placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                  type="password"
                  id="password2"
                  min={8}
                  max={16}
                  {...register("password2")}
                />
              </S.SubWrapper>
              <S.ErrMessage2>{errors.password?.message}</S.ErrMessage2>
              <S.SubWrapper>
                <S.Label>전화번호</S.Label>
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
              {interest === "" && (
                <S.ErrMessage2>장르를 선택해주세요.</S.ErrMessage2>
              )}
            </S.ContentsWrapper>
            <S.ButtonWrapper>
              <S.SignupButton>회원가입</S.SignupButton>
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
