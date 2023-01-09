import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { useMutationUpdateUser } from "../../../commons/hooks/mutaions/useMutaionUpdateUser";
import { FETCH_USER } from "../../../commons/hooks/queries/useQueryFetchUser";
import { getUserEmail } from "../../../commons/libraries/store";
import {
  UserEditInput,
  UserEditPwInput,
  UserEditPwInput2,
} from "../../../commons/styles/Input";
import { IUserFormType } from "../../../commons/types/formtypes/type";
import * as S from "./style";

export default function UserEditPw() {
  const router = useRouter();
  // const [email] = useRecoilState(getUserEmail);
  // console.log(email);
  // const { data: user } = useQuery(FETCH_USER, {
  //   email,
  // });

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

      <S.Label>장르선택</S.Label>
      <label>
        <input type="checkbox" /> some text
      </label>
      {/* <UserEditInput type="checkbox" name="romance" {...register("interest")} /> */}

      <S.ButtonWrapper>
        <S.BackButton onClick={onClickCancle}>취소</S.BackButton>
        <S.SubmitButton onClick={handleSubmit(onClickEdit)}>
          확인
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.UserEditPwWrap>
  );
}
