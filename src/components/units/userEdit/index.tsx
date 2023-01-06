import * as S from "./style";

export default function UserEdit() {
  return (
    <S.OutWrapper>
      <S.InnerWrapper>
        <S.TitleWrapper>
          <S.Title>회원정보 수정</S.Title>
        </S.TitleWrapper>
        <S.ContentsWrapper>
          <S.ContentsTitle>비밀번호 확인</S.ContentsTitle>
          <S.Contents>개인정보보호를 위해 비밀번호를 입력해 주세요.</S.Contents>
        </S.ContentsWrapper>
        <S.InputWrapper>
          <S.InputName>비밀번호</S.InputName>
          <S.InputContents></S.InputContents>
        </S.InputWrapper>
        <S.ButtonWrapper>
          <S.Button>확인</S.Button>
        </S.ButtonWrapper>
      </S.InnerWrapper>
    </S.OutWrapper>
  );
}
