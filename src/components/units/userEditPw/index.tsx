import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { useMutationUpdateUser } from "../../../commons/hooks/mutaions/useMutaionUpdateUser";
import { FETCH_USER } from "../../../commons/hooks/queries/useQueryFetchUser";
import { getUserEmail } from "../../../commons/libraries/store";
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
    <S.OutWrapper>
      <S.InnerWrapper>
        <S.UserEditPwWrapper>
          <S.TitleWrapper>
            <S.Title>회원정보 수정</S.Title>
          </S.TitleWrapper>
          <S.SubTitleWrapper>
            <S.SubTitle>기본 정보</S.SubTitle>
          </S.SubTitleWrapper>
          <S.BasicWrapper>
            <S.EmailWrapper>
              <S.EmailLabel>이메일</S.EmailLabel>
              <S.Email>woanso@a.com</S.Email>
            </S.EmailWrapper>
            <S.PasswordWrapper>
              <S.PasswordLabel>새 비밀번호</S.PasswordLabel>
              <S.Password type="password" {...register("password")} />
            </S.PasswordWrapper>
            <S.PasswordWrapper>
              <S.PasswordLabel>새 비밀번호 확인</S.PasswordLabel>
              <S.Password type="password" {...register("password2")} />
            </S.PasswordWrapper>
            <S.NameWrapper>
              <S.NameLabel>닉네임</S.NameLabel>
              <S.Name />
              {/* <S.NameButton>변경</S.NameButton> */}
            </S.NameWrapper>
          </S.BasicWrapper>
          <S.AddWrapper>
            <S.PhoneNumberWrapper>
              <S.PhoneNumberLabel>전화번호</S.PhoneNumberLabel>
              <S.PhoneNumber type="number" {...register("phone")} />
              {/* <S.PhoneNumberButton>변경</S.PhoneNumberButton> */}
            </S.PhoneNumberWrapper>
            <S.LikeWrapper>
              <S.LikeLabel>관심사</S.LikeLabel>
              <S.Like type="text" {...register("interest")} />
              {/* <S.LikeButton>변경</S.LikeButton> */}
            </S.LikeWrapper>
            <S.AvatarWrapper>
              <S.AvatarLabel>아바타</S.AvatarLabel>
              <S.Avatar></S.Avatar>
              <S.AvatarButton>변경</S.AvatarButton>
            </S.AvatarWrapper>
          </S.AddWrapper>
          <S.ButtonWrapper>
            <S.SubmitButton onClick={handleSubmit(onClickEdit)}>
              확인
            </S.SubmitButton>
            <S.BackButton onClick={onClickCancle}>취소</S.BackButton>
          </S.ButtonWrapper>
        </S.UserEditPwWrapper>
      </S.InnerWrapper>
    </S.OutWrapper>
  );
}
