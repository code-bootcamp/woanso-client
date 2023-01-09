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

export default function UserEditPw() {
  const router = useRouter();
  // const [email] = useRecoilState(getUserEmail);
  // console.log(email);
  // const { data: user } = useQuery(FETCH_USER, {
  //   email,
  // });
  const [interest, setInterest] = useState("");
  const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setInterest(event.target.value);
  };

  const [updateUser] = useMutationUpdateUser();

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
          email: "red@red.com",
          updateUserInput: {
            email: "red@red.com",
            password: data.password,
            nickname: data.nickname,
            phone: String(data.phone),
            interest: data.interest,
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
        {...register("email")}
        readOnly
        defaultValue="defaultValue"
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
        readOnly
        defaultValue="defaultValue"
      />

      <UserEditInput
        type="number"
        {...register("phone")}
        readOnly
        defaultValue="010-2220-2222"
      />

      <SS.SubWrapper>
        <S.Label>장르 선택</S.Label>
        <S.CheckBoxWrap>
          <SS.CheckBox
            type="radio"
            name="장르"
            value="로맨스"
            id="romance"
            onChange={onChangeCheckbox}
          />
          <SS.CheckBoxLavel htmlFor="romance"></SS.CheckBoxLavel>
          <SS.CheckBoxTitle>로맨스</SS.CheckBoxTitle>
          <SS.CheckBox
            type="radio"
            name="장르"
            value="학원"
            id="school"
            onChange={onChangeCheckbox}
          />
          <SS.CheckBoxLavel htmlFor="school"></SS.CheckBoxLavel>
          <SS.CheckBoxTitle>학원</SS.CheckBoxTitle>
          <SS.CheckBox
            type="radio"
            name="장르"
            value="드라마/일상"
            id="drama"
            onChange={onChangeCheckbox}
          />
          <SS.CheckBoxLavel htmlFor="drama"></SS.CheckBoxLavel>
          <SS.CheckBoxTitle>드라마/일상</SS.CheckBoxTitle>
          <SS.CheckBox
            type="radio"
            name="장르"
            value="판타지"
            id="fantasy"
            onChange={onChangeCheckbox}
          />
          <SS.CheckBoxLavel htmlFor="fantasy"></SS.CheckBoxLavel>
          <SS.CheckBoxTitle>판타지</SS.CheckBoxTitle>

          <SS.CheckBox
            type="radio"
            name="장르"
            id="action"
            value="액션"
            onChange={onChangeCheckbox}
          />
          <SS.CheckBoxLavel htmlFor="action"></SS.CheckBoxLavel>
          <SS.CheckBoxTitle>액션</SS.CheckBoxTitle>

          <SS.CheckBox
            type="radio"
            name="장르"
            value="추리/공포"
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
