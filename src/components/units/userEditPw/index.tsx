import { useMutationUpdateUser } from "../../../commons/hooks/mutaions/useMutaionUpdateUser";
import * as S from "./style";

export default function UserEditPw() {
  const [updateUser] = useMutationUpdateUser();

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
              <S.Password></S.Password>
            </S.PasswordWrapper>
            <S.PasswordWrapper>
              <S.PasswordLabel>새 비밀번호 확인</S.PasswordLabel>
              <S.Password></S.Password>
            </S.PasswordWrapper>
            <S.NameWrapper>
              <S.NameLabel>닉네임</S.NameLabel>
              <S.Name>완소</S.Name>
              <S.NameButton>변경</S.NameButton>
            </S.NameWrapper>
          </S.BasicWrapper>
          <S.AddWrapper>
            <S.PhoneNumberWrapper>
              <S.PhoneNumberLabel>전화번호</S.PhoneNumberLabel>
              <S.PhoneNumber>010-1234-5678</S.PhoneNumber>
              <S.PhoneNumberButton>변경</S.PhoneNumberButton>
            </S.PhoneNumberWrapper>
            <S.LikeWrapper>
              <S.LikeLabel>관심사</S.LikeLabel>
              <S.Like>로맨스, 드라마/일상</S.Like>
              <S.LikeButton>변경</S.LikeButton>
            </S.LikeWrapper>
            <S.AvatarWrapper>
              <S.AvatarLabel>아바타</S.AvatarLabel>
              <S.Avatar></S.Avatar>
              <S.AvatarButton>변경</S.AvatarButton>
            </S.AvatarWrapper>
          </S.AddWrapper>
          <S.ButtonWrapper>
            <S.SubmitButton>확인</S.SubmitButton>
            <S.BackButton>취소</S.BackButton>
          </S.ButtonWrapper>
        </S.UserEditPwWrapper>
      </S.InnerWrapper>
    </S.OutWrapper>
  );
}
