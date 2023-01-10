import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutationUpdateUser } from "../../../commons/hooks/mutaions/useMutaionUpdateUser";
import {
  UserEditInput,
  UserEditPwInput,
  UserEditPwInput2,
} from "../../../commons/styles/Input";
import { IUserFormType } from "../../../commons/types/formtypes/type";
import * as S from "./style";
import * as SS from "./../../commons/signup/Signup.styles";
import { ChangeEvent, useState } from "react";
import { useQueryFetchUserLoggendIn } from "../../../commons/hooks/queries/useQueryFetchUserLoggedIn";

export default function UserEditPw() {
  const router = useRouter();
  const [interest, setInterest] = useState("");
  const { data: user } = useQueryFetchUserLoggendIn();
  const [updateUser] = useMutationUpdateUser();

  const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setInterest(event.target.value);
  };

  const { register, handleSubmit } = useForm<IUserFormType>({
    mode: "onChange",
  });
  const onClickEdit = async (data: IUserFormType) => {
    if (data.password !== data.password2) {
      Modal.error({ content: "비밀번호가 다릅니다. 비밀번호를 확인해주세요!" });
      return;
    }
    try {
      const result = await updateUser({
        variables: {
          email: String(user.fetchUserLoggedIn.email),
          updateUserInput: {
            email: String(user.fetchUserLoggedIn.email),
            password: data.password,
            nickname: data.nickname
              ? data.nickname
              : user.fetchUserLoggedIn.nickname,
            phone: data.phone
              ? String(data.phone)
              : user.fetchUserLoggedIn.phone,
            interest: data.interest
              ? data.interest
              : user.fetchUserLoggedIn.interest,
          },
        },
      });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickCancle = () => {
    Modal.error({
      content: "취소되었습니다.",
      afterClose() {
        router.push("/mypage");
      },
    });
  };

  return (
    <S.UserEditPwWrap>
      <S.Title>개인 정보 수정</S.Title>

      <UserEditInput
        type="email"
        readOnly
        defaultValue={user?.fetchUserLoggedIn.email}
      />
      <UserEditPwInput
        type="password"
        placeholder="새 비밀번호"
        {...register("password")}
      />

      <UserEditPwInput2
        type="password"
        placeholder="새 비밀번호 확인"
        {...register("password2")}
      />

      <UserEditInput
        type="name"
        {...register("nickname")}
        defaultValue={user?.fetchUserLoggedIn.nickname}
      />

      <UserEditInput
        type="number"
        {...register("phone")}
        defaultValue={Number(user?.fetchUserLoggedIn.phone)}
      />

      <SS.SubWrapper>
        <S.Label>장르 선택</S.Label>
        <S.CheckBoxWrap>
          <SS.CheckBox
            type="radio"
            name="장르"
            value="romance"
            id="romance"
            onChange={onChangeCheckbox}
          />
          <SS.CheckBoxLavel htmlFor="romance"></SS.CheckBoxLavel>
          <SS.CheckBoxTitle>로맨스</SS.CheckBoxTitle>
          <SS.CheckBox
            type="radio"
            name="장르"
            value="school"
            id="school"
            onChange={onChangeCheckbox}
          />
          <SS.CheckBoxLavel htmlFor="school"></SS.CheckBoxLavel>
          <SS.CheckBoxTitle>학원</SS.CheckBoxTitle>
          <SS.CheckBox
            type="radio"
            name="장르"
            value="drama"
            id="drama"
            onChange={onChangeCheckbox}
          />
          <SS.CheckBoxLavel htmlFor="drama"></SS.CheckBoxLavel>
          <SS.CheckBoxTitle>드라마/일상</SS.CheckBoxTitle>
          <SS.CheckBox
            type="radio"
            name="장르"
            value="fantasy"
            id="fantasy"
            onChange={onChangeCheckbox}
          />
          <SS.CheckBoxLavel htmlFor="fantasy"></SS.CheckBoxLavel>
          <SS.CheckBoxTitle>판타지</SS.CheckBoxTitle>

          <SS.CheckBox
            type="radio"
            name="장르"
            id="action"
            value="action"
            onChange={onChangeCheckbox}
          />
          <SS.CheckBoxLavel htmlFor="action"></SS.CheckBoxLavel>
          <SS.CheckBoxTitle>액션</SS.CheckBoxTitle>

          <SS.CheckBox
            type="radio"
            name="장르"
            value="horror"
            id="horror"
            onChange={onChangeCheckbox}
          />
          <SS.CheckBoxLavel htmlFor="horror"></SS.CheckBoxLavel>
          <SS.CheckBoxTitle>추리/공포</SS.CheckBoxTitle>
        </S.CheckBoxWrap>
      </SS.SubWrapper>

      <S.ButtonWrapper>
        <S.BackButton onClick={onClickCancle}>취소</S.BackButton>
        <S.SubmitButton onClick={handleSubmit(onClickEdit)}>
          회원정보 수정
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.UserEditPwWrap>
  );
}
