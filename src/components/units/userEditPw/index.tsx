import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutationUpdateUser } from "../../../commons/hooks/mutaions/useMutaionUpdateUser";
import { UserEditInput } from "../../../commons/styles/Input";
import * as S from "./style";
import * as SS from "./../../commons/signup/Signup.styles";
import { ChangeEvent, useState } from "react";
import { useQueryFetchUserLoggendIn } from "../../../commons/hooks/queries/useQueryFetchUserLoggedIn";
import { IUserUpdateFormType } from "../../../commons/types/formtypes/type";

export default function UserEditPw() {
  const router = useRouter();
  const [interest, setInterest] = useState("");
  const { data: user } = useQueryFetchUserLoggendIn();
  const [updateUser] = useMutationUpdateUser();
  const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setInterest(event.target.value);
  };

  const { register, handleSubmit } = useForm<IUserUpdateFormType>({
    mode: "onChange",
  });

  const onClickEdit = async (data: IUserUpdateFormType) => {
    const phone = String(data.phone);
    try {
      await updateUser({
        variables: {
          email: String(user.fetchUserLoggedIn.email),
          updateUserInput: {
            email: String(user.fetchUserLoggedIn.email),
            nickname: data.nickname
              ? data.nickname
              : user.fetchUserLoggedIn.nickname,
            phone: data.phone ? phone : user.fetchUserLoggedIn.phone,
            interest:
              interest !== "" ? interest : user.fetchUserLoggedIn.interest,
            thumbnail: user.fetchUserLoggedIn.thumbnail,
          },
        },
      });
      Modal.success({
        content: "회원정보가 수정되었습니다.",
        afterClose() {
          router.push("/mypage");
        },
      });
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

      <UserEditInput
        type="name"
        {...register("nickname")}
        defaultValue={user?.fetchUserLoggedIn.nickname}
      />

      <UserEditInput
        type="number"
        {...register("phone")}
        defaultValue={user?.fetchUserLoggedIn.phone}
      />

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

      <S.ButtonWrapper>
        <S.BackButton onClick={onClickCancle}>취소</S.BackButton>
        <S.SubmitButton onClick={handleSubmit(onClickEdit)}>
          회원정보 수정
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.UserEditPwWrap>
  );
}
