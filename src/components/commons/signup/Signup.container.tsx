import { JoinInput } from "../../../commons/styles/Input";
import { SubmitButton1, CancelButton } from "../../../commons/styles/Button"
import * as S from "./Signup.styles";

export default function SignupUI() {
  const onClickSubmit = () => {};

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
              ></JoinInput>
            </S.SubWrapper>
            <S.SubWrapper>
              <S.Label>이메일</S.Label>
              <JoinInput
                placeholder="이메일 아이디를 @까지 정확하게 입력해주세요."
                type="text"
              ></JoinInput>
            </S.SubWrapper>
            <S.SubWrapper>
              <S.Label>비밀번호</S.Label>
              <JoinInput
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                type="password"
              ></JoinInput>
            </S.SubWrapper>
            <S.SubWrapper>
              <S.Label>비밀번호 확인</S.Label>
              <JoinInput
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                type="password"
              ></JoinInput>
            </S.SubWrapper>
            <S.SubWrapper>
              <S.Label>전화번호</S.Label>
              <JoinInput
                placeholder="전화번호를 입력해주세요."
                type="text"
              ></JoinInput>
            </S.SubWrapper>
            <S.SubWrapper1>
              <S.Label>장르 선택</S.Label>
              <S.CheckBoxWrapper>
              <S.CheckBox type="radio" name="Genre"/>
              로맨스
              <S.CheckBox type="radio" name="Genre" />
              드라마/일상
              <S.CheckBox type="radio" name="Genre" />
              판타지
              <S.CheckBox type="radio" name="Genre"/>
              액션
              <S.CheckBox type="radio" name="Genre"/>
              학원
              <S.CheckBox type="radio" name="Genre"/>
              추리/공포
              </S.CheckBoxWrapper>
            
            </S.SubWrapper1>
          </S.ContentsWrapper>
          <S.ButtonWrapper>
            {/* <S.SignupButton>회원가입하기</S.SignupButton> */}
            <SubmitButton1>회원가입</SubmitButton1>
            <CancelButton>취소</CancelButton>
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
